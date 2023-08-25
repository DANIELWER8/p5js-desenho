function setup() {
    createCanvas(669, 500);
    background("cyan");
  }
  
  function draw() {
    
    stroke("black");
    fill("red");
    
    //console.log(mouseIsPressed);
    
     if(mouseIsPressed) {
       rect(mouseX, mouseY, 20, 35);
    }
  }