import { Breadcrumbs } from '@/components/breadcrumbs';
import PageHeader from '@/components/page-header';
import { Button } from '@/components/ui/button';
import GuestLayout from '@/layouts/guest-layout';
import { BreadcrumbItem } from '@/types';
import { Head, usePage } from '@inertiajs/react';

export default function PublicationsPage() {
  const { publication } = usePage<{ publication: Publication }>().props;
  const authors: { key: string; value: string }[] = publication.authors
    ? typeof publication.authors === 'string'
      ? JSON.parse(publication.authors)
      : publication.authors
    : [];
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
      <Head title={`- منشورات مركز البحوث الهندسية وتقنية المعلومات ${publication.title}`}>
        <meta name="description" content={`تفاصيل حول المنشور البحثي: ${publication.description}. استكشف الأبحاث المتقدمة في الهندسة وتقنية المعلومات.`} />
      </Head>

      <div className="min-h-screen bg-gray-50" dir="rtl">
        {/* Header */}
        <PageHeader title={publication.title} />
        <nav className="container mx-auto py-4 text-sm text-gray-600">
          <Breadcrumbs breadcrumbs={breadcrumbs} />
        </nav>

        <div className="container mx-auto grid grid-cols-1 gap-8 px-4 py-16 md:grid-cols-3">
          {/* Previous Issues */}
          <div className="col-span-2">
            <div className="mb-4 text-5xl font-light">خلاصة</div>
            <div className="mb-4 text-xl font-light">{publication.description}</div>

            <div className="mt-12 mb-8 text-5xl font-light">المؤلفين</div>
            <div>
              {authors?.map((author, index) => (
                <div key={index} className="mb-4 text-xl font-light">
                  {author.key} - {author.value}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 bg-white p-8 shadow-[9px_2px_33px_4px_rgba(0,_0,_0,_0.1)]">
            <img src={publication.image || '/placeholder.svg'} className="aspect-[3/4] h-96 object-cover" />
            <a href={publication.file} download>
              <Button className="w-72 text-white" size={'lg'}>
                تنزيل الملف PDF
              </Button>
            </a>
          </div>
        </div>
      </div>
    </GuestLayout>
  );
}
