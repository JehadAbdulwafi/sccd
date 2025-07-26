import { Breadcrumbs } from "@/components/breadcrumbs";
import PageHeaderImage from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import GuestLayout from "@/layouts/guest-layout"
import { BreadcrumbItem } from "@/types";

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'الصفحة الرئيسية',
    href: '/',
  },
  {
    title: 'الشركاءنا',
    href: '/partners',
  },
];

export default function PartnersPage() {
  const partners = [
    {
      name: "المركز الليبي للأبحاث والدراسات",
      logo: "/images/lrsc.png",
      link: "https://lrsc.org.ly/",
      description: "مركز متخصص في البحوث والدراسات الاستراتيجية والاجتماعية.",
    },
    {
      name: "المركز الليبي المتقدم للتحاليل الكيميائية",
      logo: "/images/lacca.jpg",
      link: "https://www.lacca.ly/",
      description: "يقدم خدمات التحاليل الكيميائية المتقدمة للمؤسسات الصناعية والبحثية.",
    },
    {
      name: "الهيئة الليبية للبحث العلمي",
      logo: "/images/aonsrt.jpg",
      link: "https://www.aonsrt.ly/",
      description: "مؤسسة رائدة في دعم الابتكار وتطوير المشاريع البحثية الجديدة.",
    },
    {
      name: "المركز الليبي للبحوث الطبية",
      logo: "/images/lmrc.jpg",
      link: "https://www.lmrc.ly/",
      description: "يركز على البحوث الطبية الحيوية وتطوير العلاجات الجديدة.",
    },
    {
      name: "المركز الليبي المتقدم للتقنية – أبوسليم",
      logo: "/images/act.png",
      link: "https://act1.ly/",
      description: "يقدم حلولاً تقنية متقدمة واستشارات في مجالات التكنولوجيا الحديثة.",
    },
    {
      name: "المركز الليبي للاستشعار عن بعد وعلوم الفضاء",
      logo: "/images/lcrsss.jpg",
      link: "https://www.lcrsss.ly/",
      description: "متخصص في تطبيقات الاستشعار عن بعد وعلوم الفضاء والجيوماتكس.",
    },
    {
      name: "المركز الليبي لبحوث التقنيات الحيوية",
      logo: "/images/btc.png",
      link: "https://btc.org.ly/",
      description: "يركز على البحوث في مجال التقنيات الحيوية والهندسة الوراثية.",
    },
    {
      name: "المركز الليبي لبحوث ودراسات الطاقة الشمسية",
      logo: "/images/sersc.webp",
      link: "https://csers.ly/",
      description: "مكرس للبحث والتطوير في مجال الطاقة الشمسية وتطبيقاتها.",
    },
  ]

  return (
    <GuestLayout>

      <div className="min-h-screen bg-white" dir="rtl">
        <PageHeaderImage
          title="شركاءنا"
          description="نعمل مع شركاء رائدين في مختلف القطاعات لدفع عجلة البحث والتطوير وتقديم حلول مبتكرة."
        />

        <nav className="container mx-auto py-4  px-4 text-sm text-gray-600">
          <Breadcrumbs breadcrumbs={breadcrumbs} />
        </nav>

        {/* All Partners Grid */}
        <div className="container mx-auto px-4 py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <div className="relative w-32 h-32 mb-4">
                    <img
                      src={partner.logo || "/placeholder.svg"}
                      alt={partner.name}
                      className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                  <CardTitle className="text-xl text-center mb-2">{partner.name}</CardTitle>
                  <p className="text-gray-600 text-sm text-center mb-4">{partner.description}</p>
                  {partner.link && (
                    <a href={partner.link} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm">
                        زيارة الموقع
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
