import { BookOpen } from 'lucide-react'

type Story = {
    title: string
    author: string
}

const stories: Story[] = [
    { title: 'La muerte de Iván Ilich', author: 'León Tolstói' },
    { title: 'Casa tomada', author: 'Julio Cortázar' },
    { title: 'Un señor muy viejo con unas alas enormes', author: 'Gabriel García Márquez' },
    { title: 'Luvina', author: 'Juan Rulfo' },
    { title: 'La metamorfosis', author: 'Franz Kafka' },
    { title: 'El Aleph', author: 'Jorge Luis Borges' }
]

export default function SuggestedStories() {
    return (
        <div className="bg-gradient-to-br from-azul-tinta/5 to-verde-oliva/5 dark:from-azul-tinta/10 dark:to-verde-oliva/10 rounded-xl border border-azul-tinta/20 p-6">
            <div className="flex items-center gap-2 mb-4">
                <BookOpen className="text-azul-tinta" size={24} />
                <h3 className="text-lg font-semibold text-azul-tinta">Cuentos Sugeridos</h3>
            </div>
            <p className="text-sm opacity-70 mb-4">
                Estos cuentos tienen estructuras sólidas perfectas para reescribir. Elige uno, léelo completo, y luego transfórmalo:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {stories.map((story, idx) => (
                    <div 
                        key={idx}
                        className="bg-white dark:bg-gray-800 rounded-lg p-3 border border-gray-200 dark:border-gray-700 hover:border-azul-tinta/50 transition-colors"
                    >
                        <p className="font-medium text-sm">{story.title}</p>
                        <p className="text-xs opacity-60">{story.author}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
