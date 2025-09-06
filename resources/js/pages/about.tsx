import { Breadcrumbs } from "@/components/breadcrumbs";
import PageHeaderImage from "@/components/page-header"
import GuestLayout from "@/layouts/guest-layout"
import { cn } from "@/lib/utils"
import { BreadcrumbItem } from "@/types";
import { Head } from '@inertiajs/react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";


const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'الصفحة الرئيسية',
    href: '/',
  },
  {
    title: 'من نحن',
    href: '/about',
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

const Goals = [
  {
    title: "الأهداف الاجتماعية والاقتصادية",
    points: [
      "تحسين مستوى المعيشة للأشخاص ذوي الإعاقة",
      "توفير فرص عمل مناسبة وتسهيل اندماجهم في سوق العمل",
      "دعم المشاريع الصغيرة والمتوسطة الموجهة لذوي الإعاقة",
    ],
  },
  {
    title: "الأهداف التعليمية والثقافية",
    points: [
      "ضمان وصول ذوي الإعاقة إلى فرص التعليم بمختلف مراحله",
      "تطوير المناهج بما يتناسب مع احتياجاتهم",
      "نشر الوعي الثقافي وتعزيز المشاركة المجتمعية",
    ],
  },
  {
    title: "الأهداف الصحية وإعادة التأهيل",
    points: [
      "توفير خدمات صحية متكاملة لذوي الإعاقة",
      "تطوير مراكز إعادة التأهيل وتزويدها بالتجهيزات اللازمة",
      "دعم برامج الصحة النفسية والاجتماعية",
    ],
  },
  {
    title: "الأهداف القانونية والحقوقية",
    points: [
      "تعزيز القوانين التي تحمي حقوق ذوي الإعاقة",
      "مراقبة تطبيق التشريعات المحلية والدولية",
      "ضمان المساواة وعدم التمييز",
    ],
  },
  {
    title: "الأهداف الدولية والتعاون الخارجي",
    points: [
      "تعزيز التعاون مع المنظمات الدولية والإقليمية",
      "المشاركة في المؤتمرات والمعارض العالمية",
      "تبادل الخبرات والتجارب الناجحة",
    ],
  },
];

export default function AboutPage() {
  return (
    <GuestLayout>
      <Head title={"من نحن - اللجنة العليا للمعاقين"}>
        <meta name="description" content={"تعرف على اللجنة العليا للمعاقين، رؤيتنا، رسالتنا، وأهدافنا في تمكين الأشخاص ذوي الإعاقة."} />
      </Head>
      <div className="min-h-screen bg-gray-50" dir="rtl">
        <PageHeaderImage
          title="من نحن"
          description="تعرف على رؤيتنا ورسالتنا والأهداف التي نسعى لتحقيقها"
        />

        <nav className="container mx-auto py-4 px-4 md:px-16 text-sm text-gray-600">
          <Breadcrumbs breadcrumbs={breadcrumbs} />
        </nav>

        <div className="container mx-auto p-4 md:p-16">
          <div className="text-lg md:text-xl font-light mb-4 max-w-7xl mx-auto mb-12">
            أُنشئت اللجنة العليا لرعاية المعاقين في ليبيا بموجب أحكام القوانين والتشريعات الوطنية ذات العلاقة، باعتبارها مؤسسة مجتمع مدني مستقلة، مقرها مدينة طرابلس، وتتولى اللجنة مهام دعم ورعاية الأشخاص ذوي الإعاقة بجميع فئاتهم، من خلال وضع السياسات والبرامج، وتقديم الخدمات الاجتماعية والنفسية واللوجستية، فضلاً عن الإشراف على عمليات التوعية، والتثقيف، والرصد لحقوقهم التي كفلتها القوانين الوطنية والاتفاقيات الدولية. وتسعى اللجنة إلى بناء شراكات مع مؤسسات الدولة والمجتمع المدني، وتعزيز قدرات العاملين في هذا المجال عبر التدريب والتأهيل، بما يضمن تحقيق حياة كريمة للأشخاص ذوي الإعاقة في جميع مناطق ليبيا، وفق متطلبات الجودة والمعايير الإنسانية المعتمدة محليًا ودوليًا.
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="shadow-[3px_2px_33px_4px_rgba(0,_0,_0,_0.1)] transition-shadow">
              <img
                src="/images/vision.jpg"
                className="w-full h-96 object-cover"
              />
              <div className="p-6">
                <div className="text-zinc-800 text-3xl md:text-4xl mb-4">
                  رسالتنا
                </div>
                <p className="text-zinc-600 leading-relaxed">
                  تحقيق حياة كريمة وشاملة لذوي الإعاقة في مجتمع مستقر، يضمن لهم فرصًا متكافئة في التعليم والعمل والمشاركة المجتمعية.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="shadow-[3px_2px_33px_4px_rgba(0,_0,_0,_0.1)] transition-shadow">
              <img
                src="/images/goal.webp"
                className="w-full h-96 object-cover"
              />
              <div className="p-6">
                <div className="text-zinc-800 text-3xl md:text-4xl mb-4">
                  رؤيتنا
                </div>
                <p className="text-zinc-600 leading-relaxed">
                  نشر التوعية المجتمعية وتمكين الأشخاص ذوي الإعاقة من التمتع بجميع حقوقهم الإنسانية، مع توفير بيئة داعمة تعزز قدراتهم وتساعدهم على الاندماج الفعّال.
                </p>
              </div>
            </div>
          </div>

          {/* Objectives */}
          <div className="mt-16">
            <h2 className="text-3xl md:text-5xl font-light mb-8">أهدافنا</h2>
            <div className="gap-8">
              <Accordion
                type="single"
                className="w-full flex flex-col gap-5"
                defaultValue="item-0"
              >
                {Goals.map((goal, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-right">{goal.title}</AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc pr-6 text-right space-y-2">
                        {goal.points.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
          <div className="mt-16">
            <h2 className="text-3xl md:text-5xl font-light mb-12">أعضاء اللجنة</h2>
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
