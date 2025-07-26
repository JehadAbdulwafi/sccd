import { Card, CardContent } from './ui/card'
import { format } from 'date-fns'
import { arEG } from 'date-fns/locale'
import { Badge } from './ui/badge'
import { ArrowLeft, Calendar } from 'lucide-react'
import { Link } from '@inertiajs/react'

export default function JournalCard({ issue }: { issue: JournalIssue }) {
  return (
    <Card className="w-full p-0 m-0 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <CardContent className="p-0 flex flex-col md:flex-row-reverse gap-4">
        <div className="w-full md:flex-1 p-4 flex flex-col justify-between text-right">
          <div>
            <Badge variant={"secondary"} className="mb-4">
              الذكاء الاصكناعي
            </Badge>
            <h3 className="text-lg font-bold mb-2 leading-tight">{issue.title}</h3>
            <div className="flex items-center gap-2 mb-4 justify-start">
              <div className="flex -space-x-2 overflow-hidden">
                <Calendar className="h-4 w-4" />
              </div>
              <span className="text-sm text-gray-500">{format(issue.published_at, "dd MMM yyyy", { locale: arEG })}</span>
            </div>
            <p className="text-md text-gray-600 line-clamp-3">{issue.description}</p>
          </div>
          <Link href={`/journal/${issue.id}`} className="flex items-center justify-start gap-2 text-primary hover:underline mt-4">
            اقرأ المزيد
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </div>
        <div className="w-full md:w-48 aspect-[3/4] relative">
          <img
            src={issue.cover_image || "/placeholder.svg"}
            alt={issue.title}
            className="w-full h-full object-cover rounded-t-lg md:rounded-none md:rounded-r-lg"
          />
        </div>
      </CardContent>
    </Card>
  )
}

export function JournalCardWorks({ issue }: { issue: JournalIssue }) {
  return (
    <div className="p-8 bg-white shadow-[4px_2px_38px_-11px_rgba(0,_0,_0,_0.1)] rounded-xl h-full">
      <div className="flex flex-col md:flex-row md:justify-between overflow-hidden gap-4 md:gap-8 rounded-2xl h-full">
        <div className="mod--results flex md:flex-1 h-[260px]">
          <a className="w-full h-full">
            <img src={issue.cover_image || "/placeholder.svg"} className="w-full h-full object-cover" />
          </a>
        </div>
        <div className="p-4 pb-0 flex-1">
          <div className="flex flex-col md:gap-4 h-full mb-4">
            <div className="flex items-center gap-2 mb-4 justify-start">
              <div className="flex -space-x-2 overflow-hidden">
                <Calendar className="h-4 w-4 text-gray-700" />
              </div>
              <span className="text-sm text-gray-700">{format(issue.published_at, "dd MMM yyyy", { locale: arEG })}</span>
            </div>
            <div className="text-xl md:text-3xl font-light mb-4">{issue.title}</div>
            <div className="flex-1 items-start flex mb-4">
              <p className="text-gray-900 md:text-lg font-light line-clamp-5">{issue.description}</p>
            </div>
            <div className="mt-auto mb-4">
              <Link
                href={`/journal/${issue.id}`}
                className="flex items-center justify-start gap-2 text-primary hover:underline"
              >
                اقرأ المزيد
                <ArrowLeft className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

