
document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // 1. MENU RESPONSIVO
    // ==========================================

    const menuToggle = document.getElementById("menuToggle");
    const menu = document.getElementById("menuPrincipal");

    if (menuToggle && menu) {
        menuToggle.addEventListener("click", () => {
            const aberto = menu.classList.toggle("aberto");

            menuToggle.setAttribute("aria-expanded", String(aberto));

            menuToggle.innerHTML = aberto
                ? '<i class="fa-solid fa-xmark"></i>'
                : '<i class="fa-solid fa-bars"></i>';
        });

        menu.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                menu.classList.remove("aberto");
                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
            });
        });
    }


    // ==========================================
    // 2. TÍTULO DIGITANDO NO BANNER
    // ==========================================

    const titulo = document.querySelector("#tituloHero .td-texto");

if (titulo) {
    const texto = titulo.textContent.trim();

    const movimentoReduzido = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    if (movimentoReduzido) {
        titulo.textContent = texto;
    } else {
        let indice = 0;

        titulo.textContent = "";
        titulo.classList.add("digitando");

        function digitar() {
            if (indice < texto.length) {
                titulo.textContent += texto.charAt(indice);
                indice++;

                setTimeout(digitar, 55);
            } else {
                titulo.classList.remove("digitando");
            }
        }

        setTimeout(digitar, 400);
    }
}
    


    // ==========================================
    // 3. MOSTRUÁRIO DE TECIDOS
    // ==========================================

    const tecidos = [
        { nome: "Aurora-04", imagem: "img/Aurora-04.jpg" },
        { nome: "Aurora-05", imagem: "img/Aurora-05.jpg" },
        { nome: "Bell-01", imagem: "img/Bell-01.jpg" },
        { nome: "Bell-05", imagem: "img/Bell-05.jpg" },
        { nome: "Bell-06", imagem: "img/Bell-06.jpg" },
        { nome: "Fact-10", imagem: "img/Fact-10.jpg" },
        { nome: "K-22", imagem: "img/K-22.jpg" },
        { nome: "K-44", imagem: "img/K-44.jpg" },
        { nome: "Lino-01", imagem: "img/Lino-01.jpg" },
        { nome: "Lino-03", imagem: "img/Lino-03.jpg" },
        { nome: "Lino-013", imagem: "img/Lino-013.jpg" }
    ];

    const imagemTecido = document.getElementById("imagemTecido");
    const nomeTecido = document.getElementById("nomeTecido");
    const contadorTecido = document.getElementById("contadorTecido");
    const miniaturasContainer = document.getElementById("miniaturasTecidos");
    const botaoAnterior = document.getElementById("tecidoAnterior");
    const botaoProximo = document.getElementById("tecidoProximo");

    let tecidoAtual = 0;
    let trocaPendente = 0;
    let temporizadorTroca = null;

    function atualizarMiniaturas() {
        if (!miniaturasContainer) return;

        const botoes = miniaturasContainer.querySelectorAll(
            ".miniatura-tecido"
        );

        botoes.forEach((botao, indice) => {
            const ativo = indice === tecidoAtual;

            botao.classList.toggle("ativo", ativo);
            botao.setAttribute("aria-pressed", String(ativo));
        });
    }

    function atualizarInformacoes() {
        if (nomeTecido) {
            nomeTecido.textContent = tecidos[tecidoAtual].nome;
        }

        if (contadorTecido) {
            const atual = String(tecidoAtual + 1).padStart(2, "0");
            const total = String(tecidos.length).padStart(2, "0");

            contadorTecido.textContent = `${atual} / ${total}`;
        }

        atualizarMiniaturas();
    }

    function mostrarTecido(indice) {
        if (!imagemTecido || tecidos.length === 0) return;

        const novoIndice = (
            (indice % tecidos.length) + tecidos.length
        ) % tecidos.length;

        const tecido = tecidos[novoIndice];
        const requisicao = ++trocaPendente;

        clearTimeout(temporizadorTroca);

        // Pré-carrega a próxima imagem antes de exibi-la.
        const imagemPrecarregada = new Image();

        imagemPrecarregada.onload = () => {
            if (requisicao !== trocaPendente) return;

            imagemTecido.classList.add("trocando");

            temporizadorTroca = setTimeout(() => {
                if (requisicao !== trocaPendente) return;

                imagemTecido.src = tecido.imagem;
                imagemTecido.alt = `Amostra do tecido ${tecido.nome}`;

                tecidoAtual = novoIndice;
                atualizarInformacoes();

                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        imagemTecido.classList.remove("trocando");
                    });
                });
            }, 250);
        };

        imagemPrecarregada.onerror = () => {
            if (requisicao !== trocaPendente) return;

            console.warn(
                "Não foi possível carregar o tecido:",
                tecido.imagem
            );
        };

        imagemPrecarregada.src = tecido.imagem;
    }

    function criarMiniaturas() {
        if (!miniaturasContainer) return;

        miniaturasContainer.innerHTML = "";

        tecidos.forEach((tecido, indice) => {
            const botao = document.createElement("button");

            botao.type = "button";
            botao.className = "miniatura-tecido";
            botao.setAttribute(
                "aria-label",
                `Selecionar tecido ${tecido.nome}`
            );

            const imagem = document.createElement("img");

            imagem.src = tecido.imagem;
            imagem.alt = "";
            imagem.loading = "lazy";

            botao.appendChild(imagem);

            botao.addEventListener("click", () => {
                mostrarTecido(indice);
            });

            miniaturasContainer.appendChild(botao);
        });

        atualizarMiniaturas();
    }

    if (imagemTecido) {
        criarMiniaturas();
        atualizarInformacoes();

        if (botaoAnterior) {
            botaoAnterior.addEventListener("click", () => {
                mostrarTecido(tecidoAtual - 1);
            });
        }

        if (botaoProximo) {
            botaoProximo.addEventListener("click", () => {
                mostrarTecido(tecidoAtual + 1);
            });
        }

        // Permite trocar os tecidos usando as setas do teclado,
        // quando o foco está dentro do mostruário.
        const mostruario = imagemTecido.closest(".mostruario");

        if (mostruario) {
            mostruario.addEventListener("keydown", evento => {
                if (evento.key === "ArrowRight") {
                    evento.preventDefault();
                    mostrarTecido(tecidoAtual + 1);
                }

                if (evento.key === "ArrowLeft") {
                    evento.preventDefault();
                    mostrarTecido(tecidoAtual - 1);
                }
            });
        }
    }


    // ==========================================
    // 4. AMPLIAR FOTOS DA GALERIA
    // ==========================================

    const lightbox = document.getElementById("lightbox");
    const lightboxImagem = document.getElementById("lightboxImagem");
    const lightboxNome = document.getElementById("lightboxNome");
    const fecharLightbox = document.getElementById("fecharLightbox");

    let ultimoElementoFocado = null;

    function abrirFoto(caminho, nome) {
        if (!lightbox || !lightboxImagem) return;

        ultimoElementoFocado = document.activeElement;

        lightboxImagem.src = caminho;
        lightboxImagem.alt = nome;

        if (lightboxNome) {
            lightboxNome.textContent = nome;
        }

        lightbox.hidden = false;
        document.body.classList.add("lightbox-aberto");

        if (fecharLightbox) {
            fecharLightbox.focus();
        }
    }

    function fecharFoto() {
        if (!lightbox) return;

        lightbox.hidden = true;
        document.body.classList.remove("lightbox-aberto");

        if (lightboxImagem) {
            lightboxImagem.removeAttribute("src");
        }

        if (ultimoElementoFocado) {
            ultimoElementoFocado.focus();
        }
    }

    document.querySelectorAll("[data-ampliar]").forEach(botao => {
        botao.addEventListener("click", () => {
            abrirFoto(
                botao.dataset.ampliar,
                botao.dataset.nome || "Produto Neriah Móveis"
            );
        });
    });

    if (fecharLightbox) {
        fecharLightbox.addEventListener("click", fecharFoto);
    }

    if (lightbox) {
        lightbox.addEventListener("click", evento => {
            if (evento.target === lightbox) {
                fecharFoto();
            }
        });
    }

    document.addEventListener("keydown", evento => {
        if (evento.key === "Escape" && lightbox && !lightbox.hidden) {
            fecharFoto();
        }
    });


    // ==========================================
    // 5. ANIMAÇÃO SUAVE AO ROLAR A PÁGINA
    // ==========================================

    const elementos = document.querySelectorAll(
        ".cabecalho-secao, .produto-card, .sobre-conteudo, .caixa-informacoes"
    );

    const movimentoReduzido = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    if ("IntersectionObserver" in window && !movimentoReduzido) {
        const observador = new IntersectionObserver(
            entradas => {
                entradas.forEach(entrada => {
                    if (entrada.isIntersecting) {
                        entrada.target.classList.add("visivel");
                        observador.unobserve(entrada.target);
                    }
                });
            },
            {
                threshold: 0.08,
                rootMargin: "0px 0px 35px 0px"
            }
        );

        elementos.forEach(elemento => {
            elemento.classList.add("revelar");
            observador.observe(elemento);
        });
    }

});
