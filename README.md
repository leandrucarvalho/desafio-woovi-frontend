# Projeto de Formulário de Pagamento

Este projeto é uma [réplica](https://www.figma.com/design/hv1LgD7oNrtlmfWgKBG6PF/Woovi-Desafio-Front?node-id=1-100&t=8e8S8BqGhbskgN2d-0) web desenvolvida utilizando React, Next.js e Material-UI. A aplicação consiste em formulários para pagamento com Pix e cartão de crédito, além de uma navegação entre diferentes telas por meio de URLs.

## Estrutura do Projeto

- **Componente Header**: Responsável por exibir o cabeçalho da página com um logotipo e uma mensagem personalizada.
- **Componente DataCard**: Contém o formulário de dados do cartão de crédito, incluindo campos para nome completo, CPF, número do cartão, vencimento, CVV e número de parcelas.
- **Componente Footer**: Exibe um rodapé fixo com um ícone de segurança e o logotipo da Woovi.

## Navegação

A navegação entre as diferentes telas da aplicação é realizada diretamente através das URLs:

- **Página Inicial**: [http://localhost:3001/](http://localhost:3001/)
  - Página principal da aplicação.
- **Página Pix Credit Card**: [http://localhost:3001/pix-credit-card](http://localhost:3001/pix-credit-card)
  - Página contendo um formulário para pagamento via Pix.
- **Página Pix Credit Card 2**: [http://localhost:3001/pix-credit-card2](http://localhost:3001/pix-credit-card2)
  - Página contendo um formulário para pagamento da entrada via cartão de crédito.

## Instalação e Execução

Para executar este projeto localmente, siga os passos abaixo:

1. Clone o repositório:
   ```bash
   git clone https://github.com/leandrucarvalho/desafio-woovi-frontend
   ```

2. Instale as dependências:
   ```bash
   cd desafio-woovi-frontend
   npm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

4. Acesse a aplicação no navegador através de [http://localhost:3001](http://localhost:3001).

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Next.js**: Framework React para renderização do lado do servidor e geração de sites estáticos.
- **Material-UI**: Biblioteca de componentes de interface de usuário para React.
- **TailwindCSS**: Framework CSS para estilização rápida e responsiva.

## Contato

Para mais informações, dúvidas ou sugestões, entre em contato pelo e-mail: [leandrucs@gmail.com](mailto:leandrucs@gmail.com).

