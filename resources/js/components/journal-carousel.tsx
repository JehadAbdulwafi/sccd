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
import { JournalCardWorks } from "./journal-card"
import SectionHeader from "./section-header"

export default function JournalCarousel() {
  const { issues } = usePage<{ issues: JournalIssue[] }>().props;
  const [api, setApi] = useState<CarouselApi>()

  return (
    <section className={"py-10 bg-gray-100"}>
      <SectionHeader
        title="المجلة العلمية"
        desc="يصدر مركزنا بحوث محكمة تدعم المنظمات العالمية في تطوير السياسات واتخاذ القرارات، وتعزيز العمل الاستشاري ونشر المعرفة."
        href="/journal"
      />
      <div className="select-none py-4 mx-auto" dir="rtl">
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
          <CarouselContent dir="rtl" className="">
            {issues.map((issue) => (
              <CarouselItem dir="rtl" key={issue.id} className="py-4 md:basis-full 2xl:basis-1/2">
                <JournalCardWorks issue={issue} />
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

