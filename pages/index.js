import Image from "next/image";
import Link from "next/link";
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-[#5a141d]/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-[#5a141d] lg:p-4 lg:dark:bg-[#5a141d]/30 text-gray-800">
          Get right into&nbsp;
          <code className="font-mono font-bold text-[#5a141d]">
            <Link href="https://shop.nailsrepublic.co">Our Store!</Link>
          </code>
        </p>

        {/* <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div> */}
      </div>

      <div className="relative flex place-items-center">
        <Image
          className="relative"
          src="/images/logo.png"
          alt="NailsRepublic Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mt-2 mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://shop.nailsrepublic.co"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-[#5a141d] hover:bg-[#5a141d] hover:dark:border-[#6cc070] hover:dark:bg-[#6cc070]/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold text-[#6cc070]`}>
            Shop{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            {`Shop amazing products for everything manicure and pedicure. We don't have the words, see for yourself!`}
          </p>
        </a>

        <a
          href="https://blog.nailsrepublic.co"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-[#0038CB] hover:bg-[#0038CB]hover:dark:border-[#0038CB] hover:dark:bg-[#0038CB]/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold text-[#0038CB]`}>
            Blog{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about NailsRepublic, get free nail health guides, bacterial
            and fungal nail treatments. Join the community!
          </p>
        </a>

        <a
          href="https://www.youtube.com/@NailsRepublic"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-[#c9454b] hover:bg-[#c9454b]hover:dark:border-[#c9454b] hover:dark:bg-[#c9454b]/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold text-[#c9454b]`}>
            Galleries{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Discover nail trendy styles from all our galleries. Learn simple
            nail DIYs through our interactive sessions and quizzes for
            giveaways!
          </p>
        </a>

        <a
          href="/aboutus"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-[#704271] hover:bg-[#704271]hover:dark:border-[#704271] hover:dark:bg-[#704271]/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold text-[#704271]`}>
            About Us{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  );
}
