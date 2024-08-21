import Users from "@/Models/Userschema";
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import dbConnect from "@/utils/dbConnect";

export const authOptions = {

    providers: [
        CredentialsProvider({
            id: 'credential',
            name: 'Credential',
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" },
            },


            async authorize(credentials){
                await dbConnect();

                try {
                    const user = await Users.findOne({email: credentials.email});
                    if(!user) throw new Error('User not found')
    
                    if(credentials.password !== user.password) throw new Error('There is a wrong information in the Email or Password')
                    
                        return user
                } catch (error) {
                    throw new Error(error)
                }
            }
        })
    ],
    session: {
        strategy: "jwt",
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
              token.id = user.id;
            }
            return token;
          },
          async session({ session, token }) {
            if (token) {
              session.user = {
                id: token.id,
                email: token.email,
              };
            }
            return session;
          },
    },
    pages: {
        signIn: '/login',
        signOut: '/'
    },
    jwt: {
        secret: process.env.NEXTAUTH_SECRET,
    },
    secret: process.env.NEXTAUTH_SECRET,

}


export default NextAuth(authOptions);