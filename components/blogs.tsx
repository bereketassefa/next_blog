import { Link } from "lucide-react";
import React from "react";
import { Card } from "./ui/card";

const Blogs = ({
  Title,
  Author,
  Tags,
  id,
}: {
  Title: String;
  Author: String;
  id: string;
  Tags: { id: string; name: string }[];
}) => {
  return (
    <Card className="cursor-pointer">
      {/* <article className="cursor-pointer hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm  hover:[animation-duration:_4s]"> */}
      <div className="rounded-[10px]  p-4 !pt-20 sm:p-6">
        <time
          dateTime="2022-10-10"
          className="block text-xs text-muted-foreground "
        >
          {" "}
          {Author}
        </time>

        <a href="#">
          <h3 className="mt-0.5 text-lg font-medium ">{Title}</h3>
        </a>

        <div className="mt-4 flex flex-wrap gap-1">
          {Tags.length === 0 && <div> </div>}
          {Tags.map((each, index) => {
            return (
              <span className="whitespace-nowrap rounded-full border border-primary px-2.5 py-1 text-xs text-secondary-foreground">
                {each.name}
              </span>
            );
          })}
        </div>
      </div>
      {/* </article> */}
    </Card>
    // </Link>
  );
};

export default Blogs;
