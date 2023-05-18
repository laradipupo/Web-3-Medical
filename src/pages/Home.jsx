import React from 'react'
import home1 from '../Assest/home1.png'
import home2 from '../Assest/home2.png'
import home3 from '../Assest/home3.png'
import home4 from '../Assest/home4.png'
import home5 from '../Assest/home5.png'
import home6 from '../Assest/home6.png'
import home7 from '../Assest/home7.png'
import home8 from '../Assest/home8.png'
import logo1 from '../Assest/logo1.png'
import logo2 from '../Assest/logo2.png'
import logo3 from '../Assest/logo3.png'
import vector from '../Assest/Vector.png'
import vector1 from '../Assest/Vector1.png'
import group1 from '../Assest/Group 1.png'
import group2 from '../Assest/Group 2.png'




function Home() {
  return (
    // <div className='text-8xl text-center'>Home</div>
    <section>
      <div className='flex justify-between'>
        <div className='flex flex-col mt-[100px]'>
          <h1 className='max-w-[45rem] font-bold text-6xl'>SOLUTION ON YOUR HEALTH ONLINE</h1>
          <p className='mt-10 mb-10 max-w-[35rem]'>Make an appointment with a doctor without a queue, buy medicines. We provide you 24/7 access to expert doctors and get answer. </p>
          <div className='border rounded flex justify-center'>
            <div className='mt-5 mb-5 flex flex-col w-[95%]'>
              <div>
                <h1 className='font-bold '>Search your symptoms here</h1>
              </div>
              <form action="">
                <input type="text" className='border w-[70%]'/>
                <button>Search</button>
              </form>
            </div>
          </div>
        </div>
        <div className='flex mt-[65px] gap-3'>
          <div className='flex flex-col'>
            <div className='bg-[#bac2ff] border rounded-xl mb-2'>
              <img src={home1} alt="" />
            </div>
            <div className='flex gap-3'>
              <div className='bg-[#DDBAAD] border rounded-xl h-[58vh]'>
                <img src={home2} alt="" className='border rounded-xl'/>
              </div>
              <div className='border rounded-xl'>
                <img src={home3} alt="" className='h-[57.5vh] w-fit border rounded-xl'/>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-3'>
            <div className='bg-[#D9D9D9] border rounded-xl'>
              <img src={home4} alt="" className='border rounded-xl'/>
            </div>
            <div className='bg-[#DEB2A2] border rounded-xl'>
              <img src={home5} alt="" />
            </div>
          </div>
        </div>
        
        </div>
        {/* <div className='bg-white w-full'> */}
          <div className='flex justify-between items-center w-full border shadow mt-10'>
            <img src={logo1} alt="" className='w-[100px] h-[100px]'/>
            <img src={logo3} alt="" className='w-[100px] h-[20px]'/>
            <img src={logo2} alt="" className='w-[100px] h-[30px]'/>
            <img src={logo1} alt="" className='w-[100px] h-[100px]'/>
            <img src={logo3} alt="" className='w-[100px] h-[20px]'/>
            <img src={logo2} alt="" className='w-[100px] h-[30px]'/>
          </div>
        {/* </div> */}

        <div className='flex flex-col items-center mt-10 mb-5'>
          <h1 className='font-bold text-2xl mb-10'>These are the reasons people love our service</h1>
          <div className='flex justify-between gap-3'>
            <div className='flex border-2 rounded-xl justify-center'>
              <div className='flex flex-col w-[85%] mb-10'>
                <div className='mt-10 border rounded-full w-[50px]  h-[50px] bg-[#E8EBFE] mb-8'>
                  <img src={vector} alt="" className='m-auto mt-3'/>
                </div>
                <h1 className='font-bold mb-3'>1000+ Verified Experts</h1>
                <p className='text-[13px]'>Track health, provides multi-step verified doctors, so you can be confident that your health is in the hands of qualified professionals.</p>
              </div>
            </div>
            <div className='flex border-2 rounded-xl justify-center'>
              <div className='flex flex-col w-[85%] mb-10'>
                <div className='mt-10 border rounded-full w-[50px]  h-[50px] bg-[#E8EBFE] mb-8'>
                  <img src={group2} alt="" className='m-auto mt-2.5'/>
                </div>
                <h1 className='font-bold mb-3'>Cost and time Efficient</h1>
                <p className='text-[13px]'>With our services you will save yourself the cost of in-person appointments, evenfrom the comfort of your home.</p>
              </div>
            </div>
            <div className='flex border-2 rounded-xl justify-center'>
              <div className='flex flex-col w-[85%] mb-10'>
                <div className='mt-10 border rounded-full w-[50px]  h-[50px] bg-[#E8EBFE] mb-8'>
                  <img src={vector1} alt="" className='m-auto mt-3'/>
                </div>
                <h1 className='font-bold mb-3'>Personalized Solution</h1>
                <p className='text-[13px]'>Stay on top of your health with experts specialized in your case., and with personalized health insights and medical record.</p>
              </div>
            </div>
            <div className='flex border-2 rounded-xl justify-center'>
              <div className='flex flex-col w-[85%] mb-10'>
                <div className='mt-10 border rounded-full w-[50px]  h-[50px] bg-[#E8EBFE] mb-8'>
                  <img src={group1} alt="" className='m-auto mt-2'/>
                </div>
                <h1 className='font-bold mb-3'>Access to Drug store</h1>
                <p className='text-[13px]'>Avoid long queus. Keep track of your medications, appointments, allergies and more; from the comfort of your home</p>
              </div>
            </div>
          </div>
        </div>

        <div className='flex justify-center'>
          <h1 className='font-bold text-4xl'>How it <span className='text-[#9974ff] '>Works</span></h1>
        </div>
        <div>
          <div className='flex justify-between mt-10 mb-10'>
            <div className='bg-[#E3E7FF]'>
              <img src={home6} alt="" className='w-[470px] h-[485px]'/>
            </div>
            <div className='flex flex-col justify-center items-center text-center w-[40%]'>
              <h1 className='font-bold text-4xl'>Tell us your Symptoms </h1>
              <p>Tell us your situation.. Ask questions on anything bothering your health. We are delighted to provide you with answers</p>
            </div>
          </div>
        </div>

        <div>
          <div className='flex justify-between mt-10 mb-10'>
            <div className='flex flex-col justify-center items-center w-[40%]'>
              <h1 className='font-bold text-4xl'>Get matched with a Doctor </h1>
              <p>An expert doctor is already waiting for you. We will connect you in  seconds  at anytime you request.</p>
            </div>
            <div className='bg-[#EAEDFF]'>
              <img src={home7} alt="" className='w-[470px] h-[485px]'/>
            </div>
          </div>
        </div>

        <div>
          <div className='flex justify-between mt-10 mb-20'>
            <div>
              <img src={home8} alt="" className='w-[470px] h-[485px]'/>
            </div>
            <div className='flex flex-col justify-center items-center text-center w-[40%]'>
              <h1 className='font-bold text-4xl'>Get <span className='text-[#9974FF]'>Personalized</span> treatment and Prescription. </h1>
              <p>Experience total wellness with our doctor’s recommended treatment, and to make it easier we will refer you to the best Drug store in your area.</p>
            </div>
          </div>
        </div>
        
      
    </section>
  )
}

export default Home