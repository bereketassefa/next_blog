"use client"
import MDEditor from '@uiw/react-md-editor'
import React from 'react'

const BlogRead = (props: any) => {
    const val = `
    # First blog
## Second header

### smaller text

**orem** ipsum sit, *amet*  consectetur adipisicing elit. Quos modi debitis suscipit. Non nobis numquam accusamu
s dicta molestiae velit voluptatum ea ex, consequuntur deleniti autem voluptatibus nemo quis facilis fugiat nihil ratione, tempora animi corrupti consectetur sequi illum quo. Iusto natus quidem voluptate pariatur recusandae, illum a corporis magnam, aut suscipit quia fugit praesentium blanditiis, quae voluptas error corrupti  
~~minima~~
~~voluptatibus voluptates~~ eveniet consequatur. Voluptatibus ut inventore culpa autem quo itaque perferendis tempora magni ipsa, vitae totam sunt alias distinctio, dignissimos eum dolorum unde amet pariat

> ur similique at commodi nam de

bitis. Voluptas, earum. Laboriosam nihil maxime distinctio, aspernatur aut id.


console.log("you can copy motherfucker")

    `
  return (
    <div>
        <MDEditor.Markdown source={val} style={{ whiteSpace: "pre-wrap"  }} className='text-sm p-8' />
    </div>
  )
}

export default BlogRead