import { useSession } from 'next-auth/react';
import Image from 'next/image';

const Ticket = () => {
    
    const { data: session, status } = useSession();

    return (
        <div className="shrink-0 mt-4 relative pt-8">
        <Image
            src="/Asset 1.png"
            alt="Ticket"
            width={900}
            height={250}
            className='drop-shadow-[0_0px_5px_rgba(0,255,65,0.3)]'
        />
        <div className="flex justify-center">
            <code className="text-2xl font-semibold text-center">
            {status === "authenticated" ? session?.user?.name : "You are not signed in"}
            </code>
            </div>
        </div>
    );
};
export default Ticket;