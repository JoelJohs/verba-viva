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
        Completa una sesión de <strong>5 a 15 minutos</strong> escribiendo sin detenerte. No edites, no corrijas, solo escribe.
      </p>
      <p className="text-xs opacity-70">
        El objetivo es generar volumen y silenciar al crítico interno. Si te quedas en blanco, escribe &quot;no sé qué escribir&quot; hasta que surja algo nuevo.
      </p>
    </section>
  )
}
