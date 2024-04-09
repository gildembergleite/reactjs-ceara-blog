'use client'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const signInFormSchema = z.object({
  email: z.string().email({
    message: 'Email inválido',
  }),
  password: z
    .string({
      required_error: 'Informe sua senha',
    })
    .min(8, {
      message: 'A senha deve conter no mínimo 8 caracteres',
    }),
})

export type SignInFormData = z.infer<typeof signInFormSchema>

export function SignInForm() {
  const form = useForm<SignInFormData>({
    resolver: zodResolver(signInFormSchema),
  })

  async function handleSignIn(formData: SignInFormData) {
    console.log(formData)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSignIn)}
        className="pb-4 space-y-4"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="email">Email</FormLabel>
              <FormControl>
                <Input
                  id="email"
                  type="email"
                  autoCapitalize="none"
                  autoCorrect="off"
                  placeholder="email@exemplo.com"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Senha</FormLabel>
                <FormControl>
                  <Input placeholder="********" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button variant={'link'} className="w-full">
            Esqueceu sua senha?
          </Button>
        </div>

        <Button className="w-full">Entrar</Button>
      </form>
    </Form>
  )
}
