"use client";

import { cn } from "@/utils/cn";
import Image from "next/image";
import { useState ,useEffect , useTransition } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { loginUser, createUser } from "./action";
import { UserSchema } from "./schema";
import Link from "next/link";
import { useRouter } from "next/navigation";

// Define the types
type UserType = z.infer<typeof UserSchema>;

export default function Form() {
  const [showPassword, setShowPassword] = useState({ signIn: false, signUp: false });
  const [formType, setFormType] = useState<"signIn" | "signUp">("signIn");
  const [Error,setError] = useState<string|null>();
  const router = useRouter();


  // UseForm with the dynamic schema
  const { register, handleSubmit, reset, formState: { errors }, getValues } = useForm<UserType>({
    defaultValues: { type: formType },
    resolver: zodResolver(UserSchema),
  });
  
  useEffect(() => {
    reset({ type: formType });
    Error && setError(null)
  }, [formType,reset]);


  // Handle form submission
  const onSubmit: SubmitHandler<UserType> = async (data) => {
    if (formType === "signIn") {
     loginUser(data.userData as { username: string; password: string; }).then((response)=>{
      if(response?.status === 'success'){
        console.log('user logged in')
        router.push('/dashboard')
      }
     }).catch((error)=>{
      console.log(error.message)
      setError(error.message)
    })
    } else {
      await createUser(data.userData as { email: string; user_password: string; }).then((response)=>{
        if(response?.status === 'success'){
          console.log('user logged in')
          router.push('/dashboard')
        }
       }).catch((error)=>{
        console.log(error.message)
        setError(error.message)
      });
    }
  }; 

   // password visibility toggle
  // password visibility toggle
  const handlePasswordVisibility = (form: "signIn" | "signUp") => {
    setShowPassword((prev) => ({ ...prev, [form]: !prev[form] }));
  };


  return (
    <div className="w-full md:w-auto flex flex-col items-center">
      <h1 className="text-2xl md:text-3xl font-[500]">
        {formType === "signIn" ? `Welcome Back` : `Create an Account`}
      </h1>
      <p className="text-sm text-black/60 my-2 font-medium">
        Please enter your details
      </p>
      <div className="w-[80%] md:w-[26rem] h-12 bg-gray-100 rounded-[8px] p-1 flex gap-2">
        <div
          onClick={() => setFormType('signIn')}
          className={cn(
            "w-[50%] h-full rounded-[6px] flex items-center justify-center cursor-pointer",
            { "bg-white": formType === "signIn" }
          )}>
          <p className="text-md font-[500]">Sign In</p>
        </div>
        <div
          onClick={() => setFormType("signUp")}
          className={cn(
            "w-[50%] h-full rounded-[6px] flex items-center justify-center cursor-pointer",
            { "bg-white": formType === "signUp" }
          )}>
          <p className="text-md font-[500]">Sign Up</p>
        </div>
      </div>
      <div className="w-[80%] md:w-auto">
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          {formType === "signIn" ? (
            <>
              <div className="w-full md:w-[26rem] mt-4">
                <label className="w-full px-1">Username</label>
                <div className="w-full md:w-[26rem] h-12 flex bg-white border-2 border-gray-100 rounded-[10px]">
                  <div className="h-full flex gap-2 items-center px-2">
                    <Image src="/icons/email.svg" width={24} height={24} alt="email icon" />
                    <div className="w-[2.5px] h-[60%] bg-gray-100 rounded-lg"></div>
                  </div>
                  <input
                    {...register("userData.username")}
                    name="userData.username"
                    type="email"
                    placeholder="yourname@domain.com"
                    className="w-[80%] autofill:bg-transparent bg-transparent focus:outline-none py-4 h-full"
                  />
                </div>
              </div>
              <div className="w-full md:w-[26rem] mt-2">
                <label className="w-full px-1">Password</label>
                <div className="w-full md:w-[26rem] h-12 flex bg-white border-2 border-gray-100 rounded-[10px]">
                  <div className="h-full flex gap-2 items-center px-2">
                    <Image src="/icons/password.svg" width={24} height={24} alt="password icon" />
                    <div className="w-[2.5px] h-[60%] bg-gray-100 rounded-lg"></div>
                  </div>
                  <input
                    {...register("userData.password")}
                    name="userData.password"
                    type={!showPassword.signIn ? "password" : "text"}
                    placeholder="********"
                    className="w-[80%] bg-transparent focus:outline-none py-4 h-full"
                  />
                  <div
                    onClick={() => handlePasswordVisibility("signIn")}
                    className="px-2 h-full flex items-center justify-end cursor-pointer">
                   {!showPassword.signIn ? 
                    (<Image src="/icons/nonvisible.svg" width={24} height={24} alt="eye closed" />)
                    :(<Image src="/icons/visible.svg" width={24} height={24} alt="eye open" />)}
                  </div>
                </div>
                <div className="text-sm flex items-center justify-center gap-1 text-red-600 py-2">
                  {Error && <p>{Error}</p>}
                  {!Error && (
                    <>
                      {errors.userData && "username" in errors.userData && (
                        <p>{(errors.userData.username as { message: string }).message} & </p>
                      )}
                      {errors.userData && "password" in errors.userData && (
                        <p>{(errors.userData.password as { message: string }).message}</p>
                      )}
                    </>
                  )}
                </div>          
              </div>
            </>
          ) : (
            <>
              <div className="w-full md:w-[26rem] mt-4">
                <label className="w-full px-1">Email</label>
                <div className="w-full md:w-[26rem] h-12 flex bg-white border-2 border-gray-100 rounded-[10px]">
                  <div className="h-full flex gap-2 items-center px-2">
                    <Image src="/icons/email.svg" width={24} height={24} alt="email icon" />
                    <div className="w-[2.5px] h-[60%] bg-gray-100 rounded-lg"></div>
                  </div>
                  <input
                    {...register("userData.email")}
                    name="userData.email"
                    type="email"
                    placeholder="yourname@domain.com"
                    className="w-[80%] bg-transparent focus:outline-none py-4 h-full"
                  />
                </div>
              </div>
              <div className="w-full md:w-[26rem] mt-2">
                <label className="w-full px-1">Password</label>
                <div className="w-full md:w-[26rem] h-12 flex bg-white border-2 border-gray-100 rounded-[10px]">
                  <div className="h-full flex gap-2 items-center px-2">
                    <Image src="/icons/password.svg" width={24} height={24} alt="password icon" />
                    <div className="w-[2.5px] h-[60%] bg-gray-100 rounded-lg"></div>
                  </div>
                  <input
                    {...register("userData.user_password")}
                    name="userData.user_password"
                    type={!showPassword.signUp ? "password" : "text"}
                    placeholder="********"
                    className="w-[80%] bg-transparent focus:outline-none py-4 h-full"
                  />
                  <div
                    onClick={() => handlePasswordVisibility("signUp")}
                    className="px-2 h-full flex items-center justify-end cursor-pointer">
                    {!showPassword.signUp ? 
                    (<Image src="/icons/nonvisible.svg" width={24} height={24} alt="eye closed" />)
                    :(<Image src="/icons/visible.svg" width={24} height={24} alt="eye open" />)}
                  </div>
                </div>
                  <div className="text-sm item-center justify-center flex gap-1 text-red-600 py-2">
                  {errors.userData && "email" in errors.userData && (
                    <p>{(errors.userData.email as { message: string }).message} & </p>
                  )}
                  {errors.userData && "user_password" in errors.userData && (
                    <p>{(errors.userData.user_password as { message: string }).message}</p>
                  )}
                </div>
              </div>
              <div className="w-full md:w-[26rem] my-4  flex gap-2 justify-center">
                <input
                  required
                  type="checkbox"
                  className="size-4 rounded-lg checked:bg-blue-700"
                />
                <p className="text-wrap  text-[0.7rem]">
                  By clicking submit or Continue with google{" "}
                  <br className="hidden md:flex" />
                  you agree with our
                  <Link href="/" className="text-blue-500 px-1">
                    Terms & Conditions
                  </Link>
                </p>
              </div>
            </>
          )}
          <input
            type="submit"
            className="w-full text-white font-medium md:w-[26rem] h-12 bg-sky-600 rounded-[10px] mt-6 cursor-pointer flex items-center justify-center"
          />
          <div className="mt-4 flex gap-2 items-center">
            <span className="w-full h-[2px] bg-black/20"></span>
            <p className="text-black/60">or</p>
            <span className="w-full h-[2px] bg-black/20"></span>
          </div>
          <div className="my-4 w-full h-12 flex items-center justify-center border-2 border-gray-100 rounded-[10px] cursor-pointer">
            <div className="flex items-center gap-2">
              <Image src="/icons/google.svg" width={24} height={24} alt="google" />
              <p className="text-md">Google</p>
            </div>
          </div>
          <div className="my-4 w-full flex items-center justify-center gap-2">
            <p>{formType === "signIn" ? "Don't have an account?" : "Already have an account?"}</p>
            <p onClick={() => setFormType(formType === "signIn" ? "signUp" : "signIn")} className="text-blue-500 cursor-pointer">
              {formType === "signIn" ? "Sign Up" : "Sign In"}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

