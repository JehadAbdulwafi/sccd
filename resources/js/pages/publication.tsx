import { Button } from "@/components/ui/button"
import { Search, ChevronUp } from "lucide-react"
import GuestLayout from "@/layouts/guest-layout"
import { usePage } from "@inertiajs/react"
import PageHeader from "@/components/page-header"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { BreadcrumbItem } from "@/types"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { FilterDialog } from "@/components/journal-filter-dialog"
import PublicationCardHorizontal from "@/components/publication-card"

export default function PublicationsPage() {
  const { publication } = usePage<{ publication: Publication }>().props;
  const authors: { key: string; value: string }[] = publication.authors ? (typeof publication.authors === 'string' ? JSON.parse(publication.authors) : publication.authors) : [];
  const breadcrumbs: BreadcrumbItem[] = [
    {
      title: 'الصفحة الرئيسية',
      href: '/',
    },
    {
      title: 'البحوث والمنشورات',
      href: '/publications',
    },
    {
      title: publication.title,
      href: `/publication/${publication.id}`,
    },
  ];


  return (
    <GuestLayout>
      <div className="min-h-screen bg-gray-50" dir="rtl">
        {/* Header */}
        <PageHeader
          title={publication.title}
        />
        <nav className="container mx-auto py-4 text-sm text-gray-600">
          <Breadcrumbs breadcrumbs={breadcrumbs} />
        </nav>

        <div className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Previous Issues */}
          <div className="col-span-2">
            <div className="text-5xl font-light mb-4">
              خلاصة
            </div>
            <div className="text-xl font-light mb-4">
              {publication.description}
            </div>

            <div className="text-5xl font-light mb-8 mt-12">
              المؤلفين
            </div>
            <div>
              {authors?.map((author, index) => (
                <div key={index} className="text-xl font-light mb-4">
                  {author.key} - {author.value}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4 items-center bg-white shadow-[9px_2px_33px_4px_rgba(0,_0,_0,_0.1)] p-8">
            <img
              src={publication.image || "/placeholder.svg"}
              className="aspect-[3/4] object-cover h-96"
            />
            <a href={publication.file} download>
              <Button className="text-white w-72" size={"lg"}>تنزيل الملف PDF</Button>
            </a>
          </div>
        </div>
      </div>
    </GuestLayout>
  )
}
