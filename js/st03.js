function calcularGorjeta() {
    // Obter os valores inseridos pelo usuário

    let nomeGarcom = document.getElementById("garcom").value;
    let numeroMesa = document.getElementById("mesa").value;
    let numeroComanda = document.getElementById("comanda").value;
    let valorTotal = parseFloat(document.getElementById("valorTotal").value);

    // Calcular a gorjeta (por exemplo, 10% do valor total)
    let gorjeta = valorTotal * 0.10; // 10% (você pode ajustar essa porcentagem)
    localStorage.setItem("garcom",nomeGarcom)
    localStorage.setItem("mesa",numeroMesa)
    localStorage.setItem("comanda",numeroComanda)
    localStorage.setItem("valorTotal",valorTotal)
    localStorage.setItem("gorjeta",gorjeta)
    // Exibir o resultado na página
    
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `Garçom: ${nomeGarcom}<br>Mesa: ${numeroMesa}<br>Comanda: ${numeroComanda}<br>Gorjeta: R$ ${gorjeta.toFixed(2)}`;
}