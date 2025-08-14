import pg from "pg";

const pool = new pg.Pool({
  connectionString: process.env.DB_URL,
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