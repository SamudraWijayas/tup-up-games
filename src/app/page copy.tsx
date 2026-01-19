"use client";

import {
  CheckCircle,
  CreditCard,
  Gamepad2,
  MousePointerClick,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-linear-to-b from-[#050b1f] via-[#06122e] to-[#020617] text-white">
      {/* ================= NAVBAR ================= */}
      <header className="sticky top-0 z-50 bg-[#050b1f]/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2 font-bold text-xl">
            <span className="text-yellow-400">⚡</span>
            <span>OURA STORE</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-300">
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
          </nav>
          <button className="rounded-full border border-gray-600 px-4 py-2 text-sm hover:bg-white/10">
            Check order
          </button>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section className="relative h-screen w-full">
        {/* Background Image */}
        <Image
          src="/images/bg1.jpg"
          alt="Hero Background"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-[#050b1f]/90 via-[#050b1f]/70 to-transparent" />

        {/* Content */}
        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
          {/* BANNER */}
          <div className="max-w-xl rounded-3xl border border-white/10 bg-[#050b1f]/80 p-8 backdrop-blur-md shadow-2xl">
            <p className="mb-2 inline-block rounded-full bg-yellow-400/10 px-4 py-1 text-xs font-semibold text-yellow-400">
              Mobile Legends
            </p>

            <h1 className="mb-4 text-4xl font-extrabold leading-tight md:text-5xl">
              Top Up Games <br />
              Fast & Secure
            </h1>

            <p className="mb-6 text-gray-300">
              A trusted place to top up your favorite games quickly, safely, and
              legally.
            </p>

            {/* CTA */}
            <div className="flex items-center gap-4">
              <button className="rounded-full bg-yellow-400 px-6 py-3 text-sm font-semibold text-black hover:bg-yellow-300">
                Top Up Now
              </button>
              <button className="rounded-full border border-white/20 px-6 py-3 text-sm hover:bg-white/10">
                View Games
              </button>
            </div>

            {/* Indicator (future slider) */}
            <div className="mt-6 flex items-center gap-2">
              <span className="h-2 w-6 rounded-full bg-yellow-400"></span>
              <span className="h-2 w-2 rounded-full bg-white/40"></span>
              <span className="h-2 w-2 rounded-full bg-white/40"></span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= GAME LOGOS ================= */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-3 items-center gap-6 md:grid-cols-5">
          {logos.map((logo) => (
            <div
              key={logo.alt}
              className="flex justify-center opacity-80 transition hover:opacity-100"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={60}
                className="object-contain"
              />
            </div>
          ))}
        </div>
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
              <div className="relative h-86 w-full">
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
              <h3 className="mb-4 text-lg font-semibold">Oura Store</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Oura Store amet, consectetur adipiscing elit. Risus, luctus ac
                adipiscing at. Massa senectus commodo amet at scelerisque nec
                lacus nisi ut praesent morbi nec.
              </p>
              <p className="mt-4 text-sm text-gray-400">
                Customer Service Whatsapp: <br />
                <span className="text-white">+62877-4109-1899</span>
              </p>
            </div>

            {/* Maybe You Like */}
            <div className="max-w-sm">
              <h3 className="mb-4 text-lg font-semibold">Maybe you like</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="hover:text-white cursor-pointer">
                  Sausage Man - Candy
                </li>
                <li className="hover:text-white cursor-pointer">
                  PUBG - INDONESIA
                </li>
                <li className="hover:text-white cursor-pointer">
                  Mobile Legends - Diamonds
                </li>
                <li className="hover:text-white cursor-pointer">
                  Free Fire - Fire Gems
                </li>
                <li className="hover:text-white cursor-pointer">
                  Chess Rush - Chess Rush
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 flex flex-col items-center justify-between border-t border-white/10 pt-6 text-sm text-gray-400 md:flex-row">
            <p className="font-semibold text-yellow-400">OURA STORE</p>
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
