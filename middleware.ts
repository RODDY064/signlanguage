
import NextAuth from "next-auth";
import authConfig from "./auth.config"
 
const { auth } = NextAuth(authConfig);

export default auth((req)=>{
    const { nextUrl } = req;
    const isLoggedIn = !!req.auth?.user;

    // console.log(isLoggedIn)

    const homeRoute = "/";
    const apiRoutes = ['/dashboard', '/video','/history','/api/ses'];
    const isAuthRoutes = apiRoutes.some(route => nextUrl.pathname.startsWith(route));
    const loginRoute = apiRoutes.includes('/')
    
    if (isAuthRoutes && !isLoggedIn) {
        return Response.redirect(new URL(homeRoute, nextUrl), 302);
    }

    if (nextUrl.pathname === '/' && isLoggedIn) {
        return  Response.redirect(new URL('/dashboard', nextUrl));
    }


})

export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}