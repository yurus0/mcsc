"use client";
import FAQ from '@/components/Faq';
import SpaceParticles from '@/components/SpaceParticles';
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
      <div className="flex min-h-80 flex-col items-center justify-between">
        <div className="flex pt-40">
          <div className="flex justify-center">
            <Image
              src="/title.svg"
              alt="Title"
              width={1000}
              height={100}
            />
          </div>
        </div>
        <div className='flex flex-row justify-between'>
        <div className=''>
          <h1 className="text-2xl font-semibold text-right">
            <code>23, 24, 25 april 2024, Rabat - MA</code>
            </h1>
        </div>
        </div>
    </div>
    <div className='py-10'></div>
    <div className="flex min-h-screen flex-row items-center justify-between p-10">
      {/*about*/}
      <div className="flex flex-col">
        <h1 className="text-4xl font-semibold text-left mb-8 pt-6">
          <code>Gathering Enthusiasts !</code>
        </h1>
        <div className="items-start mx-auto pl">
          <p className="text-sm font-light">
            <code>
            is an annual gathering that unites cybersecurity enthusiasts, industry experts, researchers, and students from Morocco and beyond. This event is designed to foster cybersecurity awareness, facilitate knowledge exchange, and serve as a unique platform for skill development.
            </code>
          </p>
        </div>
    </div>
    <Image
            src="/mcsc.png"
            alt="About"
            width={500}
            height={500}
            priority
          />
    <Image
      src="/mcsc.png"
      alt="About"
      width={100}
      height={500}
      priority/>
    </div>
    <div className='relative flex min-h-screen flex-col items-center justify-center'>
    <div style={{ height: '80vh', width: '100vw' }}>
          <Canvas>
            <SpaceParticles />
          </Canvas>
    </div>
    <div className='absolute top-40 py-16'>
        <h1 className="text-4xl font-semibold text-center">
          <code>Partners</code>
          </h1>
    </div>
    <div className='absolute flex bg-gradient-to-t from-transparent from-10% via-[#00ff41]/[.4] to-90% opacity-15 h-28 w-full'>
    </div>
    <div className='absolute flex flex-col bg-gradient-to-t from-transparent via-[#00ff41]/[.35] min-h-72 w-full justify-center items-center'>
    
      <div className='flex flex-row justify-center items-center'>
        <div className='px-10'>
        <Image
          src="/CC.svg"
          alt="cybercohesion"
          width={200}
          height={150}
          priority
        /></div>
      <div className='px-10'>
        <Image
          src="/offsec.png"
          alt="offsec"
          width={400}
          height={250}
          priority
        />
        </div>
      <div className='px-10'>
        <Image
          src="/aws.png"
          alt="aws"
          width={300}
          height={200}
          priority
        /></div>
      </div>
    </div>
    <div className='absolute flex min-h-60 w-full'>
      
    </div>
    </div>
    <div className="flex min-h-screen flex-col items-center justify-between p-20">
      <FAQ />
    </div>
    </div>
  );
}
