"use client";
import { useState } from "react";

const githubUrl = `https://github.com/login/oauth/authorize?client_id=${encodeURIComponent(
    process.env.NEXT_PUBLIC_GITHUB_OAUTH_CLIENT_ID || ""
)}`;

export const GithubButton = () => {
    const [loading, setLoading] = useState(false);

    return (
        <a
        href={githubUrl}
        onClick={() => setLoading(true)}
        className="shrink-0 mt-4 relative bg-transparent text-white rounded-lg ring-2 ring-[#00ff41] px-10 py-4 flex items-center justify-center font-medium  hover:scale-105 transition-all "
        >
        <code>{loading ? "Loading Github Profile ...." : "Customize with Github"}</code>
        </a>
    );
};