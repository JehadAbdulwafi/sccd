import { Head, useForm } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import FormField from '@/components/shared/form-field';
import FormHeader from '@/components/shared/form-header';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

type FormValues = {
  question: string;
  answer: string;
  order: number;
}

export default function CreateFaqPage() {
  const breadcrumbs = [
    { title: 'لوحة التحكم', href: '/dashboard' },
    { title: 'الأسئلة الشائعة', href: '/dashboard/faqs' },
    { title: 'إضافة سؤال جديد', href: '/dashboard/faqs/create' },
  ];

  const form = useForm<FormValues>({
    question: '',
    answer: '',
    order: 0,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    form.post('/dashboard/faqs', {
      onSuccess: () => toast.success('FAQ created successfully'),
      onError: () => toast.error('Failed to create FAQ'),
    });
  };

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="إضافة سؤال جديد" />

      <div className="bg-background flex h-full flex-1 flex-col gap-4 p-4">
        <FormHeader
          title="إضافة سؤال جديد"
          description="ادخل جميع البيانات المطلوبة"
          onCancel={() => window.history.back()}
          onSave={handleSubmit}
          form={form}
        />

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          <div className="flex flex-col col-span-2 gap-6">
            <FormField label="السؤال" error={form.errors.question}>
              <Input
                value={form.data.question}
                onChange={(e) => form.setData('question', e.target.value)}
              />
            </FormField>

            <FormField label="الترتيب" error={form.errors.order}>
              <Input
                type="number"
                value={form.data.order}
                onChange={(e) => form.setData('order', parseInt(e.target.value))}
              />
            </FormField>
          </div>

          <div className="col-span-3">
            <FormField label="الجواب" error={form.errors.answer}>
              <Textarea
                value={form.data.answer}
                onChange={(e) => form.setData('answer', e.target.value)}
                className="min-h-[200px]"
              />
            </FormField>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
