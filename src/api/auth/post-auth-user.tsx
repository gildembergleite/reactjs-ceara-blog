import { SignInFormData } from '@/app/auth/components/sign-in-form'
import { env } from '@/env'

export async function postAuthUser(formData: SignInFormData) {
  const url = env.NEXT_PUBLIC_API_URL + '/auth/local'

  const body = {
    identifier: formData.email,
    password: formData.password,
  }
  console.log(body)
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })

  return await response.json()
}
