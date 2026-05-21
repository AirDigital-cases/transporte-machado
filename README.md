# Machado Transportes

Site institucional em React + Vite preparado para deploy no GitHub Pages.

## URL final esperada

Depois da publicação, o site ficará em:

`https://SEU-USUARIO.github.io/transporte-machado/`

## O que já foi configurado

- `gh-pages` instalado
- `vite.config.js` com `base` correto para `/transporte-machado/`
- scripts `predeploy` e `deploy`
- `.nojekyll` para evitar interferência do GitHub Pages
- `.gitignore` com `node_modules` e `dist`

## 1. Criar o repositório no GitHub

1. Acesse https://github.com/new
2. Crie um repositório com o nome `transporte-machado`
3. Pode deixar o repositório vazio, sem `README`, `.gitignore` ou licença

## 2. Conectar este projeto ao GitHub

Se ainda não tiver feito o primeiro commit:

```bash
git add .
git commit -m "Configura deploy no GitHub Pages"
```

Conecte o repositório remoto:

```bash
git remote add origin https://github.com/SEU-USUARIO/transporte-machado.git
```

Se o `origin` já existir:

```bash
git remote set-url origin https://github.com/SEU-USUARIO/transporte-machado.git
```

Envie a branch principal:

```bash
git push -u origin main
```

## 3. Publicar no GitHub Pages

Rode exatamente este comando:

```bash
npm run deploy
```

Esse comando:

1. executa `npm run build`
2. gera a pasta `dist`
3. publica o conteúdo na branch `gh-pages`

## 4. Ativar o GitHub Pages no repositório

Depois do primeiro deploy:

1. Abra o repositório no GitHub
2. Vá em `Settings`
3. Vá em `Pages`
4. Em `Build and deployment`, escolha `Deploy from a branch`
5. Em `Branch`, selecione `gh-pages`
6. Em `Folder`, selecione `/ (root)`
7. Salve

## 5. URL publicada

Depois de alguns instantes, o site deverá abrir em:

`https://SEU-USUARIO.github.io/transporte-machado/`

## Observações importantes

- Este projeto usa navegação por âncoras como `#sobre` e `#contato`, então não depende de React Router para funcionar no GitHub Pages.
- Assets e imagens estão compatíveis com GitHub Pages porque o build usa o `base` `/transporte-machado/`.
- Se no futuro você mudar o nome do repositório, atualize a constante `repositoryName` em `vite.config.js`.
