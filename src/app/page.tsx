
import Link from 'next/link'
import { BookOpen, Users, Library, Pen } from 'lucide-react'

export default function Home() {
  const sections = [
    {
      title: 'Ejercicios de Escritura',
      description: 'Practica con ejercicios diseñados para desarrollar tu técnica de escritura.',
      icon: Pen,
      href: '/ejercicios',
      color: 'text-azul-tinta'
    },
    {
      title: 'Blog Comunitario',
      description: 'Comparte tus escritos y conecta con otros escritores.',
      icon: Users,
      href: '/blog',
      color: 'text-naranja-quemado'
    },
    {
      title: 'Lecturas Recomendadas',
      description: 'Descubre libros esenciales para escritores.',
      icon: Library,
      href: '/lecturas',
      color: 'text-verde-oliva'
    },
    {
      title: 'Mis Escritos',
      description: 'Accede a todos tus trabajos guardados y revisa tu progreso.',
      icon: BookOpen,
      href: '/mis-escritos',
      color: 'text-azul-tinta'
    }
  ]

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <header className="text-center py-8">
        <h1 className="text-5xl font-bold mb-4 font-merriweather text-azul-tinta">
          Bienvenido a Verba Viva
        </h1>
        <p className="text-xl opacity-80 max-w-2xl mx-auto">
          Tu pequeño espacio para crecer como escritor.
        </p>
      </header>

      <section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sections.map((section) => {
            const Icon = section.icon
            return (
              <Link
                key={section.href}
                href={section.href}
                className="group bg-white dark:bg-gray-800 p-8 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-azul-tinta dark:hover:border-azul-tinta transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-start space-x-4">
                  <div className={`${section.color} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={48} strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 font-merriweather text-azul-tinta group-hover:text-naranja-quemado transition-colors">
                      {section.title}
                    </h3>
                    <p className="text-sm opacity-70 leading-relaxed">
                      {section.description}
                    </p>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      <section className="bg-white dark:bg-gray-800 p-8 rounded-lg border border-gray-200 dark:border-gray-700 text-center">
        <h2 className="text-2xl font-bold mb-4 font-merriweather text-azul-tinta">
          ¿Listo para comenzar?
        </h2>
        <p className="text-base opacity-80 mb-6 max-w-2xl mx-auto">
          La práctica constante es la clave para mejorar. Elige una sección y comienza tu viaje de escritura hoy.
        </p>
        <Link
          href="/ejercicios"
          className="inline-block bg-azul-tinta hover:bg-naranja-quemado text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300"
        >
          Comenzar a Escribir
        </Link>
      </section>
    </div>
  )
}
