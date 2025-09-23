# 🛍️ LoopMarket - Marketplace de Revenda

## 🎓 Projeto da Disciplina: Usabilidade, Desenvolvimento Web, Mobile e Jogos - A3
**Instituição:** UniBH - Centro Universitário de Belo Horizonte

**Curso:** Ciência da Computação

**Semestre:** 2025/2

---

## 1. 💡 Visão Geral do Projeto

O **LoopMarket** é um marketplace web responsivo, projetado com foco na experiência mobile, que serve como uma plataforma para a revenda de produtos seminovos. O objetivo é conectar vendedores que desejam transformar itens "parados" em renda extra com compradores que buscam produtos de nicho, peças raras ou simplesmente boas oportunidades. A plataforma oferecerá tanto a opção de venda direta quanto a de leilão, inspirando-se em modelos de sucesso como eBay e Mercado Livre para promover a economia circular.

### 1.1. 🎯 Objetivo Geral
Criar um ambiente online intuitivo, seguro e eficiente para que usuários possam anunciar, leiloar e adquirir produtos usados, fortalecendo comunidades de interesse e promovendo um consumo mais sustentável.

### 1.2. ✨ Objetivos Específicos
- 📤 Facilitar o cadastro e a gestão de produtos para os vendedores.
- 🔍 Oferecer um sistema de busca robusto com filtros avançados (categoria, preço, conservação).
- ⏳ Implementar um sistema de leilões dinâmico com lances e cronômetro.
- 💬 Disponibilizar um chat interno para negociação segura entre as partes.
- 💳 Integrar soluções de pagamento e um sistema de avaliação mútua para construir confiança na comunidade.

---

## 2. ⚙️ Configuração do Ambiente e Ferramentas (Entrega A3)

Esta seção detalha a arquitetura de desenvolvimento, as tecnologias e as ferramentas escolhidas para a construção do LoopMarket, atendendo aos requisitos da disciplina.

### 2.1. 🚀 Tecnologias Base (Core)
* **HTML5:** Utilizado para a estruturação semântica de todo o conteúdo da plataforma, garantindo acessibilidade e uma base sólida para a estilização e interatividade.
* **CSS3:** Responsável pela estilização e pelo design responsivo (mobile-first), garantindo que a aplicação seja visualmente agradável e funcional em qualquer dispositivo.
* **JavaScript (ES6+):** A linguagem principal para toda a lógica de frontend e backend, criando interatividade, manipulando dados e gerenciando o estado da aplicação.

### 2.2. 🛠️ Recursos e Ferramentas Adicionais

#### ⚛️ Framework de Desenvolvimento Frontend
* **React.js:** Escolhido pela sua arquitetura baseada em componentes, que permite criar interfaces de usuário complexas e reutilizáveis. Seu ecossistema robusto e a vasta comunidade facilitam a implementação de funcionalidades como atualização de dados em tempo real (essencial para leilões) e gerenciamento de estado.

#### 📦 Gerenciador de Pacotes
* **NPM (Node Package Manager):** Será utilizado para gerenciar todas as dependências do projeto, tanto no frontend (React) quanto no backend (Node.js). Ele simplifica a instalação, atualização e remoção de bibliotecas e frameworks.

#### 🎨 Pré-processadores CSS
* **Sass (Syntactically Awesome Style Sheets):** Adotado para escrever um CSS mais modular, manutenível e poderoso. Recursos como variáveis (para paleta de cores), mixins (para reutilização de estilos) e aninhamento de seletores organizarão a folha de estilos do projeto, especialmente em uma aplicação de grande escala.

#### 🗄️ Banco de Dados
* **PostgreSQL:** Um sistema de gerenciamento de banco de dados relacional de código aberto, escolhido por sua robustez, confiabilidade e suporte avançado a tipos de dados. É ideal para modelar as relações complexas entre usuários, produtos, lances e transações de forma segura e consistente.

#### 🌐 Ambiente de Backend
* **Node.js com Express.js:** O backend será construído sobre Node.js, permitindo o uso de JavaScript em toda a pilha. O framework Express.js será utilizado para criar a API RESTful que conectará o frontend ao banco de dados, gerenciando rotas, requisições e respostas de forma organizada.

### 2.3. ♿ Acessibilidade e Compatibilidade com Leitores de Tela
A acessibilidade é um requisito não funcional crítico. Para garantir a compatibilidade com leitores de tela e seguir as diretrizes da WCAG (Web Content Accessibility Guidelines), serão adotadas as seguintes práticas:
* **HTML Semântico:** Uso correto de tags como `<header>`, `<main>`, `<nav>`, `<button>` e atributos `alt` em imagens.
* **ARIA (Accessible Rich Internet Applications):** Implementação de atributos ARIA para descrever o comportamento de componentes dinâmicos (como modais, abas e alertas) para tecnologias assistivas.
* **Contraste de Cores:** A paleta de cores do site será validada para garantir um contraste mínimo adequado, facilitando a leitura por pessoas com baixa visão.
* **Navegação via Teclado:** Toda a funcionalidade do site será acessível utilizando apenas o teclado.

---

## 3. 📋 Requisitos Funcionais (Resumo)
-   **🧑‍💻 Gestão de Contas:** Cadastro, login (com recuperação de senha) e gerenciamento de perfil de usuário.
-   **📦 Gestão de Produtos:** Vendedores podem criar, editar, e remover anúncios de produtos.
-   **🔎 Busca e Filtros:** Usuários podem buscar produtos por texto e filtrar por categoria, preço, etc.
-   **⏱️ Sistema de Leilão:** Vendedores podem iniciar leilões; compradores podem dar lances.
-   **💰 Compra Direta:** Opção de comprar um item por um preço fixo.
-   **💬 Comunicação:** Chat interno para negociação entre comprador e vendedor.
-   **💳 Transações:** Integração com gateway de pagamento.
-   **⭐ Sistema de Reputação:** Avaliação mútua (notas e comentários) após cada transação.

---

## 4. 📝 Casos de Uso Principais

O projeto completo detalha 10 casos de uso essenciais, incluindo:
1.  **🧑‍💻 Registrar Usuário**
2.  **🚪 Fazer Login**
3.  **👤 Gerenciar Perfil**
4.  **➕ Cadastrar Produto**
5.  **🔍 Buscar Produtos**
6.  ** auctions Iniciar Leilão**
7.  ** bid Dar Lance**
8.  **🛒 Comprar Imediatamente**
9.  **🗨️ Negociar via Chat**
10. **🌟 Avaliar Usuário**

*Os fluxos detalhados para cada caso de uso estão disponíveis na documentação completa do projeto.*

---

## 5. 📊 Diagramas UML (A Preencher)
Esta seção será atualizada com os diagramas UML relevantes para o projeto, incluindo:
-   Diagrama de Casos de Uso
-   Diagrama de Classes
-   Diagrama de Sequência
-   Diagrama de Atividades

---

## 6. 🧑‍🎓 Autores

* Sérgio Pinton Pavanelli - RA: 123220202
