import { Link } from "lucide-react";
import React from "react";

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
      
    <div>
        <article className="cursor-pointer hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm  hover:[animation-duration:_4s]">
          <div className="rounded-[10px] bg-background p-4 !pt-20 sm:p-6">
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
                  <span className="whitespace-nowrap rounded-full bg-secondary px-2.5 py-0.5 text-xs text-secondary-foreground">
                    {each.name}
                  </span>
                );
              })}

            </div>
          </div>
        </article>
    </div>
      // </Link>
  );
};

export default Blogs;
