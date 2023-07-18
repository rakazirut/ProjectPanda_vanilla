export default function Banner() {
  return (
      <div className="z-10 px-2.5 pt-20 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="flex w-full justify-center border-b border-gray-300 from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Project Panda:&nbsp;
          <code className="font-mono font-bold">A Reddit Clone</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          By&nbsp;
          <a
            className="pointer-events-none flex place-items-center gap-2 lg:pointer-events-auto lg:p-0"
            href="https://github.com/rakazirut"
            target="_blank"
            rel="noopener noreferrer"
          >
            Robert Kazirut
          </a>
          &nbsp;and&nbsp;
          <a
            className="pointer-events-none flex place-items-center gap-2 lg:pointer-events-auto lg:p-0"
            href="https://github.com//slandath"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tom Slanda
          </a>
        </div>
      </div>
  );
}
