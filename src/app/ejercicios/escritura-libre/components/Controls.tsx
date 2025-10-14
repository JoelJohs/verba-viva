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
    <div className="flex items-center justify-between gap-4 mb-4">
      <div className="flex items-center gap-2">
        {presets.map(p => (
          <button
            key={p}
            onClick={() => { if (!running && !modalOpen) onSelect(p) }}
            disabled={running || modalOpen}
            className={`px-3 py-1 rounded-md text-sm font-medium ${p === minutes ? 'bg-azul-tinta text-white' : 'bg-gray-100 dark:bg-gray-700 text-texto'} ${running || modalOpen ? 'opacity-60 cursor-not-allowed' : ''}`}>
            {p} min
          </button>
        ))}
      </div>

      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2 px-4 py-2 rounded-md bg-azul-tinta text-white">
          <Timer />
          <div className="font-semibold">{String(mm).padStart(2,'0')}:{String(ss).padStart(2,'0')}</div>
        </div>

        <button
          onClick={() => { if (!running && !modalOpen) onStart() }}
          disabled={running || modalOpen}
          className={`flex items-center gap-2 px-4 py-2 rounded-md bg-azul-tinta text-white ${running || modalOpen ? 'opacity-60 cursor-not-allowed' : ''}`}>
          <Play size={16} />
          Iniciar
        </button>

        <button
          onClick={() => { if (!running && !modalOpen) onReset() }}
          disabled={running || modalOpen}
          className={`flex items-center gap-2 px-3 py-2 rounded-md bg-gray-100 dark:bg-gray-700 text-texto ${running || modalOpen ? 'opacity-60 cursor-not-allowed' : ''}`}>
          <RefreshCcw size={16} />
          Reiniciar
        </button>
      </div>
    </div>
  )
}
