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
            {video_name: "Peeping", video_url: "MVI_4074"},
            {video_name: "Copying someone", video_url: "MVI_4075"},
            {video_name: "Not interested", video_url: "MVI_4076"},
            {video_name: "You are interfering", video_url: "MVI_4077"},
            {video_name: "Not my problem", video_url: "MVI_4078"},
            {video_name: "Don't like you", video_url: "MVI_4079"},
            {video_name: "Sick of you", video_url: "MVI_4080"},
            {video_name: "Hard stare", video_url: "MVI_4081"},
            {video_name: "Gazing", video_url: "MVI_4082"},
            {video_name: "Fed up", video_url: "MVI_4083"},
            {video_name: "I told you so", video_url: "MVI_4084"},
            {video_name: "What did I tell you", video_url: "MVI_4085"},
            {video_name: "Keep for revenge", video_url: "MVI_4086"},
            {video_name: "Fifty fifty", video_url: "MVI_4087"},
            {video_name: "Idea", video_url: "MVI_4088"},
            {video_name: "Experience", video_url: "MVI_4089"},
            {video_name: "Like", video_url: "MVI_4090"},
            {video_name: "Favourite", video_url: "MVI_4091"},
            {video_name: "Know", video_url: "MVI_4092"},
            {video_name: "Misunderstand", video_url: "MVI_4093"},
            {video_name: "Obey", video_url: "MVI_4094"},
            {video_name: "Forget", video_url: "MVI_4095"},
            {video_name: "Before", video_url: "MVI_4096"},
            {video_name: "Doubt", video_url: "MVI_4097"},
            {video_name: "Lie", video_url: "MVI_4098"},
            {video_name: "Confident", video_url: "MVI_4099"},
            {video_name: "Dream", video_url: "MVI_4100"},
            {video_name: "Wish", video_url: "MVI_4101"},
            {video_name: "Focus", video_url: "MVI_4102"},
            {video_name: "Consider", video_url: "MVI_4103"},
            {video_name: "Believe", video_url: "MVI_4104"},
            {video_name: "Agree", video_url: "MVI_4105"},
            {video_name: "Inform", video_url: "MVI_4106"},
            {video_name: "Want", video_url: "MVI_4107"},
            {video_name: "Reason", video_url: "MVI_4108"},
            {video_name: "Sure", video_url: "MVI_4109"},
            {video_name: "So", video_url: "MVI_4110"},
            {video_name: "Very", video_url: "MVI_4111"},
            {video_name: "Pressure", video_url: "MVI_4112"},
            {video_name: "Cause", video_url: "MVI_4113"},
            {video_name: "Happen", video_url: "MVI_4114"},
            {video_name: "Memory", video_url: "MVI_4115"},
            {video_name: "Remind", video_url: "MVI_4116"},
            {video_name: "Meaning", video_url: "MVI_4117"},
            {video_name: "Scream", video_url: "MVI_4118"},
            {video_name: "Emotion", video_url: "MVI_4119"},
            {video_name: "Sad", video_url: "MVI_4120"},
            {video_name: "Angry", video_url: "MVI_4121"},
            {video_name: "Fear", video_url: "MVI_4122"},
            {video_name: "Disappointed", video_url: "MVI_4123"},
            {video_name: "Frustrate", video_url: "MVI_4124"},
            {video_name: "Jealous", video_url: "MVI_4125"},
            {video_name: "Lonely", video_url: "MVI_4126"},
            {video_name: "Nervous", video_url: "MVI_4127"},
            {video_name: "Worry", video_url: "MVI_4128"},
            {video_name: "Late", video_url: "MVI_4129"},
            {video_name: "Hate", video_url: "MVI_4130"}
        ]      
          ,
      });
      console.log(video)
    } catch (error) {
      console.log(error);
    }
  }


 