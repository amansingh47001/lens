"use client";
import React, { useEffect, useState } from "react";
import TextInput from "@/common/form-inputs/text-input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import toast from "react-hot-toast";
import TextareaInput from "@/common/form-inputs/text-area";
import DateInput from "@/common/form-inputs/date-input";
import SelectInput from "@/common/form-inputs/select-input";
import dynamic from "next/dynamic";
import { Label } from "../ui/label";
import { MapPinPlusInside } from "lucide-react";

import { useDispatch, useSelector } from "react-redux";
import { taskAdded } from "@/redux/slices/task-slice";
import { useRouter } from "next/navigation";

const DraggableMarker = dynamic(() => import("@/common/map/draggable-marker"), {
  ssr: false,
});

const priorityOptions = [
  {
    label: "High",
  },
  {
    label: "Medium",
  },
  {
    label: "Low",
  },
];

const formSchema = z.object({
  title: z.string().min(1, { message: "Please enter title." }),
  description: z.string().min(1, { message: "Please enter description." }),
  priority: z.string().min(1, { message: "Please enter priority." }),
  dueDate: z.date({ required_error: "Please select due date." }),
});

function TaskForm() {
  const [position, setPosition] = useState({
    lat: 51.505,
    lng: -0.09,
  });

  const router = useRouter();
  const dispatch = useDispatch();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      location: "",
      priority: "",
    },
  });

  //   useEffect(() => {
  //     if (navigator.geolocation) {
  //       navigator.geolocation.getCurrentPosition(success, error);
  //     } else {
  //       console.log("Geolocation not supported");
  //     }
  //   }, []);

  function handleLocationClick() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log("Geolocation not supported");
    }
  }

  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    setPosition({ lat: latitude, lng: longitude });
  }

  function error() {
    console.log("Unable to retrieve your location");
  }

//   console.log("Super: ", form.formState.errors);

  //   useEffect(() => {
  //     if (position) {
  //       form.setValue("location", position);
  //     }
  //   }, [position, form]);

  // 2. Define a submit handler.
  async function onSubmit(values) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    try {
      dispatch(
        taskAdded({
          ...values,
          location: position,
        })
      );
      toast.success("Task added successfully.");
      Router.push("/tasks");
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong.");
    }
  }

  return (
    <div className="">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Tasks</h1>
        <div className="relative ml-auto flex-1 md:grow-0">
          <Button
            type="submit"
            className="w-full"
            onClick={form.handleSubmit(onSubmit)}
          >
            Add Task
          </Button>
        </div>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 my-4">
          <div className="grid grid-cols-2 gap-6">
            <div className="grid bg-white dark:bg-neutral-700 p-4 gap-2 border dark:border-neutral-900 ">
              <TextInput
                name="title"
                placeholder="Enter title."
                label="Title"
                control={form.control}
              />

              <div>
                <Label>Location</Label>
                <p className="text-sm mb-1">Please select location on map.</p>
                <div className="text-sm font-medium shadow-sm border dark:border-neutral-900 dark:bg-neutral-600 bg-neutral-100 px-2.5 py-1.5 rounded">
                  {position?.lat + ", " + position?.lng}
                </div>
                <button
                  className="my-1.5 flex items-center text-sm hover:text-blue-500"
                  onClick={handleLocationClick}
                >
                  <MapPinPlusInside className="mr-2 size-4" /> Select current
                  location.
                </button>
              </div>

              <DateInput
                name="dueDate"
                placeholder="Pick due date."
                label="Due Date"
                control={form.control}
              />
              <SelectInput
                name="priority"
                placeholder="Select Priority."
                label="Priority"
                control={form.control}
                options={priorityOptions}
                matchField="label"
                renderField="label"
              />
              <TextareaInput
                name="description"
                type="textarea"
                rows={8}
                placeholder="Enter description."
                label="Description"
                control={form.control}
              />
            </div>
            <div className="bg-white border mx-auto w-full h-full">
              <DraggableMarker position={position} setPosition={setPosition} />
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
}

export default TaskForm;
