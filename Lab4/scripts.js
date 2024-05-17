let i = 10
let val = 5

function odliczanie() {
    console.log(i)
    i--

    if (i == 0) {
        setTimeout(function() {
            console.log("„Happy New Year!")
            next()
        }, 400)
    } else {
        setTimeout(odliczanie, 400)
    }
}


function next() {
    console.log(`Silnia z ${val} wynosi: `, silnia(val))
}

function silnia(n) {
    if(n === 0 || n === 1) {
        return 1
    } else {
        return n * silnia(n - 1)
    }
}

function pelnoletni() {
    const wiek = parseFloat(prompt("ile masz lat?"))

    if (wiek < 18) {
        window.open("https://www.w3schools.com", "_self");
    }
}


const buttons = document.querySelectorAll('.changeColor');

function resetButtons() {
    buttons.forEach(button => {
      button.classList.remove('clicked-bg');
      button.classList.add('default-bg');
    });
  }

buttons.forEach(button => {
button.addEventListener('click', function() {

    resetButtons();

    button.classList.remove('default-bg');
    button.classList.add('clicked-bg');
});
});


const toggleButton = document.getElementById('displayChange');
const myElement = document.getElementById('textbox');

toggleButton.addEventListener('click', () => {
    if (myElement.style.display === 'none') {
        myElement.style.display = 'block';
    } else {
        myElement.style.display = 'none';
    }
});

function addToList() {
    var input = document.getElementById("textInput").value;
    var list = document.getElementById("list");
    var listItem = document.createElement("li");
    listItem.appendChild(document.createTextNode(input));
    list.appendChild(listItem);
    document.getElementById("textInput").value = "";
}

function addToTable() {
    var name = document.getElementById("nameInput").value;
    var surname = document.getElementById("surnameInput").value;
    var table = document.getElementById("tableBody");
    var row = table.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = name;
    cell2.innerHTML = surname;
    document.getElementById("nameInput").value = "";
    document.getElementById("surnameInput").value = "";
}

function convertToFar() {
    var celsius = document.getElementById("celsiusInput").value;
    var fahrenheit = (celsius * 9/5) + 32;
    document.getElementById("result1").innerHTML = "Wynik: " + fahrenheit.toFixed(2) + " stopni Fahrenheita";
}

function convertToCel() {
    var fahrenheit = document.getElementById("fahrenheitInput").value;
    var celsius = (fahrenheit - 32) * 5/9;
    document.getElementById("result2").innerHTML = "Wynik: " + celsius.toFixed(2) + " stopni Celsiusza";
}

pelnoletni()
odliczanie()





