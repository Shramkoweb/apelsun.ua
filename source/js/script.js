//Открытие модального окна.

var link = document.querySelectorAll(".js-modal");

if (link.length > 0) {
  var modal = document.querySelector(".modal");
  var overlay = document.querySelector(".modal__fade");

  for (var i = 0; i < link.length; i++) {
    link[i].addEventListener("click", function () {
      modal.classList.add("modal--opened");
    })
  };

  overlay.addEventListener("click", function () {
    modal.classList.remove("modal--opened");
  })
};
