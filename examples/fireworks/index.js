class FireworksButton extends HTMLButtonElement {
    constructor() {
        super();

        this.addEventListener('click', this.startFirework);
    }

    startFirework() {
        const canvas = document.createElement('canvas');
        canvas.setAttribute('id', 'fireworks-canvas');
        canvas.setAttribute('width', window.innerWidth.toString())
        canvas.setAttribute('height', window.innerHeight.toString())

        document.body.appendChild(canvas);

        getFirework().start();

        setTimeout(() => {
            canvas.remove()
        }, 5000)
    }
}

customElements.define('fireworks-button', FireworksButton, {extends: 'button'});
