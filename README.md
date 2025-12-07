# ENEM AI

<p align="center">
  <strong>Plataforma de Tutoria Inteligente para o ENEM</strong>
</p>

<p align="center">
  Uma plataforma de tutoria com IA para guiar estudantes brasileiros rumo à aprovação no Exame Nacional do Ensino Médio (ENEM)
</p>

---

## 📋 Sobre o Projeto

O **ENEM AI** é uma plataforma de tutoria inteligente desenvolvida para auxiliar estudantes brasileiros na preparação para o ENEM. Utilizando inteligência artificial, a plataforma oferece orientação personalizada, ajudando os usuários a alcançarem seus objetivos de aprovação.

Este projeto foi criado por uma equipe de fundadores brasileiros comprometidos em democratizar o acesso à educação de qualidade.

## 🚀 Tecnologias

Este projeto utiliza as seguintes tecnologias para garantir desenvolvimento rápido e eficiente:

- **[Next.js](https://nextjs.org/)** - Framework React com App Router
- **[Supabase](https://supabase.com/)** - Backend como serviço (BaaS) para autenticação e banco de dados
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utilitário
- **[TypeScript](https://www.typescriptlang.org/)** - Tipagem estática para JavaScript
- **[shadcn/ui](https://ui.shadcn.com/)** - Componentes UI reutilizáveis
- **[GitHub Actions](https://github.com/features/actions)** - CI/CD automatizado

## ✨ Funcionalidades

- ✅ Autenticação completa com Supabase (login, registro, recuperação de senha)
- ✅ Interface moderna e responsiva com Tailwind CSS
- ✅ Tema claro/escuro
- ✅ Rotas protegidas
- ✅ Componentes UI reutilizáveis com shadcn/ui
- ✅ Suporte a Server Components e Client Components
- ✅ Configuração de cookies para sessão do usuário

## 📦 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/) ou [pnpm](https://pnpm.io/)
- Uma conta no [Supabase](https://supabase.com/)

## 🛠️ Instalação e Configuração

### 1. Clone o repositório

```bash
git clone <url-do-repositorio>
cd enem-ai
```

### 2. Instale as dependências

```bash
npm install
# ou
yarn install
# ou
pnpm install
```

### 3. Configure o Supabase

1. Crie um novo projeto no [Supabase Dashboard](https://database.new)
2. Acesse as configurações da API do seu projeto
3. Copie a URL do projeto e a chave pública (Publishable Key)

### 4. Configure as variáveis de ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your_supabase_publishable_key
```

> **Nota:** Este exemplo usa `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`, que se refere ao novo formato de chave **publishable** do Supabase. Tanto as chaves **anon** legadas quanto as novas chaves **publishable** podem ser usadas com este nome de variável durante o período de transição.

Você pode encontrar essas informações em [Configurações da API do seu projeto Supabase](https://supabase.com/dashboard/project/_?showConnect=true)

### 5. Execute o servidor de desenvolvimento

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

## 📁 Estrutura do Projeto

```
enem-ai/
├── app/                      # App Router do Next.js
│   ├── auth/                 # Rotas de autenticação
│   │   ├── login/
│   │   ├── sign-up/
│   │   ├── forgot-password/
│   │   └── update-password/
│   ├── protected/            # Rotas protegidas
│   ├── layout.tsx            # Layout raiz
│   └── page.tsx              # Página inicial
├── components/               # Componentes React
│   ├── ui/                   # Componentes UI (shadcn/ui)
│   ├── auth-button.tsx
│   ├── login-form.tsx
│   └── ...
├── lib/                      # Utilitários e configurações
│   ├── supabase/            # Clientes Supabase
│   │   ├── client.ts        # Cliente para browser
│   │   ├── server.ts        # Cliente para servidor
│   │   └── proxy.ts         # Proxy para rotas
│   └── utils.ts             # Funções utilitárias
├── public/                   # Arquivos estáticos
├── .env.local               # Variáveis de ambiente (não versionado)
├── next.config.ts           # Configuração do Next.js
├── tailwind.config.ts       # Configuração do Tailwind
└── package.json             # Dependências do projeto
```

## 🧪 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build de produção
npm run build

# Iniciar servidor de produção
npm run start

# Linting
npm run lint
```

## 🔐 Autenticação

O projeto utiliza Supabase Auth com cookies, tornando a sessão do usuário disponível em:

- Client Components
- Server Components
- Route Handlers
- Server Actions
- Middleware

## 🎨 Personalização

### Componentes UI

Este template vem com o estilo padrão do shadcn/ui inicializado. Se você quiser usar outros estilos do shadcn/ui:

1. Delete o arquivo `components.json`
2. Reinstale o shadcn/ui seguindo a [documentação oficial](https://ui.shadcn.com/docs/installation/next)

## 🚢 Deploy

### Deploy no Vercel

O projeto está configurado para deploy fácil no Vercel com integração Supabase:

1. Conecte seu repositório ao Vercel
2. Configure a integração Supabase
3. As variáveis de ambiente serão automaticamente configuradas

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Desenvolvimento Local com Supabase

Para executar o Supabase localmente, consulte a [documentação de desenvolvimento local do Supabase](https://supabase.com/docs/guides/getting-started/local-development).

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

## 📄 Licença

Este projeto está sob licença [MIT](LICENSE) (ou conforme especificado).

## 👥 Equipe

Desenvolvido por uma equipe de fundadores brasileiros apaixonados por educação e tecnologia.

## 📚 Recursos Adicionais

- [Documentação do Next.js](https://nextjs.org/docs)
- [Documentação do Supabase](https://supabase.com/docs)
- [Documentação do Tailwind CSS](https://tailwindcss.com/docs)
- [Documentação do shadcn/ui](https://ui.shadcn.com/docs)

---

<p align="center">
  Feito com ❤️ no Brasil 🇧🇷
</p>
