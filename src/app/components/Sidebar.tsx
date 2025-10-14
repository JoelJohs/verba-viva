'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import Image from "next/image"
import { useSession, signOut } from "next-auth/react"
import type { Session } from "next-auth"
import AuthModal from "./AuthModal"
import {
    HomeIcon,
    ClockIcon,
    FileTextIcon,
    EyeIcon,
    UserIcon,
    RefreshCwIcon,
    BookIcon,
    ChevronDown,
    ChevronRight,
    MenuIcon,
    XIcon,
    InfoIcon,
    LogOutIcon,
    LogInIcon,
    Zap,
    Flame,
    Lightbulb
} from 'lucide-react';
import type { LucideProps } from 'lucide-react'

type ExerciseType = 'calentamiento' | 'fuerza'

type NavItem = {
    name: string
    href: string
    icon: React.ComponentType<LucideProps>
    exerciseType?: ExerciseType
    duration?: string
}

const navigation: NavItem[] = [
    {
        name: 'Inicio',
        href: '/',
        icon: HomeIcon
    },
    {
        name: 'Nosotros',
        href: '/nosotros',
        icon: InfoIcon
    },
    {
        name: 'Consejos',
        href: '/consejos',
        icon: Lightbulb
    },
    {
        name: 'Escritura Libre',
        href: '/ejercicios/escritura-libre',
        icon: ClockIcon,
        exerciseType: 'calentamiento',
        duration: '10-15 min'
    },
    {
        name: 'Microcuentos',
        href: '/ejercicios/microcuentos',
        icon: FileTextIcon,
        exerciseType: 'fuerza',
        duration: '30-60 min'
    },
    {
        name: 'Describe tu Entorno',
        href: '/ejercicios/entorno',
        icon: EyeIcon,
        exerciseType: 'fuerza',
        duration: '30-45 min'
    },
    {
        name: 'Diario de Personaje',
        href: '/ejercicios/diario-de-personaje',
        icon: UserIcon,
        exerciseType: 'fuerza',
        duration: '45-60 min'
    },
    {
        name: 'Reescritura de Cuentos',
        href: '/ejercicios/reescritura-de-cuentos',
        icon: RefreshCwIcon,
        exerciseType: 'fuerza',
        duration: '60+ min'
    },
    // {
    //     name: 'Generadores de Ideas',
    //     href: '/ejercicios/prompts',
    //     icon: SparklesIcon
    // },
    // {
    //     name: 'Blog',
    //     href: '/blog',
    //     icon: MessageSquareIcon
    // },
    {
        name: 'Lecturas Recomendadas',
        href: '/lecturas-recomendadas',
        icon: BookIcon
    }
]

const Sidebar = () => {
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false)
    const [authModalOpen, setAuthModalOpen] = useState(false)
    const { data: session } = useSession()

    const toggleSidebar = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
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

            {isOpen && (
                <div
                    className="lg:hidden fixed inset-0 bg-black/50 z-40"
                    onClick={() => setIsOpen(false)}
                />
            )}

            <aside className={`lg:hidden fixed inset-y-0 left-0 z-50 w-64 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'
                }`}>
                <div className="flex flex-col h-screen w-64 border-r p-6 space-y-6" style={{
                    backgroundColor: 'var(--color-fondo)',
                    borderRightColor: 'rgba(38, 70, 83, 0.2)'
                }}>
                    <SidebarContent
                        pathname={pathname}
                        onLinkClick={() => setIsOpen(false)}
                        session={session}
                        onAuthClick={() => setAuthModalOpen(true)}
                    />
                </div>
            </aside>

            <aside className="hidden lg:flex flex-col w-64 border-r p-6 h-screen sticky top-0" style={{
                backgroundColor: 'var(--color-fondo)',
                borderRightColor: 'rgba(38, 70, 83, 0.2)'
            }}>
                <div className="flex flex-col h-full space-y-6">
                    <SidebarContent
                        pathname={pathname}
                        session={session}
                        onAuthClick={() => setAuthModalOpen(true)}
                    />
                </div>
            </aside>

            <AuthModal isOpen={authModalOpen} onClose={() => setAuthModalOpen(false)} />
        </>
    );
}

