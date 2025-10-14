 'use client'

import { useEffect, useRef, useState } from 'react'
import Controls from './components/Controls'
import EditorCard from './components/EditorCard'
import InfoPanel from './components/InfoPanel'
import SaveModal from './components/SaveModal'
import OnTheGo from './components/OnTheGo'

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

    return (
        <div className="max-w-6xl mx-auto py-8">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h1 className="text-3xl font-bold font-merriweather text-azul-tinta">Escritura Libre</h1>
                    <p className="text-sm opacity-80 mt-1">Silencia al editor interno, escribe sin parar.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
                        <div className="lg:col-span-2 h-full flex flex-col">
                            <div className={`bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 flex flex-col h-full ${modalOpen ? 'ring-4 ring-azul-tinta/30 animate-pulse' : ''}`}>
                        <Controls presets={presets} minutes={minutes} onSelect={(m) => { if (!running && !modalOpen) { setMinutes(m); setSecondsLeft(m*60) } }} onStart={start} onReset={reset} secondsLeft={secondsLeft} running={running} modalOpen={modalOpen} />
                        <EditorCard text={text} setText={setText} pct={pct} textareaRef={textareaRef} />
                    </div>
                </div>

                <div className="h-full">
                    <InfoPanel />
                </div>
            </div>
            <OnTheGo />

            <SaveModal isOpen={modalOpen} onClose={() => setModalOpen(false)} onSave={() => {/* placeholder for save action */}} title="¿Deseas guardar tu escrito?">
                <p>Te recomendamos guardar tu escrito para poder ver tu progreso con el tiempo. Guardar te permite comparar versiones, medir tu volumen de práctica, y observar mejoras concretas en estilo y contenido.</p>
                <p className="mt-2"><strong>¿Por qué guardar?</strong> Revisar sesiones anteriores te ayuda a detectar patrones, frases recurrentes y temas que desarrollas de forma natural. Además, guardar transforma la práctica en seguimiento real de tu progreso como escritor.</p>
            </SaveModal>
        </div>
    )
}