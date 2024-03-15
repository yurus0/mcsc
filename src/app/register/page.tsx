"use client";
import Navbar from '@/components/Navbar';
import SpaceParticles from '@/components/SpaceParticles';
import Image from 'next/image';
import { Canvas } from 'react-three-fiber';

export default function Home() {


  return (
    <div className='bg-black'>
    <div className="fixed absolute top-0 left-0" style={{ height: '150vh', width: '100vw' }}>
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
                src="/title.svg"
                alt="Title"
                width={1000}
                height={100}
                />
            </div>
        </div>
        <div className='flex flex-col justify-center items-center'>
        <div className='pt-36'>
            <h1 className="text-2xl font-semibold text-right">
            <code>23, 24, 25 april 2024, Rabat - MA</code>
            </h1>
        </div>
        <div className='pt-24'>
            <button className='bg-transparent rounded-lg ring-2 ring-[#00ff41] px-10 py-4'>
            <p className='text-xl text-center'>
            <code>Register Now</code>
            </p>
            </button>
        </div>
        </div>
    </div>
    </div>
    );
}
