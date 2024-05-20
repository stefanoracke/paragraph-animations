"use client"
import React, { useRef } from 'react'
import { useScroll, motion, useTransform } from 'framer-motion'

export default function WordFadeUp({ text }) {

    const words = text.split(" ");

    return (
        <p
            className='paragraph'>
            {
                words.map((word, i) => {
                    return <Word key={i} index={i}>{word}</Word>
                })
            }
        </p>
    )
}

function Word({ children, index }) {
    return (
        <span className='word relative overflow-hidden inline-block'>
            <motion.span
                className='relative inline-block'
                initial={{ translateY: "100%" }}
                whileInView={{ translateY: "0%" }}
                transition={{  delay: (0.02 + (index * 0.04))  }}
                 >
                {children}
            </motion.span>
        </span>
    )
}