import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from './auth.config';
import { z } from 'zod';
import {
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
 
async function getUser(email, password){
  try {
    const auth = getAuth();
    const user = await signInWithEmailAndPassword(auth, email, password);
    return user.user;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    if("FirebaseError: Firebase: Error (auth/invalid-credential)")
      throw new Error("Invalid Credentials");
    throw new Error('Something went wrong.');
  }
}
 
export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);
 
        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const user = await getUser(email, password);
          if (!user) return null;
          return user;
        }
        return null;
      },
    }),
  ],
});