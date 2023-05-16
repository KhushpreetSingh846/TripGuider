import React from 'react'
import { HashLoader } from 'react-spinners';
export default function Loader() {
  return (
    <div className='modal-container'>
        <HashLoader color="DE3151" size={100} />
    </div>
  )
}
