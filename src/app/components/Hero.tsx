"use client";
import React from 'react'
import { Typewriter, useTypewriter } from 'react-simple-typewriter'

export default function Hero() {
    const [text, count] = useTypewriter({
        words: [
            "He, my name is Soufiane",
            "Text 2",
            "Text 3",
        ],
        loop: true,
        delaySpeed: 2000
    });

  return (
    <div>
        <span>{text}</span>
    </div>
  )
}
