
export default function Home() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Hero Section */}
      <header className="text-center py-6">
        <h1 className="text-4xl font-bold mb-4 font-merriweather" style={{ color: '#264653' }}>
          Bienvenido a Verba Viva
        </h1>
        <p className="text-lg opacity-80 max-w-2xl mx-auto">
          Tu pequeño espacio para crecer como escritor.
        </p>
      </header>

      {/* Personal Story Section */}
      <section className="bg-white p-6 rounded-lg border" style={{ borderColor: 'rgba(38, 70, 83, 0.1)' }}>
        <h2 className="text-2xl font-bold mb-4 font-merriweather" style={{ color: '#264653' }}>
          ¿Por qué Verba Viva?
        </h2>
        <div className="space-y-4">
          <p className="text-base leading-relaxed opacity-90">
            Desde temprana edad he tenido demasiada imaginación, razón por la cual podía imaginar historias que seguían una línea argumental durante bastante tiempo. Cuando llegué a la preparatoria empecé a intentar escribir esas historias que pasaban por mi mente, y poco a poco fui desarrollando el gusto por la escritura, pasando de esas historias inverosímiles donde me autoproyectaba como el protagonista, a escribir relatos cortos e historias más largas con diferentes protagonistas e historias más diversas.
          </p>
          <p className="text-base leading-relaxed opacity-90">
            Tristemente, al pasar a la universidad y pasar por diferentes estados anímicos desfavorables, dejé de escribir por un período muy largo de tiempo hasta que recientemente tomé la decisión de retomar la escritura. Pero al intentarlo me di cuenta de que había perdido toda la práctica: no lograba conectar con mi creatividad y no sabía cómo empezar a escribir de nuevo. Tuve que volver a lo básico, buscar guías, tomar lecturas tanto ligeras como más pesadas, lo cual no es malo, me ayudó a retomar también el hábito de la lectura, y entre esas búsquedas vi varios consejos para practicar desde lo más sencillo.
          </p>
          <p className="text-base leading-relaxed opacity-90">
            Esa es la razón por la cual desarrollé Verba Viva: para tener a la mano todas esas sesiones de práctica y guardarme un registro, porque como todos sabemos, individualmente nadie es capaz de ver su progreso, y qué mejor que poder tenerlo todo en un solo lugar.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-center font-merriweather" style={{ color: '#264653' }}>
          Explora las Secciones
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg border" style={{ borderColor: 'rgba(38, 70, 83, 0.1)' }}>
            <h3 className="text-lg font-semibold mb-3" style={{ color: '#264653' }}>
              Ejercicios de Escritura
            </h3>
            <p className="text-sm opacity-70">
              Practica con ejercicios diseñados para desarrollar tu técnica de escritura.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border" style={{ borderColor: 'rgba(38, 70, 83, 0.1)' }}>
            <h3 className="text-lg font-semibold mb-3" style={{ color: '#264653' }}>
              Blog Comunitario
            </h3>
            <p className="text-sm opacity-70">
              Comparte tus escritos y conecta con otros escritores.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border" style={{ borderColor: 'rgba(38, 70, 83, 0.1)' }}>
            <h3 className="text-lg font-semibold mb-3" style={{ color: '#264653' }}>
              Lecturas Recomendadas
            </h3>
            <p className="text-sm opacity-70">
              Descubre libros esenciales para escritores.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
