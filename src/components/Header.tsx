import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="py-1 md:py-3 pr-2 mx-3 md:mx-6 my-3 flex items-center">
      <Link href="https://openspacedev.ru" className="flex items-center gap-2 mr-4  hidden md:block">
        <Image src="/icons/openspace.svg" alt="Logo" width={48} height={48} />
      </Link>
      <p className="h-[80%] border-1 hidden md:block"></p>
      <Link href="/" className="flex items-center gap-2 md:ml-4">
        <Image src="/icons/logo.svg" alt="Logo" width={48} height={48} />
      </Link>
      <div className="grow"></div>
      
      <Link
        href={"https://github.com/OpenSpace-Dev/gittomd"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src={"/icons/gh.svg"} alt="GitHub Logo" width={20} height={20} />
      </Link>
    </header>
  );
}
