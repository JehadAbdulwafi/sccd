import AppLayout from "@/layouts/app-layout";
import { BreadcrumbItem } from "@/types";
import { Head, router, usePage } from "@inertiajs/react";
import { useState } from "react";
import { ColumnDef } from '@tanstack/react-table';
import { Checkbox } from "@/components/ui/checkbox";
import ConfirmationDialog from "@/components/confirmation-dialog";
import { DataTable } from "@/components/ui/data-table/data-table";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Edit, MoreHorizontal, Trash2, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'لوحة التحكم',
    href: '/dashboard',
  },
  {
    title: 'بحوث والدراسات',
    href: '/dashboard/journal/articles/list',
  },
];

export default function IssuesListPage() {
  const { articles } = usePage<{ articles: JournalArticle[] }>().props;
  const [deleteDialog, setDeleteDialog] = useState<{
    isOpen: boolean
    loading: boolean
    item: JournalArticle | null
  }>({
    isOpen: false,
    loading: false,
    item: null,
  })

  const handleDeleteConfirm = async () => {
    if (!deleteDialog.item || deleteDialog.loading) return;

    try {
      router.delete(`/api/journal/articles/${deleteDialog.item.id}`);
    } catch (error) {
      console.error(error);
    } finally {
      setDeleteDialog({
        ...deleteDialog,
        loading: false,
        isOpen: false,
        item: null,
      })
    }
  }

  const columns: ColumnDef<JournalArticle>[] = [
    {
      id: 'select',
      header: ({ table }) => (
        <Checkbox
          checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && 'indeterminate')}
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
          className="mr-4"
        />
      ),
      cell: ({ row }) => (
        <Checkbox className="mr-4" checked={row.getIsSelected()} onCheckedChange={(value) => row.toggleSelected(!!value)} aria-label="Select row" />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: 'title',
      header: 'العنوان',
    },
    {
      accessorKey: 'tag',
      header: 'الوسم',
    },
    {
      accessorKey: 'journal_issue_title',
      header: 'الاصدار',
    },
    {
      accessorKey: 'file_path',
      header: 'الملف',
      cell: ({ row }) => {
        const value = row.getValue('file_path') as string;
        if (!value) return null;
        return (
          <div>{row.original.file_path.split('/').pop()}</div>
        );
      }
    },
    {
      accessorKey: 'created_at',
      header: 'تاريخ النشر',
      cell: ({ row }) => {
        const value = row.getValue('created_at') as string;
        const date = new Date(value);
        return date.toLocaleString('en-US', {
          dateStyle: 'medium',
          timeStyle: 'short',
        });
      },
    },
    {
      id: 'actions',
      cell: ({ row }) => {
        const item = row.original;

        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => router.get(`/dashboard/journal/articles/${item.id}/edit`)}>
                <Edit className="w-4 h-4 mr-2" />
                تعديل
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setDeleteDialog({ isOpen: true, loading: false, item: row.original })}
                className="text-destructive"
              >
                <Trash2 className="w-4 h-4 mr-2 text-destructive" />
                حذف
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];
  const bulkActions = [
    {
      label: 'حذف المحدد',
      action: (selectedRows: JournalArticle[]) => {
        const payload = {
          action: 'delete_selected',
          entries: selectedRows.map((row) => row.id),
        };

        router
          .post('/api/journal/articles/bulk-actions', payload, {
            onError: (errors) => {
              toast.error('فشلت العملية');
              console.error('Error:', errors);
            },
            onSuccess: () => {
              toast.success('تمت معالجة الأدوار المحددة بنجاح');
              router.reload();
            }
          })
      },
    },
  ];

  const handleAddNew = () => {
    router.visit(route('dashboard.journal.articles.create'));
  }

  const handleRefresh = () => {
    router.reload();
  }

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="بحوث والدراسات" />

      <div className="flex h-full flex-1 flex-col gap-4 p-4">
        <div className="grid w-full">
          <DataTable
            columns={columns}
            data={articles}
            title="قائمة بحوث والدراسات"
            description="عرض جميع مقالات المجلة."
            searchKey="title"
            bulkActions={bulkActions}
            onAddNew={handleAddNew}
            onRefresh={handleRefresh}
          />
        </div>

        <ConfirmationDialog
          isOpen={deleteDialog.isOpen}
          onClose={() => setDeleteDialog({ isOpen: false, loading: false, item: null })}
          onConfirm={handleDeleteConfirm}
          title={`Delete ${deleteDialog.item?.title}`}
          description="Are you sure you want to delete this item? This action cannot be undone."
          confirmText="Delete"
          cancelText="إلغاء"
          variant="destructive"
          loading={deleteDialog.loading}
        />
      </div>
    </AppLayout>
  )
}



