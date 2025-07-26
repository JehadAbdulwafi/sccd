import { Input } from './ui/input'
import { Button } from './ui/button'
import { Mail } from 'lucide-react'
import { useForm } from '@inertiajs/react'
import { useEffect } from 'react'

export default function NewsletterSubscribe() {
  const { data, setData, post, processing, errors, recentlySuccessful, reset } = useForm({
    email: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    post(route('newsletter.subscribe'));
  };

  useEffect(() => {
    if (recentlySuccessful) {
      reset('email');
    }
  }, [recentlySuccessful]);

  return (
    <div className="flex flex-col items-center z-10 text-white justify-center rounded-lg container mx-auto pt-16">
      <h2 className="text-3xl font-bold mb-4">اشترك في نشرتنا الإخبارية</h2>
      <p className=" max-w-md text-center">
        لا تفوت آخر الأخبار، الفعاليات، والبحوث الجديدة من مركزنا. اشترك الآن لتصلك التحديثات مباشرة إلى بريدك
        الإلكتروني.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col px-4 w-full mt-6 justify-center max-w-2xl">
        <div className="flex flex-col sm:flex-row gap-4">
          <Input
            type="email"
            placeholder="أدخل بريدك الإلكتروني هنا"
            className="flex-1 h-10 text-white border-gray-200 placeholder:text-gary-200"
            required
            value={data.email}
            onChange={(e) => setData('email', e.target.value)}
          />
          <Button type="submit" className='text-white' disabled={processing}>
            <Mail className="w-4 h-4 ml-2" />
            {processing ? 'جاري الاشتراك...' : 'اشترك الآن'}
          </Button>
        </div>
        {recentlySuccessful && <div className="text-green-500 text-sm mt-2">تم الاشتراك بنجاح!</div>}
      </form>
    </div>
  )
}

