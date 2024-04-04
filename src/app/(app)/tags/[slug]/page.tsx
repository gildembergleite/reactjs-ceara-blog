interface TagPageProps {
  params: {
    slug: string
  }
}

export default function TagPage(props: TagPageProps) {
  return <h1>{props.params.slug}</h1>
}
