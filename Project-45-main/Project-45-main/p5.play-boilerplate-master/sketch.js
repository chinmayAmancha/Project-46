var main;

function preload() {
  main = loadImage("OIP.jpg");
}
function draw() {
  background("white");
  main = createSprite(100,100);
  
  if (keyDown("LEFT_ARROW")) {
    main.x-10;
  }
  
  if (keyDown("RIGHT_ARROW")) {
    main.x+10;
  }
  
  if (keyDown("UP_ARROW")) {
    main.y+10;
  }
  
  if (keyDown("DOWN_ARROW")) {
    main.y-10;
  }
  
  if (keyDown("SPACE_BAR")) {
    
  }
  
  var astroid = loadImage("Astroid.jpg")
}

