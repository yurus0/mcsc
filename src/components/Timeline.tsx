"use client";
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Timeline = () => {
    const [sessionData, setSessionData] = useState([
        {
            question: "Opening Ceremony",
            answer: "Speaker: Speaker Name Description: Session Description",
            date: "23 April 2024, 4:00 PM",
            isExpanded: true
        },
        {
            question: "Cloud Compliance: Understanding the Critical role of regulations",
            answer: "Speaker: Speaker Name Description: Session Description",
            date: "23 April 2024, 6:00 PM",
            isExpanded: true
        },
        {
            question: "Session 3: Date and Time",
            answer: "Speaker: Speaker Name Description: Session Description",
            date: "24 April 2024, 4:00 PM",
            isExpanded: true
        },
        {
            question: "Session 4: Date and Time",
            answer: "Speaker: Speaker Name Description: Session Description",
            date: "24 April 2024, 6:00 PM",
            isExpanded: true
        },
        {
            question: "Session 5: Date and Time",
            answer: "Speaker: Speaker Name Description: Session Description",
            date: "25 April 2024, 4:00 PM",
            isExpanded: true
        },
    ]);


    return(
        <div className="w-full flex flex-col">
            <div className=" ring-2 ring-[#00ff41] w-full flex p-4 rounded-lg">
                <div className="flex justify-between items-start">
                    <h1 className="text-white text-4xl pr-20"><code>Timeline</code></h1>
                    <code>Mark your calendar and make the most out of our event! <br/> See y'all there!</code>
                </div>
            </div>
            <div className='flex flex-row justify-center p-6'>
                <VerticalTimeline>
                    {sessionData.map((session, index) => (
                        <VerticalTimelineElement
                            key={index}
                            className='hover:cursor-default'
                            contentArrowStyle={{ borderRight: '1px solid #000000' }}
                            contentStyle={{ background: 'transparent', color: '#ffffff', fontWeight: 'lighter'}}
                            date={session.date}
                            iconStyle={{ background: '#00ff41', color: '#00ff41', opacity: '0.5'}}
                            onTimelineElementClick={() => {console.log('clicked'); session.isExpanded = !session.isExpanded; console.log(session.isExpanded); setSessionData([...sessionData])}}
                        >
                            <div className='flex flex-col'>
                            <div className='flex flex-row justify-between'>
                                <h3 className="text-md font-bold vertical-timeline-element-title"><code>{session.question}</code></h3>
                                {session.isExpanded ? (
                                    <ChevronDownIcon className='w-1 h-1 md:w-6 md:h-6 hover:cursor-pointer' />
                                ) : (
                                    <ChevronRightIcon className='w-1 h-1 md:w-6 md:h-6 transform transition-transform duration-300 ease-in-out hover:cursor-pointer' style={{ transform: session.isExpanded ? 'rotate(90deg)' : 'rotate(0)' }} />
                                )}
                            
                            </div>
                            { session.isExpanded && <p className='text-xs font-light vertical-timeline-element-substitle'><code>{session.answer}</code></p>}
                            </div>
                        </VerticalTimelineElement>
                    ))}
                </VerticalTimeline>
            </div>
        </div>
    );
};

export default Timeline;