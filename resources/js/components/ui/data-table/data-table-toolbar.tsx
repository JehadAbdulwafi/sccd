"use client"

import type { Table } from "@tanstack/react-table"
import { X, Plus, RefreshCw } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
// import { DataTableViewOptions } from "./data-table-view-options"
import { DataTableFacetedFilter } from "./data-table-faceted-filter"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"

interface DataTableToolbarProps<TData> {
  table: Table<TData>
  filterableColumns?: {
    id: string
    title: string
    options: {
      label: string
      value: string
    }[]
    customFilter?: (value: any, filterValues: string[]) => boolean
  }[]
  searchKey?: string
  bulkActions?: {
    label: string
    action: (selectedRows: TData[]) => void
  }[]
  onAddNew?: () => void
  onRefresh?: () => void
}

export function DataTableToolbar<TData>({
  table,
  filterableColumns = [],
  searchKey,
  bulkActions = [],
  onAddNew,
  onRefresh,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0
  const [selectedAction, setSelectedAction] = useState<string | null>(null)

  const handleApplyAction = () => {
    if (!selectedAction) return

    const action = bulkActions.find((a) => a.label === selectedAction)
    if (!action) return

    const selectedRows = table.getFilteredSelectedRowModel().rows.map((row) => row.original)
    action.action(selectedRows)
    setSelectedAction(null)
  }

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-1 items-center space-x-2">
        {searchKey && (
          <Input
            placeholder={`بحث...`}
            value={(table.getColumn(searchKey)?.getFilterValue() as string) ?? ""}
            onChange={(event) => table.getColumn(searchKey)?.setFilterValue(event.target.value)}
            className="h-9 w-[150px] lg:w-[250px]"
          />
        )}
        {onRefresh && (
          <Button onClick={onRefresh} variant="outline" size="sm" className="h-9">
            <RefreshCw className="h-4 w-4" />
          </Button>
        )}
        {filterableColumns.length > 0 &&
          filterableColumns.map(
            (column) =>
              table.getColumn(column.id) && (
                <DataTableFacetedFilter
                  key={column.id}
                  column={table.getColumn(column.id)}
                  title={column.title}
                  options={column.options}
                  customFilter={column.customFilter}
                />
              ),
          )}
        {isFiltered && (
          <Button variant="ghost" onClick={() => table.resetColumnFilters()} className="h-9 px-2 lg:px-3">
            مسح فلتر
            <X className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>

      <div className="flex items-center gap-2">
        {table.getFilteredSelectedRowModel().rows.length > 0 && bulkActions.length > 0 && (
          <div className="flex items-center gap-2">
            <Select value={selectedAction || ""} onValueChange={setSelectedAction}>
              <SelectTrigger className="h-9 w-[150px]">
                <SelectValue placeholder="Bulk Actions" />
              </SelectTrigger>
              <SelectContent>
                {bulkActions.map((action) => (
                  <SelectItem key={action.label} value={action.label}>
                    {action.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button variant="outline" size="sm" onClick={handleApplyAction} disabled={!selectedAction} className="h-9">
              تطبيق
            </Button>
          </div>
        )}

        {onAddNew && (
          <Button onClick={onAddNew} size="sm" className="h-9">
            <Plus className="ml-2 h-4 w-4" />
            أضافة جديد
          </Button>
        )}
      </div>

    </div>
  )
}

