class MyElement extends HTMLElement {
    connectedCallback() {
        this._shadow = this.attachShadow({mode: 'closed'});

        const button = document.createElement('button');
        button.innerHTML = "Кнопка в теневом доме";
        this._shadow.append(button);
    }
}

customElements.define('my-element', MyElement);
