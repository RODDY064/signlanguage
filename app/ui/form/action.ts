"use server";
import { z } from "zod";
import { CreateUserSchema, SignInSchema } from "./schema";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";

export async function loginUser(data: z.infer<typeof SignInSchema>) {
    try {
         const validateData = SignInSchema.safeParse(data)
    
        if (validateData.success) {

          const { username, password} = validateData.data
          
          await signIn("credentials",{
             username,
             password,
             redirectTo: "/dashboard",
          })

          return { status: "success", message: "Login successfully" };
        } 
      } catch (error) {
        // console.log(error);
        if(error instanceof AuthError){
          switch(error.type){
            case "CredentialsSignin" :
             return  { message : "Invalid Credentials"};
            default :
            return { message : "Something went wrong"}
          }
        }
      }
}

export async function createUser(data: z.infer<typeof CreateUserSchema>) {
    try {
        const res = data;
        console.log(res);
    
        if (res) {
          return { status: "success", message: "Account created  successfully" };
        } else {
          return { status: "error", message: "An error occurred. Please try again." };
        }
      } catch (error) {
        console.log(error);
      }
}
