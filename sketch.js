let isPaused = false;

function preload(){
  
  face = loadImage('imagefaceinternet.jpg')
  
  //The images need to be preloaded.  Here they are loaded into an array (essentially a list)
  pictureList = [];
  var imgCount = 12; //total number of images
  //use a for loop to load all 12 images into the array
  for (var i = 0; i < imgCount; i++) {
    pictureList[i] = loadImage("final"+ (i + 1 )+ ".jpg");
    
  }
  
}


function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  frameRate(1.5);
  
}

function draw() {
  background(0);
  
  image(face, 0, 0)
  translate(120, 70, height / 2);
  
  var n = 4; 

  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) { 
      
      var r = int(random(0, 12)); 
      var randomImage = pictureList[r]; 

      image(randomImage, i * (150/ n), j * (150 / n));
      //this line draws the randomly chosen image to the grid
    }
  }
  
}

function mousePressed(){
   if (isPaused) {
    isPaused = false;
  } else {
    noLoop();
    face.filter(INVERT)
    isPaused = true;
  }
}