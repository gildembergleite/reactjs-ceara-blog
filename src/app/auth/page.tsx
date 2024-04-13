import { IconReact } from '@/assets/icon-react'
import { ToggleButtonTheme } from '@/components/toggle-button-theme'
import { redirect } from 'next/navigation'
import { getSession } from '../api/auth/[...nextauth]/route'
import { AuthTabs } from './components/auth-tabs'

export default async function AuthPage() {
  const session = await getSession()

  if (session) {
    redirect('/')
  }

  return (
    <section className="flex flex-col w-full h-full justify-center items-center space-y-6">
      <div className="flex flex-col justify-center items-center gap-4">
        <IconReact className="w-20 h-20" />
        <h1 className="text-xl text-center">React Ceará - Blog</h1>
      </div>
      <AuthTabs />
      <div className="absolute top-0 right-5">
        <ToggleButtonTheme />
      </div>
    </section>
  )
}
