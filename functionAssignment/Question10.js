/* ================= Question - 10 ================ */

f = (n) => {
    if (n <= 1) {
        console.log('f(1) value found = 1');
        console.log('Unstacking...');
        console.log('f(1) --> 1');
        return 1;
    } else if (n % 2 === 1) {
        console.log(
            'f(' +
            n +
            ') Value unknown. f(' +
            n +
            ') = ' +
            n +
            ' + f(' +
            (n - 1) +
            ') '
        );
        let temp = n + f(n - 1);
        console.log('f(' + n + ') --> ' + n + ' + f(' + (n - 1) + ') = ' + temp);
        return temp;
    } else {
        console.log(
            'f(' + n + ') Value unknown. f(' + n + ') = f(' + (n - 1) + ') '
        );
        let temp = f(n - 1);
        console.log('f(' + n + ') --> f(' + (n - 1) + ') = ' + temp);
        return temp;
    }
}

const value = 101;
let answer;
answer = f(value);
console.log('');
console.log('');
console.log('Value of f(' + value + ') = ' + answer);


// function f(n) {

//     return (n <= 1)

//         ?
//         1

//         :
//         (n % 2 === 1)

//         ?
//         n + f(n - 1)

//         :
//         f(n - 1);

// }

// const value = f(101);

// console.log(value)