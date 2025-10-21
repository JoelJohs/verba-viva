'use client'

import React from 'react'
import Link from 'next/link'
import { ExternalLink } from 'lucide-react'

export type InfoPanelSection = {
  title: string
  content: React.ReactNode
}

type InfoPanelProps = {
  sections: InfoPanelSection[]
}

export default function InfoPanel({ sections }: InfoPanelProps) {
  return (
    <aside className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm h-fit sticky top-6">
      <div className="p-6 space-y-6">
        {sections.map((section, index) => (
          <div key={index} className={index > 0 ? "pt-4 border-t border-gray-200 dark:border-gray-700" : ""}>
            <h3 className="text-base font-semibold mb-2 font-merriweather text-azul-tinta">{section.title}</h3>
            <div className="text-sm opacity-80 leading-relaxed">
              {section.content}
            </div>
          </div>
        ))}

        <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
          <Link 
            href="/consejos" 
            className="flex items-center gap-2 text-sm text-azul-tinta hover:text-naranja-quemado transition-colors font-medium"
          >
            <ExternalLink size={16} />
            Ver más consejos y técnicas
          </Link>
        </div>
      </div>
    </aside>
  )
}
