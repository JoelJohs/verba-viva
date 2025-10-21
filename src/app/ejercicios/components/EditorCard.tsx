'use client'

import React from 'react'

type EditorCardProps = {
  text: string
  setText: (v: string) => void
  textareaRef: React.RefObject<HTMLTextAreaElement | null>
  placeholder: string
  ariaLabel: string
  minHeight?: string
  header?: React.ReactNode
  footer?: React.ReactNode
}

export default function EditorCard({ 
  text, 
  setText, 
  textareaRef, 
  placeholder, 
  ariaLabel, 
  minHeight = '400px', 
  header, 
  footer 
}: EditorCardProps) {
  return (
    <div className="flex flex-col h-full">
      {header}

      <div className="flex-1 relative">
        <textarea
          ref={textareaRef}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={placeholder}
          className="w-full h-full resize-none p-6 bg-transparent focus:outline-none text-texto placeholder:text-gray-400 dark:placeholder:text-gray-600"
          style={{ minHeight }}
          aria-label={ariaLabel}
        />
      </div>

      {footer}
    </div>
  )
}
