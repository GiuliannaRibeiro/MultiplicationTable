function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value == 0){
        alert('Por favor, Digite um número!')
    } else{
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = '' //Limpar a área da tabuada.
        while (c <= 10) {
            let item = document.createElement('option') 
            item.value = `tab${c}`
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)  
            c++
        }
    }
}
    
