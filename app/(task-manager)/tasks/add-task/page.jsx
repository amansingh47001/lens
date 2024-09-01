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
import TaskForm from "@/components/tasks/task-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search } from "lucide-react";
import Link from "next/link";

export default function page() {
  return (
    <>
      <CustomBreadcrumb list={breadcrumbList} />

      <TaskForm />
    </>
  );
}

// "use client";

// import dynamic from "next/dynamic";

// const Map = dynamic(() => import("@/common/map"), {
//   ssr: false,
// });

// export default function page() {
//   return (
//     <div className="bg-white-700 mx-auto my-5 w-[98%] h-[480px]">
//       <Map posix={[4.79029, -75.69003]} />
//     </div>
//   );
// }
