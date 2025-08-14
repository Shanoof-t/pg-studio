"use client";

interface TableProps {
  data: Record<string, unknown>[];
}

export default function Table({ data }: TableProps) {
  if (!data || data.length === 0) {
    return <p className="text-muted-foreground mt-4">No data available.</p>;
  }

  // Get column names dynamically from first row
  const columns = Object.keys(data[0]);

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
            {data.map((row, idx) => (
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}