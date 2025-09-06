import SectionHeader from './section-header'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Facebook, Mail, Phone } from 'lucide-react'

export default function SupportSection() {
  return (
    <section className={"py-10 bg-gray-100"}>
      <SectionHeader
        title="المساعدة والدعم"
        desc="نحن هنا لخدمتك على مدار الساعة."
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
  )
}

