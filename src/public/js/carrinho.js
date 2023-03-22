const button = document.querySelectorAll('[data-button]')
const quantity = document.querySelector('[data-quantity]')
const precoProduto = document.querySelector('body > main > div > div.product > div.product-info > section.bottom-section > span')

console.log(precoProduto)

//*preco produto para multiplicar com a quantidade na função addQuantity
let precoBase = precoProduto.innerText
let precoBaseFormatado = precoBase.replace('.', '')
let precoBaseFormatado2 = precoBaseFormatado.replace(',', '.')
let precoBaseFormatado3 = precoBaseFormatado2.replace('R$ ', '')
let precoBaseFinal = precoBaseFormatado3 / Number(quantity.value)

precoBaseFinal = Number(precoBaseFinal)

let precoFinal



button.forEach(element => {
    element.addEventListener('click', (e) => {
        addQuantity(e.target.dataset.button)
    })
})

function addQuantity(operacao) {

    if (operacao === "+") {
        quantity.value = Number(quantity.value) + 1;
        precoFinal = Number(quantity.value) * Number(precoBaseFinal)
        let precoConvertido = precoFinal.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
        precoProduto.innerText = `R$ ${precoConvertido}`


    } else if (quantity.value <= 1) {
        quantity.value = 1
    } else {
        quantity.value = Number(quantity.value) - 1;
        let precoFinalReduzido = precoFinal - precoBaseFinal
        precoFinal = precoFinalReduzido
        precoConvertido = precoFinal.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
        precoProduto.innerText = `R$ ${precoConvertido}`
    }
}

