import React, { useState } from 'react'
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io'
function FaqComponent({ question, answer }) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <div className=' font-normal text-xl border-b-[1px] border-[#C4C4C4] pb-4 relative max-w-[40rem] pr-20' >
        <div className='flex space-x-10 items-center' onClick={() => setOpen(!open)}>
          <h3 className='text-[1.125rem] font-bold max-w-[23rem]'>{question}</h3>
          <button className="text-lg absolute right-0 ">{open ? <IoIosArrowUp /> : <IoIosArrowDown />}</button>
        </div>
        {open && <p className='max-w-[23rem] text-base mt-2 font-light'>{answer}</p>}
      </div>
    </>
  )
}

export default FaqComponent