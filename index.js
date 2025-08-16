#!/usr/bin/env node

const { spawn } = require("child_process");

const originalCwd = process.env.INIT_CWD || process.cwd();

const child = spawn("npx", ["next", "start", "-p", "5555"], {
  stdio: "inherit",
  cwd: originalCwd,
  shell: true,
});

child.on("close", (code) => {
  process.exit(code);
});
