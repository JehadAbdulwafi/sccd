import { Link } from '@inertiajs/react'
import { Button } from './ui/button'


export default function SectionHeader({ title, desc, href }: { title: string, desc?: string, href?: string }) {
  return (
    <div className="container px-4 md:px-16 mx-auto flex flex-col md:flex-row justify-between md:items-center gap-2">
      <div>
        <h2 className="text-4xl md:text-5xl font-light mb-4">{title}</h2>
        <h1 className="text-lg max-w-3xl text-gray-600">{desc}</h1>
      </div>
      <div className="flex md:justify-end w-full">
        {href && (
          <Link href={href || "#"} className="flex-1 md:flex-none">
            <Button className="text-white w-full md:w-auto" size={"lg"}>عرض المزيد</Button>
          </Link>
        )}
      </div>
    </div>
  )
}

