'use client'

import { ArrowUpRight, Award, BookOpen, Check, ChevronRight, Globe2, Mail, Menu, Mic2, Quote, Send, Sparkles, Users, X } from 'lucide-react'
import { useState } from 'react'

const specialties = [
  { icon: BookOpen, title: 'Planificación editorial', text: 'Diseño de coberturas y narrativas para proyectos que necesitan mirada, ritmo y propósito.' },
  { icon: Mic2, title: 'Redacción institucional', text: 'Mensajes claros, rigurosos y humanos para instituciones, equipos y audiencias diversas.' },
  { icon: Users, title: 'Coordinación de equipos', text: 'Liderazgo de salas de prensa y equipos multidisciplinarios en contextos de alta exigencia.' },
  { icon: Globe2, title: 'Contenido multiplataforma', text: 'Historias que se adaptan a radio, prensa escrita, televisión, web y redes sociales.' },
]

const milestones = [
  { year: '1983', title: 'Licenciatura en Periodismo', text: 'Universidad de La Habana' },
  { year: '45+', title: 'Años de trayectoria', text: 'Prensa radial, escrita, televisiva y digital' },
  { year: '10', title: 'Años coordinando prensa', text: 'Federación Cubana de Béisbol' },
  { year: '3', title: 'Generaciones de audiencia', text: 'Una mirada testimonial y cultural' },
]

const achievements = [
  'Cobertura de Juegos Olímpicos, Panamericanos y Centroamericanos.',
  'Jefe de Sala de Prensa del histórico partido Cuba–Tampa Bay Rays.',
  'Cobertura de visitas papales y ruedas de prensa de Fidel Castro Ruz.',
  'Corresponsal y colaborador de medios nacionales e internacionales.',
]

