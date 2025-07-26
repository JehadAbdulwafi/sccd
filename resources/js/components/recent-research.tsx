import { Badge, FileText } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

export default function RecentResearch() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[1, 2, 3].map((item) => (
        <Card key={item} className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <Badge className="w-fit mb-2">بحث جديد</Badge>
            <CardTitle className="text-lg">تطوير خوارزميات الذكاء الاصطناعي للتطبيقات الهندسية</CardTitle>
            <CardDescription>
              دراسة شاملة حول استخدام تقنيات التعلم الآلي في حل المشاكل الهندسية المعقدة
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">د. أحمد محمد</span>
              <Button variant="ghost" size="sm">
                تحميل PDF
                <FileText className="mr-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

