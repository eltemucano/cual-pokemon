$(document).ready(function () {
  for (let i = 1; i < 152; i++) {
    $("#pokemon").append(
      `<img  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${i}.png" 
      class="img-thumbnail m-1" / id=${i}>`
    );
  }

  $("img").on("click", function () {
    const id_foto = $(this).attr("id");
    $.get(`https://pokeapi.co/api/v2/pokemon/${id_foto}`, function (dato) {
      $("#nombre").html(PrimeraMayuscula(dato.name));
      $(
        "#foto"
      ).html(`<img  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${id_foto}.png" 
      class="img-thumbnail magictime puffIn" />`);
      $("#tipo").html("Tipo : " + PrimeraMayuscula(dato.types[0].type.name));
      $("#alto").html("Alto : " + dato.height + " Metros");
      $("#peso").html("Peso : " + dato.weight + " Kilos");
    });
  });

  function PrimeraMayuscula(string) {
    // Retorna el primer caracter del texto convertido en mayúsculas
    let mayuscula = string.charAt(0).toUpperCase() + string.slice(1);
    return mayuscula;
  }
});
