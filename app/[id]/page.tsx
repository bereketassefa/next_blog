import React from 'react'
import prisma from '@/lib/prisma'
import { notFound } from 'next/navigation'
import { Skeleton } from '@/components/ui/skeleton'
import Nav from '@/components/nav'
import MDEditor from '@uiw/react-md-editor'
import BlogRead from '@/components/blogRead'
const page =async (props: any) => {
    const result = await prisma.blog.findMany({
      where:{
        id: props.params.id
      }, 
      include:{
        Tags: true
      }
    })
    if(result.length === 0){
      return notFound()
    }
    const Tags = result[0].Tags
  return (
    <div className='container mx-auto'>
      <Nav/>
      <h2 className='text-3xl text-center'>{result[0].title}</h2>
      <div className=' flex flex-row flex-wrap  my-5  text-sm text-primary  justify-center'>
          
          {Tags.map((each , index) => 
          {
           return <button className=' px-2 rounded-lg bg-secondary my-1 mr-2' >{each.name}</button>
          })}
        </div>
      <p className='my-4 mx-7 text-sm'>
      <BlogRead val={result[0].body}/>
      </p>
      
    </div>
  )
}

export default page