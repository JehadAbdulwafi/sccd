import { Card, CardHeader, CardTitle } from './ui/card'
import { Calendar, Download, User } from 'lucide-react'
import { Button } from './ui/button'
import { format } from 'date-fns'
import { arEG } from 'date-fns/locale'

export default function ArticleCard({ article }: { article: JournalArticle }) {
  console.log(article)
  const authors: { key: string; value: string }[] = article.authors ? (typeof article.authors === 'string' ? JSON.parse(article.authors) : article.authors) : []
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <div className="flex items-center text-sm text-gray-500 gap-4">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{format(article.created_at, "dd MMMM yyyy", { locale: arEG })}</span>
                </div>
              </div>
            </div>
            <CardTitle className="text-xl mb-2">{article.title}</CardTitle>
            <div className='flex flex-col gap-2 mt-4'>
              {authors.map((author) => (
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-600">{author.key} ({author.value})</span>
                </div>
              ))}
            </div>
          </div>
          <a href={article.file_path} download className="flex flex-col gap-2 md:min-w-[120px]">
            <Button size="sm" className="w-full">
              <Download className="w-4 h-4 ml-2" />
              تحميل
            </Button>
          </a>
        </div>
      </CardHeader>
    </Card>
  )
}

