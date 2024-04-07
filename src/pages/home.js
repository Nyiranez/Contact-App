import React from 'react'

export const Home = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
        <form>
        <h1 className='mb-4 mt-8 font-bold text-1xl'>Add Contact</h1>
        <label for="full name" >Full name</label><br></br>
        <input type="text" placeholder='Enter your names' className='w-96 h-12 border-2 pl-2'></input><br></br>
        <label for="E-mail">Email</label><br></br>
        <input type="text" placeholder='Enter your E-mail' className='w-96 h-12 border-2 pl-2'></input><br></br>
        <label for="Phone">Phone</label><br></br>
        <input type="number" placeholder='Enter your Phone number'  className='w-96 h-12 border-2 pl-2'></input><br></br>
        <label for="Picture" className='mt-4'>Picture</label><br></br>
        <div className='w-96 h-12 border-2 flex flex-row items-center space-x-2 mt-4 pl-2'>
            <button className='bg-slate-200 py-1 px-2'>Choose File</button>
            <p>No file choosen</p>
        </div>
        <button  className='w-96 h-12 border-2 mt-4 bg-black text-white'>Create</button>
        </form>
       
    </div>
  )
}
