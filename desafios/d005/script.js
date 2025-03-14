function verificar () {
    let salario = document.getElementById('sal1')
    let res = document.querySelector('div#res')
    if (salario.value.length == 0 || salario.value < 0) {
        alert('Por favor preencha os dados corretamente!')
    } else {
        let s = Number(salario.value).toLocaleString('pt-BR', {style:'currency', currency: 'BRL'})
        let e = 2500
        res.innerHTML = ''

        if (s <= e.toLocaleString('pt-BR', {style:'currency', currency: 'BRL'})) {
            res.innerHTML = `Seu salário é de ${s}.Infelizmente não é possível fazer o empréstimo!`
        } else {
            res.innerHTML = `Seu salário é de ${s}.É possível realizar o empréstimo!`
        }
    } 
}