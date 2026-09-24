# PROJECT CONTEXT — PORTAFOLIO EDMR

> **Document Purpose**: Fuente compartida de contexto técnico y de diseño para agentes de desarrollo (Antigravity y Codex).  
> **Source of Truth**: El código fuente real del repositorio prevalece sobre cualquier descripción.

---

## 1. Project Overview

- **Propietario**: Esteban Mercado Rachath.
- **Perfil**: Estudiante de etapa final en Ingeniería de Sistemas (Universidad de la Costa).
- **Orientación**: Desarrollador de Software Junior. Desarrollo web, backend, bases de datos y algoritmos; conocimientos de análisis de datos como complemento.
- **Propósito del Portfolio**: Mostrar proyectos personales y académicos como evidencia de desarrollo de software, decisiones técnicas y aprendizaje, de forma coherente con un candidato junior.
- **Criterio Fundamental**: Evitar a toda costa la estética de plantilla genérica de desarrollador, el estilo SaaS genérico o la apariencia de web producida por IA sin criterio. Estilo editorial, técnico y personalizado.

---

## 2. Current State

| Elemento | Estado | Detalle |
| :--- | :--- | :--- |
| **Entorno & Build** | `Implemented` | Vite 8 + React 19 + TypeScript + Tailwind CSS v4. Build y linter limpios (`0 errors, 0 warnings`). |
| **Estructura de Secciones** | `Implemented` | Header, Hero `[00]`, TickerMarquee, Sobre Mí `[01]`, Proyectos `[02]`, Stack `[03]`, Formación `[04]`, Contacto & Footer `[05]`. |
| **Modal Casos de Estudio** | `Implemented` | `ProjectModal.tsx` funcional con tecla ESC, bloqueo de scroll en `body` y lectura de `projects.ts`. |
| **Reloj en Tiempo Real** | `Implemented` | Reloj activo en Hero y Footer con zona `America/Bogota` (UTC-5). |
| **Copiado de Email** | `Implemented` | Botón interactivo con feedback visual transitorio en Footer. |
| **Navegación Mobile** | `Partially implemented` | Los enlaces de navegación se ocultan en `< lg` (`hidden lg:flex`). No existe menú hamburguesa ni drawer móvil. |
| **Selector de Idioma** | `Implemented` | ES/EN funcional con contenido bilingüe en todas las secciones y persistencia local. |
| **Botón de CV** | `Implemented` | Descarga `public/cv-esteban-mercado.pdf`, idéntico al PDF proporcionado por Esteban. |
| **Artefactos Visuales** | `Partially implemented` | Existen 3 componentes completos en `src/components/visual-artifacts/`, pero **no están importados ni conectados** a la UI activa. |
| **Tipografía Display (Syne)**| `Partially implemented` | Se carga desde Google Fonts en `index.html`, pero `@theme` en `src/index.css` mapea `--font-display` a `Space Grotesk`. `Syne` no está en uso. |
| **Color de Acento** | `Implemented` | El acento actual es rojo (`#EF4444` / `#DC2626`) y se conserva en esta revisión. |
| **Repositorio Git** | Implemented | Repositorio local en main con remoto origin: https://github.com/EstebanDMR/portfolio.git. |
| **Ubicación en Perfil** | `Confirmed` | Barranquilla / Remoto, confirmado por Esteban y aplicado en la página. |
| **Métricas de Proyectos**| `Implemented` | Los paneles activos ya no presentan cifras de rendimiento, volúmenes ni tiempos sin respaldo verificable. |

---

## 3. Tech Stack

Únicamente herramientas y dependencias efectivamente instaladas y en uso:

