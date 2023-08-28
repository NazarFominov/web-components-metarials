class WithLabel extends HTMLElement {
    _input = null;

    connectedCallback() {
        const label = document.createElement('label');
        label.innerHTML = this.getAttribute('label');

        this.prepend(label);

        const type = this.getAttribute('type');
        if (type === 'input') this.initInput();
        else this.classList.add('with-value');
    }

    initInput() {
        this._input = this.getElementsByTagName('input')[0];
        if (this._input) {
            this._input.onfocus = () => this.classList.add('with-value');
            this._input.onblur = () => this.classList.remove('with-value');
        }
    }
}

customElements.define('with-label', WithLabel);
