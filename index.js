#!/usr/bin/env node
import { execSync } from "child_process";
import path from "path";

try {
  const targetDir = process.argv[2] ? path.resolve(process.argv[2]) : process.cwd();

  const isWindows = process.platform === "win32";
  const command = isWindows
    ? `start "" "cursor" "${targetDir}"`
    : process.platform === "darwin"
    ? `open -a "Cursor" "${targetDir}"`
    : `cursor "${targetDir}"`;

  execSync(command, { stdio: "inherit" });
} catch (err) {
  console.error("⚠️  Failed to open Cursor. Make sure Cursor is installed and in PATH.");
  process.exit(1);
}

