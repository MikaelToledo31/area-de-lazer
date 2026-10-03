/*
 * CENTRAL DE PERSONALIZAÇÃO
 * Para criar uma nova versão do site, altere os dados abaixo e substitua
 * os caminhos em /assets por fotos e vídeos reais do local.
 */
window.CHACARA_CONFIG = {
  name: "[NOME DA CHÁCARA]",
  type: "chácara para locação",
  city: "[CIDADE]",
  region: "[REGIÃO / BAIRRO]",
  shortDescription: "[DESCRIÇÃO CURTA DA CHÁCARA]",
  tagline: "Seu espaço para momentos inesquecíveis.",
  heroText: "Um espaço completo para aproveitar com sua família e amigos.",
  description: "[DESCRIÇÃO DO ESPAÇO: conte aqui sobre a propriedade, privacidade, ambiente familiar, natureza, localização e principais diferenciais.]",

  contacts: {
    whatsapp: "[WHATSAPP]", // Apenas números, com DDI e DDD. Ex.: 5511999999999
    instagram: "[LINK DO INSTAGRAM]",
    maps: "[LINK DO GOOGLE MAPS]",
    mapEmbed: "", // Cole aqui somente a URL do iframe do Google Maps, se desejar exibir o mapa
    publicLocation: "[CIDADE / LOCALIZAÇÃO APROXIMADA]",
    exactAddress: "[ENDEREÇO]",
    showExactAddress: false
  },

  media: {
    // Deixe em branco enquanto o material não for fornecido. Formatos recomendados: WebM + MP4 curtos e comprimidos.
    heroVideoWebm: "",
    heroVideoMp4: "",
    heroPoster: "", // Ex.: assets/capa-chacara.webp
    experienceVideo: "", // URL de vídeo hospedado (YouTube ou arquivo MP4). A seção é ocultada se estiver vazia.
    experienceCover: ""
  },

  // Remova ou edite qualquer item que não faça parte da estrutura real.
  features: [
    { icon: "bed", label: "Quartos", value: "[QUANTIDADE DE QUARTOS]" },
    { icon: "users", label: "Capacidade", value: "[CAPACIDADE]" },
    { icon: "sleep", label: "Camas", value: "[QUANTIDADE DE CAMAS]" },
    { icon: "pool", label: "Piscina", value: "[INFORMAR DISPONIBILIDADE]" },
    { icon: "grill", label: "Churrasqueira", value: "[INFORMAR DISPONIBILIDADE]" },
    { icon: "car", label: "Estacionamento", value: "[INFORMAR DISPONIBILIDADE]" },
    { icon: "tree", label: "Área externa", value: "[DESCREVER ESPAÇO]" }
  ],

  // Utilize apenas diferenciais verdadeiros e remova os demais.
  highlights: [
    "[DIFERENCIAL 01]",
    "[DIFERENCIAL 02]",
    "[DIFERENCIAL 03]",
    "[DIFERENCIAL 04]"
  ],

  // Adicione somente fotos reais do proprietário. A categoria aparece automaticamente como filtro.
  gallery: [
    // { src: "assets/piscina-01.webp", alt: "Piscina da [NOME DA CHÁCARA]", category: "Piscina" },
    // { src: "assets/area-externa-01.webp", alt: "Área externa da [NOME DA CHÁCARA]", category: "Área externa" }
  ],

  // Não inserir conteúdo fictício. A seção mostra um estado pronto para integração enquanto estiver vazia.
  reviews: {
    average: "",
    count: "",
    googleUrl: "[LINK DAS AVALIAÇÕES NO GOOGLE]",
    items: [
      // { name: "Nome do cliente", avatar: "assets/avatar.webp", text: "Avaliação real fornecida pelo Google.", rating: 5 }
    ]
  }
};