const EjerciciosSection = ({
    pathname,
    items,
    onLinkClick
}: {
    pathname: string
    items: NavItem[]
    onLinkClick?: () => void
}) => {
    const [open, setOpen] = useState<boolean>(pathname.startsWith('/ejercicios'))

    const calentamiento = items.filter(item => item.exerciseType === 'calentamiento')
    const fuerza = items.filter(item => item.exerciseType === 'fuerza')

    return (
        <div>
            <button
                onClick={() => setOpen(!open)}
                className={`w-full flex items-center justify-between gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors ${open ? 'text-white' : 'text-texto hover:bg-verde-oliva/10 hover:text-azul-tinta'}`}
                style={open ? { backgroundColor: '#264653' } : {}}
                aria-expanded={open}
            >
                <span className="flex items-center gap-3">
                    <BookIcon className="h-4 w-4" />
                    Ejercicios
                </span>
                {open ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
            </button>

            {open && (
                <div className="mt-1 space-y-3 pl-3">
                    {calentamiento.length > 0 && (
                        <div>
                            <div className="flex items-center gap-1 px-3 py-1 text-xs font-semibold text-green-600 dark:text-green-400">
                                <Zap size={12} />
                                <span>Calentamiento</span>
                            </div>
                            <div className="space-y-1">
                                {calentamiento.map(item => {
                                    const isActive = pathname === item.href
                                    return (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            onClick={onLinkClick}
                                            className={`flex items-center justify-between gap-2 rounded-md px-3 py-2 text-sm transition-colors ${isActive ? 'text-white' : 'text-texto hover:bg-verde-oliva/10 hover:text-azul-tinta'}`}
                                            style={isActive ? { backgroundColor: '#264653' } : {}}
                                        >
                                            <span className="flex items-center gap-2">
                                                <item.icon className="h-3.5 w-3.5" />
                                                {item.name}
                                            </span>
                                            {item.duration && <span className="text-xs opacity-60">{item.duration}</span>}
                                        </Link>
                                    )
                                })}
                            </div>
                        </div>
                    )}

                    {fuerza.length > 0 && (
                        <div>
                            <div className="flex items-center gap-1 px-3 py-1 text-xs font-semibold text-orange-600 dark:text-orange-400">
                                <Flame size={12} />
                                <span>Fuerza</span>
                            </div>
                            <div className="space-y-1">
                                {fuerza.map(item => {
                                    const isActive = pathname === item.href
                                    return (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            onClick={onLinkClick}
                                            className={`flex items-center justify-between gap-2 rounded-md px-3 py-2 text-sm transition-colors ${isActive ? 'text-white' : 'text-texto hover:bg-verde-oliva/10 hover:text-azul-tinta'}`}
                                            style={isActive ? { backgroundColor: '#264653' } : {}}
                                        >
                                            <span className="flex items-center gap-2">
                                                <item.icon className="h-3.5 w-3.5" />
                                                {item.name}
                                            </span>
                                            {item.duration && <span className="text-xs opacity-60">{item.duration}</span>}
                                        </Link>
                                    )
                                })}
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

const SidebarContent = ({
    pathname,
    onLinkClick,
    session,
    onAuthClick
}: {
    pathname: string
    onLinkClick?: () => void
    session: Session | null
    onAuthClick: () => void
}) => {
    return (
        <>
        <div className="flex-shrink-0">
            <Link href="/" className="flex items-center p-2" onClick={onLinkClick}>
                <Image src="/logo.png" alt="Verba Viva" width={120} height={120} />
            </Link>
        </div>

        <div className="flex-shrink-0 pb-4 border-b" style={{ borderColor: 'rgba(38, 70, 83, 0.1)' }}>
            {session?.user ? (
                <div className="flex items-center justify-between p-2 rounded-md bg-verde-oliva/10">
                    <div className="flex items-center gap-2">
                        <UserIcon size={16} className="text-azul-tinta" />
                        <span className="text-sm font-medium truncate">{session.user.name}</span>
                    </div>
                    <button
                        onClick={() => signOut()}
                        className="p-1 hover:bg-red-100 dark:hover:bg-red-900/20 rounded transition-colors"
                        title="Cerrar sesión"
                    >
                        <LogOutIcon size={16} className="text-red-600" />
                    </button>
                </div>
            ) : (
                <button
                    onClick={onAuthClick}
                    className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-md bg-azul-tinta text-white hover:bg-naranja-quemado transition-colors text-sm font-medium"
                >
                    <LogInIcon size={16} />
                    Iniciar Sesión
                </button>
            )}
        </div>

        <nav className="flex-1 space-y-1 overflow-y-auto">
            {navigation.filter(item => !item.href.startsWith('/ejercicios')).map(item => {
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
                )
            })}

            <EjerciciosSection
                pathname={pathname}
                items={navigation.filter(item => item.href.startsWith('/ejercicios'))}
                onLinkClick={onLinkClick}
            />
        </nav>

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
    )
}

export default Sidebar