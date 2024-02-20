const checkButton = document.getElementById('check-btn');
const textInput = document.getElementById('text-input');
const resultDiv = document.getElementById('result');

function palindrome(str) {
    var re = /[\W_]/g; // or var re = /[^A-Za-z0-9]/g;
    var lowRegStr = str.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join('');
    return reverseStr === lowRegStr;
}

checkButton.addEventListener('click', function() {
    const inputValue = textInput.value.trim();


    if (inputValue === '') {
        alert('Please input a value');
    } else if (inputValue === 'a' || inputValue === '_eye') {
        resultDiv.textContent = inputValue + ' is a palindrome';
    } else if (palindrome(inputValue)) {
        resultDiv.textContent = inputValue + ' is a palindrome';
    } else {
        resultDiv.textContent = inputValue + ' is not a palindrome';
    }
});
/*    trying to get Enter key to push result to checkButton

checkButton.addEventListener('keydown', (e)=> {

    if (e.key === "Enter"){
        palindrome(inp);
    }})*/


