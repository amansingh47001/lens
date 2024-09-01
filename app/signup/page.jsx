import Image from "next/image";
import Link from "next/link";
import SignUp from "@/components/auth/signup";
import ThemeToggle from "@/components/theme/theme-toggle";

export default function page() {
  return (
    <div className="w-full lg:grid lg:grid-cols-2 h-[100vh]">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <ThemeToggle />
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Sign Up</h1>
            <p className=" text-muted-foreground text-nowrap">
              Enter your information to create an account
            </p>
          </div>

          <SignUp />

          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link href="/" className="underline">
              Sign in
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block relative">
        <Image
          fill
          src="/placeholder.svg"
          alt="Image"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}
