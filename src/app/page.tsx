import { CalendarCheck, MapPin } from "lucide-react";
import { WhattsAppButton } from "./components/WhattsAppButton";
import Image from "next/image";
import Link from "next/link";

export default function Page(){
  return(
    <main className="flex flex-col items-center w-full min-h-screen">
      <WhattsAppButton />
      <video className="w-full h-screen object-fill md:object-contain brightness-50 relative" autoPlay loop muted playsInline webkit-playsinline>
          <source src="/video.mp4" type="video/mp4"/>
      </video>
      <article className="flex flex-col items-start justify-center h-full w-full absolute">
        <section className="flex flex-col items-center justify-center gap-10">
          <Image alt="logo map" src="/logo-map.png" width={0} height={0} className="object-cover w-28 h-28 saturate-150" sizes="100vw"/>
          <Link href="https://avec.app/studioalessandrapavani/?fbclid=PAAabcg3IL4NaBRbTjVwxOfVxy-AQlcDgLKaF9njllG6Sw6218FyBq00nFRx0"><button className="flex items-center w-44 p-2 rounded-full flex-col gap-2 text-sm uppercase font-semibold"><CalendarCheck className="w-8 h-8"/> <span className="bg-neutral-900 rounded-lg px-3 py-1 text-white dark:text-white">Agende Online</span></button></Link>
          <Link href="https://maps.app.goo.gl/CV1L98vVXSybAB7V7"><button className="flex items-center w-44 p-2 rounded-full flex-col gap-2 text-sm uppercase font-semibold"><MapPin className="w-8 h-8 fill-red-700"/> <span className="bg-neutral-900 rounded-lg px-3 py-1 text-white dark:text-white">Localização</span></button></Link>
        </section>
      </article>
    </main>
  )
}