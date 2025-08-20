import { useState } from "react";

export interface Column<T> {
  key: string;
  title: string;
  dataIndex: keyof T;
  sortable?: boolean;
}

export interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  loading?: boolean;
  selectable?: boolean;
  onRowSelect?: (selectedRows: T[]) => void;
}

export function DataTable<T extends { id: string | number }>({
  data,
  columns,
  loading,
  selectable,
  onRowSelect,
}: DataTableProps<T>) {
  const [selected, setSelected] = useState<Set<string | number>>(new Set());
  const [sortConfig, setSortConfig] = useState<{ key: keyof T; direction: "asc" | "desc" } | null>(null);

  const handleSort = (col: Column<T>) => {
    if (!col.sortable) return;
    const direction = sortConfig?.direction === "asc" ? "desc" : "asc";
    setSortConfig({ key: col.dataIndex, direction });
  };

  const sortedData = sortConfig
    ? [...data].sort((a, b) => {
        const valA = a[sortConfig.key];
        const valB = b[sortConfig.key];
        if (valA < valB) return sortConfig.direction === "asc" ? -1 : 1;
        if (valA > valB) return sortConfig.direction === "asc" ? 1 : -1;
        return 0;
      })
    : data;

  const handleRowSelect = (row: T) => {
    const newSelected = new Set(selected);
    if (newSelected.has(row.id)) {
      newSelected.delete(row.id);
    } else {
      newSelected.add(row.id);
    }
    setSelected(newSelected);
    onRowSelect?.(data.filter((d) => newSelected.has(d.id)));
  };

  if (loading) return <div className="p-4 text-center">Loading...</div>;
  if (!loading && data.length === 0) return <div className="p-4 text-center">No data available</div>;

  return (
    <table className="min-w-full border-collapse border border-gray-300">
      <thead className="bg-gray-100">
        <tr>
          {selectable && <th className="border px-3 py-2">Select</th>}
          {columns.map((col) => (
            <th
              key={col.key}
              className="border px-3 py-2 cursor-pointer"
              onClick={() => handleSort(col)}
            >
              {col.title}{" "}
              {col.sortable &&
                (sortConfig?.key === col.dataIndex
                  ? sortConfig.direction === "asc"
                    ? "⬆"
                    : "⬇"
                  : "↕")}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sortedData.map((row) => (
          <tr key={row.id} className="hover:bg-gray-50">
            {selectable && (
              <td className="border px-3 py-2 text-center">
                <input
                  type="checkbox"
                  checked={selected.has(row.id)}
                  onChange={() => handleRowSelect(row)}
                  aria-label={`Select row ${row.id}`}
                />
              </td>
            )}
            {columns.map((col) => (
              <td key={col.key} className="border px-3 py-2">
                {String(row[col.dataIndex])}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
