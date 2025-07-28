import { Link } from "@inertiajs/react";
import { Linkedin, Mail, MapPin } from "lucide-react";
import { Separator } from "./ui/separator";
import { HeaderGradient } from "./gradients/header-gradient";
import NewsletterSubscribe from "./newsletter-subscribe";

export default function Footer() {
  return (
    <footer className="overflow-hidden bg-zinc-800 relative mx-auto">
      <div className="relative flex-1 z-10 flex flex-col shadow-md rounded-lg gap-8">
        <HeaderGradient className="rotate-x-180" />
        <NewsletterSubscribe />

        <Separator className={'footer-border mt-8'} />

        <div className="text-white py-12 z-10">
          <div className="container mx-auto px-4">
            <div className="flex items-start md:items-center flex-col md:flex-row gap-4 mb-4">
              <div className="w-24 h-24 rounded-full flex items-center justify-center">
                <img
                  src="/images/logo.jpg"
                  className="w-full h-full rounded-lg"
                />
              </div>
              <div className="text-2xl font-semibold text-pretty max-w-sm">المركز الليبي للبحوث الهندسية وتقنية المعلومات</div>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div className="col-span-2 w-full">
                <h4 className="font-semibold mb-4 text-lg">روابط سريعة</h4>
                <div className="text-lg font-light text-gray-100 grid md:grid-cols-4 gap-4">
                  <Link href="/about" className="hover:text-primary">
                    حول المركز
                  </Link>
                  <Link href="/journal" className="hover:text-primary">
                    المجلة العلمية
                  </Link>
                  <Link href="/publications" className="hover:text-primary">
                    البحوث والمنشورات
                  </Link>
                  <Link href="/news" className="hover:text-primary">
                    الأخبار والأحداث
                  </Link>
                  <Link href="/partners" className="hover:text-primary">
                    الشركاء
                  </Link>
                  <Link href="/contact" className="hover:text-primary">
                    اتصل بنا
                  </Link>
                </div>
              </div>
              <div className="col-span-1">
                <h4 className="font-semibold mb-4 text-lg">تواصل معنا</h4>
                <div className="flex flex-row gap-4 items-center text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <span>info@eitrc.ly</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>بني وليد, ليبيا</span>
                  </div>
                </div>
                <div className="flex flex-row gap-4 mt-4">
                  <a href="https://www.linkedin.com/company/lcerit" target="_blank" rel="noreferrer" className="border rounded p-2">
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a href="https://x.com/eitrcly" target="_blank" rel="noreferrer" className="border rounded p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" stroke="white" viewBox="0 0 50 50" fill="white">
                      <path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"></path>
                    </svg>
                  </a>
                  <a href="https://www.facebook.com/profile.php?id=100057108413485" target="_blank" rel="noreferrer" className="border rounded p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 50 50" fill="white" stroke="white">
                      <path d="M32,11h5c0.552,0,1-0.448,1-1V3.263c0-0.524-0.403-0.96-0.925-0.997C35.484,2.153,32.376,2,30.141,2C24,2,20,5.68,20,12.368 V19h-7c-0.552,0-1,0.448-1,1v7c0,0.552,0.448,1,1,1h7v19c0,0.552,0.448,1,1,1h7c0.552,0,1-0.448,1-1V28h7.222 c0.51,0,0.938-0.383,0.994-0.89l0.778-7C38.06,19.518,37.596,19,37,19h-8v-5C29,12.343,30.343,11,32,11z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <Separator className={'footer-border my-8'} />
            <div className="text-center text-sm text-white">
              <p>مركز البحوث الهندسية وتقنية المعلومات &copy; {new Date().getFullYear()}. جميع الحقوق محفوظة.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