- **Runtime & Framework**: React `19.2.8` / React DOM `19.2.8`
- **Lenguaje**: TypeScript `~6.0.2`
- **Bundler & Build Tool**: Vite `8.3.0` (`@vitejs/plugin-react` `6.1.1`)
- **Estilos**: Tailwind CSS `4.3.3` (`@tailwindcss/vite` `4.3.3`, configurado vía `@theme` en `src/index.css`)
- **Iconos**: `@phosphor-icons/react` `^2.1.10`
- **Linter**: Oxlint `^1.81.0` (configurado en `.oxlintrc.json`)
- **Tipos**: `@types/react` `19.2.18`, `@types/react-dom` `19.2.7`, `@types/node` `24.13.3`
- **Fuentes (CDN en `index.html`)**:
  - `Space Grotesk` (weights: 300, 400, 500, 600, 700)
  - `JetBrains Mono` (weights: 300, 400, 500, 700)
  - `Syne` (weights: 700, 800 — cargada, pendiente de mapear en CSS)
- **Animaciones**: CSS puro (`@keyframes marquee`, transiciones CSS nativas, utilidades Tailwind). Sin librerías externas de animación.

---

## 4. Project Architecture

### Árbol de Archivos Simplificado

```
portafolio-edmr/
├── .oxlintrc.json                      # Configuración de Oxlint
├── index.html                          # Entry point HTML, Google Fonts, meta SEO
├── package.json                        # Scripts (dev, build, lint, preview) y dependencias
├── tsconfig.json                       # Configuración base de TypeScript
├── tsconfig.app.json                   # TypeScript para código cliente (src)
├── tsconfig.node.json                  # TypeScript para entorno Vite
├── vite.config.ts                      # Plugins Vite (React + Tailwind v4)
├── public/
│   ├── favicon.svg                     # Favicon SVG (32x32)
│   └── icons.svg                       # Sprite de iconos SVG (no consumido actualmente)
├── stitch-reference/                   # Prototipo inicial exportado desde Google Stitch
│   ├── screen.html                     # HTML/Tailwind CDN de referencia
│   └── screen.png                      # Captura visual del diseño Stitch
└── src/
    ├── main.tsx                        # Punto de montaje ReactDOM
    ├── App.tsx                         # Orquestador de secciones y estado del modal
    ├── index.css                       # Tokens @theme Tailwind v4, animaciones, scrollbar
    ├── assets/
    │   ├── hero.png                    # Asset sin referencias activas
    │   ├── react.svg                   # Boilerplate Vite (sin uso)
    │   └── vite.svg                    # Boilerplate Vite (sin uso)
    ├── data/
    │   ├── profile.ts                  # Perfil, biografía y formación en español
    │   ├── projects.ts                 # Proyectos y casos de estudio en español
    │   └── translations.ts             # Versiones inglesas de perfil y proyectos
    └── components/
        ├── layout/
        │   ├── Header.tsx              # Barra superior fija, branding, links y selector ES/EN
        │   └── Footer.tsx              # Sección [ 05 ] Contacto, reloj en vivo, copiado de email, créditos
        ├── home/
        │   ├── Hero.tsx                # Sección [ 00 ] Split screen, titular, ficha técnica, status CTA
        │   ├── TickerMarquee.tsx       # Marquee continuo de texto infinito
        │   ├── AboutSection.tsx        # Sección [ 01 ] Marco ASCII, biografía, // AHORA MISMO
        │   ├── ProjectsSection.tsx     # Sección [ 02 ] Casos de estudio con gráficos mock inline
        │   ├── StackSection.tsx        # Sección [ 03 ] Filtros por categoría y nube tipográfica interactiva
        │   ├── EducationSection.tsx    # Sección [ 04 ] Ficha tabular académica y técnica
        │   └── ProjectModal.tsx        # Modal con desglose formal de ingeniería por proyecto
        └── visual-artifacts/           # Visualizadores técnicos (creados, pendientes de conectar)
            ├── RouteOptimizerGraph.tsx     # Grafo interactivo Dijkstra vs A*
            ├── SalesFlowArchitecture.tsx   # Arquitectura por capas y pipeline HTTP/RBAC
            └── BaseElectoralFlow.tsx       # Comparativa técnica v1 (cliente) vs v2 (cursor server)
```

