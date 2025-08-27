import { fetchDataFromTable } from "@/services/tables";
import Table from "@/components/Table";
import Link from "next/link";
import { AlertTriangle, ArrowLeft, Database } from "lucide-react";

interface PageProps {
  params: Promise<{ table: string }>;
}

export default async function TablePage({ params }: PageProps) {
  const { table } = await params;

  try {
    const tableData = await fetchDataFromTable({
      table,
    });

    return (
      <div className="h-screen p-4 scrollbar-hide">
        <div className="flex items-center gap-4 mb-6">
          <Link
            href="/"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Tables
          </Link>
        </div>
        <h1 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <Database className="w-6 h-6" />
          {table}
        </h1>
        <Table data={tableData} />
      </div>
    );
  } catch (error: unknown) {
    return (
      <div className="h-screen flex items-center justify-center p-4">
        <div className="max-w-sm w-full space-y-6 text-center">
          <AlertTriangle className="w-12 h-12 text-yellow-500 mx-auto" />

          <div className="space-y-2">
            <h2 className="text-xl font-semibold">Table not found</h2>
            <p className="text-sm text-muted-foreground">
              <code className="bg-muted px-2 py-1 rounded text-xs">
                {table}
              </code>{" "}
              doesn&apos;t exist
            </p>
          </div>

          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to tables
          </Link>
        </div>
      </div>
    );
  }
}
