<img width=100% src="https://capsule-render.vercel.app/api?type=waving&color=40E0D0&height=120&section=header"/>


# 🗽 Landing Page - Ana Flávia Guarda 🗽

<p align="left">
  <a href="./README.en.md">
    <img src="https://img.shields.io/badge/%F0%9F%8C%8D%20Click%20here%20to%20read%20this%20documentation%20in%20english!%20-purple?style=for-the-badge" alt="Button where change the documentation to English"/>
  </a>
</p>

> Link da landing page: https://ana-flavia-guarda.vercel.app/

## 📌 Sobre a landing page

### Esta landing page foi desenvolvida para a professora de inglês Ana Flávia Guarda (20 anos), com o objetivo de converter mais alunos.

## 🎯 Objetivos principais que eu tenho com esse projeto
- ✔️ Velocidade: Deve ser rápido, pois existem estudos que comprovam que após 2 segundos carregando um site, existe alta taxa de evasão dos usuários, isso significa que perdemos potenciais clientes.
- ✔️ Código robusto: Código fonte bem organizado e de fácil manutenção.
- ✔️ Estrutura: Layout bem estruturado e organizado para uma boa visualização e utilização do site.
- ✔️ Copy: Pretendo criar uma boa copy para aumentar a conversão de alunos.
- ✔️ SEO.

#
<img width=100% src="https://capsule-render.vercel.app/api?type=waving&color=40E0D0&height=120&section=footer"/>

##

<img width=100% src="https://capsule-render.vercel.app/api?type=waving&height=120&section=header"/>

## 🛎️ Atualizações principais deste commit

### `Refactor:` Pequenas alterações apenas com foco em melhorar estrutura e legibilidade

<img width=100% src="https://capsule-render.vercel.app/api?type=waving&height=120&section=footer"/>

## 🖥 Tecnologias Utilizadas
<div align='center'>

