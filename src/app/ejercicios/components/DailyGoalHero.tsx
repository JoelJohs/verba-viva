'use client'

import React from 'react'
import { Target } from 'lucide-react'

type DailyGoalHeroProps = {
  title: string
  description: string
  hint?: string
  intensity: 'calentamiento' | 'fuerza'
}

export default function DailyGoalHero({ title, description, hint, intensity }: DailyGoalHeroProps) {
  return (
    <div className={`relative overflow-hidden rounded-lg p-6 mb-6 border-2 ${
      intensity === 'calentamiento' 
        ? 'bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border-green-200 dark:border-green-800' 
        : 'bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 border-orange-200 dark:border-orange-800'
    }`}>
      <div className="flex items-start gap-4">
        <div className={`flex-shrink-0 p-3 rounded-full ${
          intensity === 'calentamiento'
            ? 'bg-green-200 dark:bg-green-800'
            : 'bg-orange-200 dark:bg-orange-800'
        }`}>
          <Target className={intensity === 'calentamiento' ? 'text-green-700 dark:text-green-200' : 'text-orange-700 dark:text-orange-200'} size={24} />
        </div>
        
        <div className="flex-1">
          <h2 className="text-xl font-bold font-merriweather text-azul-tinta mb-2">
            {title}
          </h2>
          <p className="text-sm mb-2 opacity-90">
            {description}
          </p>
          {hint && (
            <p className="text-xs opacity-70 italic mt-2">
              💡 {hint}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
