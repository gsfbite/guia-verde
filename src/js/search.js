// ─── Guia Verde | search.js — pesquisa global ────────────────────────────────
// Funciona em qualquer página do projeto, independente da profundidade de pasta.
// Detecta automaticamente o caminho até a raiz e ajusta todos os links.

(function () {

    // ─── Detecta quantos níveis acima está a raiz (index.html) ───────────────
    // Estratégia: conta "../" nos links que já existem na página apontando para index.html,
    // ou usa o pathname da URL atual como fallback.
    function calcularRaiz() {
        // Tenta achar um link href que vá para index.html na página
        var links = document.querySelectorAll('a[href*="index.html"]');
        for (var i = 0; i < links.length; i++) {
            var href = links[i].getAttribute('href');
            if (href && href.indexOf('index.html') !== -1) {
                return href.replace('index.html', '').replace(/^\.\//,'');
            }
        }
        // Fallback: calcula pela profundidade do pathname
        var depth = (window.location.pathname.match(/\//g) || []).length - 1;
        if (depth <= 0) return './';
        return Array(depth).fill('..').join('/') + '/';
    }

    var RAIZ = calcularRaiz();

    // ─── Catálogo central de páginas ─────────────────────────────────────────
    // Todos os links são relativos à RAIZ do projeto.
    var CATALOGO = [
        // CULTURAS
        {
            titulo: "Alface",
            link: "src/pages/culturas/alface.html",
            categoria: "cultura",
            descricao: "Doenças, pragas e manejo da alface: míldio, lesma, lagarta, podridão e mais.",
            icone: "bi-flower2",
            cor: "success",
            keywords: ["alface", "folha", "lesma", "lagarta", "podridão", "trips", "míldio",
                       "mildio", "nervatura", "hortaliça", "hortalica", "verdura", "lactuca"]
        },
        {
            titulo: "Beterraba",
            link: "src/pages/culturas/beterraba.html",
            categoria: "cultura",
            descricao: "Problemas comuns da beterraba: cercospora, pulgão, nematoide e manejo do solo.",
            icone: "bi-flower2",
            cor: "danger",
            keywords: ["beterraba", "raiz", "mancha", "cercospora", "pulgão", "pulgao",
                       "nematoide", "tubérculo", "tuberculo", "solo", "beta vulgaris"]
        },
        {
            titulo: "Cebolinha",
            link: "src/pages/culturas/cebolinha.html",
            categoria: "cultura",
            descricao: "Ferrugem, trips, míldio e problemas frequentes na cebolinha e cebola.",
            icone: "bi-flower2",
            cor: "success",
            keywords: ["cebolinha", "cebola", "ferrugem", "trips", "míldio", "mildio",
                       "folha", "condimento", "tempero", "allium"]
        },
        {
            titulo: "Cenoura",
            link: "src/pages/culturas/cenoura.html",
            categoria: "cultura",
            descricao: "Alternaria, mosca-da-cenoura, nematoides e rachadura de raízes.",
            icone: "bi-flower2",
            cor: "warning",
            keywords: ["cenoura", "raiz", "alternaria", "mosca", "nematoide", "podridão",
                       "podridao", "rachadura", "solo", "daucus"]
        },
        {
            titulo: "Couve",
            link: "src/pages/culturas/couve.html",
            categoria: "cultura",
            descricao: "Lagarta, pulgão, trips, broca e pragas comuns das crucíferas.",
            icone: "bi-flower2",
            cor: "success",
            keywords: ["couve", "lagarta", "pulgão", "pulgao", "trips", "broca",
                       "folha", "hortaliça", "hortalica", "crucífera", "crucifera"]
        },
        {
            titulo: "Mandioca",
            link: "src/pages/culturas/mandioca.html",
            categoria: "cultura",
            descricao: "Ácaro, mosca-branca, bacteriose e podridão radicular na mandioca.",
            icone: "bi-flower2",
            cor: "secondary",
            keywords: ["mandioca", "aipim", "macaxeira", "ácaro", "acaro", "mosca branca",
                       "bacteriose", "podridão", "podridao", "raiz", "tubérculo", "tuberculo"]
        },
        {
            titulo: "Pepino",
            link: "src/pages/culturas/pepino.html",
            categoria: "cultura",
            descricao: "Míldio, oídio, mosca-branca, ácaro e antracnose no pepino.",
            icone: "bi-flower2",
            cor: "success",
            keywords: ["pepino", "míldio", "mildio", "oídio", "oidio", "mosca branca",
                       "ácaro", "acaro", "antracnose", "fruto", "cucurbitácea", "cucurbitacea"]
        },
        {
            titulo: "Pimentão",
            link: "src/pages/culturas/pimentao.html",
            categoria: "cultura",
            descricao: "Vírus, trips, ácaro, antracnose e podridão nos frutos do pimentão.",
            icone: "bi-flower2",
            cor: "danger",
            keywords: ["pimentão", "pimentao", "pimenta", "vírus", "virus", "trips",
                       "ácaro", "acaro", "antracnose", "podridão", "podridao",
                       "fruto", "solanácea", "solanacea", "capsicum"]
        },
        {
            titulo: "Repolho",
            link: "src/pages/culturas/repolho.html",
            categoria: "cultura",
            descricao: "Lagarta, pulgão, hérnia das crucíferas, míldio e broca no repolho.",
            icone: "bi-flower2",
            cor: "success",
            keywords: ["repolho", "lagarta", "pulgão", "pulgao", "hérnia", "hernia",
                       "míldio", "mildio", "broca", "crucífera", "crucifera", "cabeça", "brassica"]
        },
        {
            titulo: "Tomate",
            link: "src/pages/culturas/tomate.html",
            categoria: "cultura",
            descricao: "Requeima, pinta-preta, mosca-branca, ácaro, vírus e murcha do tomate.",
            icone: "bi-flower2",
            cor: "danger",
            keywords: ["tomate", "requeima", "pinta preta", "mosca branca", "ácaro", "acaro",
                       "vírus", "virus", "murcha", "fungo", "fruto", "solanácea", "solanacea",
                       "praga", "doença", "doenca", "tomateiro"]
        },
        {
            titulo: "Principais Culturas",
            link: "src/pages/culturas/principal.html",
            categoria: "cultura",
            descricao: "Veja a lista completa de todas as culturas disponíveis no Guia Verde.",
            icone: "bi-grid",
            cor: "primary",
            keywords: ["culturas", "plantas", "hortaliças", "hortalicas", "lavoura",
                       "lista", "todas", "catálogo", "catalogo"]
        },
        // GUIAS
        {
            titulo: "Guia de Manejo",
            link: "src/pages/guias/guia-manejo.html",
            categoria: "guia",
            descricao: "Rotação de culturas, plantio, colheita, prevenção e boas práticas agrícolas.",
            icone: "bi-journal-check",
            cor: "warning",
            keywords: ["manejo", "rotação", "rotacao", "plantio", "prevenção", "prevencao",
                       "controle integrado", "boas práticas", "boas praticas", "produção",
                       "producao", "ciclo", "poda", "colheita", "espaldeira"]
        },
        {
            titulo: "Guia de Pragas",
            link: "src/pages/guias/guia-pragas.html",
            categoria: "guia",
            descricao: "Identifique insetos, ácaros, lagartas, pulgões, mosca e outros agentes de dano.",
            icone: "bi-bug",
            cor: "danger",
            keywords: ["pragas", "inseto", "ácaro", "acaro", "lagarta", "mosca", "pulgão",
                       "pulgao", "trips", "broca", "controle", "armadilha", "monitoramento", "praga"]
        },
        {
            titulo: "Guia de Nutrição",
            link: "src/pages/guias/guia-nutricao.html",
            categoria: "guia",
            descricao: "NPK, micronutrientes, clorose, amarelamento e deficiências minerais nas plantas.",
            icone: "bi-droplet-half",
            cor: "success",
            keywords: ["nutrição", "nutricao", "adubo", "fertilizante", "npk", "nitrogênio",
                       "nitrogenio", "fósforo", "fosforo", "potássio", "potassio", "clorose",
                       "amarelamento", "deficiência", "deficiencia", "micronutriente",
                       "calcário", "calcario", "solo"]
        },
        {
            titulo: "Guia de Plantas Invasoras",
            link: "src/pages/guias/guia-daninhas.html",
            categoria: "guia",
            descricao: "Controle de daninhas, ervas invasoras, herbicidas e competição por recursos.",
            icone: "bi-scissors",
            cor: "secondary",
            keywords: ["daninhas", "invasoras", "mato", "erva daninha", "competição",
                       "competicao", "herbicida", "capina", "folha larga", "folha estreita"]
        },
        {
            titulo: "Guia Climático",
            link: "src/pages/guias/guia-clima.html",
            categoria: "guia",
            descricao: "Temperatura, chuva, umidade, vento e planejamento climático para lavouras.",
            icone: "bi-cloud-sun",
            cor: "info",
            keywords: ["clima", "temperatura", "chuva", "umidade", "vento", "semeadura",
                       "colheita", "previsão", "previsao", "defensivo", "aplicação", "aplicacao",
                       "irrigação", "irrigacao"]
        },
        {
            titulo: "Sobre o Guia Verde",
            link: "src/pages/navbar/sobre.html",
            categoria: "guia",
            descricao: "Informações sobre a plataforma Guia Verde e seus objetivos.",
            icone: "bi-info-circle",
            cor: "primary",
            keywords: ["sobre", "plataforma", "guia verde", "informações", "informacoes", "projeto"]
        }
    ];

    // ─── Normalização (remove acentos, minúsculas) ────────────────────────────
    function normalizar(texto) {
        return texto
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/[^a-z0-9\s]/g, " ")
            .trim();
    }

    // ─── Algoritmo de busca com pontuação ────────────────────────────────────
    function buscar(query) {
        var qNorm = normalizar(query);
        var tokens = qNorm.split(/\s+/).filter(function (t) { return t.length > 1; });

        if (tokens.length === 0) return [];

        var resultados = [];

        for (var i = 0; i < CATALOGO.length; i++) {
            var item = CATALOGO[i];
            var tituloNorm = normalizar(item.titulo);
            var keywordsNorm = item.keywords.map(normalizar);
            var allTerms = [tituloNorm].concat(keywordsNorm);

            var pontos = 0;
            var matched = [];

            for (var t = 0; t < tokens.length; t++) {
                var token = tokens[t];
                for (var k = 0; k < allTerms.length; k++) {
                    var kw = allTerms[k];
                    if (kw === token)                              { pontos += 3; matched.push(kw); break; }
                    else if (kw.startsWith(token) || token.startsWith(kw)) { pontos += 2; matched.push(kw); break; }
                    else if (kw.includes(token) || token.includes(kw))     { pontos += 1; matched.push(kw); break; }
                }
            }

            if (pontos > 0) {
                // Constrói link absoluto relativo à raiz detectada
                resultados.push(Object.assign({}, item, {
                    link: RAIZ + item.link,
                    pontos: pontos,
                    matched: matched
                }));
            }
        }

        resultados.sort(function (a, b) { return b.pontos - a.pontos; });
        return resultados;
    }

    // ─── Caminho para resultados.html (sempre na raiz) ────────────────────────
    function urlResultados(query) {
        return RAIZ + "resultados.html?q=" + encodeURIComponent(query);
    }

    // ─── Inicializa navbar de qualquer página ────────────────────────────────
    // Suporta os dois padrões de IDs usados no projeto:
    //   Padrão A (index + culturas):  id="search"  id="suggestions"  id="searchForm"
    //   Padrão B (resultados):        id="searchNav" id="suggestions-results" id="navSearchForm"
    function iniciarNavbar() {
        // Padrão A
        var searchA    = document.getElementById("search");
        var suggestA   = document.getElementById("suggestions");
        var formA      = document.getElementById("searchForm");

        // Padrão B
        var searchB    = document.getElementById("searchNav");
        var suggestB   = document.getElementById("suggestions-results");
        var formB      = document.getElementById("navSearchForm");

        function bindBusca(inputEl, suggestEl, formEl) {
            if (!inputEl || !suggestEl || !formEl) return;

            inputEl.addEventListener("input", function () {
                var val = inputEl.value.trim();
                suggestEl.innerHTML = "";

                if (val.length < 2) { suggestEl.style.display = "none"; return; }

                var res = buscar(val).slice(0, 6);

                // Atalho "Ver todos os resultados"
                var divTodos = document.createElement("div");
                divTodos.style.cssText = "background:#f0fff0;font-weight:600;color:#0a3d0a;border-bottom:2px solid #7ed957;padding:8px 12px;cursor:pointer;";
                divTodos.innerHTML = "&#128269; Ver todos os resultados para <strong>" + inputEl.value + "</strong>";
                divTodos.onclick = function () { window.location.href = urlResultados(inputEl.value); };
                suggestEl.appendChild(divTodos);

                res.forEach(function (item) {
                    var div = document.createElement("div");
                    div.style.cssText = "padding:8px 12px;cursor:pointer;";
                    div.innerHTML = '<i class="bi ' + item.icone + ' me-2 text-' + item.cor + '"></i>' + item.titulo;
                    div.onmouseover = function () { this.style.background = "#f5f5f5"; };
                    div.onmouseout  = function () { this.style.background = ""; };
                    div.onclick = function () { window.location.href = item.link; };
                    suggestEl.appendChild(div);
                });

                suggestEl.style.display = "block";
            });

            formEl.addEventListener("submit", function (e) {
                e.preventDefault();
                var val = inputEl.value.trim();
                if (val) window.location.href = urlResultados(val);
            });

            document.addEventListener("click", function (e) {
                if (!inputEl.contains(e.target) && !suggestEl.contains(e.target)) {
                    suggestEl.style.display = "none";
                }
            });
        }

        bindBusca(searchA, suggestA, formA);
        bindBusca(searchB, suggestB, formB);
    }

    // ─── Inicializa página resultados.html (se estivermos nela) ──────────────
    function iniciarResultados() {
        // Detecta se esta é a página de resultados procurando pelos elementos dela
        var resultsHeader = document.getElementById("resultsHeader");
        if (!resultsHeader) return; // não é a página de resultados

        function renderCard(item, maxPontos) {
            var pct = Math.min(100, Math.round((item.pontos / maxPontos) * 100));
            var catLabel = item.categoria === "cultura" ? "Cultura" : "Guia";
            var catBg    = item.categoria === "cultura" ? "bg-success" : "bg-primary";

            var tagsHTML = item.keywords.slice(0, 6).map(function (kw) {
                var isMatch = item.matched.some(function (m) {
                    return m.includes(normalizar(kw)) || normalizar(kw).includes(m);
                });
                return '<span class="keyword-tag ' + (isMatch ? 'matched' : '') + '">' + kw + '</span>';
            }).join("");

            return '<div class="col-sm-6 col-lg-4">' +
                '<div class="result-card card">' +
                '<div class="card-body d-flex flex-column">' +
                '<div class="d-flex align-items-start justify-content-between mb-2">' +
                '<span class="category-badge ' + catBg + ' text-white">' + catLabel + '</span>' +
                '<i class="bi ' + item.icone + ' text-' + item.cor + '" style="font-size:1.4rem;"></i>' +
                '</div>' +
                '<h5 class="card-title">' + item.titulo + '</h5>' +
                '<p class="card-text flex-grow-1">' + item.descricao + '</p>' +
                '<div class="keyword-tags mb-3">' + tagsHTML + '</div>' +
                '<div class="score-bar"><div class="score-fill" style="width:' + pct + '%"></div></div>' +
                '<a href="' + item.link + '" class="btn btn-acessar mt-3 w-100">' +
                '<i class="bi bi-arrow-right-circle"></i> Acessar' +
                '</a></div></div></div>';
        }

        function executarBusca(query) {
            var header      = document.getElementById("resultsHeader");
            var semRes      = document.getElementById("semResultados");
            var secCulturas = document.getElementById("secaoCulturas");
            var secGuias    = document.getElementById("secaoGuias");
            var gridCulturas = document.getElementById("gridCulturas");
            var gridGuias   = document.getElementById("gridGuias");

            semRes.style.display      = "none";
            secCulturas.style.display = "none";
            secGuias.style.display    = "none";
            gridCulturas.innerHTML    = "";
            gridGuias.innerHTML       = "";

            if (!query || query.trim().length < 2) {
                header.innerHTML = '<h2><i class="bi bi-search me-2"></i>Digite algo para buscar</h2>' +
                    '<p>Use a barra de busca acima para encontrar culturas ou guias.</p>';
                semRes.style.display = "block";
                document.getElementById("semResultadosTexto").textContent = "Informe um termo de busca.";
                return;
            }

            var resultados = buscar(query);
            var culturas   = resultados.filter(function (r) { return r.categoria === "cultura"; });
            var guias      = resultados.filter(function (r) { return r.categoria === "guia"; });
            var maxPontos  = resultados.length > 0 ? resultados[0].pontos : 1;

            header.innerHTML = '<div class="d-flex align-items-center gap-3 flex-wrap"><div>' +
                '<h2><i class="bi bi-search me-2"></i>Resultados para <span class="query-badge">' + query + '</span></h2>' +
                '<p>' + resultados.length + ' ' + (resultados.length === 1 ? 'resultado encontrado' : 'resultados encontrados') + ' no catálogo.</p>' +
                '</div></div>';

            if (resultados.length === 0) {
                semRes.style.display = "block";
                document.getElementById("semResultadosTexto").innerHTML =
                    'Não encontramos nada relacionado a "<strong>' + query + '</strong>". ' +
                    'Tente termos como "praga", "tomate", "nutrição" ou "clima". ' +
                    'Ou ainda, confira a <a href="' + RAIZ + 'src/pages/culturas/principal.html">lista completa de culturas</a>. ' +
                    'Se preferir, acesse nossa  <a href="' + RAIZ + 'index.html">página principal</a> para dicas de manejo, pragas, nutrição e clima.';
                return;
            }

            if (culturas.length > 0) {
                secCulturas.style.display = "block";
                gridCulturas.innerHTML = culturas.map(function (r) { return renderCard(r, maxPontos); }).join("");
            }
            if (guias.length > 0) {
                secGuias.style.display = "block";
                gridGuias.innerHTML = guias.map(function (r) { return renderCard(r, maxPontos); }).join("");
            }
        }

        // Lê query da URL
        var params   = new URLSearchParams(window.location.search);
        var queryURL = params.get("q") || "";

        // Preenche os dois possíveis inputs da navbar
        var sA = document.getElementById("search");
        var sB = document.getElementById("searchNav");
        if (sA && queryURL) sA.value = queryURL;
        if (sB && queryURL) sB.value = queryURL;

        // Campo de refinamento
        var refinement = document.getElementById("searchRefinement");
        if (refinement && queryURL) refinement.value = queryURL;

        executarBusca(queryURL);

        // Botão refinar
        var btnRef = document.getElementById("btnRefinement");
        if (btnRef) {
            btnRef.addEventListener("click", function () {
                var novaQuery = refinement ? refinement.value.trim() : "";
                if (novaQuery) window.location.href = urlResultados(novaQuery);
            });
        }
        if (refinement) {
            refinement.addEventListener("keydown", function (e) {
                if (e.key === "Enter" && btnRef) btnRef.click();
            });
        }
    }

    // ─── Entry point ─────────────────────────────────────────────────────────
    document.addEventListener("DOMContentLoaded", function () {
        iniciarNavbar();
        iniciarResultados();
    });

})();