!['NextJSLogo'](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
!['TypescriptLogo'](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
!['CssLogo'](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

</div>

## Versões utilizadas:
    - Next: 15.3.5
    - React: 19.0.0
    - Typescript: 5

## 🙋🏻‍♂ Como me localizar no projeto?

### Todos os arquivos de código fonte do projeto estão em: `./src`

## 🛈 Como o projeto está estruturado

- `./src/app:` Este projeto é em Next então temos o núcleo da landing page estando totalmente aqui na página app, onde o arquivo page.tsx é o que é renderizado junto dos componentes que é invocado nele.

- `./src/assets:` Onde está todas as fotos e arquivos estáticos que vão ser usadas no projeto.

- `./src/components:` Onde está os componentes que serão reutilizados em diversas partes do código. Neste projeto temos os components:
    - Buttons: Responsável pelos botões do site.
    - Header: Cabeçalho que se encontra no canto superior da landing page

- `./src/Sections:` Pasta responsável por agrupar todas as nossas seções:
    - AboutWhoAmI: Esta é a seção de "Sobre" onde apresentamos quem é a Ana Flávia Guarda.
    - MainSection: Onde temos a primeira seção da tela
        - TypingWords: Criado somente para utilizar o 'use client' em uma parte menor do código, componente para a troca de palavras abaixo do subtitulo
    - Methodology: Esta seção apresenta a metodologia utilizada, destacando as etapas práticas e personalizadas usadas para garantir o aprendizado eficaz de conversação em inglês. O objetivo é mostrar de forma clara e visual como o aluno será conduzido ao progresso real.
    - RealClassVideo: Adicionado a sessão para mostrar um pouco de uma aula real gravada. Utilizando o youtube e a URL vem através do .env
    - TargetAudience: Seção que apresenta as principais dores e motivações dos alunos, definindo claramente para quem as aulas são destinadas. Ajuda o visitante a se identificar e entender se a aula atende às suas necessidades.
    - WhyTakeClassWithMe: Seção onde mostra ao usuário os benefícios que a metodologia usada pela Ana é realmente útil, trazendo consigo dados real e com link para visualização completa.

- `./src/hooks:` Está nossos hooks personalizados com as partes lógicas:
    - components: Pasta que armazena todas as partes lógicas dos componentes:
        - useButtons: Armazena nossas lógicas de botões
            - useButtonDarkMode: Gerencia se o usuário escolheu o tema escuro ou claro da landing page
        - useHeader: Destinado ao header, contendo a lógica para mostrar / esconder as opções de roteamento pela página
    - Sections: Pasta que armazena todas as partes lógicas das seções:
        - useAboutWhoAmI: Hook que controla texto "Infinito" que fica passando logo no topo, escrito "Ana Guarda".
        - useMainSection: Para a troca de palavras abaixo do subtitulo, fazendo a animação de "criar" / "apagar" as palavras letra por letra

- `./src/services:` Pasta que contém as funcionalidades de serviço. Temos um único arquivo chamado "ScrollAnimation" que serve somente para criarmos a configuração do aos ( Responsável pela animação ao rolar o scroll na landing page ) e exportar para o page.tsx, uma vez que assim podemos usar a diretiva 'use client' no arquivo e não no app principal da aplicação.

## ❔ Como rodar o projeto na minha máquina?

- Você pode acessar a landing page por este link:
    > Link da landing page: https://ana-flavia-guarda.vercel.app/

- Mas caso queira visualizar o código fonte siga o seguinte passo a passo:

- Antes de tudo, você precisa ter o Git instalado no seu computador. O Git é uma ferramenta que permite clonar e gerenciar repositórios de código.
    - Windows: Baixe o Git <a href="https://git-scm.com/download/win" target="_blank">aqui</a> e siga as instruções de instalação.
    - macOS: Você pode instalar o Git <a href="https://git-scm.com/download/mac" target="_blank">aqui</a> ou usando o Homebrew com o comando brew install git:
        ```bash
        brew install git
        ```
        
    - Linux: Use o gerenciador de pacotes da sua distribuição, por exemplo para Debian/Ubuntu:
        ```bash
        sudo apt install git
        ```

- Abra o terminal (no Windows, você pode usar o Git Bash, que é instalado junto com o Git).

- Navegue até o diretório onde deseja armazenar o projeto.

- Execute o comando para clonar o repositório:

    ```bash
    git clone https://github.com/GuilhermeFranciscoPereira/LandingPage_Ana-Guarda.git
    ```
    
- Após clonar o repositório, navegue até a pasta do projeto
    ```bash
    cd LandingPage_Ana-Guarda
    ```

- Agora você pode abrir os arquivos do projeto com seu editor de texto ou IDE preferido. Exemplo do vsCode: 
    ```bash
    code .
    ```

- 🚨 Não esqueça que para não ocorrer erros no código ao clonar ele, você deve fazer o comando abaixo 🚨
    ```bash
    npm i
    ```

- Pronto! Todo o site estará funcionado na sua máquina. Porém, caso precise de alguma ajuda em algo entre em contato comigo pelo meu LinkedIn: https://www.linkedin.com/in/guilherme-francisco-pereira-4a3867283

##

## 🎉 É isso! Essa é a nossa Landing Page desenvolvida para a Ana Flávia Guarda, caso tenha ficado com alguma dúvida ou deseje complementar algo diretamente comigo você pode estar entrando em contato através do meu LinkedIn:
> Link do meu LinkedIn: <a href="https://www.linkedin.com/in/guilherme-francisco-pereira-4a3867283" target="_blank">https://www.linkedin.com/in/guilherme-francisco-pereira-4a3867283</a>

### 🚀 Obrigado pela atenção e espero que tenha gostado do que tenha visto aqui, que tal agora dar uma olhada nos meus outros repositórios? 👋🏻

#

### ❤️ Créditos:

#### Créditos dos emojis: 
> <a href="https://emojipedia.org" target="_blank">https://emojipedia.org</a>

- #### Créditos dos badges: 
> <a href="https://shields.io" target="_blank">https://shields.io</a>