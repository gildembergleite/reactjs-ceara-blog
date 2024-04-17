import { Post } from '@/@types/post'
import { AvatarWithFallback } from '@/components/avatar-with-fallback'
import { BadgeTagArray } from '@/components/badge-tag-array'
import { ImageCover } from '@/components/image-cover'
import { PostCard } from '@/components/post-card'
import { ScrollArea } from '@/components/ui/scroll-area'
import { api } from '@/data/api'
import { formatDate } from '@/utils/format-date'
import { FlameIcon, StarIcon } from 'lucide-react'
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
    <div className="flex w-full max-w-7xl gap-12">
      <aside className="w-full h-full max-w-sm space-y-8">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <FlameIcon />
            <h4 className="text-lg font-semibold">Assuntos populares</h4>
          </div>
          <ScrollArea className="w-full h-full max-h-60">
            <div className="flex flex-col gap-2 pl-2">
              {post.tags.map((tag) => (
                <Link
                  href={`/${tag.slug}`}
                  key={tag.slug}
                  className="text-lg font-medium hover:underline"
                >
                  # {tag.name}
                </Link>
              ))}
            </div>
          </ScrollArea>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <StarIcon />
            <h4 className="text-lg font-semibold">Destaques da semana</h4>
          </div>
          <PostCard withoutDate post={post} />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <StarIcon />
            <h4 className="text-lg font-semibold">Destaques do mês</h4>
          </div>
          <PostCard withoutDate post={post} />
        </div>
      </aside>
      <div className="w-full h-full space-y-12">
        <article className="w-full h-full space-y-6">
          <BadgeTagArray size="md" tagArray={post.tags} />
          <h1 className="text-4xl font-semibold">{post.title}</h1>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Link
              href={'#'}
              className="flex items-center gap-3 hover:underline"
            >
              <AvatarWithFallback
                image={post.author.avatarUrl}
                name={post.author.name}
              />
              {post.author.name}
            </Link>{' '}
            -<span>{formatDate(post.date)}</span>
          </div>
          <ImageCover url={post.image} />
          <h2 className="font-semibold text-2xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </h2>
          <p className="text-lg leading-relaxed">{post.content}</p>
          <p className="text-lg leading-relaxed">{post.content}</p>
        </article>
        <div className="grid grid-cols-1 gap-6">
          <h3 className="text-xl font-semibold">
            Talvez seja sua próxima leitura
          </h3>
          <PostCard orientation="vertical" post={post} />
          <PostCard orientation="vertical" post={post} />
          <PostCard orientation="vertical" post={post} />
        </div>
      </div>
    </div>
  )
}
