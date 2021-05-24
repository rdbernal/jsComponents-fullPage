//NIGHT MODE
function activeNightMode() {
  const outsideButton = document.querySelector(".js-outside__button");
  const insideButton = document.querySelector(".js-inside__button");
  const container = document.querySelector(".nightMode__container");

  function nightMode() {
    insideButton.classList.toggle("darkActive");
    container.classList.toggle("dark");
  }

  outsideButton.addEventListener("click", nightMode);
}

activeNightMode();

//BURGER-MENU

function activeBurgerMenu() {
  const menuButton = document.querySelector(".js-burger__menu");
  const lines = document.querySelectorAll(".line");

  function burgerMenu() {
    lines.forEach((item) => {
      item.classList.toggle("activeMenu");
    });
  }

  menuButton.addEventListener("click", burgerMenu);
}

activeBurgerMenu();
