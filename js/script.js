
import 'nodelist-foreach-polyfill';

import tabs from'./modules/tabs';
import modal from './modules/modal';
import timer from './modules/timer';
import cards from './modules/cards';
import calc from'./modules/calc';
import slider from'./modules/slider';
import forms from'./modules/forms';
import {openModal} from './modules/modal';

window.addEventListener("DOMContentLoaded", () => {

    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 50000);

    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    modal('[data-modal]', '.modal', modalTimerId);
    timer('.timer', '2022-03-18');
    cards();
    calc();
    slider({
        container: '.offer__slider', 
        slide: '.offer__slide',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        totalCounter: '.offer__slider-counter #total',
        currentCounter: '.offer__slider-counter #current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-innner'
    });
    forms('form', modalTimerId);
});
    





