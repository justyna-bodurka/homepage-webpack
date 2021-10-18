import '../scss/main.scss';
import moment from 'moment';


// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */
console.log(moment().startOf('day').fromNow());   

console.log('HELLO 🚀')
const firstName = "Justyna";
const age = 36;
alert("Witaj drogi odwiedzający");
console.log(firstName);
console.log(age);
console.log(`Witaj drogi odbiorco,nazywam się ${firstName} i mam ${age} lat`);

const calculateOld = (myNumber) => (myNumber + 3) * 7;
console.log(calculateOld(7));

function calculate (myNumber) {
    return (myNumber + 3) * 7;
}
const myResult = calculate(2);
console.log(myResult);

function greet(firstName, age) {
  console.log(`Witaj drogi odbiorco, jestem ${firstName} i mam ${age} lat`);
}
greet(firstName, age);

const test = document.querySelector(".article__title--js");
test.innerHTML = "tekst w ramach pracy domowej JS. DOM.";


function dupka (querySelectorContent, content){
    const dupcia = document.querySelector(querySelectorContent);
    dupcia.innerHTML = content;
}
dupka ('.article-list__title--js', 'lepiej zeby wyszło');

const humanOne = {
  name: "Łukasz",
  age: 40,
  adress: {
    street: "Milczańska",
    city: "Szczecin",
  },
};

const humanTwo = {
  name: "Gosia",
  age: 25,
  adress: humanOne.adress,
};
console.log(humanTwo);

console.log(humanOne);

function calculateTwo (myNumber) {
return myNumber*4
}
const myResultNew = calculateTwo(10);
console.log(myResultNew);

const hamburger = document.querySelector('.hamburger--js');
hamburger.addEventListener('click', () => {
  const nav = document.querySelector ('.main-navigation--js');
  nav.classList.toggle('main-navigation--open');
})

fetch('https://api.github.com/users/justyna-bodurka/repos?sort=created')
.then(resp => resp.json())
.then(resp => {
  for (let repo of resp) {
    const {name, html_url} = repo;
    const repositoryList = document.querySelector('.list--js');
    const myTemplate = `<li class="dupa-list">
      ${name} <a href= "${html_url}" title = "link do repozytorium ${name} na githubie"> link do githuba </a>
    </li>`;
    repositoryList.innerHTML += myTemplate;

  
  }
})
.catch(error => {
  console.log('nie udało się pobrać');
})