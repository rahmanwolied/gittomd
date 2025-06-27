"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { parseGitHubUrl } from "@/lib/utils";
import { twMerge } from "tailwind-merge";

export default function Inputbox() {
  const [link, setLink] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const parsedUrl = parseGitHubUrl(link);
      if (parsedUrl) {
        const { owner, repo } = parsedUrl;
        router.push(`/${owner}/${repo}`);
      } else {
        setError("Please enter a valid GitHub repository URL.");
        // alert("Please enter a valid GitHub repository URL.");
      }
    }
  };

  useEffect(() => {
    setError(null);
  }, [link]); 
  return (
    <>
    <input
      value={link}
      onChange={(e) => setLink(e.target.value)}
      onKeyDown={handleKeyDown}
      type="text"
      autoFocus
      className={twMerge(
        "border-2 backdrop-blur-xl bg-background drop-shadow-[0_8px_8px]/33 text-center text-xl rounded-lg md:rounded-xl px-2 py-1 md:px-4 md:py-2  md:w-[30%] transition-all duration-200 focus:outline-none",
        (error ? "border-red-500 drop-shadow-red-500 text-red-500" : "border-primary drop-shadow-[color:var(--primary)] text-primary")
      )}
    />
    </>
    
  );
}
