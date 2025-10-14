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
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 h-full flex flex-col">
      <div>
        <div className="h-2 bg-gray-200 dark:bg-gray-900 rounded-full overflow-hidden mb-4">
          <div className="h-full bg-azul-tinta transition-all" style={{ width: `${pct}%` }} />
        </div>
      </div>

      <textarea
        ref={textareaRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Escribe sin parar. Si te quedas en blanco, escribe 'no sé qué escribir' hasta que surja algo..."
        className="w-full flex-1 resize-none p-4 bg-transparent focus:outline-none text-texto min-h-[40vh]"
        aria-label="Área de escritura libre"
      />

      <div className="mt-4 flex items-center justify-between text-sm opacity-80">
        <div>{text.length} caracteres</div>
        <div>{pct}%</div>
      </div>
    </div>
  )
}
