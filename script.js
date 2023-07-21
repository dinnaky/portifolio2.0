function english() {
    var titulo = document.querySelector(".sobre-mimtitulo");
    var texto = document.querySelector(".sobre-mimtexto");
    var textoEstudante = document.querySelector(".estudante-texto");
    var textoCEP = document.querySelector(".texto-cep");
    var textoRedesSociais = document.querySelector(".redes-sociais");
    var textoTecnologias = document.querySelector(".tecnologias-texto")
    var botao = document.querySelector(".botaoTraduzir");
    
    botao.addEventListener("click", function(){

        titulo.textContent = "About Me:";
    
        texto.textContent = "I'm a programming enthusiast and a passionate developer eager to learn new languages and technologies. I use GitHub to share my work and collaborate with other community members. My goal is to acquire knowledge and grow professionally in the field of programming.";

        textoEstudante.textContent = "Student";

        textoCEP.textContent = "Cianorte, Paraná, Brazil"

        textoRedesSociais.textContent = "Social Media:"

        textoTecnologias.textContent = "Technologies:"
    })
}