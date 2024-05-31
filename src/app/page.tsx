import { CalendarCheck, MapPin } from "lucide-react";
import { WhattsAppButton } from "./components/WhattsAppButton";

export default function Page(){
  return(
    <main className="flex flex-col items-center w-full min-h-screen">
      <WhattsAppButton />
      <video className="w-full h-screen object-fill md:object-contain brightness-75 relative" autoPlay muted loop playsInline webkit-playsinline>
          <source src="/video.mp4" type="video/mp4"/>
      </video>
      <article className="flex flex-col items-start justify-center h-full w-full absolute">
        <section>
          <button className="flex items-center w-44 p-2 rounded-full flex-col gap-2 text-sm uppercase font-semibold"><CalendarCheck className="w-8 h-8"/> <span className="bg-neutral-900 rounded-lg px-3 py-1">Agende Online</span></button>
          <button className="flex items-center w-44 p-2 rounded-full flex-col gap-2 text-sm uppercase font-semibold"><MapPin className="w-8 h-8"/> <span className="bg-neutral-900 rounded-lg px-3 py-1">Localização</span></button>
        </section>
      </article>
    </main>
  )
}