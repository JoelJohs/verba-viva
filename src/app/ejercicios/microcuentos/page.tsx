'use client'

import { useRef, useState } from 'react'
import EditorCard from './components/EditorCard'
import InfoPanel from './components/InfoPanel'
import ModesSelector from './components/ModesSelector'
import SaveModal from '../escritura-libre/components/SaveModal'
import DailyGoalCompact from '@/app/components/exercises/DailyGoalCompact'
import IntensityBadge from '@/app/components/exercises/IntensityBadge'

type Mode = {
  name: string
  min: number
  max: number
  difficulty: string
}

const modes: Mode[] = [
  { name: 'Intenso', min: 50, max: 100, difficulty: 'Difícil - Cada palabra cuenta' },
  { name: 'Estándar', min: 100, max: 200, difficulty: 'Equilibrado' },
  { name: 'Expandido', min: 150, max: 250, difficulty: 'Más espacio para desarrollar' }
]

export default function MicrocuentosPage() {
    const [selectedMode, setSelectedMode] = useState<Mode>(modes[1])
    const [text, setText] = useState<string>('')
    const [modalOpen, setModalOpen] = useState<boolean>(false)
    const [isWriting, setIsWriting] = useState<boolean>(false)
    const textareaRef = useRef<HTMLTextAreaElement | null>(null)

    const handleStart = () => {
        setIsWriting(true)
        textareaRef.current?.focus()
    }

    const handleFinish = () => {
        if (text.length >= selectedMode.min) {
            setModalOpen(true)
            setIsWriting(false)
        }
    }

    const handleReset = () => {
        if (!isWriting && !modalOpen) {
            setText('')
            setIsWriting(false)
        }
    }

    return (
        <div className="max-w-7xl mx-auto py-6 px-4">
            <div className="mb-6">
                <div className="flex items-start justify-between mb-4">
                    <div>
                        <h1 className="text-3xl font-bold font-merriweather text-azul-tinta mb-2">Microcuentos</h1>
                        <p className="text-sm opacity-70 mb-3">Historias completas en espacios mínimos. Cada palabra cuenta.</p>
                        <IntensityBadge type="fuerza" duration="30-60 min" />
                    </div>
                </div>
                
                <DailyGoalCompact 
                    goal='Escribe un microcuento sobre "un objeto encontrado".'
                    hint="¿Quién lo encontró? ¿Qué significa para esa persona? ¿Qué consecuencias trae? Usa la técnica del iceberg."
                    intensity="fuerza"
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-4">
                    <div className={`bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm transition-all ${modalOpen ? 'ring-2 ring-azul-tinta/50 shadow-lg' : ''}`}>
                        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                            <ModesSelector 
                                modes={modes} 
                                selectedMode={selectedMode} 
                                onSelectMode={setSelectedMode}
                                disabled={isWriting || modalOpen}
                            />

                            <div className="flex items-center gap-2 mt-4">
                                {!isWriting && text.length === 0 && (
                                    <button 
                                        onClick={handleStart}
                                        className="px-5 py-2.5 rounded-lg bg-azul-tinta text-white font-medium hover:bg-naranja-quemado transition-colors shadow-sm"
                                    >
                                        Comenzar a Escribir
                                    </button>
                                )}
                                
                                {isWriting && text.length >= selectedMode.min && (
                                    <button 
                                        onClick={handleFinish}
                                        className="px-5 py-2.5 rounded-lg bg-green-600 text-white font-medium hover:bg-green-700 transition-colors shadow-sm"
                                    >
                                        Finalizar
                                    </button>
                                )}

                                {!isWriting && !modalOpen && text.length > 0 && (
                                    <button 
                                        onClick={handleReset}
                                        className="px-5 py-2.5 rounded-lg bg-gray-100 dark:bg-gray-700 text-texto font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                                    >
                                        Reiniciar
                                    </button>
                                )}
                            </div>
                        </div>

                        <EditorCard 
                            text={text} 
                            setText={setText} 
                            minChars={selectedMode.min} 
                            maxChars={selectedMode.max}
                            textareaRef={textareaRef} 
                        />
                    </div>
                </div>

                <div className="lg:col-span-1">
                    <InfoPanel />
                </div>
            </div>

            <SaveModal 
                isOpen={modalOpen} 
                onClose={() => setModalOpen(false)} 
                onSave={() => {/* placeholder for save action */}} 
                title="¿Deseas guardar tu microcuento?"
            >
                <p>Guardar tu microcuento te permite construir un portafolio de historias breves y ver tu evolución en el dominio de la economía del lenguaje.</p>
                <p className="mt-2"><strong>¿Por qué guardar?</strong> Al revisar tus microcuentos anteriores podrás identificar tus fortalezas narrativas, patrones temáticos y ver cómo mejora tu capacidad para condensar historias completas en espacios mínimos.</p>
            </SaveModal>
        </div>
    )
}
