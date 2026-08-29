// ==========================================
// MENU MOBILE
// ==========================================

const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {

    menu.classList.toggle("active");

});


// Fecha o menu ao clicar em algum link

document.querySelectorAll(".menu a").forEach(link => {

    link.addEventListener("click", () => {

        menu.classList.remove("active");

    });

});


// ==========================================
// MODO ESCURO
// ==========================================

const tema = document.getElementById("tema");

tema.addEventListener("click", () => {

    document.body.classList.toggle("modo-claro");

    if (document.body.classList.contains("modo-claro")) {

        tema.textContent = "☀️";

    } else {

        tema.textContent = "🌙";

    }

});


// ==========================================
// MODAL
// ==========================================

const modal = document.getElementById("modal");

const modalTitle =
    document.getElementById("modalTitle");

const modalText =
    document.getElementById("modalText");

const fechar =
    document.getElementById("fechar");

const modalOk =
    document.getElementById("modalOk");

const botoes =
    document.querySelectorAll(".saiba");


botoes.forEach(botao => {

    botao.addEventListener("click", () => {

        modalTitle.textContent =
            botao.dataset.title;

        modalText.textContent =
            botao.dataset.text;

        modal.classList.add("active");

    });

});


// Fechar

function fecharModal() {

    modal.classList.remove("active");

}

fechar.addEventListener("click", fecharModal);

modalOk.addEventListener("click", fecharModal);


// Fecha clicando fora

modal.addEventListener("click", (event) => {

    if (event.target === modal) {

        fecharModal();

    }

});


// Fecha com ESC

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        fecharModal();

    }

});


// ==========================================
// ANIMAÇÃO DOS CARDS
// ==========================================

const cards =
    document.querySelectorAll(".card");

function animarCards() {

    cards.forEach((card, index) => {

        const posicao =
            card.getBoundingClientRect().top;

        if (posicao < window.innerHeight - 80) {

            setTimeout(() => {

                card.classList.add("show");

            }, index * 100);

        }

    });

}

window.addEventListener(
    "scroll",
    animarCards
);

animarCards();


// ==========================================
// CONTADORES
// ==========================================

const contadores =
    document.querySelectorAll(".contador");

let iniciou = false;


function iniciarContadores() {

    const stats =
        document.querySelector(".stats");

    const posicao =
        stats.getBoundingClientRect().top;


    if (
        posicao < window.innerHeight &&
        !iniciou
    ) {

        iniciou = true;


        contadores.forEach(contador => {

            const alvo =
                Number(contador.dataset.target);

            let numero = 0;

            const incremento =
                Math.max(1, alvo / 60);


            function atualizar() {

                numero += incremento;


                if (numero >= alvo) {

                    contador.textContent =
                        alvo;

                } else {

                    contador.textContent =
                        Math.floor(numero);

                    requestAnimationFrame(
                        atualizar
                    );

                }

            }


            atualizar();

        });

    }

}


window.addEventListener(
    "scroll",
    iniciarContadores
);


// ==========================================
// EFEITO DE DIGITAÇÃO NO HERO
// ==========================================

const titulo =
    document.querySelector(".hero h1");


titulo.addEventListener(
    "mouseenter",
    () => {

        titulo.style.textShadow =
            "0 0 30px rgba(0,255,255,0.4)";

    }
);


titulo.addEventListener(
    "mouseleave",
    () => {

        titulo.style.textShadow = "none";

    }
);
