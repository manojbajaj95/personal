import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import readingTime from 'reading-time'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeCodeTitles from 'rehype-code-titles'
import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis'
import { stringify } from 'querystring'

export const Blog = defineDocumentType(() => ({
  name: 'Blog',
  filePathPattern: '*/*.mdx',
  bodyType: 'mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    author: { type: 'string', required: true },
    date: { type: 'string', required: true },
    cover: { type: 'string', required: false },
    slug: { type: 'string', required: false },
    status: { type: 'string', required: true }
  },
  computedFields: {
    readingTime: {
      type: 'json',
      resolve: (doc) => readingTime(doc.body.raw)
    },
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.sourceFileDir,
    },
  },
}))

export default makeSource({
  contentDirPath: 'articles',
  documentTypes: [Blog],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeAccessibleEmojis, rehypeAutolinkHeadings, rehypeSlug, rehypeCodeTitles],
  },
})