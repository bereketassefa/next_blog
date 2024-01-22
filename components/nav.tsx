import React from "react";
import { Button } from "./ui/button";
import { ModeToggle } from "./theme-toggle";
import UserButton from "./signin";
import { auth } from "@/lib/auth";
import Link from "next/link";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { BellIcon } from "@radix-ui/react-icons";

const Nav = async () => {
  const session = await auth();

  return (
    <div className="my-3 flex flex-row items-center justify-between ">
      <Link href={"/"}>
        {" "}
        <img
          src="http://localhost:3000/icon.ico"
          className="w-11 h-w-11"
          alt=""
        />
      </Link>
      <div className="flex flex-row space-x-2 items-center">
        <ModeToggle />
        {session?.user && (
          <Button asChild variant={"ghost"}>
            <Link href={"/write"}>Write</Link>
          </Button>
        )}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost">
              <BellIcon />
            </Button>
          </SheetTrigger>
          <SheetContent className="w-[400px] sm:w-[540px]">
            <SheetHeader>
              <SheetTitle>Notifications</SheetTitle>
              <SheetDescription>
                Your notifications will be listed down below
              </SheetDescription>
            </SheetHeader>
            <div className="w-full h-36 border my-3"></div>
            <div className="w-full h-36 border my-3"></div>
          </SheetContent>
        </Sheet>
        <UserButton />
      </div>
    </div>
  );
};

export default Nav;
