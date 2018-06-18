/*// let tamanho = Number(prompt("qual tamanho?"));
// let contador = 0;
// let escadinha = "";
// let degrau = prompt("qual degrau?");

// while(contador < tamanho){
//     escadinha = escadinha = + degrau;
//     console.log(escadinha);
//     contador++;
// }*/


function escada(degrau="#", tamanho=10) {
    let escadinha = "";  contador = 0;  

    while (contador < tamanho){
        escadinha = escadinha + degrau;
        console.log(escadinha);
        contador++;
        
    }

    return escadinha;
}

escada("@", 20);