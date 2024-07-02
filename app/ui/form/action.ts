"use server";

import { z } from "zod";
import { CreateUserSchema, SignInSchema, updateDataSchema } from "./schema";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";


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

      return { status: "success"  };
  } catch (error) {
      if (error instanceof AuthError) {
          switch (error.type) {
              case "CredentialsSignin":
                  return { status: "error", error: "Invalid Credentials" };
             case "CallbackRouteError": 
                  return { status : "error" , error:"Invalid username or password. Please try again."}
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

        const data = validateData.data;

    
        // check if user already exists
        const user = await fetch(`${process.env.API_BASE_URL}/custom-user/register`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                username: data.email,
                firstname: data.firstname,
                lastname: data.lastname,
                password: data.user_password
            
            })
        }).then(async (res) => {
            if (res.ok && res.status === 200) {
                const data = await res.json()
    
                return data.user
            }else if (res.status === 400) {
                const data = await res.json()
                 const error = data.error
                 throw new Error(error.message)
            }
             else {
                return null
            }
        })

     
        if (user) {
            return { status: "success", message: "Account created successfully" };
        } else {
            return { status: "error", message: "An error occurred. Please try again." };
        }
    } catch (error:any) {
        console.log(error.message); 
        if(error.message === 'User already exists.'){
            return { status: "error", message: "User already exists. Please sign in" };
        }
        return { status: "error", message: "An error occurred oppp. Please try again." };
    }
  }


