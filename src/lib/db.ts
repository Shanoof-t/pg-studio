import pg from "pg";

let pool: pg.Pool | null = null;

const initializePool = () => {
  if (pool) return pool;

  const DB_URL = 
    process.env.DB_URL ||
    process.env.DATABASE_URL ||
    process.env.PG_URL ||
    process.env.POSTGRES_URL ||
    process.env.PG_CONNECTION ||
    process.env.CONNECTION_STRING;

  if (!DB_URL) {
    throw new Error(
      "No database connection string found. Please set one of: DB_URL, DATABASE_URL, PG_URL, POSTGRES_URL, PG_CONNECTION, CONNECTION_STRING"
    );
  }

  pool = new pg.Pool({ connectionString: DB_URL });
  return pool;
};

export const query = async (queryText: string, params?: string[]) => {
  try {
    const poolInstance = initializePool();
    return await poolInstance.query(queryText, params);
  } catch (error: unknown) {
    console.error("QUERY FAILED:", {
      query: queryText,
      error: error instanceof Error ? error.message : "Unknown error occurred",
    });
    throw error;
  }
};