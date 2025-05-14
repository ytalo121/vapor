# VaporStore - Loja Online com Estética Vaporwave

Este projeto é uma loja online com estética vaporwave que utiliza Node.js e Express para criar um backend que serve os arquivos HTML e fornece APIs para gerenciamento de produtos e carrinho de compras.

## Tecnologias Utilizadas

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Estilo**: Vaporwave/Retrowave

## Funcionalidades

- Exibição de produtos com estética vaporwave
- Detalhes de produtos individuais
- Carrinho de compras funcional
- API RESTful para gerenciamento de produtos e carrinho

## Como Executar

1. Certifique-se de ter o Node.js instalado
2. Clone este repositório
3. Instale as dependências:
   ```
   npm install
   ```
4. Inicie o servidor:
   ```
   npm run dev
   ```
5. Acesse no navegador: http://localhost:3000

## Estrutura da API

### Produtos
- `GET /api/produtos` - Lista todos os produtos
- `GET /api/produtos/:id` - Obtém detalhes de um produto específico

### Carrinho
- `GET /api/carrinho` - Obtém o conteúdo atual do carrinho
- `POST /api/carrinho/adicionar` - Adiciona um produto ao carrinho
- `POST /api/carrinho/remover` - Remove um produto do carrinho
- `POST /api/carrinho/limpar` - Limpa o carrinho

## Estética Vaporwave

O design do site é inspirado na estética vaporwave/retrowave, com cores neon (roxo, azul e rosa), elementos retrô dos anos 80/90 e interfaces que lembram os primeiros sistemas operacionais com janelas.