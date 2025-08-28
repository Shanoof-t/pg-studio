"use server";

import { query } from "@/lib/db";
import { quoteIdentifier } from "@/lib/utils";

export const fetchAllTables = async (): Promise<{ tablename: string }[]> => {
  const queryText =
    "SELECT tablename FROM pg_tables WHERE schemaname NOT IN ('pg_catalog', 'information_schema');";
  const res = await query(queryText);
  return res.rows;
};

export const fetchDataFromTable = async ({ table }: { table: string }) => {
  const tableName = quoteIdentifier(table);
  const queryText = `SELECT * FROM ${tableName};`;
  const res = await query(queryText);
  return res.rows;
};

export const deleteRowFromTable = async ({
  rowData,
  table,
}: {
  rowData: Record<string, unknown>;
  table: string;
}) => {
  try {
    const tableName = quoteIdentifier(table);
    const queryText = `DELETE FROM ${tableName} WHERE id=$1`;
    const res = await query(queryText, [rowData.id]);
    return res.rows;
  } catch (error) {
    console.error("Delete operation failed:", error);
    throw new Error(
      `Failed to delete row: ${
        error instanceof Error ? error.message : "Unknown error"
      }`
    );
  }
};
