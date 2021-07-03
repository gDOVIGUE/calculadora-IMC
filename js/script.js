let listaDeUsuarios = [] 

function calcular() {
    // Pegar os valores
    let nome = document.getElementById("nome").value.trim();
    let altura = parseFloat(document.getElementById("altura").value);
    let peso = parseFloat(document.getElementById("peso").value);

    console.log(nome);
    console.log(altura);
    console.log(peso);

    // Validar Formulario
    if(validarForm(nome, altura, peso) == true) {
        // Calcular o imc
        let imc = calcularIMC(altura, peso);

        // Gerar a situação
        let situacao = gerarSituacao(imc);
        console.log(situacao)

        // Registrar Usuario em uma lista

        registrarUsuario(nome, altura, peso, imc, situacao)

        // Gerar template, preencher a tabela
        criarTemplate()


        // Limpar o form

        limparFormulario()


    } else {
        window.alert("Por favor preencha todos os campos!")        
    }



}

function validarForm(campoNome, campoAltura, campoPeso) {
    if (campoNome == "" || (isNaN(campoAltura) || campoAltura <= 0) || (isNaN(campoPeso) || campoPeso <= 0)) {
        return false;
    } else {
        return true;
    }
}

function calcularIMC(altura, peso) {
    let imc = peso / (altura * altura);
    console.log(imc)
    return imc;
}

function gerarSituacao(imc) {    
    /*
    Resultado	        Situação
    Entre 18,5 e 24,99	Peso normal
    Entre 25 e 29,99	Acima do peso
    Entre 30 e 34,99	Obesidade I
    Entre 35 e 39,99	Obesidade II (severa)
    */

    if (imc < 18.5) {
        return "Magreza Severa";
    } else if (imc >= 18.5 && imc < 25) {
        return "Peso Normal";
    } else if (imc >= 25 && imc < 30) {
        return "Acima do Peso";
    } else if (imc >= 30 && imc < 35) {
        return "Obesidade I";
    } else if (imc >= 35 && imc < 40) {
        return "Obesidade II (severa)";
    } else {
        return "Obesidade III";
    }
}

function registrarUsuario(_nome, _altura, _peso, _imc, _situacao) {
    let pessoa = {
        nome: _nome,
        altura: _altura,
        peso: _peso,
        imc: _imc,
        situacao: _situacao
    }

    listaDeUsuarios.push(pessoa);
    console.log(listaDeUsuarios)
}

function criarTemplate() {

    let template = ''

    for (let index = 0; index < listaDeUsuarios.length; index++) {
        const pessoa = listaDeUsuarios[index]

        let tabela = document.getElementById("corpo-tabela")


        template += `<tr>
        <td>${pessoa.nome}</td>
        <td>${pessoa.altura}</td>
        <td>${pessoa.peso}</td>
        <td>${pessoa.imc}</td>
        <td>${pessoa.situacao}</td> 
        </tr>`

        tabela.innerHTML = template

        
        
    }
} 

    function limparFormulario(){
    document.querySelector(".name").value = ""
    document.querySelector(".altura").value = ""
    document.querySelector(".peso").value = ""
}
