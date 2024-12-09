import React from 'react'
import Sidebarcomponent from '@/component/sidebar'
import Main from '@/component/main'

export default function page() {
  return (
    <div style={{display:'flex'}}>
      <Sidebarcomponent />
      <Main/>
    </div>
  )
}
