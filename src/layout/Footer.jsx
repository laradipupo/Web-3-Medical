import React from 'react'
import { FooterList } from './footerlist'
function Footer() {
  return (
    <footer className='absolute bottom-0 w-full bg-Black-bg pt-[200px] pb-[60px]'>

      <div className='flex justify-between space-x-16 font-normal text-base'>
        {FooterList.map(({ id, heading, list }) => {
          return (
            <div key={id} >
              <div className=' text-[#50555E]'>
                {heading}</div>
              <div className='flex flex-col space-y-7 mt-7 '>
                {list.map((listItem, i) => <p key={i} className='hover:text-main-color max-w-[30rem] text-white  '>{listItem} </p>)}
              </div>
            </div>

          )
        })}
      </div>
      <p className=' text-[0.9375rem] font-normal text-white mt-[67px]'>Copyright 2023</p>
    </footer>
  )
}

export default Footer