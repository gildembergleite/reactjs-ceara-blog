'use client'

import { postRegisterUser } from '@/api/auth/post-register-user'
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

const singUpFormSchema = z
  .object({
    name: z
      .string({
        invalid_type_error: 'Your password must contain at least 8 characters.',
        required_error: 'You must fill in this field.',
      })
      .min(6)
      .max(30),
    email: z
      .string({
        required_error:
          'You must fill in your email address to complete registration.',
      })
      .email({
        message: 'Please provide a valid email address.',
      }),
    password: z
      .string({
        invalid_type_error: 'Your password must contain at least 8 characters.',
        required_error: 'You must fill in this field.',
      })
      .min(8),
    confirmPassword: z.string({
      required_error: 'You must fill in this field.',
    }),
  })
  .refine(
    (values) => {
      return values.password === values.confirmPassword
    },
    {
      message: 'Passwords do not match',
      path: ['confirmPassword'],
    },
  )

export type SignUpFormData = z.infer<typeof singUpFormSchema>

export function SignUpForm() {
  const form = useForm<SignUpFormData>({
    resolver: zodResolver(singUpFormSchema),
  })

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(postRegisterUser)}
        className="pb-4 space-y-4"
      >
        {/* USERNAME FIELD */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="name">Nome</FormLabel>
              <div className="relative w-full">
                <FormControl className="w-full">
                  <Input
                    id="name"
                    type="text"
                    autoCapitalize="none"
                    autoCorrect="off"
                    placeholder="Insira seu nome"
                    className="w-full text-zinc-700"
                    defaultValue={field.value}
                    {...field}
                  />
                </FormControl>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* EMAIL ADDRESS FIELD */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="email">Email</FormLabel>
              <div className="relative w-full">
                <FormControl className="w-full">
                  <Input
                    id="email"
                    type="email"
                    autoCapitalize="none"
                    autoCorrect="off"
                    placeholder="email@exemplo.com"
                    className="w-full text-zinc-700"
                    defaultValue={field.value}
                    {...field}
                  />
                </FormControl>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* PASSWORD FIELD */}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="password">Senha</FormLabel>
              <div className="relative w-full">
                <FormControl className="w-full">
                  <Input
                    id="password"
                    type="password"
                    autoCapitalize="none"
                    autoCorrect="off"
                    placeholder="********"
                    className="w-full text-zinc-700"
                    defaultValue={field.value}
                    {...field}
                  />
                </FormControl>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* CONFIRM PASSWORD FIELD */}
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="confirmPassword">Confirme a senha</FormLabel>
              <div className="relative w-full">
                <FormControl className="w-full">
                  <Input
                    id="confirmPassword"
                    type="password"
                    autoCapitalize="none"
                    autoCorrect="off"
                    placeholder="Insira a sua senha novamente"
                    className="w-full text-zinc-700"
                    defaultValue={field.value}
                    {...field}
                  />
                </FormControl>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full">Cadastre-se</Button>
      </form>
    </Form>
  )
}
