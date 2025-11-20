function calcularJuros() {
    const valor = parseFloat(document.getElementById('value').value);
    const taxa = parseFloat(document.getElementById('fee').value) / 100;
    const tempo = parseFloat(document.getElementById('time').value);

    if (isNaN(valor) || isNaN(taxa) || isNaN(tempo)) {
        alert("Por favor, preencha todos os campos com números válidos");
        return;
    }

    const total = valor * Math.pow(1 + taxa, tempo);
    document.getElementById('total').textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
}

document.getElementById('calculate').addEventListener('click', calcularJuros);