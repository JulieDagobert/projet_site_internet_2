let nameInput;
let button;
let greeting;
let container; // conteneur question + input + bouton

let url;
let theQuestion;

let questions = [
  {
     texte: "Quel est le nom du premier petit ami de Hannah dans la série Hannah Montana?",
     reponse: "jake",
     url: "fandom_HM.html",
  },
  {
     texte: "Comment s'appelle l'homme loup dans Twilight?",
     reponse: "jacob",
     url: "fandom_TW.html",
  },
  {
     texte: "A quelle émission de téléréalité les membres des One Direction ont-ils participé?",
     reponse: "xfactor",
     url: "fandom_1D.html",
  },
  {
     texte: "Quel âge avait Harry Styles des One Direction quand ils ont commencé ?",
     reponse: "17",
     url: "fandom_1D.html",
  },
];

function verifierReponse() {
  let reponseUtilisateur = nameInput.value().toLowerCase().trim(); 
  
  if (reponseUtilisateur === theQuestion.reponse.toLowerCase()) {
    window.location.href = theQuestion.url;
  } else {
    window.location.reload();
  }
}

function setup() {
  noCanvas(); 
  
  theQuestion = random(questions);

  // 1. conteneur principal 
  container = createDiv('');
  container.id('quiz-container'); 
  
  // 2. Question 
  greeting = createElement('h2', theQuestion.texte);
  greeting.id('question-text');
  greeting.parent(container); // On met la question DANS le conteneur

  // 3. Input 
  nameInput = createInput();
  nameInput.id('reponse-input');
  nameInput.attribute('placeholder', 'Votre réponse...');
  nameInput.parent(container);

  // 4. Bouton 
  button = createButton('Check');
  button.id('check-button');
  button.parent(container);

  button.mousePressed(verifierReponse);
}