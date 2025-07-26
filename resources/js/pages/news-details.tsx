import { Button } from "@/components/ui/button"
import GuestLayout from "@/layouts/guest-layout"
import { Link, usePage } from "@inertiajs/react"
import { ArrowRight, Calendar } from "lucide-react"
import PageHeader from "@/components/page-header"
import Editor from "@/components/editor"

export default function NewsDetailPage() {
  const { post } = usePage<{ post: Post }>().props

  return (
    <GuestLayout>
      <div className="min-h-screen bg-gray-50 pb-16" dir="rtl">
        <PageHeader title={post.title} />

        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="px-4 py-12 max-w-7xl col-span-2">
            {post.image && (
              <div className="mb-4 rounded-lg overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={800}
                  height={450}
                  className="w-full max-h-96 object-cover"
                />
              </div>
            )}

            {/* عرض محتوى HTML هنا */}
            <Editor content={post.content || ""} editable={false} />

            <div className="mt-12 text-center">
              <Link href="/news">
                <Button variant="outline">
                  <ArrowRight className="mr-2 h-4 w-4" />
                  العودة إلى جميع الأخبار
                </Button>
              </Link>
            </div>
          </div>
          <div className="space-y-6 col-span-1">
          </div>

        </div>
      </div>
    </GuestLayout>
  )
}
