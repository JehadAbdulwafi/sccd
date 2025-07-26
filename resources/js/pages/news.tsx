import GuestLayout from "@/layouts/guest-layout"
import NewsCard from "@/components/news-card"
import PageHeaderImage from "@/components/page-header"
import { BreadcrumbItem } from "@/types";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { usePage } from "@inertiajs/react";

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'الصفحة الرئيسية',
    href: '/',
  },
  {
    title: 'الاخبار والأحداث',
    href: '/news',
  },
];

export default function NewsPage() {
  const { posts } = usePage<{ posts: Post[] }>().props

  return (
    <GuestLayout>
      <div className="min-h-screen bg-gray-50" dir="rtl">
        <PageHeaderImage
          title="الأخبار والأحداث"
          description="ابق على اطلاع بآخر المستجدات والفعاليات في مركزنا"
        />

        <nav className="container mx-auto py-4  px-4 text-sm text-gray-600">
          <Breadcrumbs breadcrumbs={breadcrumbs} />
        </nav>

        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((item) => (
              <NewsCard item={item} />
            ))}
          </div>
        </div>
      </div>

    </GuestLayout>
  )
}
