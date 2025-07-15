export function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 px-4 text-center bg-gradient-to-b from-gray-900 to-gray-800">
      <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
        Olá, eu sou <span className="text-blue-400">Justino Mabui</span>
      </h1>
      <p className="text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
        Desenvolvedor Full Stack &amp; Web Designer apaixonado por criar experiências digitais modernas, funcionais e acessíveis.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <a
          href="#contact"
          className="px-8 py-3 bg-blue-600 rounded font-semibold hover:bg-blue-700 transition text-white shadow"
        >
          Fale comigo
        </a>
        <a
          href="#projects"
          className="px-8 py-3 bg-gray-700 rounded font-semibold hover:bg-gray-600 transition text-white shadow"
        >
          Ver Projetos
        </a>
      </div>
    </section>
  )
}