const mensagens = [
      "Você é mais forte do que imagina.",
      "Cada passo te aproxima do seu objetivo.",
      "Não desista! O começo é sempre o mais difícil.",
      "Acredite: grandes coisas levam tempo.",
      "Sua determinação constrói seu sucesso."
    ];

    let indice = 0;

    function mostrarMensagem() {
      const elemento = document.getElementById("mensagem");
      alert(elemento.textContent = mensagens[indice]);

      indice++;
      if (indice >= mensagens.length) {
        indice = 0; // reinicia depois da última msg exibida
      }
    }