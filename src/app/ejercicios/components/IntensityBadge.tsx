'use client'

import React from 'react'
import { Flame, Zap } from 'lucide-react'

type IntensityBadgeProps = {
  type: 'calentamiento' | 'fuerza'
  duration?: string
}

export default function IntensityBadge({ type, duration }: IntensityBadgeProps) {
  const isCalentamiento = type === 'calentamiento'
  
  return (
    <div className="flex items-center gap-2">
      <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium ${
        isCalentamiento 
          ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300' 
          : 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300'
      }`}>
        {isCalentamiento ? <Zap size={12} /> : <Flame size={12} />}
        {isCalentamiento ? 'Calentamiento' : 'Fuerza'}
      </span>
      {duration && (
        <span className="text-xs opacity-70">{duration}</span>
      )}
    </div>
  )
}
