import { useEffect, useState } from "react";

export function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [theme, setTheme] = useState<"light" | "dark">(() => {
		if (typeof window !== "undefined") {
			return (localStorage.getItem("theme") as "light" | "dark") || "light";
		}
		return "light";
	});

	useEffect(() => {
		const root = window.document.documentElement;
		if (theme === "dark") {
			root.classList.add("dark");
		} else {
			root.classList.remove("dark");
		}
		localStorage.setItem("theme", theme);
	}, [theme]);

	const toggleTheme = () => {
		setTheme(theme === "dark" ? "light" : "dark");
	};

	const links = [
		{ id: "home", label: "Início" },
		{ id: "about", label: "Sobre" },
		{ id: "skills", label: "Habilidades" },
		{ id: "projects", label: "Projetos" },
		{ id: "services", label: "Serviços" },
		{ id: "contact", label: "Contato" },
	];

	return (
		<nav className="fixed w-full bg-gray-900/80 backdrop-blur-sm z-50 shadow-md transition-all duration-300">
			<div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
				<div className="flex items-center justify-between h-20">
					<span className="text-2xl font-extrabold tracking-tight text-blue-400 drop-shadow-sm select-none transition-colors duration-300 hover:text-blue-300 cursor-pointer">
						Justino Mabui
					</span>
					<div className="hidden md:flex space-x-2 items-center">
						{links.map((link) => (
							<a
								key={link.id}
								href={`#${link.id}`}
								className="px-4 py-2 rounded-lg font-semibold text-gray-200 hover:bg-blue-600/20 hover:text-blue-300 focus-visible:bg-blue-700/30 focus-visible:text-white transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
							>
								{link.label}
							</a>
						))}
						<button
							onClick={toggleTheme}
							className="ml-4 p-2 rounded-lg hover:bg-gray-700/70 focus-visible:bg-gray-700/90 transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
							aria-label="Alternar tema"
						>
							{theme === "dark" ? (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6 text-yellow-400 drop-shadow"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364l-1.414 1.414M6.343 17.657l-1.414 1.414M17.657 17.657l-1.414-1.414M6.343 6.343L4.929 4.929M12 8a4 4 0 100 8 4 4 0 000-8z"
									/>
								</svg>
							) : (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6 text-gray-200 drop-shadow"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"
									/>
								</svg>
							)}
						</button>
					</div>
					<button
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						className="md:hidden p-2 rounded-lg hover:bg-gray-700/70 focus-visible:bg-gray-700/90 transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
						aria-label="Abrir menu"
					>
						<svg className="h-7 w-7" fill="none" stroke="currentColor">
							{isMenuOpen ? (
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M6 18L18 6M6 6l12 12"
								/>
							) : (
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M4 6h16M4 12h16M4 18h16"
								/>
							)}
						</svg>
					</button>
				</div>
			</div>

			{isMenuOpen && (
				<div className="md:hidden px-2 pb-3 bg-gray-900/95 animate-fade-in-down rounded-b-xl shadow-lg">
					{links.map((link) => (
						<a
							key={link.id}
							href={`#${link.id}`}
							className="block px-4 py-3 rounded-lg font-semibold text-gray-200 hover:bg-blue-600/20 hover:text-blue-300 focus-visible:bg-blue-700/30 focus-visible:text-white transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
							onClick={() => setIsMenuOpen(false)}
						>
							{link.label}
						</a>
					))}
					<button
						onClick={toggleTheme}
						className="mt-2 p-2 rounded-lg hover:bg-gray-700/70 focus-visible:bg-gray-700/90 transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-blue-400 w-full flex justify-center"
						aria-label="Alternar tema"
					>
						{theme === "dark" ? (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6 text-yellow-400 drop-shadow"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364l-1.414 1.414M6.343 17.657l-1.414 1.414M17.657 17.657l-1.414-1.414M6.343 6.343L4.929 4.929M12 8a4 4 0 100 8 4 4 0 000-8z"
								/>
							</svg>
						) : (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6 text-gray-200 drop-shadow"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"
								/>
							</svg>
						)}
					</button>
				</div>
			)}
		</nav>
	);
}
