import Tags from "@/components/Tags";
import Blogs from "@/components/blogs";
import { ModeToggle } from "@/components/theme-toggle";
import { auth } from "@/lib/auth";
import prisma from "@/lib/prisma";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import useStatus from "@/store/loading";
import Nav from "@/components/nav";
import { Spin } from "antd";
import { Loader2Icon, LoaderIcon } from "lucide-react";

export default async function Home(props: any) {
  let val;
  if (props.searchParams.tag === undefined) {
    val = {};
  } else {
    val = {
      Tags: {
        some: {
          name: props.searchParams.tag,
        },
      },
    };
  }

  const result = await prisma.blog.findMany({
    where: val,
    include: {
      Tags: true,
      user: {
        select: {
          email: true,
          username: true,
        },
      },
    },
  });
  return (
    <>
      <div className="container mx-auto">
        <Nav />
        
        
        <Tags param={props.searchParams.tag} />
        <div className="grid gap-9 grid-cols-fluid">
          {result.map((each, index) => {
            return (
              <Link href={`/${each.id}`} passHref legacyBehavior >
                <Blogs
                  Title={each.title}
                  id={each.id}
                  Author={each.user.username as string}
                  Tags={each.Tags}
                  key={index}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
