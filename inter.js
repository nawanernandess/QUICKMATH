function tabuada(){
    let numero = window.document.getElementById('txtn')
    let tab = window.document.getElementById('seltab')

    if(numero.value.length == 0 ){
    window.alert('Por favor, digite um numero!')
    }else{
        let n = Number(numero.value)
        let c = 1
        tab.innerHTML = ''
        while(c <= 10){
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            item.value = `tab ${c}`
            tab.appendChild(item)
            c++
        }
    }
}