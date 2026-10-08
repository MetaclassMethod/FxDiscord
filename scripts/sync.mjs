/*
 * Copyright (c) 2026 MetaclassMethod
 */

import { cp, rm } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");

const vencordPath = process.env.VENCORD_PATH ?? join(process.env.USERPROFILE ?? "", "Documents", "Vencord");
const destination = join(vencordPath, "src", "userplugins", "AutoTwit");

await rm(destination, { recursive: true, force: true });
await cp(join(repoRoot, "src"), destination, { recursive: true });

console.log(`AutoTwit -> ${destination}`);
