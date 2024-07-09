function checkPalindroma(string) {
    let check_palindroma;
    check_palindroma = string.split('').reverse().join('');
    if (check_palindroma.toLowerCase() === string.toLowerCase()) {
        console.log('la stringa è palindroma');
    }
    else {
        console.log('la stringa non è palindroma');
    }
}
let word = prompt('inserisci la parola da verificare');
checkPalindroma(word.toLowerCase());