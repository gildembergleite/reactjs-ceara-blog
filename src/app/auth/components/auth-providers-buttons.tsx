import { IconGoogle } from '@/assets/icon-google'
import { Button } from '@/components/ui/button'
import { CardFooter } from '@/components/ui/card'
import { signIn } from 'next-auth/react'

interface AuthProvidersProps {
  googleButtonTitle: string
}

export function AuthProvidersButton(props: AuthProvidersProps) {
  return (
    <CardFooter className="flex flex-col">
      <div className="relative flex justify-center items-center h-0.5 w-full bg-foreground/10 -mt-4 mb-6">
        <span className="absolute px-2 bg-background">ou</span>
      </div>
      <Button
        variant={'secondary'}
        onClick={() => signIn('google')}
        className="w-full gap-2"
      >
        <IconGoogle /> {props.googleButtonTitle}
      </Button>
    </CardFooter>
  )
}
