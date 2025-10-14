'use client'

import React from 'react'
import { Smartphone } from 'lucide-react'

export default function OnTheGo() {
  return (
    <section className="mt-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10 p-6 rounded-xl border border-blue-200/50 dark:border-blue-800/30">
      <div className="flex items-start gap-3 mb-4">
        <Smartphone className="text-azul-tinta flex-shrink-0 mt-0.5" size={20} />
        <div>
          <h3 className="text-lg font-semibold font-merriweather text-azul-tinta mb-2">
            ¿Y si te dan ganas de escribir cuando estás fuera?
          </h3>
          <p className="text-sm opacity-80 mb-4 leading-relaxed">
            Si estás en el transporte, esperando a alguien o fuera de casa, estas tácticas te permiten capturar ideas rápido.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white/50 dark:bg-gray-800/50 p-4 rounded-lg">
          <h4 className="font-semibold text-sm mb-2">📓 Libreta exclusiva</h4>
          <p className="text-xs opacity-80 leading-relaxed">
            Lleva una libreta solo para ideas rápidas. Crea un registro físico similar al de Verba Viva.
          </p>
        </div>

        <div className="bg-white/50 dark:bg-gray-800/50 p-4 rounded-lg">
          <h4 className="font-semibold text-sm mb-2">⚡ Captura rápida</h4>
          <p className="text-xs opacity-80 leading-relaxed">
            Frases cortas, palabras o dibujos. No te preocupes por la forma, luego transfiere a Verba Viva.
          </p>
        </div>

        <div className="bg-white/50 dark:bg-gray-800/50 p-4 rounded-lg">
          <h4 className="font-semibold text-sm mb-2">✈️ Modo avión</h4>
          <p className="text-xs opacity-80 leading-relaxed">
            Cierra notificaciones y prioriza un mini ejercicio (1-3 minutos) para generar material.
          </p>
        </div>

        <div className="bg-white/50 dark:bg-gray-800/50 p-4 rounded-lg">
          <h4 className="font-semibold text-sm mb-2">🔄 Sistematiza</h4>
          <p className="text-xs opacity-80 leading-relaxed">
            Al final del día o semana, pasa lo valioso de tu libreta a Verba Viva para centralizar.
          </p>
        </div>
      </div>
    </section>
  )
}
