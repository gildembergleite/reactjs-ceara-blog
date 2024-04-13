'use client'

import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { Button } from './ui/button'

export function UserMenuButton() {
  const { data: session } = useSession()
  const { push } = useRouter()

  return (
    <>
      {session ? (
        <Button onClick={() => signOut()}>Sign Out</Button>
      ) : (
        <Button onClick={() => push('/auth')}>Sign In</Button>
      )}
    </>
  )
}
