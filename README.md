# Michael Jackson — Blood on the Dance Floor: HIStory in the Mix (player)

Player estático (HTML/CSS/JS, sem build) para GitHub Pages. Dados em `data/album.js`.

## Paleta (medida nos pixels da capa)
| Papel | Cor | Origem |
|---|---|---|
| black | `#000000` | moldura |
| red | `#F40114` | título escrito à mão |
| crimson | `#C2010F` | terno vermelho |
| oxblood | `#5C0101` | sombras do terno |
| navy | `#0A2250` | céu azul-noite |
| gold | `#E4A72A` | nuvens douradas iluminadas |
| ochre | `#AD7416` | nuvens, tom médio |
| amber | `#BE4D07` | prédios alaranjados |
| check | `#B09126` | piso xadrez |
| white | `#F5F5F5` | "MICHAEL JACKSON" |

## Identidade
- **Progresso = o título vermelho da capa**: as letras de "Blood On The Dance Floor" (recorte real, escrito à mão) ficam apagadas no preto da moldura e acendem no vermelho conforme a faixa toca. Toque ou arraste nas letras para buscar na faixa (cliques fora do título não fazem nada). A barra comum continua funcionando.
- **Divisória = o piso xadrez da capa** (recorte real), que anda devagar enquanto a música toca.
- **Noite** (padrão): a moldura preta, o vermelho do terno como cor viva e o dourado das nuvens como luz. **Dia**: o dourado claro das nuvens como papel, texto no preto e o vermelho do terno como cor viva. A escolha fica salva.
- Fontes: Kaushan Script (título à mão), Cinzel (subtítulo e nome, como as letras espaçadas da capa) e Jost (texto), todas OFL em `assets/fonts/`. Central de mídia (Media Session) com capa, anterior/próxima e seek.

## Antes de publicar
`data/album.js` traz 13 faixas com os títulos que eu conheço da edição "HIStory in the Mix", apontando para `audio/01.flac`…`audio/13.flac`. Confira ordem, nomes das versões/remixes, data e gravadora, e ajuste os arquivos de áudio. Compositores, letras `.lrc` (`lyrics`) e tradução (`translation`) ficam em branco para você preencher; as durações aparecem sozinhas ao tocar.

## Arquivos
`index.html`, `css/style.css`, `js/{app,player,ui,road}.js`, `data/album.js`, `assets/{cover.jpg, cover-256.jpg, cover-512.jpg, piso.jpg, fonts/}`, `tools/` (gera o mapa do título `js/road.js` e o piso a partir da capa).

## Identidade visual (revisão)
- `assets/skyline.jpg`: recorte real dos prédios alaranjados da capa (espelhado para repetir sem emenda), usado como divisória junto do piso xadrez animado.
- Céu azul-noite com estrelas no topo (versão Noite), cores `--p-navy`/`--p-gold` da capa.
- Moldura dourada fina no player e nas letras; título da faixa em Kaushan Script (como o título escrito à mão da capa); legendas em Cinzel espaçado (como "MICHAEL JACKSON").
- Barra de tempo = o piso xadrez real da capa (aceso por onde já tocou); botão play vermelho do terno com aro dourado.
- `data/album.js` não mudou.
