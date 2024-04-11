import { NuxtAuthHandler } from '#auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { APP_ROUTES } from '@/utils/const';

export default NuxtAuthHandler({
  secret: useRuntimeConfig().authSecret,

  pages: {
    signIn: APP_ROUTES.Login,
  },

  providers: [
    // @ts-expect-error
    CredentialsProvider.default({
      name: 'Credentials',
      credentials: {},
      async authorize(credentials: {
        email: string,
        password: string
      }) {
        // TODO: fetch user from database

        return {};
      }
    })
  ],

  session: {
    strategy: 'jwt'
  },

  callbacks: {
    async jwt({token, user, account}) {
      return token;
    },

    async session({session, token}) {
      return session;
    }
  }
});