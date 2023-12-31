import prisma from "@/lib/prisma";
import clsx from "clsx";
import Link from "next/link";
import React from "react";
import { Button, buttonVariants } from "./ui/button";

const Tags = async (props: any) => {
  console.log(props)
  const tags = await prisma.tags.findMany();
  const active = buttonVariants({variant: "default" , size: 'sm'})
 
  return (
    <div className=" flex flex-row my-5 space-x-2">
      
      <Link
        href={`/`}
        
        className = {clsx({ "px-2 rounded-md border-2 bg-primary text-secondary": (props.param === undefined) , "px-2 ml-2 rounded-md border-0":  !(props.param === undefined)})}
        
        >
        All
      </Link>
        
      
      {tags.map((each, index) => (
        <Link
          href={`/?tag=${each.name}`}
          key={index}
          className={clsx({"px-2 rounded-md border-2 bg-primary text-secondary": (each.name === props.param), "px-2 rounded-md border-0": !(each.name === props.param)})}
        >
          {each.name}
        </Link>
      ))}
    </div>
  );
};

export default Tags;
