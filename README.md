# Site modelo — chácara / área de lazer

O site está pronto para ser aberto diretamente pelo arquivo `index.html` ou publicado em qualquer hospedagem estática.

## Personalização rápida

Toda a informação variável fica em `config.js`:

- dados de contato, localização e mensagens de WhatsApp;
- textos, estrutura e diferenciais;
- links de vídeos, capa e Google Maps;
- galeria de fotos reais e avaliações reais.

Os valores entre colchetes (`[ ... ]`) são campos pendentes e foram mantidos propositalmente para não apresentar informações fictícias.

## Mídias

Crie a pasta `assets/` ao adicionar as mídias e use caminhos como `assets/piscina-01.webp` no arquivo de configuração. Para o vídeo de abertura, prefira uma versão WebM e outra MP4, curtas, silenciosas e comprimidas. A imagem de capa é usada caso o vídeo não esteja disponível.

## Localização e privacidade

Por padrão, o endereço exato permanece oculto. Para mostrá-lo, defina `showExactAddress: true`. Também é possível inserir apenas o link de rotas, sem expor o endereço no site.
