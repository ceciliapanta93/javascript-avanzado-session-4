(() => {
    'use strict'
    const button = document.querySelector('button')
    const inputNumber = document.querySelector('input[name="number"]')
    
    button.addEventListener('click', handleClickButton)
    const element = document.createElement('div')
    document.body.appendChild(element)
    
    function handleClickButton (e) {
        const numberTest = inputNumber.value
        const result = setOperations(numberTest)
        element.innerHTML = result
        
    }

    function setOperations(number) {
        if (number.length === 3) {
            if (
                number.charAt(0) === number.charAt(1) &&
                number.charAt(0) === number.charAt(2) &&
                number.charAt(2) === number.charAt(1) 
            ) {
                const raixOne = Math.sqrt(parseInt(number.charAt(0)), 2)
                const raixTwo = Math.sqrt(parseInt(number.charAt(1)), 2)
                const raixThree = Math.sqrt(parseInt(number.charAt(2)), 2)
                return 'Sus cifras raices cuadradas es ' + (raixOne + raixTwo + raixThree)
            } else {
                const raixOne = Math.pow(parseInt(number.charAt(0)), 2)
                const raixTwo = Math.pow(parseInt(number.charAt(1)), 2)
                const raixThree = Math.pow(parseInt(number.charAt(2)), 2)
                return 'Sus cifras al cuadrado es ' + (raixOne + raixTwo + raixThree)
            }
        } else {
            return 'Ingrese un numero de 3 cifras'
        }
    }


})()