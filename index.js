/* Base64 */
function codificarBase64() {
    var entradaMensagem = document.getElementById('mensagem').value;
    var codificado = btoa(entradaMensagem)
    // console.log(codificado)
    document.getElementById("resultado").value = codificado;
    return;
}

/* Base64 */
function decodificarBase64() {
    var entradaMensagem = document.getElementById('mensagem').value;
    var decodificado = atob(entradaMensagem)
    // console.log(decodificado)
    document.getElementById("resultado").value = decodificado;
    return;
}


//fazer a cifra de cesar [x]
//fazer os codificadores serem funcionais [x]
//fazer os botoes funcionarem [x]
//ocultar os botoes e campos solicitados no trabalho [ ]

function capturaCamposCifra() {
    let mensagem = document.getElementById('mensagem').value;
    let incremento = document.getElementById('incremento').value;
    //cifraCesar(mensagem,+incremento); // '-3' ao adicionar o + na frente da variavel força a ser número -> -3
    document.getElementById("resultado").value
        = cifraCesar(mensagem, +incremento);

    return;
}

function cifraCesar(str, amount) {
    // Fórmula alfabetário
    if (amount < 0) {
        return cifraCesar(str, amount + 26);
    }

    // Criando variável para o resultado
    var output = "";

    // Fórmula para os caracteres
    for (var i = 0; i < str.length; i++) {
        // Adicionando caracter
        var c = str[i];

        // Letras
        if (c.match(/[a-z]/i)) {
            // Fórmula
            var code = str.charCodeAt(i);

            // Letras Maiúsculas
            if (code >= 65 && code <= 90) {
                c = String.fromCharCode(((code - 65 + amount) % 26) + 65);
            }

            // Letras Minúsculas
            else if (code >= 97 && code <= 122) {
                c = String.fromCharCode(((code - 97 + amount) % 26) + 97);
            }
        }

        // Juntar
        output += c;
    }

    // Resultado
    return output;
};

submit.addEventListener('click', function (e) {
    e.preventDefault();
    let metodo = document.getElementById('metodo').value;
    let mensagem = document.getElementById('mensagem').value;
    let incremento = document.getElementById('incremento').value;
    let radioCodificar = document.getElementById('codificar');

    if (metodo == 'cifraDeCesar' && incremento == "") {
        alert('Informe o Incremento!');
        return;
    }

    if (radioCodificar.checked) {
        console.log('codificar');
        if (metodo == 'cifraDeCesar') {
            capturaCamposCifra();
        } else {
            codificarBase64();
        }
    } else {
        console.log('decode');
        if (metodo == 'cifraDeCesar') {
            var aux = document.getElementById('incremento').value;
            document.getElementById('incremento').value = -Math.abs(+aux);
            capturaCamposCifra();
        } else {
            decodificarBase64();
        }
    }
})
