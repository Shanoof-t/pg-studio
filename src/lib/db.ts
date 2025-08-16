import pg from "pg";

const DB_URL = process.env.DB_URL;

if (!DB_URL) {
  console.error(
    "No database connection string found. Please set one of: DB_URL, DATABASE_URL, PG_URL, POSTGRES_URL, PG_CONNECTION, CONNECTION_STRING"
  );
  process.exit(1);
}

const pool = new pg.Pool({ connectionString: DB_URL });

export const query = async (queryText: string, params?: string[]) => {
  try {
    return await pool.query(queryText, params);
  } catch (error: unknown) {
    console.error("QUERY FAILED:", {
      query: queryText,
      error: error instanceof Error ? error.message : "Unknown error occurred",
    });
    throw error;
  }
};
