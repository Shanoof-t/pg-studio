import { fetchAllTables } from "@/services/tables";
import React from "react";
import Sidebar from "@/components/Sidebar";

export default async function layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const tableNames = await fetchAllTables();

  return (
    <div className="flex w-full h-screen">
      <Sidebar tableNames={tableNames} />
      <main className="w-5/6  overflow-scroll scrollbar-hide">{children}</main>
    </div>
  );
}
