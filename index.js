#!/usr/bin/env node

const { spawn } = require("child_process");
require("dotenv").config();

console.log("DB_URL-----", process.env.DB_URL);

const DB_URL =
  process.env.DB_URL ||
  process.env.DATABASE_URL ||
  process.env.PG_URL ||
  process.env.POSTGRES_URL ||
  process.env.PG_CONNECTION ||
  process.env.CONNECTION_STRING;

const child = spawn("npx", ["next", "start", "-p", "5555"], {
  stdio: "inherit",
  cwd: __dirname,
  shell: true,
  env: {
    DB_URL,
  },
});

child.on("close", (code) => {
  process.exit(code);
});
