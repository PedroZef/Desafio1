// Dados de faturamento por estado
const faturamentoEstados = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
};

// Função para calcular os percentuais
function calcularPercentuais(dados) {
    // Calcula o total mensal
    const total = Object.values(dados).reduce((soma, valor) => soma + valor, 0);

    // Calcula o percentual para cada estado
    const percentuais = {};
    for (const estado in dados) {
        percentuais[estado] = (dados[estado] / total) * 100;
    }

    return {
        total,
        percentuais
    };
}

// Executa o cálculo
const resultado = calcularPercentuais(faturamentoEstados);

// Exibe os resultados
console.log("=== Percentual de Representação por Estado ===");
console.log(`Faturamento Total: R$ ${resultado.total.toFixed(2)}`);
console.log("--------------------------------------------");

for (const estado in resultado.percentuais) {
    console.log(`${estado}: ${resultado.percentuais[estado].toFixed(2)}%`);
  }