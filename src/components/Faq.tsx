"use client";
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import { useState } from 'react';

const FAQ = () => {
    const [faqData, setFaqData] = useState([
        { question: 'What is the Cyber Security Camp Morocco?', answer: 'It is the oldest largest open cyber security event in Morocco. This year we are celebrating the beginning of a new era with the 11th edition.', isOpen: false },
        { question: 'Who can participate in the event?', answer: 'We welcome attendees from diverse backgrounds, including students, professionals, educators, and anyone interested in cybersecurity. However, as the Cyber Security Camp hosts a CTF competition, your team and you can participate only if you successfully passed the qualification phase before.', isOpen: false },
        { question: 'How can I register for the Cybersecurity Camp?', answer: 'Get you ticket now by completing the registration above.', isOpen: false },
        { question: 'Do I need prior cybersecurity knowledge to attend?', answer: 'Answer', isOpen: false },
        { question: 'Are there any registration fees for the event?', answer: 'For a standard visitor you will not be asked to pay any fee. But if you want to receive any of the goodies we are offering exclusively to our competition participants, our speakers and our guests of honour, make sure you reach out to us by messaging us directly via our instagram account or our email.', isOpen: false },
        { question: 'Will there be hands-on activities or workshops?', answer: 'Yes, there will be numerous workshops covering a wide range of topics within the cybersecurity field.', isOpen: false },
        { question: 'Who are the instructors or speakers at the Cybersecurity Camp?', answer: 'Answer', isOpen: false },
        { question: 'How can I get involved as a sponsor or partner for the event?', answer: 'Answer', isOpen: false },
    ]);
    
    const toggleAnswer = (index:any) => {
        console.log('index', index);
        faqData[index].isOpen = !faqData[index].isOpen;
        console.log('updatedFaqData', faqData);
        setFaqData([...faqData]);
    };
    return (
        <div className='w-full justify-center px-8 py-20'>
        {/* Frequently Asked questions */}
        <div className='flex flex-col items-center pb-20'>
            <h1 className='text-4xl font-semibold text-center mb-8'>
            <code>Frequently Asked Questions</code>
            </h1>
        </div>
        <div className='flex flex-col items-start px-20 mx-auto'>
            {faqData.map((faq, index) => (
                <motion.div
                key={index}
                className="card-container"
                initial={{ y: 100, opacity: 0 }}
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
                    <div className='flex flex-row justify-between py-4' >
                    <div onClick={() => toggleAnswer(index)}>
                    {faq.isOpen ? (
                        <ChevronDownIcon className='w-6 h-6 hover:cursor-pointer' />
                    ) : (
                        <ChevronRightIcon className='w-6 h-6 transform transition-transform duration-300 ease-in-out hover:cursor-pointer' style={{ transform: faq.isOpen ? 'rotate(90deg)' : 'rotate(0)' }} />
                    )}
                    </div>
                    <div className='justify-between px-8 min-w-2/3'>
                        <p className='text-xl font-regular'>
                        <code>{faq.question}</code>
                        </p>
                        <p className='text-sm break-normal pt-6 pr-2'>
                        {faq.isOpen && (
                            <code>{faq.answer}</code>
                        )}
                        </p>
                    </div>
                    </div>
                </div>
            </motion.div>
            ))}
        </div>
        </div>
    );
}
export default FAQ;