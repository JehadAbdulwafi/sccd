import { Partner } from '@/types'
import SectionHeader from './section-header'

export default function MembershipSection({ partners }: { partners: Partner[] }) {
  console.log(partners)
  return (
    <section className={"py-10 bg-gray-100"}>
      <SectionHeader
        title="الاعتماد والعضوية"
        desc="يمكنك معرفة المزيد عن اللجنة العليا للمعاقين."
      />
      <div className="container px-4 md:p-16 mx-auto">
        <div className='flex flex-wrap items-center justify-center gap-5'>
          {partners.map((m) => (
            <div className="w-36 h-36 md:w-40 md:h-40 bg-white p-4 shadow-[4px_2px_38px_-11px_rgba(0,_0,_0,_0.1)] grayscale hover:grayscale-0">
              <img src={m.logo} alt={m.name} className="w-full h-full object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