const whatsappUrl = 'https://wa.me/5352134955?text=Hola%20Tony%2C%20quiero%20conversar%20sobre%20un%20proyecto.'

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f5f0] text-[#17383a]">
      <header className="absolute inset-x-0 top-0 z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
          <a href="#inicio" className="flex items-center gap-3" aria-label="Tony Díaz, inicio">
            <span className="flex size-10 items-center justify-center rounded-full bg-[#e7b868] font-serif text-lg font-bold text-[#17383a]">T</span>
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-white">Tony Díaz</span>
          </a>
          <nav className="hidden items-center gap-9 text-sm font-medium text-white/80 md:flex" aria-label="Navegación principal">
            <a className="transition hover:text-[#e7b868]" href="#perfil">Perfil</a>
            <a className="transition hover:text-[#e7b868]" href="#experiencia">Experiencia</a>
            <a className="transition hover:text-[#e7b868]" href="#contacto">Contacto</a>
          </nav>
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="hidden items-center gap-2 rounded-full bg-[#e7b868] px-5 py-3 text-sm font-bold text-[#17383a] transition hover:bg-white md:flex">
            Hablemos <ArrowUpRight size={16} aria-hidden="true" />
          </a>
          <button onClick={() => setMenuOpen((open) => !open)} className="rounded-full p-2 text-white md:hidden" aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={menuOpen}>
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
        {menuOpen && <nav className="mx-4 flex flex-col gap-4 rounded-2xl bg-[#17383a] p-5 text-sm text-white shadow-xl md:hidden" aria-label="Navegación móvil"><a href="#perfil" onClick={() => setMenuOpen(false)}>Perfil</a><a href="#experiencia" onClick={() => setMenuOpen(false)}>Experiencia</a><a href="#contacto" onClick={() => setMenuOpen(false)}>Contacto</a></nav>}
      </header>

      <section id="inicio" className="relative isolate flex min-h-[720px] items-end overflow-hidden bg-[#17383a] pb-20 pt-32 lg:min-h-[780px] lg:pb-28">
        <img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2200&q=85" alt="Espacio de trabajo editorial con luz natural" className="absolute inset-0 -z-20 size-full object-cover opacity-35" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#17383a] via-[#17383a]/85 to-[#17383a]/20" />
        <div className="absolute bottom-0 right-0 -z-10 size-[28rem] rounded-full bg-[#e7b868]/20 blur-3xl" />
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
          <div className="max-w-4xl">
            <p className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-[#e7b868]"><span className="h-px w-10 bg-[#e7b868]" /> Periodismo con perspectiva</p>
            <h1 className="max-w-4xl font-serif text-5xl leading-[0.98] tracking-[-0.04em] text-white sm:text-7xl lg:text-[6.5rem]">Historias que <em className="font-normal text-[#e7b868]">conectan</em> con la memoria.</h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/75">Juan Antonio Díaz Susavila · Periodista y coordinador editorial con 45 años de experiencia contando lo que importa.</p>
            <div className="mt-10 flex flex-wrap items-center gap-4"><a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#e7b868] px-6 py-4 text-sm font-bold text-[#17383a] transition hover:bg-white">Conversemos sobre tu proyecto <ArrowUpRight size={17} aria-hidden="true" /></a><a href="#experiencia" className="inline-flex items-center gap-2 px-4 py-4 text-sm font-semibold text-white transition hover:text-[#e7b868]">Conocer trayectoria <ChevronRight size={17} aria-hidden="true" /></a></div>
          </div>
        </div>
        <div className="absolute bottom-8 right-8 hidden items-center gap-3 text-xs uppercase tracking-[0.2em] text-white/50 lg:flex"><span className="h-px w-12 bg-white/30" /> La Habana · Cuba</div>
      </section>

      <section id="perfil" className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 lg:py-32">
        <div><p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#a46e20]">Una mirada con oficio</p><h2 className="max-w-md font-serif text-4xl leading-tight tracking-[-0.03em] sm:text-5xl">Experiencia para contar el presente.</h2></div>
        <div><p className="text-xl leading-relaxed text-[#315557]">Periodista de la Dirección de Comunicación Institucional y Prensa del INDER y de Radio COCO. Una carrera construida entre la cobertura deportiva, la comunicación institucional y el relato de nuestra historia latinoamericana.</p><p className="mt-6 leading-relaxed text-[#587173]">Desde la radio hasta las plataformas digitales, acompaño a instituciones y proyectos que necesitan transformar hechos complejos en historias claras, rigurosas y memorables.</p><div className="mt-8 flex items-center gap-4 border-t border-[#17383a]/15 pt-7"><Award className="text-[#a46e20]" size={25} aria-hidden="true" /><p className="text-sm font-semibold text-[#315557]">Licenciado en Periodismo<br /><span className="font-normal text-[#587173]">Universidad de La Habana · 1983</span></p></div></div>
      </section>

      <section className="bg-[#e9e3d8] px-6 py-20 lg:px-10 lg:py-28"><div className="mx-auto max-w-7xl"><div className="mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#a46e20]">Lo que puedo aportar</p><h2 className="font-serif text-4xl tracking-[-0.03em] sm:text-5xl">Oficio, coordinación y criterio.</h2></div><p className="max-w-sm text-sm leading-relaxed text-[#587173]">Una combinación de experiencia editorial y capacidad para trabajar con equipos, instituciones y audiencias.</p></div><div className="grid gap-px overflow-hidden rounded-2xl bg-[#17383a]/15 sm:grid-cols-2 lg:grid-cols-4">{specialties.map(({ icon: Icon, title, text }) => <article key={title} className="bg-[#e9e3d8] p-7 transition hover:bg-[#f7f5f0]"><Icon size={26} className="mb-12 text-[#a46e20]" aria-hidden="true" /><h3 className="mb-3 text-lg font-bold">{title}</h3><p className="text-sm leading-relaxed text-[#587173]">{text}</p></article>)}</div></div></section>

      <section id="experiencia" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32"><div className="grid gap-16 lg:grid-cols-[1fr_1.15fr]"><div><p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#a46e20]">Una trayectoria comprobada</p><h2 className="max-w-md font-serif text-4xl leading-tight tracking-[-0.03em] sm:text-5xl">De los grandes escenarios a la historia cotidiana.</h2><div className="mt-10 space-y-5">{achievements.map((item) => <div key={item} className="flex gap-3 text-sm leading-relaxed text-[#315557]"><Check className="mt-0.5 shrink-0 text-[#a46e20]" size={18} aria-hidden="true" />{item}</div>)}</div></div><div className="grid gap-3 sm:grid-cols-2">{milestones.map((item) => <article key={item.year} className="rounded-2xl border border-[#17383a]/15 bg-white/50 p-7"><p className="font-serif text-4xl text-[#a46e20]">{item.year}</p><h3 className="mt-8 font-bold">{item.title}</h3><p className="mt-2 text-sm leading-relaxed text-[#587173]">{item.text}</p></article>)}</div></div></section>

      <section className="relative overflow-hidden bg-[#17383a] px-6 py-24 text-white lg:px-10 lg:py-32"><div className="absolute right-[-5rem] top-[-7rem] size-80 rounded-full border border-[#e7b868]/20" /><div className="absolute right-[-2rem] top-[-4rem] size-56 rounded-full border border-[#e7b868]/20" /><div className="mx-auto max-w-7xl"><Quote className="mb-8 text-[#e7b868]" size={38} aria-hidden="true" /><blockquote className="max-w-4xl font-serif text-4xl leading-tight tracking-[-0.03em] sm:text-6xl">“La comunicación también es una forma de cuidar la memoria.”</blockquote><p className="mt-8 text-sm font-bold uppercase tracking-[0.2em] text-white/50">Intereses editoriales · Memoria histórica latinoamericana</p></div></section>

      <section id="contacto" className="bg-[#e7b868] px-6 py-20 lg:px-10 lg:py-28"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-end"><div><p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#315557]">Disponible para nuevos proyectos</p><h2 className="max-w-2xl font-serif text-5xl leading-[0.95] tracking-[-0.04em] text-[#17383a] sm:text-7xl">Hagamos que tu historia llegue más lejos.</h2></div><div><p className="mb-7 max-w-sm leading-relaxed text-[#315557]">Trabajo a distancia o presencial en proyectos editoriales, coberturas deportivas, políticas, culturales y sociales.</p><a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 rounded-full bg-[#17383a] px-6 py-4 text-sm font-bold text-white transition hover:bg-white hover:text-[#17383a]"><Mail size={17} aria-hidden="true" /> Escribir a Tony <Send size={16} aria-hidden="true" /></a></div></div></section>

      <footer className="bg-[#17383a] px-6 py-8 text-white/55 lg:px-10"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 text-xs sm:flex-row"><p>© {new Date().getFullYear()} Juan Antonio Díaz Susavila</p><p className="flex items-center gap-2"><Sparkles size={13} className="text-[#e7b868]" aria-hidden="true" /> Periodismo con perspectiva</p></div></footer>
    </main>
  )
}

