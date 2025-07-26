import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { useState } from "react"
import { Button } from "./ui/button"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Link, usePage } from "@inertiajs/react"
import { NewsCardHome } from "./news-card"
import SectionHeader from "./section-header"

export default function NewsCarousel() {
  const { posts } = usePage<{ posts: Post[] }>().props;
  const [api, setApi] = useState<CarouselApi>()

  return (
    <section className={"py-10 bg-white"}>
      <SectionHeader
        title="الأخبار والمنشورات"
        desc="ابق على اطلاع بأحدث الاخبار والمنشورات التي تقدم رؤى مبنية على البيانات في عدة قطاعات لمواجهة التحديات المعاصرة في مجالي الطاقة والسياسات."
        href="/news"
      />
      <div className="select-none py-4 px-4 md:px-0 mx-auto" dir="rtl">
        <Carousel
          className=""
          opts={{
            direction: "rtl",
            align: "center",
            dragFree: false,
            loop: true,
          }}
          setApi={setApi}
        >
          {posts.length > 0 && (
            <CarouselContent dir="rtl" className="">
              {posts.map((item) => (
                <CarouselItem dir="rtl" key={item.id} className="py-4 md:basis-1/2">
                  <NewsCardHome item={item} />
                </CarouselItem>
              ))}
            </CarouselContent>
          )}

        </Carousel>
      </div>
      <div className="flex container mx-auto px-4 md:px-16 gap-2 w-full items-center justify-end">
        <Button onClick={() => api?.scrollPrev()} variant={"outline"}>
          <ArrowRight />
        </Button>
        <Button onClick={() => api?.scrollNext()} variant={"outline"}>
          <ArrowLeft />
        </Button>
      </div>
    </section>

  )
}

