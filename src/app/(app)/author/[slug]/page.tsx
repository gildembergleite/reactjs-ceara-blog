import { Author } from '@/@types/author'
import { Post } from '@/@types/post'
import { AvatarWithFallback } from '@/components/avatar-with-fallback'
import { PostCard } from '@/components/post-card'
import { api } from '@/data/api'

interface AuthorPageProps {
  params: {
    slug: string
  }
}

export default async function AuthorPage(props: AuthorPageProps) {
  const [authorResponse, postsResponse] = await Promise.all([
    api(`/author/${props.params.slug}`),
    api('/posts'),
  ])

  const author: Author = await authorResponse.json()
  const posts: Post[] = await postsResponse.json()

  return (
    <>
      <div className="flex flex-col items-center w-full max-w-7xl bg-muted p-12 rounded-md">
        <div className="flex items-center gap-4">
          <AvatarWithFallback
            className="w-20 h-20"
            image={author.avatarUrl}
            name={author.name}
          />
          <div>
            <h1 className="text-2xl">{author.name}</h1>
            <span>{author.role}</span>
          </div>
        </div>
        <p className="w-full max-w-[70%] text-center text-lg leading-relaxed my-6">
          {author.bio}
        </p>
      </div>
      <section className="w-full max-w-7xl space-y-8 pt-8">
        <h3 className="text-2xl font-medium">Minhas publicações</h3>
        <div className="grid grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </section>
    </>
  )
}
