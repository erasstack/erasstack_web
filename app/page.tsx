import { CTASection } from "@/components/home/CTASection";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { WhyErasStack } from "@/components/home/WhyErasStack";
import { Layout } from "@/components/layout/Layout";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesOverview />
      <WhyErasStack />
      <CTASection />
    </Layout>
  );
};

export default Index;
