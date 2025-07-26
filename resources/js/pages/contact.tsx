import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Send } from "lucide-react"
import GuestLayout from "@/layouts/guest-layout"
import { useForm } from '@inertiajs/react';
import { toast } from 'sonner';
import PageHeaderImage from "@/components/page-header"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { BreadcrumbItem } from "@/types"

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'الصفحة الرئيسية',
    href: '/',
  },
  {
    title: ' اتصل بنا',
    href: '/contact',
  },
];


export default function ContactPage() {
  const form = useForm({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    organization: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    form.post(route('contact.store'), {
      onSuccess: () => {
        toast.success('رسالتك وصلت بنجاح!');
        form.reset();
      },
      onError: () => {
        toast.error('حدث خطأ أثناء إرسال الرسالة. الرجاء المحاولة مرة أخرى.');
      },
    });
  };

  return (
    <GuestLayout>
      <div className="min-h-screen bg-gray-50" dir="rtl">
        <PageHeaderImage
          title="اتصل بنا"
          description="نحن هنا للإجابة على استفساراتكم وتقديم المساعدة في أي وقت"
        />
        <nav className="container mx-auto py-4  px-4 text-sm text-gray-600">
          <Breadcrumbs breadcrumbs={breadcrumbs} />
        </nav>


        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">أرسل لنا رسالة</CardTitle>
                  <p className="text-muted-foreground">املأ النموذج أدناه وسنتواصل معك في أقرب وقت ممكن</p>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">الاسم الأول *</label>
                        <Input
                          placeholder="أدخل اسمك الأول"
                          required
                          value={form.data.first_name}
                          onChange={(e) => form.setData('first_name', e.target.value)}
                        />
                        {form.errors.first_name && <div className="text-red-500 text-xs mt-1">{form.errors.first_name}</div>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">الاسم الأخير *</label>
                        <Input
                          placeholder="أدخل اسمك الأخير"
                          required
                          value={form.data.last_name}
                          onChange={(e) => form.setData('last_name', e.target.value)}
                        />
                        {form.errors.last_name && <div className="text-red-500 text-xs mt-1">{form.errors.last_name}</div>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">البريد الإلكتروني *</label>
                      <Input
                        type="email"
                        placeholder="example@email.com"
                        required
                        value={form.data.email}
                        onChange={(e) => form.setData('email', e.target.value)}
                      />
                      {form.errors.email && <div className="text-red-500 text-xs mt-1">{form.errors.email}</div>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">رقم الهاتف</label>
                      <Input
                        placeholder="+966 50 123 4567"
                        value={form.data.phone}
                        onChange={(e) => form.setData('phone', e.target.value)}
                      />
                      {form.errors.phone && <div className="text-red-500 text-xs mt-1">{form.errors.phone}</div>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">المؤسسة/الشركة</label>
                      <Input
                        placeholder="اسم المؤسسة أو الشركة"
                        value={form.data.organization}
                        onChange={(e) => form.setData('organization', e.target.value)}
                      />
                      {form.errors.organization && <div className="text-red-500 text-xs mt-1">{form.errors.organization}</div>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">الرسالة *</label>
                      <Textarea
                        placeholder="اكتب رسالتك هنا..."
                        rows={5}
                        required
                        value={form.data.message}
                        onChange={(e) => form.setData('message', e.target.value)}
                      />
                      {form.errors.message && <div className="text-red-500 text-xs mt-1">{form.errors.message}</div>}
                    </div>

                    <Button type="submit" className="w-full" disabled={form.processing}>
                      <Send className="w-4 h-4 ml-2" />
                      إرسال الرسالة
                    </Button>
                  </form>
                </CardContent>
              </Card>

            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {/* Contact Details */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">معلومات التواصل</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4 space-x-reverse">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">البريد الإلكتروني</h3>
                      <p className="text-gray-600">info@eitrc.ly</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 space-x-reverse">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">العنوان</h3>
                      <p className="text-gray-600">
                        نادي الظهرة، بني وليد - ليبيا
                      </p>
                    </div>
                  </div>

                </CardContent>
              </Card>

              {/* Map Placeholder */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-primary">الموقع على الخريطة</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                    <img
                      src="/map-preview.png"
                      alt="map"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

    </GuestLayout>
  )
}
