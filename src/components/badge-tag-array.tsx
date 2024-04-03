import { Tag } from '@/@types/tag'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

interface BadgeTagArrayProps {
  tagArray: Tag[]
  style?: 'primary' | 'secondary'
}

export function BadgeTagArray({
  tagArray,
  style = 'primary',
}: BadgeTagArrayProps) {
  return (
    <>
      <div className="flex gap-3 items-center">
        {tagArray.map((tag, index) => (
          <Link key={index} href={`/tags/${tag.slug}`}>
            <Badge
              className={
                style === 'secondary' ? 'text-primary bg-primary/30' : ''
              }
            >
              {tag.name}
            </Badge>
          </Link>
        ))}
      </div>
    </>
  )
}
