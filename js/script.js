/*
**Consegna:**
Riprendiamo l’esercizio carosello e rifacciamolo, questa volta usando un array di oggetti.
Ogni elemento deve avere un titolo, una descrizione e il riferimento ad una immagine.
Le immagini devono essere 5 e nella grafica devono essere presenti:
- immagine in evidenza
- thumbnail di tutte le immagine con in evidenza l’immagine attiva
- bottone avanti e indietro
*/

const immagini = [
  {
    title: 'Svezia',
    description: 'Bella la Svezia',
    image: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg'
  },
  {
    title: 'Perù',
    description: 'Bello il Perù',
    image: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg'
  },
  {
    title: 'Chile',
    description: 'Bello il Chile',
    image: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c'
  },
  {
    title: 'Argentina',
    description: 'Bella l\'Argentina',
    image: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg'
  },
  {
    title: 'Colombia',
    description: 'Bella la Colombia',
    image: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop'
  }
];

const slider = document.querySelector('.slider');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');


const counterImages = 0;
let sliderHtml = '';

// con cun ciclo forEach leggo tutti gli oggetti dell'array

immagini.forEach(immagine => {
  sliderHtml +=`
  <div class="card text-bg-dark">
  <img src="${immagine.image}" class="card-img" alt="${immagine.title}">
  <div class="card-img-overlay">
    <h1 class="card-title text-center text-dark">${immagine.title}</h1>
    <p class="card-text text-center text-dark fw-bolder">${immagine.description}</p>
  </div>
</div>
  `
});

// stampo ciò che ho letto

slider.innerHTML = sliderHtml;

// devo collegare i bottoni prev e next ad un evento click.

prev.addEventListener('click', function(){
 console.log('prev');
})

next.addEventListener('click', function(){
  console.log('next');
})

// collegare al click una funzione che incrementi o decrementi l'immagine in base al bottone destra o sinistra

prevNext ();

function prevNext (){
};