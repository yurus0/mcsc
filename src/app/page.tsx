"use client";
import FAQ from '@/components/Faq';
import SpaceParticles from '@/components/SpaceParticles';
import TypingEffect from '@/components/TypingEffect';
import Image from 'next/image';
import { Canvas } from 'react-three-fiber';
import Navbar from '../components/Navbar';

export default function Home() {


  return (
    <div className='bg-black'>
    <div className="fixed absolute top-0 left-0" style={{ height: '100vh', width: '100vw' }}>
          <Canvas>
            <SpaceParticles />
          </Canvas>
          </div>
      <div className='sticky'>
      <Navbar/>
      </div>
      <div className="flex min-h-screen flex-col items-center justify-between p-20">
        <div className="flex pt-4">
          <div className="flex justify-center">
            <Image
              src="/title.svg"
              alt="Title"
              width={800}
              height={500}
              priority
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center pt-10">
          {/*typewriter effect*/}
          <TypingEffect text="Welcome to MCSC 2022" />
      </div>
      <FAQ />
    </div>
    </div>
  );
}
