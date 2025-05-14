// Cliente API para integração com o backend Node.js

// Funções para interagir com a API de produtos e carrinho
const API = {
  // Obter todos os produtos
  obterProdutos: async function() {
    try {
      const resposta = await fetch('/api/produtos');
      return await resposta.json();
    } catch (erro) {
      console.error('Erro ao obter produtos:', erro);
      return [];
    }
  },

  // Obter produto por ID
  obterProdutoPorId: async function(id) {
    try {
      const resposta = await fetch(`/api/produtos/${id}`);
      return await resposta.json();
    } catch (erro) {
      console.error(`Erro ao obter produto ${id}:`, erro);
      return null;
    }
  },

  // Obter carrinho
  obterCarrinho: async function() {
    try {
      const resposta = await fetch('/api/carrinho');
      return await resposta.json();
    } catch (erro) {
      console.error('Erro ao obter carrinho:', erro);
      return [];
    }
  },

  // Adicionar produto ao carrinho
  adicionarAoCarrinho: async function(produtoId, quantidade = 1) {
    try {
      const resposta = await fetch('/api/carrinho/adicionar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ produtoId, quantidade })
      });
      return await resposta.json();
    } catch (erro) {
      console.error('Erro ao adicionar ao carrinho:', erro);
      return { erro: 'Falha ao adicionar ao carrinho' };
    }
  },

  // Remover produto do carrinho
  removerDoCarrinho: async function(produtoId) {
    try {
      const resposta = await fetch('/api/carrinho/remover', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ produtoId })
      });
      return await resposta.json();
    } catch (erro) {
      console.error('Erro ao remover do carrinho:', erro);
      return { erro: 'Falha ao remover do carrinho' };
    }
  },

  // Limpar carrinho
  limparCarrinho: async function() {
    try {
      const resposta = await fetch('/api/carrinho/limpar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      return await resposta.json();
    } catch (erro) {
      console.error('Erro ao limpar carrinho:', erro);
      return { erro: 'Falha ao limpar carrinho' };
    }
  }
};

// Inicializar eventos quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
  // Botões de adicionar ao carrinho
  const botoesAdicionar = document.querySelectorAll('.neon-btn');
  
  botoesAdicionar.forEach(botao => {
    if (botao.textContent.includes('ADICIONAR AO CARRINHO')) {
      botao.addEventListener('click', function() {
        // Obter ID do produto da URL
        const urlAtual = window.location.pathname;
        const nomeProduto = urlAtual.split('-').pop().replace('.html', '');
        
        // Mapear nome do produto para ID
        const mapaNomes = {
          'vinil': 1,
          'oculos': 2,
          'camera': 3,
          'monstera': 4
        };
        
        const produtoId = mapaNomes[nomeProduto];
        
        if (produtoId) {
          API.adicionarAoCarrinho(produtoId, 1)
            .then(resposta => {
              alert('Produto adicionado ao carrinho!');
              console.log('Resposta:', resposta);
            })
            .catch(erro => {
              console.error('Erro:', erro);
            });
        }
      });
    }
  });
});