import { Post } from '@/@types/post'

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 2000))

  const post: Post = {
    id: '1',
    title:
      'Como desenvolver tabelas responsivas para desktop e mobile, utilizando Tailwind CSS',
    slug: 'como-desenvolver-tabelas-responsivas',
    date: '2024-04-03',
    author: {
      name: 'Gildemberg Leite',
      imageUrl: 'https://github.com/gildembergleite.png',
    },
    tags: [
      {
        slug: 'react',
        name: 'React',
      },
      {
        slug: 'tailwind',
        name: 'Tailwind CSS',
      },
      {
        slug: 'responsive',
        name: 'Responsive',
      },
    ],
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec ante nec eros viverra sagittis. Vestibulum quis risus erat. Aliquam pulvinar turpis eu odio finibus, nec sollicitudin libero laoreet. Integer eget metus non urna laoreet vestibulum. Suspendisse potenti. Donec pretium eros nec metus eleifend, ut placerat lorem volutpat. Nullam fringilla quam id lacus elementum, non auctor purus accumsan. Proin id odio in tellus varius ultricies. Fusce a sapien nec urna ultrices dignissim sit amet eu lorem. Ut placerat elit non velit tempor vehicula. Nam aliquet ligula sit amet dolor euismod, et faucibus purus auctor. Nam congue, sem quis volutpat egestas, erat libero interdum libero, a dignissim lacus dolor vel lorem. Quisque sit amet justo eu tellus dictum faucibus vel nec mi. Donec id posuere arcu. In commodo, est sit amet congue sollicitudin, augue orci tincidunt nulla, vel fringilla ligula felis sed libero. Ut id cursus sem, at tempus sem.',
    image:
      'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  }

  const postArray = [post, post, post, post, post, post]

  return Response.json(postArray)
}
