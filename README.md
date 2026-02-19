# 🐾 Pet Shop - Sistema de Agendamentos

Sistema de gestão de agendamentos para pet shops, desenvolvido com Next.js e React. Permite gerenciar agendamentos de serviços para pets de forma intuitiva e eficiente.

## ✨ Funcionalidades

- ✅ **Criar Agendamentos**: Formulário completo com validação para criar novos agendamentos
- ✅ **Editar Agendamentos**: Edição inline de agendamentos existentes via modal
- ✅ **Excluir Agendamentos**: Exclusão com confirmação via diálogo
- ✅ **Visualização por Data**: Filtro de agendamentos por data selecionada
- ✅ **Agrupamento por Período**: Organização automática em períodos:
  - 🌅 **Manhã**: 9h às 12h
  - ☀️ **Tarde**: 13h às 18h
  - 🌙 **Noite**: 19h às 21h
- ✅ **Interface Responsiva**: Design adaptável para mobile e desktop
- ✅ **Validações Inteligentes**:
  - Impede agendamentos em horários já ocupados
  - Não permite datas/horários no passado
  - Validação de campos obrigatórios

## 🛠️ Tecnologias

### Core

- **[Next.js 16.1.1](https://nextjs.org/)** - Framework React com App Router
- **[React 19.2.3](https://react.dev/)** - Biblioteca UI
- **[TypeScript 5](https://www.typescriptlang.org/)** - Tipagem estática

### Estilização

- **[Tailwind CSS 4](https://tailwindcss.com/)** - Framework CSS utility-first
- **[Radix UI](https://www.radix-ui.com/)** - Componentes acessíveis e sem estilo
- **[Lucide React](https://lucide.dev/)** - Biblioteca de ícones
- **[React Day Picker](https://react-day-picker.js.org/)** - Componente de calendário

### Banco de Dados

- **[PostgreSQL](https://www.postgresql.org/)** - Banco de dados relacional
- **[Prisma 7.4.0](https://www.prisma.io/)** - ORM moderno e type-safe

### Formulários e Validação

- **[React Hook Form](https://react-hook-form.com/)** - Gerenciamento de formulários
- **[Zod](https://zod.dev/)** - Validação de schemas TypeScript-first
- **[React IMask](https://imask.js.org/)** - Máscara de entrada (telefone)

### Outras Bibliotecas

- **[date-fns](https://date-fns.org/)** - Manipulação de datas
- **[Sonner](https://sonner.emilkowal.ski/)** - Notificações toast
- **[class-variance-authority](https://cva.style/)** - Variantes de componentes

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** 18+ ([Download](https://nodejs.org/))
- **PostgreSQL** 12+ ([Download](https://www.postgresql.org/download/))
- **npm**, **yarn**, **pnpm** ou **bun** (gerenciador de pacotes)

## 🚀 Instalação

1. **Clone o repositório**

   ```bash
   git clone https://github.com/seu-usuario/pet-shop.git
   cd pet-shop
   ```

2. **Instale as dependências**

   ```bash
   npm install
   # ou
   yarn install
   # ou
   pnpm install
   ```

3. **Configure as variáveis de ambiente**

   Crie um arquivo `.env` na raiz do projeto baseado no `.env.example`:

   ```bash
   cp .env.example .env
   ```

   Edite o arquivo `.env` e adicione sua URL de conexão do PostgreSQL:

   ```env
   DATABASE_URL="postgresql://usuario:senha@localhost:5432/pet_shop?schema=public"
   ```

4. **Configure o banco de dados**

   Execute as migrações do Prisma:

   ```bash
   npx prisma migrate dev
   ```

   (Opcional) Gere o cliente Prisma:

   ```bash
   npx prisma generate
   ```

## 🎯 Como Executar

### Modo Desenvolvimento

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```
