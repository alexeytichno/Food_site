import {closeModal, openModal } from "./modal";
import {postData} from '../servises/servises';

// Forms
function forms( formSelector, modalTimerId) {
    const forms = document.querySelectorAll(formSelector);

    const message = {
        loading: 'img/form/spinner.svg',
        success: "done",
        failure: 'ERROR'
    };

    forms.forEach(i => {
        bindpostData(i);
    });



    function bindpostData(form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();

            const statusMessage = document.createElement('img');
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
            // form.append(statusMessage);
            form.insertAdjacentElement('afterend', statusMessage);

            
            // request.setRequestHeader('Content-type', 'application/json');
            // request.setRequestHeader('Content-type', 'multipart/form-data');// XMLHttpRequest заголовок устанавливается автоматом
            
            const formData = new FormData(form);
            
            const json = JSON.stringify(Object.fromEntries(formData.entries()));

            
            // request.send(json);
            postData("http://localhost:3000/requests", json)
            .then(data => {
                console.log(data);
                showThanksModal(message.success);
                statusMessage.remove();
            }).catch(() => {
                showThanksModal(message.failure);
            }).finally(() => {
                form.reset();
            });
        });
    }

    function showThanksModal(message) {
        const prevModalDialog = document.querySelector('.modal__dialog');
        
        prevModalDialog.classList.add('hide');
        openModal('.modal', modalTimerId);

        const thanksModal = document.createElement('div');
        thanksModal.classList.add(".modal__dialog") ;
        thanksModal.innerHTML = `
            <div class='modal__content'>
                <div class = 'modal__close' data-close>×</div>
                <div class="modal__title">${message}</div>
            </div>
        `;
        
        document.querySelector('.modal').append(thanksModal);
        setTimeout(() => {
            thanksModal.remove();
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');
            closeModal('.modal');
        }, 4000);
    }

    // fetch('https://jsonplaceholder.typicode.com/posts', {
    //     method: 'POST', 
    //     body: JSON.stringify({name: "Alex"}),
    //     headers: {
    //         'Content-type': 'application/json'
    //     }
    // })
    // .then(response => response.json())
    // .then(json => console.log(json));

    // fetch('db.json')
    //     .then(data => data.json())
    //     .then(res => console.log(res));
}

export default forms;
