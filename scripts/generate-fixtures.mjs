// scripts/generate-fixtures.mjs
import fs from 'fs'

fs.mkdirSync('content/items', { recursive: true })

// seeded pseudo-random so regeneration produces identical files
let seed = 42
const rand = () => {
  seed = (seed * 1664525 + 1013904223) & 0xffffffff
  return Math.abs(seed) / 0xffffffff
}
const randStr = () => rand().toString(36).slice(2) + rand().toString(36).slice(2)

const randomUrl = (i) =>
  `https://secure.example.com/unsubscribe?data=${randStr()}&token=${i}&ref=${randStr()}`

const randomText = (i) =>
  `Hello, this is email number ${i}. `.repeat(20) +
  Array.from({length: 10}, (_, j) => randomUrl(i + j)).join('\n')

const randomMd = (i) =>
  `# Email ${i}\n\n` +
  `This is the cleaned up content of email ${i}. `.repeat(15) +
  `\n\nVisit us at ${randomUrl(i)}`

const randomThumb = () =>
  'data:image/webp;base64,' + Buffer.from(
    Array.from({length: 1500}, () => Math.floor(rand() * 256))
  ).toString('base64')

for (let i = 0; i < 14000; i++) {
  const doc = {
    gid: randStr(),
    subject: `Test email subject number ${i} with some extra text`,
    email: `sender${i}@example${i % 100}.com`,
    sender: `Sender Name ${i}`,
    datetime: new Date(Date.now() - i * 86400000).toISOString(),
    date: new Date(Date.now() - i * 86400000).toISOString().split('T')[0],
    text: randomText(i),
    md: randomMd(i),
    thumbnail: randomThumb(),
    html: '1'
  }
  fs.writeFileSync(`content/items/${i}.json`, JSON.stringify(doc))
  if (i % 1000 === 0) console.log(`${i}/14000...`)
}
console.log('Done')