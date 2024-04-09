'use client'

import { IconGoogle } from '@/assets/icon-google'
import { IconReact } from '@/assets/icon-react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { SignInForm } from './components/sign-in-form'
import { SignUpForm } from './components/sign-up-form'

interface AuthProvidersProps {
  googleButtonTitle: string
}

function AuthProviders(props: AuthProvidersProps) {
  return (
    <CardFooter className="flex flex-col">
      <div className="relative flex justify-center items-center h-0.5 w-full bg-foreground/10 -mt-4 mb-6">
        <span className="absolute px-2 bg-white">ou</span>
      </div>
      <Button variant={'secondary'} className="w-full gap-2">
        <IconGoogle /> {props.googleButtonTitle}
      </Button>
    </CardFooter>
  )
}

export default function AuthPage() {
  return (
    <section className="flex flex-col w-full h-full justify-center items-center space-y-6">
      <div className="flex flex-col justify-center items-center gap-4">
        <IconReact className="w-20 h-20" />
        <h1 className="text-xl text-center text-zinc-700">
          React Ceará - Blog
        </h1>
      </div>
      <Tabs defaultValue="sign-up" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="sign-in">Login</TabsTrigger>
          <TabsTrigger value="sign-up">Cadastre-se</TabsTrigger>
        </TabsList>
        <TabsContent value="sign-in">
          <Card>
            <CardHeader>
              <CardTitle className="text-center text-xl text-zinc-700">
                Entre com email e senha
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <SignInForm />
            </CardContent>
            <AuthProviders googleButtonTitle="Faça login com Google" />
          </Card>
        </TabsContent>
        <TabsContent value="sign-up">
          <Card>
            <CardHeader>
              <CardTitle className="text-center text-xl text-zinc-700">
                Cadastre-se com email e senha
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <SignUpForm />
            </CardContent>
            <AuthProviders googleButtonTitle="Cadastre-se com Google" />
          </Card>
        </TabsContent>
      </Tabs>
    </section>
  )
}
