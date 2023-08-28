class MyElement extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
    }

    disconnectedCallback() {
    }

    static get observedAttributes() {
        return [/* массив имён атрибутов */];
    }

    attributeChangedCallback(name, oldValue, newValue) {
    }

    adoptedCallback() {
    }

    method1() {
    }

    method2() {
    }

    method3() {
    }
}

customElements.define('my-element', MyElement);

//1
<my-element></my-element>

//2
const myElement = document.createElement('my-element');
document.body.append(myElement);

//3
const myElement = new MyElement();
document.body.append(myElement);
