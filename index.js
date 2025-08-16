#!/usr/bin/env node

const { spawn } = require("child_process");
// require("dotenv").config();

const child = spawn("npx", ["next", "start", "-p", "5555"], {
  stdio: "inherit",
  cwd: __dirname,
  shell: true,
});

child.on("close", (code) => {
  process.exit(code);
});
