"use client";
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

    const toggleAnswer = (index:any) => {
        const updatedSessionData = [...sessionData];
        updatedSessionData[index].isExpanded = !updatedSessionData[index].isExpanded;
        setSessionData(updatedSessionData);
    };

    return(
        <div className="w-full flex flex-col">
            <div className="bg-[#00ff41]/50 w-full flex p-4 rounded-lg">
                <div className="flex justify-between items-start">
                    <h1 className="text-white text-4xl pr-10"><code>Timeline</code></h1>
                    <code>Mark your calendar and make the most out of our event! <br/> See y'all there!</code>
                </div>
            </div>
            <div className='flex flex-row justify-center p-6'>
                <VerticalTimeline>
                    {sessionData.map((session, index) => (
                        <VerticalTimelineElement
                            key={index}
                            contentArrowStyle={{ borderRight: '10px solid #00ff41' }}
                            contentStyle={{ background: 'transparent', color: '#fff' }}
                            date={session.date}
                            iconStyle={{ background: '#00ff41', color: '#00ffaa' }}
                        >
                            <h3 className="vertical-timeline-element-title">{session.question}</h3>
                            
                            {session.isExpanded && <p className='font-light'>{session.answer}</p>}
                        </VerticalTimelineElement>
                    ))}
                </VerticalTimeline>
            </div>
        </div>
    );
};

export default Timeline;