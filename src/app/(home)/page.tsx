import { Post } from '@/@types/post'
import { HighlightHome } from '@/components/highlight-home'
import { api } from '@/data/api'

export default async function HomePage() {
  const response = await api('/posts')
  const posts: Post[] = await response.json()

  return (
    <>
      <HighlightHome {...posts[0]} />
    </>
  )
}
