"use client"
import React, { useRef } from 'react'
import { useScroll, motion, useTransform } from 'framer-motion'

export default function WordAnimated({ text }) {



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
    const opacity = useTransform(progress, range, [0, 1])
    return (
        <span className='word'>
            <span className="shadow">{children}</span>
            <motion.span
                style={{ opacity }} >
                {children}
            </motion.span>
        </span>
    )
}