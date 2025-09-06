import { cn } from "@/lib/utils";

export default function HeroSection() {
  // md:h-[calc(100vh-4.5rem)]
  return (
    <section
      className={cn(`w-full relative
        bg-gradient-to-b from-[rgba(0,128,0,0.1)] to-[rgba(0,128,0,0.2)]
        md:bg-[linear-gradient(rgba(0,128,0,0.1),rgba(0,128,0,0.2)),url('/images/banner.webp')]
        bg-no-repeat bg-cover`
      )}
    >
      <div className="relative grid grid-cols-1 md:grid-cols-2 w-full z-10 overflow-hidden container mx-auto py-12 md:py-24 z-20 lg:py-32 xl:py-48">
        <div className="flex flex-col px-4 justify-center space-y-4">
          <div className="gap-6 flex flex-col">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-gradient-to-r from-primary to-accent-foreground text-transparent bg-clip-text leading-snug sm:leading-tight xl:leading-[1.5]">
              اللجنة العليا لدعم <br />
              ذوي الإعاقة في ليبيا
            </h1>
            <p className="max-w-[600px] text-zinc-600 md:text-xl">
              رؤيتنا هي بناء مجتمع شامل يرسخ قيم الكرامة والعدالة، ويوفر الحقوق والرعاية والدعم لكل ذوي الإعاقة وأسرهم، مع تعزيز اندماجهم الكامل في جميع مجالات الحياة.
            </p>
          </div>

          <div className="flex flex-row gap-8 mt-4 w-fit">
          </div>
        </div>
        <div>
        </div>
      </div>
    </section>
  )
}

// <div className="flex flex-row gap-8 mt-4 w-fit">
//   <div className="flex flex-col items-center justify-center">
//     <img
//       src="/images/pa.png"
//       alt="شراكة بحثية مميزة"
//       className="h-auto w-40 object-contain invert-25"
//     />
//     <div className="w-full mt-2 text-center text-zinc-600">سفراء السلام</div>
//   </div>
//   <div className="flex flex-col items-center justify-center">
//     <img
//       src="/images/ic.png"
//       alt="شراكة بحثية مميزة"
//       className="h-auto w-40 object-contain invert-25"
//     />
//     <div className="w-full mt-2 text-center text-zinc-600">مستشارين دوليين معتمدين</div>
//   </div>
// </div>
