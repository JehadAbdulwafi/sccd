import { Head, useForm, usePage } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import FormField from '@/components/shared/form-field';
import FormHeader from '@/components/shared/form-header';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';
import { ImagePicker } from '@/components/image-picker';
import { Textarea } from '@/components/ui/textarea';

const breadcrumbs = [
  { title: 'لوحة التحكم', href: '/dashboard' },
  { title: "الشركاء", href: "/dashboard/partners/list" },
  { title: "تعديل الشريك", href: "" }
];

type FormValues = {
  name: string;
  description: string;
  logo: File | string | null;
  website: string;
  _method: 'PUT';
}

export default function EditPartnerPage() {
  const { partner } = usePage<{ partner: Partner }>().props;
  const form = useForm<FormValues>({
    name: partner.name,
    description: partner.description || '',
    logo: partner.logo,
    website: partner.website || '',
    _method: 'PUT'
  });

  const handleInputChange = (name: keyof typeof form.data, value: any) => {
    form.setData(name, value);
    if (form.errors[name]) form.clearErrors(name);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();

    form.post(route('api.partners.update', partner.id), {
      preserveScroll: true,
      onError: (errors) => {
        toast.error('الرجاء إصلاح أخطاء التحقق');
      },
      onSuccess: () => {
        toast.success('Partner updated successfully');
      },
    });
  };

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title={'تعديل الشريك'} />

      <form onSubmit={handleSubmit}>
        <div className="bg-background flex h-full min-h-screen flex-1 flex-col gap-4 p-4">
          <FormHeader
            title="تعديل الشريك"
            description="ادخل جميع البيانات المطلوبة"
            onCancel={() => window.history.back()}
            onSave={handleSubmit}
            form={form}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <FormField
                label="الاسم"
                error={form.errors.name}
                className="mb-6"
              >
                <Input
                  id="name"
                  name="name"
                  value={form.data.name || ''}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className={cn(form.errors.name && 'border-destructive')}
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
                label="الموقع الإلكتروني"
                error={form.errors.website}
                className="mb-6"
              >
                <Input
                  id="website"
                  name="website"
                  type="url"
                  value={form.data.website || ''}
                  onChange={(e) => handleInputChange("website", e.target.value)}
                  className={cn(form.errors.website && 'border-destructive')}
                />
              </FormField>
            </div>
            <FormField
              label="الشعار"
              htmlFor="logo"
              error={form.errors?.logo}
            >
              <ImagePicker
                onImageChange={(file) => handleInputChange("logo", file)}
                defaultImage={partner.logo}
              />
            </FormField>
          </div>
        </div>
      </form>
    </AppLayout>
  );
}
