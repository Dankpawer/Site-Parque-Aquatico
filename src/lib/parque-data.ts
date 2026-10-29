/**
 * Dados centrais do site MUKAI — Parque Aquático
 * Conteúdo original do repositório MUKAI, estruturado no padrão La Villa Jeri.
 */

export const NAV_LINKS = [
  { label: "Home", href: "#topo" },
  {
    label: "O Parque",
    href: "#historia",
    children: [
      { label: "Nossa História", href: "#historia" },
      { label: "Estrutura e Conforto", href: "#conforto" },
      { label: "Como Chegar", href: "#visite" },
    ],
  },
  {
    label: "Atrações",
    href: "#atracoes",
    children: [
      { label: "Espiral Gigante", href: "#atracoes" },
      { label: "Corrida de Colchões", href: "#atracoes" },
      { label: "Queda em Cápsula", href: "#atracoes" },
      { label: "Mar de Ondas", href: "#atracoes" },
      { label: "Rio Tranquilo", href: "#atracoes" },
      { label: "Playground Balde Gigante", href: "#atracoes" },
    ],
  },
  { label: "Ingressos", href: "#ingressos" },
  { label: "Dúvidas", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

export const FEATURES = [
  {
    icon: "spiral",
    title: "Espiral Gigante",
    text: "O tobogã que virou símbolo do parque: uma descida em espiral com curvas de dar arrepio.",
  },
  {
    icon: "waves",
    title: "Mar de Ondas",
    text: "Ondas artificiais que nunca param, para brincar, surfar e se emocionar com a família toda.",
  },
  {
    icon: "river",
    title: "Rio Tranquilo",
    text: "Um rio lento que convida a desacelerar: boie pelas curvas e aproveite o sol em cada volta.",
  },
  {
    icon: "castle",
    title: "Área Infantil",
    text: "Playground Balde Gigante com escorregadores, jatos e o balde que vira de hora em hora.",
  },
] as const;

export const CONFORTO = [
  { icon: "lock", text: "Armários individuais e área de descanso com sombra" },
  { icon: "wifi", text: "Wi-Fi liberado em toda a área do parque" },
  { icon: "food", text: "Restaurante e lanchonete com cardápio para todos os gostos" },
  { icon: "parking", text: "Estacionamento próprio com vagas cobertas e descobertas" },
  { icon: "child", text: "Gratuidade para crianças de até 5 anos" },
  { icon: "life", text: "Socorristas treinados em todas as atrações" },
] as const;

export const HISTORIA_TIMELINE = [
  {
    year: "2009",
    title: "Inauguração",
    text: "O MUKAI nasce de uma praia pequena e desconhecida, com uma piscina, dois tobogãs e o sonho de criar um parque de verão para toda a família.",
  },
  {
    year: "2014",
    title: "A Espiral Gigante chega",
    text: "A atração que viraria a marca do parque é inaugurada: uma espiral imensa, com curvas fechadas e muita adrenalina, atraindo visitantes de todo o estado.",
  },
  {
    year: "2018",
    title: "Corrida de Colchões",
    text: "Chega a disputa que ninguém consegue resistir: seis pistas lado a lado para descer de colchão e descobrir quem chega primeiro à chegada.",
  },
  {
    year: "2022",
    title: "Área infantil e queda em cápsula",
    text: "O Playground Balde Gigante amplia a área das crianças e a Queda em Cápsula chega para os corajosos: o chão simplesmente abre sob seus pés.",
  },
] as const;

export const ATRACOES = [
  {
    nome: "Playground Balde Gigante",
    local: "Área infantil",
    imagem: "/parque/img5.jpg",
    texto:
      "O paraíso das crianças: escorregadores coloridos, jatos de água e o balde gigante que despeja centenas de litros de cima da estrutura, de hora em hora.",
    tags: ["Para crianças", "Balde de água"],
  },
  {
    nome: "Espiral Gigante",
    local: "Adrenalina",
    imagem: "/parque/img6.jpg",
    texto:
      "O cartão-postal do MUKAI. Uma espiral imensa em boia para até quatro pessoas, com curvas fechadas, trechos escuros e uma bacia final que gira antes da queda.",
    tags: ["Boia em grupo", "Adrenalina"],
  },
  {
    nome: "Corrida de Colchões",
    local: "Disputa",
    imagem: "/parque/img7.jpg",
    texto:
      "Seis pistas multicoloridas lado a lado. Deite no colchão, empurre-se com força e descubra quem da sua família chega primeiro ao fim da rampa.",
    tags: ["Corrida", "Até 6 pessoas"],
  },
  {
    nome: "Queda em Cápsula",
    local: "Coragem",
    imagem: "/parque/img8.jpg",
    texto:
      "Para quem não teme o vazio: a cabine transparente para na plataforma, o chão abre de repente e a queda livre acontece antes de você perceber.",
    tags: ["Queda livre", "Medidores"],
  },
  {
    nome: "Mar de Ondas",
    local: "Família",
    imagem: "/parque/img4.jpg",
    texto:
      "Uma piscina gigante com ondas artificiais que sobem e descem em ciclos. Alugue uma boia ou enfrente as ondas com o próprio corpo no fundo da piscina.",
    tags: ["Ondas artificiais", "Boias"],
  },
  {
    nome: "Rio Tranquilo",
    local: "Relaxamento",
    imagem: "/parque/img10.jpg",
    texto:
      "O caminho mais calmo do parque: um rio lento que percorre toda a área verde, com cachoeiras suaves e pontos para entrar e sair quando quiser.",
    tags: ["Boia inclusa", "Relaxar"],
  },
] as const;

export const INGRESSOS = [
  {
    nome: "Inteira",
    preco: "R$ 120",
    porPessoa: "por pessoa",
    destaque: false,
    itens: [
      "Acesso a todas as atrações",
      "Boia para o Rio Tranquilo",
      "Armários e área de descanso",
    ],
  },
  {
    nome: "Família",
    preco: "R$ 380",
    porPessoa: "4 pessoas",
    destaque: true,
    itens: [
      "Acesso a todas as atrações",
      "Boias para toda a família",
      "Economia de R$ 180 em relação às inteiras",
    ],
  },
  {
    nome: "Meio Período",
    preco: "R$ 80",
    porPessoa: "a partir das 14h",
    destaque: false,
    itens: [
      "Acesso a todas as atrações",
      "Armários e área de descanso",
      "Documento obrigatório na entrada",
    ],
  },
  {
    nome: "Passe Anual",
    preco: "R$ 890",
    porPessoa: "por pessoa",
    destaque: false,
    itens: [
      "Entrada ilimitada por um ano",
      "Desconto em restaurante e lojas",
      "Convidado com 20% de desconto",
    ],
  },
] as const;

export const FAQ = [
  {
    pergunta: "Preciso levar algum tipo especial de roupa de banho?",
    resposta:
      "Não. Você pode usar qualquer roupa de banho confortável. Não é permitido o uso de roupas com zíper ou botões metálicos nas atrações, pois podem danificar os tobogãs e machucar outros visitantes.",
  },
  {
    pergunta: "Posso levar lanches e bebidas para o parque?",
    resposta:
      "Levar lanche e água é permitido. Bebidas alcoólicas e recipientes de vidro não são aceitos na área do parque, por segurança de todos os visitantes.",
  },
  {
    pergunta: "Existem armários para guardar pertences?",
    resposta:
      "Sim. Há armários individuais na entrada, com cobrança à parte, e área de descanso com sombra e guarda-volumes. Recomendamos deixar objetos de valor em casa ou nos armários.",
  },
  {
    pergunta: "Crianças podem entrar sozinhas nas atrações?",
    resposta:
      "Crianças menores de 12 anos devem estar acompanhadas por um adulto responsável durante todo o período de visita. Algumas atrações possuem altura mínima específica, sinalizada na entrada de cada uma.",
  },
  {
    pergunta: "Comprei online e não pude ir. E agora?",
    resposta:
      "Ingressos comprados online podem ser trocados por outra data até 48 horas antes da visita, conforme as condições da compra. Fale com a nossa equipe pelo WhatsApp para reagendar.",
  },
] as const;

export const DEPOIMENTOS = [
  {
    titulo: "Dia perfeito em família",
    texto:
      "Levamos os três filhos e ninguém ficou parado um minuto. A área infantil é incrível e o Mar de Ondas virou a brincadeira favorita de todo mundo.",
    autor: "C.F.",
    fonte: "Google",
  },
  {
    titulo: "A Espiral é surreal",
    texto:
      "Pensei que conhecia todos os tobogãs da região, mas a Espiral Gigante é outro nível. As curvas não dão trégua e a bacia final é de dar gritos.",
    autor: "R.M.",
    fonte: "Tripadvisor",
  },
  {
    titulo: "Voltamos no mesmo mês",
    texto:
      "Compramos o passe anual na primeira visita. Rio Tranquilo para relaxar, corrida de colchões para disputar e estrutura limpa do começo ao fim.",
    autor: "A.P.",
    fonte: "Google",
  },
] as const;

export const VISITE_INFO = [
  {
    icon: "pin",
    titulo: "Endereço",
    texto: "Rua, número, bairro, cidade e estado a preencher",
  },
  {
    icon: "clock",
    titulo: "Horário",
    texto: "Terça a domingo, das 10h às 18h. Fechado às segundas.",
  },
  {
    icon: "car",
    titulo: "Estacionamento",
    texto: "Vagas cobertas e descobertas, com valor a definir",
  },
  {
    icon: "bus",
    titulo: "Transporte",
    texto: "Linhas de ônibus e aplicativos com ponto de embarque na frente do parque",
  },
] as const;

export const INSTAGRAM_IMGS = [
  "/parque/img1.jpg",
  "/parque/img4.jpg",
  "/parque/img5.jpg",
  "/parque/img6.jpg",
  "/parque/img7.jpg",
  "/parque/img10.jpg",
] as const;

export const CONTATO = {
  endereco: "Rua, número, bairro, cidade e estado a preencher",
  email: "contato@mukai.com.br",
  telefone: "+55 (00) 00000-0000",
  instagram: "@parquemukai",
};

export const FOOTER_EMPRESA = {
  nome: "MUKAI Parque Aquático",
  nota: "Parque aquático para toda a família, com espirais gigantes, ondas artificiais e um rio tranquilo.",
};
