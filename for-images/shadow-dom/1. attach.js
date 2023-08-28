class MyElement extends HTMLElement {
    connectedCallback() {
        this._shadow = this.attachShadow({mode: 'open'});

        const p = document.createElement('p');
        p.innerHTML = "Контент в теневом доме";
        this._shadow.append(p);
    }
}

customElements.define('my-element', MyElement);


const element = document.getElementsByTagName('my-element')[0];
console.log(element.shadowRoot); // #shadow-root (open)


const element = document.getElementsByTagName('my-element')[0];
console.log(element.shadowRoot); // null
