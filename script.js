var block = document.getElementById("block");
var flatbartop = document.getElementById("flatbartop");
var downblock = document.getElementById("downblock");
var flatbardown = document.getElementById("flatbardown");
var hole = document.getElementById("hole");
var character = document.getElementById("character");
var game=document.getElementById("game");
var brickbox=document.getElementById("brickbox");

var wing = document.getElementById("wing");
var hit = document.getElementById("hit");
var point = document.getElementById("point");

var restart=document.getElementById("restart");
var jumping = 0;
var jumpstop=0;
let jumpCount = 0;

var counter=0;

hole.addEventListener('animationiteration', () => {

    var random = (Math.floor(Math.random()*320));
    hole.style.top = random +"px";
    downblock.style.top = random+150+"px";
    downblock.style.height=328-random +"px";
    block.style.height = random +"px";

    flatbartop.style.top = random-23+"px";
    flatbardown.style.top = random+150+"px";

    document.getElementById('point').play();
    counter++;
    
});


setInterval(function(){

    document.getElementById("score").innerHTML=counter;
    
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if((jumpstop==0)&&(jumping==0)){
        character.style.top = (characterTop+2.5)+"px";
    }
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    var holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    
    if((characterTop>450)||((blockLeft<85)&&(blockLeft>-1)&&((characterTop<holeTop)||(characterTop>holeTop+120)))){
        
        if(hit.currentTime==hit.duration)
        {
            document.getElementById('hit').pause();
        }
        else
        {
            document.getElementById('hit').play();
        }
        
        document.getElementById('wing').pause();
        hole.style.animationPlayState = 'paused';
        block.style.animationPlayState = 'paused';
        downblock.style.animationPlayState = 'paused';

        flatbartop.style.animationPlayState = 'paused';
        flatbardown.style.animationPlayState = 'paused';

        brickbox.style.animationPlayState = 'paused';
        
        restart.style.visibility="visible";

        jumpstop=1;

    }
},10);

function jump(){
    document.getElementById('wing').play();
    jumping = 1;
    jumpCount = 0;
    var jumpInterval = setInterval(function(){
        var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        if((characterTop>6)&&(jumpCount<15)&&(jumpstop==0)){
            character.style.top = (characterTop-3)+"px";
        }
        if(jumpCount>20){
            clearInterval(jumpInterval);
            jumping=0;
            jumpCount=0;
        }
        jumpCount++;
    },10);
}

function refresh()
{

    block.style.animation = 'none';
    block.offsetHeight;
    block.style.animation = null;

    hole.style.animation = 'none';
    hole.offsetHeight;
    hole.style.animation = null;

    downblock.style.animation = 'none';
    downblock.offsetHeight;
    downblock.style.animation = null;


    flatbartop.style.animation = 'none';
    flatbartop.offsetHeight;
    flatbartop.style.animation = null;

    flatbardown.style.animation = 'none';
    flatbardown.offsetHeight;
    flatbardown.style.animation = null;

    brickbox.style.animation = 'none';
    brickbox.offsetHeight;
    brickbox.style.animation = null;

    restart.style.visibility="hidden";


    counter=0;
    jumpstop=0;
    jumping = 0;
    jumpCount = 0;
    hit.currentTime=0;
    character.style.top = 100+"px";

}

(function($, window, document, undefined) {
    var isTouch = 'ontouchstart' in window,
        eStart = isTouch ? 'touchstart' : 'mousedown',
        eMove = isTouch ? 'touchmove' : 'mousemove',
        eEnd = isTouch ? 'touchend' : 'mouseup',
        eCancel = isTouch ? 'touchcancel' : 'mouseup',
        canPlayType = function(file) {
            var audioElement = document.createElement('audio');
            var audioElement = document.createElement('wing');
            var audioElement = document.createElement('hit');
            var audioElement = document.createElement('point');
        };
});



