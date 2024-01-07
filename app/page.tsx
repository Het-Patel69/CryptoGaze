import Image from "next/image";
import styles from "./page.module.css";
import ButtonWithIcon from "@/components/ButtonWithIcon";
import Link from "next/link";
import FeaturedCoins from "@/components/FeaturedCoins";
import { Suspense } from "react";
import MoreServices from "@/components/MoreServices";

export default function Home() {
  return (
    <>
      <section className={`${styles.heroSection} ${styles.section}`}>
        <div className={styles.heroLeft}>
          <h2 className={styles.title}>
            Empower Your Crypto Journey, Explore Real-Time Prices and Trends
            with CryptoGaze
          </h2>
          <p className={styles.para}>
            Explore CryptoGaze for real-time cryptocurrency insights. Stay
            updated on prices, news, and market trends. Whether you&apos;re a
            trader or enthusiast, CryptoGaze provides the tools for informed
            decisions in the world of cryptocurrencies.
          </p>
          <div className={styles.heroBtns}>
            <Link href="/about">
              <ButtonWithIcon
                classes={`btn btnSecondary ${styles.heroButton}`}
                iconLink="/icons/arrow-up-black.svg"
                // offset={0}
              >
                About Us
              </ButtonWithIcon>
            </Link>
            <Link href="/coins">
              <ButtonWithIcon
                classes={`btn btnPrimary ${styles.heroButton}`}
                iconLink="/icons/arrow-up-white.svg"
                // offset={0}
              >
                View Trending Coins
              </ButtonWithIcon>
            </Link>
          </div>
        </div>
        <div className={styles.heroRight}>
          <Image
            src="/images/hero-img.png"
            alt="Image of crypto trading platform"
            height={340.5}
            width={500}
            priority
          />
        </div>
      </section>
      <section className={`${styles.section} ${styles.featuredSection}`}>
        <Suspense fallback={<div>Loading...</div>}>
          <FeaturedCoins />
        </Suspense>
      </section>
      <section>
        <MoreServices />
      </section>
    </>
  );
}
