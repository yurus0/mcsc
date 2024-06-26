"use client";
import FAQ from '@/components/Faq';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Partners from '@/components/Partners';
import RegisterButton from '@/components/RegisterButton';
import SpaceParticles from '@/components/SpaceParticles';
import Speakers from '@/components/Speakers';
import Sponsors from '@/components/Sponsors';
import Timeline from '@/components/Timeline';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Canvas } from 'react-three-fiber';


export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 900px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event: { matches: boolean | ((prevState: boolean) => boolean); }) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  return (
      <div className='bg-black'>
        <div className="fixed absolute top-0 left-0" style={{ height: '110vh', width: '100vw' }}>
              <Canvas>
                <SpaceParticles />
              </Canvas>
        </div>
        <div className='sticky'>
        <Navbar/>
        </div>
        <div className="flex min-h-96 flex-col items-center justify-between">
          <div className="flex pt-40">
            <div className="flex justify-center">
              <Image
                src="/title.png"
                alt="Title"
                width={isMobile ? 500 : 1000} //1000
                height={isMobile ? 50 : 100} //100
              />
            </div>
          </div>
          <div className='flex flex-col justify-center items-center'>
          <div className='pt-28'>
            <h1 className="text-2xl font-semibold text-center">
              <code>23, 24, 25 april 2024 , <span>Rabat - MA</span></code>
              </h1>
          </div>
          <div className='pt-24'>
            <RegisterButton />
          </div>
          </div>
      </div>
      <div className='pt-10'></div>
      {/* //flex min-h-screen flex-col(row) items-center justify-center p-5 md:p-10 */}
      <div id="about" className={`${isMobile ? "flex min-h-screen flex-col items-center justify-center p-10 px-16" : "flex min-h-screen flex-row items-center justify-center p-5 md:p-10"} `}>
        {/*about*/}
        <div className="flex flex-col items-center">
        {/* text-3xl font-semibold text-left mb-8 pt-48 */}
          <h1 className={`${isMobile ? "text-2xl md:text-3xl font-semibold text-center mb-4 md:mb-8 pt-20 md:pt-48": "text-5xl font-semibold text-left mb-8 pt-48 "}`}>
            <code>Gathering Enthusiasts !</code>
          </h1>
           {/* items-start mx-auto pr-10 pt-10 */}
        <div className={`${isMobile? "mx-auto pr-5 md:pr-10 pt-5 md:pt-10" : "items-start mx-auto pr-10 pt-10"}`}>
          {/* text-md font-light */}
            <p className={`${isMobile? "text-sm md:text-md font-light text-center" : "text-md font-light"}`}>
              <code>
              This is an annual gathering that unites cybersecurity enthusiasts, industry experts, researchers, and students from Morocco and beyond.
              </code>
            </p>
            {/* pt-20 text-transparent bg-gradient-to-tr from-[#00ff41] to-[#66ff7d] bg-clip-text */}
            <div className={`${isMobile ? 'pt-10 md:pt-20 text-transparent bg-gradient-to-tr from-[#00ff41] to-[#66ff7d] bg-clip-text text-center' : 'pt-20 text-transparent bg-gradient-to-tr from-[#00ff41] to-[#66ff7d] bg-clip-text'}`}>
              <code className='text-5xl md:text-7xl font-black'>Since 2011...</code>
            </div>
          </div>
        </div>
        <Image
                src="/iamhacker.png"
                alt="About"
                width={isMobile? 300: 600} //600
                height={isMobile? 200: 500} //500
                priority
                className='pt-44'
              />
        </div>
      <div id="speakers" className="flex min-h-1/3 flex-col w-full justify-center px-16 py-4 hidden">
        <Speakers />
      </div>
      <div id="timeline" className="flex h-full flex-col items-center justify-between p-20">
        <Timeline />
      </div>
      <div id="sponsors" className="flex h-full flex-col items-center justify-between">
        <Sponsors />
      </div>
      <div id="partners" className="flex h-full flex-col items-center justify-between">
        <Partners />
      </div>
      <div id="faq" className="flex min-h-screen flex-col items-center justify-between p-20">
        <FAQ />
      </div>
      <Footer/>
      </div>
  );
}
