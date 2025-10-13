const Nosotros = () => {
    return (
        <div className="max-w-6xl mx-auto space-y-8">
            <header className="text-center py-6">
                <h1 className="text-4xl font-bold mb-4 font-merriweather text-azul-tinta">
                    Sobre Verba Viva
                </h1>
                <p className="text-lg opacity-80 max-w-2xl mx-auto">
                    La historia detrás de este espacio para escritores.
                </p>
            </header>

            <section className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                <h2 className="text-2xl font-bold mb-4 font-merriweather text-azul-tinta">
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <section className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                    <h2 className="text-2xl font-bold mb-4 font-merriweather text-azul-tinta">
                        Nuestra Misión
                    </h2>
                    <p className="text-base leading-relaxed opacity-90">
                        Verba Viva existe para ayudar a escritores de todos los niveles a mantener viva su creatividad. Creemos que la escritura es un músculo que se debe ejercitar constantemente, y queremos proporcionar las herramientas necesarias para que puedas hacerlo de manera consistente y gratificante.
                    </p>
                </section>

                <section className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                    <h2 className="text-2xl font-bold mb-4 font-merriweather text-azul-tinta">
                        Nuestra Visión
                    </h2>
                    <p className="text-base leading-relaxed opacity-90">
                        Aspiramos a ser una comunidad vibrante donde escritores de habla hispana encuentren inspiración, apoyo y las herramientas necesarias para desarrollar su voz única. Queremos democratizar el acceso a recursos de calidad para la práctica de la escritura creativa.
                    </p>
                </section>
            </div>
        </div>
    )
}

export default Nosotros