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

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'لوحة التحكم',
    href: '/dashboard',
  },
  {
    title: 'الشركاء',
    href: '/dashboard/partners/list',
  },
];

interface Partner {
  id: number;
  name: string;
  logo: string;
  website: string | null;
  created_at: string;
}

export default function PartnersListPage() {
  const { partners } = usePage<{ partners: Partner[] }>().props;
  const [deleteDialog, setDeleteDialog] = useState<{
    isOpen: boolean
    loading: boolean
    item: Partner | null
  }>({
    isOpen: false,
    loading: false,
    item: null,
  })

  const handleDeleteConfirm = async () => {
    if (!deleteDialog.item || deleteDialog.loading) return;

    try {
      router.delete(`/api/partners/${deleteDialog.item.id}`);
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

  const columns: ColumnDef<Partner>[] = [
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
      accessorKey: 'name',
      header: 'الاسم',
    },
    {
      accessorKey: 'logo',
      header: 'الشعار',
      cell: ({ row }) => {
        const logoUrl = row.getValue('logo') as string;
        return <img src={logoUrl} alt="Logo" className="h-10 w-10 object-contain" />;
      },
    },
    {
      accessorKey: 'website',
      header: 'الموقع الإلكتروني',
      cell: ({ row }) => {
        const websiteUrl = row.getValue('website') as string;
        return websiteUrl ? <a href={websiteUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{websiteUrl}</a> : 'N/A';
      },
    },
    {
      accessorKey: 'created_at',
      header: 'تاريخ الإنشاء',
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
              <DropdownMenuItem onClick={() => router.get(`/dashboard/partners/${item.id}/edit`)}>
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
      action: (selectedRows: Partner[]) => {
        const payload = {
          action: 'delete_selected',
          entries: selectedRows.map((row) => row.id),
        };

        router
          .post('/api/partners/bulk-actions', payload, {
            onError: (errors) => {
              toast.error('فشلت العملية');
              console.error('Error:', errors);
            },
            onSuccess: () => {
              toast.success('Successfully processed selected partners');
              router.reload();
            }
          })
      },
    },
  ];

  const handleAddNew = () => {
    router.visit(route('dashboard.partners.create'));
  }

  const handleRefresh = () => {
    router.reload();
  }

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="الشركاء" />

      <div className="flex h-full flex-1 flex-col gap-4 p-4">
        <div className="grid w-full">
          <DataTable
            columns={columns}
            data={partners}
            title="الشركاء"
            description="عرض جميع الشركاء."
            searchKey="name"
            bulkActions={bulkActions}
            onAddNew={handleAddNew}
            onRefresh={handleRefresh}
          />
        </div>

        <ConfirmationDialog
          isOpen={deleteDialog.isOpen}
          onClose={() => setDeleteDialog({ isOpen: false, loading: false, item: null })}
          onConfirm={handleDeleteConfirm}
          title={`حذف ${deleteDialog.item?.name}`}
          description="Are you sure you want to delete this partner? This action cannot be undone."
          confirmText="Delete"
          cancelText="إلغاء"
          variant="destructive"
          loading={deleteDialog.loading}
        />
      </div>
    </AppLayout>
  )
}
