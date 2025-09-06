import { CheckoutGradients } from './gradients/checkout-gradients'
import { Link } from '@inertiajs/react'
import { Button } from './ui/button'

export default function AboutSection() {
  return (
    <section className="bg-white w-full relative z-10 overflow-hidden">
      <CheckoutGradients />
      <div className="container p-16 mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="">
          <h2 className="text-3xl md:text-5xl font-light mb-4">من نحن</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            اللجنة العليا لرعاية المعاقين في ليبيا هي مؤسسة مجتمع مدني مستقلة، مقرها مدينة طرابلس، وتتولى اللجنة مهام دعم ورعاية الأشخاص ذوي الإعاقة بجميع فئاتهم، من خلال وضع السياسات والبرامج، وتقديم الخدمات الاجتماعية والنفسية واللوجستية، فضلاً عن الإشراف على عمليات التوعية، والتثقيف، والرصد لحقوقهم التي كفلتها القوانين الوطنية والاتفاقيات الدولية. وتسعى اللجنة إلى بناء شراكات مع مؤسسات الدولة والمجتمع المدني، وتعزيز قدرات العاملين في هذا المجال عبر التدريب والتأهيل، بما يضمن تحقيق حياة كريمة للأشخاص ذوي الإعاقة في جميع مناطق ليبيا، وفق متطلبات الجودة والمعايير الإنسانية المعتمدة محليًا ودوليًا.
          </p>
          <Link href="/about">
            <Button className="text-white" size={"lg"}>عرض المزيد</Button>
          </Link>
        </div>
        {/* Featured Partner Card */}
        <div className="relative rounded-3xl h-full">
          <img
            src="/images/logo.png"
            alt="شراكة بحثية مميزة"
            width={300}
            height={400}
            className="w-full h-auto object-contain rounded-3xl"
          />
        </div>
      </div>
    </section>
  )
}

// <div className="flex flex-row h-28 w-full gap-8 mb-4">
//   <img
//     src="/images/pa.png"
//     alt="شراكة بحثية مميزة"
//     className="h-auto object-contain"
//   />
//   <img
//     src="/images/ic.png"
//     alt="شراكة بحثية مميزة"
//     className="h-auto object-contain"
//   />
// </div>
