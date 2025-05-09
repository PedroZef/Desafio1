// String definida no código (pode ser alterada)
const textoOriginal = "Hello, World!";

// Função para inverter string
function inverterString(str) {
    let textoInvertido = "";

    // Percorre a string de trás para frente
    for (let i = str.length - 1; i >= 0; i--) {
        textoInvertido += str[i];
    }

    return textoInvertido;
}

// Inverte a string
const textoInvertido = inverterString(textoOriginal);

// Exibe os resultados
console.log(`Texto original: ${textoOriginal}`);
console.log(`Texto invertido: ${textoInvertido}`);