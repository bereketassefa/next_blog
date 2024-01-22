import Blogs from '@/components/blogs';
import { auth } from '@/lib/auth';
import prisma from '@/lib/prisma';
import Link from 'next/link';
import React from 'react'

const page =async () => {
  const session = await auth()
  // const result = await prisma.user.findMany({
  //   where: {
  //     email: session?.user?.email
  //   },
  // });
  const blogs = await prisma.blog.findMany(
    {
      where: {
        userId: "f3481d8b-6fa0-4297-b168-bc5397186ab5"
      },
      include: {
        Tags: true,
        user: {
          select: {
            email: true,
            username: true,
          },
        },
      },
    }
  )
  return (
    <>
    <div className="grid gap-9 grid-cols-fluid ">
    {blogs.map((each, index) => {
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
    </>
  )
}

export default page