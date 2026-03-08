"use client";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useSendEmailContact} from "@/hooks/use-send-email-contact";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "contact@erasstack.com",
    href: "mailto:contact@erasstack.com",
    description: "For general inquiries and correspondence",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+234 703 806 3828",
    href: "tel:+234708063828",
    description: "Monday to Friday, 9:00 AM - 6:00 PM EST",
  },
  {
    icon: MapPin,
    title: "Headquarters",
    value: "Global Operations",
    description: "Serving clients across multiple time zones",
  },
  {
    icon: Clock,
    title: "Response Time",
    value: "Within 24 hours",
    description: "For all business inquiries",
  },
];

const Contact = () => {
  const sendEmail = useSendEmailContact();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    subject: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    toast({
      title: "Message Sent",
      description:
        "Thank you for reaching out. We'll respond within 24 business hours.",
    });
    sendEmail.mutate(formData, {
      onSuccess: () => {
        toast({
          title: "Contact Form Submitted",
          description: `Thank you, ${formData.name}. We'll reach back to you shortly shortly.`,
        });

        // Reset form
        setFormData({
          name: "",
          email: "",
          organization: "",
          subject: "",
          message: "",
        });
      },
      onError: () => {
        toast({
          title: "Submission Failed",
          description:
            "Something went wrong while sending your request. Please try again.",
          variant: "destructive",
        });
      },
    });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-cream to-background">
        <div className="container-enterprise">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-gold uppercase tracking-wider mb-4">
              Contact Us
            </p>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Whether you have a question, need information, or want to discuss
              a potential project, we&apos;re here to help. Reach out and
              we&apos;ll respond promptly.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding bg-background">
        <div className="container-enterprise">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-xl border border-border p-8">
                <h2 className="text-xl font-heading font-semibold text-foreground mb-6">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
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
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="organization">Organization</Label>
                      <Input
                        id="organization"
                        name="organization"
                        value={formData.organization}
                        onChange={handleInputChange}
                        placeholder="Your organization name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="How can we help?"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Please provide details about your inquiry. The more context you can share, the better we can assist you."
                      rows={6}
                      required
                    />
                  </div>

                  <Button variant="enterprise" size="lg" type="submit">
                    Send Message
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {contactInfo.map((item) => (
                <div key={item.title} className="bg-cream rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-foreground mb-1">
                        {item.title}
                      </h3>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-primary hover:underline font-medium"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-foreground font-medium">
                          {item.value}
                        </p>
                      )}
                      <p className="text-sm text-muted-foreground mt-1">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Consultation CTA */}
              <div className="bg-primary rounded-xl p-8 text-primary-foreground">
                <h3 className="font-heading font-semibold text-lg mb-3">
                  Ready for a Deeper Conversation?
                </h3>
                <p className="text-sm text-primary-foreground/80 leading-relaxed mb-6">
                  If you&apos;re ready to discuss a specific project or need a
                  detailed consultation, schedule a meeting with our team.
                </p>
                <Button variant="accent" asChild>
                  <Link href="/consultation">
                    Schedule Consultation
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="section-padding bg-cream">
        <div className="container-enterprise">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground mb-8">
              Many of our prospective clients have similar questions. Here are
              answers to the most common inquiries we receive.
            </p>

            <div className="text-left space-y-6">
              {[
                {
                  q: "What industries do you serve?",
                  a: "We work with medium to large businesses, government agencies, and non-profit organizations across various sectors. Our focus is on organizations that require reliable, secure, enterprise-grade systems.",
                },
                {
                  q: "How long does a typical project take?",
                  a: "Project timelines vary significantly based on scope and complexity. A focused assessment might take 2-4 weeks, while a full system development could span 6-18 months. We provide detailed timelines during the planning phase.",
                },
                {
                  q: "Do you provide ongoing support after project completion?",
                  a: "Yes. We offer various support arrangements ranging from ad-hoc assistance to comprehensive managed services. We design our solutions for long-term maintainability and can support them throughout their lifecycle.",
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="bg-card rounded-lg border border-border p-6"
                >
                  <h3 className="font-heading font-semibold text-foreground mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
