import { useScrollReveal } from "../lib/utils";

export function Skills() {
	const skills = [
		{ name: "React", icon: "⚛️" },
		{ name: "TypeScript", icon: "🟦" },
		{ name: "Node.js", icon: "🌳" },
		{ name: "Java", icon: "☕" },
		{ name: "Python", icon: "🐍" },
		{ name: "SQL", icon: "🗄️" },
		{ name: "Git", icon: "🔧" },
		{ name: "Docker", icon: "🐳" },
	];

	const revealRef = useScrollReveal<HTMLDivElement>();

	return (
		<div ref={revealRef} className="flex flex-wrap justify-center gap-3 mt-2">
			{skills.map((skill) => (
				<span
					key={skill.name}
					className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-800/80 border border-blue-400/20 text-blue-200 font-semibold text-sm shadow hover:bg-blue-700/30 hover:text-blue-100 focus-visible:bg-blue-700/40 focus-visible:text-white transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-blue-400 cursor-pointer"
					aria-label={skill.name}
					tabIndex={0}
				>
					<span className="text-lg">{skill.icon}</span>
					{skill.name}
				</span>
			))}
		</div>
	);
}
