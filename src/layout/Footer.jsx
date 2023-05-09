import React from 'react'
import { FooterList } from '../components/footerlist'
import FAQ from './FAQ'
const Footer = () => {
  return (
    <footer className=' bg-Black-bg pt-[200px] pb-[60px]'>
   <FAQ/>
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