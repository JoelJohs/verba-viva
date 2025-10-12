'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import Image from "next/image"
import {
    MessageSquareIcon,
    HomeIcon,
    ClockIcon,
    FileTextIcon,
    EyeIcon,
    UserIcon,
    RefreshCwIcon,
    SparklesIcon,
    BookIcon,
    MenuIcon,
    XIcon
} from 'lucide-react';
const navigation = [
    {
        name: 'Inicio',
        href: '/',
        icon: HomeIcon
    },
    {
        name: 'Escritura Libre',
        href: '/ejercicios/escritura-libre',
        icon: ClockIcon
    },
    {
        name: 'Microcuentos',
        href: '/ejercicios/microcuentos',
        icon: FileTextIcon
    },
    {
        name: 'Describe tu Entorno',
        href: '/ejercicios/entorno',
        icon: EyeIcon
    },
    {
        name: 'Diario de Personaje',
        href: '/ejercicios/diario-de-personaje',
        icon: UserIcon
    },
    {
        name: 'Reescritura de Cuentos',
        href: '/ejercicios/reescritura-de-cuentos',
        icon: RefreshCwIcon
    },
    {
        name: 'Generadores de Ideas',
        href: '/ejercicios/prompts',
        icon: SparklesIcon
    },
    {
        name: 'Blog',
        href: '/blog',
        icon: MessageSquareIcon
    },
    {
        name: 'Lecturas Recomendadas',
        href: '/lecturas-recomendadas',
        icon: BookIcon
    }
]

const Sidebar = () => {
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false)

    const toggleSidebar = () => {
        setIsOpen(!isOpen)
        console.log('Sidebar toggled:', !isOpen) // Debug temporal
    }

    return (
        <>
            {/* Botón para móvil */}
            <button
                onClick={toggleSidebar}
                className="lg:hidden fixed top-4 left-4 z-50 p-3 rounded-md text-white shadow-lg hover:opacity-90 transition-colors"
                style={{ backgroundColor: '#264653' }}
            >
                {isOpen ? (
                    <XIcon className="h-6 w-6" />
                ) : (
                    <MenuIcon className="h-6 w-6" />
                )}
            </button>

            {/* Overlay para móvil */}
            {isOpen && (
                <div
                    className="lg:hidden fixed inset-0 bg-black/50 z-40"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Sidebar en móvil (overlay) */}
            <aside className={`lg:hidden fixed inset-y-0 left-0 z-50 w-64 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'
                }`}>
                <div className="flex flex-col h-screen w-64 border-r p-6 space-y-6" style={{
                    backgroundColor: 'var(--color-fondo)',
                    borderRightColor: 'rgba(38, 70, 83, 0.2)'
                }}>
                    <SidebarContent pathname={pathname} onLinkClick={() => setIsOpen(false)} />
                </div>
            </aside>

            {/* Sidebar en desktop (parte del layout) */}
            <aside className="hidden lg:flex flex-col w-64 border-r p-6 h-screen sticky top-0" style={{
                backgroundColor: 'var(--color-fondo)',
                borderRightColor: 'rgba(38, 70, 83, 0.2)'
            }}>
                <div className="flex flex-col h-full space-y-6">
                    <SidebarContent pathname={pathname} />
                </div>
            </aside>
        </>
    );
}

// Componente reutilizable para el contenido de la sidebar
const SidebarContent = ({ pathname, onLinkClick }: { pathname: string, onLinkClick?: () => void }) => (
    <>
        {/* Logo */}
        <div className="flex-shrink-0">
            <Link href="/" className="flex items-center p-2" onClick={onLinkClick}>
                <Image src="/logo.png" alt="Verba Viva" width={120} height={120} />
            </Link>
        </div>

        {/* Navegación */}
        <nav className="flex-1 space-y-1 overflow-y-auto">
            {navigation.map((item) => {
                const isActive = pathname === item.href
                return (
                    <Link
                        key={item.name}
                        href={item.href}
                        onClick={onLinkClick}
                        className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors ${isActive
                            ? 'text-white'
                            : 'text-texto hover:bg-verde-oliva/10 hover:text-azul-tinta'
                            }`}
                        style={isActive ? { backgroundColor: '#264653' } : {}}
                    >
                        <item.icon className="h-4 w-4" />
                        {item.name}
                    </Link>
                );
            })}
        </nav>

        {/* Footer */}
        <div className="flex-shrink-0 border-t pt-4" style={{ borderColor: 'rgba(38, 70, 83, 0.1)' }}>
            <div className="text-xs space-y-2" style={{ color: 'rgba(38, 70, 83, 0.6)' }}>
                <p className="font-medium italic" style={{ color: '#264653' }}>
                    &ldquo;La escritura es la única profesión donde nadie te considera ridículo si no ganas dinero.&rdquo;
                </p>
                <p className="font-semibold text-right" style={{ color: 'rgba(38, 70, 83, 0.8)' }}>
                    — Jules Renard
                </p>
                <div className="pt-2" style={{ color: 'rgba(38, 70, 83, 0.4)' }}>
                    <p>&copy; {new Date().getFullYear()} Verba Viva</p>
                    <p>Desarrollado por <Link href="https://joeljohs.com" target="_blank" rel="noopener noreferrer" className="font-medium hover:opacity-80 transition-colors" style={{ color: '#e76f51' }}>Joel Johs</Link></p>
                </div>
            </div>
        </div>
    </>
);

export default Sidebar