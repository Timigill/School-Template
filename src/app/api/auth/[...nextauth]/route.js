import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

const adminUser = {
  id: "1",
  email: "admin@school.com",
  password: bcrypt.hashSync("admin123", 10),
};

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        if (!credentials) return null;

        if (credentials.email !== adminUser.email) {
          throw new Error("wrong-email");
        }

        const isValid = bcrypt.compareSync(
          credentials.password,
          adminUser.password
        );

        if (!isValid) {
          throw new Error("wrong-password");
        }

        return {
          id: adminUser.id,
          email: adminUser.email,
          role: "admin",
        };
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.role = user.role;
      return token;
    },
    async session({ session, token }) {
      session.user.role = token.role;
      return session;
    },
  },
  pages: {
    signIn: "/admin/login",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
