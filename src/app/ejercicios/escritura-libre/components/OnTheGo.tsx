'use client'

import React from 'react'

export default function OnTheGo() {
  return (
    <section className="mt-8 bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
      <h3 className="text-lg font-semibold mb-2 font-merriweather text-azul-tinta">¿Y si te dan ganas de escribir cuando estás fuera?</h3>
      <p className="text-sm opacity-80 mb-3">Si estás en el transporte público, esperando a alguien o en cualquier momento fuera de casa, estas tácticas te permiten capturar ideas rápido y mantener un registro coherente.</p>

      <ul className="text-sm opacity-80 list-disc ml-5 space-y-2">
        <li><strong>Lleva una libreta exclusiva:</strong> tener una libreta solo para capturar ideas rápidas crea un registro físico similar al que guarda Verba Viva en la app. Así puedes revisar tu progreso con ambas fuentes.</li>
        <li><strong>Captura rápida:</strong> escribe frases cortas, palabras o incluso dibujos; no te preocupes por la forma. Luego transfiere o pega el contenido en Verba Viva cuando puedas.</li>
        <li><strong>Usa el modo avión/no distracciones:</strong> si necesitas concentración, cierra notificaciones y prioriza un mini ejercicio (1-3 minutos) para generar material.</li>
        <li><strong>Sistematiza:</strong> al final del día o la semana, pasa lo más valioso de la libreta a Verba Viva para centralizar tu progreso.</li>
      </ul>
    </section>
  )
}
