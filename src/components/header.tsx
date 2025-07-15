import caret from '@/assets/CaretDoubleDown.svg';

export function Header() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 px-4 py-12 text-center">
      <div className="max-w-3xl">

        <div className="flex flex-col items-center gap-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Hello World! Meu nome é Justino Mabui e sou
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-indigo-400 uppercase tracking-wide">
            Desenvolvedor Fullstack
          </h2>
        </div>

        <div className="mt-6 space-y-4">
          <p className="text-gray-300 text-base md:text-lg">
            I'm a passionate developer with a strong focus on creating
            beautiful and functional web applications. With expertise in
            both frontend and backend technologies, I bring ideas to life
            through clean, efficient code and modern design principles.
          </p>
          <p className="text-gray-300 text-base md:text-lg">
            Outside of coding, I enjoy exploring new technologies, engaging
            with fellow developers, and occasionally maintaining IT
            infrastructure. I'm also passionate about data security and
            always eager to keep learning and growing.
          </p>
        </div>
      </div>

      <div className="mt-10 animate-bounce">
        <img className="w-6 h-6 md:w-8 md:h-8" src={caret} alt="caret double down arrow" />
      </div>
    </div>
  );
}
