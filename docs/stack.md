# Stack Tecnológica: Microsite de Diagnóstico Agrícola

Este documento define as ferramentas, bibliotecas e a lógica de funcionamento adotadas no desenvolvimento do projeto, com foco em performance, acessibilidade e simplicidade de manutenção, especialmente em contextos de conectividade limitada.

---

## 1. Front-end (Interface e Estrutura)

### HTML5

Responsável pela estruturação semântica das páginas, garantindo melhor organização do conteúdo, acessibilidade e otimização para mecanismos de busca (SEO).

### CSS3 + Bootstrap 5

O Bootstrap foi utilizado como base para **estruturação e design das páginas**, não se limitando apenas a componentes prontos.

* Uso do sistema de grid para organização responsiva do layout (**Mobile-First**).
* Aplicação de componentes como:

  * `Cards` para exibição de culturas e conteúdos organizados.
* Utilização de elementos estruturais combinados com Bootstrap:

  * Blocos de texto
  * Tabelas informativas
  * Seções organizadas para leitura progressiva

Além disso:

* A estilização foi complementada com **arquivos CSS modulares próprios**, permitindo:

  * Customização visual além do padrão do Bootstrap
  * Melhor organização do código
  * Reutilização de estilos entre páginas

---

### JavaScript (Vanilla)

Responsável pela lógica de busca e navegação dinâmica do sistema.

* Implementação leve, sem frameworks, visando desempenho em conexões lentas (2G/3G).
* Manipulação direta do DOM para:

  * Autocomplete de busca
  * Redirecionamento entre páginas
  * Exibição dinâmica de resultados

---

## 2. Arquitetura de Dados (Baseada em Estrutura Estática)

O projeto adota uma arquitetura **estática com indexação em memória**, sem uso de banco de dados.

### Fonte de Dados

Os dados são definidos no arquivo `search.js` por meio de um array de objetos (`paginas`), contendo:

* `titulo`: nome da página
* `link`: caminho do arquivo HTML
* `keywords`: palavras-chave associadas

### Estratégia

Essa estrutura funciona como um **índice de busca local**, permitindo consultas rápidas diretamente no navegador, sem requisições externas.

---

##  Tratamento de Imagens

As imagens utilizadas no projeto seguem um padrão técnico definido para garantir consistência visual, desempenho e compatibilidade entre dispositivos.

### Padrão adotado
- **Dimensão base:** `800x600 px`
- **Proporção (aspect ratio):** `4:3`
- **Formato:** `WebP`
- **Qualidade:** ~`60%`

### Objetivos

1. **Uniformidade visual**  
   A proporção 4:3 evita distorções e desalinhamentos em grids e componentes responsivos.

2. **Performance**  
   A conversão para WebP com compressão em 60% reduz significativamente o tamanho dos arquivos, diminuindo o tempo de carregamento sem perda perceptível relevante na maioria dos casos.

3. **Responsividade e escalabilidade**  
   A resolução base de 800x600 é suficiente para exibição em layouts padrão e pode ser facilmente redimensionada via CSS sem comprometer a nitidez em contextos comuns.

### Observação técnica
Sempre que possível, as imagens são redimensionadas e comprimidas previamente (build-time), evitando processamento em tempo de execução.

---

## 3. Funcionamento do Sistema de Busca (`search.js`)

A busca foi projetada para ser simples, eficiente e tolerante a variações de escrita.

---

### 3.1 Normalização de Texto

A função de normalização realiza:

* Conversão para letras minúsculas
* Remoção de acentos
* Limpeza de espaços extras

Isso garante que buscas como:

```
mildio = míldio
pimentao = pimentão
```

retornem resultados corretamente.

---

### 3.2 Autocomplete (Sugestões em Tempo Real)

Durante a digitação:

1. O valor inserido é normalizado.
2. O texto é dividido em palavras-chave relevantes (ignorando termos muito curtos).
3. O sistema percorre o array `paginas`.
4. Para cada item, é feita a comparação entre:

   * Título + palavras-chave
   * Termos digitados pelo usuário

A correspondência ocorre quando **qualquer termo pesquisado está contido no conteúdo do item**.

#### Comportamento:

* Exibição dinâmica de sugestões em dropdown
* Clique em uma sugestão → redirecionamento direto
* Inclusão de um atalho:

```
"Ver todos os resultados"
```

Que leva para a página de resultados com o termo buscado

---

### 3.3 Página de Resultados (`resultados.html`)

Ao submeter a busca:

* O formulário impede o comportamento padrão (`preventDefault`)
* O termo é enviado via URL:

```
resultados.html?q=termo_busca
```

Na página de resultados:

* O parâmetro `q` é capturado
* A mesma lógica de filtragem é reutilizada
* Os resultados são renderizados dinamicamente no DOM

---

### 3.4 Interações de Interface

* O dropdown de sugestões:

  * Só aparece quando há texto válido
  * É ocultado ao clicar fora do campo
* Navegação simples utilizando:

  ```
  window.location.href
  ```
* Não há uso de roteadores ou frameworks SPA

---

## 4. Ferramentas de Desenvolvimento

* **Editor de Código:** VS Code
* **Prototipagem:** Excalidraw (estrutura e fluxo)
* **Versionamento:** Git + GitHub

---

## 5. Hospedagem e Deploy

* **GitHub Pages:**

  * Hospedagem gratuita para sites estáticos
  * Integração direta com o repositório
  * Baixa latência e alta disponibilidade

---

## 6. Justificativa Técnica (Visão ADS)

A escolha por uma **arquitetura estática com JavaScript puro** foi baseada em critérios técnicos e práticos:

### 1. Baixo Overhead

Sem dependência de backend, banco de dados ou APIs externas.

### 2. Alta Performance

Busca executada no cliente, sem requisições de rede.

### 3. Simplicidade de Manutenção

Novas páginas são adicionadas apenas inserindo novos objetos no array `paginas`.

### 4. Organização do Código

Separação clara entre:

* Estrutura (HTML)
* Estilo (CSS modular + Bootstrap)
* Lógica (JavaScript)

### 5. Experiência do Usuário (UX)

* Resposta imediata na busca
* Tolerância a erros de digitação
* Navegação direta e intuitiva

---

Este modelo garante um sistema leve, funcional e altamente acessível, adequado para uso em ambientes com limitações de conectividade, como áreas rurais.
