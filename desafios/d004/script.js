function tabuada() {
    let number = document.getElementById('number1')
    let res = document.querySelector('select#t1')
    if (number.value.length == 0) {
        alert('Por favor preencha os dados corretamente!')
    } else {
        let n1 = Number(number.value)
        res.innerHTML = ''

        for (let t = 1 ; t <= 10 ; t++) {
            let option = document.createElement('option')
            option.text = `${n1} x ${t} = ${n1 * t}`
            option.value = `tab${t}`
            res.appendChild(option)
        }
    }
}