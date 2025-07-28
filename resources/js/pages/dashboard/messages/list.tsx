import AppLayout from "@/layouts/app-layout";
import { BreadcrumbItem } from "@/types";
import { Head, router, usePage } from "@inertiajs/react";
import { useState } from "react";
import { ColumnDef } from '@tanstack/react-table';
import { Checkbox } from "@/components/ui/checkbox";
import ConfirmationDialog from "@/components/confirmation-dialog";
import { DataTable } from "@/components/ui/data-table/data-table";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Edit, Eye, MoreHorizontal, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'لوحة التحكم',
    href: '/dashboard',
  },
  {
    title: 'الرسائل',
    href: '/dashboard/messages/list',
  },
];

interface ContactMessage {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string | null;
  organization: string | null;
  message: string;
  created_at: string;
}

export default function MessagesListPage() {
  const { contactMessages } = usePage<{ contactMessages: ContactMessage[] }>().props;
  const [deleteDialog, setDeleteDialog] = useState<{
    isOpen: boolean
    loading: boolean
    item: ContactMessage | null
  }>({
    isOpen: false,
    loading: false,
    item: null,
  })

  const handleDeleteConfirm = async () => {
    if (!deleteDialog.item || deleteDialog.loading) return;

    try {
      router.delete(`/api/contact-messages/${deleteDialog.item.id}`);
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

  const columns: ColumnDef<ContactMessage>[] = [
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
      accessorKey: 'first_name',
      header: 'الاسم الأول',
    },
    {
      accessorKey: 'last_name',
      header: 'الاسم الأخير',
    },
    {
      accessorKey: 'email',
      header: 'البريد الإلكتروني',
    },
    {
      accessorKey: 'phone',
      header: 'رقم الهاتف',
    },
    {
      accessorKey: 'organization',
      header: 'المؤسسة/الشركة',
    },
    {
      accessorKey: 'message',
      header: 'الرسالة',
    },
    {
      accessorKey: 'created_at',
      header: 'تاريخ الإرسال',
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
              <DropdownMenuItem onClick={() => router.get(route('dashboard.messages.show', item.id))}>
                <Eye className="w-4 h-4 mr-2" />
                عرض التفاصيل
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
      label: 'Delete Selected',
      action: (selectedRows: ContactMessage[]) => {
        const payload = {
          action: 'delete_selected',
          entries: selectedRows.map((row) => row.id),
        };

        router
          .post('/api/contact-messages/bulk-actions', payload, {
            onError: (errors) => {
              toast.error('Operation failed');
              console.error('Error:', errors);
            },
            onSuccess: () => {
              toast.success('Successfully processed selected messages');
              router.reload();
            }
          })
      },
    },
  ];

  const handleRefresh = () => {
    router.reload();
  }

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="الرسائل" />

      <div className="flex h-full flex-1 flex-col gap-4 p-4">
        <div className="grid w-full overflow-x-auto">
          <DataTable
            columns={columns}
            data={contactMessages}
            title="الرسائل"
            description="عرض جميع رسائل التواصل."
            searchKey="email"
            bulkActions={bulkActions}
            onAddNew={undefined}
            onRefresh={handleRefresh}
          />
        </div>

        <ConfirmationDialog
          isOpen={deleteDialog.isOpen}
          onClose={() => setDeleteDialog({ isOpen: false, loading: false, item: null })}
          onConfirm={handleDeleteConfirm}
          title={`حذف رسالة من ${deleteDialog.item?.first_name} ${deleteDialog.item?.last_name}`}
          description="هل أنت متأكد أنك تريد حذف هذه الرسالة؟ لا يمكن التراجع عن هذا الإجراء."
          confirmText="حذف"
          cancelText="إلغاء"
          variant="destructive"
          loading={deleteDialog.loading}
        />
      </div>
    </AppLayout>
  )
}
