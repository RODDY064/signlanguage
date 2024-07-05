"use client";

import { cn } from "@/utils/cn";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { loginUser, createUser } from "./action";
import { UserSchema } from "./schema";
import Link from "next/link";

// Define the types
type UserType = z.infer<typeof UserSchema>;

export default function Form() {
  const [showPassword, setShowPassword] = useState({
    signIn: false,
    signUp: false,
  });
  const [formType, setFormType] = useState<"signIn" | "signUp">("signIn");
  const [Error, setError] = useState<string | null>();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // useEffect(() => {
  //   console.log(Error);
  // }, [Error]);

  // UseForm with the dynamic schema
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UserType>({
    defaultValues: { type: formType },
    resolver: zodResolver(UserSchema),
  });

  useEffect(() => {
    reset({ type: formType });
    Error && setError(null);
  }, [formType, reset]);

  

  // Handle form submission
  const onSubmit: SubmitHandler<UserType> = async (data) => {
    if (formType === "signIn") {
      try {
        const result = await loginUser(
          data.userData as { username: string; password: string }
        )  ?? { status: 'status', message: 'Unknown error occurred' };;
    
        console.log(result.status)
         
        if (result.status === "error") {
          console.log(result.error);
          setError(result.error);
        } else {
          setError("");
          reset({ type: formType });
        }
      } catch (error: any) {
        console.error("Unexpected error:", error);
        setError(error.toString());
      }
    } else {
      try {
        const result = await createUser(
          data.userData as {
            firstname: string;
            lastname: string;
            email: string;
            user_password: string;
          }
        );
        if (result.status === "error") {
          console.log(result.message);
          setError(result.message);
        } else {
          setLoading(true);
          setError(result.message);
          setTimeout(() => {
             reset()
            setFormType("signIn");
            setLoading(false);
          }, 3000);
        }
      } catch (error) {
        console.log(error);
        setError(error as string);
      }
    }
  };

  // password visibility toggle
  const handlePasswordVisibility = (form: "signIn" | "signUp") => {
    setShowPassword((prev) => ({ ...prev, [form]: !prev[form] }));
  };

  return (
    <div className="w-full md:w-auto flex flex-col items-center">
      <h1 className="text-2xl md:text-3xl font-[500] title">
        {formType === "signIn" ? `Welcome Back` : `Create an Account`}
      </h1>
      <p className="text-sm text-black/60 my-2 font-medium">
        Please enter your details
      </p>
      <div className="w-[80%] md:w-[26rem] h-12 bg-gray-100 rounded-[8px] p-1 flex gap-2">
        <div
          id="signin"
          onClick={() => setFormType("signIn")}
          className={cn(
            "w-[50%] h-full rounded-[6px] flex items-center justify-center cursor-pointer",
            { "bg-white": formType === "signIn" }
          )}
        >
          <p className="text-md font-[500]">Sign In</p>
        </div>
        <div
          id="signup"
          onClick={() => setFormType("signUp")}
          className={cn(
            "w-[50%] h-full rounded-[6px] flex items-center justify-center cursor-pointer",
            { "bg-white": formType === "signUp" }
          )}
        >
          <p className="text-md font-[500]">Sign Up</p>
        </div>
      </div>
      <div className="w-[80%] md:w-auto">
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          {formType === "signIn" ? (
            <>
              <div className="w-full md:w-[26rem] mt-4">
                <label className="w-full px-1">Username</label>
                <div className="w-full focus-within:border-blue-500/70 md:w-[26rem] h-12 flex bg-white border-2 border-gray-100 rounded-[10px]">
                  <div className="h-full flex gap-2 items-center px-2">
                    <Image
                      src="/icons/email.svg"
                      width={24}
                      height={24}
                      alt="email icon"
                    />
                    <div className="w-[2.5px] h-[60%] bg-gray-100 rounded-lg"></div>
                  </div>
                  <input
                    id="username"
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
                <div className="w-full focus-within:border-blue-500/70 md:w-[26rem] h-12 flex bg-white border-2 border-gray-100 rounded-[10px]">
                  <div className="h-full flex gap-2 items-center px-2">
                    <Image
                      src="/icons/password.svg"
                      width={24}
                      height={24}
                      alt="password icon"
                    />
                    <div className="w-[2.5px] h-[60%] bg-gray-100 rounded-lg"></div>
                  </div>
                  <input
                    id="password"
                    {...register("userData.password")}
                    name="userData.password"
                    type={!showPassword.signIn ? "password" : "text"}
                    placeholder="********"
                    className="w-[80%] bg-transparent focus:outline-none py-4 h-full"
                  />
                  <div
                    id="changeType"
                    onClick={() => handlePasswordVisibility("signIn")}
                    className="px-2 h-full flex items-center justify-end cursor-pointer"
                  >
                    {!showPassword.signIn ? (
                      <Image
                        src="/icons/nonvisible.svg"
                        width={24}
                        height={24}
                        alt="eye closed"
                      />
                    ) : (
                      <Image
                        src="/icons/visible.svg"
                        width={24}
                        height={24}
                        alt="eye open"
                      />
                    )}
                  </div>
                </div>
                <div className="text-sm flex items-center justify-center gap-1 text-red-600 py-2">
                  {Error && <p>{Error}</p>}
                  {!Error && (
                    <>
                      {errors.userData && "username" in errors.userData && (
                        <p>
                          {
                            (errors.userData.username as { message: string })
                              .message
                          }{" "}
                           {}
                          {errors.userData && "username" in errors.userData && errors.userData && "password" in errors.userData && <>&</> }
                        </p>
                      )}
                      {errors.userData && "password" in errors.userData && (
                        <p>
                         {
                            (errors.userData.password as { message: string })
                              .message
                          }
                        </p>
                      )}
                    </>
                  )}
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="w-full md:w-[26rem] mt-4">
                <div className="w-full flex justify-between gap-2 my-2">
                  <div className="w-full">
                    <label className="w-full px-1">First Name</label>
                    <input
                       id="firstname"
                      {...register("userData.firstname")}
                      name="userData.firstname"
                      className="w-full p-2 h-12 flex bg-white border-2 border-gray-100 rounded-[10px] focus:outline-none focus-within:border-blue-500/70"
                    />
                  </div>
                  <div className="w-full">
                    <label className="w-full px-1">Last Name</label>
                    <input
                      id="lastname"
                      {...register("userData.lastname")}
                      name="userData.lastname"
                      className="w-full h-12 flex focus-within:border-blue-500/70 focus:outline-none p-2 bg-white border-2 border-gray-100 rounded-[10px]"
                    />
                  </div>
                </div>
                <label className="w-full px-1">Email</label>
                <div className="w-full md:w-[26rem] h-12 flex bg-white border-2 border-gray-100 rounded-[10px] focus-within:border-blue-500/70">
                  <div className="h-full flex gap-2 items-center px-2">
                    <Image
                      src="/icons/email.svg"
                      width={24}
                      height={24}
                      alt="email icon"
                    />
                    <div className="w-[2.5px] h-[60%] bg-gray-100 rounded-lg"></div>
                  </div>
                  <input
                    id="email"
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
                <div className="w-full md:w-[26rem] h-12 flex bg-white border-2 border-gray-100 rounded-[10px] focus-within:border-blue-500/70">
                  <div className="h-full flex gap-2 items-center px-2">
                    <Image
                      src="/icons/password.svg"
                      width={24}
                      height={24}
                      alt="password icon"
                    />
                    <div className="w-[2.5px] h-[60%] bg-gray-100 rounded-lg"></div>
                  </div>
                  <input
                    id="user_password"
                    {...register("userData.user_password")}
                    name="userData.user_password"
                    type={!showPassword.signUp ? "password" : "text"}
                    placeholder="********"
                    className="w-[80%] bg-transparent focus:outline-none py-4 h-full"
                  />
                  <div
                    onClick={() => handlePasswordVisibility("signUp")}
                    className="px-2 h-full flex items-center justify-end cursor-pointer"
                  >
                    {!showPassword.signUp ? (
                      <Image
                        src="/icons/nonvisible.svg"
                        width={24}
                        height={24}
                        alt="eye closed"
                      />
                    ) : (
                      <Image
                        src="/icons/visible.svg"
                        width={24}
                        height={24}
                        alt="eye open"
                      />
                    )}
                  </div>
                </div>
                <div className={`text-sm item-center justify-center flex gap-1 ${loading ? "text-green-600" : "text-red-600"} py-2`}>
                  {Error && <p>{Error}</p>}
                  {!Error && (
                    <>
                      {errors.userData &&
                        (Object.keys(errors.userData).filter((key) =>
                          [
                            "firstname",
                            "lastname",
                            "email",
                            "user_password",
                          ].includes(key)
                        ).length >= 2 ? (
                          <p>All fields are required</p>
                        ) : (
                          <>
                            {"firstname" in errors.userData && (
                              <p>
                                {
                                  (
                                    errors.userData.firstname as {
                                      message: string;
                                    }
                                  ).message
                                }
                              </p>
                            )}
                            {"lastname" in errors.userData && (
                              <p>
                                {
                                  (
                                    errors.userData.lastname as {
                                      message: string;
                                    }
                                  ).message
                                }
                              </p>
                            )}
                            {"email" in errors.userData && (
                              <p>
                                {
                                  (errors.userData.email as { message: string })
                                    .message
                                }
                              </p>
                            )}
                            {"user_password" in errors.userData && (
                              <p>
                                {
                                  (
                                    errors.userData.user_password as {
                                      message: string;
                                    }
                                  ).message
                                }
                              </p>
                            )}
                          </>
                        ))}
                    </>
                  )}
                </div>
              </div>
              <div className="w-full md:w-[26rem] my-4  flex gap-2 justify-center">
                <input
                   id="checkbox"
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
          <div className="my-4 w-full h-12 flex items-center justify-center border-2 border-gray-100 rounded-[10px] cursor-pointer hover:bg-blue-100">
            <div className="flex items-center gap-2">
              <Image
                src="/icons/google.svg"
                width={24}
                height={24}
                alt="google"
              />
              <p className="text-md">Google</p>
            </div>
          </div>
          <div className="my-4 w-full flex items-center justify-center gap-2">
            <p>
              {formType === "signIn"
                ? "Don't have an account?"
                : "Already have an account?"}
            </p>
            <p
              onClick={() =>
                setFormType(formType === "signIn" ? "signUp" : "signIn")
              }
              className="text-blue-500 cursor-pointer"
            >
              {formType === "signIn" ? "Sign Up" : "Sign In"}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
