import { type Metadata } from 'next'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'

import { query } from '@/lib/hashnode'
import { PostsList } from '@/components/ArticleLayout'

export const metadata: Metadata = {
  title: 'Articles',
  description:
    'All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order.',
}

export default async function ArticlesIndex() {
  // let articles = allBlogs

  const {
    data: { publication },
  } = await query({
    query: `
      query($host: String!) {
        publication(host: $host) {
          posts(first: 10) {
            edges {
              node {
                coverImage {
                  url
                }
                id
                publishedAt
                slug
                title
                subtitle
              }
            }
          }
        }
      }
    `,
    variables: {
      host: 'mbajaj.hashnode.dev',
    },
  })

  const posts: Array<PostSmall> = publication.posts.edges.map(
    ({ node }: { node: Post }) => node,
  )

  return (
    <SimpleLayout
      title="Writing on software design, company building, and everything else."
      intro="All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order."
    >
      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <PostsList posts={posts} />
      </div>
    </SimpleLayout>
  )
}
