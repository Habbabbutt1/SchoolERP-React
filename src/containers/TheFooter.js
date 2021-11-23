import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <span className="ml-1">&copy; 2021 Design and Developed By: </span>
        <a href="https://www.facebook.com/habbab.butt/" target="_blank" rel="noopener noreferrer">Habbab Nasir</a>
      </div>
      {/* <div className="mfs-auto">
        <span className="mr-1">Powered by</span>
        <a href="https://coreui.io/react" target="_blank" rel="noopener noreferrer">Habbab Butt</a>
      </div> */}
    </CFooter>
  )
}

export default React.memo(TheFooter)
