class CustomNavigation extends HTMLElement {
    _links = [
        {label: "With Label", url: '/web-components/examples/with-label'},
        {label: "Fireworks", url: '/web-components/examples/fireworks'},
        {label: "Shadow DOM", url: '/web-components/examples/shadow'},
        {label: "Slot", url: '/web-components/examples/slot'},
        {label: "Slot characteristics", url: '/web-components/examples/slot-characteristic'},
    ];

    connectedCallback() {
        const style = document.createElement("style");
        style.innerHTML = `
            nav {
                display: flex;
                flex-wrap: wrap;
                row-gap: 1rem;
                background: lightgray;
                border-radius: 0.25rem;
                padding-block: 0.25rem;
                margin-bottom: 2rem;
            }
            
            nav a {
                text-decoration: none;
                font-size: 18px;
                color: black;
                text-transform: uppercase;
                padding-inline: 1rem;
            }
            
            nav a:not(:last-child) {
                border-right: 1px solid black;
            }
        `

        this.prepend(style);

        this._links.forEach((link) => {
            const a = document.createElement('a');
            a.setAttribute('href', `${link.url}/index.html${location.search}`);
            a.innerHTML = link.label;

            this.append(a);
        })
    }
}

customElements.define('custom-navigation', CustomNavigation, {extends: 'nav'})
