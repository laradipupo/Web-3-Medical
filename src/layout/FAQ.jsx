import React from 'react'
import FAQdata from '../components/faqData'
import FaqComponent from '../components/FaqComponent'

const FAQ = () => {
    return (
        <div className='flex justify-between text-white'>
            <div>
                <h2 className='text-[2.8125rem] font-bold max-w-[39.3125rem]'>Some of the things you may want to know about MEDICAL</h2>
                <p className='text-base font-normal mt-4'>We answered questions so you don't have to ask them.</p>
            </div>
            <div className=' flex flex-col gap-5 '>
                {FAQdata.map(({ id, question, answer }) => {
                    return (
                        <FaqComponent question={question} answer={answer} key={id} />
                    )
                })}

            </div>
        </div>
    )
}

export default FAQ