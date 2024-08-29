function checkPrime() {
    let num = prompt("Enter a number:");
    num = parseInt(num);
    let isPrime = num > 1;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
    document.getElementById('result').innerText = isPrime ? `${num} is a prime number.` : `${num} is not a prime number.`;
}

function getPrimesInRange() {
    let start = parseInt(prompt("Enter the start of the range:"));
    let end = parseInt(prompt("Enter the end of the range:"));
    let primes = [];
    for (let num = start; num <= end; num++) {
        let isPrime = num > 1;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) primes.push(num);
    }
    document.getElementById('result').innerText = `Prime numbers between ${start} and ${end}: ${primes.join(', ')}`;
}

function checkPalindrome() {
    let str = prompt("Enter a string:");
    let reversed = str.split('').reverse().join('');
    let isPalindrome = str === reversed;
    document.getElementById('result').innerText = isPalindrome ? `${str} is a palindrome.` : `${str} is not a palindrome.`;
}

function generateFibonacci() {
    let n = parseInt(prompt("How many Fibonacci numbers to generate?"));
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }
    document.getElementById('result').innerText = `First ${n} Fibonacci numbers: ${fib.slice(0, n).join(', ')}`;
}

function calculateGCD() {
    let a = parseInt(prompt("Enter the first number:"));
    let b = parseInt(prompt("Enter the second number:"));
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    document.getElementById('result').innerText = `GCD is ${a}`;
}

function checkArmstrong() {
    let num = parseInt(prompt("Enter a number:"));
    let sum = 0;
    let temp = num;
    while (temp > 0) {
        let digit = temp % 10;
        sum += digit ** 3;
        temp = Math.floor(temp / 10);
    }
    let isArmstrong = sum === num;
    document.getElementById('result').innerText = isArmstrong ? `${num} is an Armstrong number.` : `${num} is not an Armstrong number.`;
}

function factorial() {
    let num1 = parseInt(prompt("Enter a value to get the factorial of a number"));
    let ans = 1;
    for (let i = 1; i <= num1; i++) {
        ans *= i;
    }
    document.getElementById('result').innerText = `Factorial is ${ans}`;
}

function calculator() {

        var num1 = parseInt(prompt("enter value 1"));
        var num2 = parseInt(prompt("enter value 2"));
        var func = prompt("enter which operation you want to perform")
        var ans;

        if(func == '+'){
            ans = num1+num2;
            document.getElementById('result').innerText = `addition is ${ans}`;
        }
        else if(func == '-'){
            ans = num1-num2;
            document.getElementById('result').innerText = `subtraction is ${ans}`;
        }
        else if(func == '*'){
            ans = num1*num2;
            document.getElementById('result').innerText = `multiplication is ${ans}`;
        }
        else if(func == '/'){
            ans = num1/num2;
            document.getElementById('result').innerText = `division is ${ans}`;
        }
}

function numToWord() {
    let num = Number(prompt("Enter the number in range of 0-999"));

    if (num < 0 || isNaN(num) || num > 999) {
        alert("Out of range or not a number");
        return;
    }

    const single_digit = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
    const double_digit = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
    const below_hundred = ['Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

    let word = "";

    if (num < 10) {
        word = single_digit[num];
    } else if (num < 20) {
        word = double_digit[num - 10];
    } else if (num < 100) {
        word = below_hundred[Math.trunc(num / 10) - 2] + (num % 10 !== 0 ? ' ' + single_digit[num % 10] : '');
    } else if (num < 1000) {
        word = single_digit[Math.trunc(num / 100)] + ' Hundred' + (num % 100 !== 0 ? ' ' + (
            num % 100 < 10 ? single_digit[num % 100] :
            num % 100 < 20 ? double_digit[num % 100 - 10] :
            below_hundred[Math.trunc((num % 100) / 10) - 2] + (num % 10 !== 0 ? ' ' + single_digit[num % 10] : '')
        ) : '');
    }

          document.getElementById('result').innerText = `${word.trim() + '.'}`;
}

