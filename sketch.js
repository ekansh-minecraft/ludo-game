var backDrop;


function preload() {
}

function setup(){
    createCanvas(800,800);

   backDrop = new Board(400,400,20,20)

}

function draw(){
    imageMode(CENTER)
    background("black") 
}
