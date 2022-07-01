function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value == 0){
        alert('Por favor, Digite um número!')
    } else{
        let n = Number(num.value) //convertendo os números que estão em formato de strings do 'num' em números.
        let c = 1
        tab.innerHTML = '' //antes de começar a mostrar a tabuada, a área de tabuada sempre vai ser limpada.
        while (c <= 10) {
            let item = document.createElement('option') //criando um elemento option, porque para colocar opções dentro do select, tem que haver options.
            item.value = `tab${c}`//nas options sempre tem que ter um value, para não dar problema na linguagem php.(mas para o JS não faz tanta diferença.)
            item.text = `${n} x ${c} = ${n*c}`//item.text = parte de dentro do option.
            tab.appendChild(item)  //para fazer a conta acima aparecer, tem que selecionar o elemento "tab" (que é a tabuada) .appendchild (adicionar um elemento filho) que vai ser o "item".
            c++
        }
    }
}
    
