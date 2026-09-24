export interface ProjectTechnicalDecisions {
  title: string;
  description: string;
}

export interface EngineeringCaseStudy {
  context: string;
  problem: string;
  technicalDecisions: ProjectTechnicalDecisions[];
  tradeoffs: string[];
  learnings: string[];
}

export interface ProjectItem {
  id: string;
  projectNumber: string;
  index: string;         // '01', '02', '03'
  title: string;
  categoryTag: string;
  description: string;
  role: string;
  tech: string;
  year: string;
  status: string;
  repoUrl: string;
  liveUrl?: string;
  docsUrl?: string;
  caseStudy: EngineeringCaseStudy;
}

export const PROJECTS: ProjectItem[] = [
  {
    id: 'route-optimizer',
    projectNumber: 'PROYECTO 01',
    index: '01',
    title: 'RouteOptimizer',
    categoryTag: 'ALGORITMOS Y ESTRUCTURAS DE DATOS · DESARROLLO INDEPENDIENTE',
    description: 'Motor algorítmico desacoplado con implementaciones de Dijkstra y A* apoyadas en un montículo binario mínimo propio. Calcula rutas óptimas de forma determinística y las visualiza paso a paso sobre grafos dirigidos ponderados.',
    role: 'Algoritmos · Estructuras de datos · Visualización',
    tech: 'TypeScript · Grafos · Dijkstra · A* · Montículo binario · Vitest',
    year: '2026',
    status: 'Completado / Código abierto',
    repoUrl: 'https://github.com/EstebanDMR/RouteOptimizer',
    caseStudy: {
      context: 'RouteOptimizer es un proyecto personal para explorar la búsqueda de rutas en grafos dirigidos ponderados y visualizar cada paso del cálculo.',
      problem: 'Dijkstra y A* pueden encontrar rutas óptimas, pero A* necesita una heurística admisible para conservar esa garantía. El motor debía mantener el cálculo separado de la visualización.',
      technicalDecisions: [
        {
          title: 'Implementación del montículo binario mínimo desde cero',
          description: 'Construcción de MinPriorityQueue sobre un arreglo dinámico con inserción y extracción en O(log V), sin depender de una biblioteca externa para esta estructura.'
        },
        {
          title: 'Listas de adyacencia con tablas de dispersión (Map)',
          description: 'Modelado del grafo con listas de adyacencia basadas en Map para consultar los vecinos de cada nodo sin usar una matriz completa.'
        },
        {
          title: 'Factor de Admisibilidad Geométrica (α)',
          description: 'Cálculo de un factor de escala para mantener la heurística de A* dentro del costo real de las aristas en los grafos representados.'
        },
        {
          title: 'Motor de reproducción paso a paso',
          description: 'El algoritmo registra cronológicamente cada acción (visit_node, examine_edge, update_distance), desacoplando el cálculo del renderizado gráfico interactivo.'
        }
      ],
      tradeoffs: [
        'A* añade el cálculo de una heurística; cuando la geometría ayuda a orientar la búsqueda, puede explorar menos nodos que Dijkstra.',
        'Las listas de adyacencia se ajustan mejor que una matriz a grafos con pocas conexiones por nodo.'
      ],
      learnings: [
        'La admisibilidad de la heurística es necesaria para que A* conserve la ruta óptima.',
        'Separar el motor de la interfaz facilitó probar los algoritmos con Vitest.'
      ]
    }
  },
  {
    id: 'salesflow-crm-api',
    projectNumber: 'PROYECTO 02',
    index: '02',
    title: 'SalesFlow CRM API',
    categoryTag: 'DESARROLLO BACKEND · API REST',
    description: 'API REST para la gestión de un CRM comercial, desarrollada con Node.js, Express, PostgreSQL y Prisma. Implementa autenticación JWT, control de acceso por roles, validación de datos, seguridad HTTP, limitación de solicitudes, registro de eventos, pruebas automatizadas y documentación OpenAPI/Swagger.',
    role: 'Backend · API REST · Arquitectura por capas',
    tech: 'Node.js · Express · PostgreSQL · Prisma · JWT · Zod · Docker',
    year: '2025 — 2026',
    status: 'Completado / Código abierto',
    repoUrl: 'https://github.com/EstebanDMR/salesflow-crm-api',
    docsUrl: 'https://salesflow-crm-api-n44y.onrender.com/api/docs',
    liveUrl: 'https://salesflow-crm-api-n44y.onrender.com',
    caseStudy: {
      context: 'SalesFlow CRM API es un proyecto personal para gestionar usuarios, clientes, prospectos, negociaciones y tareas mediante una API REST.',
      problem: 'Cada solicitud necesita validar datos y permisos antes de llegar a la lógica de negocio. La estructura por capas ayuda a mantener estas responsabilidades separadas.',
      technicalDecisions: [
        {
          title: 'Arquitectura por funciones y capas',
          description: 'Organización de los módulos auth, users, clients, leads, deals y tasks con rutas, validación y acceso a datos separados.'
        },
        {
          title: 'Validación con Zod',
          description: 'Middleware que comprueba los datos recibidos antes de ejecutar los controladores.'
        },
        {
          title: 'Control de Acceso Basado en Roles (RBAC)',
          description: 'Autenticación con JWT y permisos diferenciados para los roles de administración, gerencia y ventas.'
        },
        {
          title: 'Documentación y pruebas',
          description: 'Especificación OpenAPI con Swagger UI y pruebas automatizadas con Jest y Supertest.'
        }
      ],
      tradeoffs: [
        'JWT permite autenticar las solicitudes sin almacenar sesiones en el servidor; exige verificar el token en cada petición protegida.',
        'Prisma facilita trabajar con PostgreSQL desde los módulos de la API, mientras las reglas de acceso deben mantenerse explícitas en la aplicación.'
      ],
      learnings: [
        'El registro de solicitudes con Pino y el manejo centralizado de errores ayudan a identificar problemas durante el desarrollo.',
        'La autorización por roles necesita comprobarse en las rutas y en las consultas que acceden a datos de cada usuario.'
      ]
    }
  },
  {
    id: 'base-electoral',
    projectNumber: 'PROYECTO 03',
    index: '03',
    title: 'Base Electoral',
    categoryTag: 'APLICACIÓN WEB · GESTIÓN DE DATOS',
    description: 'Aplicación web para la gestión y consulta de información electoral, desarrollada con React y Firebase. Incluye autenticación, gestión de usuarios y roles, búsquedas, paginación por cursor, exportación de datos y una capa de acceso a datos separada de la interfaz.',
    role: 'Aplicación web · Gestión de datos · Rendimiento',
    tech: 'React · Tailwind CSS · Firebase Auth · Realtime Database · XLSX',
    year: '2025',
    status: 'Sitio publicado',
    repoUrl: 'https://github.com/EstebanDMR/base-electoral',
    liveUrl: 'https://base-electoral.vercel.app/',
    caseStudy: {
      context: 'Base Electoral es una aplicación web para registrar, consultar y organizar información electoral con acceso diferenciado por usuario.',
      problem: 'La primera versión descargaba todos los registros al iniciar. Al crecer la base, ese enfoque hacía más lenta la carga y trasladaba al navegador datos que no necesitaba mostrar.',
      technicalDecisions: [
        {
          title: 'Paginación por Cursores (limitToFirst + startAt)',
          description: 'Las consultas con limitToFirst y startAt solicitan los registros necesarios para cada página.'
        },
        {
          title: 'Desacoplamiento en Capas (DAL)',
          description: 'Separación del acceso a Firebase en src/services, la lógica de la aplicación en src/hooks y la presentación en src/views.'
        },
        {
          title: 'Normalización de datos y espera entre búsquedas',
          description: 'Normalización de nombres para búsquedas por prefijo y una breve espera al escribir para evitar consultas por cada tecla.'
        },
        {
          title: 'Control de duplicados',
          description: 'Eliminación de registros repetidos cuando dos páginas comparten el nodo del cursor en Realtime Database.'
        }
      ],
      tradeoffs: [
        'Realtime Database ofrece sincronización, pero sus consultas requieren preparar los datos para búsquedas por prefijo.',
        'La paginación por cursor evita descargar la base completa; el cliente debe controlar los registros repetidos en los límites de cada página.'
      ],
      learnings: [
        'Una aplicación que funciona con pocos registros puede necesitar otra estrategia de consulta cuando la base crece.',
        'Solicitar solo la página visible reduce el trabajo inicial del navegador.',
        'Separar el acceso a datos de la interfaz facilita cambiar las consultas sin rehacer las vistas.'
      ]
    }
  }
];
