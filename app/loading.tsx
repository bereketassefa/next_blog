import { Spin } from 'antd'
import { LoaderIcon } from 'lucide-react'
import React from 'react'

const loading = () => {
  return (
    <div className='w-full h-screen flex items-center justify-center'>
      {/* <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} /> */}
      <Spin indicator={<LoaderIcon />} />
    </div>
  )
}

export default loading