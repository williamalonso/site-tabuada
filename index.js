function calcula() {
    let num = window.document.querySelector('input#id_numero')
    var i

    if(num.value < 0) {

        window.alert("Digite um numero positivo")
        window.document.querySelector('input#id_numero').value = ''

    } else if(num.value == '') {

        window.alert("Digite um numero")

    } else {

        window.document.getElementById('id_resultado').innerHTML = ''
        for(i=1; i<= 10; i++) {
            var soma = Number( (num.value) * i)
            window.document.getElementById('id_resultado').innerHTML = window.document.getElementById('id_resultado').innerHTML + `${num.value} x ${i} = ${soma}` + '<br>'
        }

    }
    
}
