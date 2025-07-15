import { type ClassValue, clsx } from "clsx";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function useScrollReveal<T extends HTMLElement>(
	options?: IntersectionObserverInit,
) {
	const ref = useRef<T | null>(null);

	useEffect(() => {
		const node = ref.current;
		if (!node) return;
		const handleIntersect = (entries: IntersectionObserverEntry[]) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					node.classList.add("animate-fade-in-up");
					observer.disconnect();
				}
			});
		};
		const observer = new window.IntersectionObserver(handleIntersect, {
			threshold: 0.15,
			...options,
		});
		observer.observe(node);
		return () => observer.disconnect();
	}, [options]);

	return ref;
}

export function useGitHubRepoInfo(repoUrl?: string) {
  const [data, setData] = useState<{
    nome?: string;
    descricao?: string;
    linguagem?: string;
    ultimaAtualizacao?: string;
    frameworks?: string[];
    carregando: boolean;
    erro?: string;
  }>({ carregando: true });

  useEffect(() => {
    if (!repoUrl) return;
    const match = repoUrl.match(/github.com\/(.+?)\/(.+?)(\.git)?$/);
    if (!match) {
      setData({ carregando: false, erro: "URL do repositório inválida." });
      return;
    }
    const owner = match[1];
    const repo = match[2].replace(/\.git$/, "");

    async function fetchData() {
      setData((d) => ({ ...d, carregando: true }));
      try {
        // Buscar dados principais do repositório
        const res = await fetch(`https://api.github.com/repos/${owner}/${repo}`);
        if (!res.ok) throw new Error("Repositório não encontrado");
        const repoData = await res.json();
        // Buscar linguagens
        const langRes = await fetch(`https://api.github.com/repos/${owner}/${repo}/languages`);
        const langs = langRes.ok ? await langRes.json() : {};
        // Buscar tópicos (frameworks)
        const topicsRes = await fetch(`https://api.github.com/repos/${owner}/${repo}/topics`, {
          headers: { Accept: "application/vnd.github.mercy-preview+json" },
        });
        const topicsData = topicsRes.ok ? await topicsRes.json() : { names: [] };
        // Buscar package.json para frameworks
        let frameworks: string[] = [];
        try {
          const pkgRes = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/package.json`);
          if (pkgRes.ok) {
            const pkgData = await pkgRes.json();
            if (pkgData.content) {
              const pkgJson = JSON.parse(atob(pkgData.content.replace(/\n/g, "")));
              const deps = {
                ...pkgJson.dependencies,
                ...pkgJson.devDependencies,
              };
              // Lista de frameworks populares para identificar
              const knownFrameworks = [
                "react", "next", "vite", "tailwindcss", "express", "nestjs", "vue", "nuxt", "svelte", "gatsby", "remix", "angular", "electron", "expo", "chakra-ui", "mui", "bootstrap", "redux", "socket.io", "prisma", "typeorm", "sequelize", "apollo-client", "graphql", "jest", "cypress", "storybook"
              ];
              frameworks = Object.keys(deps || {})
                .filter((dep) => knownFrameworks.includes(dep.replace(/[@\/].*/, "")))
                .map((dep) => dep.replace(/[@\/].*/, ""));
              // Remover duplicatas
              frameworks = Array.from(new Set(frameworks));
            }
          }
        } catch {}
        // Se não encontrou no package.json, usar tópicos
        if ((!frameworks || frameworks.length === 0) && topicsData.names?.length) {
          frameworks = topicsData.names;
        }
        setData({
          nome: repoData.name,
          descricao: repoData.description,
          linguagem: repoData.language || Object.keys(langs)[0] || undefined,
          ultimaAtualizacao: repoData.updated_at,
          frameworks: frameworks.length ? frameworks : undefined,
          carregando: false,
        });
      } catch (e: any) {
        setData({ carregando: false, erro: e.message });
      }
    }
    fetchData();
  }, [repoUrl]);

  return data;
}
