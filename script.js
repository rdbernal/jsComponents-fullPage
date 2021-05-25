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

//TAB NAVIGATION

function activeTabMenu() {
  const tabItems = document.querySelectorAll(".js-tab__items li");
  const tabContents = document.querySelectorAll(".js-tab__contents li");

  if (tabItems.length && tabContents.length) {
    tabContents[0].classList.add("activeContent");

    function showTabContent(index) {
      tabContents.forEach((item) => {
        item.classList.remove("activeContent");
      });
      tabContents[index].classList.add("activeContent");
    }

    tabItems.forEach((item, index) => {
      item.addEventListener("click", () => {
        showTabContent(index);
      });
    });
  }
}

activeTabMenu();
