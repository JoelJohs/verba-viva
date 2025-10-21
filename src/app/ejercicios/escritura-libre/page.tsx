 'use client'

import { useEffect, useRef, useState } from 'react'
import { Play, RefreshCcw, Timer } from 'lucide-react'
import EditorCard from '@/app/ejercicios/components/EditorCard'
import InfoPanel, { InfoPanelSection } from '@/app/ejercicios/components/InfoPanel'
import SaveModal from '@/app/ejercicios/components/SaveModal'
import DailyGoalCompact from '@/app/ejercicios/components/DailyGoalCompact'
import IntensityBadge from '@/app/ejercicios/components/IntensityBadge'

const infoPanelSections: InfoPanelSection[] = [
    {
        title: '¿Por qué funciona?',
        content: (
            <p>
                Nuestro cerebro está entrenado para juzgar y estructurar, lo que causa el &quot;bloqueo&quot;. La escritura libre rompe esa barrera: al no parar, le quitas poder al crítico interno y generas momentum.
            </p>
        )
    },
    {
        title: 'Cómo hacerlo',
        content: (
            <ol className="list-decimal pl-4 space-y-2">
                <li>Elige un preset de tiempo (empieza con 5 minutos)</li>
                <li>Pulsa <strong>Iniciar</strong> y deja el editor en blanco</li>
                <li>Escribe continuamente sin detenerte ni editar</li>
                <li>Si te bloqueas, escribe &quot;no sé qué escribir&quot;</li>
                <li>Revisa tu texto después de la sesión si quieres</li>
            </ol>
        )
    },
    {
        title: 'Consejos',
        content: (
            <ul className="list-disc pl-4 space-y-2">
                <li>Empieza con sesiones cortas</li>
                <li>Acepta la mala primera versión</li>
                <li>Prueba escribir con música de fondo</li>
            </ul>
        )
    }
]

