function btn(){
    let mensalidade = document.getElementById('mensalidade')
    let contribuicao = document.getElementById('contribuicao')
    let nome = document.getElementById("nome")
    let mensalidade1 = parseFloat(mensalidade.value)
    let mensalidade2 = mensalidade.value
    let contribuicao1 = contribuicao.value
    let contribuicao2 = parseFloat(contribuicao1*12)
    let nome1 = nome.value
    let juros = 0.00517
    
    if (nome1 == "" || typeof nome1 == "number") { 
        let div = document.getElementById('infos')
        let h4 = div.innerHTML = `<h4>Por favor, preencha seu nome!</h4>`
    }else if(mensalidade2 == "" || contribuicao1 ==""){
        let div = document.getElementById('infos')
        let h4 = div.innerHTML = `<h4>Por favor, preencha os campos de mensalidade e tempo de contribuição!</h4>`
    }else{
        let expr = parseFloat(mensalidade1 * (((1 + juros) ** [contribuicao2] - 1) / juros).toFixed(3))
        let div = document.getElementById('div1')
        let h4 = div.innerHTML = `<h4>Olá ${nome1}, juntando R$ ${mensalidade1} todo mês, você terá R$ ${expr.toFixed(2)} em ${contribuicao1} anos</h4>
        <button class="button" type="button" onclick="voltar()">Simular Novamente!</button>`
    }
}

function voltar(){
    let div = document.getElementById('body')
    let h4 = div.innerHTML = `    <body id="body">
    <main>
        <header class="header">
            <img src="./Imagens/porquinho.png"
            alt="Cofrinho" style="width:10%;height:10%;">
            <h1>Simulador</h1>
        </header>
        <div id="div1">
            <form>
                
                <div>
                    <label class="label" for="">Nome:</label>
                    <input type="text" id="nome" class="input" placeholder="Digite seu nome">
                </div>
                <div id="mensalidade_campo">
                    <label class="label" for="">Mensalidade:</label>
                    <input type="number" id="mensalidade" class="input" placeholder="Digite o valor mensal">
                </div>
                <div>
                    <label class="label" for="">Tempo de Contribuição (Anos):</label>
                    <input type="number" id="contribuicao" class="input" placeholder="Digite o periodo">
                </div>
                <!-- <input type="button" id="send" onclick="btn()"
                alue="Enviar"> -->
                <div id='infos'></div>
                <button class="button" type="button" onclick="btn()">Simular</button>
            </form>
        </div>

        <footer>
            <p> Desafio JS- Simulador</p>
        </footer>
    </main>
</body>`
}