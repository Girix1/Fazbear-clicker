const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");

let numberOfCookies = 0;
//.onclick - na kliknuti
//() => arrow funkce
//{} - scope
cookie.onclick = () => {
  //Zvednout cislo o 1
  //numberOfCookies = numberOfCookies + 1;
  //numberOfCookies += 1;
  //++ - inkrement
  numberOfCookies++;
  //Zobrazit v odstavci
  counter.innerText = "Fazbears: " + numberOfCookies;
  if (numberOfCookies == 69) {
    cookie.src = "./res/img/pog.png"
  }
  else if (numberOfCookies == 420) {
    cookie.src = "./res/img/high.png"
  }
  else{
    cookie.src = "./res/img/cookie.png"
  }
};
