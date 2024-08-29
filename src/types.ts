interface PostSmall {
  coverImage: {
    url: String
  }
  id: String
  publishedAt: String
  slug: String
  title: String
  subtitle: String
}

interface Post {
  author: {
    name: string
    profilePicture: string
    socialMediaLinks: {
      twitter: string
    }
  }
  content: {
    html: string
    markdown: string
  }
  coverImage: {
    url: string
  }
  id: string
  publishedAt: string
  title: string
}
