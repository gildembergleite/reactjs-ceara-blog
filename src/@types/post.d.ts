import { Tag } from './tag'

export type Post = {
  id: string
  title: string
  slug: string
  date: string
  author: {
    name: string
    imageUrl: string
  }
  tags: Tag[]
  content: string
  image: string
}
