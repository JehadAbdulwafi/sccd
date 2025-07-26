import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import EventForm from '@/components/events/event-form';

const breadcrumbs = [
  { title: 'لوحة التحكم', href: '/dashboard' },
  { title: 'الفعاليات', href: '/dashboard/events/list' },
  { title: 'إنشاء فعالية', href: '/dashboard/events/create' },
];

export default function CreateEventPage() {
  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title={'إنشاء فعالية'} />
      <div className="bg-background flex h-full min-h-screen flex-1 flex-col gap-4 p-4">
        <EventForm type="create" />
      </div>
    </AppLayout>
  );
}
