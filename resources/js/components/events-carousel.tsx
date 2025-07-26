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
import { Event } from "@/types"
import { EventCardHome } from "./event-card"
import SectionHeader from "./section-header"

export default function EventsCarousel() {
  const { events } = usePage<{ events: Event[] }>().props;
  const [api, setApi] = useState<CarouselApi>()

  return (
    <section className={"py-10 bg-gray-100"}>
      <SectionHeader
        title="الفعاليات"
        href="/events"
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
            {events.map((event) => (
              <CarouselItem dir="rtl" key={event.id} className="lg:basis-1/4 py-4">
                <EventCardHome event={event} />
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

