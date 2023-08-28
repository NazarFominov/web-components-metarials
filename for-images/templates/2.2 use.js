class MyElement extends HTMLElement {
    connectedCallback() {
        const template = document.getElementById('template');
        const content = template.content;
        const cloned = content.cloneNode(true);

        this.append(cloned);

        // или просто
        // this.append(document.getElementById('template').content.cloneNode(true));
    }
}

customElements.define('my-element', MyElement);
