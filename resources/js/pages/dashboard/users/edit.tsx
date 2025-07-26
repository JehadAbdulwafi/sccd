import { Head, useForm, usePage } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import FormField from '@/components/shared/form-field';
import FormHeader from '@/components/shared/form-header';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

const breadcrumbs = [
  { title: 'لوحة التحكم', href: '/dashboard' },
  { title: "المستخدمين", href: "/dashboard/users/list" },
  { title: "تعديل المستخدم", href: "" }
];

type FormValues = {
  name: string;
  email: string;
  password?: string;
  password_confirmation?: string;
  _method: 'PUT';
}

export default function EditUserPage() {
  const { user } = usePage<{ user: User }>().props;
  const form = useForm<FormValues>({
    name: user.name,
    email: user.email,
    password: '',
    password_confirmation: '',
    _method: 'PUT'
  });

  const handleInputChange = (name: keyof typeof form.data, value: string) => {
    form.setData(name, value);
    if (form.errors[name]) form.clearErrors(name);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (form.data.password && form.data.password !== form.data.password_confirmation) {
      form.setError('password_confirmation', 'كلمة المرور وتأكيدها غير متطابقين');
      return;
    }

    form.post(route('dashboard.users.update', user.id), {
      preserveScroll: true,
      onError: (errors) => {
        toast.error('الرجاء إصلاح أخطاء التحقق');
      },
      onSuccess: () => {
        toast.success('User updated successfully');
      },
    });
  };

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title={'تعديل المستخدم'} />

      <form onSubmit={handleSubmit}>
        <div className="bg-background flex h-full min-h-screen flex-1 flex-col gap-4 p-4">
          <FormHeader
            title="تعديل المستخدم"
            description="ادخل جميع البيانات المطلوبة"
            onCancel={() => window.history.back()}
            onSave={handleSubmit}
            form={form}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              label="البريد الإلكتروني"
              error={form.errors.email}
              className="mb-6"
            >
              <Input
                id="email"
                name="email"
                type="email"
                value={form.data.email || ''}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className={cn(form.errors.email && 'border-destructive')}
                required
              />
            </FormField>

            <FormField
              label="كلمة المرور (اتركها فارغة لعدم التغيير)"
              error={form.errors.password}
              className="mb-6"
            >
              <Input
                id="password"
                name="password"
                type="password"
                value={form.data.password || ''}
                onChange={(e) => handleInputChange("password", e.target.value)}
                className={cn(form.errors.password && 'border-destructive')}
              />
            </FormField>

            <FormField
              label="تأكيد كلمة المرور"
              error={form.errors.password_confirmation}
              className="mb-6"
            >
              <Input
                id="password_confirmation"
                name="password_confirmation"
                type="password"
                value={form.data.password_confirmation || ''}
                onChange={(e) => handleInputChange("password_confirmation", e.target.value)}
                className={cn(form.errors.password_confirmation && 'border-destructive')}
              />
            </FormField>
          </div>
        </div>
      </form>
    </AppLayout>
  );
}
