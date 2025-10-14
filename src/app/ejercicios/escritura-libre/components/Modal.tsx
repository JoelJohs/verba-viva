'use client'

import React from 'react'

type ModalProps = {
  isOpen: boolean
  title?: string
  onClose: () => void
  children?: React.ReactNode
}

export default function Modal({ isOpen, title, onClose, children }: ModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-lg max-w-md w-full p-6">
        {title && <h2 className="text-lg font-semibold mb-2">{title}</h2>}
        <div className="text-sm mb-4">{children}</div>
        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="px-3 py-2 rounded-md bg-gray-100 dark:bg-gray-700">Cerrar</button>
          <button onClick={onClose} className="px-3 py-2 rounded-md bg-azul-tinta text-white">Guardar</button>
        </div>
      </div>
    </div>
  )
}
