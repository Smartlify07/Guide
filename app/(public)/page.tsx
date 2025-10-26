import AboutFounderSection from '@/components/features/landingpage/about-founder-section';
import HeroSection from '@/components/features/landingpage/hero-section';
import ServicesSection from '@/components/features/landingpage/services-section';
import SubmissionSection from '@/components/features/landingpage/submission-section';
import SupportSection from '@/components/features/landingpage/support-section';

export default function Home() {
  return (
    <>
      <HeroSection />
      <SupportSection />
      <ServicesSection />
      <SubmissionSection />
      <AboutFounderSection />
    </>
  );
}
