"use server";

import { z } from "zod";
import { CreateUserSchema, SignInSchema, updateDataSchema } from "./schema";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export async function loginUser(data: z.infer<typeof SignInSchema>) {
  // Validate data using Zod
  const validateData = SignInSchema.safeParse(data);

  if (!validateData.success) {
      return { status: "error", error: "Invalid login credentials" };
  }

  try {
      const { username, password } = validateData.data;
       await signIn("credentials", {
          username,
          password,
          redirectTo:"/dashboard"
      });

      return { status: "success" };
  } catch (error) {
      if (error instanceof AuthError) {
          switch (error.type) {
              case "CredentialsSignin":
                  return { status: "error", error: "Invalid Credentials" };
              default:
                  return { status: "error", error: "Something went wrong" };
          }
      }

      throw error

  }
}


export async function createUser(data: z.infer<typeof CreateUserSchema>) {

    const validateData = CreateUserSchema.safeParse(data);

    if (!validateData.success) {
        return { status: "error", error: "Invalid email or password" };
    }

    try {

        const { email , user_password } = validateData.data;
         
        // check if user already exists
        const userExists = await prisma.user.findUnique({
            where: {
                email: email
            }
        });


         if(userExists){
            console.log("User already exists");
            return { status: "error", message: "User already exists" };
         }


        const hashedPassword = await bcrypt.hash(user_password, 10);
        
        const user = await prisma.user.create({
            data: {
                email: email,
                password: hashedPassword,
            }
        });

        console.log(user);

        if (user) {
            return { status: "success", message: "Account created successfully" };
        } else {
            return { status: "error", message: "An error occurred. Please try again." };
        }
    } catch (error) {
        console.log(error);
        return { status: "error", message: "An error occurred. Please try again." };
    }
  }


export async function updateData(data: z.infer<typeof updateDataSchema>) {
     console.log('love')
    const validateData = updateDataSchema.safeParse(data)
    
    if(validateData.success){
        try {

            const { title, description, video} = validateData.data
             
            console.log(title,description)      
            if(video){
                console.log(video)
            }
               
           } catch (error) {
               console.log(error);
               return { status: "error", message: "An error occurred. Please try again." };     
           }
    }
}
