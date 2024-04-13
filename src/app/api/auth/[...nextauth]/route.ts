import { postAuthUser } from '@/api/auth/post-auth-user'
import { env } from '@/env'
import NextAuth, { AuthOptions, getServerSession } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'

const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
        },
      },
    }),
    CredentialsProvider({
      name: 'Auth with Email and Password',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const response = await postAuthUser({
          email: credentials?.email ?? '',
          password: credentials?.password ?? '',
        })

        if (!response.error) {
          return response
        }

        return null
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  secret: env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ account }) {
      if (account && account.provider === 'google' && account.access_token) {
        const url = `${env.NEXT_PUBLIC_API_URL}/auth/${account.provider}/callback?access_token=${account.access_token}`

        await fetch(url, { cache: 'no-cache' })
          .then(async (res) => {
            const response = await res.json()
            return response
          })
          .catch((err) => {
            const error = err as Error
            console.error('Error fetching: ', error)
          })
      }

      return true
    },
    async session(params) {
      return params.session
    },
  },
}

const handler = NextAuth(authOptions)

export const getSession = () => getServerSession(authOptions)

export { handler as GET, handler as POST }
