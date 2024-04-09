import { SignUpFormData } from '@/app/auth/components/sign-up-form'
import { env } from '@/env'

export async function postRegisterUser(formData: SignUpFormData) {
  const url = env.NEXT_PUBLIC_API_URL + '/auth/local/register'

  const body = {
    ...formData,
    username: formData.email.split('@')[0],
  }

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })

  return await response.json()
}
