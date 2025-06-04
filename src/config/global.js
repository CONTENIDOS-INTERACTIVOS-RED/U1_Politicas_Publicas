export default {
  global: {
    numeroUnidad: '1',
    tituloUnidad: 'El rol del Estado en el mundo moderno',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'El contexto histórico del rol del Estado en el desarrollo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Evolución del pensamiento sobre el Estado en el siglo XX',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo:
              'La crítica al Estado mínimo y el surgimiento del modelo de Estado eficaz',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo:
          'El Estado en un mundo en transformación: pilares del Informe de 1997',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo:
              'Pilar 1: Adaptar las funciones del Estado a sus capacidades reales',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Pilar 2: Fortalecer las instituciones públicas',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo:
              'Pilar 3: Establecer alianzas estratégicas con actores sociales y económicos',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Aguilar Villanueva, L. F. (2013). El estudio de las políticas públicas. Editorial Miguel Ángel Porrúa. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/73100?page=80',
    },
    {
      referencia:
        'Banco Mundial. (1997). El Estado en un mundo en transformación: Informe de 1997 sobre el desarrollo mundial. Grupo Banco Mundial. ',
      link: 'https://openknowledge.worldbank.org/handle/10986/5980',
    },
    {
      referencia:
        'Baró Herrera, A. (s.f.). Desarrollo financiero y crecimiento económico: puntos de vista y agenda de investigación. Banco Mundial. ',
      link:
        'https://d1wqtxts1xzle7.cloudfront.net/72886339/Desarrollo_financiero_Levine-libre.pdf',
    },
    {
      referencia:
        'Vargas Arébalo, C. (2007). Planificar, (2007). Planificar , informar e influir en políticas públicas. Ciencia y Sociedad, 10(19), 133-138.  ',
      link: 'https://www.redalyc.org/pdf/4259/425942453011.pdf',
    },
    {
      referencia:
        'Thoenig, J. C. (1997). Política pública y acción pública. Gestión y Política Pública, 6(1), 19-37.',
      link:
        'https://repositorio-digital.cide.edu/bitstream/handle/11651/3185/TJ_Vol.6_No.I_1sem.pdf ',
    },
    {
      referencia:
        'Levine, R. E. (1996). Desarrollo financiero y crecimiento económico: puntos de vista y agenda de investigación. Grupo Banco Mundial. ',
      link:
        'https://d1wqtxts1xzle7.cloudfront.net/72886339/Desarrollo_financiero_Levine-libre.pdf',
    },
    {
      referencia:
        'Harguindéguy, J. (2015). Análisis de políticas públicas (2a ed.). Difusora Larousse - Editorial Tecnos. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/115286',
    },
  ],
  glosario: [
    {
      termino: 'Ajuste estructural',
      significado:
        'Conjunto de medidas económicas y fiscales, promovidas por organismos internacionales, para reducir el tamaño del Estado.',
    },
    {
      termino: 'Capacidad institucional',
      significado:
        'Conjunto de recursos, habilidades y estructuras que permiten al Estado, diseñar e implementar políticas efectivas.',
    },
    {
      termino: 'Carrera administrativa',
      significado:
        'Régimen jurídico que regula el acceso, permanencia y promoción de los servidores públicos, con base en el mérito.',
    },
    {
      termino: 'Corrupción',
      significado:
        'Uso indebido del poder público para obtener beneficios personales, contrario al interés general.',
    },
    {
      termino: 'Descentralización',
      significado:
        'Transferencia de competencias y recursos del gobierno central a entidades territoriales o locales.',
    },
    {
      termino: 'Estado de bienestar',
      significado:
        'Modelo de Estado que asume la responsabilidad de garantizar derechos sociales como salud, educación y seguridad social.',
    },
    {
      termino: 'Estado eficaz',
      significado:
        'Modelo de gestión pública que ajusta las funciones estatales a su capacidad real, priorizando la eficiencia y la legitimidad.',
    },
    {
      termino: 'Evaluación de políticas',
      significado:
        'Proceso sistemático para valorar el diseño, implementación y resultados de una política pública.',
    },
    {
      termino: 'Gobernanza',
      significado:
        'Forma de ejercer el poder que involucra a múltiples actores (Estado, sociedad civil, sector privado) en la toma de decisiones.',
    },
    {
      termino: 'Informe de desarrollo mundial 1997',
      significado:
        'Documento del banco mundial que propone fortalecer la eficacia del Estado como eje para el desarrollo sostenible.',
    },
    {
      termino: 'Neoliberalismo',
      significado:
        'Corriente económica y política que promueve la libre competencia, la privatización y la mínima intervención estatal.',
    },
    {
      termino: 'Participación ciudadana',
      significado:
        'Intervención activa de la sociedad civil en la formulación, ejecución y control, de las políticas públicas.',
    },
    {
      termino: 'Políticas públicas',
      significado:
        'Conjunto de acciones estratégicas que realiza el Estado para atender problemas sociales y garantizar los derechos.',
    },
    {
      termino: 'Reforma institucional',
      significado:
        'Cambio normativo o estructural, orientado a mejorar el funcionamiento y la legitimidad de las instituciones del Estado.',
    },
    {
      termino: 'Rendición de cuentas',
      significado:
        'Obligación de las autoridades públicas de informar, justificar y asumir consecuencias por su gestión.',
    },
  ],
}
