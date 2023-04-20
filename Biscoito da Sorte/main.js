// Variables
const screen1 = document.querySelector('.screen1');
const screen2 = document.querySelector('.screen2');
const btnCookie = document.querySelector('#buttonCookie');
const btnReset = document.querySelector('#openCookie');
const phrasesPreview = document.querySelector('.phraseCookie')

const phrases = [
  "Agora é a hora de surpreender aqueles que duvidaram de você.",
  "Valorize as pequenas conquistas!",
  "Você nunca será velho demais para sonhar um novo sonho.",
  "Avante! Para começar, você só precisa dar o primeiro passo.",
  "Para certas coisas, não basta querer, é preciso batalhar.",
  "Abandone suas dores e não a esperança em dias melhores.",
  "Lutar sempre, vencer às vezes, desistir nunca.",
  "Que os dias bons se tornem rotina e os ruins se tornem raros.",
  "Cada dificuldade ultrapassada te faz mais forte.",
  "Seus medos morrerão de fome se você alimentar a sua motivação.",
  ];

// Events
btnCookie.addEventListener('click', function() {
  toggleScreen()
  randomPhrase()
})
btnReset.addEventListener('click', toggleScreen)

// Functions
function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}


function randomPhrase() {
  const randomNumber = Math.floor(Math.random() * phrases.length)
  phrasesPreview.innerText = phrases[randomNumber]
}