export default function FreewritingPage() {
    const presets = [5, 10, 15]
    const [minutes, setMinutes] = useState<number>(5)
    const [secondsLeft, setSecondsLeft] = useState<number>(minutes * 60)
    const [running, setRunning] = useState<boolean>(false)
    const [text, setText] = useState<string>('')
    const [modalOpen, setModalOpen] = useState<boolean>(false)
    const intervalRef = useRef<number | null>(null)
    const textareaRef = useRef<HTMLTextAreaElement | null>(null)

    useEffect(() => {
        setSecondsLeft(minutes * 60)
    }, [minutes])

    useEffect(() => {
        if (running) {
            textareaRef.current?.focus()
        }
    }, [running])

    useEffect(() => {
        if (!running) return
        intervalRef.current = window.setInterval(() => {
            setSecondsLeft(prev => {
                if (prev <= 1) {
                    clearInterval(intervalRef.current as number)
                    setRunning(false)
                    setModalOpen(true)
                    return 0
                }
                return prev - 1
            })
        }, 1000)

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current)
        }
    }, [running])

    const start = () => {
        if (secondsLeft === 0) setSecondsLeft(minutes * 60)
        setRunning(true)
    }

    const reset = () => {
        // prevent resetting while the session is active
        if (running || modalOpen) return
        setRunning(false)
        if (intervalRef.current) clearInterval(intervalRef.current)
        setSecondsLeft(minutes * 60)
        setText('')
        setModalOpen(false)
    }

    const pct = Math.round(((minutes * 60 - secondsLeft) / (minutes * 60)) * 100) || 0
    const mm = Math.floor(secondsLeft / 60)
    const ss = secondsLeft % 60

    const editorHeader = (
        <div className="px-6 py-3 bg-gray-50 dark:bg-gray-900/50 border-b border-gray-200 dark:border-gray-700">
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
    )

    const editorFooter = (
        <div className="px-6 py-3 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs">
                    <span className="opacity-70">{text.length} caracteres</span>
                    <span className="opacity-70">
                        {text.trim() === '' ? 0 : text.trim().split(/\s+/).length} palabras
                    </span>
                </div>
                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-azul-tinta text-white shadow-sm">
                        <Timer size={18} />
                        <div className="font-mono text-lg font-semibold">
                            {String(mm).padStart(2,'0')}:{String(ss).padStart(2,'0')}
                        </div>
                    </div>

                    <button
                        onClick={() => { if (!running && !modalOpen) start() }}
                        disabled={running || modalOpen}
                        className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium transition-colors shadow-sm ${
                            running || modalOpen 
                            ? 'bg-gray-300 dark:bg-gray-600 text-gray-500 cursor-not-allowed' 
                            : 'bg-azul-tinta text-white hover:bg-naranja-quemado'
                        }`}>
                        <Play size={16} />
                        Iniciar
                    </button>

                    <button
                        onClick={() => { if (!running && !modalOpen) reset() }}
                        disabled={running || modalOpen}
                        className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-medium transition-colors ${
                            running || modalOpen 
                            ? 'bg-gray-100 dark:bg-gray-700 text-gray-400 cursor-not-allowed' 
                            : 'bg-gray-100 dark:bg-gray-700 text-texto hover:bg-gray-200 dark:hover:bg-gray-600'
                        }`}>
                        <RefreshCcw size={16} />
                        Reiniciar
                    </button>
                </div>
            </div>
        </div>
    )

    return (
        <div className="max-w-7xl mx-auto py-6 px-4">
            <div className="mb-6">
                <div className="flex items-start justify-between mb-4">
                    <div>
                        <h1 className="text-3xl font-bold font-merriweather text-azul-tinta mb-2">Escritura Libre</h1>
                        <p className="text-sm opacity-70 mb-3">Silencia al editor interno, escribe sin parar.</p>
                        <IntensityBadge type="calentamiento" duration="10-15 min" />
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2 opacity-80">Duración de la sesión:</label>
                    <div className="flex items-center gap-2">
                    {presets.map(p => (
                        <button
                        key={p}
                        onClick={() => { if (!running && !modalOpen) setMinutes(p) }}
                        disabled={running || modalOpen}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                            p === minutes 
                            ? 'bg-azul-tinta text-white shadow-sm ring-2 ring-azul-tinta ring-offset-2' 
                            : 'bg-gray-100 dark:bg-gray-700 text-texto hover:bg-gray-200 dark:hover:bg-gray-600'
                        } ${running || modalOpen ? 'opacity-60 cursor-not-allowed' : ''}`}>
                        {p} min
                        </button>
                    ))}
                    </div>
                </div>
                
                <DailyGoalCompact 
                    goal="Completa una sesión de 5 a 15 minutos escribiendo sin detenerte."
                    hint="Si te quedas en blanco, escribe 'no sé qué escribir' hasta que surja algo nuevo."
                    intensity="calentamiento"
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-4">
                    <div className={`bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm transition-all ${modalOpen ? 'ring-2 ring-azul-tinta/50 shadow-lg' : ''}`}>
                        <EditorCard 
                            text={text} 
                            setText={setText} 
                            textareaRef={textareaRef}
                            placeholder="Comienza a escribir aquí... No te detengas, no edites, solo deja fluir las palabras..."
                            ariaLabel="Área de escritura libre"
                            header={editorHeader}
                            footer={editorFooter}
                        />
                    </div>
                </div>

                <div className="lg:col-span-1">
                    <InfoPanel sections={infoPanelSections} />
                </div>
            </div>

            <SaveModal isOpen={modalOpen} onClose={() => setModalOpen(false)} onSave={() => {/* placeholder for save action */}} title="¿Deseas guardar tu escrito?">
                <p>Te recomendamos guardar tu escrito para poder ver tu progreso con el tiempo. Guardar te permite comparar versiones, medir tu volumen de práctica, y observar mejoras concretas en estilo y contenido.</p>
                <p className="mt-2"><strong>¿Por qué guardar?</strong> Revisar sesiones anteriores te ayuda a detectar patrones, frases recurrentes y temas que desarrollas de forma natural. Además, guardar transforma la práctica en seguimiento real de tu progreso como escritor.</p>
            </SaveModal>
        </div>
    )
}