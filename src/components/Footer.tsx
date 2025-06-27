import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mx-6 flex py-4 items-center justify-between text-sm">
      <p>OpenSpace Dev.</p>
      <Link
        href={"https://github.com/OpenSpace-Dev/gittomd"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <p>Please, star us &lt;3</p>
      </Link>
    </footer>
  );
}
