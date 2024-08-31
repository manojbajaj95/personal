import Link from 'next/link'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'

import { siteConfig } from '@/config/site'
import { Resume } from '@/components/Resume'
import { PostsList } from '@/components/ArticleLayout'

import { query } from '@/lib/hashnode'

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

export default async function Home() {
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
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            {siteConfig.title}
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            {siteConfig.intro}
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href={siteConfig.social.twitter}
              aria-label="Follow on Twitter"
              icon={TwitterIcon}
            />
            {siteConfig.social.instagram && (
              <SocialLink
                href={siteConfig.social.instagram}
                aria-label="Follow on Instagram"
                icon={InstagramIcon}
              />
            )}
            <SocialLink
              href={siteConfig.social.github}
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href={siteConfig.social.linkedIn}
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      {/* <Photos /> */}
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <PostsList posts={posts} />
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            {/* <Newsletter /> */}
            <Resume />
          </div>
        </div>
      </Container>
    </>
  )
}
