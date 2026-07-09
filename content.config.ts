import { defineContentConfig, defineCollection } from '@nuxt/content'
import { z } from 'zod'

export default defineContentConfig({
  collections: {
    items: defineCollection({
      type: 'data',
      source: 'items/*.json',
      schema: z.object({
        gid: z.string(),
        subject: z.string(),
        email: z.string(),
        sender: z.string(),
        datetime: z.string(),
        date: z.string(),
        text: z.string(),
        md: z.string(),
        thumbnail: z.string(),
        html: z.string(),
      })
    })
  }
})