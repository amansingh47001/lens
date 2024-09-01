"use client"
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { NavbarConst } from "@/constant/navbar-const";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

function Navbar() {
    const pathname = usePathname();
  return (
    <TooltipProvider>
      {NavbarConst.map((navbarItem) => (
        <Tooltip key={navbarItem?.name}>
          <TooltipTrigger asChild>
            <Link
              href={navbarItem?.link}
              className={cn("flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:bg-neutral-100 hover:dark:bg-neutral-700 md:h-8 md:w-8 border dark:border-neutral-700",  {
                'bg-sky-100 dark:bg-sky-700 dark:text-blue-50 text-blue-600 border-sky-200 dark:border-sky-600 hover:bg-sky-100 dark:hover:bg-sky-700/90': pathname === navbarItem?.link,
              }, )}
            >
              {navbarItem.icon}
              <span className="sr-only">{navbarItem?.name}</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">{navbarItem?.name}</TooltipContent>
        </Tooltip>
      ))}
    </TooltipProvider>
  );
}

export default Navbar;
