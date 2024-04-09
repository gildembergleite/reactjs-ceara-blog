import { env } from '@/env'
import NextAuth, { AuthOptions, getServerSession } from 'next-auth'
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
            console.log(response)
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
