import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'


interface Article {
  title: string
  description: string
  author: string
  date: string
}

export interface ArticleWithMeta {
  data: Article
  content: string
  slug: string
}

// POSTS_PATH is useful when you want to get the path to a specific file
export const POSTS_PATH = path.join(process.cwd(), 'articles')

// postFilePaths is the list of all mdx files inside the POSTS_PATH directory
export const postFilePaths = fs.readdirSync(POSTS_PATH, { recursive: true })
  // Only include md(x) files
  .filter((path) => /\.mdx?$/.test(path))

export function getAllPosts(): { content: string, data: Article, slug: string }[] {
  const posts = postFilePaths.map((filePath) => {
    const slug = filePath.split("/").shift()
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath))
    const { content, data } = matter(source)
    return {
      content,
      data,
      slug,
    }
  })
  return posts.sort((a, z) => +new Date(z.data.date) - +new Date(a.data.date))
}

export const getPost = async (slug: string) => {
  const postFilePath = path.join(POSTS_PATH, `${slug}/content.mdx`)
  const source = fs.readFileSync(postFilePath)

  const { content, data } = matter(source)

  return { content, data, slug } as ArticleWithMeta
}

export const getHeroImage = async (slug: string) => {
  const imageFilePath = path.join(POSTS_PATH, `${slug}/image.png`)
  if (fs.existsSync(imageFilePath)) {
    return imageFilePath
  }
  return null

}




