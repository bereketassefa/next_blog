"use client";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import clsx from "clsx";
import { useParams, usePathname } from "next/navigation";

const ProfileNav = () => {
  const params = usePathname();
  console.log(params);
  return (
    <div>
      <div className="w-full  flex flex-row items-center space-x-3 pl-11 mb-7">
        <Button
          variant={"ghost"}
          className={clsx("rounded-[0] underline-[0] border-primary", {
            " border-b-2 rounded-[0] underline-[0] border-primary":
              params === "/profile",
          })}
          asChild
        >
          <Link href={"/profile"}>My Blogs</Link>
        </Button>
        <Button
          variant={"ghost"}
          className={clsx("rounded-[0] underline-[0] border-primary", {
            " border-b-2 rounded-[0] underline-[0] border-primary":
              params === "/profile/edit",
          })}
          asChild
        >
          <Link href={"/profile/edit"}>Profile</Link>
        </Button>
      </div>
    </div>
  );
};

export default ProfileNav;
