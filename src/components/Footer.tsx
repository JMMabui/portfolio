export function Footer() {
	return (
		<footer className="bg-gray-900 py-10 border-t border-gray-800 shadow-inner transition-all duration-300">
			<div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
				<div className="flex space-x-8">
					<a
						href="https://github.com/JMMabui"
						aria-label="GitHub profile"
						className="text-gray-400 hover:text-blue-400 focus-visible:text-blue-300 transition-colors text-2xl outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded-full p-1 hover:scale-110 focus-visible:scale-110 active:scale-95 duration-200"
						target="_blank"
						rel="noopener noreferrer"
					>
						<svg width="28" height="28" fill="currentColor" aria-hidden="true">
							<path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.49 2.87 8.3 6.84 9.64.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.74-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.04A9.36 9.36 0 0 1 12 6.84c.85.004 1.71.12 2.51.35 1.91-1.32 2.75-1.04 2.75-1.04.55 1.4.2 2.44.1 2.7.64.71 1.03 1.62 1.03 2.74 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2z" />
						</svg>
					</a>
					<a
						href="https://www.linkedin.com/in/justino-mabui-bb2a59212/"
						aria-label="LinkedIn profile"
						className="text-gray-400 hover:text-blue-400 focus-visible:text-blue-300 transition-colors text-2xl outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded-full p-1 hover:scale-110 focus-visible:scale-110 active:scale-95 duration-200"
						target="_blank"
						rel="noopener noreferrer"
					>
						<svg width="28" height="28" fill="currentColor" aria-hidden="true">
							<path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z" />
						</svg>
					</a>
					<a
						href="https://twitter.com/"
						aria-label="Twitter profile"
						className="text-gray-400 hover:text-blue-400 focus-visible:text-blue-300 transition-colors text-2xl outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded-full p-1 hover:scale-110 focus-visible:scale-110 active:scale-95 duration-200"
						target="_blank"
						rel="noopener noreferrer"
					>
						<svg width="28" height="28" fill="currentColor" aria-hidden="true">
							<path d="M24 4.56c-.89.39-1.85.65-2.86.77a4.92 4.92 0 0 0 2.16-2.71c-.95.56-2 .97-3.13 1.19a4.92 4.92 0 0 0-8.39 4.48c-4.09-.2-7.72-2.17-10.15-5.15a4.93 4.93 0 0 0-.66 2.47c0 1.7.87 3.2 2.19 4.08-.8-.03-1.56-.25-2.22-.62v.06c0 2.38 1.7 4.37 3.95 4.82-.41.11-.84.17-1.29.17-.31 0-.61-.03-.9-.08.61 1.91 2.39 3.3 4.5 3.34a9.87 9.87 0 0 1-6.1 2.1c-.4 0-.79-.02-1.18-.07a13.94 13.94 0 0 0 7.56 2.21c9.05 0 14-7.5 14-14 0-.21 0-.42-.02-.63a9.93 9.93 0 0 0 2.46-2.54z" />
						</svg>
					</a>
				</div>
				<p className="text-gray-400 text-sm text-center md:text-right select-none">
					© {new Date().getFullYear()}{" "}
					<span className="font-semibold text-blue-400">Justino Mabui</span>.
					Todos os direitos reservados.
				</p>
			</div>
		</footer>
	);
}
