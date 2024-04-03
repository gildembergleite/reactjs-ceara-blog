interface PostPageProps {
  params: {
    slug: string
  }
}

export default function PostPage(props: PostPageProps) {
  return <h1>{props.params.slug}</h1>
}
