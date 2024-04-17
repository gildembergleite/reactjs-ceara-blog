import { Tag } from '@/@types/tag'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

interface BadgeTagArrayProps {
  tagArray: Tag[]
  style?: 'primary' | 'secondary'
  size?: 'sm' | 'md'
}

export function BadgeTagArray({
  tagArray,
  style = 'primary',
  size = 'sm',
}: BadgeTagArrayProps) {
  return (
    <div className="flex flex-wrap w-full max-w-full gap-3 items-center">
      {tagArray.map((tag, index) => (
        <Link key={index} href={`/tags/${tag.slug}`}>
          <Badge
            className={`whitespace-nowrap
                ${
                  style === 'secondary'
                    ? 'text-primary bg-primary/10 hover:bg-primary hover:text-white'
                    : ''
                }
                ${size === 'md' ? 'text-base' : ''}
              `}
          >
            {tag.name}
          </Badge>
        </Link>
      ))}
    </div>
  )
}
