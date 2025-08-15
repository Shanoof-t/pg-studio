import "dotenv/config";
import pg from "pg";

const dbUrl =
  process.env.DB_URL ||
  process.env.DATABASE_URL ||
  process.env.PG_URL ||
  process.env.POSTGRES_URL ||
  process.env.PG_CONNECTION ||
  process.env.CONNECTION_STRING;

if (!dbUrl) {
  console.error(
    "No database connection string found. Please set one of: DB_URL, DATABASE_URL, PG_URL, POSTGRES_URL, PG_CONNECTION, CONNECTION_STRING"
  );
  process.exit(1);
}

const pool = new pg.Pool({
  connectionString: dbUrl,
});

export const query = async (queryText: string, params?: string[]) => {
  try {
    const res = await pool.query(queryText, params);
    return res;
  } catch (error: unknown) {
    const err = {
      query: queryText,
      error: error instanceof Error ? error.message : "Unknown error occurred",
    };
    console.error("QUERY FAILED:", err);
    throw err;
  }
};
