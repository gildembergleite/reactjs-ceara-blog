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
  callbacks: {
    async signIn({ account, profile }) {
      console.log(account, profile)
      return true
    },
  },
}

const handler = NextAuth(authOptions)

export const getSession = () => getServerSession(authOptions)

export { handler as GET, handler as POST }
