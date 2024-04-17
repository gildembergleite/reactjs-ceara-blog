import Link from 'next/link'
import { BlogLogo } from './blog-logo'

export function Footer() {
  return (
    <footer className="flex justify-center items-center w-full h-24 border-t bg-background z-50">
      <div className="flex w-full max-w-7xl justify-between items-center mx-8">
        <BlogLogo />
        <div className="flex items-center gap-6">
          <Link href={''}></Link>
          <Link href={''}></Link>
          <Link href={''}></Link>
          <Link href={''}></Link>
        </div>
      </div>
    </footer>
  )
}
