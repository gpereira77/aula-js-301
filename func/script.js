function sorteio(/*argumentos*/minimo, maximo) {
    let aleartorio = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
    return aleartorio; //return é a saida de uma função
}

sorteio(/*parametro é o valor q preenche o argumento*/ 10,20   );// para executar a função 