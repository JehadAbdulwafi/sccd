import GuestLayout from "@/layouts/guest-layout"
import ArticleCard from "@/components/article-card"
import PageHeaderImage from "@/components/page-header"
import { Head, usePage } from "@inertiajs/react"
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
      <Head title={`- المجلة العلمية لمركز البحوث الهندسية وتقنية المعلومات ${issue.title}`}>
        <meta name="description" content={`استكشف مقالات وأبحاث العدد ${articles.length} من مجلتنا العلمية المتخصصة.`} />
      </Head>
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

