<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    >

    <title>Neriah Móveis | Design, Conforto e Qualidade</title>

    <meta
        name="description"
        content="Neriah Móveis. Design, conforto e qualidade para sua casa."
    >

    <!-- Marca que o JavaScript está ativo (usado pelo efeito de digitação) -->
    <script>document.documentElement.classList.add("js");</script>

    <!-- FONTES -->

    <link rel="preconnect" href="https://fonts.googleapis.com">

    <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossorigin
    >

    <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Playfair+Display:wght@400;600;700&family=Bebas+Neue&family=Karla:wght@400;500;600&display=swap"
        rel="stylesheet"
    >

    <!-- ÍCONES -->

    <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
    >

    <!-- CSS PRINCIPAL -->

    <link rel="stylesheet" href="cssneriah.css?v=3">

    <!-- JAVASCRIPT -->

    <script src="script.js?v=3" defer></script>
</head>

<body>

    <!-- =====================================
         CABEÇALHO
    ===================================== -->

    <header>

        <a
            href="#inicio"
            aria-label="Neriah Móveis - Início"
        >

            <img
                src="neriahlogo.jpeg"
                alt="Logo Neriah Móveis"
                class="logo"
            >

        </a>

        <nav aria-label="Navegação principal">

            <a href="#inicio">Início</a>

            <a href="#sobre">Sobre Nós</a>

            <a href="#galeria">Galeria</a>

            <a href="#catalogo-cores">Cores</a>

            <a href="#localizacao">Localização</a>

            <a href="#contato">Contato</a>

        </nav>

    </header>

    <main>

        <!-- =====================================
             INÍCIO
        ===================================== -->

        <section id="inicio">

            <div class="hero-conteudo">

                <h1
                    id="tituloHero"
                    aria-label="Design, conforto e qualidade para sua casa"
                >
                    <span class="td-texto" aria-hidden="true">DESIGN, CONFORTO E QUALIDADE PARA SUA CASA</span>
                </h1>

                <p>
                    Feliz em fazer parte da sua vida para
                    transformar sua casa em um lar
                    aconchegante e elegante.
                </p>

                <a
                    class="botao"
                    href="https://wa.me/5547996527515"
                    target="_blank"
                    rel="noopener noreferrer"
                >

                    <i class="fa-brands fa-whatsapp"></i>

                    Solicitar Orçamento

                </a>

            </div>

        </section>

        <!-- =====================================
             SOBRE NÓS
        ===================================== -->

        <section id="sobre">

            <h2 class="titulo">
                <span>Sobre Nós</span>
            </h2>

            <p>
                A Neriah Móveis atua oferecendo móveis
                de qualidade, conforto e sofisticação
                para transformar ambientes e atender
                às necessidades de cada cliente.
            </p>

            <p>
                Nosso compromisso é proporcionar atendimento
                personalizado, produtos de excelência
                e uma experiência de compra confiável.
            </p>

        </section>

        <div class="divisor"></div>

        <!-- =====================================
             GALERIA DE PRODUTOS
        ===================================== -->

        <section id="galeria">

            <h2 class="titulo">
                <span>Conheça nossos produtos!</span>
            </h2>

            <div class="galeria">

                <!-- CADEIRA VERTICE -->

                <article class="card">

                    <img
                        src="cadeira01.jpeg"
                        alt="Cadeira Vertice"
                        loading="lazy"
                    >

                    <h3>Cadeira Vertice</h3>

                </article>

                <!-- CADEIRA FLORENCE -->

                <article class="card">

                    <img
                        src="mesacadeira.jpeg"
                        alt="Cadeira Florence"
                        loading="lazy"
                    >

                    <h3>Cadeira Florence</h3>

                </article>

                <!-- POLTRONA Dinamarca -->

                <article class="card">

                    <img
                        src="poltronadinaplus.png"
                        alt="Poltrona Dinamarca"
                        loading="lazy"
                    >

                    <h3>Poltrona San Remo</h3>

                </article>

                <!-- BANQUETA DINAMARCA -->

                <article class="card">

                    <img
                        src="duascadeiras.jpeg"
                        alt="Banqueta Dinamarca"
                        loading="lazy"
                    >

                    <h3>Banqueta Dinamarca</h3>

                </article>

            </div>

            <div class="galeria-rodape">

                <a href="galeria.html" class="botao">

                    <i class="fa-solid fa-images"></i>

                    Ver Mais Fotos

                </a>

            </div>

        </section>

        <div class="divisor"></div>

        <!-- =====================================
             CATÁLOGO INTERATIVO DE CORES
             (as folhas 3D são criadas pelo script.js)
        ===================================== -->

        <section
            id="catalogo-cores"
            class="catalogo-cores"
            aria-labelledby="titulo-catalogo"
        >

            <h2 class="titulo" id="titulo-catalogo">
                <span>Catálogo de Cores</span>
            </h2>

            <p class="catalogo-descricao">
                Conheça nossos tecidos e escolha o acabamento
                ideal para o seu móvel.
            </p>

            <div class="neriah-palco">

                <button
                    class="neriah-seta neriah-seta-ant"
                    id="corAnterior"
                    type="button"
                    aria-label="Tecido anterior"
                >
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M15 5l-7 7 7 7"></path>
                    </svg>
                </button>

                <div
                    class="neriah-livro"
                    id="catalogoLivro"
                    role="group"
                    aria-label="Mostruário de tecidos"
                    tabindex="0"
                >

                    <div class="neriah-base">
                        <img
                            id="neriahFotoBase"
                            src="K-44.jpg"
                            alt="Tecido Terracota, código K-44"
                            draggable="false"
                        >
                    </div>

                    <div
                        class="neriah-sombra-base"
                        id="neriahSombraBase"
                        aria-hidden="true"
                    ></div>

                </div>

                <button
                    class="neriah-seta neriah-seta-prox"
                    id="corProxima"
                    type="button"
                    aria-label="Próximo tecido"
                >
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M9 5l7 7-7 7"></path>
                    </svg>
                </button>

            </div>

            <div class="neriah-detalhes" aria-live="polite">

                <h3 id="nomeCor">Terracota</h3>

                <p class="neriah-codigo">
                    Código <span id="codigoCor">K-44</span>
                </p>

                <p class="neriah-contador" id="contadorCor">
                    01 de 11
                </p>

            </div>

            <div
                class="neriah-miniaturas"
                id="catalogoMiniaturas"
                role="group"
                aria-label="Escolher tecido"
            ></div>

            <p class="catalogo-aviso">
                As cores são ilustrativas e podem
                apresentar pequenas variações
                conforme a configuração da tela.
                Consulte a disponibilidade com
                nossa equipe.
            </p>

        </section>

        <div class="divisor"></div>

        <!-- =====================================
             LOCALIZAÇÃO E CONTATO
        ===================================== -->

        <div class="informacoes-container">

            <!-- LOCALIZAÇÃO -->

            <section
                id="localizacao"
                class="info-card"
            >

                <h2 class="titulo">
                    <span>Localização</span>
                </h2>

                <div class="info-conteudo">

                    <i class="fa-solid fa-location-dot info-icone"></i>

                    <p>
                        Estrada Alberto Tôrres<br>
                        São Bento do Sul - SC<br>
                        CEP: 89283-185
                    </p>

                </div>

                <a
                    href="https://maps.app.goo.gl/yWdNgVLWJec74iBj6"
                    class="info-botao"
                    target="_blank"
                    rel="noopener noreferrer"
                >

                    <i class="fa-solid fa-map-location-dot"></i>

                    Como Chegar

                </a>

            </section>

            <!-- CONTATO -->

            <section
                id="contato"
                class="info-card"
            >

                <h2 class="titulo">
                    <span>Contato</span>
                </h2>

                <div class="info-conteudo">

                    <i class="fa-brands fa-whatsapp info-icone"></i>

                    <p>
                        WhatsApp<br>
                        (47) 98850-4149
                    </p>

                </div>

                <div class="info-conteudo">

                    <i class="fa-brands fa-instagram info-icone"></i>

                    <p>
                        Instagram<br>
                        @moveisneriahoficial
                    </p>

                </div>

                <div class="contato-botoes">

                    <a
                        href="https://wa.me/5547988504149"
                        class="info-botao"
                        target="_blank"
                        rel="noopener noreferrer"
                    >

                        <i class="fa-brands fa-whatsapp"></i>

                        WhatsApp

                    </a>

                    <a
                        href="https://www.instagram.com/moveisneriahoficial/"
                        class="info-botao"
                        target="_blank"
                        rel="noopener noreferrer"
                    >

                        <i class="fa-brands fa-instagram"></i>

                        Instagram

                    </a>

                </div>

            </section>

        </div>

    </main>

    <!-- =====================================
         RODAPÉ
    ===================================== -->

    <footer>

        <div class="footer-container">

            <!-- EMPRESA -->

            <div class="footer-empresa">

                <h3>Neriah Móveis</h3>

                <p>
                    Móveis com qualidade, conforto e design
                    para transformar ambientes.
                </p>

            </div>

            <!-- INFORMAÇÕES -->

            <div class="footer-informacoes">

                <h4>Informações</h4>

                <p>
                    Entrega mediante consulta de região.
                </p>

                <p>
                    Montagem disponível.
                </p>

                <p>
                    Produtos sujeitos à disponibilidade em estoque.
                </p>

            </div>

            <!-- LOCALIZAÇÃO -->

            <div class="footer-localizacao">

                <h4>Localização</h4>

                <p>Estrada Alberto Tôrres</p>

                <p>São Bento do Sul - SC</p>

                <p>CEP: 89283-185</p>

            </div>

            <!-- REDES SOCIAIS -->

            <div class="footer-redes">

                <h4>Redes Sociais</h4>

                <div class="sociais">

                    <a
                        href="https://www.instagram.com/moveisneriahoficial/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram Neriah Móveis"
                    >

                        <i class="fa-brands fa-instagram"></i>

                    </a>

                    <a
                        href="https://wa.me/5547988504149"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="WhatsApp Neriah Móveis"
                    >

                        <i class="fa-brands fa-whatsapp"></i>

                    </a>

                </div>

            </div>

        </div>

        <!-- DIREITOS AUTORAIS -->

        <div class="copyright">

            © 2026 Neriah Móveis — Todos os direitos reservados.

        </div>

    </footer>

</body>

</html>