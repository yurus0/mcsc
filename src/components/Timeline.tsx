"use client";
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Timeline = () => {
    const [sessionData, setSessionData] = useState([
        {
            question: "Keynote Opening",
            type: "Opening",
            answer: "",
            speakers: ["", "", ""],
            date: "23 April 2024, 4:00 PM",
            isExpanded: false
        },
        {
            question: "Data Gouvernance : Building Trust in the Cloud",
            type: "Panel Discussion",
            answer: "Speakers",
            speakers: ["", "", ""],
            date: "23 April 2024, 5:00 PM",
            isExpanded: false
        },
        {
            question: "Cloud-Native Applications: What to Secure?",
            type: "Conference",
            answer: "Speakers",
            speakers: ["", "", ""],
            date: "24 April 2024, 10:00 AM",
            isExpanded: false
        },
        {
            question: "A Deep Dive into Container Security",
            type: "Workshop",
            answer: "Speakers",
            speakers: ["", "", ""],
            date: "24 April 2024, 12:00 PM",
            isExpanded: false
        },
        {
            question: "The convergence of Cloud & Intelligent systems: A New Era of Security",
            type: "Conference",
            answer: "Speakers",
            speakers: ["", "", ""],
            date: "24 April 2024, 2:00 PM",
            isExpanded: false
        },
        {
            question: "AI-Powered Threat Detection for Everyday IoT Devices",
            type: "Workshop",
            answer: "Speakers",
            speakers: ["", "", ""],
            date: "25 April 2024, 4:00 PM",
            isExpanded: false
        },
        {
            question: "PenTesting in the Cloud: A Comprehensive Guide",
            type: "Workshop",
            answer: "Speakers",
            speakers: ["", "", ""],
            date: "25 April 2024, 6:00 PM",
            isExpanded: false
        },
        {
            question: "The Grand Finale",
            type: "CTF",
            answer: "Duration: 12 hours",
            speakers: ["", "", ""],
            date: "25 April 2024, 9:00 PM",
            isExpanded: false
        },
        {
            question: "The Future of the Cloud: Emerging Challenges & Solutions",
            type: "Panel Discussion",
            answer: "",
            speakers: ["", "", ""],
            date: "25 April 2024, 10:00 AM",
            isExpanded: false
        },
        {
            question: "Awarding Ceremony",
            type: "Closing",
            answer: "",
            speakers: ["", "", ""],
            date: "25 April 2024, 12:00 AM",
            isExpanded: false
        },
    ]);

    const toggleSession = (index:any) => {
        console.log('clicked');
        setSessionData(sessionData.map((session, i) => {
            if (i === index) {
                return { ...session, isExpanded: !session.isExpanded };
            }
            return session;
        }));
    };

    return(
        <div className="w-full h-full flex flex-col">
            <div className=" ring-4 ring-[#00ff41] w-full flex p-4 rounded-lg py-6">
                <div className="flex justify-between items-start">
                    <h1 className="font-bold text-4xl pr-20 pl-6 bg-gradient-to-bl from-white to-[#00ff41] text-transparent inline-box bg-clip-text"><code>Timeline</code></h1>
                    <code>Mark your calendar and make the most out of our event! <br/>See y'all there!</code>
                </div>
            </div>
            <div className='flex flex-row justify-center'>
                <VerticalTimeline animate={true} lineColor={'#00ff41'}>
                    {sessionData.map((session, index) => (
                        <VerticalTimelineElement
                            key={index}
                            className='visible hover:cursor-default'
                            contentArrowStyle={{ borderRight: '1px solid #000000' }}
                            contentStyle={{ background: 'transparent', color: '#ffffff'}}
                            date={session.date}
                            iconStyle={{ background: '#000000', border: '1px solid #00ff41', color: '#00ff41'}}
                            onTimelineElementClick={() => toggleSession(index)}
                            visible={true}
                        >
                            <div className='flex flex-col'>
                            <div className='flex flex-row justify-between'>
                                <div className='flex flex-col'>
                                <h3 className="text-lg font-bold vertical-timeline-element-title"><code>{session.question}</code></h3>
                                <h4 className="text-sm font-light vertical-timeline-element-subtitle pt-2 pb-4"><code>{session.type}</code></h4></div>
                                {session.isExpanded ? (
                                    <ChevronDownIcon className='w-1 h-1 md:w-6 md:h-6 hover:cursor-pointer' />
                                ) : (
                                    <ChevronRightIcon className='w-1 h-1 md:w-6 md:h-6 transform transition-transform duration-300 ease-in-out hover:cursor-pointer' style={{ transform: session.isExpanded ? 'rotate(90deg)' : 'rotate(0)' }} />
                                )}
                            
                            </div>
                            { session.isExpanded &&  <h5 className='text-md font-light vertical-timeline-element-substitle'><code>{session.answer}</code></h5>} 
                            {session.isExpanded && session.speakers.map((speaker, index)=>(<h6 className='text-sm font-light vertical-timeline-element-substitle pt-2'><code>{speaker}</code></h6>))}
                            </div>
                        </VerticalTimelineElement>
                    ))}
                </VerticalTimeline>
            </div>
        </div>
    );
};

export default Timeline;