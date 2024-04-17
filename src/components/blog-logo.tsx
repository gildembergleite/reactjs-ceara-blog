import { ReactIcon } from '@/assets/react-icon'
import Link from 'next/link'
import { Typography } from './ui/typography'

interface BlogLogoProps {
  orientation?: 'vertical' | 'horizontal'
}

export function BlogLogo({ orientation }: BlogLogoProps) {
  return (
    <Link
      href={'/'}
      className={`flex items-center justify-center gap-2
      ${orientation === 'vertical' ? 'flex-col' : 'flex-row'}`}
    >
      <ReactIcon className="h-12 w-12 text-primary" />
      <h1>
        <Typography.Large>React Ceará Blog</Typography.Large>
      </h1>
    </Link>
  )
}
