'use client'

import { signIn, signOut, useSession } from 'next-auth/react'
import { Button } from './ui/button'

export function UserMenuButton() {
  const { data: session } = useSession()
  return (
    <>
      {session ? (
        <Button onClick={() => signOut()}>Sign Out</Button>
      ) : (
        <Button onClick={() => signIn('google')}>Sign In</Button>
      )}
    </>
  )
}
