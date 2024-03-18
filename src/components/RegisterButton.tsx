import { useState } from "react";

const githubUrl = `https://github.com/login/oauth/authorize?client_id=${encodeURIComponent(
  process.env.GITHUB_CLIENT_ID || ""
)}`;

// const handleClick = signIn("github");

const RegisterButton = () => {
  const [loading, setLoading] = useState(false);

  return (
    <a
      href={githubUrl}
      onClick={() => setLoading(true)}
      className="shrink-0 mt-4 relative px-8 py-3 rounded-lg ring-2 ring-[#00ff41] border-[#00ff41] border-4 bg-transparent flex items-center justify-center font-medium hover:scale-105 transition-all"
    >
        <p className='text-xl text-center'>
            <code>{loading ? "Loading Github Profile ...." : "Register Now"}</code>
        </p>
    </a>
  );
}
export default RegisterButton;