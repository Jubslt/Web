const menuToggle = document.getElementById('menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});

function redirecionaria() {
    window.open("https://github.com/Jubslt/Arduino", "_blank")
}

function redirecionarbd() {
    window.open("https://github.com/Jubslt/Banco-de-Dados", "_blank")
}

function redirecionarcd() {
    window.open("https://colab.research.google.com/drive/1tmqj6CWaHN5HI_WWx-d35BEkmOOA4nJV", "_blank")
}