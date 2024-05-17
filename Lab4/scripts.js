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


const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    button.style.backgroundColor = getRandomColor();
    console.log("test")
  });
});

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}






pelnoletni()
odliczanie()





