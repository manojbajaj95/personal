import { ArticleLayout } from '@/components/ArticleLayout'
import { getPost } from '@/lib/articles'

export default async function Article({
  params,
}: {
  params: { slug: string }
}) {
  const article = await getPost(params.slug)

  return <ArticleLayout article={article} />
}
