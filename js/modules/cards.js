import {getResourses} from '../servises/servises';

function cards() {
    
    class MenuCard {
        constructor(src, alt, title, descr, price, parentSelector, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
            this.transfer = 27;
            this.changeToUAH();
        }

        changeToUAH() {
            this.price = this.price * this.transfer;
        }

        render() {
            let menuItem = document.createElement('div');

            if (this.classes.length === 0) {
                this.element = 'menu__item';
                menuItem.classList.add(this.element);
            } else {
                this.classes.forEach(className => menuItem.classList.add(className));

            }

            menuItem.innerHTML = `
        
                <img src=${this.src} alt=${this.altimg}>
                <h3 class="menu__item-subtitle">Меню ${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                <div class="menu__item-cost">Цена:</div>
                <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                `;

            this.parent.append(menuItem);
        }

    }

        

        getResourses('http://localhost:3000/menu')
            .then(data => {
                data.forEach(({img, altimg, title, descr, price}) => {
                    new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
                });
            });
        
        // getResourses('http://localhost:3000/menu')  
        //     .then(data => createCard(data));
            
        // function createCard(data) {
        //     data.forEach(({img, altimg, title, descr, price, transfer = 27}) => {
        //         const element = document.createElement('div');
        //         price = price * transfer;

        //         element.classList.add('menu__item');

        //         element.innerHTML = `
        //         <img src=${img} alt=${altimg}>
        //         <h3 class="menu__item-subtitle">Меню ${title}</h3>
        //         <div class="menu__item-descr">${descr}</div>
        //         <div class="menu__item-divider"></div>
        //         <div class="menu__item-price">
        //         <div class="menu__item-cost">Цена:</div>
        //         <div class="menu__item-total"><span>${price}</span> грн/день</div>
        //         `;

        //         document.querySelector('.menu .container').append(element);
        //     });
        // }

        // axios.get('http://localhost:3000/menu')
        //     .then(info => {
        //         info.data.forEach(({img, altimg, title, descr, price}) => {
        //             new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
        //         });
        //     });
    
}

export default cards;
