import SectionHeader from './section-header'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

type Faq = {
  id: number;
  question: string;
  answer: string;
}

export default function ServicesSection({ faqs }: { faqs: Faq[] }) {

  return (
    <section className={"py-10 bg-white"}>
      <SectionHeader
        title="الأسئلة الشائعة"
        desc="يمكنك معرفة المزيد عن اللجنة العليا للمعاقين."
      />
      <div className="container px-4 md:p-16 mx-auto">
        <Accordion
          type="single"
          collapsible
          className="w-full flex flex-col gap-5"
          defaultValue="item-1"
        >
          {faqs.map((faq) => (
            <AccordionItem key={faq.id} value={`item-${faq.id}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

    </section>
  )
}

