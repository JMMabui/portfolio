import project3 from "@/assets/let me ask.png";
import project1 from "../assets/icon in orbit.png";
import project2 from "../assets/icon url shotner project.png";
import project4 from "../assets/save up finances.png";
import { useGitHubRepoInfo, useScrollReveal } from "../lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export function Projects() {
	const revealRef = useScrollReveal<HTMLDivElement>();
	const projects = [
		{
			title: "In Orbit",
			image: project1,
			desc: "Aplicativo para definição de metas e acompanhamento semanal.",
			tech: ["React", "TypeScript"],
			repo: "https://github.com/JMMabui/inOrbit-front-end.git",
		},
		{
			title: "URL Shortener",
			image: project2,
			desc: "Encurtador de URLs em Java com integração AWS Lambda.",
			tech: ["Java", "AWS Lambda", "S3"],
			repo: "https://github.com/JMMabui/url-shortener-project.git",
		},

		{
			title: "Let Me Ask",
			image: project3,
			desc: "O app capta a voz, analisa o que a pessoa já falou, e se identificar uma pergunta, a IA responde com base no histórico. Apenas o front-end",
			tech: ["Nodejs", "React", "Docker", "Gemini", "Postgres"],
			repo: "https://github.com/JMMabui/Let-Me-Ask-web.git",
		},

		{
			title: "Save Up Finances",
			image: project4,
			desc: "Website de um aplicatico em desenvolvimento com fim de ter melhor controle financeiro",
			tech: ["React", "Vite", "tailwindcss"],
			repo: "https://github.com/JMMabui/SaveUpFinances-web.git",
		},
	];

	return (
		<section id="projects" className="py-20 px-4 bg-gray-800">
			<h2 className="text-3xl font-bold text-center mb-12">
				Projetos em Destaque
			</h2>
			<div
				ref={revealRef}
				className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto"
			>
				{projects.map((project) => {
					const {
						nome,
						descricao,
						linguagem,
						ultimaAtualizacao,
						frameworks,
						carregando,
						erro,
					} = useGitHubRepoInfo(project.repo);
					return (
						<Card
							key={project.title}
							className="bg-gray-700/90 border border-gray-600 rounded-2xl overflow-hidden shadow-lg hover:shadow-blue-400/40 hover:-translate-y-2 hover:scale-[1.03] transform transition-all duration-300 flex flex-col group animate-fade-in-up"
						>
							<CardHeader className="flex flex-col items-center justify-center space-y-2 p-0">
								<img
									src={project.image}
									alt={project.title}
									className="h-40 w-full object-cover rounded-t-2xl group-hover:brightness-110 transition-all duration-300"
									loading="lazy"
								/>
								<CardTitle className="text-2xl font-bold mb-2 text-blue-300 group-hover:text-blue-400 transition-colors duration-200 mt-2">
									{carregando ? "Carregando..." : nome || project.title}
								</CardTitle>
							</CardHeader>
							<CardContent className="flex flex-col flex-1 px-6 pb-6 pt-2">
								<p className="text-gray-300 mb-4 flex-1 text-sm leading-relaxed">
									{carregando
										? "Buscando informações do GitHub..."
										: descricao || project.desc}
								</p>
								<div className="flex flex-wrap gap-2 mb-4">
									{/* Frameworks do GitHub, se houver */}
									{frameworks &&
										frameworks.map((fw) => (
											<span
												key={fw}
												className="bg-green-600/20 text-green-300 px-3 py-1 rounded-full text-xs font-semibold shadow-sm border border-green-400/20 group-hover:bg-green-600/30 transition-all duration-200"
											>
												{fw}
											</span>
										))}
									{/* Tecnologias locais, se não houver frameworks do GitHub */}
									{!frameworks &&
										project.tech.map((t) => (
											<span
												key={t}
												className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-xs font-semibold shadow-sm border border-blue-400/20 group-hover:bg-blue-600/30 transition-all duration-200"
											>
												{t}
											</span>
										))}
								</div>
								<div className="text-xs text-gray-400 mb-2">
									<span className="font-semibold">Linguagem:</span> {linguagem || project.tech[0]}
								</div>
								<div className="text-xs text-gray-400 mb-2">
									<span className="font-semibold">Última atualização:</span> {ultimaAtualizacao ? new Date(ultimaAtualizacao).toLocaleDateString('pt-BR', { dateStyle: 'medium' }) : "-"}
								</div>
								{erro && (
									<div className="text-xs text-red-400 mb-2">Erro ao buscar dados do GitHub: {erro}</div>
								)}
								<a
									href={project.repo}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-block mt-auto text-blue-400 hover:text-blue-200 font-semibold transition underline underline-offset-2"
								>
									Ver Código &rarr;
								</a>
							</CardContent>
						</Card>
					);
				})}
			</div>
		</section>
	);
}
