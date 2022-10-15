//Pegando elemento do HTML
const abas = document.querySelectorAll(".aba");

//Identifcacão de Click na aba
abas.forEach(aba => {
    aba.addEventListener("click", function(){

        if(aba.classList.contains("selecionada")){
            return;
        }

    //Desmarcando aba após o click 
    const abaSelecionada = document.querySelector(".aba.selecionada")

    abaSelecionada.classList.remove("selecionada");

    //Marcando aba clicada
    aba.classList.add("selecionada");

    //Escondendo conteúdo anterior
    const informacaoSelecionada = document.querySelector(".informacao.selecionada");
    informacaoSelecionada.classList.remove("selecionada");

    //Mostrando conteúdo da aba clicada
    const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`

    const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba);
    informacaoASerMostrada.classList.add("selecionada");

    });
});
