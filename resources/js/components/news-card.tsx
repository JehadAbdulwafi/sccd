import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { ArrowLeft, Calendar } from 'lucide-react'
import { Link } from '@inertiajs/react'
import { Button } from './ui/button'
import { format } from 'date-fns'
import { arEG } from 'date-fns/locale'

export default function NewsCard({ item }: { item: Post }) {
  return (
    <Card key={item.id} className="pt-0 rounded-none border-none transition-shadow shadow-[4px_2px_38px_-11px_rgba(0,_0,_0,_0.1)]">
      <img
        src={item.image || "/placeholder.svg"}
        alt={item.title}
        width={300}
        height={200}
        className="w-full h-48 object-cover"
      />
      <CardHeader>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Calendar className="w-4 h-4" />
          <span>{new Date(item.created_at).toLocaleDateString("ar-SA")}</span>
        </div>
        <CardTitle className="text-xl mb-2">{item.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Link href={`/news/${item.id}`}>
          <Button variant="link" className="p-0 h-auto">
            اقرأ المزيد
            <ArrowLeft className="mr-2 h-4 w-4" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  )
}

export function NewsCardHome({ item }: { item: Post }) {
  return (
    <div key={item.id} className="relative hover:shadow-lg pt-0 h-[500px] transition-shadow group overflow-hidden">
      <img
        src={item.image || "/placeholder.svg"}
        alt={item.title}
        width={300}
        height={200}
        className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300 ease-in-out"
      />
      <div
        className="absolute bottom-0 flex flex-col left-0 right-0 p-4 pb-0 w-full h-full bg-gradient-to-b from-transparent to-black/70 transition-transform duration-300 ease-in-out translate-y-14 group-hover:translate-y-0"
      >
        <div className="flex-1 flex flex-col justify-end pb-8 text-white">
          <h1 className="text-lg max-w-3xl text-gray-200 mb-4">{format(new Date(item.created_at), "dd MMMM yyyy", { locale: arEG })}</h1>
          <h2 className="text-4xl text-white font-light">{item.title}</h2>
          <Link
            href={`/news/${item.id}`}
            className="flex items-center justify-start gap-2 text-white text-lg mt-4 hover:underline opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100"
          >
            اقرأ المزيد
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}

