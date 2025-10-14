'use client'

import React from 'react'
import { LucideIcon } from 'lucide-react'

type ConsejosSectionProps = {
  title: string
  description: string
  icon: LucideIcon
  gradientFrom: string
  gradientTo: string
  iconColor: string
  children: React.ReactNode
}

export default function ConsejosSection({ 
  title, 
  description, 
  icon: Icon, 
  gradientFrom, 
  gradientTo, 
  iconColor,
  children 
}: ConsejosSectionProps) {
  return (
    <section className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden">
      <div 
        className={`bg-gradient-to-r ${gradientFrom} ${gradientTo} border-b border-gray-200 dark:border-gray-700 p-6`}
      >
        <div className="flex items-center gap-3">
          <Icon className={iconColor} size={28} />
          <div>
            <h2 className="text-xl font-bold font-merriweather text-azul-tinta">{title}</h2>
            <p className="text-sm opacity-70 mt-1">{description}</p>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        {children}
      </div>
    </section>
  )
}
