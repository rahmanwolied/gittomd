import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Inputbox from "@/components/Inputbox";

export default function Home() {
  return (
    <div className="flex flex-col h-full">
      <Header />
      <main className="grow w-full flex flex-col items-center md:justify-center py-8 gap-8 md:gap-16 text-center px-4">
        <section className="min-h-[81dvh] w-full grow flex flex-col items-center justify-center">
          <a
            href="https://www.npmjs.com/package/gittomd"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:underline underline-offset-2 font-medium"
          >
            <div className="mb-4 p-2 border border-foreground/20 rounded-lg backdrop-blur-md transition-opacity opacity-80 hover:opacity-100 max-w-sm">
              <p className="text-sm text-foreground flex gap-2 items-center hover:text-decoration-none ">
                
                <svg
                  viewBox="0 0 2500 2500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                >
                  <path
                    d="M1241.5 268.5h-973v1962.9h972.9V763.5h495v1467.9h495V268.5z"
                    fill="#fff"
                    className="fill-foreground transition-colors"
                  />
                </svg>
                Try also gittomd-cli
              </p>
            </div>
          </a>
          <h1 className="text-3xl md:text-4xl lg:text-5xl mb-8 font-bold leading-tight text-foreground">
            Convert any GitHub Repository <br className="hidden md:block" />
            to a Single Markdown File
          </h1>
          <h2 className="mt-4 mb-8 text-lg text-foreground/80 hidden">
            The perfect tool to feed codebases to LLMs like GPT-4, create
            documentation, or for offline analysis.
          </h2>
          <Inputbox />
        </section>
        <section className="w-full max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-semibold mb-6 text-foreground">
            How to use
          </h1>
          <video className="w-full rounded-lg mt-8" controls>
            <source src="/images/usage.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </section>
        <section className="w-full max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-foreground">
            Key features
          </h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6 text-left *:transition-all *:backdrop-blur-md *:hover:translate-y-[-8px] ">
            <div className="p-4 border border-foreground/20 rounded-lg">
              <h3 className="font-semibold">LLM-Optimized Formatting</h3>
              <p className="text-sm text-foreground/70 mt-2">
                Outputs clean Markdown with language-annotated code blocks
                (```language:path/to/file), a format that models understand
                perfectly.
              </p>
            </div>
            <div className="p-4 border border-foreground/20 rounded-lg">
              <h3 className="font-semibold">Blazing Fast & Cached</h3>
              <p className="text-sm text-foreground/70 mt-2">
                Leverages a global edge network and Redis caching to deliver
                results quickly, even for large repositories.
              </p>
            </div>
            <div className="p-4 border border-foreground/20 rounded-lg">
              <h3 className="font-semibold">Intelligent Filtering</h3>
              <p className="text-sm text-foreground/70 mt-2">
                Automatically ignores binary files and common clutter (
                <code>.git, node_modules, dist/</code>, etc.) to keep your
                context clean.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
