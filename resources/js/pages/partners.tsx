import { Breadcrumbs } from "@/components/breadcrumbs";
import PageHeaderImage from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import GuestLayout from "@/layouts/guest-layout"
import { BreadcrumbItem, Partner } from "@/types";
import { Head, usePage } from "@inertiajs/react";
import { ExternalLink, SquareArrowOutUpRight } from "lucide-react";

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'الصفحة الرئيسية',
    href: '/',
  },
  {
    title: 'شركاءنا',
    href: '/partners',
  },
];

export default function PartnersPage() {
  const { partners } = usePage<{ partners: Partner[] }>().props;

  return (
    <GuestLayout>
      <Head title={'شركاؤنا - اللجنة العليا للمعاقين'}>
        <meta name="description" content={"تعرف على شركائنا الاستراتيجيين الذين يدعمون رؤيتنا في تمكين الأشخاص ذوي الإعاقة."} />
      </Head>

      <div className="min-h-screen bg-white" dir="rtl">
        <PageHeaderImage
          title="شركاءنا"
          description="نعمل مع شركاء رائدين في مختلف القطاعات لدفع عجلة البحث والتطوير وتقديم حلول مبتكرة."
        />

        <nav className="container mx-auto py-4  px-4 md:px-16 text-sm text-gray-600">
          <Breadcrumbs breadcrumbs={breadcrumbs} />
        </nav>

        {/* All Partners Grid */}
        <div className="container mx-auto px-4 md:px-16 py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <div className="relative w-32 h-32 mb-4">
                    <img
                      src={partner.logo || "/placeholder.svg"}
                      alt={partner.name}
                      className="object-contain w-full h-full grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                  <CardTitle className="text-xl text-center my-2">{partner.name}</CardTitle>
                  <p className="text-gray-600 text-sm text-center mb-4">{partner.description}</p>
                  {partner.website && (
                    <a href={partner.website} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm">
                        زيارة الموقع
                        <SquareArrowOutUpRight className="w-4 h-4 mr-2" />
                      </Button>
                    </a>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">هل ترغب في أن تصبح شريكاً؟</h3>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              نحن نرحب بالتعاون مع المؤسسات والجهات التي تشاركنا رؤيتنا في التقدم العلمي والتقني. تواصل معنا لمناقشة فرص
              الشراكة.
            </p>
            <a href="/contact">
              <Button size="lg" className="">
                تواصل معنا
              </Button>
            </a>
          </div>
        </div>
      </div>
    </GuestLayout>
  )
}
