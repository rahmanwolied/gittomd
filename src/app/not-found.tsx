import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col h-full">
      <Header/>
      <div className="grow flex flex-col items-center md:justify-center py-8 gap-4 md:gap-8">
        <h2 className=" text-2xl md:text-3xl lg:text-5xl">Not found</h2>
        <Link href="/" className="hover:underline underline-offset-8">
          Go back to home
          </Link>
      </div>
      <Footer/>
    </div>
  );
}
