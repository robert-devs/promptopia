import GoogleProvider from "next-auth/providers/google";
import NextAuth from "next-auth/next";

const hander = NextAuth({
    providers:[
        client:"",
        clientSecret:""
    ],
    async session({session}){

    },
    async signIn({profile}){

    }
})

export {handler as GET, handler as POST}