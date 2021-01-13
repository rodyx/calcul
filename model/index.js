export const arr = ['С', '^', 'sqrt', '7', '8', '9', '/', '4', '5', '6', 'X', '1', '2', '3', '-', '0', '.', '+', '=']
export const intArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.']

export function removeZeros(number) {
    if (`${number}`.includes('.')) {
        let [numb, frac] = `${number}`.split('.');
        if (numb.length > 11) return (+numb).toPrecision(7);

        let fracarr = frac.split('');

        for (let i = fracarr.length - 1; i >= 0; i--) {
            if (i === 0) {
                return fracarr[0] === '0' ? numb : numb + '.' + fracarr[0];
            } else {
                if (fracarr[i] === '0') continue;
                return numb + '.' + fracarr.slice(0, i + 1).join('')
            }
        }
    }
}

export function solveMath(a, operand, b) {
    let res = 0;
    
    switch (operand) {
        case '+':
            res = a + b;
            break;
        case '-':
            res = a - b;
            break;
        case 'X':
            res = a * b;
            break;
        case '/':
            res = a / b;
            break;
        case '^':
            res = Math.pow(a, b);
            break;
        case 'sqrt':
            
            res = a * Math.sqrt(b);
            break;
    }
    
    return removeZeros(res.toFixed(5))

}

