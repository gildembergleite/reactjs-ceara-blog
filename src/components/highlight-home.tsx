import { Post } from '@/@types/post'
import { AvatarWithFallback } from '@/components/avatar-with-fallback'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { formatDate } from '@/utils/format-date'
import Link from 'next/link'
import { BadgeTagArray } from './badge-tag-array'
import { ImageCover } from './image-cover'
import { Typography } from './ui/typography'

export function HighlightHome(post: Post) {
  return (
    <section className="relative w-full max-w-7xl h-full aspect-video">
      <ImageCover url={post.image} />
      <Card className="absolute -bottom-10 left-14 w-full max-w-xl drop-shadow-xl">
        <CardHeader>
          <BadgeTagArray tagArray={post.tags} style="secondary" />
        </CardHeader>
        <CardContent>
          <Link href={`/${post.slug}`}>
            <Typography.H2 className="border-none">{post.title}</Typography.H2>
          </Link>
        </CardContent>
        <CardFooter>
          <div className="flex items-center gap-2">
            <Link
              href={`/author/${post.author.slug}`}
              className="flex items-center gap-2"
            >
              <AvatarWithFallback
                image={post.author.avatarUrl}
                name={post.author.name}
              />
              <Typography.Muted>{post.author.name}</Typography.Muted>
            </Link>
            <Typography.Muted>- {formatDate(post.date)}</Typography.Muted>
          </div>
        </CardFooter>
      </Card>
    </section>
  )
}
