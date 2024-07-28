"use client";

import Heading from "@/app/components/Heading";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/utils/supabase/supabaseClient";

const page = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conPassword, setConPassword] = useState("");

  const signUp = async (e) => {
    e.preventDefault(); // Prevent default form submission
    if (password !== conPassword) {
      console.log("Passwords do not match");
      return;
    }

    try {
      let { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
      });

      if (error) {
        console.log("Error signing up:", error.message);
      } else {
        console.log("Sign up successful:", data);
        router.push("/success"); // Redirect to a success page
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <main className=" px-10 pb-20 flex flex-col  gap-12 h-screen overflow-y-auto">
      <div className="Heading pt-12">
        <Heading heading={"Student Deatils"} />
      </div>
      <div className="details">
        <form action="" className="flex flex-col gap-6" onSubmit={signUp}>
          <div>
            <h1 className="font-bold text-[#1C1B1F]">Name</h1>
            <input
              name="name"
              type="text"
              className=" h-12 w-full rounded-xl mt-2 focus:outline-[#b14141] p-5"
              style={{ "box-shadow": "0px 5px 4px #a7a7a7" }}
            />
          </div>
          <div>
            <h1 className="font-bold text-[#1C1B1F]">Email</h1>
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              name="email"
              type="email"
              className=" h-12 w-full rounded-xl mt-2 focus:outline-[#b14141] p-5"
              style={{ "box-shadow": "0px 5px 4px #a7a7a7" }}
            />
          </div>
          <div>
            <h1 className="font-bold text-[#1C1B1F]">Password</h1>
            <input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              name="password"
              type="password"
              className=" h-12 w-full rounded-xl mt-2 focus:outline-[#b14141] p-5"
              style={{ "box-shadow": "0px 5px 4px #a7a7a7" }}
            />
          </div>
          <div>
            <h1 className="font-bold text-[#1C1B1F]">Confirm Password</h1>
            <input
              value={conPassword}
              onChange={(e) => {
                setConPassword(e.target.value);
              }}
              name="con-password"
              type="password"
              className=" h-12 w-full rounded-xl mt-2 focus:outline-[#b14141] p-5"
              style={{ "box-shadow": "0px 5px 4px #a7a7a7" }}
            />
          </div>
          <div>
            <h1 className="font-bold text-[#1C1B1F]">Phone number</h1>
            <input
              name="phone"
              type="text"
              className=" h-12 w-full rounded-xl mt-2 focus:outline-[#b14141] p-5"
              style={{ "box-shadow": "0px 5px 4px #a7a7a7" }}
            />
          </div>
          <div>
            <h1 className="font-bold text-[#1C1B1F]">Gender</h1>

            <select
              name="gender"
              className="h-12 w-full rounded-xl mt-2 focus:outline-[#b14141]"
              style={{ "box-shadow": "0px 5px 4px #a7a7a7" }}
            >
              <option disabled selected value="">
                Select Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <h1 className="font-bold text-[#1C1B1F]">Blood Group</h1>
            <select
              className="h-12 w-full rounded-xl mt-2 focus:outline-[#b14141] "
              style={{ "box-shadow": "0px 5px 4px #a7a7a7" }}
            >
              <option selected disabled value="">
                Select Blood Group
              </option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          </div>
          <div>
            <h1 className="font-bold text-[#1C1B1F]">Date Of Birth</h1>
            <input
              name="date"
              type="date"
              className=" h-12 w-full rounded-xl mt-2 focus:outline-[#b14141] p-5"
              style={{ "box-shadow": "0px 5px 4px #a7a7a7" }}
            />
          </div>
          <div>
            <h1 className="font-bold text-[#1C1B1F]">Weight</h1>
            <input
              name="weight"
              type="text"
              className=" h-12 w-full rounded-xl mt-2 focus:outline-[#b14141] p-5"
              style={{ "box-shadow": "0px 5px 4px #a7a7a7" }}
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-[#A61B1B] w-fit text-white px-3 py-1 rounded-full  "
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default page;