### Responsabilidades Clave

- **Entry Points**: [`src/main.tsx`](file:///e:/EDveloper/Antigravity/portafolio-edmr/src/main.tsx) monta [`src/App.tsx`](file:///e:/EDveloper/Antigravity/portafolio-edmr/src/App.tsx) dentro de [`index.html`](file:///e:/EDveloper/Antigravity/portafolio-edmr/index.html).
- **Capa de Datos**: Perfil y formación en `src/data/profile.ts`; proyectos y casos de estudio en `src/data/projects.ts`; equivalentes ingleses en `src/data/translations.ts`. Etiquetas e ilustraciones de apoyo están en los componentes.
- **Navegación**: Basada en anclas `#` (`#hero`, `#sobre-mi`, `#proyectos`, `#stack`, `#educacion`, `#contacto`).

---

## 5. Current Page Structure

Orden real de renderizado en [`src/App.tsx`](file:///e:/EDveloper/Antigravity/portafolio-edmr/src/App.tsx):

1. **Fixed Header**: [`src/components/layout/Header.tsx`](file:///e:/EDveloper/Antigravity/portafolio-edmr/src/components/layout/Header.tsx)
2. **`[ 00 ]` Hero Section**: [`src/components/home/Hero.tsx`](file:///e:/EDveloper/Antigravity/portafolio-edmr/src/components/home/Hero.tsx) (`#hero`)
3. **Continuous Ticker Marquee**: [`src/components/home/TickerMarquee.tsx`](file:///e:/EDveloper/Antigravity/portafolio-edmr/src/components/home/TickerMarquee.tsx)
4. **`[ 01 ]` Sobre Mí**: [`src/components/home/AboutSection.tsx`](file:///e:/EDveloper/Antigravity/portafolio-edmr/src/components/home/AboutSection.tsx) (`#sobre-mi`)
5. **`[ 02 ]` Proyectos (Casos de Estudio)**: [`src/components/home/ProjectsSection.tsx`](file:///e:/EDveloper/Antigravity/portafolio-edmr/src/components/home/ProjectsSection.tsx) (`#proyectos`)
6. **`[ 03 ]` Lo que uso (Stack & Herramientas)**: [`src/components/home/StackSection.tsx`](file:///e:/EDveloper/Antigravity/portafolio-edmr/src/components/home/StackSection.tsx) (`#stack`)
7. **`[ 04 ]` Formación (Educación y Formación)**: [`src/components/home/EducationSection.tsx`](file:///e:/EDveloper/Antigravity/portafolio-edmr/src/components/home/EducationSection.tsx) (`#educacion`)
8. **`[ 05 ]` Contacto & Sub-Footer**: [`src/components/layout/Footer.tsx`](file:///e:/EDveloper/Antigravity/portafolio-edmr/src/components/layout/Footer.tsx) (`#contacto`)
9. **Engineering Case Study Modal (Portal Overlay)**: [`src/components/home/ProjectModal.tsx`](file:///e:/EDveloper/Antigravity/portafolio-edmr/src/components/home/ProjectModal.tsx)

---

## 6. Design System

### Paleta de Colores en Código

Definidos en [`src/index.css`](file:///e:/EDveloper/Antigravity/portafolio-edmr/src/index.css) y usados en clases utilitarias:

- **Fondo Base**: `#0A0A0B` (`--color-brand-dark`)
- **Superficie / Cards**: `#121214` (`--color-brand-surface`)
- **Superficie Alternativa**: `#0E0E10` (`--color-brand-surfaceAlt`)
- **Superficie Footer / Fondo Oscuro**: `#080809` (`--color-brand-surfaceDark`)
- **Bordes Primarios**: `#27272A` (`--color-brand-border`)
- **Bordes Claros / Hover**: `#3F3F46` (`--color-brand-borderLight`)
- **Texto Principal**: `#FAFAFA`
- **Texto Cuerpo**: `#D4D4D8`
- **Texto Secundario / Labels**: `#A1A1AA` (`--color-brand-textMuted`)
- **Texto Muted Fuerte / Timestamps**: `#71717A`
- **Color de Acento Actual**: `#EF4444` (`--color-brand-orange`) / `#DC2626` (`--color-brand-orangeDark`) / `#F87171` (`--color-brand-mint`)
- **Acento Secundario**: `#38bdf8` (`--color-brand-accent`) utilizado en diagramas SVG

> **Inconsistencias Detectadas**:
> 1. Los nombres de tokens en `index.css` contienen nombres heredados de Stitch (`--color-brand-orange`, `--color-brand-mint`), pero sus valores son rojos (`#EF4444`, `#F87171`).
> 2. Hay múltiples valores hexadecimales hardcodeados directamente en clases de Tailwind (e.g. `border-[#27272A]`, `text-[#EF4444]`) en vez de utilizar siempre los alias de tema.

### Tipografía

- **Sans / Cuerpo**: `'Space Grotesk', sans-serif` (`--font-sans`)
- **Mono / Código & Metadatos**: `'JetBrains Mono', monospace` (`--font-mono`, clase `.font-mono-code`)
- **Display**: `'Space Grotesk', sans-serif` (`--font-display`).  
  *Nota*: `Syne` está importada en el HTML pero no mapeada en el CSS.

### Espaciado & Contenedores

- No se utiliza un `max-w-7xl mx-auto` envolvente global.
- Se implementa ancho completo con padding horizontal responsivo:
  - Header: `px-4 sm:px-8 lg:px-12`
  - Hero: `p-6 sm:p-8 md:p-10 lg:p-12`
  - Secciones (`About`, `Projects`, `Stack`, `Education`, `Footer`): `px-6 sm:px-10 lg:px-14`
- Espaciado vertical entre secciones: `py-24` con divisores horizontales `border-b border-[#27272A]`.

### Bordes & Estructura Visual

- Bordes sutiles y rectilíneos (`border-[#27272A]`).
- Redondeo mínimo (`rounded` 4px o `rounded-md` 6px en chips y botones). Sin tarjetas redondeadas voluminosas.

---

## 7. Visual Direction / Do Not Regress

La dirección aprobada es una estética **Editorial + Engineering** técnica, limpia y con personalidad de sistemas.

### Principios Fundamentales

- **Tema Oscuro**: Negro (`#0A0A0B`) y grises profundos como base dominante.
- **Contraste Blanco**: `#FAFAFA` para titulares y elementos activos de alta jerarquía.
- **Color de Acento**: Rojo `#EF4444`, usado en puntos focales, enlaces y etiquetas. La revisión de contenido conserva este color.
- **Restricción del Acento**: El acento jamás debe inundar fondos enteros ni competir con el contenido.
- **Tipografía Display de Alto Impacto**: Títulos en escala contundente (`font-black uppercase tracking-tight`).
- **Composición Asimétrica Intencional**: Distribución editorial con fichas técnicas laterales y números de índice `[ 00 ]`.
- **Líneas y Divisores Finos**: Separadores precisos de 1px (`#27272A`).
- **Proyectos como Evidencia Técnica**: Enfoque en decisiones y funciones comprobables, con ilustraciones sin métricas ficticias.

### Elementos Prohibidos (BANNED)

- ❌ Apariencia de plantilla comercial de Envato / Bootstrap / SaaS genérico.
- ❌ Gradientes decorativos multicolores, púrpuras o azules fluorescentes tipo "AI landing page".
- ❌ Glassmorphism excesivo, blur pesado o sombras difusas brillantes.
- ❌ Blobs flotantes, orbes de luz desenfocados o partículas interactivas canvas.
- ❌ Tarjetas blancas o grises con radios gigantes (`rounded-3xl`) repetidas en cuadrículas uniformes.
- ❌ Barras de porcentaje de habilidades (e.g. "React 95%", "Python 80%").
- ❌ Muros infinitos de logos de tecnologías sin contexto de uso.
- ❌ Datos, métricas de usuarios o benchmarks ficticios o inventados.

---

## 8. Layout Strategy

**Principio Rector**: *Full-width para composición. Controlled width para lectura.*

### Estado de Implementación

- **Composición General**: `Implemented`. Las secciones se extienden al 100% del viewport con padding horizontal fluido (`px-6 sm:px-10 lg:px-14`), eliminando márgenes muertos laterales en monitores anchos.
- **Hero Split-Screen**: `Implemented`. Flex layout de dos columnas: canvas izquierdo expansivo (`flex-1`) y panel de especificaciones derecho acoplado (`w-full md:w-60 lg:w-72 xl:w-80`).
- **Ancho de Lectura Controlado**: `Partially implemented`.
  - El párrafo principal del Hero está limitado por `max-w-2xl`.
  - La biografía en Sobre Mí está contenida dentro de una columna de 7 divisiones (`md:col-span-7`).
  - Las descripciones de proyectos están acotadas a 6 columnas (`md:col-span-6`).
  - El modal de casos de estudio está contenido en `max-w-3xl`.
  - *Pendiente*: Estandarizar anchos de línea usando unidades de caracteres (`ch` o `max-w-prose`) para garantizar legibilidad estricta en pantallas ultra-wide (2K / 4K).

---

## 9. Projects

Datos verificados en [`src/data/projects.ts`](file:///e:/EDveloper/Antigravity/portafolio-edmr/src/data/projects.ts) y en los repositorios locales hermanos:

### 1. RouteOptimizer
- **Categoría**: Algoritmos y estructuras de datos · Desarrollo independiente.
- **Enfoque**: Algoritmos · Estructuras de datos · Visualización.
- **Tecnologías**: TypeScript · Grafos · Dijkstra · A* · Montículo binario · Vitest.
- **Año / Estado**: 2026 | Completado / Código abierto.
- **Enlaces**: Repo GitHub (`https://github.com/EstebanDMR/RouteOptimizer`)
- **Decisiones Clave**: Min-Heap binario implementado desde cero sobre array dinámico (`O(log V)` push/pop, `O(1)` peek); modelado de grafos con listas de adyacencia sobre `Map` (`O(V + E)`); factor de admisibilidad geométrica $\alpha$ para garantizar optimalidad en A*; motor de grabación de pasos desacoplado del canvas visual.
- **Representación Visual Actual**: SVG ilustrativo sin métricas atribuidas a una ejecución real en `ProjectsSection.tsx`. Existe componente interactivo desacoplado en `RouteOptimizerGraph.tsx` (pendiente de conectar).

### 2. SalesFlow CRM API
- **Categoría**: Desarrollo backend · API REST.
- **Enfoque**: Backend · API REST · Arquitectura por capas.
- **Tecnologías**: Node.js · Express · PostgreSQL · Prisma · JWT · Zod · Docker.
- **Año / Estado**: 2025 — 2026 | Completado / Código abierto.
- **Enlaces**: Repo GitHub (`https://github.com/EstebanDMR/salesflow-crm-api`), Docs Swagger (`https://salesflow-crm-api-n44y.onrender.com/api/docs`), Demo Live (`https://salesflow-crm-api-n44y.onrender.com`)
- **Decisiones Clave**: Módulos por dominio; validación con Zod; autenticación JWT y permisos RBAC; Helmet, limitación de solicitudes, Pino, pruebas con Jest/Supertest y documentación OpenAPI/Swagger.
- **Representación Visual Actual**: Ilustración de rutas y flujo de validación/autorización en `ProjectsSection.tsx`. Existe componente desacoplado en `SalesFlowArchitecture.tsx` (pendiente de conectar).

### 3. Base Electoral
- **Categoría**: Aplicación web · Gestión de datos.
- **Enfoque**: Aplicación web · Gestión de datos · Rendimiento.
- **Tecnologías**: React · Tailwind CSS · Firebase Auth · Realtime Database · XLSX (exportación con ExcelJS).
- **Año / Estado**: 2025 | Sitio publicado.
- **Enlaces**: Repo GitHub (`https://github.com/EstebanDMR/base-electoral`), Demo Live (`https://base-electoral.vercel.app/`)
- **Decisiones Clave**: Separación de acceso a datos (DAL), consultas con `limitToFirst` y `startAt`, normalización de nombres, control de duplicados, autenticación y roles, exportación XLSX con ExcelJS.
- **Representación Visual Actual**: Tarjetas de funciones verificadas y flujo de datos sin cifras ficticias en `ProjectsSection.tsx`. Existe componente desacoplado en `BaseElectoralFlow.tsx` (pendiente de conectar).

---

## 10. Content & Copy

El perfil y la formación están en `src/data/profile.ts`, los proyectos en `src/data/projects.ts`, las versiones inglesas en `src/data/translations.ts` y algunas etiquetas breves en los componentes.

- **Hero**:
  - Encabezado: `[ 00 ] DESARROLLO DE SOFTWARE Y SISTEMAS DE DATOS`.
  - Titular: `ESTEBAN MERCADO DEV`
  - Rol principal: `DESARROLLADOR DE SOFTWARE JUNIOR`; ubicación `BARRANQUILLA / REMOTO`.
  - Statement: desarrollo de software, comunicación entre sistemas y algoritmos; búsqueda de la primera oportunidad profesional.
  - Tecnologías visibles: Node · TypeScript · Python · SQL · PostgreSQL · React.
  - CTA Principal: `DISPONIBLE PARA TRABAJAR`
- **Sobre Mí**:
  - Título: *"Construyo software entendiendo cómo funciona."*
  - Bloque `// AHORA MISMO`: etapa final de carrera, proyectos con React/Node/TypeScript/SQL y aprendizaje en backend, arquitectura, algoritmos y web.
  - Tres bloques: `ENFOQUE` (Desarrollo de software), `INTERÉS` (Backend · Web · Datos), `METODOLOGÍA` (Código claro · Pruebas · Git).
- **Proyectos**:
  - Encabezado: `[ 02 ] — CASOS DE ESTUDIO`, titular `PROYECTOS`, subtítulo *"Proyectos personales y decisiones técnicas"*, contador `03 / 03`.
  - Orden: RouteOptimizer, SalesFlow CRM API, Base Electoral. Cada panel muestra enfoque, tecnologías, estado y enlaces a evidencia.
- **Lo que uso (Stack)**:
  - Encabezado: `[ 03 ] TECNOLOGÍAS Y HERRAMIENTAS`, titular `LO QUE USO`.
  - 16 tecnologías seleccionadas en cuatro categorías: Interfaz (4), Servidor (6), Datos y SQL (4), Herramientas (2); filtro interactivo conservado.
- **Formación**:
  - Encabezado: `[ 04 ] EDUCACIÓN Y FORMACIÓN`, titular `FORMACIÓN`.
  - Cinco filas respaldadas por el CV vigente: Ingeniería de Sistemas (Universidad de la Costa, etapa final), Bootcamp de Análisis de Datos (BeTek, 40 horas, 2026), Analítica de Datos para Procesos Logísticos (SENA, en curso), Técnico en Nómina y Prestaciones Sociales (SENA, 2018–2019), Inglés (B1 certificado).
- **Contacto & Footer**:
  - Titular: `HABLE[MOS]` con bloque de contraste.
  - 3 columnas: `ESCRÍBEME` (`mercadorachath@gmail.com` + botón copiar), `REDES` (LinkedIn, GitHub), `ESTADO` (Disponible · Barranquilla / Remoto + hora local).
  - Créditos: `© 2026 ESTEBANDMR`.

---

## 11. Google Stitch

En el directorio [`stitch-reference/`](file:///e:/EDveloper/Antigravity/portafolio-edmr/stitch-reference) residen `screen.html` (prototipo estático con Tailwind CDN) y `screen.png`.

- **Referencia Visual Adoptada**:
  - Estructura de numeración técnica `[ 00 ]` a `[ 05 ]`.
  - Hero dividido con tabla de metadatos tipo ficha técnica lateral y bloque sólido de estado.
  - Marco de desarrollador con arte ASCII en Sobre Mí (`ESTEBAN_M.JPG`).
  - Layout asimétrico de "LO QUE USO" (categorías a la izquierda, nube tipográfica a la derecha).
  - Estilo del titular `HABLE[MOS]` en Contacto.
- **Evolución & Divergencias en el Código Real**:
  - **Ancho del Layout**: Stitch utilizaba un contenedor fijo `max-w-7xl mx-auto`. El código React migró hacia composición edge-to-edge con `w-full px-6 sm:px-10 lg:px-14`.
  - **Modularización**: Se extrajo la data hacia `src/data/` con tipado estricto en TypeScript.
  - **Interactividad**: Se construyó `ProjectModal.tsx` con soporte para teclado y casos de estudio exhaustivos.
  - **Artefactos Técnicos**: Se programaron 3 componentes enriquecidos en `src/components/visual-artifacts/`.
- **Color**: El prototipo emplea el rojo `#EF4444`, que también continúa en el sitio actual.

---

## 12. Responsive & Accessibility

- **Desktop (>= 1024px)**: Layout asimétrico completo, split-screen en Hero y Footer a 3 columnas.
- **Tablet (768px - 1023px)**: Columnas colapsan ordenadamente (`md:col-span-12`), split hero preservado.
- **Mobile (< 768px)**:
  - Hero colapsa a flujo vertical continuo.
  - Ticker marquee fluye sin desbordamiento.
  - *Deficiencia identificada*: En [`Header.tsx`](file:///e:/EDveloper/Antigravity/portafolio-edmr/src/components/layout/Header.tsx), los links de navegación se ocultan (`hidden lg:flex`) sin menú alternativo móvil.
- **Control de Desbordamiento**: `overflow-x-hidden` activo en `html`, `body` y contenedor raíz de `App.tsx`.
- **Accesibilidad (a11y)**:
  - Estructura semántica completa (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<nav>`, jerarquía `<h1>`-`<h3>`).
  - Contraste: Texto principal `#FAFAFA` y `#D4D4D8` sobre `#0A0A0B` supera holgadamente ratio WCAG AAA. Textos de bajo contraste (`#71717A` en tamaño `10px`) deben reservarse estrictamente para metadatos decorativos.
  - Modal accesible: Cierre con tecla Escape (`Escape`), bloqueo de scroll en el body y atributos de etiquetado `aria-label="Cerrar modal"`.
  - Movimiento reducido: Implementado en [`src/index.css`](file:///e:/EDveloper/Antigravity/portafolio-edmr/src/index.css) con regla global `@media (prefers-reduced-motion: reduce)`.

---

## 13. Performance & Technical Quality

- **Build y linter**: El proyecto dispone de scripts `npm run build` y `npm run lint`; verificar ambos tras cada cambio.
- **Código No Conectado (Dead / Dormant Code)**:
  - Los 3 componentes de [`src/components/visual-artifacts/`](file:///e:/EDveloper/Antigravity/portafolio-edmr/src/components/visual-artifacts) no están importados en ningún archivo.
  - Assets no referenciados: [`src/assets/hero.png`](file:///e:/EDveloper/Antigravity/portafolio-edmr/src/assets/hero.png), [`src/assets/react.svg`](file:///e:/EDveloper/Antigravity/portafolio-edmr/src/assets/react.svg), [`src/assets/vite.svg`](file:///e:/EDveloper/Antigravity/portafolio-edmr/src/assets/vite.svg), [`public/icons.svg`](file:///e:/EDveloper/Antigravity/portafolio-edmr/public/icons.svg).
- **Tipografía en Red**: La fuente `Syne` se descarga desde Google Fonts en `index.html` pero no se utiliza en el CSS compilado.
- **SEO & Metadata**: Existen etiquetas `<title>` y `<meta name="description">` en `index.html`. Faltan etiquetas OpenGraph (`og:image`, `og:title`) y Twitter Cards.

---

## 14. Git State

- **Estado Actual**: Repositorio local en main, vinculado a https://github.com/EstebanDMR/portfolio.git.
- **Precaución para Agentes**:
  - No sobrescribir [`stitch-reference/screen.html`](file:///e:/EDveloper/Antigravity/portafolio-edmr/stitch-reference/screen.html) ni [`stitch-reference/screen.png`](file:///e:/EDveloper/Antigravity/portafolio-edmr/stitch-reference/screen.png).
  - No borrar los componentes de [`src/components/visual-artifacts/`](file:///e:/EDveloper/Antigravity/portafolio-edmr/src/components/visual-artifacts).
  - Respetar los archivos de datos [`src/data/profile.ts`](file:///e:/EDveloper/Antigravity/portafolio-edmr/src/data/profile.ts) y [`src/data/projects.ts`](file:///e:/EDveloper/Antigravity/portafolio-edmr/src/data/projects.ts).

---

## 15. Current Priorities

- **P1 — Important**:
  1. **Integración de Artefactos Visuales**: Conectar `RouteOptimizerGraph`, `SalesFlowArchitecture` y `BaseElectoralFlow` dentro de `ProjectsSection` o dentro de `ProjectModal`.
  2. **Navegación Móvil**: Desarrollar menú / drawer móvil en `Header.tsx` para resoluciones `< lg`.
  3. **Optimización de Fuentes**: Mapear `Syne` a `--font-display` o remover su descarga en `index.html` si se usará `Space Grotesk`.
  4. **Limpieza de Assets**: Eliminar archivos huérfanos (`hero.png`, `react.svg`, `vite.svg`, `icons.svg`).
- **P2 — Polish**:
  1. **Ajuste Fino de Ancho de Lectura**: Refinar los contenedores de texto con límites tipográficos en `ch` para pantallas ultra-wide.
  2. **Metadata OpenGraph / Social**: Añadir etiquetas completas de compartir en redes en `index.html`.
  3. **Micro-interacciones**: Perfeccionar anillos de foco (`focus-visible`) para navegación 100% accesible por teclado.

---

## 16. Agent Working Rules

### Before Working
1. **Read `PROJECT_CONTEXT.md`** completamente para alinear decisiones con la arquitectura y dirección visual.
2. **Inspeccionar el código relevante** antes de editar o proponer modificaciones.
3. **El código fuente real es la fuente última de verdad**. Si este documento contradice lo que está implementado, verificar y actualizar el documento.

### After Working
Actualizar `PROJECT_CONTEXT.md` cuando un cambio afecte de forma material a:
- Arquitectura o estructura de carpetas.
- Funcionalidad de secciones o componentes.
- Sistema de diseño, tokens de color o tipografías.
- Estrategia de layout o composición.
- Dependencias o tooling técnico.
- Información o casos de estudio de proyectos.
- Prioridades actuales y estado de implementación.

**NO actualizar** por modificaciones triviales:
- Ajustes menores de espaciado o padding.
- Correcciones de tipografía o redacción puntual.
- Ajustes CSS cosméticos insignificantes.
- Formateo de código o refactors internos que no cambien el contexto operativo.

### Mantenimiento del Documento
- `PROJECT_CONTEXT.md` refleja el **estado actual**, no el historial de cambios.
- **No añadir apéndices históricos ni bitácoras cronológicas**. Reemplazar la información desactualizada para que el archivo permanezca conciso, estructurado y de lectura inmediata para Antigravity y Codex.
- Git es la única fuente de verdad para el historial de commits y versiones.

