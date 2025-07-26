import { Link } from "@inertiajs/react";
import { BookOpen, Mail, MapPin, Phone } from "lucide-react";

export default function GuestFooter() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-x-2 space-x-reverse mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                <img
                  src="/images/logo.png"
                />
              </div>
              <span className="font-bold">مركز البحوث الهندسية</span>
            </div>
            <p className="text-gray-400 text-sm">نقود الابتكار في مجال البحوث الهندسية وتقنية المعلومات</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">روابط سريعة</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/about" className="hover:text-white">
                  حول المركز
                </Link>
              </li>
              <li>
                <Link href="/research" className="hover:text-white">
                  البحوث
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-white">
                  الأخبار
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  اتصل بنا
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">الخدمات</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>البحوث التطبيقية</li>
              <li>الاستشارات التقنية</li>
              <li>التدريب المتخصص</li>
              <li>النشر العلمي</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">تواصل معنا</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center space-x-2 space-x-reverse">
                <Phone className="w-4 h-4" />
                <span>+966 11 123 4567</span>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse">
                <Mail className="w-4 h-4" />
                <span>info@research-center.sa</span>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse">
                <MapPin className="w-4 h-4" />
                <span>الرياض، المملكة العربية السعودية</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 مركز البحوث الهندسية وتقنية المعلومات. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  )
}

