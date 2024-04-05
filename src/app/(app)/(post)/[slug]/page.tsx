import { Post } from '@/@types/post'
import { AvatarWithFallback } from '@/components/avatar-with-fallback'
import { ImageCover } from '@/components/image-cover'
import { api } from '@/data/api'
import { formatDate } from '@/utils/format-date'
import Link from 'next/link'

interface PostPageProps {
  params: {
    slug: string
  }
}

export default async function PostPage(props: PostPageProps) {
  const response = await api(`/posts/${props.params.slug}`)
  const post: Post = await response.json()

  return (
    <div className="flex gap-12 px-12">
      <aside className="w-full h-full max-w-xs">
        <h3>Sidebar</h3>
      </aside>
      <article className="w-full h-full max-w-7xl space-y-6">
        <h1 className="text-4xl font-semibold">{post.title}</h1>
        <div className="flex items-center gap-2 text-muted-foreground">
          <Link href={'#'} className="flex items-center gap-3 hover:underline">
            <AvatarWithFallback
              image={post.author.imageUrl}
              name={post.author.name}
            />
            {post.author.name}
          </Link>{' '}
          -<span>{formatDate(post.date)}</span>
        </div>
        <ImageCover url={post.image} />
        <p className="text-base leading-relaxed">{post.content}</p>
        <p className="text-base leading-relaxed">{post.content}</p>
        <p className="text-base leading-relaxed">{post.content}</p>
        <p className="text-base leading-relaxed">{post.content}</p>
        <p className="text-base leading-relaxed">{post.content}</p>
      </article>
    </div>
  )
}
