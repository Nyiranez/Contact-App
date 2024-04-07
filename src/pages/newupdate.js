import React from 'react'

export const Newupdate = () => {
  return (
    <div>
        <div className='mt-8  flex flex-row justify-around'>
            <div>
                <h1 className='font-bold text-xl'>Marie Louise</h1>
                <p>E-mail</p>
                <p>Phone</p>
                <p>Created on (time)</p>
                <p>Created on (time)</p>
            </div>
            <div className='space-x-4 '>
                <button className='bg-black py-1 px-2 text-white'>Update</button>
                <button className='bg-red-600 py-1 px-2 text-white'>Delete</button>
            </div>
        </div>
    </div>
  )
}
