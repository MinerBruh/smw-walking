var walkTimer
var animation = document.getElementById("animation").value
var speed = document.getElementById("speedSlider").value
//var direction = document.getElementById("direction").value
var sprite = document.getElementById("sprite");
var spritePos = sprite.getBoundingClientRect()
var walkAnimationSprite = 1
var speedBuffer
var movekeypress = 0
var keypressed

document.onkeydown = function(key){
    if(key.key == "d"){
        direction = "Right"
        spritePos.x += 20
        document.getElementById("sprite").style.left = `${spritePos.x}px`
        movekeypress = 2
    }
    if(key.key == "a"){
        direction = "Left"
        spritePos.x -= 20
        document.getElementById("sprite").style.left = `${spritePos.x}px`
        movekeypress = 2
    }
    if(key.key == "s"){
        movekeypress = 1
    }
    if(key.key == "w"){
        movekeypress = 3
    }
};

document.onkeyup = function(){
    movekeypress = 0
}


const checkListInterval = setInterval(checkList,1000)
const checkFlipInterval = setInterval(checkFlip,1)
const tenmiliInterval = setInterval(tenmili,10)
const checkspeedInterval = setInterval(checkSpeed, 10)
const miliInterval = setInterval(mili,1)
var walkAnimation

function checkFlip(){
    if(direction == "Right"){
        document.getElementById("sprite").style.transform = 'scaleX(-1)'
    }
    else if(direction == "Left"){
        document.getElementById("sprite").style.transform = 'scaleX(1)'
    }
}

function checkList(){
    if(animation == "Walk"){
        clearInterval(checkListInterval)
        walkAnimation = setInterval(walkAnim,speed)
    }
}

function walkAnim(){
    if(movekeypress == 2)
        walkAnimationSprite += 1
    else{
        walkAnimationSprite = 0
    }
}

function mili(){
    speedBuffer = document.getElementById("speedSlider").value
    //direction = document.getElementById("direction").value
    document.getElementById("speedbuffer").innerHTML = "Speedbuffer:" + speedBuffer
    document.getElementById("speed").innerHTML = "Speed:" + speed
    document.getElementById("walkanim").innerHTML = "position" + spritePos.x
    if(speedBuffer != speed){
        walkAnimationSprite = 1
        clearInterval(walkAnimation)
        walkAnimation = setInterval(walkAnim,speed)
    }
    if(walkAnimationSprite >= 3){
        walkAnimationSprite = 1
    }
    if(walkAnimationSprite == 0){
        document.getElementById("sprite").src = "sprites/idle.png"
    }
    if(movekeypress == 1){
        document.getElementById("sprite").src = "sprites/duck.png"
    }
    if(movekeypress == 3){
        document.getElementById("sprite").src = "sprites/lookup.png"
    }
    if(spritePos.x >= 2000){
        document.getElementById("sprite").style.left = '-50px'
        spritePos.x = -50
    }
    if(spritePos.x <= -100){
        document.getElementById("sprite").style.left = '1980px'
        spritePos.x = 1980
    }
}

function tenmili(){
    if(walkAnimationSprite == 1){
        document.getElementById("sprite").src = "sprites/walk/walk1.png"
    }
    if(walkAnimationSprite == 2){
        document.getElementById("sprite").src = "sprites/walk/walk2.png"
    }
}

function checkSpeed(){
    speed = document.getElementById("speedSlider").value
}

document.getElementById("sprite").width = 64
document.getElementById("sprite").height = 96