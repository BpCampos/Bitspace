const button = document.querySelectorAll('[data-button]')
const quantity = document.querySelector('[data-quantity]')




button.forEach(element => {
    element.addEventListener('click', (e) => {
        console.log(e.target)
        addQuantity(e.target.dataset.button)
    })
})

function addQuantity(operacao) {
    if (operacao === "+") {
        quantity.value = parseInt(quantity.value) + 1;
    } else if (quantity.value <= 0) {
        quantity.value = 0
    } else {
        quantity.value = parseInt(quantity.value) - 1;
    }
}