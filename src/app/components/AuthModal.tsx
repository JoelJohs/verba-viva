'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { X } from 'lucide-react'

interface AuthModalProps {
    isOpen: boolean
    onClose: () => void
}

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
    const [isLogin, setIsLogin] = useState(true)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    if (!isOpen) return null

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError('')
        setLoading(true)

        try {
            if (isLogin) {
                const result = await signIn('credentials', {
                    username,
                    password,
                    redirect: false,
                })

                if (result?.error) {
                    setError('Usuario o contraseña incorrectos')
                } else {
                    onClose()
                    window.location.reload()
                }
            } else {
                const res = await fetch('/api/register', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ username, password })
                })

                const data = await res.json()

                if (!res.ok) {
                    setError(data.error || 'Error al registrar')
                } else {
                    const result = await signIn('credentials', {
                        username,
                        password,
                        redirect: false,
                    })

                    if (result?.error) {
                        setError('Usuario creado, pero error al iniciar sesión')
                    } else {
                        onClose()
                        window.location.reload()
                    }
                }
            }
        } catch {
            setError('Error de conexión')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg max-w-md w-full p-6 relative">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                >
                    <X size={20} />
                </button>

                <h2 className="text-2xl font-bold mb-6 font-merriweather text-azul-tinta">
                    {isLogin ? 'Iniciar Sesión' : 'Crear Cuenta'}
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">Usuario</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-azul-tinta"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Contraseña</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            minLength={4}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-azul-tinta"
                        />
                    </div>

                    {error && (
                        <div className="text-red-500 text-sm">{error}</div>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-azul-tinta hover:bg-naranja-quemado text-white font-semibold py-2 rounded-lg transition-colors disabled:opacity-50"
                    >
                        {loading ? 'Cargando...' : (isLogin ? 'Entrar' : 'Registrarse')}
                    </button>
                </form>

                <div className="mt-4 text-center text-sm">
                    <button
                        onClick={() => {
                            setIsLogin(!isLogin)
                            setError('')
                        }}
                        className="text-azul-tinta hover:underline"
                    >
                        {isLogin ? '¿No tienes cuenta? Regístrate' : '¿Ya tienes cuenta? Inicia sesión'}
                    </button>
                </div>
            </div>
        </div>
    )
}
