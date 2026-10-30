# Vireon

Landing page em React e Vite, com Tailwind CSS e ícones Lucide.

## Desenvolvimento

Requer Node.js e npm.

```sh
npm ci
npm run dev
```

`npm run build` gera a versão de produção em `dist/`. `npm run preview` permite conferir essa versão localmente.

## Organização

- `src/App.jsx`: composição e ordem das seções da página.
- `src/components/`: navegação, seções e rodapé. `ui.jsx` reúne os elementos visuais compartilhados.
- `src/lib/branding.js`: cores da marca, número de contato e montagem do link do WhatsApp.
- `src/validation/contactForm.js`: validação dos dados e formatação do telefone.
- `src/index.css`: fontes, estilos globais e animações.
- `index.html`: idioma, título e descrição da página.

Mantenha os textos de cada seção no próprio componente. Estilos usados por toda a página ficam no CSS global; cores e contato ficam em `branding.js`.

## Espaçamento

- Margens laterais: 24 px no celular e 48 px a partir de 768 px; conteúdo principal limitado a 1152 px.
- Seções: 80 px acima e abaixo no celular e 112 px no desktop. Entre seções consecutivas com o mesmo fundo, cada uma fornece metade desse intervalo.
- Introdução e conteúdo: 40 px no celular e 48 px no desktop; grades de cartões usam 24 px entre itens.
- Primeira seção: recuo superior de 48 px no celular e 64 px no desktop, sem somar padding no contêiner interno.
- Links internos: reserva de 128 px no celular e 144 px no desktop para o menu fixo.

## Conteúdo e contato

O formulário valida os dados e prepara uma mensagem no WhatsApp. O visitante precisa enviar a mensagem por lá para concluir o contato.

As fontes Barlow e Source Sans 3 são carregadas pelo Google Fonts, com fonte local de fallback. Os indicadores de resultados exibidos na página precisam ser sustentados por dados reais antes da publicação.
