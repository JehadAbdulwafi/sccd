import { Search } from "lucide-react"
import GuestLayout from "@/layouts/guest-layout"
import { usePage } from "@inertiajs/react"
import PageHeaderImage from "@/components/page-header"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { BreadcrumbItem } from "@/types"
import { Input } from "@/components/ui/input"
import PublicationCardHorizontal from "@/components/publication-card"

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'الصفحة الرئيسية',
    href: '/',
  },
  {
    title: 'البحوث والمنشورات',
    href: '/publications',
  },
];

export default function PublicationsPage() {
  const { publications } = usePage<{ publications: Publication[] }>().props;

  return (
    <GuestLayout>
      <div className="min-h-screen bg-gray-50" dir="rtl">
        {/* Header */}
        <PageHeaderImage
          title="البحوث والمنشورات"
          description="استكشف أحدث البحوث والدراسات العلمية المنشورة من قبل المركز"
        />
        <nav className="container mx-auto py-4  px-4 text-sm text-gray-600">
          <Breadcrumbs breadcrumbs={breadcrumbs} />
        </nav>

        {/* Search and Filter Section */}
        <div className="container px-4 mx-auto md:py-8 flex flex-col md:flex-row items-center gap-4">
          <div className="relative flex-grow w-full md:w-auto">
            <Input
              type="text"
              placeholder="بحث المنشورات"
              className="w-full pr-10 text-right border-gray-300 focus:border-green-500 focus:ring-green-500"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
        </div>

        <div className="container mx-auto px-4 py-4 md:py-16">

          {/* Previous Issues */}
          <div>
            <div className="grid grid-cols-1 gap-6">
              {publications.map((publication, index) => (
                <PublicationCardHorizontal key={index} publication={publication} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </GuestLayout>
  )
}
