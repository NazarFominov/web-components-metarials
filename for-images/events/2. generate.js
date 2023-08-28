const event = new Event('click', {
    bubbles: true,
    cancelable: true,
    composed: true
})

document.getElementById('button').dispatchEvent(event);


const mouseEvent = new MouseEvent('click', {
    bubbles: true,
    clientX: 100,
    clientY: 500
})


const customEvent = new CustomEvent('generatecode', {
    bubbles: true,
    composed: true,
    detail: {type: 'barCode'}
})
