function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.getElementById("txtano");
  var res = document.querySelector("div#res");
  if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert("[ERRO] Verifique os dados e tente novamente!");
  } else {
    var idade = ano - Number(fano.value);
    var genero_masculino = document.getElementById("masc");
    var genero_feminino = document.getElementById("fem");
    var img = document.createElement("img");
    img.setAttribute("id", "foto");

    if (genero_masculino.checked) {
      var genero = "Homem";
      if (idade >= 0 && idade < 10) {
        // criança
        img.setAttribute("src", "foto-bebe-m.png");
      } else if (idade < 21) {
        // jovem
        img.setAttribute("src", "foto-jovem-m.png");
      } else if (idade < 50) {
        // adulto
        img.setAttribute("src", "foto-adulto-m.png");
      } else {
        // idoso
        img.setAttribute("src", "foto-idoso-m.png");
      }
    } else if (genero_feminino.checked) {
      var genero = "Mulher";
      if (idade >= 0 && idade < 10) {
        // criança
        img.setAttribute("src", "foto-bebe-f.png");
      } else if (idade < 21) {
        // jovem
        img.setAttribute("src", "foto-jovem-f.png");
      } else if (idade < 50) {
        // adulto
        img.setAttribute("src", "foto-adulto-f.png");
      } else {
        // idoso
        img.setAttribute("src", "foto-idoso-f.png");
      }
    }
    res.style.textAlign = "Center";
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`;
    res.appendChild(img);
  }
}
