'use client'

import React from 'react'
import { Check, AlertCircle } from 'lucide-react'

type EditorCardProps = {
  text: string
  setText: (v: string) => void
  minChars: number
  maxChars: number
  textareaRef: React.RefObject<HTMLTextAreaElement | null>
}

export default function EditorCard({ text, setText, minChars, maxChars, textareaRef }: EditorCardProps) {
  const charCount = text.length
  const wordCount = text.trim() === '' ? 0 : text.trim().split(/\s+/).length
  
  const getStatus = () => {
    if (charCount < minChars) return 'below'
    if (charCount >= minChars && charCount <= maxChars) return 'perfect'
    return 'above'
  }

  const status = getStatus()
  const percentage = Math.min(100, Math.round((charCount / maxChars) * 100))

  const getProgressColor = () => {
    if (status === 'below') return 'from-gray-400 to-gray-500'
    if (status === 'perfect') return 'from-green-500 to-green-600'
    return 'from-orange-500 to-orange-600'
  }

  const getCharCountColor = () => {
    if (status === 'below') return 'text-gray-500'
    if (status === 'perfect') return 'text-green-600 dark:text-green-400'
    return 'text-orange-500 dark:text-orange-400'
  }

  return (
    <div className="flex flex-col h-full">
      <div className="px-6 py-4 bg-gray-50 dark:bg-gray-900/50">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className={`text-2xl font-bold ${getCharCountColor()}`}>
              {charCount}
            </span>
            <span className="text-sm opacity-60">/ {maxChars}</span>
            {status === 'perfect' && <Check size={20} className="text-green-600" />}
            {status === 'above' && <AlertCircle size={20} className="text-orange-500" />}
          </div>
          <span className="text-sm opacity-60">{wordCount} palabras</span>
        </div>
        
        <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
          <div 
            className={`h-full bg-gradient-to-r transition-all duration-300 ${getProgressColor()}`} 
            style={{ width: `${percentage}%` }} 
          />
        </div>
        
        <div className="mt-2 text-xs text-center font-medium">
          {status === 'below' && (
            <span className="text-gray-500">
              Faltan {minChars - charCount} caracteres
            </span>
          )}
          {status === 'perfect' && (
            <span className="text-green-600 dark:text-green-400">
              ✓ Rango perfecto alcanzado
            </span>
          )}
          {status === 'above' && (
            <span className="text-orange-500 dark:text-orange-400">
              +{charCount - maxChars} sobre el máximo
            </span>
          )}
        </div>
      </div>

      <div className="flex-1 relative">
        <textarea
          ref={textareaRef}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Escribe tu microcuento aquí. Recuerda: cada palabra debe contar. Piensa en personaje + deseo + conflicto..."
          className="w-full h-full resize-none p-6 bg-transparent focus:outline-none text-texto placeholder:text-gray-400 dark:placeholder:text-gray-600"
          style={{ minHeight: '350px' }}
          aria-label="Área de escritura de microcuentos"
        />
      </div>
    </div>
  )
}
