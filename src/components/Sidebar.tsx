"use client";

import Link from "next/link";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export default function Sidebar({
  tableNames,
}: {
  tableNames: { tablename: string }[];
}) {
  const pathname = usePathname();

  return (
    <aside className="w-1/6  overflow-scroll scrollbar-hide">
      <div className="p-4 font-semibold text-gray-300">Tables</div>
      <ScrollArea className="h-[calc(100vh-3rem)]">
        <nav className="flex flex-col">
          {tableNames.map((table) => {
            const isActive = pathname.includes(`${table.tablename}`);
            return (
              <Link
                key={table.tablename}
                href={`/${table.tablename}`}
                className={cn(
                  "px-4 py-2 hover:bg-accent hover:text-accent-foreground text-sm capitalize",
                  isActive && "bg-accent text-accent-foreground"
                )}
              >
                {table.tablename.replace(/_/g, " ")}
              </Link>
            );
          })}
        </nav>
      </ScrollArea>
    </aside>
  );
}
