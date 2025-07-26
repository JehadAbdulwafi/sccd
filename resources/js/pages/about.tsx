import { Breadcrumbs } from "@/components/breadcrumbs";
import PageHeaderImage from "@/components/page-header"
import GuestLayout from "@/layouts/guest-layout"
import { cn } from "@/lib/utils"
import { BreadcrumbItem } from "@/types";
import { BookOpen, ChartPie, ChevronLeft, GraduationCap, Microscope } from "lucide-react"


const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'الصفحة الرئيسية',
    href: '/',
  },
  {
    title: 'حول المركز',
    href: '/about',
  },
];

const tabs = [
  {
    id: 1,
    title: "الإسهام في تنمية القدرة التنافسية لطلاب، وطالبات الجامعات، ومؤسسات التعليم العالي في سوق العمل من خلال البحوث والابتكارات",
    Sicon: GraduationCap
  },
  {
    id: 2,
    title: "تنمية القدرة البحثية للموارد البشرية _ كمًّا ونوعًا_  لتحقيق درجات عالية من الجودة ،والتميز المستقبلي للبحث العلمي، وخدمة المجتمع.",
    Sicon: Microscope,
  },
  {
    id: 3,
    title: "التوسع في تحقيق التنمية الاقتصادية بما يفي بمتطلبات التنمية المستدامة للبيئة المحلية، وتوجيه البحث العلمي وفق الأوليات التنموية والبحوث البيئية، وتنويع مصادر البحث العلمي",
    Sicon: ChartPie,
  },
  {
    id: 4,
    title: "لعمل على إعداد، وإقامة دورات تدريبية متخصصة في مجال عمل المركز، وفق نظام الدورات التدريبية والشهادات المعتمدة، ودعم مؤسسات التعليم العالي والبحث العلمي",
    Sicon: BookOpen,
  },
];

const team = [
  {
    id: 1,
    name: "عبدالله حسن",
    role: "مدير عام المركز",
    position: 1,
    image: "",
  },
  {
    id: 2,
    name: "سارة خالد",
    role: "مدير إدارة الشؤون البحثية",
    position: 2,
    image: "",
  },
  {
    id: 3,
    name: "فاطمة أحمد",
    role: "عضو هيئة التدريس",
    position: 2,
    image: "",
  },
  {
    id: 4,
    name: "عبدالله حسن",
    role: "عضو هيئة التدريس",
    position: 3,
    image: "",
  },
  {
    id: 5,
    name: "عبدالله حسن",
    role: "عضو هيئة التدريس",
    position: 3,
    image: "",
  },
  {
    id: 6,
    name: "عبدالله حسن",
    role: "عضو هيئة التدريس",
    position: 3,
    image: "",
  },
]

export default function AboutPage() {
  return (
    <GuestLayout>
      <div className="min-h-screen bg-gray-50" dir="rtl">
        <PageHeaderImage
          title="حول المركز"
          description="تعرف على رؤيتنا ورسالتنا والأهداف التي نسعى لتحقيقها"
        />

        <nav className="container mx-auto py-4  px-4 text-sm text-gray-600">
          <Breadcrumbs breadcrumbs={breadcrumbs} />
        </nav>

        <div className="container mx-auto px-4 py-4 md:py-16">
          <div className="text-lg md:text-xl font-light mb-4 max-w-7xl mx-auto mb-12">
            أُنشئ المركز بموجب قرار المجلس الرئاسي لحكومة الوفاق رقم (477 ) لسنة2017م، ومقره مدينة بني وليد، ويتولى المركز إجراء البحوث، والدراسات، والاستشارات العلمية، والفنية بجميع أنواعها في مجال تقنيات الإنتاج، والصيانة الميكانيكية، للقطاعين العام والخاص، وذوي العلاقة بنشاط المركز، ويسعى إلى تقديم خدمة بحثية مميزة تخدم البيئة الأكاديمية، من أجل الإسهام في تحقيق درجة عالية من الجودة والاعتماد؛ وفق المتطلبات الوطنية والعالمية.
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="shadow-[3px_2px_33px_4px_rgba(0,_0,_0,_0.1)] transition-shadow">
              <img
                src="https://images.unsplash.com/photo-1752606402425-fa8ed3166a91?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="w-full h-96 object-cover"
              />
              <div className="p-6">
                <div className="text-zinc-800 text-3xl md:text-4xl mb-4">
                  رسالتنا
                </div>
                <p className="text-zinc-600 leading-relaxed">
                  نلتزم بإجراء بحوث علمية متقدمة في مجال الهندسة وتقنية المعلومات، وتطوير حلول مبتكرة تخدم المجتمع والصناعة، وإعداد كوادر متخصصة قادرة على مواكبة التطورات التقنية.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="shadow-[3px_2px_33px_4px_rgba(0,_0,_0,_0.1)] transition-shadow">
              <img
                src="https://plus.unsplash.com/premium_photo-1753089574948-9a9a358bc575?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="w-full h-96 object-cover"
              />
              <div className="p-6">
                <div className="text-zinc-800 text-3xl md:text-4xl mb-4">
                  رؤيتنا
                </div>
                <p className="text-zinc-600 leading-relaxed">
                  أن نكون مركزاً رائداً في البحوث الهندسية وتقنية المعلومات على المستوى الإقليمي والعالمي، ونساهم في بناء
                  مجتمع المعرفة من خلال الابتكار والتميز البحثي.
                </p>
              </div>
            </div>
          </div>

          {/* Objectives */}
          <div className="mt-16">
            <h2 className="text-3xl md:text-5xl font-light mb-8">أهدافنا الاستراتيجية</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {tabs.map(({ Sicon, ...t }, i) => (
                <div className="flex relative overflow-hidden flex-row justify-between items-center px-8 py-4 bg-white shadow-[3px_2px_33px_4px_rgba(0,_0,_0,_0.1)] mb-8 group" key={t.id}>
                  <div className="flex flex-col gap-2 items-start">
                    {<Sicon className={cn("h-20 w-20 md:h-28 md:w-28 stroke-1 text-primary z-10", "")} />}
                    <h2 className={cn("text-lg text-zinc-700 z-10", "")}>{t.title}</h2>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-16">
            <h2 className="text-3xl md:text-5xl font-light mb-12">أعضاء المركز</h2>
            <div className="grid md:grid-cols-2 gap-6 md:gap-12">
              {team.map((member, i) => (
                <div className={cn("bg-white shadow-[3px_2px_33px_4px_rgba(0,_0,_0,_0.1)] w-full gap-3 md:gap-8 flex flex-col md:flex-row md:max-h-64 relative p-4 md:p-10 md:mt-24", "col-span-1")} key={member.id}>
                  <div className="relative md:-top-28">
                    <img
                      src={member.image || "/placeholder.svg"}
                      className="object-cover md:h-72 md:w-72"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="text-2xl md:text-4xl font-light md:mb-4">
                      {member.name}
                    </div>
                    <p className="text-zinc-600 leading-relaxed md:text-xl font-light">
                      {member.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

    </GuestLayout >
  )
}
