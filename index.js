var walkTimer
//var direction = document.getElementById("direction").value
var sprite = document.getElementById("sprite");
var direction
var spritePos = sprite.getBoundingClientRect()
spritePos.y = 172.8
var yPos = document.getElementById("sprite").style.bottom
var walkAnimationSprite = 1
var speedBuffer
var movekeypress = 0
var keypressed
var audioToggle = 1
var speed = 30
var step = 0
var walkAnimationSpriteSpeed = speed/25
var spacepress = 0
var loop = 0
var jumpvar = 30

//Detects key press

function jump (){
    if(loop != 61){
        var yjumpos = spritePos.y + jumpvar
        if (!((spritePos.x >= 329 && spritePos.x <= 481) || (spritePos.x >= 149 && spritePos.x <= 269)) || spritePos.y < 333.2) {
                document.getElementById("sprite").style.bottom = `${yjumpos}px`
                document.getElementById("sprite2").style.bottom = `${yjumpos}px`
        }
        else{
            if (!((spritePos.x >= 329 && spritePos.x <= 481) || (spritePos.x >= 149 && spritePos.x <= 269)) || spritePos.y >= 340) {
                document.getElementById("sprite").style.bottom = "172.8px"
                document.getElementById("sprite2").style.bottom = "172.8px"
                spritePos.y = 172.8
                loop = 60
                spacepress = 0
                jumpvar = 30
            }
            else{
                document.getElementById("coin").pause()
                document.getElementById("coin").currentTime = 0
                document.getElementById("coin").play()    
                document.getElementById("block").pause()
                document.getElementById("block").currentTime = 0
                document.getElementById("block").play()
                document.getElementById("cfb").src = "coin.gif"
                document.getElementById("questionblock").classList.add('jump-animation')
                document.getElementById("cfb").classList.add('coin')
                jumpvar -= 30.6
                loop += 42
            }
        }

//            }
        //console.log(jumpvar)
        //console.log(loop)
        //console.log(spritePos.y)
        spritePos.y += jumpvar
        jumpvar -= 1
        loop += 1
        setTimeout(jump,10)
    }
}

document.onkeydown = function(key){
    if(key.key == "d"){
        direction = "Right"
        spritePos.x += speed
        document.getElementById("sprite").style.left = `${spritePos.x}px`
        document.getElementById("sprite2").style.left = `${spritePos.x + 200}px`
        movekeypress = 2
        walkAnimationSprite += walkAnimationSpriteSpeed
        step += 1
    }
    if(key.code == 'Space'){
        if(spacepress == 0){
            spacepress += 1
            document.getElementById("jump").pause()
            document.getElementById("jump").currentTime = 0
            document.getElementById("jump").play()
            jump()
        }
    }
    if(key.key == 'a'){
        direction = "Left"
        spritePos.x -= speed
        document.getElementById("sprite").style.left = `${spritePos.x}px`
        document.getElementById("sprite2").style.left = `${spritePos.x + 200}px`
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


function resetJump(){
    spacepress = 0
    loop = 0
    //console.log(spacepress)
    spritePos.y = 172.8
    jumpvar = 30
    document.getElementById("sprite").style.bottom = "172.8px"
    document.getElementById("sprite2").style.bottom = "172.8px"
    document.getElementById("questionblock").classList.remove('jump-animation')
    document.getElementById("cfb").classList.remove('coin')
    document.getElementById("cfb").src = "coin_sprites/c3.png"
}

function mili(){
    document.getElementById("theme").play()
    console.log(spritePos.y)
    yPos = document.getElementById("sprite").style.bottom
    document.getElementById("audiotoggle").onclick = ()=>{audioToggle += 1}
    if(loop >= 60){
        setTimeout(resetJump, 100)
    }
    if(audioToggle == 2){
        audioToggle = 0
    }
    //Checks for the rotation of mario
    if(direction == "Right"){
        document.getElementById("sprite").style.transform = 'scaleX(-1)'
        document.getElementById("sprite").style.filter = "drop-shadow(-12.8px 12.8px 0px #00000098)"
        document.getElementById("sprite2").style.transform = 'scaleX(-1)'
        document.getElementById("sprite2").style.filter = "drop-shadow(-12.8px 12.8px 0px #00000098)"
    }
    else if(direction == "Left"){
        document.getElementById("sprite").style.transform = 'scaleX(1)'
        document.getElementById("sprite").style.filter = "drop-shadow(12.8px 12.8px 0px #00000098)"
        document.getElementById("sprite2").style.transform = 'scaleX(1)'
        document.getElementById("sprite2").style.filter = "drop-shadow(12.8px 12.8px 0px #00000098)"
    }
    document.getElementById("speed").innerHTML = "Speed:" + speed
    document.getElementById("walkanim").innerHTML = "move" + movekeypress
    document.getElementById("movekeypress").innerHTML = "step" + step
    if(walkAnimationSprite == 1){
        document.getElementById("sprite").src = "sprites/walk/walk1.png"
        document.getElementById("sprite2").src = "sprites/walk/lwalk1.png"
    }
    if(walkAnimationSprite >= 2){
        document.getElementById("sprite").src = "sprites/walk/walk2.png"
        document.getElementById("sprite2").src = "sprites/walk/lwalk2.png"
    }
    if(movekeypress == 0){
        walkAnimationSprite = 1
        document.getElementById("sprite").src = "sprites/idle.png"
        document.getElementById("sprite2").src = "sprites/lidle.png"
        document.getElementById("footstep").pause()
    }
    if(walkAnimationSprite >= 3){
        walkAnimationSprite = 1
    }
    if(walkAnimationSprite == 0){
        document.getElementById("sprite").src = "sprites/idle.png"
        document.getElementById("sprite2").src = "sprites/lidle.png"
    }
    if(movekeypress == 1){
        document.getElementById("sprite").src = "sprites/duck.png"
        document.getElementById("sprite2").src = "sprites/lduck.png"
    }
    if(movekeypress == 3){
        document.getElementById("sprite").src = "sprites/lookup.png"
        document.getElementById("sprite2").src = "sprites/llookup.png"
    }
    if(audioToggle == 0){
        if(step==2){document.getElementById("footstep").play()}
    }
    if(movekeypress==0){
        step = 0
        document.getElementById("footstep").pause()
    }
    if(loop >= 1 && loop <= 60){
        if(jumpvar >= 0){
            document.getElementById("sprite").src = "sprites/jump.png"
            document.getElementById("sprite2").src = "sprites/ljump.png"
        }
        if(jumpvar <= -1){
            document.getElementById("sprite").src = "sprites/fall.png"
            document.getElementById("sprite2").src = "sprites/lfall.png"
        }
    }
    if(spritePos.x >= 2200){
        document.getElementById("sprite").style.left = '-50px'
        spritePos.x = -240
    }
    if(spritePos.x <= -250){
        document.getElementById("sprite").style.left = '1980px'
        spritePos.x = 2180
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
