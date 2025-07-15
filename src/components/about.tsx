import profile from "../assets/IMG-20230926-WA0002 bg removed.png";
import { useScrollReveal } from "../lib/utils";
import { Skills } from "./skill";

export function About() {
	const revealRef = useScrollReveal<HTMLDivElement>();
	return (
		<section id="about" className="py-20 px-4 bg-gray-800">
			<div
				ref={revealRef}
				className="max-w-3xl mx-auto flex flex-col items-center gap-6"
			>
				<div className="relative mb-4">
					<img
						src={profile}
						alt="Justino Mabui"
						className="w-44 h-44 md:w-52 md:h-52 rounded-full object-cover shadow-2xl border-4 border-blue-400 ring-4 ring-blue-400/20 hover:ring-blue-400/40 transition-all duration-300 animate-fade-in-up"
					/>
					<div className="absolute bottom-2 right-2 flex gap-2">
						<a
							href="https://github.com/JMMabui"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="GitHub"
							className="bg-gray-900/80 p-2 rounded-full shadow hover:bg-blue-600/80 transition-colors text-blue-400 hover:text-white focus-visible:ring-2 focus-visible:ring-blue-400 outline-none"
						>
							<svg
								width="22"
								height="22"
								fill="currentColor"
								aria-hidden="true"
							>
								<path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.49 2.87 8.3 6.84 9.64.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.74-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.04A9.36 9.36 0 0 1 12 6.84c.85.004 1.71.12 2.51.35 1.91-1.32 2.75-1.04 2.75-1.04.55 1.4.2 2.44.1 2.7.64.71 1.03 1.62 1.03 2.74 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2z" />
							</svg>
						</a>
						<a
							href="https://www.linkedin.com/in/justino-mabui-bb2a59212/"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="LinkedIn"
							className="bg-gray-900/80 p-2 rounded-full shadow hover:bg-blue-600/80 transition-colors text-blue-400 hover:text-white focus-visible:ring-2 focus-visible:ring-blue-400 outline-none"
						>
							<svg
								width="22"
								height="22"
								fill="currentColor"
								aria-hidden="true"
							>
								<path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z" />
							</svg>
						</a>
					</div>
				</div>
				<div className="text-center animate-fade-in-up">
					<h2 className="text-3xl font-bold mb-6 text-blue-300">Sobre Mim</h2>
					<p className="text-gray-300 mb-4 text-lg font-medium">
						Olá! Sou{" "}
						<span className="text-blue-400 font-bold">Justino Mabui</span>,
						desenvolvedor apaixonado por criar experiências digitais modernas,
						funcionais e acessíveis.
					</p>
					<p className="text-gray-300 mb-4">
						Tenho experiência em{" "}
						<span className="font-semibold text-blue-300">frontend</span> e{" "}
						<span className="font-semibold text-blue-300">backend</span>,
						integração de APIs, bancos de dados e infraestrutura de TI. Gosto de
						transformar ideias em soluções reais, com código limpo e design
						moderno.
					</p>
					<p className="text-gray-400 mb-8">
						Amo explorar novas tecnologias, colaborar com outros devs e buscar
						soluções inovadoras para desafios de software e segurança da
						informação. Estou sempre aprendendo e evoluindo!
					</p>
				</div>
				<div className="w-full flex justify-center animate-fade-in-up">
					<div className="max-w-4xl w-full">
						<Skills />
					</div>
				</div>
			</div>
		</section>
	);
}
