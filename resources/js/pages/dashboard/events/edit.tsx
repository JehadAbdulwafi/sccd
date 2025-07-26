import AppLayout from '@/layouts/app-layout';
import { Head, usePage } from '@inertiajs/react';
import EventForm from '@/components/events/event-form';
import { Event } from '@/types';

const breadcrumbs = [
  { title: 'لوحة التحكم', href: '/dashboard' },
  { title: 'الفعاليات', href: '/dashboard/events/list' },
  { title: 'تعديل فعالية', href: '#' },
];

export default function EditEventPage() {
  const { event } = usePage<{ event: Event }>().props;

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title={'تعديل فعالية'} />
      <div className="bg-background flex h-full min-h-screen flex-1 flex-col gap-4 p-4">
        <EventForm type="edit" event={event} />
      </div>
    </AppLayout>
  );
}
