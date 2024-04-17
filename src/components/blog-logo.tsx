import { ReactIcon } from '@/assets/react-icon'
import Link from 'next/link'

export function BlogLogo() {
  return (
    <Link href={'/'}>
      <h1 className="flex items-center space-x-2">
        <ReactIcon className="h-12 w-12 text-[#149ECA]" />
        <span className="text-nowrap text-lg font-medium">
          React Ceará Blog
        </span>
      </h1>
    </Link>
  )
}
