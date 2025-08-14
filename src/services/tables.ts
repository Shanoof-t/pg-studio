"use server";

import { query } from "@/lib/db";

export const fetchAllTables = async () => {
  const queryText =
    "SELECT tablename FROM pg_tables WHERE schemaname NOT IN ('pg_catalog', 'information_schema');";
  const res = await query(queryText);
  return res.rows;
};

export const fetchDataFromTable = async ({ table }: { table: string }) => {
  const queryText = `SELECT * FROM ${table};`;
  const res = await query(queryText);
  return res.rows;
};
