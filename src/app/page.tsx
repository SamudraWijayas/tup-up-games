"use client";

import {
  CheckCircle,
  CreditCard,
  Gamepad2,
  MousePointerClick,
  Search,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export default function HomePage() {
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  return (
    <main className=" bg-linear-to-b from-[#050b1f] via-[#06122e] to-[#020617] text-white">
      {/* ================= NAVBAR ================= */}
      <header className="fixed top-0 left-0 z-50 w-full">
        <div className="bg-[#050b1f]/80 backdrop-blur">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
            {/* Logo */}
            <div className="flex items-center gap-2 text-xl font-bold">
              <Image src="/logo-ndes.png" alt="Logo" width={50} height={50} />
            </div>

            {/* Search */}
            <div className="hidden w-full max-w-md md:block">
              <div className="relative w-full max-w-md">
                <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/50" />

                <input
                  type="text"
                  placeholder="Cari Game atau Voucher"
                  className="
      w-full rounded-lg
      bg-[#050b1f]/80
      py-2 pl-11 pr-5
      text-sm text-white
      placeholder:text-white/40
      outline-none
      ring-1 ring-white/10
      focus:ring-2 focus:ring-white/30
      transition
    "
                />
              </div>
            </div>
            <div className="flex gap-3 ">
              <button
                onClick={() => setShowMobileSearch(!showMobileSearch)}
                className="rounded-lg border border-white/10 px-2 py-2 text-sm hover:bg-white/10 md:hidden block"
              >
                {showMobileSearch ? <X size={20} /> : <Search size={20} />}
              </button>
              <button className="rounded-lg border border-white/10 px-4 py-2 text-sm hover:bg-white/10">
                Check order
              </button>
            </div>
          </div>
        </div>
        <div className="h-px w-full bg-[#0b1538]/80 backdrop-blur" />
        <div className="bg-[#050b1f]/80 backdrop-blur pt-2">
          <div className="mx-auto flex max-w-7xl items-center gap-8 px-6 py-2 text-sm text-gray-300">
            <Link href="#" className="hover:text-white">
              Home
            </Link>
            <Link href="#" className="hover:text-white">
              Games
            </Link>
            <Link href="#" className="hover:text-white">
              Contact
            </Link>
            <Link href="#" className="hover:text-white">
              About
            </Link>
          </div>
        </div>
        <AnimatePresence>
          {showMobileSearch && (
            <motion.div
              className="absolute left-0 top-14 z-50 w-full md:hidden"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <div className="bg-[#050b1f]/90 backdrop-blur px-6 py-3">
                <div className="relative mx-auto w-full max-w-7xl">
                  <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/50" />

                  <input
                    type="text"
                    placeholder="Cari Game atau Voucher"
                    className="
              w-full rounded-lg
              bg-[#050b1f]/80
              py-2 pl-11 pr-5
              text-sm text-white
              placeholder:text-white/40
              outline-none
              ring-1 ring-white/10
              focus:ring-2 focus:ring-white/30
              transition
            "
                    autoFocus
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ================= HERO ================= */}
      <section className="relative min-h-[10vh] md:h-screen w-full">
        {/* Background Image */}
        <Image
          src="/images/bg1.jpg"
          alt="Hero Background"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#050b1f]/90 to-transparent" />

        {/* Content */}
        <div className="relative z-10 mx-auto flex max-w-7xl items-center px-6 pt-34">
          {/* BANNER */}
          <div className="relative w-full overflow-hidden rounded-3xl shadow-2xl">
            <Swiper
              pagination={{
                // dynamicBullets: true,
                clickable: true,
              }}
              spaceBetween={30}
              loop
              modules={[Autoplay, Pagination]}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              className="md:h-122 h-60"
            >
              {banner.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="relative h-full w-full">
                    <Image
                      src={item.image}
                      alt={`Banner ${index + 1}`}
                      fill
                      priority
                      className="object-cover"
                    />

                    <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* ================= GAME LOGOS ================= */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-3 items-center gap-6 md:grid-cols-5">
          {logos.map((logo, index) => (
            <motion.div
              key={logo.alt}
              className="flex justify-center opacity-80 transition hover:opacity-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                delay: index * 0.1,
                duration: 0.4,
                ease: "easeOut",
              }}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={60}
                className="object-contain"
              />
            </motion.div>
          ))}
        </div>
      </section>
      {/* ================= POPULAR PRODUCTS ================= */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <motion.div
          className="mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div>
            <h2 className="text-2xl font-bold">Popular Now!</h2>
            <p className="text-sm text-gray-400">
              Here are some of the most popular products right now
            </p>
          </div>
          {/* <Link
            href="#"
            className="text-sm text-gray-400 transition hover:text-white"
          >
            View All →
          </Link> */}
        </motion.div>

        <motion.div
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {popularProducts.map((item) => (
            <motion.div
              key={item.title}
              className="group rounded-xl bg-white/5 p-2 transition hover:bg-white/10"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
                {/* Gambar */}
                <div className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 flex-shrink-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={100}
                    height={100}
                    className="h-full w-full rounded-lg object-cover"
                  />
                </div>

                {/* Teks */}
                <div className="flex flex-col justify-center">
                  <p className="text-xs sm:text-base md:text-lg font-semibold leading-tight">
                    {item.title}
                  </p>
                  <p className="text-xs text-gray-400">{item.developer}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ================= TOP UP ALL GAMES ================= */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="mb-6">
          <h2 className="text-2xl font-bold">Top Up All Games</h2>
          <p className="text-sm text-gray-400">
            Choose the game you want to top up
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          {games.map((game) => (
            <div
              key={game.title}
              className="group relative overflow-hidden rounded-2xl bg-white/5"
            >
              {/* Image */}
              <div className="relative md:h-86 h-50 w-full">
                <Image
                  src={game.image}
                  alt={game.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 flex items-end bg-linear-to-t from-black/80 via-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {/* Text */}
                <div
                  className="
              w-full
              px-4
              pb-4
              transform
              translate-y-6
              opacity-0
              transition-all
              duration-300
              ease-out
              group-hover:translate-y-0
              group-hover:opacity-100
            "
                >
                  <p className="text-lg font-semibold leading-tight">
                    {game.title}
                  </p>
                  <p className="text-sm text-gray-300">{game.developer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {steps.map((step) => (
            <div key={step.title} className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white">
                {step.icon}
              </div>
              <h4 className="mb-2 text-sm font-semibold">{step.title}</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="relative bg-linear-to-b from-[#020617] to-[#02030f]">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="flex flex-col gap-10 md:flex-row md:justify-between">
            {/* About */}
            <div className="max-w-md">
              <h3 className="mb-4 text-lg font-semibold">Ndess Store</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Ndes Store is a game top-up platform that provides fast, secure,
                and reliable service. It supports a variety of popular games
                with automated processes and various payment methods for
                gamers&apos; convenience.Ndes Store is a game top-up platform
                that provides fast, secure, and reliable service. It supports a
                variety of popular games with automated processes and various
                payment methods for gamers&apos; convenience.
              </p>
              <p className="mt-4 text-sm text-gray-400">
                Customer Service Whatsapp: <br />
                <Link
                  href="https://wa.me/6287718517731"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:underline"
                >
                  +62 877-1851-7731
                </Link>
              </p>
            </div>

            {/* Sitemap */}
            <div className="max-w-sm">
              <h3 className="mb-4 text-lg font-semibold text-white">Sitemap</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="cursor-pointer transition hover:text-white">
                  Home
                </li>
                <li className="cursor-pointer transition hover:text-white">
                  Games
                </li>
                <li className="cursor-pointer transition hover:text-white">
                  Top Up
                </li>
                <li className="cursor-pointer transition hover:text-white">
                  Order Status
                </li>
                <li className="cursor-pointer transition hover:text-white">
                  Contact
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div className="max-w-sm">
              <h3 className="mb-4 text-lg font-semibold text-white">Legal</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="cursor-pointer transition hover:text-white">
                  Terms & Conditions
                </li>
                <li className="cursor-pointer transition hover:text-white">
                  Privacy Policy
                </li>
                <li className="cursor-pointer transition hover:text-white">
                  Refund & Cancellation
                </li>
                <li className="cursor-pointer transition hover:text-white">
                  Disclaimer
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 flex flex-col items-center justify-between border-t border-white/10 pt-6 text-sm text-gray-400 md:flex-row">
            <p className="font-semibold text-yellow-400">NDESS STORE</p>
            <div className="flex gap-6">
              <span className="hover:text-white cursor-pointer">Home</span>
              <span className="hover:text-white cursor-pointer">Games</span>
              <span className="hover:text-white cursor-pointer">Contact</span>
              <span className="hover:text-white cursor-pointer">About</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
const popularProducts = [
  {
    title: "Mobile Legends",
    developer: "Moonton",
    price: "Rp 20.000",
    image: "/images/ml.jpeg",
  },
  {
    title: "Free Fire",
    developer: "Garena",
    price: "Rp 15.000",
    image: "/images/ff.jpeg",
  },
  {
    title: "PUBG Mobile",
    developer: "Tencent Games",
    price: "Rp 16.000",
    image: "/images/pubg.png",
  },
  {
    title: "Genshin Impact",
    developer: "HoYoverse",
    price: "Rp 17.000",
    image: "/images/genshin.jpeg",
  },
  {
    title: "Joki Rank",
    developer: "Ndess Store",
    price: "Rp 17.000",
    image: "/images/joki.jpg",
  },
];

const steps = [
  {
    title: "Select Game",
    desc: "There are several choices of games such as Mobile Legends, PUBG Mobile, etc.",
    icon: <Gamepad2 size={22} />,
  },
  {
    title: "Select Nominal",
    desc: "Select the nominal top up game you choose which is available on the order form.",
    icon: <MousePointerClick size={22} />,
  },
  {
    title: "Make Payment",
    desc: "There are various payment methods available including Alfamart, BCA Bank, Mandiri Bank, BNI Bank etc.",
    icon: <CreditCard size={22} />,
  },
  {
    title: "Top Up Successful",
    desc: "The top up will be processed immediately if the payment has been made correctly.",
    icon: <CheckCircle size={22} />,
  },
];

const logos = [
  { src: "/images/logo/logo-ff.png", alt: "Free Fire" },
  { src: "/images/logo/logo-ml.png", alt: "Mobile Legends" },
  { src: "/images/logo/logo-pubg.png", alt: "PUBG Mobile" },
  { src: "/images/logo/logo-cod.png", alt: "Call of Duty" },
  { src: "/images/logo/logo-aov.png", alt: "Arena of Valor" },
];

const banner = [
  {
    image: "/images/bg2.jpg",
  },
  {
    image: "/images/bg4.jpg",
  },
  {
    image: "/images/bg3.jpg",
  },
  {
    image: "/images/bg5.jpg",
  },
];

const games = [
  {
    title: "Mobile Legends",
    developer: "Moonton",
    image: "/images/ml.jpeg",
  },
  {
    title: "PUBG Mobile",
    developer: "Tencent Games",
    image: "/images/pubg.png",
  },
  {
    title: "Free Fire",
    developer: "Garena",
    image: "/images/ff.jpeg",
  },
  {
    title: "Call of Duty Mobile",
    developer: "Garena",
    image: "/images/cod.jpeg",
  },
  {
    title: "Arena of Valor",
    developer: "Garena",
    image: "/images/arena-of-valor.jpeg",
  },
  {
    title: "Roblox",
    developer: "Roblox Corporation",
    image: "/images/roblox.jpeg",
  },
  {
    title: "League of Legends Wild Rift",
    developer: "Riot Games",
    image: "/images/lolwr.jpeg",
  },
  {
    title: "Honor Of Kings",
    developer: "Tencent Games",
    image: "/images/hok.jpeg",
  },
  {
    title: "Valorant",
    developer: "Riot Games",
    image: "/images/valo.jpeg",
  },
  {
    title: "Point Blank",
    developer: "Zepetto",
    image: "/images/pb.jpeg",
  },
  {
    title: "Age Of Empire Mobile",
    developer: "Level Infinite",
    image: "/images/aoe.jpeg",
  },
  {
    title: "Genshin Impact",
    developer: "HoYoverse",
    image: "/images/genshin.jpeg",
  },
  {
    title: "League of Legends PC",
    developer: "Riot Games",
    image: "/images/lol-pc.webp",
  },
  {
    title: "Metal Slug Awakening",
    developer: "VINGGAMES",
    image: "/images/metal-slug.webp",
  },
  {
    title: "Clash Royale",
    developer: "Supercell",
    image: "/images/cr.webp",
  },
  {
    title: "Bleach Soul Resonance",
    developer: "Nuverse Games",
    image: "/images/bsr.jpeg",
  },
];
