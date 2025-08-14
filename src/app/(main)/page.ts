import { fetchAllTables } from "@/services/tables";
import { redirect } from "next/navigation";

export default async function HomeRedirect() {
  const tables = await fetchAllTables();

  if (tables.length > 0) {
    redirect(`/${tables[0].tablename}`);
  }

  return null; 
}