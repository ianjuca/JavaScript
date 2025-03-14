function verify() {
    var ano = document.getElementById('age1')
    var res = document.querySelector('div#res')
    var age = new Date().getFullYear() - Number(ano.value)
    var fsex = document.getElementsByName('sex')
    var gender = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if (ano.value === "" || Number(ano.value) > new Date().getFullYear() || age < 0 || age > 120) {
        alert('Preencha os dados corretamente!')
        return
    }
      
     if (fsex[0].checked) {
        gender = 'Homem'
        if (age >= 0 && age <= 4) {
            img.setAttribute('src', '../imagens/baby-boy.jpg')
        } else if (age < 12) {
            img.setAttribute('src','../imagens/kid-boy.jpg')
        } else if (age < 18) {
            img.setAttribute('src', '../imagens/young-boy.jpg')
        } else if (age < 50) {
            img.setAttribute('src','../imagens/adult-boy.jpg')
        } else {
            img.setAttribute('src','../imagens/old-boy.jpg')
        }
    } else if (fsex[1].checked) {
        gender = 'Mulher'
        if (age >=0 && age <=4) {
            img.setAttribute('src','../imagens/baby-girl.jpg')
        } else if (age < 12) {
            img.setAttribute('src','../imagens/kid-lady.jpg')
        } else if (age < 18) {
            img.setAttribute('src','../imagens/young-lady.jpg')
        } else if (age < 50) {
            img.setAttribute('src','../imagens/adult-lady.jpg')
        } else {
            img.setAttribute('src','../imagens/old-lady.jpg')
        }
    } 
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${gender} com ${age} anos.`
    res.appendChild(img)
}