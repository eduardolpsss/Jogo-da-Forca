// Eduardo Luiz Pontes de Souza 28/03/2022

let palavraSecretaCategoria;
let palavraSecretaSorteada;

let listaDinamica = [];

let tentativas = 6;

// Banco de palavras
const palavras = [
    palavra001 = {
        nome: "BRASIL",
        categoria: "PAÍS"
    },
    palavra002 = {
        nome: "CHILE",
        categoria: "PAÍS"
    },
    palavra003 = {
        nome: "EQUADOR",
        categoria: "PAÍS"
    },
    palavra004 = {
        nome: "SUICA",
        categoria: "PAÍS"
    },
    palavra005 = {
        nome: "INDONESIA",
        categoria: "PAÍS"
    },
    palavra006 = {
        nome: "DINAMARCA",
        categoria: "PAÍS"
    },
    palavra007 = {
        nome: "CANADA",
        categoria: "PAÍS"
    },
    palavra008 = {
        nome: "RUSSIA",
        categoria: "PAÍS"
    },
    palavra009 = {
        nome: "CHINA",
        categoria: "PAÍS"
    },
    palavra010 = {
        nome: "INGLATERRA",
        categoria: "PAÍS"
    },
    palavra011 = {
        nome: "BANANA",
        categoria: "FRUTAS"
    },
    palavra012 = {
        nome: "MACA",
        categoria: "FRUTAS"
    },
    palavra013 = {
        nome: "LARANJA",
        categoria: "FRUTAS"
    },
    palavra014 = {
        nome: "UVA",
        categoria: "FRUTAS"
    },
    palavra015 = {
        nome: "TAMARINDO",
        categoria: "FRUTAS"
    },
    palavra016 = {
        nome: "ABACATE",
        categoria: "FRUTAS"
    },
    palavra017 = {
        nome: "KIWI",
        categoria: "FRUTAS"
    },
    palavra018 = {
        nome: "PITAYA",
        categoria: "FRUTAS"
    },
    palavra019 = {
        nome: "MORANGO",
        categoria: "FRUTAS"
    },
    palavra020 = {
        nome: "CIDRA",
        categoria: "FRUTAS"
    },
    palavra021 = {
        nome: "FIGADO",
        categoria: "PARTE DO CORPO HUMANO"
    },
    palavra022 = {
        nome: "JOELHO",
        categoria: "PARTE DO CORPO HUMANO"
    },
    palavra023 = {
        nome: "BOCA",
        categoria: "PARTE DO CORPO HUMANO"
    },
    palavra024 = {
        nome: "TIMPANO",
        categoria: "PARTE DO CORPO HUMANO"
    },
    palavra025 = {
        nome: "ORELHA",
        categoria: "PARTE DO CORPO HUMANO"
    },
    palavra026 = {
        nome: "DEDO",
        categoria: "PARTE DO CORPO HUMANO"
    },
    palavra027 = {
        nome: "BACIA",
        categoria: "PARTE DO CORPO HUMANO"
    },
    palavra028 = {
        nome: "SOBRANCELHA",
        categoria: "PARTE DO CORPO HUMANO"
    },
    palavra029 = {
        nome: "FEMUR",
        categoria: "PARTE DO CORPO HUMANO"
    },
    palavra030 = {
        nome: "COTOVELO",
        categoria: "PARTE DO CORPO HUMANO"
    },
    palavra031 = {
        nome: "LEAO",
        categoria: "ANIMAL"
    },
    palavra032 = {
        nome: "MACACO",
        categoria: "ANIMAL"
    },
    palavra033 = {
        nome: "GOLFINHO",
        categoria: "ANIMAL"
    },
    palavra034 = {
        nome: "ORCA",
        categoria: "ANIMAL"
    },
    palavra035 = {
        nome: "ANTILOPE",
        categoria: "ANIMAL"
    },
    palavra036 = {
        nome: "DROMEDARIO",
        categoria: "ANIMAL"
    },
    palavra037 = {
        nome: "GATO",
        categoria: "ANIMAL"
    },
    palavra038 = {
        nome: "CACHORRO",
        categoria: "ANIMAL"
    },
    palavra039 = {
        nome: "RINOCERONTE",
        categoria: "ANIMAL"
    },
    palavra040 = {
        nome: "GIRAFA",
        categoria: "ANIMAL"
    },
    palavra001 = {
        nome: "AZUL",
        categoria: "CORES"
    },
    palavra002 = {
        nome: "BEGE",
        categoria: "CORES"
    },
    palavra003 = {
        nome: "ROXO",
        categoria: "CORES"
    },
    palavra004 = {
        nome: "VERMELHO",
        categoria: "CORES"
    },
    palavra005 = {
        nome: "AMARELO",
        categoria: "CORES"
    },
    palavra006 = {
        nome: "CIANO",
        categoria: "CORES"
    },
    palavra007 = {
        nome: "OCRE",
        categoria: "CORES"
    },
    palavra008 = {
        nome: "PRETO",
        categoria: "CORES"
    },
    palavra009 = {
        nome: "CINZA",
        categoria: "CORES"
    },
    palavra010 = {
        nome: "MARROM",
        categoria: "CORES"
    },
]

