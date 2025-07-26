import AppLayout from "@/layouts/app-layout";
import { Head, usePage } from "@inertiajs/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ContactMessage {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string | null;
  organization: string | null;
  message: string;
  created_at: string;
}

export default function MessageDetailsPage() {
  const { contactMessage } = usePage<{ contactMessage: ContactMessage }>().props;

  const breadcrumbs = [
    { title: 'لوحة التحكم', href: '/dashboard' },
    { title: 'الرسائل', href: '/dashboard/messages/list' },
    { title: `رسالة من ${contactMessage.first_name} ${contactMessage.last_name}`, href: '' },
  ];

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title={`رسالة من ${contactMessage.first_name} ${contactMessage.last_name}`} />

      <div className="flex h-full flex-1 flex-col gap-4 p-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-primary">تفاصيل الرسالة</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900">الاسم:</h3>
              <p className="text-gray-600">{contactMessage.first_name} {contactMessage.last_name}</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">البريد الإلكتروني:</h3>
              <p className="text-gray-600">{contactMessage.email}</p>
            </div>
            {contactMessage.phone && (
              <div>
                <h3 className="font-semibold text-gray-900">رقم الهاتف:</h3>
                <p className="text-gray-600">{contactMessage.phone}</p>
              </div>
            )}
            {contactMessage.organization && (
              <div>
                <h3 className="font-semibold text-gray-900">المؤسسة/الشركة:</h3>
                <p className="text-gray-600">{contactMessage.organization}</p>
              </div>
            )}
            <div>
              <h3 className="font-semibold text-gray-900">الرسالة:</h3>
              <p className="text-gray-600">{contactMessage.message}</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">تاريخ الإرسال:</h3>
              <p className="text-gray-600">{new Date(contactMessage.created_at).toLocaleString()}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}
