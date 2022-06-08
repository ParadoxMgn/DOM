'use strict';

const body = document.body;
const blockBook = document.querySelectorAll('.book');
const linkBook3 = blockBook[4].querySelector('a');
const blockAdv = document.querySelector('.adv');
const listBook2 = blockBook[0].querySelectorAll('li');
const listBook5 = blockBook[5].querySelectorAll('li');
const listBook6 = blockBook[2].querySelectorAll('li');

blockBook[0].before(blockBook[1]);
blockBook[5].after(blockBook[2]);
blockBook[3].insertAdjacentElement('beforebegin', blockBook[4]);

body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';

linkBook3.innerText = 'Книга 3. this и Прототипы Объектов';

blockAdv.remove();

listBook2[9].insertAdjacentElement('afterend', listBook2[2]);
listBook2[9].insertAdjacentElement('beforebegin', listBook2[7]);
listBook2[3].insertAdjacentElement('afterend', listBook2[6]);
listBook2[3].nextElementSibling.insertAdjacentElement('afterend', listBook2[8]);

listBook5[3].before(listBook5[9]);
listBook5[4].after(listBook5[2]);
listBook5[7].after(listBook5[5]);

listBook6[8].insertAdjacentHTML('afterend', '<li>Глава 8: За пределами ES6</li>');