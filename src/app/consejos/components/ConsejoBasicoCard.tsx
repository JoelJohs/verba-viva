'use client'

import React from 'react'

type ConsejoBasicoCardProps = {
  emoji: string
  title: string
  description: string
}

export default function ConsejoBasicoCard({ emoji, title, description }: ConsejoBasicoCardProps) {
  return (
    <div className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-900/50 rounded-lg">
      <span className="text-2xl">{emoji}</span>
      <div className="flex-1">
        <h3 className="font-semibold text-sm mb-1">{title}</h3>
        <p className="text-xs opacity-80 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  )
}
