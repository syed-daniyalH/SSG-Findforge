import { cpSync, existsSync } from "node:fs";
import { join } from "node:path";

const rootDir = process.cwd();
const standaloneDir = join(rootDir, ".next", "standalone");

if (!existsSync(standaloneDir)) {
  throw new Error(
    "Standalone output was not found. Run `npm run build` before preparing the standalone bundle.",
  );
}

const assetsToCopy = [
  {
    source: join(rootDir, "public"),
    destination: join(standaloneDir, "public"),
  },
  {
    source: join(rootDir, ".next", "static"),
    destination: join(standaloneDir, ".next", "static"),
  },
];

for (const asset of assetsToCopy) {
  if (!existsSync(asset.source)) {
    continue;
  }

  cpSync(asset.source, asset.destination, {
    recursive: true,
    force: true,
  });
}

console.log("Standalone bundle is ready in .next/standalone");
