'use client'

import { motion } from 'framer-motion'

const INSUMOS = [
  'Leche en polvo',
  'Proteínas enlatadas',
  'Granos secos',
  'Harina de maíz precocida',
  'Pasta',
  'Avena en hojuelas',
  'Galletas saladas',
  'Puré de papa deshidratado',
  'Mantequilla de maní',
  'Huevos en polvo deshidratados',
  'Aceite vegetal',
  'Cubos de caldo',
  'Sal y azúcar',
  'Barras de supervivencia',
]

type Organizacion = {
  nombre: string
  descripcion: string
  url?: string
}

const ORGANIZACIONES: Organizacion[] = [
  {
    nombre: 'World Central Kitchen',
    descripcion: 'Chef José Andrés — ya desplegada en Venezuela distribuyendo comidas calientes a familias afectadas y rescatistas. Comprometió un millón de dólares de su fundación.',
    url: 'https://donate.wck.org/team/835442',
  },
  {
    nombre: 'Cáritas Venezuela',
    descripcion: 'Décadas de presencia en el país. Despliegue de emergencia inmediato vía su red diocesana, con centros de acopio en varias zonas afectadas.',
    url: 'https://caritas.org.ve',
  },
  {
    nombre: 'Global Empowerment Mission',
    descripcion: 'Movilizada en alianza con I Love Venezuela, su socio local de largo plazo en el país.',
    url: 'https://globalempowermentmission.org/mission/venezuela-earthquakes',
  },
  {
    nombre: 'Hogar Bambi Venezuela',
    descripcion: 'Trabaja con niñas, niños y adolescentes en Venezuela. Acepta donaciones en dólares.',
    url: 'https://hogarbambi.org/donar-ahora',
  },
  {
    nombre: 'Fundación AmCham',
    descripcion: 'Cámara Venezolano-Americana — fondo específico para el terremoto, cobro vía Stripe desde fuera de Venezuela.',
  },
  {
    nombre: 'We Love Foundation',
    descripcion: 'I Love Venezuela — con base en Miami, distribuye fondos a grupos verificados: kits médicos, agua y comida.',
  },
  {
    nombre: 'GoFundMe',
    descripcion: 'Emergency Relief for Venezuela — campaña de recaudación abierta para asistencia de emergencia.',
    url: 'https://gofundme.com',
  },
  {
    nombre: 'JustGiving',
    descripcion: 'Healing Venezuela — apoya hospitales, médicos y servicios de rescate en el país.',
    url: 'https://justgiving.com/campaign/venezuelaearthquake2026',
  },
  {
    nombre: 'People in Need',
    descripcion: 'SOS Venezuela — ONG internacional con apelación dedicada al terremoto.',
    url: 'https://peopleinneed.net',
  },
  {
    nombre: 'ACNUR — USA for UNHCR',
    descripcion: 'La Agencia de la ONU para Refugiados está activa en Venezuela. En algunos períodos ofreció triplicar donaciones mensuales.',
    url: 'https://unhcr.org',
  },
  {
    nombre: 'Somos AlumnUSB',
    descripcion: 'Comunidad de egresados de la USB canalizando apoyo de forma ágil y directa hacia familias afectadas.',
    url: 'https://alumnusb.org/ayuda-tras-terremoto/',
  },
]

