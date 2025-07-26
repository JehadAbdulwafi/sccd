import { cn } from '@/lib/utils'
import { Link } from '@inertiajs/react'
import React from 'react'
import { Button } from './ui/button'

type Props = {
  children: React.ReactNode
  subtitle: string
  title: string
  desc?: string
  className?: string
  href?: string
}

export default function HomeSection({ children, title, subtitle, href, className }: Props) {
  return (

    <section className={cn("py-10", className)}>
      <div className="container px-16 mx-auto">
        <div className="flex flex-row justify-between items-center">
          <div>
            <h2 className="text-5xl font-light mb-4">{subtitle}</h2>
            <h1 className="text-lg max-w-3xl text-gray-700">{title}</h1>
          </div>
          {href && (
            <div className="flex justify-end">
              <Link href={href}>
                <Button className="text-white" size={"lg"}>عرض المزيد</Button>
              </Link>
            </div>
          )}
        </div>
        <div className='py-4'>
          {children}
        </div>
      </div>
    </section>
  )
}
