'use client'

import React from 'react'
import { Play, RefreshCcw, Timer } from 'lucide-react'

type ControlsProps = {
  presets: number[]
  minutes: number
  onSelect: (m: number) => void
  onStart: () => void
  onReset: () => void
  secondsLeft: number
  running?: boolean
  modalOpen?: boolean
}

export default function Controls({ presets, minutes, onSelect, onStart, onReset, secondsLeft, running = false, modalOpen = false }: ControlsProps) {
  const mm = Math.floor(secondsLeft / 60)
  const ss = secondsLeft % 60

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-2 opacity-80">Duración de la sesión:</label>
        <div className="flex items-center gap-2">
          {presets.map(p => (
            <button
              key={p}
              onClick={() => { if (!running && !modalOpen) onSelect(p) }}
              disabled={running || modalOpen}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                p === minutes 
                  ? 'bg-azul-tinta text-white shadow-sm ring-2 ring-azul-tinta ring-offset-2' 
                  : 'bg-gray-100 dark:bg-gray-700 text-texto hover:bg-gray-200 dark:hover:bg-gray-600'
              } ${running || modalOpen ? 'opacity-60 cursor-not-allowed' : ''}`}>
              {p} min
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-azul-tinta text-white shadow-sm">
          <Timer size={18} />
          <div className="font-mono text-lg font-semibold">
            {String(mm).padStart(2,'0')}:{String(ss).padStart(2,'0')}
          </div>
        </div>

        <button
          onClick={() => { if (!running && !modalOpen) onStart() }}
          disabled={running || modalOpen}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium transition-colors shadow-sm ${
            running || modalOpen 
              ? 'bg-gray-300 dark:bg-gray-600 text-gray-500 cursor-not-allowed' 
              : 'bg-azul-tinta text-white hover:bg-naranja-quemado'
          }`}>
          <Play size={16} />
          Iniciar
        </button>

        <button
          onClick={() => { if (!running && !modalOpen) onReset() }}
          disabled={running || modalOpen}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-medium transition-colors ${
            running || modalOpen 
              ? 'bg-gray-100 dark:bg-gray-700 text-gray-400 cursor-not-allowed' 
              : 'bg-gray-100 dark:bg-gray-700 text-texto hover:bg-gray-200 dark:hover:bg-gray-600'
          }`}>
          <RefreshCcw size={16} />
          Reiniciar
        </button>
      </div>
    </div>
  )
}
