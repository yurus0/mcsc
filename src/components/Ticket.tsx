import { useSession } from 'next-auth/react';
import Image from 'next/image';

function generateSerialNumber() {
    length = 15;
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let serialNumber = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        serialNumber += characters.charAt(randomIndex);
    }
    return serialNumber;
}

const Ticket = () => {
    const { data: session, status } = useSession();
    if(status === "authenticated"){
        console.log(session);
        console.log(status);
        //generate serial number from session

        const serialNumber = generateSerialNumber();
        return (
            <div className="shrink-0 mt-4 relative pt-8">
                <Image
                    src="/Asset 1.png"
                    alt="Ticket"
                    width={900}
                    height={250}
                    className='drop-shadow-[0_0px_5px_rgba(0,255,65,0.3)]'
                />
                <div className="shrink-0 mt-4 z-10 absolute top-44 left-80 flex flex-col justify-between items-start">
                    <code className="text-2xl font-semibold text-center text-white pb-1">
                    {session?.user?.name}
                    </code>
                    <code className="text-xl text-center text-white">
                    {session?.user?.name}
                    </code>
                </div>
                <div className="shrink-0 mt-4 z-10 absolute top-44 pt-3 left-24 rounded-full">
                    <Image
                    src="https://avatars.githubusercontent.com/u/62514716?v=4"
                    width={150}
                    height={150}
                    alt='Profile Picture'
                    className='rounded-full scale-125'
                    />
                </div>
                <div className="z-10 absolute bottom-14 right-0 pl-18 flex flex-col justify-center items-center">
                    <code className='pt-24 -rotate-90'>#{serialNumber}</code>
                </div>
            </div>
        );
    }

    return (
        <div className="shrink-0 mt-4 relative pt-8">
        <Image
            src="/Asset 1.png"
            alt="Ticket"
            width={900}
            height={250}
            className='drop-shadow-[0_0px_5px_rgba(0,255,65,0.3)]'
        />
        </div>
    );
};
export default Ticket;


