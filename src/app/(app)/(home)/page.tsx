import { Post } from '@/@types/post'
import { HighlightHome } from '@/components/highlight-home'
import { PostCard } from '@/components/post-card'
import { Button } from '@/components/ui/button'
import { api } from '@/data/api'

export default async function HomePage() {
  const response = await api('/posts')
  const posts: Post[] = await response.json()

  return (
    <>
      <HighlightHome {...posts[0]} />
      <section className="w-full max-w-7xl py-24 space-y-4">
        <div className="space-x-4">
          <Button variant={'ghost'} className="text-base">
            Últimas publicações
          </Button>
          <Button variant={'ghost'} className="text-base">
            Destaques
          </Button>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard key={post.id} {...post} />
          ))}
        </div>
        <div className="flex w-full justify-center pt-8">
          <Button>Ver todos os posts</Button>
        </div>
      </section>
    </>
  )
}
