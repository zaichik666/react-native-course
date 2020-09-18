
// - Add or remove class from an element
// - Attach or detach an event handler

// При нажатии на первую книгу с id "firstBook" она будет выделяться.
// класс "active" будет добавляться и исчезать.

document.querySelector("#firstBook").addEventListener("click", function () {
    document.getElementById("firstBook").classList.toggle("active");
});


// - Create an element
// - Detect the dark mode

// Узнаем, какую тему предпочитаем пользователь и если dark то включаем ее.
// Создала текстовый элемент.
// При нажатии на него должна меняться тема.

const userLikeDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if(userLikeDark){
  document.body.classList.add("dark-mode");
}

let textElement = document.createElement('div');
textElement.className = "darkMode";
textElement.innerHTML = "Нажми сюда и <br><strong>тема изменится</strong> ";
document.body.prepend(textElement);

document.querySelector(".darkMode").addEventListener("click", function() {
document.body.classList.toggle("dark-mode")
} );


// - Scroll to top of the page
// Сделала прокрутку не вверх, а вниз при нажатии на лупу до определенного элемента. Так вижу, как это работает)

document.querySelector("#icon-search").addEventListener("click", function () {
    const scroll = document.getElementById('sixth-book');
    scroll.scrollIntoView({behavior: "smooth"})
})