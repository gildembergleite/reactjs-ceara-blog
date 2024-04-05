import { Post } from '@/@types/post'
import { formatDate } from '@/utils/format-date'
import Link from 'next/link'
import { AvatarWithFallback } from './avatar-with-fallback'
import { BadgeTagArray } from './badge-tag-array'
import { ImageCover } from './image-cover'
import { Card, CardContent, CardFooter, CardHeader } from './ui/card'

interface PostCardProps {
  post: Post
  orientation?: 'vertical' | 'horizontal'
  withoutDate?: boolean
}

export function PostCard({
  post,
  orientation = 'horizontal',
  withoutDate = false,
}: PostCardProps) {
  return (
    <Card className={`${orientation === 'vertical' && 'flex max-h-72'}`}>
      <CardHeader
        className={`gap-4
        ${orientation === 'vertical' ? 'aspect-square' : 'aspect-video'}`}
      >
        <ImageCover url={post.image} />
        {orientation === 'horizontal' && (
          <BadgeTagArray tagArray={post.tags} style="secondary" />
        )}
      </CardHeader>
      <div
        className={`${
          orientation === 'vertical' &&
          'flex flex-col w-full justify-between pt-6 pb-2'
        }`}
      >
        <CardContent className={`${orientation === 'vertical' && 'space-y-4'}`}>
          <Link href={`/${post.slug}`}>
            <h2 className="text-foreground font-semibold text-2xl">
              {post.title}
            </h2>
          </Link>
          {orientation === 'vertical' && (
            <BadgeTagArray tagArray={post.tags} style="secondary" />
          )}
        </CardContent>
        <CardFooter>
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <Link href={'#'} className="flex items-center gap-2">
              <AvatarWithFallback
                image={post.author.imageUrl}
                name={post.author.name}
              />
              {post.author.name}
            </Link>
            {!withoutDate && <span> - {formatDate(post.date)}</span>}
          </div>
        </CardFooter>
      </div>
    </Card>
  )
}
