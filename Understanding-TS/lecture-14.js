function add(n1, n2, showResult, phrase) {
    if (showResult) {
        console.log(phrase + n1 + n2);
    }
    else {
        return n1 + n2;
    }
}
var n1 = 5; // 5.0
var m2 = 2.8;
var printResult = true;
var resultPhrase = "Result is: ";
add(n1, m2, printResult, resultPhrase);
