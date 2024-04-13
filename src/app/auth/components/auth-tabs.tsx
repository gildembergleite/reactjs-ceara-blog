'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { AuthProvidersButton } from './auth-providers-buttons'
import { SignInForm } from './sign-in-form'
import { SignUpForm } from './sign-up-form'

export function AuthTabs() {
  return (
    <Tabs defaultValue="sign-in" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="sign-in">Login</TabsTrigger>
        <TabsTrigger value="sign-up">Cadastre-se</TabsTrigger>
      </TabsList>
      <TabsContent value="sign-in">
        <Card>
          <CardHeader>
            <CardTitle className="text-center text-xl text-foreground">
              Entre com email e senha
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <SignInForm />
          </CardContent>
          <AuthProvidersButton googleButtonTitle="Faça login com Google" />
        </Card>
      </TabsContent>
      <TabsContent value="sign-up">
        <Card>
          <CardHeader>
            <CardTitle className="text-center text-xl text-foreground">
              Cadastre-se com email e senha
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <SignUpForm />
          </CardContent>
          <AuthProvidersButton googleButtonTitle="Cadastre-se com Google" />
        </Card>
      </TabsContent>
    </Tabs>
  )
}
