import GuestLayout from "@/layouts/guest-layout";
import { Head } from "@inertiajs/react";
import PageHeader from "@/components/page-header";
import Editor from "@/components/editor";
import { BreadcrumbItem } from "@/types";
import { Breadcrumbs } from "@/components/breadcrumbs";

export default function StaticPage({ title, content }: { title: string, content: string }) {
  const breadcrumbs: BreadcrumbItem[] = [
    {
      title: 'الصفحة الرئيسية',
      href: '/',
    },
    {
      title,
      href: '/',
    },
  ];
  return (
    <GuestLayout>
      <Head title={title} />
      <div className="min-h-screen bg-gray-50 pb-16">
        <PageHeader title={title} />
        <nav className="container mx-auto py-4  px-4 md:px-16 text-sm text-gray-600">
          <Breadcrumbs breadcrumbs={breadcrumbs} />
        </nav>
        <div className="container mx-auto px-4 md:px-16 py-10">
          <Editor content={content || ""} editable={false} />
        </div>
      </div>
    </GuestLayout>
  );
}
