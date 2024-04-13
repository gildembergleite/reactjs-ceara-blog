import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { cn } from '@/lib/utils'
import { RootProvider } from '@/providers'
import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import { ReactNode } from 'react'
import { getSession } from '../api/auth/[...nextauth]/route'
import '../globals.css'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'React Ceará - Blog',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  const session = await getSession()

  return (
    <html lang="pt" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
        )}
      >
        <RootProvider session={session}>
          <Header />
          <main className="flex flex-col justify-center items-center w-full h-full px-2 md:px-8 pt-32 pb-16">
            {children}
          </main>
          <Footer />
        </RootProvider>
      </body>
    </html>
  )
}
