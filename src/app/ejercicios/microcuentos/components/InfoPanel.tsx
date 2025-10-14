'use client'

import React from 'react'
import Link from 'next/link'
import { ExternalLink } from 'lucide-react'

export default function InfoPanel() {
  return (
    <aside className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm h-fit sticky top-6">
      <div className="p-6 space-y-6">
        <div>
          <h3 className="text-base font-semibold mb-2 font-merriweather text-azul-tinta">El Objetivo</h3>
          <p className="text-sm opacity-80 leading-relaxed">
            Dominar la economía del lenguaje y entender la esencia de una historia completa en un espacio mínimo.
          </p>
        </div>

        <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
          <h3 className="text-base font-semibold mb-2 font-merriweather text-azul-tinta">¿Por qué funciona?</h3>
          <p className="text-sm opacity-80 leading-relaxed">
            Te obliga a identificar los tres pilares de cualquier relato: un personaje con un deseo, un conflicto que se lo impide y una resolución. Es un entrenamiento intensivo en estructura narrativa.
          </p>
        </div>

        <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
          <h3 className="text-base font-semibold mb-3 font-merriweather text-azul-tinta">¿Cómo hacerlo?</h3>
          <p className="text-sm opacity-80 leading-relaxed mb-3">
            Piensa en una imagen potente o una frase final impactante y construye hacia atrás. Usa la técnica del &quot;iceberg&quot;: sugiere una historia más grande.
          </p>
        </div>

        <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
          <h3 className="text-base font-semibold mb-3 font-merriweather text-azul-tinta">Consejos</h3>
          <ul className="text-sm opacity-80 space-y-2 list-disc pl-4">
            <li>Empieza por el final</li>
            <li>Cada palabra debe tener un propósito</li>
            <li>Sugiere más de lo que dices</li>
            <li>Los tres pilares: personaje + deseo + conflicto</li>
          </ul>
        </div>

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
