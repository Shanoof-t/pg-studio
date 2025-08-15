import path from "path";
import dotenv from "dotenv";
import pg from "pg";
import fs from "fs";

console.log("process.env.PWD : ", process.env.PWD);
console.log("process.cwd(): ", process.cwd());
const userCwd = process.env.PWD || process.cwd();
const envPath = path.resolve(userCwd, ".env");

console.log("Loading .env from:", envPath);

if (!fs.existsSync(envPath)) {
  console.error(`No .env file found at ${envPath}`);
  process.exit(1);
}

dotenv.config({ path: envPath });

const dbUrl =
  process.env.DB_URL ||
  process.env.DATABASE_URL ||
  process.env.PG_URL ||
  process.env.POSTGRES_URL ||
  process.env.PG_CONNECTION ||
  process.env.CONNECTION_STRING;

console.log("dbUrl:", dbUrl);

if (!dbUrl) {
  console.error(
    "No database connection string found. Please set one of: DB_URL, DATABASE_URL, PG_URL, POSTGRES_URL, PG_CONNECTION, CONNECTION_STRING"
  );
  process.exit(1);
}

const pool = new pg.Pool({ connectionString: dbUrl });

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
