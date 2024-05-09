var walkTimer
//var direction = document.getElementById("direction").value
var sprite = document.getElementById("sprite");
var direction
var spritePos = sprite.getBoundingClientRect()
var walkAnimationSprite = 1
var speedBuffer
var movekeypress = 0
var keypressed
var audioToggle = 0
var speed = 30
var step = 0
var walkAnimationSpriteSpeed = speed/25
console.log(walkAnimationSpriteSpeed)



//Detects key press
document.onkeydown = function(key){
    if(key.key == "d"){
        direction = "Right"
        spritePos.x += speed
        document.getElementById("sprite").style.left = `${spritePos.x}px`
        movekeypress = 2
        walkAnimationSprite += walkAnimationSpriteSpeed
        step += 1
    }
    if(key.key == "a"){
        direction = "Left"
        spritePos.x -= speed
        document.getElementById("sprite").style.left = `${spritePos.x}px`
        movekeypress = 2
        walkAnimationSprite += walkAnimationSpriteSpeed
        step += 1

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

//Sets up all the intervals
//const checkListInterval = setInterval(checkList,1000)
const miliInterval = setInterval(mili,1)
var walkAnimation




function mili(){
    console.log(audioToggle)
    document.getElementById("audiotoggle").onclick = ()=>{
        audioToggle += 1
    }
    if(audioToggle == 2){
        audioToggle = 0
    }
    //Checks for the rotation of mario
    if(direction == "Right"){
        document.getElementById("sprite").style.transform = 'scaleX(-1)'
        document.getElementById("sprite").style.filter = "drop-shadow(-12.8px 12.8px 0px #00000098)"
    }
    else if(direction == "Left"){
        document.getElementById("sprite").style.transform = 'scaleX(1)'
        document.getElementById("sprite").style.filter = "drop-shadow(12.8px 12.8px 0px #00000098)"
    }
    document.getElementById("speed").innerHTML = "Speed:" + speed
    document.getElementById("walkanim").innerHTML = "move" + movekeypress
    document.getElementById("movekeypress").innerHTML = "step" + step
    if(walkAnimationSprite == 1){
        document.getElementById("sprite").src = "sprites/walk/walk1.png"
    }
    if(walkAnimationSprite >= 2){
        document.getElementById("sprite").src = "sprites/walk/walk2.png"
    }
    if(movekeypress == 0){
        walkAnimationSprite = 1
        document.getElementById("sprite").src = "sprites/idle.png"
        document.getElementById("footstep").pause()
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
    if(audioToggle == 0){
        if(step==2){document.getElementById("footstep").play()}
    }
    if(movekeypress==0){
        step = 0
        document.getElementById("footstep").pause()
    }

    if(spritePos.x >= 2000){
        document.getElementById("sprite").style.left = '-50px'
        spritePos.x = -50
    }
    if(spritePos.x <= -100){
        document.getElementById("sprite").style.left = '1980px'
        spritePos.x = 1980
    }
    if(movekeypress == 2){
        if(walkAnimationSprite == 1.25){
            walkAnimationSprite == 2
        }
    }
}

document.getElementById("sprite").width = 102.4
document.getElementById("sprite").height = 153.6
document.getElementById("sprite2").width = 102.4
document.getElementById("sprite2").height = 153.6