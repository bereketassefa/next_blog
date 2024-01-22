import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import Nav from "@/components/nav";

const loading = () => {
  return (
    <>
      <div className="container mx-auto mt-24">
        <div className="flex justify-center items-center">
          <Skeleton className="w-[280px] h-[20px]"></Skeleton>
        </div>
        <div className=" flex flex-row flex-wrap space-x-3  my-5  text-sm text-primary  justify-center">
          {[1, 22, 3, 4, 5].map((each) => {
            return <Skeleton className="w-[40px] h-[20px]"></Skeleton>;
          })}
        </div>
        <Skeleton className="w-full h-[20px] my-4"></Skeleton>
        <Skeleton className="w-full h-[20px] my-4"></Skeleton>
        <Skeleton className="w-full h-[20px] my-4"></Skeleton>
        <Skeleton className="w-full h-[20px] my-4"></Skeleton>
        <Skeleton className="w-full h-[20px] my-4"></Skeleton>
        <Skeleton className="w-1/2 h-[20px] my-4"></Skeleton>
      </div>
    </>
  );
};

export default loading;
