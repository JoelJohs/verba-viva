'use client'

import React from 'react'
import { Target } from 'lucide-react'

type DailyGoalCompactProps = {
  goal: string
  hint?: string
  intensity: 'calentamiento' | 'fuerza'
}

export default function DailyGoalCompact({ goal, hint, intensity }: DailyGoalCompactProps) {
  return (
    <div className={`flex items-start gap-3 p-4 rounded-lg border ${
      intensity === 'calentamiento' 
        ? 'bg-green-50/50 dark:bg-green-900/10 border-green-200/50 dark:border-green-800/30' 
        : 'bg-orange-50/50 dark:bg-orange-900/10 border-orange-200/50 dark:border-orange-800/30'
    }`}>
      <Target 
        className={`flex-shrink-0 mt-0.5 ${
          intensity === 'calentamiento' 
            ? 'text-green-600 dark:text-green-400' 
            : 'text-orange-600 dark:text-orange-400'
        }`} 
        size={18} 
      />
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-texto mb-1">
          <span className="opacity-70">Meta de hoy:</span> {goal}
        </p>
        {hint && (
          <p className="text-xs opacity-60 italic">
            {hint}
          </p>
        )}
      </div>
    </div>
  )
}
