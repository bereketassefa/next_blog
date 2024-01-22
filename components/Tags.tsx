import prisma from "@/lib/prisma";
import clsx from "clsx";
import Link from "next/link";
import React from "react";
import { Button, buttonVariants } from "./ui/button";

const Tags = async (props: any) => {
  console.log(props);
  const tags = await prisma.tags.findMany();
  const active = buttonVariants({ variant: "default", size: "sm" });

  return (
    <div className=" flex flex-row my-5 space-x-2">
      <Button variant={"ghost"} asChild>
        <Link
          href={`/`}
          className={clsx({
            "px-2 rounded-md  bg-primary text-primary-foreground hover:bg-primary hover:text-white":
              props.param === undefined,
            "px-2 ml-2 rounded-md border-0": !(props.param === undefined),
          })}
        >
          All
        </Link>
      </Button>

      {tags.map((each, index) => (
        <Button variant={"ghost"} asChild>
          <Link
            href={`/?tag=${each.name}`}
            key={index}
            className={clsx({
              "px-2 rounded-md  bg-primary text-primary-foreground hover:bg-primary hover:text-white":
                each.name === props.param,
              "px-2 rounded-md border-0": !(each.name === props.param),
            })}
          >
            {each.name}
          </Link>
        </Button>
      ))}
    </div>
  );
};

export default Tags;
