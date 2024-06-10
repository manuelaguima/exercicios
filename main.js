let resultado = document.getElementById('resultado')
const resultados = document.getElementById('resultados');

resultados.addEventListener('click', () => {
    const resultado1 = realizarOperacao(5, 3, 48, 2);
    const resultado2 = realizarOperacao(9, 4, 9, 3, 6, 2);

    const textoResultado = `
        5 + 3 * 4 - 8 / 2 = ${resultado1}<br>
        9 - 4 * 9 / 3 + 6 / 2 = ${resultado2}
    `;

    resultados.innerHTML = textoResultado;
});

function realizarOperacao(numero1, numero2, numero3, denominador1, numero4, denominador2) {
    const multiplicacao1 = numero2 * numero3;
    const divisao1 = multiplicacao1 / denominador1;
    const soma1 = numero1 + divisao1;

    const multiplicacao2 = numero4 * numero3;
    const divisao2 = multiplicacao2 / denominador2;
    const subtracao1 = numero4 - divisao2;
    const divisao3 = subtracao1 / denominador2;
    const soma2 = divisao3 + numero6;

    return soma1;
    return soma2;
}

