import { useState, useEffect } from "react"

const newsItems = [
  "إطلاق مشروع بحثي جديد في مجال الذكاء الاصطناعي",
  "مؤتمر التقنيات الناشئة - 15 فبراير 2024",
  "نشر بحث جديد في مجلة IEEE المرموقة",
  "توقيع اتفاقية شراكة مع جامعة الملك سعود",
  "ورشة عمل حول إنترنت الأشياء - التسجيل مفتوح الآن",
]

export default function NewsMarquee() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % newsItems.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-primary text-white py-2 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex items-center">
          <span className="bg-accent-foreground px-3 py-1 rounded text-sm font-medium ml-4 whitespace-nowrap">أخبار عاجلة</span>
          <div className="flex-1 overflow-hidden">
            <div
              className="transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(${currentIndex * -100}%)` }}
            >
              <div className="flex">
                {newsItems.map((news, index) => (
                  <div key={index} className="min-w-full">
                    <p className="text-sm">{news}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
