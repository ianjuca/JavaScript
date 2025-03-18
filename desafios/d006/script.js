let values = []

function adicionar() {
    let num = document.getElementById('number1')
    let added = document.querySelector('select#values1')
    let n1 = Number(num.value)
    let res = document.querySelector('div#res')

    if (num.value.length == 0 || n1 < 1 || n1 > 100 || values.includes(n1)) {
        alert('Valor inválido ou já preenchido!')
    } else {
        values.push(n1)
        res.innerHTML = ''

        let option = document.createElement('option')
        option.text = `Valor ${n1} adicionado.`
        option.value = `num${n1}`
        added.appendChild(option)
    }
    num.value = ""
    num.focus()
}

function finalizar() {
    let res = document.querySelector('div#res')

    if (values.length === 0) {
        res.innerHTML = "Adicione valores antes de finalizar!"
        return
    }

    values.sort((a, b) => a - b) // Ordena os valores em ordem crescente

    let total = values.length
    let maior = values[values.length - 1]
    let menor = values[0]
    let soma = values.reduce((a, b) => a + b, 0) // Soma os valores
    let media = soma / total // Calcula a média

    res.innerHTML = `Ao todo, temos ${total} números cadastrados. <br>`
    res.innerHTML += `O maior valor informado foi ${maior}. <br>`
    res.innerHTML += `O menor valor informado foi ${menor}. <br>`
    res.innerHTML += `Somando todos os valores, temos ${soma}. <br>`
    res.innerHTML += `A média dos valores digitados é ${media.toFixed(2)}. <br>`
}