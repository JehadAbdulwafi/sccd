import { Head, usePage } from '@inertiajs/react';
import GuestLayout from '@/layouts/guest-layout';
import ServicesSection from '@/components/services-section';
import HeroSection from '@/components/hero-section';
import NewsCarousel from '@/components/news-carousel';
import SupportSection from '@/components/support-section';
import AboutSection from '@/components/about-section';
import MembershipSection from '@/components/membership-section';
import { Partner } from '@/types';

type Faq = {
  id: number;
  question: string;
  answer: string;
}

export default function Welcome() {
  const { faqs, partners } = usePage<{ faqs: Faq[], partners: Partner[] }>().props;

  return (
    <>
      <Head title={"اللجنة العليا للمعاقين - الصفحة الرئيسية"}>
        <meta name="description" content={"اللجنة العليا للمعاقين - نعمل على تمكين الأشخاص ذوي الإعاقة ودمجهم في المجتمع."} />
        <link rel="preconnect" href="https://fonts.bunny.net" />
        <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
      </Head>

      <GuestLayout>
        <HeroSection />
        <NewsCarousel />
        <AboutSection />
        <MembershipSection partners={partners} />
        <ServicesSection faqs={faqs} />
        <SupportSection />
      </GuestLayout>
    </>
  );
}
