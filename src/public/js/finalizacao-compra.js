const finalPrice = document.querySelector('.finalPrice')
const installment = document.getElementById('installment')



let precoBase = finalPrice.innerText
let precoFormatado = precoBase.replace('.', '')
let precoFormatado2 = precoFormatado.replace(',', '.')
let precoFormatado3 = precoFormatado2.replace('R$ ', '')
let standardPrice = (precoFormatado3 * Number(installment.value)) / Number(installment.value)

console.log(Number(installment.value))

installment.addEventListener('change', () => {

    let modifiedPrice = standardPrice / Number(installment.value)
    finalPrice.textContent = `R$ ${modifiedPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`

})