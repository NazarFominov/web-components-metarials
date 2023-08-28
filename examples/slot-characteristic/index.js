class UserCard extends HTMLElement {
    connectedCallback() {
        this._shadow = this.attachShadow({mode: 'open'});

        this._shadow.append(document.getElementById('template').content.cloneNode(true))


        this._shadow.querySelector('.card').addEventListener('slotchange', e=>console.log(e.target.name))

    }
}

setTimeout(() => {
    document.getElementsByTagName('user-card')[0].insertAdjacentHTML('beforeEnd', '<li slot="favorite">Готовить</li>')
}, 2000);


customElements.define('user-card', UserCard);






































