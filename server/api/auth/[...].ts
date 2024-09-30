import { NuxtAuthHandler } from '#auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { APP_ROUTES } from '@/utils/const';
import { User } from '@/server/models/user';
import bcrypt from 'bcrypt';

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
        const user = await User.findOne({email: credentials.email});

        if (!user) {
          return null;
        }

        const isValid = await bcrypt.compare(credentials.password, user?.password);

        if (!isValid) {
          return null;
        }

        return {...user.toObject(), password: undefined};
      }
    })
  ],

  session: {
    strategy: 'jwt'
  },

  // callbacks: {
  //   async jwt({token, user, account}) {
  //     return token;
  //   },

  //   async session({session, token}) {
  //     return session;
  //   }
  // }
});