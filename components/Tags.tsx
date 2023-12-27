import prisma from "@/lib/prisma";
import clsx from "clsx";
import Link from "next/link";
import React from "react";

const Tags = async (props: any) => {
  console.log(props)
  const tags = await prisma.tags.findMany();
 
  return (
    <div className=" flex flex-row my-3 space-x-2">
      <Link
        href={`/`}
        
        className = {clsx({"px-2 rounded-lg border-2 bg-primary text-secondary": (props.param === undefined) , "px-2 rounded-lg border-0":  !(props.param === undefined)})}
       
      >
        All
      </Link>
      {tags.map((each, index) => (
        <Link
          href={`/?tag=${each.name}`}
          key={index}
          className={clsx({"px-2 rounded-lg border-2 bg-primary text-secondary": (each.name === props.param), "px-2 rounded-lg border-0": !(each.name === props.param)})}
        >
          {each.name}
        </Link>
      ))}
    </div>
  );
};

export default Tags;
