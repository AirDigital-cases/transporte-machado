import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const repositoryName = "transporte-machado";

export default defineConfig(({ command }) => ({
  plugins: [react()],
  // Em produção no GitHub Pages o site precisa sair com o subpath do repositório.
  base: command === "build" ? `/${repositoryName}/` : "/",
}));
