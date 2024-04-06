import { Author } from '@/@types/author'

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 2000))

  const author: Author = {
    id: '1',
    name: 'Gildemberg Leite',
    slug: 'gildemberg-leite',
    role: 'Colaborador e Editor',
    avatarUrl: 'https://github.com/gildembergleite.png',
    bio: 'Olá, leitores! Sou o Gil, entusiasta de tecnologia e apaixonado por compartilhar conhecimento sobre as últimas tendências e novidades do mundo digital. Com uma carreira sólida na área de front-end, tenho dedicado meus esforços a explorar e analisar as mais recentes inovações tecnológicas, desde gadgets e dispositivos eletrônicos até avanços em inteligência artificial e desenvolvimento de software.',
  }

  return Response.json(author)
}
