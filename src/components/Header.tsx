import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className=" mx-3 md:mx-6 border-b-[1px] border-foreground flex py-2 items-center">
      <Image src="/icons/logo.svg" alt="Logo" width={48} height={48} />
      <div className="grow"></div>
      <Link href={"https://github.com/OpenSpace-Dev/gittomd"} target="_blank" rel="noopener noreferrer">
        <Image src={"/icons/gh.svg"} alt="GitHub Logo" width={24} height={24} />
      </Link>
    </header>
  );
}
