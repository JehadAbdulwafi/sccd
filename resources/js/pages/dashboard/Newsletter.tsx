import React from 'react';
import { Head, useForm, usePage } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { format } from 'date-fns';
import AppLayout from '@/layouts/app-layout';
import { ColumnDef } from '@tanstack/react-table';
import { DataTable } from '@/components/ui/data-table/data-table';
import { BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'لوحة التحكم',
    href: '/dashboard',
  },
  {
    title: 'الرسائل الإخبارية',
    href: '/dashboard/newsletter',
  },
];

interface SentNewsletter {
  id: number;
  subject: string;
  content: string;
  recipients_count: number;
  created_at: string;
}

export default function Newsletter() {
  const { sentNewsletters } = usePage<{ sentNewsletters: SentNewsletter[] }>().props;
  const { data, setData, post, processing, errors, reset } = useForm({
    subject: '',
    content: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    post(route('dashboard.newsletter.send'), {
      onSuccess: () => reset(),
    });
  };

  const columns: ColumnDef<SentNewsletter>[] = [
    {
      accessorKey: 'subject',
      header: 'الموضوع',
    },
    {
      accessorKey: 'recipients_count',
      header: 'المستلمون',
    },
    {
      accessorKey: 'created_at',
      header: 'تاريخ الإرسال',
      cell: ({ row }) => {
        const value = row.getValue('created_at') as string;
        const date = new Date(value);
        return format(date, 'PPP p');
      },
    },
  ];

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="إدارة الرسائل الإخبارية" />

      <div className="flex h-full flex-1 flex-col gap-8 p-4">
        <div className="bg-white overflow-hidden border sm:rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">إرسال رسالة إخبارية جديدة</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">الموضوع</label>
              <Input
                id="subject"
                type="text"
                name="subject"
                value={data.subject}
                onChange={(e) => setData('subject', e.target.value)}
                className="mt-1 block w-full"
                required
              />
              {errors.subject && <div className="text-red-500 text-sm mt-1">{errors.subject}</div>}
            </div>
            <div>
              <label htmlFor="content" className="block text-sm font-medium text-gray-700">المحتوى</label>
              <Textarea
                id="content"
                name="content"
                value={data.content}
                onChange={(e) => setData('content', e.target.value)}
                className="mt-1 block w-full"
                rows={10}
                required
              />
              {errors.content && <div className="text-red-500 text-sm mt-1">{errors.content}</div>}
            </div>
            <Button type="submit" disabled={processing}>
              {processing ? 'جاري الإرسال...' : 'إرسال الرسالة الإخبارية'}
            </Button>
          </form>
        </div>
        <div className="grid w-full">
          <DataTable
            columns={columns}
            data={sentNewsletters}
            title="الرسائل الإخبارية المرسلة سابقًا"
            description="عرض جميع الرسائل الإخبارية المرسلة."
            searchKey="subject"
          />
        </div>


      </div>
    </AppLayout>
  );
}

