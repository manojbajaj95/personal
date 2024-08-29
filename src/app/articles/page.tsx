import { type Metadata } from 'next'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'

import { query } from '@/lib/hashnode'

function PostCard({ post }: { post: PostSmall }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/articles/${post.slug}`}>{post.title}</Card.Title>
        <Card.Eyebrow as="time" className="md:hidden" decorate>
          {post.publishedAt}
        </Card.Eyebrow>
        <Card.Description>{post.subtitle}</Card.Description>
        <Card.Cta>Read article</Card.Cta>
      </Card>
      <Card.Eyebrow as="time" className="mt-1 hidden md:block">
        {post.publishedAt}
      </Card.Eyebrow>
    </article>
  )
}

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
        <div className="flex max-w-3xl flex-col space-y-16">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </SimpleLayout>
  )
}
