import Image from "next/image";
import Link from "next/link";
import Login from "@/components/auth/login";
import ThemeToggle from "@/components/theme/theme-toggle";

export default function page() {
  return (
    <div className="w-full lg:grid lg:grid-cols-2 h-[100vh]">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <ThemeToggle />
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className=" text-muted-foreground text-nowrap">
              Enter your email below to login to your account
            </p>
          </div>

          <Login />

          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="underline">
              Sign up
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
