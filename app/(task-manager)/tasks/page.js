export const metadata = {
  title: "Tasks",
};

const breadcrumbList = [
  {
    name: "Dashboard",
    link: "#",
  },
  {
    name: "Tasks",
  },
];

import CustomBreadcrumb from "@/common/custom-breadcrumb";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search } from "lucide-react";
import Link from "next/link";

export default function page() {
  return (
    <div>
      <CustomBreadcrumb list={breadcrumbList} />
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Tasks</h1>
        <div className="relative ml-auto flex-1 md:grow-0">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search..."
            className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[320px]"
          />
        </div>
      </div>
      <div>
        <Button size="icon" className="absolute bottom-10 right-10" asChild>
          <Link href="/tasks/add-task">
            <Plus className="size-5" />
          </Link>
        </Button>
      </div>
      <div className="my-3 flex flex-col gap-4">
        <div className="border dark:border-neutral-700 dark:bg-neutral-900 p-4 rounded flex flex-col gap-2">
          <p>I have to complete len assignment by sunday evening.</p>
          <div className="flex justify-between items-center flex-wrap text-sm">
            <p className="bold text-red-500">Due date: 1 October 2024</p>

            <span className="bg-red-500  border border-red-600 text-white px-2 py-1 rounded">
              High
            </span>
          </div>
        </div>
        <div className="border dark:border-neutral-700 dark:bg-neutral-900  p-4 rounded flex flex-col gap-2">
          <p>I have to complete len assignment by sunday evening.</p>
          <div className="flex justify-between items-center flex-wrap text-sm">
            <p className="bold text-red-500">Due date: 1 October 2024</p>

            <span className="bg-orange-400  border border-orange-500 text-white px-2 py-1 rounded">
              Medium
            </span>
          </div>
        </div>
        <div className="border dark:border-neutral-700 dark:bg-neutral-900  p-4 rounded flex flex-col gap-2">
          <p>I have to complete len assignment by sunday evening.</p>
          <div className="flex justify-between items-center flex-wrap text-sm">
            <p className="bold text-red-500">Due date: 1 October 2024</p>

            <span className="bg-yellow-400  border border-yellow-500 text-white px-2 py-1 rounded">
              Low
            </span>
          </div>
        </div>
        <div className="border dark:border-neutral-700 dark:bg-neutral-900 p-4 rounded flex flex-col gap-2">
          <p>I have to complete len assignment by sunday evening.</p>
          <div className="flex justify-between items-center flex-wrap text-sm">
            <p className="bold text-red-500">Due date: 1 October 2024</p>

            <span className="bg-red-500  border border-red-600 text-white px-2 py-1 rounded">
              High
            </span>
          </div>
        </div>
        <div className="border dark:border-neutral-700 dark:bg-neutral-900  p-4 rounded flex flex-col gap-2">
          <p>I have to complete len assignment by sunday evening.</p>
          <div className="flex justify-between items-center flex-wrap text-sm">
            <p className="bold text-red-500">Due date: 1 October 2024</p>

            <span className="bg-orange-400  border border-orange-500 text-white px-2 py-1 rounded">
              Medium
            </span>
          </div>
        </div>
        <div className="border dark:border-neutral-700 dark:bg-neutral-900  p-4 rounded flex flex-col gap-2">
          <p>I have to complete len assignment by sunday evening.</p>
          <div className="flex justify-between items-center flex-wrap text-sm">
            <p className="bold text-red-500">Due date: 1 October 2024</p>

            <span className="bg-yellow-400  border border-yellow-500 text-white px-2 py-1 rounded">
              Low
            </span>
          </div>
        </div>
        <div className="border dark:border-neutral-700 dark:bg-neutral-900 p-4 rounded flex flex-col gap-2">
          <p>I have to complete len assignment by sunday evening.</p>
          <div className="flex justify-between items-center flex-wrap text-sm">
            <p className="bold text-red-500">Due date: 1 October 2024</p>

            <span className="bg-red-500  border border-red-600 text-white px-2 py-1 rounded">
              High
            </span>
          </div>
        </div>
        <div className="border dark:border-neutral-700 dark:bg-neutral-900  p-4 rounded flex flex-col gap-2">
          <p>I have to complete len assignment by sunday evening.</p>
          <div className="flex justify-between items-center flex-wrap text-sm">
            <p className="bold text-red-500">Due date: 1 October 2024</p>

            <span className="bg-orange-400  border border-orange-500 text-white px-2 py-1 rounded">
              Medium
            </span>
          </div>
        </div>
        <div className="border dark:border-neutral-700 dark:bg-neutral-900  p-4 rounded flex flex-col gap-2">
          <p>I have to complete len assignment by sunday evening.</p>
          <div className="flex justify-between items-center flex-wrap text-sm">
            <p className="bold text-red-500">Due date: 1 October 2024</p>

            <span className="bg-yellow-400  border border-yellow-500 text-white px-2 py-1 rounded">
              Low
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
