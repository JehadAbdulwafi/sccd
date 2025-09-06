import { Separator } from "@radix-ui/react-separator";
import { HeaderGradient } from "./gradients/header-gradient";

export default function PageHeader({ title, description }: {
  title: string,
  description?: string
}) {

  return (
    <section className="relative z-50 w-full pt-12 overflow-hidden">
      <HeaderGradient className="z-10" />
      <div className="relative z-20 container mx-auto px-4 md:px-16 flex flex-col items-start justify-end pb-12 h-full text-right">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 max-w-4xl">{title}</h1>
        <p className="max-w-2xl text-lg md:text-xl lg:text-2xl">{description}</p>
      </div>
      <Separator className={'footer-border'} />
    </section>
  );
};

