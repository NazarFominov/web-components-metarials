class MyElement extends HTMLElement {
    connectedCallback() {
        this._shadow = this.attachShadow({mode: 'open'});

        const button = document.createElement('button');
        button.innerHTML = "Кнопка в теневом доме";
        this._shadow.append(button);


        const slot = document.createElement('slot');
        slot.setAttribute('name', 'button');
        this._shadow.prepend(slot);

    }
}

customElements.define('my-element', MyElement);
