"use server";

import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import db from "./firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import bcrypt from "bcrypt";
import { doc, setDoc } from "@firebase/firestore";

export async function authenticate(formData) {
  try {
    console.log("formdata: ",formData);
    await signIn("credentials", formData);
  } catch (error) {
    console.log('Error lapaa: ',error);
   
    throw error;
  }
}

export async function Signup({ firstName, lastName, email, password }) {
  try {
    // const hashedPassword = await bcrypt.hash(password, 10);
    const auth = getAuth();
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    if (user) {
      await setDoc(doc(db, "users", user.uid), {
        displayName: firstName + " " + lastName,
        createdAt: new Date().toISOString(),
      });
    }

    if (user) return { message: "Signup successful." };
  } catch (err) {
    throw err;
  }
}
