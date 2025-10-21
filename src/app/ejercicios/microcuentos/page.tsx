'use client'

import { useRef, useState } from 'react'
import { Check, AlertCircle } from 'lucide-react'
import EditorCard from '@/app/ejercicios/components/EditorCard'
import InfoPanel, { InfoPanelSection } from '@/app/ejercicios/components/InfoPanel'
import ModesSelector from './components/ModesSelector'
import SaveModal from '@/app/ejercicios/components/SaveModal'
import DailyGoalCompact from '@/app/ejercicios/components/DailyGoalCompact'
import IntensityBadge from '@/app/ejercicios/components/IntensityBadge'

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

const infoPanelSections: InfoPanelSection[] = [
    {
        title: 'El Objetivo',
        content: (
            <p>
                Dominar la economía del lenguaje y entender la esencia de una historia completa en un espacio mínimo.
            </p>
        )
    },
    {
        title: '¿Por qué funciona?',
        content: (
            <p>
                Te obliga a identificar los tres pilares de cualquier relato: un personaje con un deseo, un conflicto que se lo impide y una resolución. Es un entrenamiento intensivo en estructura narrativa.
            </p>
        )
    },
    {
        title: '¿Cómo hacerlo?',
        content: (
            <p className="mb-3">
                Piensa en una imagen potente o una frase final impactante y construye hacia atrás. Usa la técnica del &quot;iceberg&quot;: sugiere una historia más grande.
            </p>
        )
    },
    {
        title: 'Consejos',
        content: (
            <ul className="list-disc pl-4 space-y-2">
                <li>Empieza por el final</li>
                <li>Cada palabra debe tener un propósito</li>
                <li>Sugiere más de lo que dices</li>
                <li>Los tres pilares: personaje + deseo + conflicto</li>
            </ul>
        )
    }
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

    const charCount = text.length
    const wordCount = text.trim() === '' ? 0 : text.trim().split(/\s+/).length
    
    const getStatus = () => {
        if (charCount < selectedMode.min) return 'below'
        if (charCount >= selectedMode.min && charCount <= selectedMode.max) return 'perfect'
        return 'above'
    }

    const status = getStatus()
    const percentage = Math.min(100, Math.round((charCount / selectedMode.max) * 100))

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

    const editorHeader = (
        <div className="px-6 py-4 bg-gray-50 dark:bg-gray-900/50 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                    <span className={`text-2xl font-bold ${getCharCountColor()}`}>
                        {charCount}
                    </span>
                    <span className="text-sm opacity-60">/ {selectedMode.max}</span>
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
                        Faltan {selectedMode.min - charCount} caracteres
                    </span>
                )}
                {status === 'perfect' && (
                    <span className="text-green-600 dark:text-green-400">
                        ✓ Rango perfecto alcanzado
                    </span>
                )}
                {status === 'above' && (
                    <span className="text-orange-500 dark:text-orange-400">
                        +{charCount - selectedMode.max} sobre el máximo
                    </span>
                )}
            </div>
        </div>
    )

    const editorFooter = (
        <div className="px-6 py-3 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50">
            <div className="flex items-center justify-end gap-2">
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
    )

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

                <div className="mb-6">
                    <ModesSelector 
                        modes={modes} 
                        selectedMode={selectedMode} 
                        onSelectMode={setSelectedMode}
                        disabled={isWriting || modalOpen}
                    />
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
                        <EditorCard 
                            text={text} 
                            setText={setText} 
                            textareaRef={textareaRef}
                            placeholder="Escribe tu microcuento aquí. Recuerda: cada palabra debe contar. Piensa en personaje + deseo + conflicto..."
                            ariaLabel="Área de escritura de microcuentos"
                            minHeight="350px"
                            header={editorHeader}
                            footer={editorFooter}
                        />
                    </div>
                </div>

                <div className="lg:col-span-1">
                    <InfoPanel sections={infoPanelSections} />
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
