"use client";
import Image from "next/image";
import styles from "./loading.module.css";
import Banner from "../components/banner";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession();
  const loading = status === "loading";
  return (
    <main>
      <noscript>
        <style>{`.nojs-show { opacity: 1; top: 0; }`}</style>
      </noscript>
      <div
        className={`nojs-show ${
          !session && loading ? styles.loading : styles.loaded
        }`}
      >
        {!session && loading && (
          <>
              <div className="flex min-h-screen flex-col items-center justify-between p-24">
                <Image
                  className="relative animate-spin"
                  src="/pandaoff.svg"
                  alt="Panda Logo"
                  width={75}
                  height={75}
                  priority
                />
              </div>
          </>
        )}
        {!session && (
          <>
            <Banner />
            <div className="flex min-h-screen flex-col items-center justify-between p-24">
              <Image
                className="relative"
                src="/pandaoff.svg"
                alt="Panda Logo"
                width={256}
                height={256}
                priority
              />
            </div>
          </>
        )}
        {session?.user && (
          <>
            <div>
              <Image
                className="animate-bounce absolute bottom-0 right-0"
                src="/panda.svg"
                alt="Panda Logo"
                width={75}
                height={75}
                priority
              />
            </div>
          </>
        )}
      </div>
    </main>
  );
}
