import { Link } from '@inertiajs/react'
import { Button } from './ui/button'
import { ArrowLeft } from 'lucide-react'
import { HomePageBackground } from './gradients/home-page-background'

export default function HeroSection() {
  return (
    <section className="w-full h-full relative">
      <div className="relative w-full z-10 overflow-hidden">
        <HomePageBackground />
        <div className="flex flex-col px-4 container mx-auto py-12 md:py-24 z-20 lg:py-32 xl:py-48 justify-center space-y-4">
          <div className="gap-6 flex flex-col">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-gradient-to-r from-primary to-accent-foreground text-transparent bg-clip-text leading-snug sm:leading-tight xl:leading-[1.2]">
              مركز البحوث الهندسية <br />
              وتقنية المعلومات
            </h1>
            <p className="max-w-[600px] text-zinc-600 md:text-xl">
              نحن نقود الابتكار في مجال البحوث الهندسية وتقنية المعلومات، ونسعى لتطوير حلول تقنية متقدمة تخدم المجتمع
              وتساهم في التقدم العلمي والتكنولوجي
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-start">
            <Link href="/research">
              <Button size="lg" variant={"default"} className='text-white'>
                استكشف بحوثنا
                <ArrowLeft className="mr-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline">
                تواصل معنا
              </Button>
            </Link>
          </div>
        </div>
      </div>

    </section>
  )
}

