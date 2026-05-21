let img;
let tiles = [];
let gridSize = 4;
let tileSize;
let url;

let imagePaths = [
  
  'Images/carre/HM_JEU_1.jpg', 
  'Images/carre/HM_JEU_2.jpg', 
  'Images/carre/HM_JEU_3.jpg', 
  'Images/carre/HM_JEU_4.jpg', 
  'Images/carre/HM_JEU_5.jpg',

  'Images/carre/JB_JEU_1.jpg', 
  'Images/carre/JB_JEU_2.jpg', 
  'Images/carre/JB_JEU_3.jpg', 
  'Images/carre/JB_JEU_4.jpg', 
  'Images/carre/JB_JEU_5.jpg',

  'Images/carre/1D_JEU_1.png', 
  'Images/carre/1D_JEU_2.png', 
  'Images/carre/1D_JEU_3.png', 
  'Images/carre/1D_JEU_4.jpg', 
  'Images/carre/1D_JEU_5.png',
  
  'Images/carre/TW_JEU_1.jpg', 
  'Images/carre/TW_JEU_2.jpg', 
  'Images/carre/TW_JEU_3.jpg', 
  'Images/carre/TW_JEU_4.jpg', 
  'Images/carre/TW_JEU_5.jpg',

  'Images/carre/BS_JEU_1.jpg', 
  'Images/carre/BS_JEU_2.jpg', 
  'Images/carre/BS_JEU_3.jpg', 
  'Images/carre/BS_JEU_4.jpg', 
  'Images/carre/BS_JEU_5.jpg',
];

let urls = [
  

  "fandom_HM.html",
  "fandom_HM.html",
  "fandom_HM.html",
  "fandom_HM.html",
  "fandom_HM.html",
  
  "fandom_JB.html",
  "fandom_JB.html",
  "fandom_JB.html",
  "fandom_JB.html",
  "fandom_JB.html",

  "fandom_1D.html",
  "fandom_1D.html",
  "fandom_1D.html",
  "fandom_1D.html",
  "fandom_1D.html",

  "fandom_TW.html",
  "fandom_1D.html",
  "fandom_1D.html",
  "fandom_1D.html",
  "fandom_1D.html",

  "fandom_BS.html",
  "fandom_BS.html",
  "fandom_BS.html",
  "fandom_BS.html",
  "fandom_BS.html",
];

function preload() {
  let index = floor(random(imagePaths.length));
  let randomPath = imagePaths[index];
  url = urls[index];
  img = loadImage(randomPath);
  console.log("Image chargée : " + randomPath);
  console.log("URL associée : " + url);
}

function setup() {
  createCanvas(600, 600);
  tileSize = width / gridSize;
  initPuzzle();
}

function initPuzzle() {
  tiles = [];
  if (img) {
    img.resize(600, 600);
  }

  for (let y = 0; y < gridSize; y++) {
    for (let x = 0; x < gridSize; x++) {
      let graphic = createGraphics(tileSize, tileSize);
      if (img) {
        graphic.image(img, -x * tileSize, -y * tileSize);
      }
     
      tiles.push({
        img: graphic,
        x: x,
        y: y,
        rotation: floor(random(1, 4)) * HALF_PI
      });
    }
  }
}

function changeImage() {
  let newPath = random(imagePaths);
  // Charge l'image en arrière-plan
  let newImg = loadImage(newPath, () => {
    img = newImg;
    initPuzzle(); // Reconstruit le puzzle
    // Met à jour l'URL associée
    let newIndex = imagePaths.indexOf(newPath);
    url = urls[newIndex];
  });
}

function draw() {
  background(0);
  let win = true;

  if (!img) return; // Arrête si pas d'image

  for (let i = 0; i < tiles.length; i++) {
    let t = tiles[i];
    push();
    translate(t.x * tileSize + tileSize / 2, t.y * tileSize + tileSize / 2);
    rotate(t.rotation);
    imageMode(CENTER);
    image(t.img, 0, 0);
    pop();
   
    if (abs(t.rotation % TWO_PI) > 0.01) {
      win = false;
    }
  }

  if (win && frameCount > 60) {
     window.location.href = url;
  }
}

function mousePressed() {
  if (floor(mouseX / tileSize) < 0 || floor(mouseX / tileSize) >= gridSize || 
      floor(mouseY / tileSize) < 0 || floor(mouseY / tileSize) >= gridSize) {
    return;
  }
  
  let col = floor(mouseX / tileSize);
  let row = floor(mouseY / tileSize);
  let index = col + row * gridSize;
  
  if (index >= 0 && index < tiles.length) {
    tiles[index].rotation += HALF_PI;
  }
}