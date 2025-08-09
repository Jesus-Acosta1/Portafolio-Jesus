// Recorre el DOM y busca los anchors del navbar
const anchors = document.querySelectorAll(
  '.menu-burguer .menu .link-movile '
);

// Recorre el DOM y buscamos el boton del navbar
const buttonNavbar = document.querySelector('.menu-burguer .menu-toggle');

// Usando los anchors que encontramos previamente, recorremos y le agregamos un evento click a cada uno
anchors.forEach((a) => {
  a.addEventListener('click', function () {
    buttonNavbar.click(); // le indico que tiene que hacer click sobre el buttonNavbar
  });
});



// const anchors1 = document.querySelectorAll(
//   ' .logo '
// );
// anchors1.forEach((a) => {
//   a.addEventListener('click', function () {
//     buttonNavbar.click(); // le indico que tiene que hacer click sobre el buttonNavbar
//   });
// });
