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
                Entrenar tu observación consciente y traducir estímulos sensoriales en lenguaje preciso y evocador.
            </p>
        )
    },
    {
        title: '¿Por qué funciona?',
        content: (
            <p>
                La mayoría de escritores novatos describen de forma genérica porque no observan realmente. Este ejercicio te obliga a notar detalles que normalmente ignoras: texturas, sonidos lejanos, olores sutiles, micro-expresiones.
            </p>
        )
    },
    {
        title: '¿Cómo hacerlo?',
        content: (
            <ol className="list-decimal pl-4 space-y-2">
                <li>Elige un lugar donde estés físicamente presente</li>
                <li>Dedica 5 minutos solo a observar sin escribir</li>
                <li>Enfócate en los 5 sentidos, uno a la vez</li>
                <li>Describe usando comparaciones y metáforas originales</li>
                <li>Evita clichés como &quot;hermoso&quot;, &quot;bonito&quot;, &quot;agradable&quot;</li>
            </ol>
        )
    },
    {
        title: 'Consejos',
        content: (
            <ul className="list-disc pl-4 space-y-2">
                <li>No uses adjetivos vagos: reemplaza &quot;bonito&quot; con detalles concretos</li>
                <li>Prueba describir olores y sonidos (los sentidos más olvidados)</li>
                <li>Incluye un elemento inesperado o contradictorio</li>
                <li>Piensa: ¿cómo describiría esto alguien que nunca lo ha visto?</li>
            </ul>
        )
    }
]

export default function EntornoPage() {
    const [text, setText] = useState<string>('')
    const [modalOpen, setModalOpen] = useState<boolean>(false)
    const [isWriting, setIsWriting] = useState<boolean>(false)
    const textareaRef = useRef<HTMLTextAreaElement | null>(null)

    const minWords = 200
    const targetWords = 400

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
                        Comenzar a Describir
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
                        <h1 className="text-3xl font-bold font-merriweather text-azul-tinta mb-2">Describe tu Entorno</h1>
                        <p className="text-sm opacity-70 mb-3">Entrena tu observación y convierte lo que ves en lenguaje preciso.</p>
                        <IntensityBadge type="fuerza" duration="30-45 min" />
                    </div>
                </div>
                
                <DailyGoalCompact 
                    goal="Describe el lugar donde estás ahora usando los 5 sentidos."
                    hint="Dedica 5 minutos solo a observar. Luego escribe. Evita clichés como 'hermoso' o 'agradable'. Sé específico y sorprendente."
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
                            placeholder="Empieza describiendo lo que ves... luego lo que escuchas, hueles, sientes, saboreas. Usa comparaciones originales y detalles inesperados..."
                            ariaLabel="Área de descripción del entorno"
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
                title="¿Deseas guardar tu descripción?"
            >
                <p>Guardar tus descripciones te permite comparar cómo evoluciona tu capacidad de observación y precisión sensorial con el tiempo.</p>
                <p className="mt-2"><strong>¿Por qué guardar?</strong> Al revisar descripciones anteriores del mismo lugar en diferentes momentos, podrás identificar qué detalles captas mejor, qué sentidos tiendes a ignorar y cómo mejora tu lenguaje descriptivo.</p>
            </SaveModal>
        </div>
    )
}
