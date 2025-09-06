import AppLayout from "@/layouts/app-layout";
import { BreadcrumbItem } from "@/types";
import { Head, router, usePage } from "@inertiajs/react";
import { useState } from "react";
import { ColumnDef } from '@tanstack/react-table';
import { Checkbox } from "@/components/ui/checkbox";
import ConfirmationDialog from "@/components/confirmation-dialog";
import { DataTable } from "@/components/ui/data-table/data-table";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Edit, MoreHorizontal, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

type Faq = {
  id: number;
  question: string;
  answer: string;
  order: number;
}

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'لوحة التحكم',
    href: '/dashboard',
  },
  {
    title: 'الأسئلة الشائعة',
    href: '/dashboard/faqs',
  },
];

export default function FaqsListPage() {
  const { faqs } = usePage<{ faqs: Faq[] }>().props;
  const [deleteDialog, setDeleteDialog] = useState<{
    isOpen: boolean
    loading: boolean
    item: Faq | null
  }>({
    isOpen: false,
    loading: false,
    item: null,
  })

  const handleDeleteConfirm = async () => {
    if (!deleteDialog.item || deleteDialog.loading) return;

    router.delete(`/dashboard/faqs/${deleteDialog.item.id}`, {
        onSuccess: () => {
            toast.success('FAQ deleted successfully');
            setDeleteDialog({ isOpen: false, loading: false, item: null });
        },
        onError: () => toast.error('Failed to delete FAQ'),
    });
  }

  const columns: ColumnDef<Faq>[] = [
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
      accessorKey: 'question',
      header: 'السؤال',
    },
    {
      accessorKey: 'order',
      header: 'الترتيب',
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
              <DropdownMenuItem onClick={() => router.get(`/dashboard/faqs/${item.id}/edit`)}>
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

  const handleAddNew = () => {
    router.visit(route('dashboard.faqs.create'));
  }

  const handleRefresh = () => {
    router.reload();
  }

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="الأسئلة الشائعة" />

      <div className="flex h-full flex-1 flex-col gap-4 p-4">
        <div className="grid w-full overflow-x-auto">
          <DataTable
            columns={columns}
            data={faqs}
            title="الأسئلة الشائعة"
            description="إدارة الأسئلة الشائعة."
            searchKey="question"
            onAddNew={handleAddNew}
            onRefresh={handleRefresh}
          />
        </div>

        <ConfirmationDialog
          isOpen={deleteDialog.isOpen}
          onClose={() => setDeleteDialog({ isOpen: false, loading: false, item: null })}
          onConfirm={handleDeleteConfirm}
          title={`حذف ${deleteDialog.item?.question}`}
          description="هل أنت متأكد أنك تريد حذف هذا العنصر؟ لا يمكن التراجع عن هذا الإجراء."
          confirmText="حذف"
          cancelText="إلغاء"
          variant="destructive"
          loading={deleteDialog.loading}
        />
      </div>
    </AppLayout>
  )
}