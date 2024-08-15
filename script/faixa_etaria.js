function faixa_etaria(formulario){
    let idades = [formulario.p1.value, formulario.p2.value, formulario.p3.value, formulario.p4.value, formulario.p5.value];
    let f_etaria1 = 0;
    let f_etaria2 = 0;
    let f_etaria3 = 0;
    let maior_idade = 0;
    let resposta = "";

    for(let i = 0; i < 5; i++){
        if(idades[i] <= 15){
            f_etaria1++;
        } else if(idades[i] >= 16 && idades[i] <= 40){
            f_etaria2++;
        } else {
            f_etaria3++;
        }

        if(idades[i] > maior_idade){
            maior_idade = idades[i];
        }
    }

    resposta = "Faixa Etária 1 = " + f_etaria1 + "<br>Faixa Etária 2 = " + f_etaria2 + "<br> Faixa Etária 3 = " + f_etaria3 + "<br>Maior Idade = " + maior_idade;
    document.getElementById("resultado").innerHTML = resposta;
}   