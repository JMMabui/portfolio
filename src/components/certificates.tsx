import { useScrollReveal } from "../lib/utils";

const certificates = [
	{
		title: "NLW Connect - Nodejs",
		issuer: "Rocketseat",
		year: 2025,
		date: "24/02/2025",
		link: "https://app.rocketseat.com.br/certificates/6ed91a2c-a0fd-4a1c-b53b-2f4c86c9b4dc",
		icon: "🎓",
		description: "Participação no evento NLW Connect focado em Node.js.",
	},
	{
		title: "Curso Gratuito de Java",
		issuer: "Java",
		year: 2024,
		date: "24/11/2024",
		link: "https://app.rocketseat.com.br/certificates/9b1154f3-629e-4ce8-80a0-5e4edfe4ce31",
		icon: "☕",
		description:
			"Curso gratuito de Java, abordando fundamentos e práticas da linguagem.",
	},
	{
		title: "NLW Pocket: Mobile - React Native",
		issuer: "Rocketseat",
		year: 2024,
		date: "13/12/2024",
		link: "https://app.rocketseat.com.br/certificates/be1cd2ae-b725-4984-844e-94866a8a779b",
		icon: "📱",
		description:
			"Participação no evento NLW Pocket com foco em desenvolvimento mobile usando React Native.",
	},
	{
		title: "Curso Online de PHP",
		issuer: "PHP",
		year: 2024,
		date: "11/10/2024",
		link: "https://app.rocketseat.com.br/certificates/d1ae0286-0908-45ac-bbfc-d6813205caaa",
		icon: "🐘",
		description:
			"Curso online de PHP, cobrindo conceitos essenciais da linguagem.",
	},
	{
		title: "NLW Pocket: Javascript - Full-stack Intermediário",
		issuer: "Rocketseat",
		year: 2024,
		date: "14/09/2024",
		link: "https://app.rocketseat.com.br/certificates/ec666e0e-e2f3-46d0-991c-72380fe9de99",
		icon: "🎓",
		description:
			"Participação no evento NLW Pocket, com desenvolvimento full-stack em Node.js, TypeScript, Fastify, DrizzleORM, PostgreSQL, Docker, Zod, ReactJS, Vite, TailwindCSS e TanStack Query.",
	},
	{
		title: "Curso de Java",
		issuer: "Java",
		year: 2023,
		date: "19/10/2023",
		link: "https://app.rocketseat.com.br/certificates/f72df31f-a2f7-47cc-8a93-2acae42bc7bd",
		icon: "☕",
		description: "Curso de Java, aprofundando conhecimentos na linguagem.",
	},
];

export function Certificates() {
	const revealRef = useScrollReveal<HTMLDivElement>();
	return (
		<section id="certificates" className="py-20 px-4 bg-gray-900">
			<h2 className="text-3xl font-bold text-center mb-12 text-blue-300">
				Certificados & Conquistas
			</h2>
			<div
				ref={revealRef}
				className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
			>
				{certificates.map((cert) => (
					<a
						key={cert.title + cert.date}
						href={cert.link}
						target="_blank"
						rel="noopener noreferrer"
						className="flex flex-col gap-3 bg-gray-800/90 border border-blue-400/20 rounded-2xl shadow-lg p-6 hover:scale-105 hover:shadow-blue-400/30 transition-all duration-300 group focus-visible:ring-2 focus-visible:ring-blue-400 outline-none"
						aria-label={`Verificar certificado ${cert.title}`}
					>
						<div className="flex items-center gap-3 mb-2">
							<span className="text-3xl">{cert.icon}</span>
							<span className="font-bold text-lg text-blue-200 group-hover:text-blue-400 transition-colors duration-200">
								{cert.title}
							</span>
						</div>
						<span className="text-sm text-gray-400 font-medium">
							{cert.issuer} • {cert.year}
						</span>
						<span className="text-xs text-gray-500">
							Emitido em: {cert.date}
						</span>
						<p className="text-gray-300 text-sm mt-2 flex-1">
							{cert.description}
						</p>
						<span className="inline-block mt-2 text-blue-400 underline underline-offset-2 text-xs group-hover:text-blue-200 transition">
							Verificar certificado
						</span>
					</a>
				))}
			</div>
		</section>
	);
}
