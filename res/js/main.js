const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");
const clickUprgrade = document.getElementById("clickUprgrade");
const counteautoclickerUprgade = document.getElementById(
  "counteautoclickerUprgade"
);

let numberOfCookies = 0;
let cookieIncreaseNumber = 1;
//.onclick - na kliknuti
//() => arrow funkce
//{} - scope
cookie.onclick = () => {
  //Zvednout cislo o 1
  numberOfCookies += cookieIncreaseNumber;
  //numberOfCookies += 1;
  //++ - inkrement
  //numberOfCookies++;
  //Zobrazit v odstavci
  counter.innerText = "Fazbears: " + numberOfCookies;
  if (numberOfCookies == 69) {
    cookie.src = "./res/img/pog.png";
  } else if (numberOfCookies == 420) {
    cookie.src = "./res/img/high.png";
  } else {
    cookie.src = "./res/img/cookie.png";
  }
};

clickUprgrade.onclick = () => {
  if (numberOfCookies >= 50) {
    //odecist cenu
    //numberOfCookies = numberOfCookies 50;
    numberOfCookies -= 50;
    counter.innerText = "Fazbears: " + numberOfCookies;
    //zvednout klikani o 1
    cookieIncreaseNumber++;
  }
};
