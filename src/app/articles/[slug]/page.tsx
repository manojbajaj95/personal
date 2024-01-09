import { ArticleLayout } from '@/components/ArticleLayout'
import { getHeroImage, getPost } from '@/lib/articles'

export default async function Article({
  params,
}: {
  params: { slug: string }
}) {
  const article = await getPost(params.slug)
  // const imagePath = await getHeroImage(params.slug)

  return <ArticleLayout article={article} />
}
