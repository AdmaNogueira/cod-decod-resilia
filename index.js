/* Base64 */
function codificarBase64(){
    var entradaMensagem = document.getElementById('mensagem').value;
    var codificado = btoa(entradaMensagem)
    // console.log(codificado)
    document.getElementById("resultado").value = codificado;
    return;
}

/* Base64 */
function decodificarBase64(){
    var entradaMensagem = document.getElementById('mensagem').value;
    var decodificado = atob(entradaMensagem)
    // console.log(decodificado)
    document.getElementById("resultado").value = decodificado;
    return;
}


//fazer a cifra de cesar [x]
//fazer os botoes funcionarem [ ]
//ocultar os botoes e campos solicitados no trabalho [ ]
function capturaCamposCifra(){
    let mensagem = document.getElementById('mensagem').value;
    let incremento = document.getElementById('incremento').value;
    //cifraCesar(mensagem,+incremento); // '-3' ao adicionar o + na frente da variavel força a ser número -> -3
    document.getElementById("resultado").value 
        = cifraCesar(mensagem,+incremento); // '-3' ao adicionar o + na frente da variavel força a ser número -> -3;

    return;
}

function cifraCesar(str, amount) {
    // Wrap the amount
    if (amount < 0) {
      return cifraCesar(str, amount + 26);
    }
  
    // Make an output variable
    var output = "";
  
    // Go through each character
    for (var i = 0; i < str.length; i++) {
      // Get the character we'll be appending
      var c = str[i];
  
      // If it's a letter...
      if (c.match(/[a-z]/i)) {
        // Get its code
        var code = str.charCodeAt(i);
  
        // Uppercase letters
        if (code >= 65 && code <= 90) {
          c = String.fromCharCode(((code - 65 + amount) % 26) + 65);
        }
  
        // Lowercase letters
        else if (code >= 97 && code <= 122) {
          c = String.fromCharCode(((code - 97 + amount) % 26) + 97);
        }
      }
  
      // Append
      output += c;
    }
  
    // All done!
    return output;
  };
