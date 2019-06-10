//-------------------- Algoritmo para Verificar Empréstimo ------------------------

let idade= number(prompt ("Digite sua idade: "));
let salario; 
let emprSolicitado;

if (idade>= 25 && idade<= 55){
    (salario = number(prompt("Informe sua renda: ")));
        if(salario>= 1000){
            (emprSolicitado = number(prompt("Informe o valor do empréstimo desejado")));
                if(emprSolicitado <= 5*salario){
                    alert("Empréstimo aceito");
                }
                    else{
                        alert("Empréstimo recusado devido ao valor solicitado ser alto");
                    }
                else{
                    alert("Empréstimo recusado devido ao salário ser baixo");
                }
            else{
                alert("Empréstimo indisponível pela idade");
            }
        }
}

// ------------------- Algoritmo para Encontrar Carta ------------------------------

let cor;
let desenho;

let desenhoP = (prompt("Digite o desenho ou valor da carta que procura"));
let corP = (prompt("Digite a cor ou nipe da carta que procura"));

if(desenhoP == desenho && corP==cor){
    alert("Sua carta foi encontrada no baralho");
}
else{
    alert("Sua carta não se encontra no baralho");
}