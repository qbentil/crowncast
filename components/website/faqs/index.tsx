import React from 'react'
import { Transition } from '../../../utils/animate'
import { motion } from 'framer-motion'
import { LuMinusCircle, LuPlusCircle } from 'react-icons/lu'

const data = [
  {

    question: 'Is there a free trial available?',
    answer: 'Yes, you can try us for free for 30 days. If you want, we\'ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
    _id: '1',
    isOpen: false
  },
  {
    question: "How do I add new",
    answer: "Lorem ipsum dolor sit amet ...............",
    _id: "2",
    isOpen: false
  }
]

const Faq = ({ _id, question, answer, isOpen, toggle }: { _id: string, question: string, answer: string, isOpen: boolean, toggle: (id: string) => void }) => {
  return (
    <div className='w-full flex flex-col items-start justify-center gap-y-2 border-b border-gray-200 pb-6'>
      <div className='w-full flex flex-row items-center justify-between'>
        <p className='text-medium font-inter font-500 text-gray-900'>
          {question}
        </p>
        <div className='w-[24px] h-[24px] rounded-full text-primary-700 flex flex-row items-center justify-center cursor-pointer' onClick={() => toggle(_id)}>
          {isOpen ? <LuMinusCircle /> : <LuPlusCircle />}
        </div>
      </div>
      {/* answwer */}
      <p className={`text-medium text-gray-500 ${isOpen ? 'block' : 'hidden'}`}>
        {answer}
      </p>
    </div>
  )
}
const FQAs = () => {
  const [faqs, setFaqs] = React.useState(data)
  return (
    <div className="w-full bg-whte overflow-x-hidden flex flex-col items-center justify-center py-4">
      <div className='w-[85vw] h-full flex flex-col items-center justify-center'>
        {/* heading */}
        <div className='w-full flex flex-col items-center justify-center gap-y-2 mb-4'>
          <h1 className='text-sm text-center text-primary'>
            FAQs
          </h1>
          <p className='text-xl md:text-3xl text-center md:mt-3'>
            Frequently asked questions
          </p>
          {/* actions */}
          <h1 className='text-sm text-center text-gray-800'>
            Everything you need to know about the Crowncast.
          </h1>
        </div>
        {/* Faqs */}
        <div className='w-full flex flex-col items-center justify-center gap-y-4'>
          {
            faqs.map((faq) => (
              <Faq key={faq._id} {...faq} toggle={(id) => {
                setFaqs(faqs.map((f) => {
                  if (f._id === id) {
                    return {
                      ...f,
                      isOpen: !f.isOpen
                    }
                  }
                  return f
                }))
              }} />
            ))
          }

        </div>

        {/* more action */}
        <div className='w-[50vw] bg-gray-50 flex flex-col items-center justify-center gap-y-2 mt-4 py-5 px-3 rounded-md'>
          {/* image */}
          <div className='w-20 h-20 md:w-24 md:h-24 rounded-lg'>
            <img src='/assets/people/ell.svg' alt='faq' className='w-full h-full object-cover rounded-lg' />
          </div>
          {/* heading */}
          <div className='w-full flex flex-col items-center justify-center gap-y-2'>
            <h1 className='text-md font-inter font-900 text-gray-900'>
              Still have questions?
            </h1>
            <p className='text-medium font-inter font-400 text-gray-500 text-center'>
              Can&apos;t find the answer you&apos;re looking for? Please chat to our friendly team.
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default FQAs