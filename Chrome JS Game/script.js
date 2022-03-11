//varibles

var character = document.getElementById("character");
var block = document.getElementById("block");
var counter=0;

//functions

class Backgroud {
    constructor(gameWidth,gameHeight){
            this.gameWidth = gameWidth;
            this.gameHeight = gameHeight;
            this.image = document.getElementById(backgroudimagens);
            this.x = 0;
            this.y = 0;
            this.width = 800;
            this.height = 300;
         }

         draw(context){
            context.drawImage(this.image, this.x, this.y);
}
}


function jump(){

    if(character.classList == "animate"){return}
    character.classList.add("animate");
    
    setTimeout(function(){
        character.classList.remove("animate");
    },500);
}



const background = new Background(canvas.width, canvas.height);

var checkDead = setInterval(function() {

    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    
    if(blockLeft<20 && blockLeft>-20 && characterTop>=130){
        block.style.animation = "none";

        //alert that says you lose
        alert("Game Over. score: "+Math.floor(counter/100));
        counter=0;
        block.style.animation = "block 1s infinite linear";
    
    }
    
    else{
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
    }

    }, 10);

  