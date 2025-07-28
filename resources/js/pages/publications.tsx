import { Breadcrumbs } from '@/components/breadcrumbs';
import PageHeaderImage from '@/components/page-header';
import PublicationCardHorizontal from '@/components/publication-card';
import { Input } from '@/components/ui/input';
import GuestLayout from '@/layouts/guest-layout';
import { BreadcrumbItem } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import { Search } from 'lucide-react';

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
      <Head title={'المنشورات - مركز البحوث الهندسية وتقنية المعلومات'}>
        <meta name="description" content={'اكتشف أحدث منشوراتنا البحثية والعلمية في مجالات الهندسة وتقنية المعلومات.'} />
      </Head>
      <div className="min-h-screen bg-gray-50" dir="rtl">
        {/* Header */}
        <PageHeaderImage title="البحوث والمنشورات" description="استكشف أحدث البحوث والدراسات العلمية المنشورة من قبل المركز" />
        <nav className="container mx-auto px-4 py-4 text-sm text-gray-600">
          <Breadcrumbs breadcrumbs={breadcrumbs} />
        </nav>

        {/* Search and Filter Section */}
        <div className="container mx-auto flex flex-col items-center gap-4 px-4 md:flex-row md:py-8">
          <div className="relative w-full flex-grow md:w-auto">
            <Input
              type="text"
              placeholder="بحث المنشورات"
              className="w-full border-gray-300 pr-10 text-right focus:border-green-500 focus:ring-green-500"
            />
            <Search className="absolute top-1/2 right-3 h-5 w-5 -translate-y-1/2 text-gray-400" />
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
  );
}
