import { Head, useForm, usePage } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import FormField from '@/components/shared/form-field';
import FormHeader from '@/components/shared/form-header';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';
import Editor from '@/components/editor';
import { ImagePicker } from '@/components/image-picker';
import { Textarea } from '@/components/ui/textarea';
import { DatePicker } from '@/components/ui/date-picker';
import KeyValueInput from '@/components/shared/key-value-input';
import { FilePicker } from '@/components/file-picker';

const breadcrumbs = [
  { title: 'لوحة التحكم', href: '/dashboard' },
  { title: 'بحوث والدراسات', href: '/dashboard/publications/list', },
  { title: "تعديل منشور", href: "/dashboard/publications/edit" }
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

export default function EditPublicationPage() {
  const { publication } = usePage<{ publication: Publication }>().props;
  const form = useForm<FormValues>({
    title: publication.title,
    image: publication.image,
    description: publication.description,
    file: publication.file,
    authors: publication.authors ? (typeof publication.authors === 'string' ? JSON.parse(publication.authors) : publication.authors) : [],
    published_at: publication.published_at,
    tag: publication.tag,
    _method: 'PUT'
  });

  const handleInputChange = (name: keyof typeof form.data, value: string | number | number[]) => {
    form.setData({ ...form.data, [name]: value });

    // @ts-ignore
    if (form.errors[name]) form.clearErrors(name);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (!validateForm()) {
      return;
    }

    console.log("Form data", form.data)
    form.transform((data) => ({
      ...data,
      // image: typeof data.image === 'object' ? data.image : null,
      // file: typeof data.file === 'object' ? data.file : null,
      authors: JSON.stringify(data.authors),
      _method: 'PUT'
    }));

    form.post(`/api/publications/${publication.id}`, {
      preserveScroll: true,
      onError: (errors) => {
        form.clearErrors();
        for (const key in errors) {
          const flatKey = key.replace(/\./g, '_') as keyof typeof form.data;
          if (flatKey in form.data) {
            form.setError(flatKey, errors[key]);
          }
        }
        toast.error('الرجاء إصلاح أخطاء التحقق');
        console.error('Validation errors:', errors);
      },
      onSuccess: () => {
        toast.success('تم تحديث المنشور بنجاح');
      },
    });
  };

  const validateForm = () => {
    console.log("calling validtation")
    let isValid = true;
    form.clearErrors();

    if (!form.data.title.trim()) {
      form.setError('title', 'name is required');
      isValid = false;
    }
    return isValid;
  };

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title={'تعديل منشور - JGREM'} />

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
                defaultFile={publication.file}
              />
            </FormField>
            <FormField
              label="صورة الغلاف"
              htmlFor="image"
              error={form.errors?.image}
            >
              <ImagePicker
                onImageChange={(file) => handleInputChange("image", file)}
                defaultImage={publication.image}
              />
            </FormField>

          </div>
        </div>
      </div>
    </AppLayout>
  );
}

