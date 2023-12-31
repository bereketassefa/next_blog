"use client"
import useStatus from '@/store/loading'
import React, {  } from 'react'
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';



const Loader = () => {
//   const [progress, setProgress] = useState(20)
const {status  ,setStatus} = useStatus()
  return (
    <div>
      <ProgressBar
          height="2px"
          color="hsl(var(--primary))"
          options={{ showSpinner: false }}
          shallowRouting
        />
    </div>
  )
}

export default Loader