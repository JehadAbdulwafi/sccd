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
import { PublicationCard } from "./publication-card"
import SectionHeader from "./section-header"

export default function PublicationCarousel() {
  const { publications } = usePage<{ publications: Publication[] }>().props;
  const [api, setApi] = useState<CarouselApi>()

  return (
    <section className={"py-10 bg-gray-100"}>
      <SectionHeader
        title={"أحدث البحوث"}
        desc="ابق على اطلاع بأحدث بحوثنا التي تقدم رؤى مبنية على البيانات في عدة قطاعات لمواجهة التحديات المعاصرة في مجالي الطاقة والسياسات."
        href="/publications"
      />
      <div className="select-none" dir="rtl">
        <Carousel
          className="gap-2 w-full items-center p-0!"
          opts={{
            direction: "rtl",
            dragFree: true,
          }}
          setApi={setApi}
        >
          <CarouselContent dir="rtl" className="flex flex-row container px-4 md:px-16 mx-auto">
            {publications.map((publication) => (
              <CarouselItem dir="rtl" key={publication.id} className="lg:basis-1/3 py-4">
                <PublicationCard publication={publication} />
              </CarouselItem>
            ))}
          </CarouselContent>
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

