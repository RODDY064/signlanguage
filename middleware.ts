
import NextAuth from "next-auth";
import authConfig from "./auth.config"
 
const { auth } = NextAuth(authConfig);

export default auth((req)=>{
    const { nextUrl } = req;
    const isLoggedIn = !!req.auth?.user;

    // console.log('love')


    const homeRoute = "/";
    const apiRoutes = ['/dashboard', '/video'];
    const isAuthRoutes = apiRoutes.some(route => nextUrl.pathname.startsWith(route));
    
    if (isAuthRoutes && !isLoggedIn) {
        return Response.redirect(new URL(homeRoute, nextUrl), 302);
    }
    

})

export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}