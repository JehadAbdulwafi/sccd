import { Head, useForm } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import FormField from '@/components/shared/form-field';
import FormHeader from '@/components/shared/form-header';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';
import Editor from '@/components/editor';
import { ImagePicker } from '@/components/image-picker';
import { Textarea } from '@/components/ui/textarea';

const breadcrumbs = [
  { title: 'لوحة التحكم', href: '/dashboard' },
  { title: 'الأخبار والمنشورات', href: '/dashboard/posts/list', },
  { title: "اضافة منشور جديد", href: "/dashboard/posts/create" }
];


type FormValues = {
  title: string;
  image: File | null;
  desc: string | null;
  content: string | null;
}

export default function CreatePostPage() {
  const form = useForm<FormValues>({
    title: "",
    image: null,
    desc: null,
    content: null,
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

    form.post('/api/posts', {
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
        toast.success('تم إنشاء المنشور بنجاح');
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
      <Head title={'اضافة منشور جديد'} />

      <div className="bg-background flex h-full min-h-screen flex-1 flex-col gap-4 p-4">
        <FormHeader
          title="اضافة منشور جديد"
          description="ادخل جميع البيانات المطلوبة"
          onCancel={() => window.history.back()}
          onSave={handleSubmit}
          form={form}
        />


        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          <div className="flex flex-col col-span-2">
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
              label="وصف المنشور"
              htmlFor="desc"
              error={form.errors?.desc}
            >
              <Textarea
                id="desc"
                name="desc"
                value={form.data.desc || ''}
                onChange={(e) => handleInputChange("desc", e.target.value)}
                className={cn(form.errors.title && 'border-destructive')}
                required
              />
            </FormField>
            <FormField
              label="صورة"
              htmlFor="image"
              error={form.errors?.image}
            >
              <ImagePicker
                onImageChange={(e) => handleInputChange("image", e)}
              />
            </FormField>
          </div>


          <div className='col-span-3'>
            <FormField
              label="محتوى المنشور"
              htmlFor="content"
              error={form.errors?.desc}
            >
              <Editor
                content={form.data.content || ''}
                onChange={(e) => handleInputChange("content", e)}
              />
            </FormField>

          </div>
        </div>


      </div>
    </AppLayout>
  );
}


