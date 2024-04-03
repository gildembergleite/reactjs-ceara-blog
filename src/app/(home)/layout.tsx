import { Header } from '@/components/header'
import { cn } from '@/lib/utils'
import { RootProvider } from '@/providers'
import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import { ReactNode } from 'react'
import '../globals.css'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'React Ceará - Blog',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
        )}
      >
        <RootProvider>
          <Header />
          <main className="flex justify-center items-center w-full px-8 pt-32">
            {children}
          </main>
        </RootProvider>
      </body>
    </html>
  )
}
