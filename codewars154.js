    function squareDigits(num) {
        let string = String(num),
            result = '';
        for (let i = 0; i < string.length ; i++) {
            result += string[i] ** 2
        }
        return Number(result)
    }


const squareDigits2 = num => +String(num).split('').map(el => el ** 2).join('')
