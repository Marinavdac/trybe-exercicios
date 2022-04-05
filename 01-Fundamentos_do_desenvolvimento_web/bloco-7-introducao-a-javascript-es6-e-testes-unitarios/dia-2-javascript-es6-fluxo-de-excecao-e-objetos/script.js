function sum() {
  try {
    const value1 = document.getElementById("value1").value;
    const value2 = document.getElementById("value2").value;
    let result = parseInt(value1) + parseInt(value2);

    if (isNaN(result)) {
      throw new Error("Por favor digite dois números válidos");
    }

    document.getElementById("result").innerHTML = `Resultado: ${result}`;
  } catch (error) {
    result.innerHTML = `${error.message}`;
  } finally {
    document.getElementById("value1").value = "";
      document.getElementById("value2").value = "";
     
  }
}
const button = document.getElementById("button");

button.addEventListener("click", sum);

// Aparentemente está tudo funcionando, mas a aplicação não possui fluxo de exceção. Ou seja, caso ocorra um erro, eles não serão tratados. Que tal resolver isso?
// 1 - Crie um erro personalizado que será chamado se a pessoa usuária digitar apenas um número.

//     Tente executar a aplicação com um dos valores em branco. Notou que o retorno não é muito descritivo?
//     Utilize o throw new Error e o bloco try/catch .
//     Imprima o erro no parágrafo com id result , para que a pessoa usuária saiba o que aconteceu. Lembre-se de usar erros descritivos!
//     Evite funções que tenham muitas responsabilidades distintas.

// 2 - Agora adicione uma outra exceção, caso a pessoa usuária digite um valor que não seja numérico.

//     Você pode fazer essa verificação utilizando a função isNan() .

// 3 - Você se lembrou de limpar os inputs após o clique do botão? Teve que repetir código para isso? Que tal refatorar sua
//função utilizando o finally.
