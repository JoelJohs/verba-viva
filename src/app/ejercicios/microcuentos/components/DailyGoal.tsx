'use client'

import React from 'react'
import { Target } from 'lucide-react'

export default function DailyGoal() {
  return (
    <section className="mt-8 bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
      <div className="flex items-center gap-2 mb-3">
        <Target className="text-azul-tinta" size={24} />
        <h3 className="text-lg font-semibold font-merriweather text-azul-tinta">Tu Meta de Hoy</h3>
      </div>
      <p className="text-sm opacity-80 mb-3">
        Escribe una historia de <strong>50 a 100 palabras</strong> sobre el tema <strong>&quot;un objeto encontrado&quot;</strong>.
      </p>
      <p className="text-xs opacity-70">
        Piensa en: ¿Quién lo encontró? ¿Qué significa para esa persona? ¿Qué consecuencias trae? Recuerda los tres pilares: personaje + deseo + conflicto.
      </p>
    </section>
  )
}
