const fatores = {
    "Joule (J)": 1,
    "Quilojoule (kJ)": 1000,
    "Caloria (cal)": 4.184,
    "Quilocaloria (kcal)": 4184,
    "Watt-hora (Wh)": 3600,
    "Quilowatt-hora (kWh)": 3600000,
    "Elétron-volt (eV)": 1.602176634e-19
};
// Inverter unidades
document.getElementById("trocar").addEventListener("click", () => {

    const origem = document.getElementById("origem");
    const destino = document.getElementById("destino");

    const temp = origem.value;
    origem.value = destino.value;
    destino.value = temp;

});

// Converter
document.getElementById("converter").addEventListener("click", () => {

    const valor = parseFloat(document.getElementById("valor").value);

    if (isNaN(valor)) {
        document.getElementById("resultado").innerHTML =
            "Digite um valor válido.";
        return;
    }

    const origem = document.getElementById("origem").value;
    const destino = document.getElementById("destino").value;

    // Converte para Joule
    const emJoule = valor * fatores[origem];

    // Converte para a unidade desejada
    const resultado = emJoule / fatores[destino];

    document.getElementById("resultado").innerHTML =
        `${valor} ${origem}<br>=<br><strong>${resultado.toLocaleString('pt-BR', {
            maximumFractionDigits: 8
        })} ${destino}</strong>`;

});