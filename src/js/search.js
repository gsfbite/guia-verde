var paginas = [
    // Culturas
    {
        titulo: "Alface",
        link: "src/pages/culturas/alface.html",
        keywords: ["alface", "folha", "lesma", "lagarta", "podridão", "trips", "míldio", "nervatura", "hortaliça", "verdura"]
    },
    {
        titulo: "Beterraba",
        link: "src/pages/culturas/beterraba.html",
        keywords: ["beterraba", "raiz", "mancha", "cercospora", "pulgão", "nematoide", "tubérculo", "solo"]
    },
    {
        titulo: "Cebolinha",
        link: "src/pages/culturas/cebolinha.html",
        keywords: ["cebolinha", "cebola", "ferrugem", "trips", "míldio", "folha", "condimento", "tempero"]
    },
    {
        titulo: "Cenoura",
        link: "src/pages/culturas/cenoura.html",
        keywords: ["cenoura", "raiz", "alternaria", "mosca", "nematoide", "podridão", "rachadura", "solo"]
    },
    {
        titulo: "Couve",
        link: "src/pages/culturas/couve.html",
        keywords: ["couve", "lagarta", "pulgão", "trips", "broca", "folha", "hortaliça", "crucífera"]
    },
    {
        titulo: "Mandioca",
        link: "src/pages/culturas/mandioca.html",
        keywords: ["mandioca", "aipim", "macaxeira", "ácaro", "mosca branca", "bacteriose", "podridão", "raiz", "tubérculo"]
    },
    {
        titulo: "Pepino",
        link: "src/pages/culturas/pepino.html",
        keywords: ["pepino", "míldio", "oídio", "mosca branca", "ácaro", "antracnose", "fruto", "cucurbitácea"]
    },
    {
        titulo: "Pimentão",
        link: "src/pages/culturas/pimentao.html",
        keywords: ["pimentão", "pimenta", "vírus", "trips", "ácaro", "antracnose", "podridão", "fruto", "solanácea"]
    },
    {
        titulo: "Repolho",
        link: "src/pages/culturas/repolho.html",
        keywords: ["repolho", "lagarta", "pulgão", "hérnia", "míldio", "broca", "crucífera", "cabeça"]
    },
    {
        titulo: "Tomate",
        link: "src/pages/culturas/tomate.html",
        keywords: ["tomate", "requeima", "pinta preta", "mosca branca", "ácaro", "vírus", "murcha", "fungo", "fruto", "solanácea", "praga", "doença"]
    },
    {
        titulo: "Principais Culturas",
        link: "src/pages/culturas/principal.html",
        keywords: ["culturas", "plantas", "hortaliças", "lavoura", "lista", "todas"]
    },
    // Guias
    {
        titulo: "Guia de Manejo",
        link: "src/pages/guias/guia-manejo.html",
        keywords: ["manejo", "rotação", "plantio", "prevenção", "controle integrado", "boas práticas", "produção", "ciclo"]
    },
    {
        titulo: "Guia de Pragas",
        link: "src/pages/guias/guia-pragas.html",
        keywords: ["pragas", "inseto", "ácaro", "lagarta", "mosca", "pulgão", "trips", "broca", "controle", "armadilha", "monitoramento"]
    },
    {
        titulo: "Guia de Nutrição",
        link: "src/pages/guias/guia-nutricao.html",
        keywords: ["nutrição", "adubo", "fertilizante", "npk", "nitrogênio", "fósforo", "potássio", "clorose", "amarelamento", "deficiência", "micronutriente"]
    },
    {
        titulo: "Guia de Invasoras",
        link: "src/pages/guias/guia-daninhas.html",
        keywords: ["daninhas", "invasoras", "mato", "erva daninha", "competição", "herbicida", "capina", "folha larga", "folha estreita"]
    },
    {
        titulo: "Guia Climático",
        link: "src/pages/guias/guia-clima.html",
        keywords: ["clima", "temperatura", "chuva", "umidade", "vento", "semeadura", "colheita", "previsão", "defensivo", "aplicação"]
    },
    // Outras páginas
    {
        titulo: "Sobre",
        link: "src/pages/navbar/sobre.html",
        keywords: ["sobre", "plataforma", "guia verde", "informações", "projeto"]
    }
];

var search      = document.getElementById("search");
var suggestions = document.getElementById("suggestions");
var searchForm  = document.getElementById("searchForm");

// Normaliza texto removendo acentos
function normalizar(texto) {
    return texto.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
}

// Autocomplete no dropdown (acesso direto à página)
search.addEventListener("input", function () {
    var valor = normalizar(search.value);
    suggestions.innerHTML = "";

    if (valor === "") { suggestions.style.display = "none"; return; }

    var palavras = valor.split(" ").filter(function (p) { return p.length > 2; });

    var resultados = paginas.filter(function (item) {
        var termos = normalizar(item.titulo + " " + item.keywords.join(" "));
        return palavras.some(function (p) { return termos.includes(p); });
    });

    // Atalho "Ver todos os resultados"
    if (valor.length >= 2) {
        var divTodos = document.createElement("div");
        divTodos.style.cssText = "background:#f0fff0;font-weight:600;color:#0a3d0a;border-bottom:2px solid #7ed957;";
        divTodos.innerHTML = "&#128269; Ver todos os resultados para &quot;" + search.value + "&quot;";
        divTodos.onclick = function () {
            window.location.href = "resultados.html?q=" + encodeURIComponent(search.value);
        };
        suggestions.appendChild(divTodos);
    }

    resultados.forEach(function (item) {
        var div = document.createElement("div");
        div.textContent = item.titulo;
        div.onclick = function () { window.location.href = item.link; };
        suggestions.appendChild(div);
    });

    suggestions.style.display = "block";
});

// Submit do form → vai para página de resultados
searchForm.addEventListener("submit", function (e) {
    e.preventDefault();
    var val = search.value.trim();
    if (val) window.location.href = "resultados.html?q=" + encodeURIComponent(val);
});

// Fecha sugestões ao clicar fora
document.addEventListener("click", function (e) {
    if (!search.contains(e.target) && !suggestions.contains(e.target)) {
        suggestions.style.display = "none";
    }
});