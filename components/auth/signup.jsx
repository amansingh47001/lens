"use client";
import React from "react";
import TextInput from "@/common/text-input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Signup } from "@/lib/actions";
import { toast } from "react-hot-toast";
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

function SignUp() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values) {
    try {
      const data = await Signup(values);

      console.log("data: ", data);

      toast.success(data?.message);
    } catch (err) {
      if ("Firebase: Error (auth/email-already-in-use)." === err?.message)
        return toast.error("Email already in use.");

      toast.error("Something went wrong");
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid gap-4">
          <div className="grid grid-cols-2 gap-3">
            <TextInput
              name="firstName"
              placeholder="Enter first name."
              label="First Name"
              control={form.control}
            />
            <TextInput
              name="lastName"
              placeholder="Enter last name."
              label="Last Name"
              control={form.control}
            />
          </div>
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
            Create an account
          </Button>
        </div>
      </form>
    </Form>
  );
}

export default SignUp;
