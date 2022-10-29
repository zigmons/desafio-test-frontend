function btn(){
    let mensalidade = document.getElementById('mensalidade')
    let contribuicao = document.getElementById('contribuicao')
    let nome = document.getElementById("nome")
    let mensalidade1 = parseFloat(mensalidade.value)
    let contribuicao1 = contribuicao.value
    let contribuicao2 = parseFloat(contribuicao1*12)
    let nome1 = nome.value
    let juros = 0.00517

    let expr = parseFloat(mensalidade1 * (((1 + juros) ** [contribuicao2] - 1) / juros).toFixed(3))
    // let total = (mensalidade1*(contribuicao1*12))
    // let total_2 = (total + expr).toFixed(2)

    let div = document.getElementById('div1')
    let h4 = div.innerHTML = `<h4>Olá ${nome1}, juntando R$ ${mensalidade1} todo mês, você terá R$ ${expr.toFixed(2)} em ${contribuicao1} anos</h4>
    <button class="button" type="button" onclick="voltar()">Simular Novamente!</button>`
    
}
// 

function voltar(){
    let div = document.getElementById('body')
    let h4 = div.innerHTML = `     <body id="body">
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
                    <!-- <br></br> -->
                </div>
                <div>
                    <label class="label" for="">Mensalidade:</label>
                    <input type="number" id="mensalidade" class="input" placeholder="Digite o valor mensal">
                    <!-- <br></br> -->
                </div>
                <div>
                    <label class="label" for="">Tempo de Contribuição (Anos):</label>
                    <input type="number" id="contribuicao" class="input" placeholder="Digite o periodo">
                    <!-- <br></br> -->
                </div>
                <!-- <input type="button" id="send" onclick="btn()"
                alue="Enviar"> -->
                <button class="button" type="button" onclick="btn()">Simular</button>
            </form>
        </div>
        <div id='infos'></div>
        <footer>
            <p> Desafio JS- Simulador</p>
        </footer>
    </main>
</body>`
}