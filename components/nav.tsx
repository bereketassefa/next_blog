import React from 'react'
import { Button } from './ui/button'
import { ModeToggle } from './theme-toggle'
import UserButton from './signin'
import { auth } from '@/lib/auth'

const Nav =async () => {
  const session = await auth()
  return (
    <div className='my-3 flex flex-row items-center justify-between '>
        <img src="http://localhost:3000/icon.ico"  className='w-11 h-w-11' alt="" />
        <div className="flex flex-row space-x-2 items-center">
            <ModeToggle/>
            {session?.user && <Button variant={'link'}>Add</Button>}
            
            <UserButton/>
        </div>
    </div>
  )
}

export default Nav