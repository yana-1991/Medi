//Slider


// Получаем элементы слайдера
const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slides = Array.from(slider.querySelectorAll('img'));
const slideCount = slides.length;
let slideIndex = 0;

// Устанавливаем обработчики событий для кнопок
prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

// Функция для показа предыдущего слайда
function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
}

// Функция для показа следующего слайда
function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}

// Функция для обновления отображения слайдера
function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

// Инициализация слайдера
updateSlider();



//Accordion
function openLink(evt, tabName) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();


//cards


function showMore() {
    let card = document.getElementById("card");
    let btn = document.getElementById("btn-1");

    if (card.style.display === "none") {
        document.getElementById('card').style.display='block';
        btn.innerHTML = "Скрыть"
    }
    else {
        document.getElementById('card').style.display='none';
        btn.innerHTML = "Как проехать?";
}
}

function showCard() {
    let card = document.getElementById("card2");
    let btn = document.getElementById("btn-2");

    if (card.style.display === "none") {
        document.getElementById('card2').style.display='block';
        btn.innerHTML = "Скрыть"
    }
    else {
        document.getElementById('card2').style.display='none';
        btn.innerHTML = "Как проехать?";
}
}


//



