import { Post } from '@/@types/post'
import { AvatarWithFallback } from '@/components/avatar-with-fallback'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { formatDate } from '@/utils/format-date'
import Link from 'next/link'
import { BadgeTagArray } from './badge-tag-array'
import { ImageCover } from './image-cover'

export function HighlightHome(post: Post) {
  return (
    <section className="relative w-full max-w-7xl h-full aspect-video">
      <ImageCover url={post.image} />
      <Card className="absolute -bottom-10 left-14 w-full max-w-2xl drop-shadow-xl0">
        <CardHeader>
          <BadgeTagArray tagArray={post.tags} />
        </CardHeader>
        <CardContent>
          <Link href={`/${post.slug}`}>
            <h2 className="font-semibold text-4xl">{post.title}</h2>
          </Link>
        </CardContent>
        <CardFooter>
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <Link
              href={`/author/${post.author.slug}`}
              className="flex items-center gap-2"
            >
              <AvatarWithFallback
                image={post.author.avatarUrl}
                name={post.author.name}
              />
              {post.author.name}
            </Link>{' '}
            -<span>{formatDate(post.date)}</span>
          </div>
        </CardFooter>
      </Card>
    </section>
  )
}