// Iconos de línea, mismo vocabulario que el resto del sitio (14-18px, stroke=currentColor,
// strokeWidth 2). Se ciclan entre los insumos y también arman el patrón de fondo del hero.
function IconGrano() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2c3 3 3 6 0 9-3-3-3-6 0-9Z" />
      <path d="M12 11v11" /><path d="M8 15c1.5-1 2.5-1 4-.5" /><path d="M16 18c-1.5-1-2.5-1-4-.5" />
    </svg>
  )
}
function IconLata() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="6" width="14" height="14" rx="1" />
      <ellipse cx="12" cy="6" rx="7" ry="2" />
      <path d="M9 11h6" />
    </svg>
  )
}
function IconGota() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2s7 8 7 13a7 7 0 1 1-14 0c0-5 7-13 7-13Z" />
    </svg>
  )
}
function IconPan() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 12c0-4 3.5-7 8-7s8 3 8 7-3 6-8 6-8-2-8-6Z" />
      <path d="M8 11c1-1 2-1 4 0" /><path d="M14 11c1-1 1.5-1 2 0" />
    </svg>
  )
}
function IconHuevo() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3C8 8 6 12.5 6 15.5a6 6 0 0 0 12 0C18 12.5 16 8 12 3Z" />
    </svg>
  )
}
const ICONOS = [IconLata, IconGrano, IconGota, IconPan, IconHuevo]

function ArrowIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 17 17 7" /><path d="M7 7h10v10" />
    </svg>
  )
}

// Patrón de fondo del hero: los mismos iconos de comida, dispersos y girados, a baja
// opacidad — un "food pattern" vectorial en vez de una foto (evita depender de un
// servicio externo de imágenes y respeta la estética ilustrada del resto del sitio).
function FoodPatternBG() {
  const tiles = Array.from({ length: 24 })
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute -inset-4 grid grid-cols-6 sm:grid-cols-8 gap-6 opacity-[0.14] text-crisis-red">
        {tiles.map((_, i) => {
          const Icon = ICONOS[i % ICONOS.length]
          const rot = (i * 37) % 45 - 22
          return (
            <div key={i} className="w-10 h-10 sm:w-12 sm:h-12" style={{ transform: `rotate(${rot}deg)` }}>
              <Icon />
            </div>
          )
        })}
      </div>
    </div>
  )
}

function OrgCard({ org, index }: { org: Organizacion; index: number }) {
  const base = `
    group relative block bg-panel dark:bg-panel-dark border border-rule dark:border-rule-dark
    border-l-[3px] border-l-crisis-red p-5 h-full transition-colors
  `
  const motionProps = {
    initial: { opacity: 0, y: 14 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-40px' },
    transition: { duration: 0.35, delay: Math.min(index, 8) * 0.05, ease: 'easeOut' as const },
  }

  if (!org.url) {
    return (
      <motion.div {...motionProps} className={`${base} opacity-80`}>
        <h3 className="font-serif font-semibold text-ink dark:text-ink-dark text-base mb-1.5 pr-5">{org.nombre}</h3>
        <p className="text-small text-ink-muted dark:text-ink-muted-dark">{org.descripcion}</p>
        <span className="absolute top-5 right-4 font-mono text-[9px] uppercase tracking-widest text-ink-muted dark:text-ink-muted-dark">
          Sin link
        </span>
      </motion.div>
    )
  }
  return (
    <motion.a
      {...motionProps}
      href={org.url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -4, transition: { duration: 0.15 } }}
      whileTap={{ scale: 0.97 }}
      className={`${base} hover:bg-[#1A1A1A] hover:shadow-lg hover:shadow-black/20 active:bg-[#1A1A1A]`}
    >
      <span className="absolute top-5 right-4 text-ink-muted dark:text-ink-muted-dark opacity-0 group-hover:opacity-100 group-active:opacity-100 group-hover:text-crisis-red group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
        <ArrowIcon />
      </span>
      <h3 className="font-serif font-semibold text-ink dark:text-ink-dark text-base mb-1.5 pr-5 group-hover:text-crisis-red transition-colors">
        {org.nombre}
      </h3>
      <p className="text-small text-ink-muted dark:text-ink-muted-dark">{org.descripcion}</p>
    </motion.a>
  )
}

