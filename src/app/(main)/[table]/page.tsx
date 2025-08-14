import { fetchDataFromTable } from "@/services/tables";
import Table from "@/components/Table";

interface PageProps {
  params: Promise<{ table: string }>;
}

export default async function TablePage({ params }: PageProps) {
  const { table } = await params;
  const tableData = await fetchDataFromTable({ table });
  
  return (
    <div className="h-screen p-4 scrollbar-hide">
      <h1 className="text-2xl">{table}</h1>
      <Table data={tableData} />
    </div>
  );
}