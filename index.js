const counterDisplay = document.querySelector('h3');
let counter = 0;

const bubbleMaker = () => {
  const bubble = document.createElement('span'); // création d'une variable "bubble"

  bubble.classList.add('bubble'); // ajout de la class à bubble

  document.body.appendChild(bubble); // injection dans le DOM

  let size = Math.floor(100 + Math.random() * 200) + 'px'; // création d'un nombre aléatoire entre 100 et 300
  bubble.style.height = size; // ajout de la hauteur de la bubble
  bubble.style.width = size; // ajout de la largeur de la bubble

  bubble.style.top = Math.random() * 100 + 50 + '%'; // ajout de la position verticale
  bubble.style.left = Math.random() * 100 + '%'; // ajout de la position horizontale

  const plusMinus = Math.random() > 0.5 ? 1 : -1; // constante plusMinus 50% du temps positive

  bubble.style.setProperty('--left', Math.random() * 100 * plusMinus + '%'); // réglage de la variable (--left) de l'anim

  bubble.addEventListener('click', () => {
    counter++; // on incrémente le compteur
    counterDisplay.textContent = counter; // on donne la valeur de counter à la balise counterDisplay
    bubble.remove(); // évènement au click (disparition de la bubble)
  });

  setTimeout(() => {
    bubble.remove();
  }, 8000); // la bubble disparait du DOM au bout de 8s (temps de l'anim)
};

setInterval(bubbleMaker, 3000);
