const modal = document.querySelector(".modal");
const overlay = document.querySelector(".modal__fade");
const data = document.querySelector(".modal__text");

const addListener = (elem) => {
  elem.addEventListener('click', (e) => {
    e.preventDefault();
    const linkId = e.target.id;
    const dataId = `#data_${linkId}`;
    const result = document.querySelector(dataId);
    modal.classList.add("modal--opened");
    data.textContent = result.textContent
  });

  overlay.addEventListener("click", function () {
    modal.classList.remove("modal--opened");
  })
}

const links = [...document.querySelectorAll('.link')];

links.forEach(link => addListener(link));



