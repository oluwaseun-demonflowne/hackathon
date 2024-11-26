"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { CalendarDays } from 'lucide-react'

interface Event {
  time: string
  title: string
  description: string
}

interface DayTimelineProps {
  date: string
  events: Event[]
}

export default function DayTimeline({ date, events }: DayTimelineProps) {
  return (
    <div className="max-w-2xl mx-auto p-4 bg-white rounded-xl shadow-lg">
      <div className="flex items-center mb-6">
        <CalendarDays className="w-8 h-8 text-[#6B705C] mr-2" />
        <h2 className="text-2xl font-semibold text-[#3c3b3a]">{date}</h2>
      </div>
      <div className="relative">
        {events.map((event, index) => (
          <TimelineEvent key={index} event={event} isLast={index === events.length - 1} />
        ))}
      </div>
    </div>
  )
}

function TimelineEvent({ event, isLast }: { event: Event; isLast: boolean }) {
  return (
    <div className="mb-8 flex">
      <div className="flex flex-col items-center mr-4">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-4 h-4 rounded-full bg-[#6B705C]"
        />
        {!isLast && <div className="w-0.5 h-full bg-[#A5A58D] mt-2" />}
      </div>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-[#FEFAE0] p-4 rounded-lg shadow-md flex-grow hover:shadow-lg transition-shadow duration-300"
      >
        <time className="text-sm font-semibold text-[#6B705C] mb-1 block">{event.time}</time>
        <h3 className="text-lg font-bold text-[#3c3b3a] mb-2">{event.title}</h3>
        <p className="text-[#3c3b3a]">{event.description}</p>
      </motion.div>
    </div>
  )
}

