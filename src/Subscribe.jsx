import React from 'react'

const Subscribe = () => {
  return (
    <div className='w-5/6  m-auto  mt-20'>
       <div class="w-full h-full flex flex-col items-center justify-center overflow-hidden ">
        <div class="w-full max-w-4xl rounded-md bg-white pb-10">
            <div class="flex flex-col items-center">
            <h3 class=" overflow-y-hidden mt-2 max-w-2xl text-center text-2xl font-bold leading-tight sm:text-3xl md:text-4xl md:leading-tight">Want actionable SEO advice from me? Then join this newsletter</h3>
            <form action="" class="mx-auto mt-4 flex w-full max-w-md flex-col gap-3 sm:flex-row sm:gap-0">
                <input type="email" name="email" id="email" class="grow rounded border-2 border-gray-300 py-3 px-3 focus:border-emerald-500 focus:outline-none sm:rounded-l-md sm:rounded-r-none sm:border-r-0" placeholder="Email Address" />
                <button type="submit" class="rounded bg-emerald-500 px-5 py-4 font-bold text-white sm:rounded-l-none sm:rounded-r-md">Get First Email</button>
            </form>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Subscribe;
