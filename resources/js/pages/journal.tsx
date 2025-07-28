import GuestLayout from "@/layouts/guest-layout"
import { Head, usePage } from "@inertiajs/react"
import { JournalCardWorks } from "@/components/journal-card"
import PageHeaderImage from "@/components/page-header"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { BreadcrumbItem } from "@/types"

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'الصفحة الرئيسية',
    href: '/',
  },
  {
    title: 'المجلة العلمية',
    href: '/journal',
  },
];

export default function JournalPage() {
  const { issues } = usePage<{ issues: JournalIssue[] }>().props;

  return (
    <GuestLayout>
      <Head title={"المجلة العلمية - مركز البحوث الهندسية وتقنية المعلومات"}>
        <meta name="description" content={"تصفح أعداد مجلتنا العلمية المحكمة، التي تضم أحدث الأبحاث والمقالات في مجالات الهندسة وتقنية المعلومات."} />
      </Head>
      <div className="min-h-screen bg-gray-50" dir="rtl">
        {/* Header */}
        <PageHeaderImage
          title="المجلة العلمية"
          description="يصدر كابسارك بحوث محكمة تدعم المنظمات العالمية في تطوير السياسات واتخاذ القرارات، وتعزيز العمل الاستشاري ونشر المعرفة."
        />
        <nav className="container mx-auto px-4 py-4 text-sm text-gray-600">
          <Breadcrumbs breadcrumbs={breadcrumbs} />
        </nav>
        <div className="container mx-auto px-4 py-16">
          <div>
            <div className="grid grid-cols-1 gap-6">
              {issues.map((issue, index) => (
                <JournalCardWorks key={index} issue={issue} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </GuestLayout>
  )
}