// Chamando função para testar números aleatórios
criarPalavraSecreta();

montarCategoriaTela();

// Lógica da função de criação de palavra e categoria
function criarPalavraSecreta() {
    const indexPalavra = parseInt(Math.random() * palavras.length)

    palavraSecretaSorteada = palavras[indexPalavra].nome;
    palavraSecretaCategoria = palavras[indexPalavra].categoria;

    console.log(palavraSecretaSorteada)
    console.log(palavraSecretaCategoria)
}

// Função para passar a categoria e palavra secreta para o HTML, além de printar na tela
function montarCategoriaTela() {
    // Mostrar categoria
    const categoria = document.getElementById("categoria");
    categoria.innerHTML = palavraSecretaCategoria;

    // Mostrar palavra
    const palavraSecreta = document.getElementById("palavra-secreta");
    palavraSecreta.innerHTML = "";

    // Trocando palavra secreta por espaços vazios
    for (i = 0; i < palavraSecretaSorteada.length; i++) {
        if (listaDinamica[i] == undefined) {
            listaDinamica[i] = "&nbsp;";

            palavraSecreta.innerHTML = palavraSecreta.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
        } else {
            palavraSecreta.innerHTML = palavraSecreta.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
        }
    }
}

function verificaLetra(letra) {
    // Desabilitando letra já clicada
    document.getElementById("tecla-" + letra).disabled = true;

    if (tentativas > 0) {
        mudarStyleLetra("tecla-" + letra);

        comparaListas(letra);
        montarCategoriaTela()
    }
}

function mudarStyleLetra(tecla) {
    document.getElementById(tecla).style.background = "#8b008b";
    document.getElementById(tecla).style.color = "#ffffff";
}

function comparaListas(letra) {
    const posicao = palavraSecretaSorteada.indexOf(letra)

    // Se a letra escolhida não existir na palavra
    if (posicao < 0) {
        tentativas--
        carregaImagemForca();

        if (tentativas == 0) {
            abreModal("Perdeu!", "Não foi dessa vez, a palavra secreta da categoria " + palavraSecretaCategoria + " era " + palavraSecretaSorteada + " tente novamente...");
        }

        // Substituir imagem da forca após o erro
        // Verificar se ainda há tentativas ou se o jogador perdeu

    } else { // Se a letra escolhida existir na palavra 
        for (i = 0; i < palavraSecretaSorteada.length; i++) {

            if (palavraSecretaSorteada[i] == letra) {
                listaDinamica[i] = letra;
            }

        }
    }

    let vitoria = true;

    for (i = 0; i < palavraSecretaSorteada.length; i++) {
        if (palavraSecretaSorteada[i] != listaDinamica[i]) {
            vitoria = false;
        }
    }

    if (vitoria == true) {
        // Modal informando vitória
        abreModal("PARABÉNS!", "Você acertou a palavra secreta...");
        tentativas = 0;
    }
}

// Atualiza a forca de acordo com o número de tentativas (vidas)
function carregaImagemForca() {
    switch (tentativas) {
        case 5:
            document.getElementById("imagem").style.background = "url('./img/forca01.png')";
            break;
        case 4:
            document.getElementById("imagem").style.background = "url('./img/forca02.png')";
            break;
        case 3:
            document.getElementById("imagem").style.background = "url('./img/forca03.png')";
            break;
        case 2:
            document.getElementById("imagem").style.background = "url('./img/forca04.png')";
            break;
        case 1:
            document.getElementById("imagem").style.background = "url('./img/forca05.png')";
            break;
        case 0:
            document.getElementById("imagem").style.background = "url('./img/forca06.png')";
            break;
        default:
            document.getElementById("imagem").style.background = "url('./img/forca.png')";
            break;
    }
}

function abreModal(titulo, mensagem) {
    // Mudando título da modal
    let modalTitulo = document.getElementById("examplModalLabel");
    modalTitulo.innerText = titulo;

    // Mudando corpo da modal
    let modalBody = document.getElementById("modalBodyId");
    modalBody.innerHTML = mensagem;

    $("#modalMensagem").modal({
        show: true
    })
}

// Função para reiniciar o jogo
function reiniciarJogo() {
    location.reload();
}

// Função para ligar light-mode
function lightMode() {
    document.getElementById("view-padrao").style.background = "goldenrod";
}

// Função para ligar dark-mode
function darkMode() {
    document.getElementById("view-padrao").style.background = "#21222c";
}