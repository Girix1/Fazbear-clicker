const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");
const clickUprgrade = document.getElementById("clickUprgrade");
const autoclickerUprgade = document.getElementById("counteautoclickerUprgade");

let numberOfCookies = 0;
let cookieIncreaseNumber = 1;
let autoclickerIncreaseNumber = 0;
let autoclickerInterval;
let clickUprgradePrize = 50;

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
  if (numberOfCookies >= clickUprgradePrize) {
    //odecist cenu
    //numberOfCookies = numberOfCookies 50;
    numberOfCookies -= clickUprgradePrize;
    clickUprgradePrize *=2;
    clickUprgrade.innerHTML = `Buy click upgrade: ${clickUprgradePrize}`;
    //zobrazime pocet
    counter.innerText = "Fazbears: " + numberOfCookies;
    //zvednout klikani o 1
    cookieIncreaseNumber++;
  }
};

autoclickerUprgade.onclick = () => {
  if (numberOfCookies >= 100) {
    //odecteme cenu
    numberOfCookies -= 100;
    //zobrazime pocet susenek
    counter.innerText = "Fazbears: " + numberOfCookies;
    autoclickerIncreaseNumber++;
    clearInterval(autoclickerInterval);
    //spustime autoclicker
    setInterval(() => {
      numberOfCookies += autoclickerIncreaseNumber;
      counter.innerText = "Fazbears: " + numberOfCookies;
    }, 1000);
  }
};
