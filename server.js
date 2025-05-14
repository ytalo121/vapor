const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname)));

// Dados de exemplo para produtos
const produtos = [
  {
    id: 1,
    nome: 'Vinil Holográfico',
    preco: 89.90,
    descricao: 'O Vinil Holográfico é uma peça exclusiva que combina a nostalgia dos discos de vinil com a estética futurista do vaporwave.',
    caracteristicas: [
      'Disco de vinil 12" com efeito holográfico',
      '8 faixas exclusivas de artistas synthwave',
      'Capa com arte personalizada em estilo vaporwave',
      'Edição limitada numerada',
      'Inclui código para download digital das faixas'
    ],
    imagem: '/imagens/vinil.jpg',
    pagina: '/produto-vinil.html'
  },
  {
    id: 2,
    nome: 'Óculos Futurista',
    preco: 129.90,
    descricao: 'Óculos com design futurista inspirado na estética cyberpunk e vaporwave.',
    caracteristicas: [
      'Design retrô-futurista',
      'Lentes coloridas com efeito gradiente',
      'Armação em metal com acabamento holográfico',
      'Proteção UV400',
      'Estojo personalizado incluído'
    ],
    imagem: '/imagens/oculos.jpg',
    pagina: '/produto-oculos.html'
  },
  {
    id: 3,
    nome: 'Câmera Retro Flash',
    preco: 249.90,
    descricao: 'Câmera instantânea com design retrô dos anos 80 e flash colorido.',
    caracteristicas: [
      'Design inspirado nas câmeras dos anos 80',
      'Flash com filtros coloridos intercambiáveis',
      'Impressão instantânea em filme polaroid',
      'Bateria recarregável via USB',
      'Inclui pacote com 10 filmes'
    ],
    imagem: '/imagens/camera.jpg',
    pagina: '/produto-camera.html'
  },
  {
    id: 4,
    nome: 'Monstera Deliciosa',
    preco: 79.90,
    descricao: 'Planta artificial Monstera Deliciosa com acabamento metálico em tons de roxo e azul.',
    caracteristicas: [
      'Altura de 50cm',
      'Material: plástico e metal',
      'Acabamento metálico em degradê',
      'Base em cerâmica geométrica',
      'Não necessita de cuidados especiais'
    ],
    imagem: '/imagens/monstera.jpg',
    pagina: '/produto-monstera.html'
  },
  {
    id: 5,
    nome: 'Fita Cassete Neon',
    preco: 59.90,
    descricao: 'Fita cassete com design neon contendo mixtape de músicas synthwave e vaporwave.',
    caracteristicas: [
      'Cassete transparente com detalhes em neon',
      '60 minutos de música (30 min cada lado)',
      'Caixa personalizada com arte vaporwave',
      'Inclui código QR para versão digital',
      'Edição limitada'
    ],
    imagem: '/imagens/cassete.jpg',
    pagina: '/produto-cassete.html'
  },
  {
    id: 6,
    nome: 'Luminária Neon Palmeira',
    preco: 149.90,
    descricao: 'Luminária em formato de palmeira com luz neon rosa e azul, perfeita para criar ambiente vaporwave.',
    caracteristicas: [
      'Altura de 45cm',
      'Luz LED de baixo consumo',
      'Controle remoto com 16 cores',
      'Base em acrílico transparente',
      'Cabo USB com 2 metros'
    ],
    imagem: '/imagens/luminaria.jpg',
    pagina: '/produto-luminaria.html'
  },
  {
    id: 7,
    nome: 'Camiseta Retrowave',
    preco: 69.90,
    descricao: 'Camiseta com estampa retrowave de sol e grade geométrica em cores neon sobre fundo preto.',
    caracteristicas: [
      'Material: 100% algodão',
      'Estampa em serigrafia de alta qualidade',
      'Disponível nos tamanhos P, M, G e GG',
      'Lavagem à máquina',
      'Produzida no Brasil'
    ],
    imagem: '/imagens/camiseta.jpg',
    pagina: '/produto-camiseta.html'
  },
  {
    id: 8,
    nome: 'Fones de Ouvido Retrô',
    preco: 199.90,
    descricao: 'Fones de ouvido com design retrô dos anos 80 e iluminação LED nas conchas.',
    caracteristicas: [
      'Conexão Bluetooth 5.0',
      'Bateria com duração de 20 horas',
      'Iluminação LED em 7 cores',
      'Microfone embutido',
      'Almofadas auriculares macias'
    ],
    imagem: '/imagens/fones.jpg',
    pagina: '/produto-fones.html'
  },
  {
    id: 9,
    nome: 'Estatueta Busto Vaporwave',
    preco: 129.90,
    descricao: 'Estatueta de busto em estilo greco-romano com acabamento em cores neon e glitch.',
    caracteristicas: [
      'Altura: 25cm',
      'Material: Resina com pintura metalizada',
      'Base com iluminação LED',
      'Detalhes em glitch art',
      'Peça decorativa exclusiva'
    ],
    imagem: '/imagens/estatueta.jpg',
    pagina: '/produto-estatueta.html'
  },
  {
    id: 10,
    nome: 'Relógio Digital Retrô',
    preco: 89.90,
    descricao: 'Relógio digital com design inspirado nos primeiros computadores e calculadoras dos anos 80.',
    caracteristicas: [
      'Display LED com números grandes',
      'Caixa em plástico com acabamento metálico',
      'Função alarme e cronômetro',
      'Iluminação noturna em azul neon',
      'Funciona com pilhas ou USB'
    ],
    imagem: '/imagens/relogio.jpg',
    pagina: '/produto-relogio.html'
  },
  {
    id: 11,
    nome: 'Tapete Grid Neon',
    preco: 119.90,
    descricao: 'Tapete com padrão de grade infinita (infinite grid) em cores neon sobre fundo preto.',
    caracteristicas: [
      'Tamanho: 120x80cm',
      'Material: Poliéster de alta densidade',
      'Base antiderrapante',
      'Cores vibrantes que não desbotam',
      'Lavável em máquina'
    ],
    imagem: '/imagens/tapete.jpg',
    pagina: '/produto-tapete.html'
  },
  {
    id: 12,
    nome: 'Caneca Glitch',
    preco: 49.90,
    descricao: 'Caneca com efeito de glitch art e cores que mudam com a temperatura da bebida.',
    caracteristicas: [
      'Capacidade: 350ml',
      'Material: Cerâmica com revestimento térmico',
      'Muda de cor com líquidos quentes',
      'Design exclusivo com efeito glitch',
      'Segura para microondas e lava-louças'
    ],
    imagem: '/imagens/caneca.jpg',
    pagina: '/produto-caneca.html'
  },
  {
    id: 13,
    nome: 'Mouse Retrowave',
    preco: 129.90,
    descricao: 'Mouse gamer com design retrowave, iluminação RGB e superfície com grid neon.',
    caracteristicas: [
      'Sensor óptico de alta precisão',
      'DPI ajustável até 12000',
      'Iluminação RGB programável',
      'Design ergonômico',
      '6 botões programáveis'
    ],
    imagem: '/imagens/mouse.jpg',
    pagina: '/produto-mouse.html'
  },
  {
    id: 14,
    nome: 'Caderno Holográfico',
    preco: 39.90,
    descricao: 'Caderno com capa holográfica que muda de cor conforme o ângulo de visão.',
    caracteristicas: [
      '100 folhas pautadas',
      'Capa dura com efeito holográfico',
      'Encadernação em espiral metálica',
      'Tamanho A5',
      'Inclui adesivos vaporwave'
    ],
    imagem: '/imagens/caderno.jpg',
    pagina: '/produto-caderno.html'
  },
  {
    id: 15,
    nome: 'Mochila Futurista',
    preco: 179.90,
    descricao: 'Mochila com design futurista, detalhes geométricos e iluminação LED nas bordas.',
    caracteristicas: [
      'Capacidade: 25 litros',
      'Material impermeável',
      'Iluminação LED com bateria recarregável',
      'Compartimento para notebook até 15"',
      'Alças acolchoadas ergonômicas'
    ],
    imagem: '/imagens/mochila.jpg',
    pagina: '/produto-mochila.html'
  },
  {
    id: 16,
    nome: 'Quadro Sunset Vaporwave',
    preco: 89.90,
    descricao: 'Quadro decorativo com arte digital de pôr do sol em estilo vaporwave com palmeiras e grid.',
    caracteristicas: [
      'Tamanho: 40x60cm',
      'Impressão em canvas de alta qualidade',
      'Moldura em madeira preta',
      'Pronto para pendurar',
      'Arte digital exclusiva'
    ],
    imagem: '/imagens/quadro.jpg',
    pagina: '/produto-quadro.html'
  },
  {
    id: 17,
    nome: 'Teclado Mecânico Neon',
    preco: 259.90,
    descricao: 'Teclado mecânico com iluminação RGB e teclas inspiradas no design retro-futurista.',
    caracteristicas: [
      'Switches mecânicos Blue',
      'Iluminação RGB com 16.8 milhões de cores',
      'Layout ABNT2',
      'Keycaps com fonte retrô',
      'Cabo USB trançado com 1.8m'
    ],
    imagem: '/imagens/teclado.jpg',
    pagina: '/produto-teclado.html'
  },
  {
    id: 18,
    nome: 'Copo Térmico Cyberpunk',
    preco: 69.90,
    descricao: 'Copo térmico com design cyberpunk e acabamento metálico em degradê de cores neon.',
    caracteristicas: [
      'Capacidade: 450ml',
      'Parede dupla de aço inoxidável',
      'Mantém bebidas quentes por 6h e frias por 12h',
      'Tampa hermética anti-vazamento',
      'Acabamento metalizado em degradê'
    ],
    imagem: '/imagens/copo.jpg',
    pagina: '/produto-copo.html'
  },
  {
    id: 19,
    nome: 'Almofada Grid Infinito',
    preco: 59.90,
    descricao: 'Almofada com estampa de grid infinito em perspectiva com montanhas e sol em estilo synthwave.',
    caracteristicas: [
      'Tamanho: 45x45cm',
      'Tecido: Veludo suave',
      'Enchimento em fibra siliconada',
      'Estampa em sublimação de alta definição',
      'Zíper invisível'
    ],
    imagem: '/imagens/almofada.jpg',
    pagina: '/produto-almofada.html'
  }
];

