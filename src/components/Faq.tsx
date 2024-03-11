"use client";
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import { useState } from 'react';

const FAQ = () => {
    const [faqData, setFaqData] = useState([
        { question: 'What is the Cyber Security Camp Morocco?', answer: 'It is the oldest largest open cyber security event in Morocco. This year we are celebrating the beginning of a new era with the 11th edition.', isOpen: false },
        { question: 'ho can participate in the event?', answer: 'Everyone is welcome to attend. However, as the Cyber Security Camp hosts a CTF competition, your team and you can participate only if you successfully passed the qualification phase before.', isOpen: false },
        { question: 'Question?', answer: 'Answer', isOpen: false },
        { question: 'Is there any entrance fee?', answer: 'Answer', isOpen: false },
    ]);
    
    const toggleAnswer = (index:any) => {
        console.log('index', index);
        faqData[index].isOpen = !faqData[index].isOpen;
        console.log('updatedFaqData', faqData);
        setFaqData([...faqData]);
    };
    return (
        <div className='flex min-h-min flex-col w-full justify-center px-8 py-20 bg-transparent'>
        {/* Frequently Asked questions */}
        <div className='flex flex-col items-center'>
            <h1 className='text-4xl font-semibold text-center mb-8'>
            <code>Frequently Asked Questions</code>
            </h1>
            <div className='flex flex-col items-start max-w-screen-md mx-auto'>
            {faqData.map((faq, index) => (
                <motion.div
                key={index}
                className="card-container"
                initial={{ y: 200, opacity: 0 }}
                whileInView={{
                    y: 0,
                    opacity: 100,
                    transition: {
                    type: "spring",
                    bounce: 0.4,
                    duration: 1
                    }
                }}
                viewport={{ once: true, amount: 1 }}
            >
                <div>
                <div className='mb-4'>
                    <div className='flex flex-row cursor-pointer py-4' >
                        <div onClick={() => toggleAnswer(index)}>
                    {faq.isOpen ? (
                        <ChevronDownIcon className='w-6 h-6' />
                    ) : (
                        <ChevronRightIcon className='w-6 h-6 transform transition-transform duration-300 ease-in-out' style={{ transform: faq.isOpen ? 'rotate(90deg)' : 'rotate(0)' }} />
                    )}
                    </div>
                    <div className='justify-between px-8  max-w-screen-sm'>
                        <p className='text-xl font-regular'>
                        <code>{faq.question}</code>
                        </p>
                        {faq.isOpen && (
                        <p className='text-sm break-normal pt-3 pr-2'>
                            <code>{faq.answer}</code>
                        </p>
                        )}
                    </div>
                    </div>
                </div>
                </div>
            </motion.div>
            ))}
        </div>
        </div>
    </div>
    );
}
export default FAQ;