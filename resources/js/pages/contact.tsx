import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Facebook, Mail, MapPin, Phone, Send } from "lucide-react"
import GuestLayout from "@/layouts/guest-layout"
import { useForm } from '@inertiajs/react';
import { toast } from 'sonner';
import PageHeaderImage from "@/components/page-header"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { BreadcrumbItem } from "@/types"
import { Head } from '@inertiajs/react';
import SectionHeader from "@/components/section-header"

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
      <Head title={"اتصل بنا - اللجنة العليا للمعاقين"}>
        <meta name="description" content={"تواصل معنا للاستفسارات، الشراكات، أو أي معلومات أخرى. نحن هنا لخدمتك."} />
      </Head>
      <div className="min-h-screen bg-gray-50" dir="rtl">
        <PageHeaderImage
          title="تواصل معنا"
          description="نحن هنا للإجابة على استفساراتكم وتقديم المساعدة في أي وقت"
        />
        <nav className="container mx-auto pt-8 px-4 md:px-16  px-4 text-sm text-gray-600">
          <Breadcrumbs breadcrumbs={breadcrumbs} />
        </nav>

        <section className={"py-10"}>
          <SectionHeader
            title="فريقنا هنا لمساعدتك"
            desc="تواصل معنا من خلال أي من قنوات الاتصال أدناه."
          />
          <div className="container px-4 md:px-16 mt-8 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="border-primary/30 shadow-[4px_2px_38px_-11px_rgba(0,_0,_0,_0.1)]">
                <CardHeader className="gap-4">
                  <div className="p-3 w-fit border border-primary/50 rounded-full">
                    <Mail className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">راسلنا عبر البريد الإلكتروني</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-1">
                    <p className="text-primary">توفر الخدمة: </p>
                    <p>طوال الأسبوع.</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <p className="text-primary">وقت الاستجابة: </p>
                    <p>خلال 5 أيام.</p>
                  </div>
                </CardContent>
                <CardFooter>
                  <p className="text-primary font-medium text-left w-full">support@sccd.ly</p>
                </CardFooter>
              </Card>

              <Card className="border-primary/30 shadow-[4px_2px_38px_-11px_rgba(0,_0,_0,_0.1)]">
                <CardHeader className="gap-4">
                  <div className="p-3 w-fit border border-primary rounded-full">
                    <Phone className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">الدعم عبر الهاتف</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-1">
                    <p className="text-primary">توفر الخدمة: </p>
                    <p>طوال الأسبوع.</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <p className="text-primary">وقت الاستجابة: </p>
                    <p>خلال 5 أيام.</p>
                  </div>
                </CardContent>
                <CardFooter>
                  <p className="text-primary font-medium text-left w-full" dir='ltr'>+218-91-1234567</p>
                </CardFooter>
              </Card>

              <Card className="border-primary/30 shadow-[4px_2px_38px_-11px_rgba(0,_0,_0,_0.1)]">
                <CardHeader className="gap-4">
                  <div className="p-3 w-fit border border-primary rounded-full">
                    <Facebook className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">التواصل عبر منصة facebook</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-1">
                    <p className="text-primary">توفر الخدمة: </p>
                    <p>طوال الأسبوع.</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <p className="text-primary">وقت الاستجابة: </p>
                    <p>خلال 5 أيام.</p>
                  </div>
                </CardContent>
                <CardFooter className='w-full'>
                  <p className="text-primary font-medium text-left w-full" dir='ltr'>@sccd</p>
                </CardFooter>
              </Card>
            </div>

          </div>
        </section>

        <section className={"py-10"}>
          <SectionHeader
            title="نموذج طلب الدعم"
            desc="املأ النموذج أدناه وسنتواصل معك في أقرب وقت ممكن"
          />
          <div className="container px-4 md:px-16 mt-8 mx-auto">
            <div>
              <Card className="shadow-[4px_2px_38px_-11px_rgba(0,_0,_0,_0.1)]">
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
          </div>
        </section>
      </div>

    </GuestLayout>
  )
}