// Carrinho de compras
let carrinho = [];

// Rotas para API

// Obter todos os produtos
app.get('/api/produtos', (req, res) => {
  res.json(produtos);
});

// Obter produto por ID
app.get('/api/produtos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const produto = produtos.find(p => p.id === id);
  
  if (produto) {
    res.json(produto);
  } else {
    res.status(404).json({ mensagem: 'Produto não encontrado' });
  }
});

// Obter carrinho
app.get('/api/carrinho', (req, res) => {
  res.json(carrinho);
});

// Adicionar item ao carrinho
app.post('/api/carrinho/adicionar', (req, res) => {
  const { produtoId, quantidade } = req.body;
  const produto = produtos.find(p => p.id === parseInt(produtoId));
  
  if (!produto) {
    return res.status(404).json({ mensagem: 'Produto não encontrado' });
  }
  
  // Verificar se o produto já está no carrinho
  const itemExistente = carrinho.find(item => item.produto.id === parseInt(produtoId));
  
  if (itemExistente) {
    itemExistente.quantidade += parseInt(quantidade);
  } else {
    carrinho.push({
      produto,
      quantidade: parseInt(quantidade)
    });
  }
  
  res.json({
    mensagem: 'Produto adicionado ao carrinho',
    carrinho
  });
});

// Remover item do carrinho
app.post('/api/carrinho/remover', (req, res) => {
  const { produtoId } = req.body;
  
  const indice = carrinho.findIndex(item => item.produto.id === parseInt(produtoId));
  
  if (indice !== -1) {
    carrinho.splice(indice, 1);
    res.json({
      mensagem: 'Produto removido do carrinho',
      carrinho
    });
  } else {
    res.status(404).json({ mensagem: 'Produto não encontrado no carrinho' });
  }
});

// Limpar carrinho
app.post('/api/carrinho/limpar', (req, res) => {
  carrinho = [];
  res.json({
    mensagem: 'Carrinho esvaziado',
    carrinho
  });
});

// Rota para servir as páginas HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
  console.log(`Acesse: http://localhost:${PORT}`);
});