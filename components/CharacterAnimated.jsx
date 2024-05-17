"use client"
import React, { useRef } from 'react'
import { useScroll, motion, useTransform } from 'framer-motion'
export default function CharacterAnimated({ text }) {
    const element = useRef(null)

    const { scrollYProgress } = useScroll({
        target: element,
        offset: ['start .85', 'start .25']
    })

    const words = text.split(" ");

    return (
        <p
            ref={element}
            className='paragraph'>
            {
                words.map((word, i) => {
                    const start = i / words.length;
                    const end = start + (1 / words.length)
                    return <Word key={i} range={[start, end]} progress={scrollYProgress}>{word}</Word>
                })
            }
        </p>
    )
}

function Word({ children, range, progress }) {
    const characters = children.split("")
    const amount = range[1] - range[0]
    const step = amount / children.length;
    return (
        <span className='word'>
            {
                characters.map((c, i) => {
                    const start = range[0] + (step * i)
                    const end = range[0] + (step * (i + 1))
                    return <Character range={[start, end]} progress={progress} key={i}>{c}</Character>
                })
            }
        </span>
    )
}

function Character({ children, range, progress }) {
    const opacity = useTransform(progress, range, [0, 1])
    return (
        <span>
            <span className="shadow">{children}</span>
            <motion.span style={{ opacity }}>
                {children}
            </motion.span>
        </span>
    )
}
