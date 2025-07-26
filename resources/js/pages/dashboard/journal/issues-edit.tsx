import { Head, useForm, usePage } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import FormField from '@/components/shared/form-field';
import FormHeader from '@/components/shared/form-header';
import { DatePicker } from '@/components/ui/date-picker';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';
import { ImagePicker } from '@/components/image-picker';
import { Textarea } from '@/components/ui/textarea';

const breadcrumbs = [
  { title: 'لوحة التحكم', href: '/dashboard' },
  { title: "قائمة الإصدارات", href: "/dashboard/journal/issues/list" },
  { title: "تعديل الأصدار", href: "/dashboard/journal/issues/create" }
];


type FormValues = {
  title: string;
  description: string;
  cover_image: File | null;
  published_at: string;
}

export default function EditIssuePage() {
  const { issue } = usePage<{ issue: JournalIssue }>().props
  const form = useForm<FormValues>({
    title: issue.title,
    description: issue.description || '',
    cover_image: issue.cover_image,
    published_at: issue.published_at,
    _method: 'PUT'
  });

  const handleInputChange = (name: keyof typeof form.data, value: any) => {
    form.setData(name, value);
    if (form.errors[name]) form.clearErrors(name);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();

    form.transform((data) => ({
      ...data,
      cover_image: typeof data.cover_image === 'object' ? data.cover_image : null,
      _method: 'PUT'
    }));


    form.post(`/api/journal/issues/${issue.id}`, {
      preserveScroll: true,
      onError: (errors) => {
        toast.error('الرجاء إصلاح أخطاء التحقق');
      },
      onSuccess: () => {
        toast.success('تم تحديث الإصدار بنجاح');
      },
    });
  };

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title={"تعديل الاصدار"} />

      <div className="bg-background flex h-full min-h-screen flex-1 flex-col gap-4 p-4">
        <FormHeader
          title="تعديل الأصدار"
          description="ادخل جميع البيانات المطلوبة"
          onCancel={() => window.history.back()}
          onSave={handleSubmit}
          form={form}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <FormField
              label="عنوان الاصدار"
              error={form.errors.title}
              className="mb-6"
            >
              <Input
                id="title"
                name="title"
                value={form.data.title || ''}
                onChange={(e) => handleInputChange("title", e.target.value)}
                className={cn(form.errors.title && 'border-destructive')}
                required
              />
            </FormField>
            <FormField
              label="الوصف"
              error={form.errors.description}
              className="mb-6"
            >
              <Textarea
                id="description"
                name="description"
                value={form.data.description || ''}
                onChange={(e) => handleInputChange("description", e.target.value)}
                className={cn(form.errors.description && 'border-destructive')}
              />
            </FormField>
            <FormField
              label="تاريخ النشر"
              htmlFor="published_at"
              error={form.errors?.published_at}
            >
              <DatePicker
                onDateChange={(value) => handleInputChange("published_at", value)}
                date={form.data.published_at}
              />
            </FormField>
          </div>
          <FormField
            label="صورة الغلاف"
            htmlFor="cover_image"
            error={form.errors?.cover_image}
          >
            <ImagePicker
              onImageChange={(file) => handleInputChange("cover_image", file)}
              defaultImage={issue.cover_image}
            />
          </FormField>
        </div>
      </div>
    </AppLayout>
  );
}


