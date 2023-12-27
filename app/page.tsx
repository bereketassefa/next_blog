import Tags from '@/components/Tags'
import Blogs from '@/components/blogs'
import { ModeToggle } from '@/components/theme-toggle'
import Image from 'next/image'

export default function Home(props: any) {
  return (
   <>
   <Tags param = {props.searchParams.tag}/>
   <Blogs/>
   </>
  )
}
