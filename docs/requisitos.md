# Documento de Requisitos - Microsite de Diagnóstico Agrícola

Este documento detalha as funcionalidades e as restrições técnicas para a implementação do microsite voltado ao produtor rural do DF.

## 1. Requisitos Funcionais (RF)
*Ações que o usuário poderá realizar no sistema.*

| ID | Requisito | Descrição |
| :--- | :--- | :--- |
| **RF-01** | **Navegação por Cultura** | O sistema deve apresentar uma página principal (Mestra) com acesso direto às culturas listadas no contexto (Tomate, Alface, etc.). |
| **RF-02** | **Acesso a Páginas de Detalhe** | Ao selecionar uma cultura ou praga, o sistema deve abrir uma página específica com o detalhamento completo. |
| **RF-03** | **Conteúdo Informativo** | Cada página de detalhe deve conter: Descrição, Sintomas Visuais, Causas e Manejo Recomendado. |
| **RF-04** | **Comparação Visual** | O sistema deve exibir imagens claras das patologias para facilitar o diagnóstico por comparação no campo. |
| **RF-05** | **Links de Referência** | O sistema deve fornecer links externos para materiais técnicos da EMATER-DF ou Embrapa para consulta aprofundada. |

## 2. Requisitos Não Funcionais (RNF)
*Critérios de qualidade e restrições técnicas.*

| ID | Requisito | Descrição |
| :--- | :--- | :--- |
| **RNF-01** | **Mobile-First** | A interface deve ser projetada prioritariamente para smartphones, visto que o uso ocorrerá em ambiente de campo. |
| **RNF-02** | **Baixo Consumo de Dados** | As páginas devem ser leves (preferencialmente HTML/CSS puro) para carregar em redes móveis instáveis. |
| **RNF-03** | **Legibilidade em Campo** | Uso de tipografia sem serifa (Sans-serif) e alto contraste para visualização sob luz solar. |
| **RNF-04** | **Arquitetura Estática** | O sistema não deve depender de banco de dados no lado do servidor, utilizando o padrão Master-Detail. |
| **RNF-05** | **Hospedagem Open Source** | O projeto deve ser publicado via GitHub Pages para garantir transparência e custo zero. |

## 3. Regras de Negócio (RN)
*Diretrizes de conformidade do projeto.*

* **RN-01:** (Segurança Técnica) Todas as recomendações de manejo devem ser acompanhadas de um aviso sobre a necessidade de consulta a um engenheiro agrônomo.
* **RN-02:** (Privacidade) O sistema deve ser de livre acesso, sem necessidade de cadastro, formulários ou login.
* **RN-03:** (Confiabilidade) As informações devem ser baseadas exclusivamente em fontes oficiais (EMATER, Embrapa ou Universidades).