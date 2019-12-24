---
title: Debug com window.ng no Angular 9
date: 2019-12-24T00:01:43.915Z
thumbnail: /img/captura_de_tela_2019-12-23_a_s_21.04.22.png
---
![console browser](/img/captura_de_tela_2019-12-23_a_s_21.04.22.png "console browser")

Com a versão 9 do Angular prestes a sair, temos algumas novas features que vão nos ajudar a desenvolver nossas aplicações e também a debugar-las de maneira certa, e uma dessas novidades é o objeto global `window.ng`.

## `window.ng`

Com o `window.ng` conseguimos ter acesso direto a Diretivas, Componentes direto do console do browser, tudo isso com o Angular 9 e a nova api do [Ivy](https://angular.io/guide/ivy).

Para fazer nosso teste vamos precisar na última `RC` do Angular (9.0.0-rc.7 até o momento deste post). Vamos criar um novo projeto com Angular 9:

![install next version of Angular](/img/angular-install-v9.png "install next version of Angular")

## Conhecendo a nova API do `window.ng`

Ok, com nosso projeto rodando vamos conhecer como que a api do `window.ng` funciona com alguns exemplos, o primeiro e o mais importante é o `ng.getComponent()`. 

![Angular componente](/img/angular-component-01.png "Angular componente")

Com o nosso componente criado, vamos atualizar o valor do atributo \`title\` do nosso componente, para isso precisamos acessar o \`HTMLElement \` do componente, para isso vamos usar a função do Chrome \`$(selector)\` e armazenar em uma variável, \`el\`. A função \`ng.getComponent()\` recebe um elemento, neste caso vamos usar o elemento que está armazenado na variável \`el\`, com isso já conseguimos atualizar o valor do atributo \_title\_ do nosso componente.

```js
const el = $('app-root');
const c = ng.getComponent(el);
c.title = 'Hey new ng api!!!';
ng.markDirty(el);
```

Exemplo:

![live demo](https://res.cloudinary.com/dwc5hkby0/image/upload/v1577148580/rs-blog-posts/ng-component-ng-api.gif "live demo 1")

### Casos de uso para o `ng.getComponent()`

- Acessar um service injetado no componente e disparar algum método do mesmo manualmente e acessar os valores via console;
- Fazer um subscribe em algum Observable e emitir o valor também no console;
- Acessar algum método do próprio componente e analisar se o comportamento está como esperado.
