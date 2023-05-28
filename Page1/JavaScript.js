
//Наши Плюсы
const siblings = el => [].slice.call(el.parentNode.children).filter(child => (child !== el));
document.addEventListener('DOMContentLoaded', () => {

    const siblings = el => [].slice.call(el.parentNode.children).filter(child => (child !== el)); // объявляем функцию, которая будет возвращать соседние элементы
  
    const cards = document.querySelectorAll('.card') // получаем все карточки
  
    cards.forEach(card => { // для каждой карточки
      card.addEventListener('mouseenter', () => { // при наведении на карточку
        siblings(card).forEach(el => { // для каждого соседнего элемента
          el.classList.add('card_sibling') // добавляем активный класс, который визуально ставит соседние карточки на задний план
        })
      })
      card.addEventListener('mouseleave', () => { // если убираем курсор с карточки
        siblings(card).forEach(el => { // для каждого соседнего элемента
          el.classList.remove('card_sibling') // удаляем активный класс
        })
      })
    })
  
  })
// Модальное окно

// Открыть модальное окно
document.getElementById("open-modal-btn").addEventListener("click", function() {
  document.getElementById("my-modal").classList.add("open")
})

document.getElementById("pasword").addEventListener("click", function() {
  document.getElementById("my-modal1").classList.add("open")
})

document.getElementById("pasword").addEventListener("click", function() {
  document.getElementById("my-modal").classList.remove("open")
})

// Закрыть модальное окно
document.getElementById("close-my-modal-btn").addEventListener("click", function() {
  document.getElementById("my-modal").classList.remove("open")
})
document.getElementById("close-my-modal-btn1").addEventListener("click", function() {
  document.getElementById("my-modal1").classList.remove("open")
})
// Закрыть модальное окно при нажатии на Esc
window.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
      document.getElementById("my-modal").classList.remove("open")
  }
});
window.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
      document.getElementById("my-modal1").classList.remove("open")
  }
});
// Закрыть модальное окно при клике вне его
document.querySelector("#my-modal .modal__box").addEventListener('click', event => {
  event._isClickWithInModal = true;
});
document.getElementById("my-modal").addEventListener('click', event => {
  if (event._isClickWithInModal) return;
  event.currentTarget.classList.remove('open');
});
document.querySelector("#my-modal1 .modal__box").addEventListener('click', event => {
  event._isClickWithInModal = true;
});
document.getElementById("my-modal1").addEventListener('click', event => {
  if (event._isClickWithInModal) return;
  event.currentTarget.classList.remove('open');
});

// Войти
