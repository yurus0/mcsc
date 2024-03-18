"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";

export const GithubButton = () => {
    const [loading, setLoading] = useState(false);

    return (
        <button onClick={() => signIn("github")} 
        className="shrink-0 mt-4 relative bg-transparent text-white rounded-lg ring-2 ring-[#00ff41] px-10 py-4 flex items-center justify-center font-medium  hover:scale-105 transition-all "
        >
        <code>Customize with Github</code>
        </button>
    );
};