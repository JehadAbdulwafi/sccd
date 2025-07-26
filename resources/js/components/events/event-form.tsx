import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { Event } from '@/types';
import { useForm } from '@inertiajs/react';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import FormHeader from '@/components/shared/form-header';
import { Textarea } from '../ui/textarea';

export default function EventForm({
  event,
  type,
}: {
  event?: Event;
  type: 'create' | 'edit';
}) {
  const { data, setData, post, errors, put } = useForm({
    title: event?.title ?? '',
    desc: event?.desc ?? '',
    date: event?.date ?? new Date(),
    time_from: event?.time_from ?? '',
    time_to: event?.time_to ?? '',
    place: event?.place ?? '',
  });

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (type === 'create') {
      post(route('dashboard.events.store'));
    } else {
      put(route('dashboard.events.update', event?.id));
    }
  }

  return (
    <form onSubmit={onSubmit} className='space-y-4'>
      <FormHeader
        title={type === 'create' ? 'إنشاء فعالية' : 'تعديل فعالية'}
        description='املأ تفاصيل الفعالية'
        onCancel={() => window.history.back()}
        onSave={onSubmit}
        form={useForm()}
      />

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>

        <div className='space-y-4'>
          <div>
            <Label htmlFor='title'>العنوان</Label>
            <Input
              id='title'
              value={data.title}
              onChange={(e) => setData('title', e.target.value)}
            />
            {errors.title && <p className='text-red-500 text-sm mt-1'>{errors.title}</p>}
          </div>

          <div>
            <Label htmlFor='desc'>الوصف</Label>
            <Textarea
              id='desc'
              value={data.desc}
              onChange={(e) => setData('desc', e.target.value)}
              rows={5}
              className='min-h-28'

            />
            {errors.desc && <p className='text-red-500 text-sm mt-1'>{errors.desc}</p>}
          </div>
        </div>


        <div className='flex flex-col gap-4'>
          <div className='col-span-2'>
            <Label htmlFor='date'>التاريخ</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={'outline'}
                  className={cn(
                    'w-full justify-start text-left font-normal',
                    !data.date && 'text-muted-foreground'
                  )}
                >
                  <CalendarIcon className='mr-2 h-4 w-4' />
                  {data.date ? format(data.date, 'PPP') : <span>اختر تاريخ</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className='w-auto p-0'>
                <Calendar
                  mode='single'
                  selected={data.date}
                  onSelect={(date) => setData('date', date)}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            {errors.date && <p className='text-red-500 text-sm mt-1'>{errors.date}</p>}
          </div>
          <div className='flex flex-row gap-4'>
            <div className='flex-1'>
              <Label htmlFor='time_from'>من الساعة</Label>
              <div className='relative'>
                <Input
                  id='time_from'
                  type='time'
                  value={data.time_from}
                  onChange={(e) => setData('time_from', e.target.value)}
                  className='flex flex-row justify-end'
                />
              </div>
              {errors.time_from && (
                <p className='text-red-500 text-sm mt-1'>{errors.time_from}</p>
              )}
            </div>

            <div className='flex-1'>
              <Label htmlFor='time_to'>الى الساعة</Label>
              <div className='relative'>
                <Input
                  id='time_to'
                  type='time'
                  dir='ltr'
                  value={data.time_to}
                  onChange={(e) => setData('time_to', e.target.value)}
                  className='flex flex-row justify-end'
                />
              </div>
              {errors.time_to && <p className='text-red-500 text-sm mt-1'>{errors.time_to}</p>}
            </div>

          </div>
          <div className='col-span-2'>
            <Label htmlFor='place'>المكان</Label>
            <Input
              id='place'
              value={data.place}
              onChange={(e) => setData('place', e.target.value)}
            />
            {errors.place && <p className='text-red-500 text-sm mt-1'>{errors.place}</p>}
          </div>
        </div>
      </div>
    </form>
  );
}
