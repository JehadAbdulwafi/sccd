import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { useState } from "react"
import { Button } from "./ui/button"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { usePage } from "@inertiajs/react"
import NewsCard from "./news-card"
import SectionHeader from "./section-header"

export default function NewsCarousel() {
  const { posts } = usePage<{ posts: Post[] }>().props;
  const [api, setApi] = useState<CarouselApi>()

  return (
    <section className={"py-10 bg-gray-100"}>
      <SectionHeader
        title="أخبار اللجنة"
        desc="ابق على اطلاع بأحدث الاخبار والمنشورات التي تقدم رؤى مبنية على البيانات في عدة قطاعات لمواجهة التحديات."
        href="/news"
      />
      <div className="select-none py-4 px-4 md:px-0 mx-auto" dir="rtl">
        <Carousel
          className="gap-2 w-full items-center p-0!"
          opts={{
            direction: "rtl",
            dragFree: true,
          }}
          setApi={setApi}
        >
          {posts.length > 0 && (
            <CarouselContent dir="rtl" className="flex flex-row container px-4 md:px-16 mx-auto">
              {posts.map((item) => (
                <CarouselItem dir="rtl" key={item.id} className="lg:basis-1/3 py-4">
                  <NewsCard item={item} />
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

