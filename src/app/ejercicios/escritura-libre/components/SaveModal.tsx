'use client'

import React, { useEffect, useRef } from 'react'

type SaveModalProps = {
  isOpen: boolean
  title?: string
  onClose: () => void
  onSave?: () => void
  children?: React.ReactNode
}

export default function SaveModal({ isOpen, title, onClose, onSave, children }: SaveModalProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const dialogRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!isOpen) return
    // play chime if available
    if (!audioRef.current) audioRef.current = new Audio('/sounds/chime.mp3')
    audioRef.current.play().catch(() => {
      // ignore play errors (autoplay policies)
    })

    // add a small entrance animation
    if (dialogRef.current) {
      dialogRef.current.animate(
        [
          { transform: 'scale(.95)', opacity: 0 },
          { transform: 'scale(1.02)', opacity: 1 },
          { transform: 'scale(1)', opacity: 1 },
        ],
        { duration: 420, easing: 'cubic-bezier(.2,.9,.3,1)' }
      )
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      <div ref={dialogRef} className="relative bg-white dark:bg-gray-800 rounded-lg shadow-lg max-w-md w-full p-6 border border-gray-200 dark:border-gray-700">
        {title && <h2 className="text-lg font-semibold mb-2">{title}</h2>}

        <div className="text-sm mb-4">{children}</div>

        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="px-3 py-2 rounded-md bg-gray-100 dark:bg-gray-700">Cerrar</button>
          <button onClick={() => { onSave?.(); onClose() }} className="px-3 py-2 rounded-md bg-azul-tinta text-white">Guardar</button>
        </div>
      </div>
    </div>
  )
}
