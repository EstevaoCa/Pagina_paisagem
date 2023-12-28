
  document.addEventListener('DOMContentLoaded', function () {
    const hero = document.querySelector('.hero');
    let indiceAtualImagem = 0;
    const imagens = ['Paisagen.jpg', 'Paisagen2.jpg','Paisagen3.jpg','Paisagen4.jpg','Paisagen5.jpg',];

    function mudarImagemFundo(direcao) {
      if (direcao === 'direita') {
        indiceAtualImagem = (indiceAtualImagem + 1) % imagens.length;
      } else if (direcao === 'esquerda') {
        indiceAtualImagem =
          (indiceAtualImagem - 1 + imagens.length) % imagens.length;
      }

      const urlImagem = `url(${imagens[indiceAtualImagem]})`;
      hero.style.backgroundImage = `linear-gradient(rgba(4, 9, 30, 0.3), rgba(4, 9, 30, 0.9)), ${urlImagem}`;
    }

    function definirImagemFundoInicial() {
      mudarImagemFundo('direita'); // Escolha a direção desejada para a imagem inicial
    }

    definirImagemFundoInicial(); // Chame a função para definir a imagem inicial

    let touchStartX = 0;
    let touchEndX = 0;

    hero.addEventListener('touchstart', function (e) {
      touchStartX = e.touches[0].clientX;
    });

    hero.addEventListener('touchend', function (e) {
      touchEndX = e.changedTouches[0].clientX;
      const distanciaDeslize = touchEndX - touchStartX;

      if (distanciaDeslize > 50) {
        // Deslizar para a direita
        mudarImagemFundo('direita');
      } else if (distanciaDeslize < -50) {
        // Deslizar para a esquerda
        mudarImagemFundo('esquerda');
      }
    });
  });
