
function count() {
    let start = document.getElementById('start')
    let end = document.getElementById('end')
    let step = document.getElementById('step')
    let res = document.querySelector('div#res')
    if (start.value.length == 0 || end.value.length == 0 || step.value.length == 0 ) {
        alert(' [ERRO] Preencha os dados correntamente!')
        res.innerHTML = 'Impossível contar!!'
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(start.value)
        let e = Number(end.value)
        let s = Number(step.value)
        if (s <= 0) {
            alert('Passo inválido! Considerando Passo 1.')
            s = 1
        }
        if (i < e) {
            //contagem crescente
            for (let c = i; c <= e ; c += s) {
                res.innerHTML += `${c} `
            }
        } else {
            //contagem decrescente
            for ( let c = i; c >= e ; c -= s) {
                res.innerHTML += `${c} `
            }
        }
        
    }
}