import GuestLayout from "@/layouts/guest-layout"
import NewsCard from "@/components/news-card"
import PageHeaderImage from "@/components/page-header"
import { BreadcrumbItem } from "@/types";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Head, usePage } from "@inertiajs/react";

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
      <Head title={"الأخبار - اللجنة العليا للمعاقين"}>
        <meta name="description" content={"ابق على اطلاع بآخر أخبارنا، فعالياتنا، وإنجازاتنا في دعم الأشخاص ذوي الإعاقة."} />
      </Head>

      <div className="min-h-screen bg-gray-50" dir="rtl">
        <PageHeaderImage
          title="الأخبار والأحداث"
          description="ابق على اطلاع بآخر المستجدات والفعاليات"
        />

        <nav className="container mx-auto py-4 px-4 md:px-16 text-sm text-gray-600">
          <Breadcrumbs breadcrumbs={breadcrumbs} />
        </nav>

        <div className="container mx-auto px-4 md:px-16 py-8">
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
