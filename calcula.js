function calcularFichas() {
    event.preventDefault();
    const valorGasto = parseFloat(document.getElementById('valorGasto').value);
    const precoFicha = 2.50;
    const creditoanterior = parseFloat(document.getElementById('creditoanterior').value);

    const creditototal = Math.floor(valorGasto + creditoanterior)
    const numeroFichas = Math.floor(creditototal / precoFicha);



    const diasSemana = parseInt(document.getElementById('diassemana').value);
    const refPorDia = parseInt(document.getElementById('ref_por_dia').value);
    const refPorSemana = diasSemana * refPorDia;

    const numeroSemanas = Math.floor(numeroFichas / refPorSemana);

    const resultado = document.getElementById('resultado');

    const comerdias = Math.floor(numeroFichas / refPorDia)

    resultado.innerHTML = `Você possui ${numeroFichas} fichas atualmente. <br>
     As fichas irão durar aproximadamente ${numeroSemanas} semanas/ ${comerdias} dias se você comer ${refPorDia} vez(es) por dia durante ${diasSemana} dia(s) por semana no restaurante.`;
}
