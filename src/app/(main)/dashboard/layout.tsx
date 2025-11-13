import Sidebar from '@/components/custom/sidebar'
import React, { ReactNode } from 'react'

const MainLayout = ({children}: {children: ReactNode}) => {
  return (
    <div>
      {children}
        <Sidebar/>
    </div>
  )
}

export default MainLayout
