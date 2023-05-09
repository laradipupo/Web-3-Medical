import React from 'react'
import Img1 from '../Assest/about1.png'
import Img2 from '../Assest/about2.png'
import { AboutData } from './aboutData'
function About() {
    return (
        <section className='my-[122px]'>
            <div className='flex justify-between mb-10'>
                <h1 className='max-w-[50rem] font-bold text-6xl leading-[74.7px]'>MEDICAL WEBSITE FOR YOU WITH PROFESSIONAL TEAMS</h1>
                <p className='max-w-[20rem] text-2xl'>We believe when a health professional team collaborates with technology, it will provide fast and precise health services</p>
            </div>
            <img src={Img1} alt="" />

            <div className='mt-[70px] '>
                <div className='text-center mb-12'>
                <h3 className=' text-black font-normal text-3xl mb-3'>Our Journey</h3>
                <p className='text-[#060809] text-2xl font-semibold'>We are the best team for you and trust us to take care your health</p></div>
                <div className='flex items-center '>
                    <img src={Img2} alt="" />
                    <div className='max-w-[28rem] ml-6'>
                        <h2 className=' text-black font-bold text-[2.5rem] mb-6'>What They Say About MEDICAL</h2>
                        <p className='  font-normal text-lg text-[#060809]'>Integrated with A.I we have prepered everything for you. we will get you answers</p>
                    </div>
                </div>
            </div>

           
            <div className="flex justify-between mt-[88px]">
    {AboutData.map(({id,img,name,title})=>{
        return(
            <>
            <div className=''>
            <img src={img} alt="" />
                    <h4 className='text-black text-xl font-bold mb-[6px]'>{name}</h4>
                    <p className='text-[#060809] text-base font-normal'>{title}</p>
                    </div>
            </>
        )
    
    })}
    
</div>
          
        </section>
    )
}

export default About