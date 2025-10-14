'use client'

import { Lightbulb, Smartphone, Zap, BookOpen, Clock, Target } from 'lucide-react'
import ConsejosSection from './components/ConsejosSection'
import ConsejoCard from './components/ConsejoCard'
import ConsejoBasicoCard from './components/ConsejoBasicoCard'
import BloqueoTip from './components/BloqueoTip'

export default function ConsejosPage() {
  return (
    <div className="max-w-6xl mx-auto py-6 px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold font-merriweather text-azul-tinta mb-2">Consejos para Escritores</h1>
        <p className="text-sm opacity-70">
          Herramientas, técnicas y estrategias para mantener tu práctica de escritura constante y productiva.
        </p>
      </div>

      <div className="space-y-6">
        {/* Consejos Básicos */}
        <ConsejosSection
          title="Consejos Básicos"
          description="Fundamentos para empezar con buen pie"
          icon={Lightbulb}
          gradientFrom="from-green-50"
          gradientTo="to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20"
          iconColor="text-green-600 dark:text-green-400"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ConsejoCard
              icon={Clock}
              title="Establece una rutina"
              description="Escribe a la misma hora todos los días. La consistencia es más importante que la cantidad. Incluso 10 minutos diarios generan resultados."
            />
            <ConsejoCard
              icon={Target}
              title="Empieza con metas pequeñas"
              description="No te presiones a escribir una novela desde el día uno. Comienza con ejercicios de calentamiento y aumenta progresivamente la intensidad."
            />
            <ConsejoCard
              icon={Zap}
              title="Acepta la imperfección"
              description="El primer borrador siempre es malo, y eso está bien. La creatividad necesita volumen antes que calidad. Edita después, no durante."
            />
            <ConsejoCard
              icon={BookOpen}
              title="Lee activamente"
              description="Lee con ojo crítico. Analiza cómo tus autores favoritos construyen escenas, desarrollan personajes y usan el lenguaje."
            />
          </div>
        </ConsejosSection>

        {/* Escribir en Movimiento */}
        <ConsejosSection
          title="Escribir en Movimiento"
          description="Captura ideas cuando estás fuera de casa"
          icon={Smartphone}
          gradientFrom="from-blue-50"
          gradientTo="to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20"
          iconColor="text-blue-600 dark:text-blue-400"
        >
          <p className="text-sm opacity-80 leading-relaxed mb-4">
            Si estás en el transporte, esperando a alguien o en cualquier momento fuera de casa, estas tácticas te permiten capturar ideas rápido y mantener un registro coherente.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ConsejoCard
              icon={BookOpen}
              title="Libreta exclusiva"
              description="Lleva una libreta solo para capturar ideas rápidas. Crea un registro físico similar al que guarda Verba Viva en la app. Así puedes revisar tu progreso con ambas fuentes."
            />
            <ConsejoCard
              icon={Zap}
              title="Captura rápida"
              description="Escribe frases cortas, palabras o incluso dibujos. No te preocupes por la forma. Luego transfiere o pega el contenido en Verba Viva cuando puedas."
            />
            <ConsejoCard
              icon={Target}
              title="Modo avión / Sin distracciones"
              description="Si necesitas concentración, cierra notificaciones y prioriza un mini ejercicio (1-3 minutos) para generar material rápidamente."
            />
            <ConsejoCard
              icon={Clock}
              title="Sistematiza"
              description="Al final del día o la semana, pasa lo más valioso de tu libreta a Verba Viva para centralizar tu progreso y tener todo en un solo lugar."
            />
          </div>
        </ConsejosSection>

        {/* Superar el Bloqueo */}
        <ConsejosSection
          title="Superar el Bloqueo Creativo"
          description="Estrategias cuando no sabes qué escribir"
          icon={Zap}
          gradientFrom="from-orange-50"
          gradientTo="to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20"
          iconColor="text-orange-600 dark:text-orange-400"
        >
          <div className="space-y-4">
            <BloqueoTip
              title="Cambia de formato"
              description="Si estás bloqueado en prosa, prueba escribir un poema, un diálogo o una lista. El cambio de formato puede desbloquear nuevas ideas."
            />
            <BloqueoTip
              title="Escribe sobre el bloqueo"
              description="Literalmente escribe &quot;no sé qué escribir&quot; una y otra vez hasta que surja algo. Esta técnica de escritura automática rompe la resistencia mental."
            />
            <BloqueoTip
              title="Usa restricciones creativas"
              description="Límites como &quot;escribe sin usar la letra &apos;e&apos;&quot; o &quot;cuenta una historia en exactamente 100 palabras&quot; pueden forzar tu creatividad de formas inesperadas."
            />
            <BloqueoTip
              title="Cambia de ambiente"
              description="A veces el bloqueo es ambiental. Prueba escribir en un café, parque o biblioteca. Un cambio de escenario puede renovar tu energía creativa."
            />
          </div>
        </ConsejosSection>

        {/* Herramientas Útiles */}
        <ConsejosSection
          title="Herramientas y Recursos"
          description="Complementa tu práctica con estas herramientas"
          icon={BookOpen}
          gradientFrom="from-purple-50"
          gradientTo="to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20"
          iconColor="text-purple-600 dark:text-purple-400"
        >
          <div className="space-y-3">
            <ConsejoBasicoCard
              emoji="📚"
              title="Lleva un diario de lectura"
              description="Anota citas, técnicas y observaciones de los libros que lees. Este registro se convierte en una fuente de inspiración constante."
            />
            <ConsejoBasicoCard
              emoji="🎵"
              title="Música para concentrarte"
              description="Crea playlists específicas para escribir. Música instrumental o ambient puede ayudarte a entrar en &quot;flow&quot; más rápidamente."
            />
            <ConsejoBasicoCard
              emoji="⏰"
              title="Técnica Pomodoro"
              description="Escribe en bloques de 25 minutos con descansos de 5. Esta técnica mantiene tu mente fresca y previene el agotamiento."
            />
          </div>
        </ConsejosSection>
      </div>
    </div>
  )
}
