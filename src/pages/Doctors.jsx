import React from 'react'
import about1 from '../Assest/about1.png'

function Doctors() {
  return (
    <>
      <section className='mt-2'>
        <div className='bg-gradient-to-tr from-black-900 w-full relative h-[602px]'>
            <img src={about1} alt="" className='w-full h-full object-cover absolute mix-blend-overlay' />
            {/* <div className='p-24'>
                <form action="post">
                    <label htmlFor="fname">First Name</label>
                    <input type="text" />
                </form>
            </div> */}
        </div>
        <div className='mt-5 flex justify-center'>
            <p>Our highly-skilled doctors are from the leading hospitals in Nigeria. Our doctors give you and
your entire family the peace of mind you should expect from your healthcare provider.</p>
        </div>
      </section>
    </>
  )
}

export default Doctors
