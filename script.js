function handleCheckbox(checkboxId) {
    var p1p2Checkbox = document.getElementById('p1p2');
    var apenasUmaCheckbox = document.getElementById('apenasUma');
    var p1p2Inputs = document.getElementById('p1p2Inputs');
    var apenasUmaInput = document.getElementById('apenasUmaInput');
    var resultadoDiv = document.getElementById('resultado');
    var body = document.body;

    // Limpar os inputs e as mensagens
    document.getElementById('notaP1').value = '';
    document.getElementById('notaP2').value = '';
    document.getElementById('notaProva').value = '';
    resultadoDiv.innerHTML = '';
    body.className = '';

    if (checkboxId === 'p1p2' && p1p2Checkbox.checked) {
        apenasUmaCheckbox.checked = false;
        p1p2Inputs.style.display = 'block';
        apenasUmaInput.style.display = 'none';
    } else if (checkboxId === 'apenasUma' && apenasUmaCheckbox.checked) {
        p1p2Checkbox.checked = false;
        p1p2Inputs.style.display = 'none';
        apenasUmaInput.style.display = 'block';
    } else {
        p1p2Inputs.style.display = 'none';
        apenasUmaInput.style.display = 'none';
    }
}

function verificarNota(input) {
    var nota = parseFloat(input.value);
    var notaError = document.getElementById(input.id + "Message");

    if (nota < 0 || nota > 10) {
        notaError.innerText = "A nota deve estar entre 0.0 e 10.0";
        notaError.style.color = "red";
        input.style.borderColor = "red";
        input.value = "";
        setTimeout(function () {
            notaError.innerText = "";
            input.style.borderColor = "";
        }, 2500);
    } else {
        notaError.innerText = "";
        input.style.borderColor = "";
    }
}

function calcularMedia() {
    var notaP1 = parseFloat(document.getElementById('notaP1').value);
    var notaP2 = parseFloat(document.getElementById('notaP2').value);
    var notaProva = parseFloat(document.getElementById('notaProva').value);
    var resultadoDiv = document.getElementById('resultado');
    var body = document.body;

    // Limpar qualquer classe de cor do background
    body.className = '';

    if (!isNaN(notaP1) && !isNaN(notaP2)) {
        if (notaP1 >= 0 && notaP1 <= 10 && notaP2 >= 0 && notaP2 <= 10) {
            var media = (notaP1 + notaP2) / 2;
            resultadoDiv.innerHTML = `Média: ${media.toFixed(2)}<br>`;
            if (media >= 7) {
                resultadoDiv.innerHTML += 'Aprovado';
                body.className = 'aprovado';
            } else if (media < 4) {
                resultadoDiv.innerHTML += 'Reprovado';
                body.className = 'reprovado';
            } else {
                resultadoDiv.innerHTML += 'Prova Final<br>';
                resultadoDiv.innerHTML += `Nota necessária na Prova Final: ${(10 - media).toFixed(2)}`;
                body.className = 'prova-final';
            }
        } else {
            resultadoDiv.innerHTML = 'As notas devem estar entre 0.0 e 10.0';
        }
    } else if (!isNaN(notaProva)) {
        if (notaProva >= 0 && notaProva <= 10) {
            var notaNecessaria = 14 - notaProva;
            if (notaNecessaria > 10) {
                body.className = 'prova-final'; // Altera para amarelo se a nota da prova for maior que 10
            }
            resultadoDiv.innerHTML = `Nota necessária na Pr ou na P2: ${notaNecessaria.toFixed(2)}`;
        } else {
            resultadoDiv.innerHTML = 'A nota deve estar entre 0.0 e 10.0';
        }
    } else {
        resultadoDiv.innerHTML = 'Por favor, preencha as notas';
    }
}

function limparInputs() {
    document.getElementById('notaP1').value = '';
    document.getElementById('notaP2').value = '';
    document.getElementById('notaProva').value = '';
    document.getElementById('resultado').innerHTML = '';
    document.body.className = ''; // Remover qualquer classe de cor do background ao limpar os inputs
}
