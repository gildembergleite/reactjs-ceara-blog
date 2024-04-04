import { Post } from '@/@types/post'
import { formatDate } from '@/utils/format-date'
import Link from 'next/link'
import { AvatarWithFallback } from './avatar-with-fallback'
import { BadgeTagArray } from './badge-tag-array'
import { ImageCover } from './image-cover'
import { Card, CardContent, CardFooter, CardHeader } from './ui/card'

export function PostCard(post: Post) {
  return (
    <Card>
      <CardHeader className="gap-4">
        <ImageCover url={post.image} />
        <BadgeTagArray tagArray={post.tags} />
      </CardHeader>
      <CardContent>
        <Link href={'/'}>
          <h2 className="text-foreground font-semibold text-2xl">
            {post.title}
          </h2>
        </Link>
      </CardContent>
      <CardFooter>
        <div className="flex items-center gap-2 text-muted-foreground text-sm">
          <Link href={'#'} className="flex items-center gap-2">
            <AvatarWithFallback
              image={post.author.imageUrl}
              name={post.author.name}
            />
            {post.author.name}
          </Link>{' '}
          -<span>{formatDate(post.date)}</span>
        </div>
      </CardFooter>
    </Card>
  )
}
