import { Event } from "@/types";
import { format, parse } from "date-fns";
import { arEG } from "date-fns/locale";

export function EventCardHome({ event }: { event: Event }) {
  const month = format(event.date, "MMMM", { locale: arEG });
  const day = format(event.date, "d", { locale: arEG });
  const parsedFrom = parse(event.time_from, 'HH:mm', new Date())
  const parsedTo = parse(event.time_to, 'HH:mm', new Date())
  return (
    <div className="bg-white p-6 max-w-xs h-72 flex flex-col gap-4 shadow-[-4px_14px_38px_-25px_rgba(0,_0,_0,_0.1)]">
      <div className="text-5xl text-primary">{day}</div>
      <div className="text-xl text-zinc-500">{month}</div>
      <div className="text-lg line-clamp-3 text-zinc-900">{event.title}</div>
      <div className="flex flex-row gap-2 mt-auto">
        <div>{format(parsedFrom, "h:mm a", { locale: arEG })}</div>
        -
        <div>{format(parsedTo, "h:mm a", { locale: arEG })}</div>
      </div>
    </div>
  )
}

