import { AvatarWithFallback } from '@/components/avatar-with-fallback'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { formatDate } from '@/utils/format-date'
import Link from 'next/link'
import { ImageCover } from './image-cover'

export function HighlightHome() {
  return (
    <section className="relative w-full max-w-7xl h-full aspect-video">
      <ImageCover
        url={
          'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
      />
      <Card className="absolute -bottom-10 left-14 w-full max-w-2xl bg-white">
        <CardHeader>
          <div className="flex gap-3 items-center">
            <Link href={'/tags/react'}>
              <Badge>React</Badge>
            </Link>
            <Link href={'/tags/tailwind'}>
              <Badge>Tailwind CSS</Badge>
            </Link>

            <Link href={'/tags/responsive'}>
              <Badge>Responsive</Badge>
            </Link>
          </div>
        </CardHeader>
        <CardContent>
          <Link href={'/'}>
            <h2 className="text-foreground font-semibold text-4xl">
              Como desenvolver tabelas responsivas para desktop e mobile,
              utilizando Tailwind CSS
            </h2>
          </Link>
        </CardContent>
        <CardFooter>
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <Link href={'#'} className="flex items-center gap-2">
              <AvatarWithFallback
                image="https://github.com/gildembergleite.png"
                name="Gildemberg Leite"
              />
              Gildemberg Leite
            </Link>{' '}
            -<span>{formatDate('2024-01-25')}</span>
          </div>
        </CardFooter>
      </Card>
    </section>
  )
}
