// "use client";
import Nav from "@/components/nav";
import Option from "@/components/options";
import { auth } from "@/lib/auth";
import prisma from "@/lib/prisma";

import { redirect } from "next/navigation";
import React from "react";

const page = async () => {
  const session = await auth();
  if (!session?.user) return redirect("/api/auth/signin");
  const result = await prisma.tags.findMany();
  return (
    <>
      <div className="container mx-auto">
        <Nav />

        <Option tags={result} />
        {/* {JSON.stringify(result)} */}
      </div>
    </>
  );
};

export default page;
