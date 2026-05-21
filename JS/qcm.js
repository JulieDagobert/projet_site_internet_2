

let questions = [
  {
    texte: "Quel membre de One Direction est originaire d’Irlande?",
    options: [
      { nom: "Liam", correct: false },
      { nom: "Harry", correct: false },
      { nom: "Zayn", correct: false },
      { nom: "Niall", correct: true },
      { nom: "Louis", correct: false }
    ],
    url: "fandom_1D.html",
  },
  {
    texte: "En quelle année le groupe des One Direction s'est-il formé ?",
    options: [
      { nom: "2010", correct: true },
      { nom: "2012", correct: false },
      { nom: "2009", correct: false }
    ],
    url: "fandom_1D.html",
  },
  {
    texte: "Avec quelle marque le groupe One Direction a-t-il collaboré ?",
    options: [
      { nom: "Colgate", correct: true },
      { nom: "BMW", correct: false },
      { nom: "Target", correct: false },
      { nom: "Nivea", correct: false },
      { nom: "Disney", correct: false }
    ],
    url: "fandom_1D.html",
  },
  {
    texte: "Quelle célébrité est apparue dans la série Hannah Montana ?",
    options: [
      { nom: "Robert Downey Junior", correct: false },
      { nom: "Will Smith", correct: false },
      { nom: "The Rock", correct: true },
      { nom: "Jason Derulo", correct: false },
      { nom: "Emily Stone", correct: false }
    ],
    url: "fandom_HM.html",
  },
  {
    texte: "Quel âge avait Miley Cyrus lors de la première diffusion de Hannah Montana ?",
    options: [
      { nom: "11 ans", correct: false },
      { nom: "13 ans", correct: true },
      { nom: "12 ans", correct: false },
      { nom: "17 ans", correct: false },
      { nom: "15 ans", correct: false }
    ],
    url: "fandom_HM.html"
  },
  {
    texte: "Où Hannah atterrit-elle dans “Hannah Montana, le film” ?",
    options: [
      { nom: "À New York", correct: false },
      { nom: "Dans le Tennessee", correct: true },
      { nom: "Au Canada", correct: false },
      { nom: "En Californie", correct: false },
      { nom: "En France", correct: false }
    ],
    url: "fandom_HM.html",
  },
  {
    texte: "Dans “Twilight, chapitre I: Fascination”, qui tente de tuer Bella ?",
    options: [
      { nom: "Carlisle Cullen", correct: false },
      { nom: "Jacob Black", correct: false },
      { nom: "Jasper Hale", correct: false },
      { nom: "Billy Black", correct: false },
      { nom: "James", correct: true }
    ],
    url: "fandom_TW.html",
  },
  {
    texte: "Quel est le nom de l’enfant d’Edward et Bella ?",
    options: [
      { nom: "Jody", correct: false },
      { nom: "Ellie", correct: false },
      { nom: "Renée", correct: false },
      { nom: "Renesmée", correct: true },
      { nom: "Esmée", correct: false }
    ],
    url: "fandom_TW.html",
  },
  {
    texte: "Dans Twilight, quel âge a Bella lorsqu’elle épouse Edward ?",
    options: [
      { nom: "24 ans", correct: false },
      { nom: "19 ans", correct: false },
      { nom: "21 ans", correct: false },
      { nom: "18 ans", correct: true },
      { nom: "30 ans", correct: false }
    ],
    url: "fandom_TW.html",
  },
  {
    texte: "De quel pays vient Justin Bieber?",
    options: [
      { nom: "États-Unis", correct: false },
      { nom: "Nouvelle Zélande", correct: false },
      { nom: "Canada", correct: true },
      { nom: "Australie", correct: false }
    ],
    url: "fandom_JB.html",
  },
  {
    texte: "Dans quelle série populaire a joué Justin Bieber?",
    options: [
      { nom: "Friends", correct: false },
      { nom: "Les Experts", correct: true },
      { nom: "Breaking Bad", correct: false },
      { nom: "Gossip Girl", correct: false },
      { nom: "Pretty Little Liars", correct: false }
    ],
    url: "fandom_JB.html",
  },
  {
    texte: "Comment Justin Bieber a-t-il été découvert?",
    options: [
      { nom: "YouTube", correct: true },
      { nom: "America’s Got Talent", correct: false },
      { nom: "Performance de rue", correct: false },
      { nom: "The Voice", correct: false },
      { nom: "Réseaux sociaux", correct: false }
    ],
    url: "fandom_JB.html",
  },
  {
    texte: "À quel âge Britney Spears a-t-elle commencé sa carrière?",
    options: [
      { nom: "8 ans", correct: false },
      { nom: "15 ans", correct: false },
      { nom: "11 ans", correct: true },
      { nom: "13 ans", correct: false },
      { nom: "14 ans", correct: false }
    ],
    url: "fandom_BS.html",
  },
  {
    texte: "Combien de temps a duré le premier mariage de Britney Spears?",
    options: [
      { nom: "1 mois", correct: false },
      { nom: "49 minutes", correct: false },
      { nom: "55 heures", correct: true },
      { nom: "7 mois", correct: false }
    ],
    url: "fandom_BS.html",
  },
  {
    texte: "En quelle année Britney Spears s’est-elle rasé la tête?",
    options: [
      { nom: "2009", correct: false },
      { nom: "2011", correct: false },
      { nom: "2013", correct: false },
      { nom: "2007", correct: true },
      { nom: "2004", correct: false }
    ],
    url: "fandom_BS.html",
  }
];

let questionChoisie;

function setup() {
  noCanvas();
  questionChoisie = random(questions);
  createP(questionChoisie.texte).parent('question');
  
  
  for (let opt of questionChoisie.options) {
    let btn = createButton(opt.nom).parent('reponses');
    btn.mousePressed(() => verifierReponse(opt.correct, questionChoisie.url));
  }
}

function verifierReponse(estCorrect, url) {
  if (estCorrect) {
    window.location.href = url;
  } else {
    window.location.reload();
  }
}