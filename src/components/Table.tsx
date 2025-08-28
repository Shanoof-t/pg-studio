"use client";

import { deleteRowFromTable } from "@/services/tables";
import { Trash2 } from "lucide-react";
import { useState } from "react";

interface TableProps {
  data: Record<string, unknown>[];
  table: string;
}

export default function Table({ data, table }: TableProps) {
  const [tableData, setTableData] = useState(data);
  if (!data || data.length === 0) {
    return <p className="text-muted-foreground mt-4">No data available.</p>;
  }

  const columns = Object.keys(data[0]);

  const handleDelete = async (rowData: Record<string, unknown>) => {
    await deleteRowFromTable({ rowData, table });
    setTableData((prev) => prev.filter((item) => item.id !== rowData.id));
  };

  return (
    <div className="w-full">
      <div
        className="relative w-full overflow-x-auto"
        style={{
          msOverflowStyle: "none",
          scrollbarWidth: "none",
        }}
      >
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        <table className="w-full caption-bottom text-sm border-collapse">
          <thead className="[&_tr]:border-b">
            <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
              {columns.map((col) => (
                <th
                  key={col}
                  className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 whitespace-nowrap"
                >
                  {col
                    .replace(/_/g, " ")
                    .replace(/\b\w/g, (l) => l.toUpperCase())}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="[&_tr:last-child]:border-0">
            {tableData.map((row, idx) => (
              <tr
                key={idx}
                className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
              >
                {columns.map((col) => (
                  <td
                    key={col}
                    className="p-4 align-middle [&:has([role=checkbox])]:pr-0 whitespace-nowrap"
                  >
                    {String(row[col] ?? "")}
                  </td>
                ))}
                <td className="p-4 align-middle whitespace-nowrap">
                  <button
                    onClick={() => handleDelete(row)}
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-destructive hover:text-destructive-foreground h-8 w-8 text-muted-foreground hover:text-red-600"
                    title="Delete row"
                  >
                    <Trash2 className="h-4 w-4 text-white" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
