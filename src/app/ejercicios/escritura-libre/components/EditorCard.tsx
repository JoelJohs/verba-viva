'use client'

import React from 'react'

type EditorCardProps = {
  text: string
  setText: (v: string) => void
  pct: number
  textareaRef: React.RefObject<HTMLTextAreaElement | null>
}

export default function EditorCard({ text, setText, pct, textareaRef }: EditorCardProps) {
  return (
    <div className="flex flex-col h-full">
      <div className="px-6 py-3 bg-gray-50 dark:bg-gray-900/50">
        <div className="flex items-center justify-between text-sm mb-2">
          <span className="opacity-70">Progreso de la sesión</span>
          <span className="font-semibold text-azul-tinta">{pct}%</span>
        </div>
        <div className="h-1.5 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-azul-tinta to-verde-oliva transition-all duration-300" 
            style={{ width: `${pct}%` }} 
          />
        </div>
      </div>

      <div className="flex-1 relative">
        <textarea
          ref={textareaRef}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Comienza a escribir aquí... No te detengas, no edites, solo deja fluir las palabras..."
          className="w-full h-full resize-none p-6 bg-transparent focus:outline-none text-texto placeholder:text-gray-400 dark:placeholder:text-gray-600"
          style={{ minHeight: '400px' }}
          aria-label="Área de escritura libre"
        />
      </div>

      <div className="px-6 py-3 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50">
        <div className="flex items-center justify-between text-xs">
          <span className="opacity-70">{text.length} caracteres</span>
          <span className="opacity-70">
            {text.trim() === '' ? 0 : text.trim().split(/\s+/).length} palabras
          </span>
        </div>
      </div>
    </div>
  )
}
