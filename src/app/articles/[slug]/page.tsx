import { ArticleLayout } from '@/components/ArticleLayout'
import { allBlogs } from 'contentlayer/generated'
import { notFound } from 'next/navigation'

export default async function Article({
  params,
}: {
  params: { slug: string }
}) {
  const article = allBlogs.find((post) => post.slug === params.slug)

  if (!article) return notFound()

  return <ArticleLayout article={article} />
}
