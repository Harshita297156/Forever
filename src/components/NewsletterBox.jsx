import React from 'react'

const NewsletterBox = () => {

    const onSubmitHandler=(event)=>{
         event.preventDefault();
    }

  return (
    <div className='text-center'>
      <p className='text-2x1 font-medium text-gray-800'>Subscribe now & get 20% off</p>
      <p className='text-gray-400 mt-3'>Subscribe now and grab a 20% discount instantly! Don't miss out on this limited-time offer.</p>
      <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
        <input className='w-full sm:flex-1 outline-none' type='email' placeholder='Enter your email' required/>
        <button type='submit' className='bg-black text-white text-xs px-10 py-4'> SUBSCRIBED</button>
      </form>
    </div>
  )
}

export default NewsletterBox
