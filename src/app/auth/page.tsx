import { BlogLogo } from '@/components/blog-logo'
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
      <BlogLogo orientation="vertical" />
      <AuthTabs />
      <div className="absolute top-0 right-5">
        <ToggleButtonTheme />
      </div>
    </section>
  )
}
