import GuestLayout from "@/layouts/guest-layout";
import { Head } from "@inertiajs/react";
import PageHeader from "@/components/page-header";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { BreadcrumbItem } from "@/types";

type Faq = {
  id: number;
  question: string;
  answer: string;
}

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'الصفحة الرئيسية',
    href: '/',
  },
  {
    title: 'الأسئلة الشائعة',
    href: '/faq',
  },
];

export default function FaqPage({ faqs }: { faqs: Faq[] }) {
  return (
    <GuestLayout>
      <Head title="الأسئلة الشائعة" />
      <div className="min-h-screen bg-gray-50 pb-16">
        <PageHeader title="الأسئلة الشائعة" />
        <nav className="container mx-auto pt-8 px-4 md:px-16  px-4 text-sm text-gray-600">
          <Breadcrumbs breadcrumbs={breadcrumbs} />
        </nav>
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <Accordion type="single" collapsible className="w-full flex flex-col gap-5">
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
      </div>
    </GuestLayout>
  );
}
