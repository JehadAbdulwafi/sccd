import { ArrowLeft, Calendar } from "lucide-react";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { Link } from "@inertiajs/react";
import { format } from "date-fns";
import { arEG } from "date-fns/locale";

export function PublicationCard({ publication }: { publication: Publication }) {
  return (
    <Card className="w-full p-0 m-0 rounded-lg overflow-hidden shadow-none group bg-white">
      <CardContent className="p-0">
        <div className="relative w-full h-[500px] overflow-hidden">
          <img
            src={publication.image || "/placeholder.svg"}
            alt={publication.title}
            className="rounded-t-lg object-cover w-full h-[260px]"
          />
          <div className="absolute bottom-0 flex flex-col left-0 right-0 p-4 pb-0 min-h-[260px] bg-white transition-transform duration-300 ease-in-out group-hover:-translate-y-16">
            <Badge variant="secondary" className="mb-4 float-right clear-right">
              الذكاء الاصكناعي
            </Badge>
            <h3 className="text-lg font-bold mb-2 leading-tight text-start">{publication.title}</h3>
            <div className="flex items-center gap-2 mb-4 justify-start">
              <span className="text-sm text-gray-500">{format(publication.published_at, "dd MMM yyyy", { locale: arEG })}</span>
              <span className="text-sm text-gray-500">•</span>
              <Calendar className="h-4 w-4" />
            </div>
            <p className="text-sm text-gray-600 line-clamp-3 mt-auto">{publication.description}</p>
            <Link
              href={`/publications/${publication.id}`}
              className="flex bg-white items-center justify-start gap-2 text-primary hover:underline opacity-0 translate-y-full transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-10"
            >
              اقرأ المزيد
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default function PublicationCardHorizontal({ publication }: { publication: Publication }) {
  return (
    <Card className="w-full p-0 m-0 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <CardContent className="p-0 flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-48 aspect-[3/4] relative">
          <img
            src={publication.image || "/placeholder.svg"}
            alt={publication.title}
            className="w-full h-full object-cover rounded-t-lg md:rounded-none md:rounded-r-lg"
          />
        </div>
        <div className="w-full md:flex-1 p-4 flex flex-col justify-between text-right">
          <div>
            <Badge variant={"secondary"} className="mb-4">
              الذكاء الاصطناعي
            </Badge>
            <h3 className="text-lg font-bold mb-2 leading-tight">{publication.title}</h3>
            <div className="flex items-center gap-2 mb-4 justify-start">
              <div className="flex -space-x-2 overflow-hidden">
                <Calendar className="h-4 w-4" />
              </div>
              <span className="text-sm text-gray-500">{format(publication.published_at, "dd MMM yyyy", { locale: arEG })}</span>
            </div>
            <p className="text-md text-gray-600 line-clamp-3">{publication.description}</p>
          </div>
          <Link href={`/publications/${publication.id}`} className="flex items-center justify-start gap-2 text-primary hover:underline mt-4">
            اقرأ المزيد
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}

