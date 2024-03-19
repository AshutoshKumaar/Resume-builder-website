import React from 'react'
import {PuffLoader} from 'react-spinners'

function MianSpinner() {
  return (
    <div className='w-screen h-screen flex-1 justify-center items-start'>
        <PuffLoader color='red' size={100} />
      
    </div>
  )
}

export default MianSpinner
