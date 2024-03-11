import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
    return (
        <div className="left-0 top-0 w-full backdrop-blur-2xl p-6 lg:static lg:w-auto lg:p-4 flex items-center justify-center">
            <div className="flex">
                <div className='pt-2 px-6'>
                    <Link href="#about">
                    <code className="text-md font-light tracking-wider hover:text-[#00ff41] hover:drop-shadow-[0_35px_35px_rgba(0,255,65,1)] cursor-default">about</code>
                    </Link>
                </div>
                <div className='pt-2 px-6'>
                    <Link href="#speakers">
                    <code className="text-md font-light tracking-wider hover:text-[#00ff41] hover:drop-shadow-[0_35px_35px_rgba(0,255,65,1)] cursor-default">speakers</code>
                    </Link>
                </div>
                <div className='pt-2 px-6'>
                    <Link href="#timeline">
                    <code className="text-md font-light tracking-wider hover:text-[#00ff41] hover:drop-shadow-[0_35px_35px_rgba(0,255,65,1)] cursor-default">timeline</code>
                    </Link>
                </div>
            </div>
            <div className='px-20 pt-2 flex flex-row justify-center items-center'>
                <div className="pr-6">
                <Image
                    src="/insec.png"
                    alt="MCSC Logo"
                    width={50}
                    height={50}
                /></div>
                <div>
                    <Image
                    src="/separator.png"
                    alt="MCSC Logo"
                    width={5}
                    height={50}
                />
                </div>
                <div  className="pl-6">
                <Image
                    src="/mcsc.png"
                    alt="MCSC Logo"
                    width={100}
                    height={50}
                />
                </div>
            </div>
            <div className="flex">
                <div className='pt-2 px-6'>
                    <Link href="#sponsors">
                    <code className="text-md font-light tracking-wider hover:text-[#00ff41] hover:drop-shadow-[0_35px_35px_rgba(0,255,65,1)] cursor-default">sponsors</code>
                    </Link>
                </div>
                <div className='pt-2 px-6'>
                    <Link href="#partners">
                    <code className="text-md font-light tracking-wider hover:text-[#00ff41] hover:drop-shadow-[0_35px_35px_rgba(0,255,65,1)] cursor-default">partners</code>
                    </Link>
                </div>
                <div className='pt-2 px-6'>
                    <Link href="#faq">
                    <code className="text-md font-light tracking-wider hover:text-[#00ff41] hover:drop-shadow-[0_35px_35px_rgba(0,255,65,1)] cursor-default">FAQ</code>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
