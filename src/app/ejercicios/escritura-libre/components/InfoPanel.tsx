'use client'

import React from 'react'

export default function InfoPanel() {
  return (
    <aside className="order-first lg:order-last bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 h-full">
      <h3 className="text-lg font-semibold mb-2 font-merriweather text-azul-tinta">¿Por qué funciona?</h3>
      <p className="text-sm opacity-80 mb-4">Nuestro cerebro está entrenado para juzgar y estructurar, lo que causa el &quot;bloqueo&quot;. La escritura libre rompe esa barrera: al no parar, le quitas poder al crítico interno, generas momentum y le demuestras a tu mente que siempre hay algo que decir.</p>

      <h3 className="text-lg font-semibold mb-2 font-merriweather text-azul-tinta">Cómo hacerlo (en la app)</h3>
      <ol className="text-sm opacity-80 list-decimal ml-5 mb-4">
        <li>Elige un preset o ajusta el temporizador (empieza con 5 minutos).</li>
        <li>Pulsa <strong>Iniciar</strong> y deja el editor en blanco: este espacio es para volcar todo lo que venga a la mente.</li>
        <li>Escribe continuamente sin detenerte; no edites ni vuelvas atrás durante la sesión.</li>
        <li>Si te quedas en blanco, escribe &quot;no sé qué escribir&quot; hasta que aparezca una idea nueva.</li>
        <li>Cuando termine el tiempo, revisa tu texto fuera de la sesión si quieres editarlo o guardarlo en tu registro.</li>
      </ol>

      <h3 className="text-lg font-semibold mb-2 font-merriweather text-azul-tinta">Consejos</h3>
      <ul className="text-sm opacity-80 list-disc ml-5">
        <li>Empieza con sesiones cortas y sube progresivamente.</li>
        <li>Acepta la mala primera versión: la creatividad necesita volumen.</li>
        <li>Prueba escribir con música de fondo si te ayuda a desconectar.</li>
      </ul>
    </aside>
  )
}
