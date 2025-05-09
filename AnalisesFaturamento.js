// Dados de faturamento em formato JSON
const dadosFaturamento = {
    "faturamentoDiario": [
        { "dia": 1, "valor": 22174.1664 },
        { "dia": 2, "valor": 24537.6698 },
        { "dia": 3, "valor": 26139.6134 },
        { "dia": 4, "valor": 0.0 },
        { "dia": 5, "valor": 0.0 },
        { "dia": 6, "valor": 26742.6612 },
        { "dia": 7, "valor": 0.0 },
        { "dia": 8, "valor": 42889.2258 },
        { "dia": 9, "valor": 46251.174 },
        { "dia": 10, "valor": 11191.4722 },
        { "dia": 11, "valor": 0.0 },
        { "dia": 12, "valor": 0.0 },
        { "dia": 13, "valor": 3847.4823 },
        { "dia": 14, "valor": 373.7838 },
        { "dia": 15, "valor": 2659.7563 },
        { "dia": 16, "valor": 48924.2448 },
        { "dia": 17, "valor": 18419.2614 },
        { "dia": 18, "valor": 0.0 },
        { "dia": 19, "valor": 0.0 },
        { "dia": 20, "valor": 35240.1826 },
        { "dia": 21, "valor": 43829.1667 },
        { "dia": 22, "valor": 18235.6852 },
        { "dia": 23, "valor": 4355.0662 },
        { "dia": 24, "valor": 13327.1025 },
        { "dia": 25, "valor": 0.0 },
        { "dia": 26, "valor": 0.0 },
        { "dia": 27, "valor": 25681.8318 },
        { "dia": 28, "valor": 1718.1221 },
        { "dia": 29, "valor": 13220.495 },
        { "dia": 30, "valor": 8414.61 }
    ]
};

function analisarFaturamento(dados) {
    // Filtrar apenas dias com faturamento (ignorar dias com valor 0)
    const diasComFaturamento = dados.faturamentoDiario.filter(dia => dia.valor > 0);

    // Extrair apenas os valores numéricos
    const valores = diasComFaturamento.map(dia => dia.valor);

    // Calcular menor valor
    const menorValor = Math.min(...valores);

    // Calcular maior valor
    const maiorValor = Math.max(...valores);

    // Calcular média mensal (considerando apenas dias com faturamento)
    const soma = valores.reduce((total, valor) => total + valor, 0);
    const media = soma / valores.length;

    // Contar dias com faturamento acima da média
    const diasAcimaMedia = valores.filter(valor => valor > media).length;

    return {
        menorValor,
        maiorValor,
        diasAcimaMedia,
        mediaMensal: media,
        totalDiasComFaturamento: valores.length
    };
}

// Executar a análise
const resultado = analisarFaturamento(dadosFaturamento);

// Exibir resultados formatados
console.log("========== Análise de Faturamento Mensal ==========");
console.log(`Menor valor de faturamento: R$ ${resultado.menorValor.toFixed(2)}`);
console.log(`Maior valor de faturamento: R$ ${resultado.maiorValor.toFixed(2)}`);
console.log(`Média mensal de faturamento: R$ ${resultado.mediaMensal.toFixed(2)}`);
console.log(`Dias com faturamento acima da média: ${resultado.diasAcimaMedia}`);
console.log(`Total de dias com faturamento: ${resultado.totalDiasComFaturamento}`);
console.log("====== OK ======");