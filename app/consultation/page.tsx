"use client";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useSendEmailConsultation } from "@/hooks/use-send-email-consultation";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { addDays, format, isWeekend } from "date-fns";
import { CalendarIcon, CheckCircle, Clock } from "lucide-react";
import { useState } from "react";

const timeSlots = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
];

const organizationTypes = [
  "Private Business",
  "Government Agency",
  "Non-Profit / NGO",
  "Educational Institution",
  "Other",
];

const projectTypes = [
  "New System Development",
  "System Modernization",
  "Digital Transformation",
  "AI / Intelligent Solutions",
  "System Integration",
  "Technology Assessment",
  "Other",
];

const Consultation = () => {
  const sendEmail = useSendEmailConsultation();
  const [date, setDate] = useState<Date | undefined>();
  const [time, setTime] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    organizationType: "",
    projectType: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!date || !time) {
      toast({
        title: "Please select a date and time",
        description:
          "Both date and time are required to schedule your consultation.",
        variant: "destructive",
      });
      return;
    }

    sendEmail.mutate(
      { ...formData, date, time },
      {
        onSuccess: () => {
          toast({
            title: "Consultation Request Submitted",
            description: `Thank you, ${formData.name}. We'll confirm your ${format(
              date,
              "MMMM d, yyyy",
            )} at ${time} consultation shortly.`,
          });

          // Reset form
          setFormData({
            name: "",
            email: "",
            phone: "",
            organization: "",
            organizationType: "",
            projectType: "",
            message: "",
          });
          setDate(undefined);
          setTime("");
        },
        onError: () => {
          toast({
            title: "Submission Failed",
            description:
              "Something went wrong while sending your request. Please try again.",
            variant: "destructive",
          });
        },
      },
    );
  };
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Disable weekends and past dates
  const disabledDays = (date: Date) => {
    return isWeekend(date) || date < new Date();
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-cream to-background">
        <div className="container-enterprise">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-gold uppercase tracking-wider mb-4">
              Schedule a Consultation
            </p>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Let&apos;s Discuss Your Project
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Schedule a confidential consultation with our team. We&apos;ll
              listen to your requirements, answer your questions, and provide
              initial recommendations at no obligation.
            </p>
          </div>
        </div>
      </section>

      {/* Consultation Form */}
      <section className="section-padding bg-background">
        <div className="container-enterprise">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Contact Information */}
                <div className="bg-card rounded-xl border border-border p-8">
                  <h2 className="text-xl font-heading font-semibold text-foreground mb-6">
                    Contact Information
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="you@organization.com"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="organization">Organization *</Label>
                      <Input
                        id="organization"
                        name="organization"
                        value={formData.organization}
                        onChange={handleInputChange}
                        placeholder="Your organization name"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="bg-card rounded-xl border border-border p-8">
                  <h2 className="text-xl font-heading font-semibold text-foreground mb-6">
                    Project Details
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-6 mb-6">
                    <div className="space-y-2">
                      <Label htmlFor="organizationType">
                        Organization Type *
                      </Label>
                      <Select
                        value={formData.organizationType}
                        onValueChange={(value) =>
                          setFormData({ ...formData, organizationType: value })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          {organizationTypes.map((type) => (
                            <SelectItem key={type} value={type}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="projectType">Project Type *</Label>
                      <Select
                        value={formData.projectType}
                        onValueChange={(value) =>
                          setFormData({ ...formData, projectType: value })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          {projectTypes.map((type) => (
                            <SelectItem key={type} value={type}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Brief Project Description</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Please describe your project or the challenges you're facing. Include any relevant context about your current systems, timeline considerations, or specific requirements."
                      rows={5}
                    />
                  </div>
                </div>

                {/* Date & Time Selection */}
                <div className="bg-card rounded-xl border border-border p-8">
                  <h2 className="text-xl font-heading font-semibold text-foreground mb-6">
                    Preferred Schedule
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label>Preferred Date *</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !date && "text-muted-foreground",
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date
                              ? format(date, "MMMM d, yyyy")
                              : "Select a date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            disabled={disabledDays}
                            hidden={{
                              before: addDays(new Date(), 1),
                              after: addDays(new Date(), 60),
                            }}
                            autoFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                    <div className="space-y-2">
                      <Label>Preferred Time (EST) *</Label>
                      <Select value={time} onValueChange={setTime}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a time">
                            {time ? (
                              <span className="flex items-center gap-2">
                                <Clock className="h-4 w-4" />
                                {time}
                              </span>
                            ) : (
                              "Select a time"
                            )}
                          </SelectValue>
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((slot) => (
                            <SelectItem key={slot} value={slot}>
                              {slot}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    All times are in Eastern Standard Time (EST). We&apos;ll
                    confirm your consultation within one business day.
                  </p>
                </div>

                <Button
                  variant="enterprise"
                  size="xl"
                  type="submit"
                  className="w-full sm:w-auto"
                >
                  Submit Consultation Request
                </Button>
              </form>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-cream rounded-xl p-8">
                <h3 className="font-heading font-semibold text-foreground mb-4">
                  What to Expect
                </h3>
                <ul className="space-y-4">
                  {[
                    "30-45 minute video or phone call",
                    "Discussion of your project requirements",
                    "Initial assessment and recommendations",
                    "Overview of our engagement approach",
                    "Answers to your questions",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-card rounded-xl border border-border p-8">
                <h3 className="font-heading font-semibold text-foreground mb-4">
                  Confidentiality
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  All information shared during the consultation is treated as
                  confidential. We do not share client information with third
                  parties without explicit consent.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  If required, we&apos;re prepared to sign non-disclosure
                  agreements before discussing sensitive project details.
                </p>
              </div>

              <div className="bg-primary rounded-xl p-8 text-primary-foreground">
                <h3 className="font-heading font-semibold mb-4">
                  No Obligation
                </h3>
                <p className="text-sm text-primary-foreground/80 leading-relaxed">
                  The initial consultation is complimentary. There&apos;s no
                  pressure and no obligation to proceed. Our goal is to
                  understand your needs and determine if we&apos;re a good fit
                  for your project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Consultation;
