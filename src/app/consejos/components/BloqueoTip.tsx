'use client'

import React from 'react'

type BloqueoTipProps = {
  title: string
  description: string
}

export default function BloqueoTip({ title, description }: BloqueoTipProps) {
  return (
    <div className="border-l-4 border-azul-tinta pl-4">
      <h3 className="font-semibold text-sm mb-2">{title}</h3>
      <p className="text-xs opacity-80 leading-relaxed">
        {description}
      </p>
    </div>
  )
}
