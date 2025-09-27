# Verba Viva - Rincón del Escritor

Una aplicación web para ayudar a escritores novatos, intermedios e incluso experimentados con ejercicios, lecturas recomendadas y un blog comunitario.

**Tech Stack:** Next.js 15, TypeScript, Prisma, SQLite

## 🚀 Cómo ejecutar el proyecto

```bash
# Instalar dependencias
npm install

# Configurar la base de datos
npx prisma migrate dev --name init

# Ejecutar en modo desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📋 Progress del MVP

### ✅ Configuración Inicial

- [x] TypeScript configurado
- [x] Prisma instalado y configurado
- [x] Base de datos SQLite inicializada

### 🗄️ Modelado de Datos (Prisma Schema)

- [x] Modelo `Reading` implementado
- [x] Modelo `BlogPost` implementado
- [x] Primera migración ejecutada

### 🔧 Backend (API Routes)

- [ ] `GET /api/readings` - Obtener lecturas
- [ ] `POST /api/readings` - Crear lectura (opcional)
- [ ] `GET /api/posts` - Obtener posts del blog
- [ ] `POST /api/posts` - Crear post del blog

### 🎨 Frontend - Estructura Base

- [ ] Layout principal con navegación
- [ ] Sidebar con enlaces a secciones
- [ ] Página `/ejercicios`
- [ ] Página `/lecturas`
- [ ] Página `/blog`

### 📚 Módulo de Lecturas

- [ ] `ReadingList` component
- [ ] `ReadingCard` component
- [ ] Integración con API `/api/readings`

### ✍️ Módulo de Blog

- [ ] `BlogFeed` component
- [ ] `CreatePostForm` component
- [ ] Integración con API `/api/posts`

### 🏃‍♂️ Módulo de Ejercicios

- [ ] `ExerciseCard` component
- [ ] `FreewritingModule` component con timer
- [ ] Ejercicios estáticos (Escritura Libre, Microcuentos, etc.)

## 🗃️ Esquema de Base de Datos

### Reading

- `id`: Int (Primary Key)
- `title`: String
- `author`: String
- `category`: String (Novela, Técnica, Poesía, etc.)
- `summary`: String? (opcional)
- `link`: String? (opcional)
- `createdAt`: DateTime

### BlogPost

- `id`: Int (Primary Key)
- `title`: String
- `content`: String
- `authorName`: String (default: "Escritor Anónimo")
- `createdAt`: DateTime

## 🎯 Funcionalidades del MVP

### Ejercicios de Escritura

- **Escritura Libre**: Timer configurable para sesiones de escritura
- **Microcuentos**: Prompts y limitaciones de palabras
- **Generador de Ideas**: Prompts aleatorios para inspiración
- **Descripción de Personajes**: Ejercicios para desarrollo de personajes

### Lecturas Recomendadas

- Lista curada de libros por categoría
- Resúmenes y enlaces a recursos
- Sistema de categorización

### Blog Comunitario

- Crear y leer posts de escritores
- Sistema sencillo sin autenticación (para MVP)
- Feed cronológico de publicaciones

## 🔮 Funcionalidades Futuras (Post-MVP)

- [ ] Autenticación de usuarios con NextAuth.js
- [ ] Perfiles de usuario personalizados
- [ ] Guardado de progreso en ejercicios
- [ ] Sistema de comentarios en el blog
- [ ] Prompts dinámicos desde base de datos
- [ ] Guías visuales de estructuras narrativas
- [ ] Estadísticas de escritura personal

## 🛠️ Comandos Útiles

```bash
# Base de datos
npx prisma studio              # Abrir interfaz visual de la BD
npx prisma migrate dev         # Crear nueva migración
npx prisma generate           # Regenerar cliente de Prisma
npx prisma db push            # Sincronizar cambios sin migración

# Desarrollo
npm run dev                   # Servidor de desarrollo
npm run build                 # Build para producción
npm run start                 # Servidor de producción
```

---

**Estado actual:** Configuración inicial - Listo para comenzar desarrollo del MVP

