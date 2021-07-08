/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

// const adv = document.querySelector('.promo__adv');
const adv = document.querySelectorAll('.promo__adv img');
const poster = document.querySelector('.promo__bg');
const genre = poster.querySelector('.promo__genre');
const movieList = document.querySelector('.promo__interactive-list');

// adv.remove();
adv.forEach(item => {
    item.remove();
});

genre.textContent = 'драма';

poster.style.cssText = 'background-image: url("img/bg.jpg");';

movieList.innerHTML = '';

const resultFilmList = movieDB.movies.sort();

resultFilmList.forEach((film, i) => {
    movieList.innerHTML  += `<li class="promo__interactive-item">
        ${i + 1}: ${film}
        <div class="delete"></div>
    </li>`;

    // const newItem = document.createElement('li');
    // const deleteBlock = document.createElement('div');
    // const newItemText = `${i + 1}: ${film}`;

    // newItem.classList.add('promo__interactive-item');
    // deleteBlock.classList.add('delete');
    // newItem.append(newItemText);
    // newItem.append(deleteBlock);

    // movieList.append(newItem);
});





