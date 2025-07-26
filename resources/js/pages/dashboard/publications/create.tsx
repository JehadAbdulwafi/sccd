import { Head, useForm } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import FormField from '@/components/shared/form-field';
import FormHeader from '@/components/shared/form-header';
import { DatePicker } from '@/components/ui/date-picker';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';
import { ImagePicker } from '@/components/image-picker';
import { Textarea } from '@/components/ui/textarea';
import KeyValueInput from '@/components/shared/key-value-input';
import { FilePicker } from '@/components/file-picker';

const breadcrumbs = [
  { title: 'لوحة التحكم', href: '/dashboard' },
  { title: "بحوث والدراسات", href: "/dashboard/publications/list" },
  { title: "اضافة منشور جديد", href: "/dashboard/publications/create" }
];

type FormValues = {
  title: string;
  description: string;
  image: File | null;
  file: File | null
  published_at: string;
  authors: { key: string; value: string }[];
  tag: string;
}

export default function CreatePublicationPage() {
  const form = useForm<FormValues>({
    title: "",
    description: "",
    image: null,
    file: null,
    authors: [],
    published_at: "",
    tag: "",
  });

  const handleInputChange = (name: keyof typeof form.data, value: any) => {
    form.setData(name, value);
    if (form.errors[name]) form.clearErrors(name);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();

    form.transform((data) => ({
      ...data,
      authors: JSON.stringify(data.authors),
    }))

    form.post('/api/publications', {
      preserveScroll: true,
      onError: (errors) => {
        toast.error('الرجاء إصلاح أخطاء التحقق');
      },
      onSuccess: () => {
        toast.success('تم إنشاء المنشور بنجاح');
      },
    });
  };

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title={'اضافة منشور جديد'} />

      <div className="bg-background flex h-full min-h-screen flex-1 flex-col gap-4 p-4">
        <FormHeader
          title="اضافة منشور جديد"
          description="ادخل جميع البيانات المطلوبة"
          onCancel={() => window.history.back()}
          onSave={handleSubmit}
          form={form}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <FormField
              label="عنوان المنشور"
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
              className="mb-6"
            >
              <DatePicker
                onDateChange={(value) => handleInputChange("published_at", value)}
                date={form.data.published_at}
              />
            </FormField>

            <FormField
              label="المؤلفون"
              error={form.errors.authors}
              className="mb-6"
            >
              <KeyValueInput
                value={form.data.authors}
                onChange={(newAuthors) => handleInputChange('authors', newAuthors)}
                keyPlaceholder='اسم المؤلف'
                valuePlaceholder='الكلية'
              />
            </FormField>
            <FormField
              label="الوسم"
              error={form.errors.tag}
              className="mb-6"
            >
              <Input
                id="tag"
                name="tag"
                value={form.data.tag || ''}
                onChange={(e) => handleInputChange("tag", e.target.value)}
                className={cn(form.errors.tag && 'border-destructive')}
              />
            </FormField>
          </div>

          <div className='flex flex-col gap-4'>
            <FormField
              label="الملف"
              htmlFor="file"
              error={form.errors?.file}
            >
              <FilePicker
                onFileChange={(file) => handleInputChange("file", file)}
              />
            </FormField>
            <FormField
              label="صورة الغلاف"
              htmlFor="image"
              error={form.errors?.image}
            >
              <ImagePicker
                onImageChange={(file) => handleInputChange("image", file)}
              />
            </FormField>

          </div>
        </div>
      </div>
    </AppLayout>
  );
}
