# Nuxt Content Memory Reproduction

`nuxt build` requires ~8GB heap for a 14,000-file `type: 'data'` JSON collection
totalling ~70MB of raw content. Build output is ~44MB. This is a ~100× ratio.

## Setup

bash
npm install
node scripts/generate-fixtures.mjs   # generates 14,000 files in content/items/

## Reproduce the bug

bash
# This will OOM:
npm run build

# This succeeds:
NODE_OPTIONS=--max-old-space-size=8192 npm run build


## Environment
│ │                                                              │
│ │  Operating system      macOS 25.3.0                          │
│ │  CPU                   Apple M2 Max (12 cores)               │
│ │  Node.js version       v22.22.0                              │
│ │  nuxt/cli version      3.36.1                                │
│ │  Package manager       npm 10.9.4                            │
│ │  Nuxt version          4.4.8                                 │
│ │  Nitro version         2.13.4                                │
│ │  Builder               vite 7.3.6                            │
│ │  Config                compatibilityDate, content, modules   │
│ │  Modules               @nuxt/content 3.15.0                  |
