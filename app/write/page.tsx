"use client"
import { SignIn } from "@/components/auth-components";
import Nav from "@/components/nav";
import Option from "@/components/options";
import { auth } from "@/lib/auth";
import { SessionProvider, signIn, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import React from "react";
import MDEditor from '@uiw/react-md-editor';

const page = async () => {
  const {status} = useSession()
  const [value, setValue] = React.useState("**Hello world!!!**");

  if (status == "unauthenticated") return redirect("/api/auth/signin");
  return (
    

    <div className="container mx-auto">
      {/* <Nav /> */}
      <Option/>
     
    </div>
    
  );
};

export default page;
