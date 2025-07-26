"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { SlidersHorizontal, X, CalendarCheck, Check } from "lucide-react"

export function FilterDialog() {
  const [selectedFocusArea, setSelectedFocusArea] = useState("all")

  const focusAreas = [
    { id: "all", label: "الجميع", count: "1k+" },
    { id: "climate-sustainability", label: "المناخ والاستدامة", count: 59 },
    { id: "transport-infrastructure", label: "النقل والبنية التحتية", count: 52 },
    { id: "energy-renewable", label: "خدمات الطاقة والطاقة المتجددة", count: 33 },
    { id: "oil-gas", label: "النفط والغاز", count: 44 },
    { id: "macro-micro-economy", label: "الاقتصاد الكلي والجزئي للطاقة", count: 30 },
  ]

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="border-gray-300 text-gray-600 hover:bg-gray-50 hover:text-gray-700 bg-transparent"
        >
          <SlidersHorizontal className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] p-6" dir="rtl">
        <DialogHeader className="flex flex-row-reverse items-center justify-between pb-4 border-b">
          <DialogTitle className="text-2xl font-bold text-right">المرشحات</DialogTitle>
          <DialogClose asChild>
            <Button variant="ghost" size="icon" className="text-gray-500 hover:text-gray-700">
              <X className="h-6 w-6" />
              <span className="sr-only">إغلاق</span>
            </Button>
          </DialogClose>
        </DialogHeader>
        <div className="py-6 space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-right">منطقة التركيز</h3>
            <div className="flex flex-wrap justify-end gap-2">
              {focusAreas.map((area) => (
                <Badge
                  key={area.id}
                  variant={selectedFocusArea === area.id ? "default" : "secondary"}
                  className={`cursor-pointer px-3 py-1 rounded-full text-sm flex items-center gap-1 ${selectedFocusArea === area.id
                    ? "bg-green-600 text-white hover:bg-green-700"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  onClick={() => setSelectedFocusArea(area.id)}
                >
                  {selectedFocusArea === area.id && <Check className="h-3 w-3" />}
                  {area.label}
                  <span
                    className={`ml-1 px-2 py-0.5 rounded-full text-xs ${selectedFocusArea === area.id ? "bg-white text-green-600" : "bg-gray-200 text-gray-600"
                      }`}
                  >
                    {area.count}
                  </span>
                </Badge>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-right">النوع</h3>
            <Select>
              <SelectTrigger className="w-full text-right">
                <SelectValue placeholder="اختر النوع" />
              </SelectTrigger>
              <SelectContent dir="rtl">
                <SelectItem value="type1">النوع 1</SelectItem>
                <SelectItem value="type2">النوع 2</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-right">المؤلف</h3>
            <Select>
              <SelectTrigger className="w-full text-right">
                <SelectValue placeholder="اختر المؤلف" />
              </SelectTrigger>
              <SelectContent dir="rtl">
                <SelectItem value="author1">المؤلف 1</SelectItem>
                <SelectItem value="author2">المؤلف 2</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-right">التاريخ</h3>
            <div className="flex flex-row-reverse gap-4">
              <div className="relative flex-1">
                <Input type="text" placeholder="ل" className="w-full pr-10 text-right" />
                <CalendarCheck className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
              <div className="relative flex-1">
                <Input type="text" placeholder="من" className="w-full pr-10 text-right" />
                <CalendarCheck className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row-reverse gap-4 pt-6 border-t">
          <Button className="flex-1 bg-green-600 hover:bg-green-700 text-white">تطبيق المرشحات</Button>
          <Button variant="outline" className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent">
            إزالة المرشحات
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

