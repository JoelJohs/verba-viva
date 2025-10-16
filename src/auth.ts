import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { compare } from "bcryptjs"
import { PrismaClient } from "./generated/prisma"

const prisma = new PrismaClient()

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            credentials: {
                username: { label: "Usuario", type: "text" },
                password: { label: "Contraseña", type: "password" }
            },

            authorize: async (credentials) => {
                if (!credentials?.username || !credentials?.password) {
                    return null
                }

                const user = await prisma.user.findUnique({
                    where: { username: credentials.username as string }
                })

                if (!user) {
                    return null
                }

                const isValid = await compare(credentials.password as string, user.password)

                if (!isValid) {
                    return null
                }

                return {
                    id: user.id.toString(),
                    name: user.username,
                }
            }
        })
    ],

    pages: {
        signIn: '/', // redirige a home si no está autenticado
    },
    
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id
            }
            return token
        },
        async session({ session, token }) {
            if (session.user) {
                session.user.id = token.id as string
            }
            return session
        }
    }
})
