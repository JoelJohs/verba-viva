'use client'

import React from 'react'

type Mode = {
  name: string
  min: number
  max: number
  difficulty: string
}

type ModesSelectorProps = {
  modes: Mode[]
  selectedMode: Mode
  onSelectMode: (mode: Mode) => void
  disabled?: boolean
}

export default function ModesSelector({ modes, selectedMode, onSelectMode, disabled = false }: ModesSelectorProps) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-2 opacity-80">Selecciona la intensidad:</label>
      <div className="flex gap-2 flex-wrap">
        {modes.map((mode) => {
          const isSelected = selectedMode.name === mode.name
          return (
            <button
              key={mode.name}
              onClick={() => !disabled && onSelectMode(mode)}
              disabled={disabled}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                isSelected
                  ? 'bg-azul-tinta text-white ring-2 ring-azul-tinta ring-offset-2'
                  : 'bg-gray-100 dark:bg-gray-700 text-texto hover:bg-gray-200 dark:hover:bg-gray-600'
              } ${disabled ? 'opacity-60 cursor-not-allowed' : ''}`}
            >
              <div className="font-semibold">{mode.name}</div>
              <div className="text-xs opacity-80 mt-1">{mode.min}-{mode.max} caracteres</div>
              <div className="text-xs opacity-70">{mode.difficulty}</div>
            </button>
          )
        })}
      </div>
    </div>
  )
}
