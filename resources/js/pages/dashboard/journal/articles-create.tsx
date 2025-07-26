import { Head, useForm, usePage } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import FormField from '@/components/shared/form-field';
import FormHeader from '@/components/shared/form-header';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { FilePicker } from '@/components/file-picker';
import KeyValueInput from '@/components/shared/key-value-input';

const breadcrumbs = [
  { title: 'لوحة التحكم', href: '/dashboard' },
  { title: "بحوث والدراسات", href: "/dashboard/journal/articles/list" },
  { title: "إضافة بحث جديد", href: "/dashboard/journal/articles/create" }
];

type FormValues = {
  title: string;
  file_path: File | null;
  journal_issue_id: string;
  authors: { key: string; value: string }[];
  tag: string;
}

export default function CreateArticlePage() {
  const { issues } = usePage<{ issues: JournalIssue[] }>().props;
  const form = useForm<FormValues>({
    title: "",
    file_path: null,
    journal_issue_id: "",
    authors: [],
    tag: "",
  });

  const handleInputChange = (name: keyof typeof form.data, value: any) => {
    form.setData(name, value);
    if (form.errors[name]) form.clearErrors(name);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();

    form.transform((data) => ({
      ...data,
      authors: JSON.stringify(data.authors),
    }))

    form.post('/api/journal/articles', {
      preserveScroll: true,
      onError: (errors) => {
        toast.error('الرجاء إصلاح أخطاء التحقق');
      },
      onSuccess: () => {
        toast.success('Article created successfully');
      },
    });
  };

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title={'بحوث والدراسات'} />

      <div className="bg-background flex h-full min-h-screen flex-1 flex-col gap-4 p-4">
        <FormHeader
          title="إنشاء بحث جديد"
          description="ادخل جميع البيانات المطلوبة"
          onCancel={() => window.history.back()}
          onSave={handleSubmit}
          form={form}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <FormField
              label="عنوان البحث"
              error={form.errors.title}
              className="mb-6"
            >
              <Input
                id="title"
                name="title"
                value={form.data.title || ''}
                onChange={(e) => handleInputChange("title", e.target.value)}
                className={cn(form.errors.title && 'border-destructive')}
                placeholder="ادخل عنوان البحث"
                required
              />
            </FormField>

            <FormField
              label="المجلد"
              htmlFor="journal_issue_id"
              error={form.errors?.journal_issue_id}
            >
              <Select
                value={form.data.journal_issue_id.toString()}
                dir='rtl'
                onValueChange={(value) => handleInputChange("journal_issue_id", +value)}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {issues.map((issue) => (
                    <SelectItem key={issue.id} value={issue.id.toString()}>
                      {issue.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormField>
            <FormField
              label="الملف"
              htmlFor="file_path"
              error={form.errors?.file_path}
            >
              <FilePicker
                onFileChange={(file) => handleInputChange("file_path", file)}
              />
            </FormField>
          </div>
          <FormField
            label="المؤلفون"
            error={form.errors.authors}
            className="mb-6"
          >
            <KeyValueInput
              value={form.data.authors}
              onChange={(newAuthors) => handleInputChange('authors', newAuthors)}
              keyPlaceholder='اسم المؤلف'
              valuePlaceholder='الكلية'
            />
          </FormField>
          <FormField
            label="Tag"
            error={form.errors.tag}
            className="mb-6"
          >
            <Input
              id="tag"
              name="tag"
              value={form.data.tag || ''}
              onChange={(e) => handleInputChange("tag", e.target.value)}
              className={cn(form.errors.tag && 'border-destructive')}
            />
          </FormField>
        </div>
      </div>
    </AppLayout>
  );
}



