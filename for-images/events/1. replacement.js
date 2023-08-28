class MyElement extends HTMLElement {
    connectedCallback() {
        this._shadow = this.attachShadow({mode: 'open'});

        const button = document.createElement('button');
        button.innerHTML = "Кнопка в теневом доме";
        button.addEventListener('click', (e) => console.log('Внутренний обработчик:', e.target))

        this._shadow.append(button);
    }
}

customElements.define('my-element', MyElement);

window.addEventListener('click', (e) => console.log('Внешний обработчик:', e.target))
