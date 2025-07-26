import GuestLayout from "@/layouts/guest-layout"
import ArticleCard from "@/components/article-card"
import PageHeaderImage from "@/components/page-header"
import { usePage } from "@inertiajs/react"
import { BreadcrumbItem } from "@/types";
import { Breadcrumbs } from "@/components/breadcrumbs";


export default function IssuePage() {
  const { issue, articles } = usePage<{ issue: JournalIssue, articles: JournalArticle[] }>().props;
  const breadcrumbs: BreadcrumbItem[] = [
    {
      title: 'الصفحة الرئيسية',
      href: '/',
    },
    {
      title: 'المجلة العلمية',
      href: '/journal',
    },
    {
      title: issue.title,
      href: `/journal/issue/${issue.id}`,
    },
  ];

  return (
    <GuestLayout>
      <div className="min-h-screen bg-gray-50" dir="rtl">
        <PageHeaderImage
          title={issue.title}
        />
        <nav className="container mx-auto py-4  px-4 text-sm text-gray-600">
          <Breadcrumbs breadcrumbs={breadcrumbs} />
        </nav>

        <div className="container mx-auto px-4 py-16">
          <div className="space-y-6">
            {articles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>

        </div>
      </div>
    </GuestLayout>
  )
}

// const articles = [
//   {
//     id: 1,
//     title: "تطوير خوارزميات الذكاء الاصطناعي للتطبيقات الهندسية",
//     author: "د. أحمد محمد علي",
//     date: "2024-01-15",
//     category: "ذكاء اصطناعي",
//     abstract:
//       "دراسة شاملة حول استخدام تقنيات التعلم الآلي في حل المشاكل الهندسية المعقدة وتطوير حلول مبتكرة للصناعة.",
//     downloads: 245,
//   },
//   {
//     id: 2,
//     title: "أنظمة الطاقة المتجددة الذكية في المباني السكنية",
//     author: "د. فاطمة أحمد",
//     date: "2024-01-10",
//     category: "طاقة متجددة",
//     abstract: "بحث يركز على تطوير أنظمة إدارة الطاقة الذكية للمباني السكنية باستخدام تقنيات إنترنت الأشياء.",
//     downloads: 189,
//   },
//   {
//     id: 3,
//     title: "تقنيات أمن المعلومات في البيئات السحابية",
//     author: "د. محمد سالم",
//     date: "2024-01-05",
//     category: "أمن معلومات",
//     abstract: "دراسة متقدمة حول تطوير بروتوكولات أمان جديدة لحماية البيانات في البيئات السحابية المختلطة.",
//     downloads: 312,
//   },
//   {
//     id: 4,
//     title: "تطبيقات البلوك تشين في إدارة سلاسل التوريد",
//     author: "د. سارة خالد",
//     date: "2023-12-20",
//     category: "بلوك تشين",
//     abstract: "بحث يستكشف إمكانيات استخدام تقنية البلوك تشين لتحسين شفافية وكفاءة سلاسل التوريد.",
//     downloads: 156,
//   },
//   {
//     id: 5,
//     title: "الروبوتات المستقلة في البيئات الصناعية",
//     author: "د. عبدالله حسن",
//     date: "2023-12-15",
//     category: "روبوتات",
//     abstract: "دراسة حول تطوير روبوتات صناعية مستقلة قادرة على التكيف مع البيئات المتغيرة والعمل بكفاءة عالية.",
//     downloads: 203,
//   },
//   {
//     id: 6,
//     title: "تحليل البيانات الضخمة في القطاع الصحي",
//     author: "د. نورا عبدالرحمن",
//     date: "2023-12-10",
//     category: "بيانات ضخمة",
//     abstract: "بحث يركز على استخدام تقنيات تحليل البيانات الضخمة لتحسين جودة الرعاية الصحية والتشخيص المبكر.",
//     downloads: 278,
//   },
// ]
//
// const categories = [
//   "جميع الفئات",
//   "ذكاء اصطناعي",
//   "طاقة متجددة",
//   "أمن معلومات",
//   "بلوك تشين",
//   "روبوتات",
//   "بيانات ضخمة",
// ]
