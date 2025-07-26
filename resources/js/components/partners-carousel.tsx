import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { Card, CardContent } from "./ui/card"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "./ui/button"
import { Link } from "@inertiajs/react"
import { ArrowLeft } from "lucide-react"


const partners = [
  {
    name: "المركز الليبي للأبحاث والدراسات",
    logo: "/images/lrsc.png",
    link: "https://lrsc.org.ly/",
    description: "مركز متخصص في البحوث والدراسات الاستراتيجية والاجتماعية.",
  },
  {
    name: "المركز الليبي المتقدم للتحاليل الكيميائية",
    logo: "/images/lacca.jpg",
    link: "https://www.lacca.ly/",
    description: "يقدم خدمات التحاليل الكيميائية المتقدمة للمؤسسات الصناعية والبحثية.",
  },
  {
    name: "الهيئة الليبية للبحث العلمي",
    logo: "/images/aonsrt.jpg",
    link: "https://www.aonsrt.ly/",
    description: "مؤسسة رائدة في دعم الابتكار وتطوير المشاريع البحثية الجديدة.",
  },
  {
    name: "المركز الليبي للبحوث الطبية",
    logo: "/images/lmrc.jpg",
    link: "https://www.lmrc.ly/",
    description: "يركز على البحوث الطبية الحيوية وتطوير العلاجات الجديدة.",
  },
  {
    name: "المركز الليبي المتقدم للتقنية – أبوسليم",
    logo: "/images/act.png",
    link: "https://act1.ly/",
    description: "يقدم حلولاً تقنية متقدمة واستشارات في مجالات التكنولوجيا الحديثة.",
  },
  {
    name: "المركز الليبي للاستشعار عن بعد وعلوم الفضاء",
    logo: "/images/lcrsss.jpg",
    link: "https://www.lcrsss.ly/",
    description: "متخصص في تطبيقات الاستشعار عن بعد وعلوم الفضاء والجيوماتكس.",
  },
  {
    name: "المركز الليبي لبحوث التقنيات الحيوية",
    logo: "/images/btc.png",
    link: "https://btc.org.ly/",
    description: "يركز على البحوث في مجال التقنيات الحيوية والهندسة الوراثية.",
  },
  {
    name: "المركز الليبي لبحوث ودراسات الطاقة الشمسية",
    logo: "/images/sersc.webp",
    link: "https://csers.ly/",
    description: "مكرس للبحث والتطوير في مجال الطاقة الشمسية وتطبيقاتها.",
  },
]

export default function PartnersCarousel() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  const handleNavigate = (index: number) => {
    if (api) {
      api.scrollTo(index, false)
    }
  }

  return (
    <div className="gap-4 flex flex-col rounded-xl select-none" dir="rtl">
      <div className="grid grid-cols-8">
        {partners.map((partner, index) => (
          <div onClick={() => {
            api?.scrollTo(index)
            setCurrent(index)
          }} className={cn("flex flex-1 items-center justify-center border-b pb-4 px-8 transition-all duration-300", current === index ? "border-primary" : "")}>
            <img
              src={partner.logo}
              className={cn("h-18 w-auto object-contain grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300", current === index ? "grayscale-0 opacity-100" : "grayscale")}
            />
          </div>
        ))}
      </div>
      <Carousel
        className=""
        opts={{
          direction: "rtl",
          loop: true,
        }}
        setApi={setApi}
      >
        <CarouselContent dir="rtl">
          {partners.map((partner, index) => (
            <CarouselItem dir="rtl" key={index}>
              <div className="flex flex-1 gap-8 group">
                <div className="relative flex-[0.6] max-h-[420px]  rounded-lg overflow-hidden">
                  <img
                    src={"https://images.unsplash.com/photo-1752503650851-cbc3f8b00679?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                    className="object-cover w-full h-full flex-1"
                  />
                  <div className="absolute w-full h-full flex flex-col items-start justify-end inset-0 p-4 bg-gradient-to-b from-transparent to-black/70 transition-transform duration-300 ease-in-out translate-y-14 group-hover:translate-y-0">
                    <h2 className="text-2xl font-semibold text-white text-gray-900 mb-4">
                      {partner.name}
                    </h2>

                    <Link
                      href="#"
                      className="flex items-center justify-start gap-2 text-white text-lg mt-4 hover:underline opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100"
                    >
                      اقرأ المزيد
                      <ArrowLeft className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
                <div className="flex flex-[0.4] flex-col gap-4">
                  <div>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                      {partner.name}
                    </h2>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-2xl font-bold text-primary">5+</h3>
                        <p className="text-gray-600">مشاريع بحثية مشتركة</p>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-primary">10+</h3>
                        <p className="text-gray-600">منشورات علمية مشتركة</p>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-primary">مجالات التعاون</h3>
                        <ul className="list-disc list-inside text-gray-600 mt-2">
                          <li>الذكاء الاصطناعي</li>
                          <li>تحليل البيانات الضخمة</li>
                          <li>الطاقة المتجددة</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}

