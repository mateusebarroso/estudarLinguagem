const element = document.querySelector('#text1');

    const frases = ["Desenvolvimento Web"]
   
    let fraseIndex = 0;
    let charIndex = 0;
    let apagando = false;

    function digitar() {
      const fraseAtual = frases[fraseIndex];

      if (!apagando) {
        element.textContent = fraseAtual.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === fraseAtual.length) {
          apagando = true;
          setTimeout(digitar, 1200); // pausa antes de apagar
          return;
        }
      } else {
        element.textContent = fraseAtual.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
          apagando = false;
          fraseIndex = (fraseIndex + 1) % frases.length;
        }
      }

      setTimeout(digitar, apagando ? 50 : 100);
    }

    digitar();