"use client"

import ParagraphAnimated from "@/components/ParagraphAnimated";
import WordAnimated from "@/components/WordAnimated";
import CharacterAnimated from "@/components/CharacterAnimated";
import { useEffect } from "react";
import Lenis from 'lenis'
import WordFadeUp from "@/components/WordFadeUp";

export default function Home() {

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  const text = "Desplazate hacia abajo y mirá algo increíble. Mientras te movés, los párrafos van a aparecer suavemente, haciendo que la info fluya de una manera muy copada. Este efecto le da un toque de estilo y mantiene el interes del usuario. Seguí desplazándote y sorprendete con el resultado."

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="h-screen"></div>
      <ParagraphAnimated text={text} />
      <div className="h-screen"></div>
      <WordAnimated text={text} />
      <div className="h-screen"></div>
      <CharacterAnimated text={text} />
      <div className="h-screen"></div>
      <div className="h-screen"></div>
      <WordFadeUp text={text} />
      <div className="h-screen"></div>
    </main>
  );
}
