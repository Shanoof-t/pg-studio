#!/usr/bin/env node

const { spawn } = require("child_process");

const originalCwd = process.env.INIT_CWD || process.cwd();

console.log("process.env.PWD : ", process.env.PWD);
console.log("process.cwd(): ", process.cwd());
console.log("process.env.INIT_CWD: ", process.env.INIT_CWD);
console.log("originalCwd: ", originalCwd);

const child = spawn("npx", ["next", "start", "-p", "5555"], {
  stdio: "inherit",
  cwd: originalCwd,
  shell: true,
});

child.on("close", (code) => {
  process.exit(code);
});
