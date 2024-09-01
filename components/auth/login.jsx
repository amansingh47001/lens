"use client";
import React from "react";
import TextInput from "@/common/form-inputs/text-input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { authenticate } from "@/lib/actions";
import toast from "react-hot-toast";
import { AuthError } from "next-auth";
// Minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character
const passwordValidation = new RegExp(
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
);

const formSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Please enter email." })
    .email("Please enter a valid email."),
  // password: z.number(),
  password: z
    .string()
    .min(1, { message: "Please enter password." })
    .regex(passwordValidation, {
      message:
        "Minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character",
    }),
});

function Login() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
 async function onSubmit(values) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    try{

      const data = await authenticate(values);
      toast.success("successful.")
    }catch(err){
      console.log("lapophase world",err.message);
      if (err instanceof AuthError) {
        switch (err.type) {
          case "CredentialsSignin":
            toast.error("Invalid credentials.");
          default:
            toast.error("Something went wrong.");
        }
      }
      toast.error(err?.message);
    }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid gap-4">
          <TextInput
            name="email"
            placeholder="Enter email."
            label="Email"
            control={form.control}
          />
          <TextInput
            name="password"
            placeholder="Enter password."
            label="Password"
            control={form.control}
          />
          <Button type="submit" className="w-full">
            Login
          </Button>
        </div>
      </form>
    </Form>
  );
}

export default Login;
