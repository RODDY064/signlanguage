"use server";

import { z } from "zod";
import { CreateUserSchema, SignInSchema, updateDataSchema } from "./schema";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs"

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

      return { status: "error" , message: "Login successful"};
      
  } catch (error) {
      if (error instanceof AuthError) {
          switch (error.type) {
              case "CredentialsSignin":
                  return { status: "error", error: "Invalid Credentials" };
             case "CallbackRouteError": 
                  return { status : "error" , error:"Something went wrong. Please try again."}
              default:
                  return { status: "error", error: "Invalid username or password. Please try again" };
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

        const data = validateData.data;

    
        // check if user already exists
        let user = await prisma.user.findFirst(({
            where:{
                email:data.email
            }
        }))

        if(user){
            throw new Error('User already exists.')
        }

        //encrypt password 

        const hashPassword = await bcrypt.hash(data.user_password,10)

        user = await prisma.user.create({
            data:{
             email:data.email,
             name:data.firstname + " " + data.lastname,
             password:hashPassword
            }
        })

        // console.log(user)
     
        if (user) {
            return { status: "success", message: "Account created successfully" };
        } else {
            return { status: "error", message: "An error occurred. Please try again." };
        }
    } catch (error:any) {
        console.log(error.message,'error'); 
        if(error.message === 'User already exists.'){
            return { status: "error", message: "User already exists. Please sign in" };
        } else{
           return { status: "error", message: "An error occurred. Please try again." };
        }
    }
  }





  // create videos 

  export async function createVideos() {
    try {
      const video = await prisma.video.createMany({
        data: [
          { video_name: "Health", video_url: "MVI_3949" },
          { video_name: "Human", video_url: "MVI_3950" },
          { video_name: "Head", video_url: "MVI_3951" },
          { video_name: "Mind", video_url: "MVI_3952" },
          { video_name: "Brain", video_url: "MVI_3953" },
          { video_name: "Live", video_url: "MVI_3954" },
          { video_name: "Face", video_url: "MVI_3955" },
          { video_name: "Eye", video_url: "MVI_3956" },
          { video_name: "Ear", video_url: "MVI_3957" },
          { video_name: "Nose", video_url: "MVI_3958" },
          { video_name: "Mouth", video_url: "MVI_3959" },
          { video_name: "Teeth", video_url: "MVI_3960" },
        ],
      });
      console.log(video)
    } catch (error) {
      console.log(error);
    }
  }


 