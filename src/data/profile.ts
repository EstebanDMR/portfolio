export interface EducationItem {
  number: string;
  title: string;
  subtitle: string;
  year: string;
}

export interface ProfileData {
  name: string;
  firstName: string;
  lastName: string;
  role: string;
  location: string;
  status: string;
  specialty: string;
  focus: string;
  degree: string;
  statement: string;
  nowDoing: string[];
  microSkills: {
    number: string;
    label: string;
    value: string;
  }[];
  about: {
    paragraph1: string;
    paragraph2: string;
  };
  contact: {
    email: string;
    githubUrl: string;
    githubUser: string;
    linkedinUrl: string;
  };
  education: EducationItem[];
}

export const PROFILE: ProfileData = {
  name: 'Esteban Mercado Rachath',
  firstName: 'ESTEBAN',
  lastName: 'MERCADO',
  role: 'DESARROLLADOR DE SOFTWARE JUNIOR',
  location: 'BARRANQUILLA / REMOTO',
  status: 'DISPONIBLE PARA TRABAJAR',
  specialty: 'Desarrollo web y backend',
  focus: 'Bases de datos y algoritmos',
  degree: 'Ingeniería de Sistemas (etapa final)',
  statement: 'Construyo software prestando atención a cómo se estructuran los datos, cómo se comunican los sistemas y cómo los algoritmos resuelven problemas reales. Estoy terminando Ingeniería de Sistemas y busco iniciar mi carrera profesional como desarrollador de software.',
  nowDoing: [
    'Finalizando Ingeniería de Sistemas y preparándome para iniciar mi carrera profesional.',
    'Desarrollando proyectos con React, Node.js, TypeScript, SQL y bases de datos.',
    'Profundizando en backend, arquitectura de software, algoritmos y desarrollo web.'
  ],
  microSkills: [
    { number: '01', label: 'ENFOQUE', value: 'Desarrollo de software' },
    { number: '02', label: 'INTERÉS', value: 'Backend · Web · Datos' },
    { number: '03', label: 'METODOLOGÍA', value: 'Código claro · Pruebas · Git' }
  ],
  about: {
    paragraph1: 'Soy estudiante de Ingeniería de Sistemas en etapa final, con enfoque en desarrollo de software. He desarrollado proyectos personales y académicos utilizando React, Node.js, TypeScript, Python, SQL y bases de datos, trabajando en aplicaciones web, APIs REST y problemas de algoritmos y estructuras de datos.',
    paragraph2: 'Me interesa entender qué ocurre detrás de una aplicación: cómo se estructuran los datos, cómo se comunican sus componentes y cómo las decisiones técnicas afectan su funcionamiento. Busco una oportunidad como Desarrollador de Software Junior donde pueda aportar con mis conocimientos, trabajar en proyectos reales y seguir creciendo profesionalmente.'
  },
  contact: {
    email: 'mercadorachath@gmail.com',
    githubUrl: 'https://github.com/EstebanDMR',
    githubUser: 'EstebanDMR',
    linkedinUrl: 'https://www.linkedin.com/in/estebandmr/'
  },
  education: [
    {
      number: '01',
      title: 'Ingeniería de Sistemas',
      subtitle: 'Universidad de la Costa',
      year: '2021 — Actualidad · Etapa final'
    },
    {
      number: '02',
      title: 'Bootcamp de Análisis de Datos',
      subtitle: 'BeTek',
      year: '40 horas · 2026'
    },
    {
      number: '03',
      title: 'Analítica de Datos para Procesos Logísticos',
      subtitle: 'SENA',
      year: 'En curso'
    },
    {
      number: '04',
      title: 'Técnico en Nómina y Prestaciones Sociales',
      subtitle: 'SENA',
      year: '2018 — 2019'
    },
    {
      number: '05',
      title: 'Inglés',
      subtitle: 'Nivel certificado',
      year: 'B1'
    }
  ]
};
