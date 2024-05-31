"use server";
import { z } from "zod";
import { CreateUserSchema, SignInSchema } from "./schema";

export async function loginUser(data: z.infer<typeof SignInSchema>) {
    try {
        const res = data;
        console.log(res);
    
        if (res) {
          return { status: "success", message: "Payment sent successfully" };
        } else {
          return { status: "error", message: "An error occurred. Please try again." };
        }
      } catch (error) {
        console.log(error);
      }
}

export async function createUser(data: z.infer<typeof CreateUserSchema>) {
    try {
        const res = data;
        console.log(res);
    
        if (res) {
          return { status: "success", message: "Payment sent successfully" };
        } else {
          return { status: "error", message: "An error occurred. Please try again." };
        }
      } catch (error) {
        console.log(error);
      }
}
