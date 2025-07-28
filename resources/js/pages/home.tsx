import NewsMarquee from '@/components/news-marquee';
import { Head, Link } from '@inertiajs/react';
import GuestLayout from '@/layouts/guest-layout';
import Services from '@/components/services';
import PartnersMarquee from '@/components/partners-marquee';
import PublicationsCarousel from '@/components/publications-carousel';
import HeroSection from '@/components/hero-section';
import NewsCarousel from '@/components/news-carousel';
import { Button } from '@/components/ui/button';
import { CheckoutGradients } from '@/components/gradients/checkout-gradients';
import EventsCarousel from '@/components/events-carousel';
import JournalCarousel from '@/components/journal-carousel';

export default function Welcome() {

  return (
    <>
      <Head title={"مركز البحوث الهندسية وتقنية المعلومات - الصفحة الرئيسية"}>
        <meta name="description" content={" نحن نقود الابتكار في مجال البحوث الهندسية وتقنية المعلومات، ونسعى لتطوير حلول تقنية متقدمة تخدم المجتمع وتساهم في التقدم العلمي والتكنولوجي."} />
        <link rel="preconnect" href="https://fonts.bunny.net" />
        <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
      </Head>

      <GuestLayout>
        <NewsMarquee />
        <HeroSection />
        <PartnersMarquee />
        <PublicationsCarousel />
        <JournalCarousel />
        <NewsCarousel />

        <section className="bg-white w-full relative z-10 overflow-hidden">
          <CheckoutGradients />
          <div className="container p-16 mx-auto grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="">
              <h2 className="text-5xl font-light mb-4">من نحن</h2>
              <p className="text-gray-700 leading-relaxed mb-8">
                أُنشئ المركز بموجب قرار المجلس الرئاسي لحكومة الوفاق رقم (477 ) لسنة2017م، ومقره مدينة بني وليد، ويتولى المركز إجراء البحوث، والدراسات، والاستشارات العلمية، والفنية بجميع أنواعها في مجال تقنيات الإنتاج، والصيانة الميكانيكية، للقطاعين العام والخاص، وذوي العلاقة بنشاط المركز، ويسعى إلى تقديم خدمة بحثية مميزة تخدم البيئة الأكاديمية، من أجل الإسهام في تحقيق درجة عالية من الجودة والاعتماد؛ وفق المتطلبات الوطنية والعالمية.
              </p>
              <Link href="/about">
                <Button className="text-white" size={"lg"}>عرض المزيد</Button>
              </Link>
            </div>

            {/* Featured Partner Card */}
            <div className="relative overflow-hidden h-full">
              <img
                src="/images/logo.jpg?height=600&width=600"
                alt="شراكة بحثية مميزة"
                width={300}
                height={400}
                className="w-full h-auto object-cover rounded-3xl"
              />
            </div>
          </div>
        </section>

        <Services />

        <EventsCarousel />

      </GuestLayout>
    </>
  );
}
