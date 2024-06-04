var calculei = false; //variavel calculei recebe falso
var operei = false; //variavel operei recebe falso
var expressao = ''; //variavel expressao recebe "nada"



function insert (num) { //função "inserir no parametro numero ela insere valores a partir "
    var numero = document.getElementById('resultado').innerHTML; //var numero recebe pelo id "resultado" que esta no html e mostra no html"
    var exp = document.getElementById('exp');  //var exp recebe pelo id "exp" q está no codigo
    if (calculei) { //se calculei existe
        if(num === '-' || num === '+' || num === '/' || num === '*'){ // se numero for exatamente igual a - ou + ou / ou * acontece oq esta dentro de {}
            //document.getElementById('resultado').innerHTML = numero + num;
            calcular(true); //função calcular agora é verdadeiro  
            expressao = expressao + num; //expressao q estava vazia agora receber  expressao + num
            calculei = true; // calculei passa a ser verdadeiro
            operei = true; // operei passa a ser verdadeiro
        }  else { // ou entao se num nao for exatamente igual oq está acima ocorre oq esta em {}
            document.getElementById('resultado').innerHTML = num; //aqui resultado q está la em cima agora recebe num nao pode receber expressao + num pois vai concatenar
            expressao = num; //expressao é igual a num
        }
        calculei = false; //a partir daqui calculei volta a ser falso
    } else { //se entao da expressao calculei
        if(num === '-' || num === '+' || num === '/' || num === '*'){ //se numero for exatamente igual a - ou + ou / ou * acontece oq esta dentro de {}
            calcular(true); // função calculei passa a ser verdadeiro
            expressao = expressao + num; // expressao recebe expressao + num
            operei =true; //operei agora é verdadeiro
        } else { //ou entao da booleana num === a + * / -
            if(operei){ //se operei existe
                document.getElementById('resultado').innerHTML = num; //resultado passa a receber num
                expressao = expressao + num; // expressao recebe expressao + num
                operei = false; // operei volta a ser falso
            } else{ //ou entao da se operei existe
                if(numero === "0"){ //se numero for exatamente "0" acontece {}
                    document.getElementById('resultado').innerHTML =  num; //resultado passa a ser num e substitui 0
                } else{ //ou entao do se numero for exatamente 0
                    document.getElementById('resultado').innerHTML = numero + num; //resultado recebe numero +num
                }
                expressao = expressao + num;// esta fora dos laços entao vai receber oq está atras
            }
        }     
    }
 //exp.innerHTML = expressao;
}

function clean() { //função limpar ela apaga a expressao na tela de resultado
    document.getElementById('resultado').innerHTML = 0; // resultado recebe 0 quando função limpar é pressionada
    expressao =""; //limpa a tela de expressao
}

function back () { //função voltar ela apaga os numeros inseridos
    var resultado = document.getElementById('resultado').innerHTML; //resultado recebe resultado e mostra na tela 
    document.getElementById('resultado').innerHTML = resultado.substring(0,resultado.length-1);// define o numero de casas q vai voltar
    expressao.substring(0,resultado.length-1);
}

function calcular(parcial = false) { //função calcular no parametro parcial for igual a falso ela calcula o resultado mostrado na tela
    var resultado = document.getElementById('resultado').innerHTML; //resultado é mostrado na tela
    if (expressao) { //se expressao existir
        document.getElementById('resultado').innerHTML = eval(expressao); // avalia o expressão de cadeia de caracteres e retorna seu valor no caso expressao
        expressao =  document.getElementById('resultado').innerHTML // expressao passa a ser resultado mostrado na tela
        if(parcial){ //se parcial existir
            calculei = false; //calculei passa a ser falso
        } else { // ou entao do se parcial
            calculei = true; //passa a ser verdadeiro
        }
        
    } else { //ou entao da se expressao existir
        document.getElementById('resultado').innerHTML ="Nada!"; //mostra no resultado a string "nada!" quando expressao nao cair nos se entao de cima
    }
} 