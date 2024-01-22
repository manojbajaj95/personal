import { ArticleLayout } from '@/components/ArticleLayout'
import { allBlogs } from 'contentlayer/generated'
import { notFound } from 'next/navigation'

import { Metadata } from 'next'

export function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Metadata {
  const article = allBlogs.find((post) => post.slug === params.slug)

  if (!article) {
    return {}
  }

  const { title, date, description } = article

  const ogImage = {
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/articles/${params.slug}/og.png`,
  }

  return {
    title,
    description,
    openGraph: {
      type: 'article',
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${params.slug}`,
      title,
      description,
      publishedTime: date,
      images: [ogImage],
    },
    twitter: {
      title,
      description,
      images: ogImage,
      card: 'summary_large_image',
    },
  }
}

export default async function Article({
  params,
}: {
  params: { slug: string }
}) {
  const article = allBlogs.find((post) => post.slug === params.slug)

  if (!article) return notFound()

  return <ArticleLayout article={article} />
}
