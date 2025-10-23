'use client'

import { useRef, useState } from 'react'
import { Check, AlertCircle } from 'lucide-react'
import EditorCard from '@/app/ejercicios/components/EditorCard'
import InfoPanel, { InfoPanelSection } from '@/app/ejercicios/components/InfoPanel'
import SaveModal from '@/app/ejercicios/components/SaveModal'
import DailyGoalCompact from '@/app/ejercicios/components/DailyGoalCompact'
import IntensityBadge from '@/app/ejercicios/components/IntensityBadge'

const infoPanelSections: InfoPanelSection[] = [
    {
        title: 'El Objetivo',
        content: (
            <p>
                Construir personajes tridimensionales desde su propia voz. Un diario revela contradicciones, miedos, deseos ocultos y la brecha entre lo que el personaje dice y lo que realmente siente.
            </p>
        )
    },
    {
        title: '¿Por qué funciona?',
        content: (
            <p>
                Los mejores personajes no son perfectos ni coherentes. Este ejercicio te obliga a pensar desde dentro del personaje, revelando su psicología de forma natural. Un diario muestra cómo una persona se miente a sí misma, racionaliza, o ignora verdades incómodas.
            </p>
        )
    },
    {
        title: '¿Cómo hacerlo?',
        content: (
            <ol className="list-decimal pl-4 space-y-2">
                <li>Elige un personaje (puede ser de una historia tuya o inventado)</li>
                <li>Define un momento específico de su vida (crisis, decisión importante)</li>
                <li>Escribe en primera persona, desde su perspectiva emocional</li>
                <li>Incluye detalles mundanos mezclados con preocupaciones profundas</li>
                <li>Deja que el personaje se contradiga, mienta o evite temas</li>
            </ol>
        )
    },
    {
        title: 'Consejos',
        content: (
            <ul className="list-disc pl-4 space-y-2">
                <li>El personaje debe sonar como una persona real, no como un narrador</li>
                <li>Incluye referencias a eventos que el lector no conoce (da profundidad)</li>
                <li>Usa el lenguaje y ritmo que usaría ese personaje específico</li>
                <li>Lo más interesante es lo que el personaje NO dice directamente</li>
            </ul>
        )
    }
]

export default function DiarioPersonajePage() {
    const [text, setText] = useState<string>('')
    const [modalOpen, setModalOpen] = useState<boolean>(false)
    const [isWriting, setIsWriting] = useState<boolean>(false)
    const textareaRef = useRef<HTMLTextAreaElement | null>(null)

    const minWords = 300
    const targetWords = 600

    const handleStart = () => {
        setIsWriting(true)
        textareaRef.current?.focus()
    }

    const handleFinish = () => {
        if (wordCount >= minWords) {
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
        if (wordCount < minWords) return 'below'
        if (wordCount >= minWords && wordCount <= targetWords) return 'perfect'
        return 'above'
    }

    const status = getStatus()
    const percentage = Math.min(100, Math.round((wordCount / targetWords) * 100))

    const getProgressColor = () => {
        if (status === 'below') return 'from-gray-400 to-gray-500'
        if (status === 'perfect') return 'from-green-500 to-green-600'
        return 'from-orange-500 to-orange-600'
    }

    const getWordCountColor = () => {
        if (status === 'below') return 'text-gray-500'
        if (status === 'perfect') return 'text-green-600 dark:text-green-400'
        return 'text-orange-500 dark:text-orange-400'
    }

    const editorHeader = (
        <div className="px-6 py-4 bg-gray-50 dark:bg-gray-900/50 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                    <span className={`text-2xl font-bold ${getWordCountColor()}`}>
                        {wordCount}
                    </span>
                    <span className="text-sm opacity-60">palabras / {targetWords}</span>
                    {status === 'perfect' && <Check size={20} className="text-green-600" />}
                    {status === 'above' && <AlertCircle size={20} className="text-orange-500" />}
                </div>
                <span className="text-sm opacity-60">{charCount} caracteres</span>
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
                        Faltan {minWords - wordCount} palabras para el mínimo
                    </span>
                )}
                {status === 'perfect' && (
                    <span className="text-green-600 dark:text-green-400">
                        ✓ Rango objetivo alcanzado
                    </span>
                )}
                {status === 'above' && (
                    <span className="text-orange-500 dark:text-orange-400">
                        +{wordCount - targetWords} sobre el objetivo
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
                
                {isWriting && wordCount >= minWords && (
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
                        <h1 className="text-3xl font-bold font-merriweather text-azul-tinta mb-2">Diario de Personaje</h1>
                        <p className="text-sm opacity-70 mb-3">Construye personajes tridimensionales desde su propia voz interior.</p>
                        <IntensityBadge type="fuerza" duration="45-60 min" />
                    </div>
                </div>
                
                <DailyGoalCompact 
                    goal="Escribe una entrada de diario de un personaje en un momento de crisis o decisión importante."
                    hint="Piensa: ¿qué escribiría esta persona? ¿qué evitaría mencionar? ¿en qué se miente a sí misma?"
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
                            placeholder="Querido diario... (escribe desde la mente y corazón de tu personaje. Deja que se contradiga, que evite temas difíciles, que racionalice...)"
                            ariaLabel="Área de escritura de diario de personaje"
                            minHeight="400px"
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
                title="¿Deseas guardar esta entrada de diario?"
            >
                <p>Guardar las entradas de diario de tus personajes te permite construir un archivo de voces y personalidades que puedes desarrollar en futuras historias.</p>
                <p className="mt-2"><strong>¿Por qué guardar?</strong> Estos ejercicios son exploraciones profundas de psicología de personajes. Al guardarlos, creas un banco de voces auténticas, conflictos internos y perspectivas que enriquecerán tus narrativas futuras.</p>
            </SaveModal>
        </div>
    )
}
