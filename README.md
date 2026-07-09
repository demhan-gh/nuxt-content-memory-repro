# Nuxt Content Memory Reproduction

`nuxt build` requires ~8GB heap for a 14,000-file `type: 'data'` JSON collection
totalling ~70MB of raw content. Build output is ~44MB. This is a ~100× ratio.

## Setup
npm install

npm run generate-fixtures # generate 14000 files

## Reproduce the bug
npm run build #This will OOM

NODE_OPTIONS=--max-old-space-size=8192 npm run build # This succeeds


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
