class MyElement extends HTMLElement {
    constructor() {
        super();

        this.addEventListener('updateshadow', this.updateShadow)
    }

    connectedCallback() {
        this._shadow = this.attachShadow({mode: 'closed'});

        const p = document.createElement('p');
        p.innerHTML = "Контент в теневом доме";
        this._shadow.append(p);
    }

    updateShadow(e) {
        this._shadow.getElementsByTagName('p')[0].innerHTML = e.detail;
    }
}


// Далее, когда необходимо
const updateShadowEvent = new CustomEvent(
    'updateshadow',
    { composed: true, detail: 'Новый контент' }
);

document.getElementsByTagName('my-element')[0].dispatchEvent(updateShadowEvent);
