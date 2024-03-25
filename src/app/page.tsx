"use client";
import FAQ from '@/components/Faq';
import Footer from '@/components/Footer';
import RegisterButton from '@/components/RegisterButton';
import SpaceParticles from '@/components/SpaceParticles';
import { SessionProvider, useSession } from 'next-auth/react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Canvas } from 'react-three-fiber';
import Navbar from '../components/Navbar';
import Link from 'next/link';

export function Profile() {
  const { data: session, status } = useSession();
  const [user, setUser] = useState({
    name: '',
    login: '',
    avatar_url: '',
  });

  useEffect(() => {
    const fetchUserData = async () => {
      if (status === 'authenticated') {
        try {
          const userRes = await fetch("https://api.github.com/user", {
                headers: {
                Authorization: `bearer ${session?.accessToken as string}`,
                },
            });
          if (userRes.ok) {
            const userData = await userRes.json();
            setUser(userData);
          } else {
            console.error('Failed to fetch user data:', userRes.statusText);
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      }
    };

    fetchUserData();
  }, [session, status]);

  return (
    <div>
      <div>{user?.name}</div>
      <div>{session?.user.email}</div>
      <div>{user?.login}</div>
      <div>{user?.avatar_url}</div>
    </div>
  );
}

export default function Home() {

  return (
    <SessionProvider>
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
            <RegisterButton/>
            <Link href="/register">
            <button className='shrink-0 mt-4 relative bg-transparent rounded-lg ring-2 ring-[#00ff41] px-10 py-4'>
              <p className='text-xl text-center'>
              <code>Register Now</code>
              </p>
            </button>
            </Link>
          </div>
          </div>
      </div>
      <div className='py-10'></div>
      <div id="about" className="flex min-h-screen flex-row items-center justify-center p-10 px-16">
        {/*about*/}
        <div className="flex flex-col">
          <h1 className="text-5xl font-semibold text-left mb-8 pt-48">
            <code>Gathering Enthusiasts !</code>
          </h1>
          <div className="items-start mx-auto pr-10 pt-10">
            <p className="text-md font-light">
              <code>
              This is an annual gathering that unites cybersecurity enthusiasts, industry experts, researchers, and students from Morocco and beyond.
              </code>
            </p>
            <div className='pt-20 text-transparent bg-gradient-to-tr from-[#00ff41] to-[#66ff7d] bg-clip-text'>
              <code className='text-7xl font-black'>Since 2011...</code>
            </div>
          </div>
      </div>
      <Image
              src="/iamhacker.png"
              alt="About"
              width={600}
              height={500}
              priority
              className='pt-44'
            />
      </div>
      <div id="faq" className="flex min-h-screen flex-col items-center justify-between p-20">
        <FAQ />
      </div>
      <Footer/>
      </div>
    </SessionProvider>
  );
}