function InsumoCard({ item, index }: { item: string; index: number }) {
  const Icon = ICONOS[index % ICONOS.length]
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.3, delay: Math.min(index, 10) * 0.04, ease: 'easeOut' }}
      whileHover={{ y: -3, transition: { duration: 0.15 } }}
      whileTap={{ scale: 0.96 }}
      className="group flex flex-col items-start gap-3 bg-panel dark:bg-panel-dark border border-rule dark:border-rule-dark
                 border-l-[3px] border-l-crisis-red px-4 py-4 hover:bg-crisis-red/[0.06] transition-colors"
    >
      <span className="flex items-center justify-center w-9 h-9 rounded-full bg-crisis-red/10 text-crisis-red shrink-0">
        <span className="w-5 h-5"><Icon /></span>
      </span>
      <span className="font-serif font-semibold text-ink dark:text-ink-dark leading-snug">{item}</span>
    </motion.div>
  )
}

export default function DonarPage() {
  return (
    <main className="pb-10 lg:pb-14">
      {/* Hero con patrón de comida y degradado hacia el fondo de la página */}
      <div className="relative h-64 sm:h-80 lg:h-96 overflow-hidden">
        <FoodPatternBG />
        <div className="absolute inset-0 bg-gradient-to-b from-paper/10 via-paper/80 to-paper dark:from-paper-dark/10 dark:via-paper-dark/85 dark:to-paper-dark" />
        <div className="relative z-10 h-full max-w-8xl mx-auto px-4 sm:px-6 lg:px-10 flex flex-col justify-end pb-8">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-eyebrow uppercase text-crisis-red mb-3"
          >
            Cómo ayudar
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="font-serif text-display text-ink dark:text-ink-dark"
          >
            Guía para donar
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="text-lead text-ink-muted dark:text-ink-muted-dark mt-3 max-w-prose"
          >
            Insumos más necesitados y organizaciones verificadas que están canalizando ayuda a Venezuela. Tocá cualquier tarjeta para abrir la página oficial.
          </motion.p>
        </div>
      </div>

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Insumos */}
        <section className="mb-14">
          <h2 className="text-eyebrow uppercase text-ink-muted dark:text-ink-muted-dark mb-4">Insumos más necesitados</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {INSUMOS.map((item, i) => (
              <InsumoCard key={item} item={item} index={i} />
            ))}
          </div>
        </section>

        {/* Donaciones monetarias */}
        <section className="mb-14">
          <h2 className="text-eyebrow uppercase text-ink-muted dark:text-ink-muted-dark mb-4">Dónde donar dinero</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
            {ORGANIZACIONES.map((org, i) => (
              <OrgCard key={org.nombre} org={org} index={i} />
            ))}
          </div>
        </section>

        {/* Fuentes */}
        <section className="bg-panel dark:bg-panel-dark border border-rule dark:border-rule-dark p-5">
          <p className="font-mono text-[10px] uppercase tracking-widest text-ink-muted dark:text-ink-muted-dark mb-2">Verificar más organizaciones</p>
          <p className="text-small text-ink-muted dark:text-ink-muted-dark max-w-prose mb-3">
            Antes de donar a una campaña que no reconozcas, revisá su trayectoria en{' '}
            <a href="https://donarseguro.com" target="_blank" rel="noopener noreferrer" className="text-crisis-red hover:underline">
              donarseguro.com
            </a>
            , un directorio de campañas legítimas para el terremoto de Venezuela.
          </p>
          <p className="font-mono text-[10px] text-ink-muted dark:text-ink-muted-dark">
            Fuentes:{' '}
            <a
              href="https://lga.lagranaldea.com/2026/06/28/guia-completa-para-ayudar-a-venezuela-tras-el-terremoto-donde-buscar-personas-como-donar-y-que-hacer/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-ink dark:hover:text-ink-dark"
            >
              La Gran Aldea
            </a>
            {' · '}
            <a
              href="https://alumnusb.org/ayuda-tras-terremoto/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-ink dark:hover:text-ink-dark"
            >
              AlumnUSB
            </a>
          </p>
        </section>
      </div>
    </main>
  )
}
