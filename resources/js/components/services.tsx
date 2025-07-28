import { BookOpen, ChartPie, ChevronLeft, GraduationCap, Microscope } from 'lucide-react'
import { cn } from '@/lib/utils'
import React, { useState } from 'react'
import SectionHeader from './section-header'

const tabs = [
  {
    id: 1,
    title: "تعزيز تنافسية الطلاب في سوق العمل",
    content: "يسعى المركز إلى الإسهام في تطوير القدرات الأكاديمية والعملية لطلاب وطالبات الجامعات ومؤسسات التعليم العالي، من خلال تشجيعهم على البحوث والابتكار، بما يُسهم في بناء شراكات مجتمعية فعالة، وتعزيز الأداء التقني والبحثي للمؤسسات الوطنية، وتمكينها من تحقيق رسالتها وأهدافها التنموية.",
    icon: <GraduationCap className="h-28 w-28 text-gray-700 stroke-1" />,
    Sicon: GraduationCap
  },
  {
    id: 2,
    title: "تنمية البحث العلمي البشري",
    content: "يعمل المركز على رفع مستوى الكفاءة البحثية للموارد البشرية من حيث الكم والنوع، بهدف الوصول إلى مستويات عالية من الجودة والتميز العلمي، بما ينعكس على تطور البحث العلمي في المملكة، ويُسهم في بناء قاعدة بحثية مستدامة تخدم المستقبل وتواكب تطلعات المجتمع.",
    icon: <Microscope className="h-28 w-28 text-gray-700 stroke-1" />,
    Sicon: Microscope,
  },
  {
    id: 3,
    title: "دعم التنمية الاقتصادية والبيئية",
    content: "يُركز المركز على ربط البحث العلمي بأولويات التنمية المستدامة، من خلال توجيه البحوث نحو خدمة البيئة المحلية والاقتصاد الوطني، وتنويع مصادر البحث العلمي، وحوكمة منظومته، وتعزيز مبادئ النزاهة وأخلاقيات النشر العلمي، بما يضمن الاستدامة والشفافية.",
    icon: <ChartPie className="h-28 w-28 text-gray-700 stroke-1" />,
    Sicon: ChartPie,
  },
  {
    id: 4,
    title: "بناء القدرات التدريبية والتعليمية",
    content: "يُعنى المركز بإعداد وتنظيم دورات تدريبية متخصصة في مجالات اهتمامه، وفق معايير عالية وشهادات معتمدة، بهدف تطوير قدرات الكوادر البشرية في مؤسسات التعليم العالي، ورفع كفاءتها التعليمية والبحثية، باستخدام أحدث الوسائل التقنية والممارسات العلمية الحديثة.",
    icon: <BookOpen className="h-28 w-28 text-gray-700 stroke-1" />,
    Sicon: BookOpen,
  },
]

export default function Services() {
  const [tab, setTab] = useState(0)

  return (

    <section className={"py-10 bg-white"}>
      <SectionHeader
        title="مجالات الاختصاص والتركيز"
        desc="يسعى المركز إلى الإسهام الفعّال في تطوير منظومة التعليم العالي والبحث العلمي من خلال بناء القدرات، وتمكين الكفاءات، وتوجيه الجهود نحو تحقيق التنمية المستدامة."
      />
      <div className="grid md:grid-cols-1 px-4 container mx-auto mt-12 px-4 md:px-16 lg:grid-cols-3 gap-8">
        <div className="col-span-1 gap-4">
          {tabs.map(({ Sicon, ...t }, i) => (
            <React.Fragment key={t.id}>
              <div onClick={() => setTab(i)} className="flex relative overflow-hidden flex-row justify-between items-center px-8 py-4 bg-white shadow-sm mb-8 group" key={t.id}>
                <div className={cn("absolute w-full h-full text-white bg-gradient-to-t inset-0 from-primary to-primary/50 transition-all duration-300 translate-y-full group-hover:translate-y-0", tab === i ? "translate-y-0" : "translate-y-full")} />
                <div className="flex flex-row gap-2 items-center">
                  {<Sicon className={cn("h-6 w-6 text-gray-700 z-10 group-hover:text-white", tab === i ? "text-white" : "")} />}
                  <h2 className={cn("text-lg z-10 group-hover:text-white", tab === i ? "text-white" : "")}>{t.title}</h2>
                </div>
                <ChevronLeft className={cn("w-6 h-6 z-10 group-hover:text-white  transition-all duration-300", tab === i ? "text-white -rotate-90" : "text-primary")} />
              </div>
              <div className="md:hidden mb-4">
                {tab === i && (
                  <div className="col-span-2 max-w-2xl w-full mx-auto gap-8 flex flex-col">
                    <h2 className="text-lg md:text-2xl text-zinc-700">{t.content}</h2>
                  </div>
                )}
              </div>
            </React.Fragment>
          ))}
        </div>
        <div className="col-span-2 hidden md:block max-w-2xl w-full mx-auto gap-8 flex flex-col">
          <div className="w-full flex flex-col justify-center items-start">
            {tabs[tab].icon}
          </div>
          <h2 className="text-2xl text-gray-700">{tabs[tab].content}</h2>
        </div>
      </div>
    </section>
  )
}

