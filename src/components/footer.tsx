import Link from 'next/link'

export function Footer() {
  return (
    <header className="flex justify-center items-center w-full h-24 border-t bg-background z-50">
      <div className="flex w-full max-w-7xl justify-between items-center">
        <Link href={'/'}>React Ceará Blog</Link>
        <div className="flex items-center gap-6">
          <Link href={''}></Link>
          <Link href={''}></Link>
          <Link href={''}></Link>
          <Link href={''}></Link>
        </div>
      </div>
    </header>
  )
}
