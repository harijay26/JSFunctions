/* ================= Question - 6 ================ */

recursion = n => {
    if (n == 1) {
        return '1'
    } else {
        return recursion(n - 1) + ' ' + n + ' ' + recursion(n - 1);
    }
}

const input = 3

console.log(recursion(input));