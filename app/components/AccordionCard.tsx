'use client'
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Less, More } from './AccordionSvgs'

interface Props {
  card: {
    title: string
    points: string[]
  }
  index: number
}

export default function AccordionCard({ card, index }: Props) {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <button
      onClick={() => setIsOpen((prev) => !prev)}
      className="flex flex-col gap-5 rounded-xl bg-gray-50 px-7 py-4 shadow-xl"
    >
      <div className="flex items-center justify-between gap-5 font-bold">
        <div className="flex items-center gap-5 ">
          <span className="text-gray-200">
            {index + 1 < 10 ? '0' + (index + 1) : index + 1}
          </span>
          <h5>{card.title}</h5>
        </div>
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={isOpen ? 'minus~' + index : 'plus~' + index}
            initial={{
              rotate: isOpen ? -90 : 90,
            }}
            animate={{
              zIndex: 1,
              rotate: 0,
              transition: {
                type: 'tween',
                duration: 0.15,
                ease: 'circOut',
              },
            }}
            exit={{
              zIndex: 0,
              rotate: isOpen ? -90 : 90,
              transition: {
                type: 'tween',
                duration: 0.15,
                ease: 'circIn',
              },
            }}
          >
            {isOpen ? <Less /> : <More />}
          </motion.div>
        </AnimatePresence>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            key={index}
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: 'auto',
              opacity: 1,
              transition: {
                height: {
                  duration: 0.4,
                },
                opacity: {
                  duration: 0.25,
                  delay: 0.25,
                },
              },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                height: {
                  duration: 0.4,
                },
                opacity: {
                  duration: 0.15,
                },
              },
            }}
            className="font-light"
          >
            {card.points.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </button>
  )
}
