// Função que verifica se um número pertence à sequência de Fibonacci
function isFibonacci(num) {
    let a = 0;
    let b = 1;

    // Casos base
    if (num === 0 || num === 1) {
        return true;
    }
    while (b <= num) {
        const next = a + b;
        a = b;
        b = next;

        if (b === num) {
            return true;
        }
    }

    return false;
}

// Número a ser verificado (pode ser alterado)
const numero = 34;

// Verificação e saída
if (isFibonacci(numero)) {
    console.log(`${numero} pertence à sequência de Fibonacci!`);
} else {
    console.log(`${numero} NÃO pertence à sequência de Fibonacci.`);
}