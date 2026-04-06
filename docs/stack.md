# Stack Tecnológica: Microsite de Diagnóstico Agrícola

Este documento define as ferramentas e bibliotecas utilizadas no desenvolvimento do projeto, justificando as escolhas com base nos requisitos de performance e acessibilidade rural.

## 1. Front-end (Interface e Estilização)
* **HTML5:** Estruturação semântica das páginas para melhor acessibilidade e SEO.
* **CSS3 & Bootstrap 5:** * Utilização do framework Bootstrap para garantir um layout **Mobile-First** e responsivo.
    * Uso de componentes nativos como `Cards` (para o índice de hortaliças) e `Accordions` (para organizar informações de manejo sem poluir a tela).
* **JavaScript (Vanilla):** * Utilizado para manipulação leve do DOM (filtros de busca na home e navegação).
    * Sem dependência de frameworks pesados (como React ou Angular) para manter o site leve em conexões 2G/3G.

## 2. Arquitetura de Dados (Simulada)
Como o projeto utiliza o padrão **Master-Detail Estático**, não haverá banco de dados relacional (SQL).
* **Armazenamento:** Os dados de cada patologia serão estruturados diretamente em páginas HTML independentes ou em um arquivo `js/data.js` contendo objetos literais para alimentar o índice.

## 3. Ferramentas de Desenvolvimento e Design
* **Editor de Código:** VS Code.
* **Prototipagem Visual:** **Excalidraw** (para rascunhar o fluxo de telas e arquitetura da informação).
* **Versionamento:** Git (GitHub para controle de versão e transparência do projeto de extensão).

## 4. Hospedagem e Deploy
* **GitHub Pages:** Escolhido pela integração nativa com o repositório, custo zero e excelente performance para sites estáticos.

---

## 5. Justificativa Técnica (Visão ADS)
A escolha por uma **Stack Estática com Bootstrap** baseia-se no princípio da **eficiência de recursos**. 
1.  **Baixo Overhead:** O carregamento via CDN (ou local) do Bootstrap é otimizado e amplamente suportado por navegadores antigos (comuns em smartphones de entrada no campo).
2.  **Manutenibilidade:** A estrutura Master-Detail permite que novas hortaliças sejam adicionadas apenas duplicando arquivos `.html`, sem necessidade de manutenção de servidores ou APIs.
3.  **Experiência do Usuário (UX):** Componentes de alto contraste e tipografia limpa do Bootstrap facilitam a leitura sob luz solar direta.

---


[Image of a software architecture diagram for a web application]