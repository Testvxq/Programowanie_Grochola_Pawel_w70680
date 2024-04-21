function nwd(a, b) {  
    if (!b) {  
        return a;  
    }  
 
    return nwd(b, a % b);  
 };

function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML =  "Clock:" + h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
  }
  
function checkTime(i) {
if (i < 10) {i = "0" + i};
return i;
}

//------------------------------------------------------------------------------------

alert("Hello world")

let a = 10
let b = 20
let c = 23.2

alert(`dodawanie: ${a+b}`)
alert(`odejmowanie: ${a-b}`)
alert(`mnożenie: ${a*b}`)
alert(`dzielenie: ${a/b}`)

console.log(`dodawanie: ${a+b}`)
console.log(`odejmowanie: ${a-b}`)
console.log(`mnożenie: ${a*b}`)
console.log(`dzielenie: ${a/b}`)

document.getElementById("js").innerHTML = (`dodawanie: ${a+b}<br>odejmowanie: ${a-b}<br>mnożenie: ${a*b}<br>dzielenie: ${a/b}`)

for (let index = 0; index <= 100; index += 2) {
    console.log(index)
}

a = 2
b = 3
c = 4
let p = a*b*c
let wynik = Math.sqrt(p*(p-a)*(p-b)*(p-c));


console.log(`Pole wynosi: ${wynik}`)
document.getElementById("poleFigury").innerHTML = (`Pole figury wynosi ${wynik}`)

let person = prompt("Please enter your name", "Your Name");
alert(`Hello ${person}!!!`)

a = Number(prompt("Dodawanie: Podaj liczbe A"))
b = Number(prompt("Dodawanie: Podaj liczbe B"))


document.getElementById("dodawanie").innerHTML = (`Wynik dodawania dwoch liczb to: ${a + b}`)

a = prompt("Najwieksza liczba: Podaj liczbe A")
b = prompt("Najwieksza liczba: Podaj liczbe B")
c = prompt("Najwieksza liczba: Podaj liczbe C")

const max = Math.max(a, b, c);

console.log(`Najwieksza liczb z podanych to: ${max}`)
document.getElementById("max").innerHTML = (`Najwieksza liczba to: ${max}`)

a = prompt("NWD: Podaj liczbe A")
b = prompt("NWD: Podaj liczbe B")

const nwdResult = nwd(a, b)

console.log(`NWD wynosi: ${nwdResult}`);
document.getElementById("max").innerHTML = (`NWD wynosi: ${nwdResult}`)