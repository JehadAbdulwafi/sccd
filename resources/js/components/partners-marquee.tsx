"use client"

const logos: { src: string; alt: string }[] = [
  {
    src: "/images/act.png",
    alt: "المركز الليبي للأبحاث والدراسات",
  },
  {
    src: "/images/aonsrt.jpg",
    alt: "المركز الليبي المتقدم للتحاليل الكيميائية",
  },
  {
    src: "/images/btc.png",
    alt: "مؤسسة الأبحاث والابتكار",
  },
  {
    src: "/images/lacca.jpg",
    alt: "المركز الليبي المتقدم للتقنية – أبوسليم",
  },
  {
    src: "/images/lcrsss.jpg",
    alt: "المركز الليبي للبحوث الطبية",
  },
  {
    src: "/images/lmrc.jpg",
    alt: "المركز الليبي للاستشعار عن بعد وعلوم الفضاء",
  },
  {
    src: "/images/lrsc.png",
    alt: "المركز الليبي للاستشعار عن بعد وعلوم الفضاء",
  },
  {
    src: "/images/sersc.webp",
    alt: "المركز الليبي للاستشعار عن بعد وعلوم الفضاء",
  },
]

export default function PartnersMarquee() {
  return (
    <div className="relative w-full mx-auto select-none flex bg-white items-center justify-center py-12">
      {/* scoller */}
      <div data-animated="true" className="marquee">
        {/*  innder scoller */}
        <div className="marquee__inner">
          {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
            <img
              src={logo.src}
              alt={logo.alt}
              key={index}
              className="h-16 w-16 md:h-24 md:w-24 object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            />
          ))}
        </div>
      </div>
    </div>
  )
}


