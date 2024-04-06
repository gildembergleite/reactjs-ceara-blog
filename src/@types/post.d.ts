import { Author } from './author'
import { Tag } from './tag'

export type Post = {
  id: string
  title: string
  slug: string
  date: string
  author: Author
  tags: Tag[]
  content: string
  image: string
}
