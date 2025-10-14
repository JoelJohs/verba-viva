'use client'

import React from 'react'
import { LucideIcon } from 'lucide-react'

type ConsejoCardProps = {
  icon: LucideIcon
  title: string
  description: string
}

export default function ConsejoCard({ icon: Icon, title, description }: ConsejoCardProps) {
  return (
    <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
      <h3 className="font-semibold text-sm mb-2 flex items-center gap-2">
        <Icon size={16} className="text-azul-tinta" />
        {title}
      </h3>
      <p className="text-xs opacity-80 leading-relaxed">
        {description}
      </p>
    </div>
  )
}
