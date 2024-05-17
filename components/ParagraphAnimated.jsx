"use client"
import React, { useRef } from 'react'
import { useScroll, motion } from 'framer-motion'

export default function ParagraphAnimated({ text }) {
  const element = useRef(null)

  const { scrollYProgress } = useScroll({
    target: element,
    offset: ['start .85', 'start .25']
  })


  return (
    <motion.p
      style={{ opacity: scrollYProgress }}
      ref={element}
      className='paragraph'>
      {text}
    </motion.p>
  )
}