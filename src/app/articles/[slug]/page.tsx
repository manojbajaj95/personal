import { PostLayout } from '@/components/ArticleLayout'
import { notFound } from 'next/navigation'
import { query } from '@/lib/hashnode'

export default async function Page({ params }: { params: { slug: string } }) {
  const {
    data: { publication },
  } = await query({
    query: `
      query($host: String!, $slug: String!) {
        publication(host: $host) {
          post(slug: $slug) {
            author {
              name
              profilePicture
              socialMediaLinks {
                twitter
              }
            }
            content {
              html
              markdown
            }
            coverImage {
              url
            }
            id
            publishedAt
            title
          }
        }
      }
    `,
    variables: {
      host: 'mbajaj.hashnode.dev',
      slug: params.slug,
    },
  })

  const post = publication?.post as Post

  if (!post) return notFound()

  return <PostLayout post={post} />
}
