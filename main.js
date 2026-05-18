const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//vars
let velo = 0;
let playerSpawnX = 50;
let playerSpawnY = 550;
let playerX = playerSpawnX;
let playerY = playerSpawnY;
let playerWidth = 30;
let playerHeight = 20;
let inputLeft = false;
let inputRight = false;
let movingLeft = false;
let movingRight = false;
let gravity = 0.5;
let falling = true;
let alreadyDashed = false;

//level elements
let blocks = [[0,600],[50,600],[150,600],[100,600],[200,600],[200,650],[250,650],[350,650],[300,650],[400,650],[400,550],[450,550],[500,550],[500,650],[600,650],[550,650],[450,650],[850,550],[850,500],[900,500],[950,500],[950,550],[950,600],[950,650],[1050,600],[1050,650],[1100,450],[1150,450],[1150,600],[1250,400],[1250,500],[1250,450],[1250,600],[1350,350],[1350,400],[1350,500],[1350,450],[1350,600],[1100,600],[1200,600],[1450,150],[1450,200],[1450,250],[1450,300],[1450,350],[1450,450],[1450,400],[1450,500],[1450,550],[1450,600],[1450,650],[1300,600],[1300,500],[1400,600],[1150,250],[1100,250],[950,250],[1050,250],[1000,250],[1000,200],[950,200],[1150,100],[1200,100],[1250,100],[1300,100],[1350,100],[1400,100],[1450,100],[650,650],[700,650],[750,650],[800,650],[850,650],[850,600],[700,600],[750,600],[800,600],[1200,450],[1300,400],[1600,100],[1600,0],[1600,50],[1600,150],[1600,200],[1600,250],[1600,300],[1600,350],[1500,650],[1700,650],[1600,650],[1550,650],[1650,650],[1750,650],[1800,650],[1700,350],[1700,400],[1700,450],[1750,450],[1800,450],[1850,450],[1850,650],[1900,650],[1950,650],[2000,650],[1900,450],[2050,650],[2050,550],[2050,600],[1650,350],[1850,250],[1900,250],[2100,500],[2100,450],[2100,400],[2100,350],[2100,250],[2150,250],[2200,250],[2200,400],[2200,450],[2200,500],[2200,550],[2200,600],[2200,650],[2100,550],[2250,250],[2300,250],[2350,250],[2350,300],[2350,350],[2350,400],[2300,400],[2250,400],[2450,200],[2450,250],[2450,300],[2400,300],[2500,200],[2550,200],[2600,350],[2650,350],[2650,250],[2650,300],[2650,200],[2650,150],[2650,100],[2650,50],[2650,0],[2700,600],[2750,600],[2800,600],[2850,400],[2800,400],[2750,400],[2900,550],[2900,600],[2950,550],[3000,550],[2850,600],[2700,650],[2050,250],[2050,300],[2050,350],[2550,350],[2550,400],[2550,450],[2550,500],[2900,250],[2950,250],[3000,250],[3050,250],[2900,100],[2850,100],[2800,100],[2750,100],[2700,100],[2900,50],[2900,0],[3050,0],[3050,50],[3300,250],[3350,250],[3400,250],[3450,250],[3050,300],[3050,350],[3050,450],[3050,400],[3050,550],[3300,300],[3300,350],[3300,450],[3300,400],[3300,500],[3300,550],[3250,550],[3200,550],[3150,550],[3100,550],[3300,600],[3300,650],[3550,50],[3500,50],[3500,0],[3550,450],[3500,450],[3500,650],[3650,650],[3550,650],[3600,650],[3600,0],[3600,50],[3600,100],[3600,200],[3600,150],[3600,250],[3600,300],[3600,350],[3600,400],[3600,450],[3100,400],[3150,400],[3200,400],[2700,350],[2700,400],[3700,650],[3750,650],[3750,550],[3850,500],[3850,550],[3800,550],[3900,500],[3950,500],[3900,300],[3850,300],[3800,300],[3750,300],[3700,300],[3650,300],[4050,650],[4050,400],[4050,450],[4050,350],[4050,300],[4050,250],[4050,200],[3800,650],[3850,650],[3900,650],[3950,650],[4000,650],[4050,150],[4050,100],[4000,100],[3950,100],[3900,100],[3850,100],[3800,100],[3650,200],[3700,200],[3700,250],[4150,0],[4150,50],[4150,100],[4200,400],[4200,450],[4200,500],[4200,550],[4200,600],[4200,650],[4300,400],[4300,550],[4450,400],[4450,450],[4250,550],[4550,300],[4450,150],[4400,150],[4350,150],[4450,350],[4450,300],[4500,300],[4550,450],[4550,550],[4550,600],[4600,300],[4650,300],[4650,250],[4650,200],[4650,150],[4650,100],[4650,50],[4650,0],[4300,600],[4300,650],[4600,450],[4550,500],[4700,450],[4700,500],[4700,550],[4700,600],[4700,650],[4750,450],[4800,450],[4800,400],[4800,350],[4850,350],[4900,350],[4900,500],[4900,450],[4900,550],[4850,250],[4900,250],[4850,200],[4850,150],[4850,100],[4850,50],[4850,0],[4350,400],[4350,350],[4350,300],[4350,250],[4350,200],[4200,200],[4250,200],[4200,150],[4200,100],[4950,350],[5000,350],[5000,400],[5000,450],[4950,450],[5100,150],[5100,200],[5100,300],[5100,250],[5100,350],[5100,400],[5100,450],[5050,450],[5150,150],[5200,150],[5200,200],[5200,250],[5200,300],[5200,350],[5200,400],[5200,450],[5000,600],[5050,600],[5100,600],[5150,600],[5200,600],[5250,600],[4850,550],[4800,550],[4750,550],[5300,0],[5300,50],[5300,100],[5300,150],[5300,200],[5300,300],[5300,250],[5300,350],[5300,400],[5300,450],[5300,550],[5300,500],[5300,600],[5150,450],[5400,650],[5450,500],[5450,600],[5450,550],[5450,650],[5500,500],[5550,500],[5550,550],[5550,600],[5550,650],[5550,450],[5550,400],[5550,350],[5550,300],[5450,0],[5450,50],[5450,100],[5450,150],[5350,200],[5450,200],[5600,0],[5600,50],[5600,100],[5600,150],[5600,200],[5600,250],[5600,350],[5600,300],[5600,400],[5600,450],[5600,500],[5600,550],[5600,600],[5600,650]]
let spikes = [[1000,650,"up"],[1150,500,"down"],[1100,500,"down"],[1350,300,"up"],[1000,150,"up"],[950,150,"up"],[1600,400,"down"],[1800,500,"down"],[1750,500,"down"],[1850,500,"down"],[1900,500,"down"],[1750,400,"up"],[1900,200,"up"],[2400,250,"up"],[2300,450,"down"],[2250,450,"down"],[2400,350,"down"],[2750,450,"down"],[2800,450,"down"],[2850,450,"down"],[2350,650,"up"],[2400,650,"up"],[2300,650,"up"],[2250,650,"up"],[2650,400,"down"],[2600,400,"down"],[2550,550,"down"],[2900,150,"down"],[2850,150,"down"],[2800,150,"down"],[2750,150,"down"],[2700,150,"down"],[3050,100,"down"],[3250,500,"up"],[3200,500,"up"],[3550,100,"down"],[3500,100,"down"],[3450,300,"down"],[3400,300,"down"],[3450,650,"up"],[3400,650,"up"],[3350,650,"up"],[3150,350,"up"],[3200,350,"up"],[3100,350,"up"],[2700,450,"down"],[3800,500,"up"],[3900,450,"up"],[3900,350,"down"],[3750,350,"down"],[3700,350,"down"],[3650,350,"down"],[3850,150,"down"],[3800,150,"down"],[3950,50,"up"],[4050,500,"down"],[4200,350,"up"],[4150,150,"down"],[4300,450,"down"],[4450,500,"down"],[4550,400,"up"],[4900,200,"up"],[4750,400,"up"],[4550,650,"down"],[4400,400,"right"],[4450,250,"up"],[4500,150,"right"],[5000,550,"up"],[5400,600,"up"],[5450,250,"down"],[5050,400,"up"]]
let bounces = [[300,600,"off",0],[950,450,"off",0],[1050,550,"off",0],[1050,200,"off",0],[1300,350,"off",0],[1800,400,"off",0],[1850,200,"off",0],[1800,600,"off",0],[1850,600,"off",0],[1750,600,"off",0],[2000,600,"off",0],[2450,650,"off",0],[2850,550,"off",0],[2750,350,"off",0],[3450,200,"off",0],[3500,400,"off",0],[3550,400,"off",0],[3650,600,"off",0],[4100,650,"off",0],[4250,500,"off",0],[4600,250,"off",0],[4350,650,"off",0],[5000,300,"off",0],[4800,650,"off",0],[5250,550,"off",0],[250,600,"off",0]]
let decors = [[500,600],[450,600],[400,600],[150,650],[100,650],[50,650],[0,650],[900,650],[900,600],[900,550],[1100,650],[1150,650],[1200,650],[1300,650],[1250,650],[1350,650],[1400,650],[1300,450],[1150,150],[1150,200],[1100,200],[1100,150],[1000,300],[1050,350],[1100,400],[1100,350],[1100,300],[1050,300],[1150,300],[1150,350],[1150,400],[1200,400],[1200,350],[1200,300],[1250,350],[1250,550],[1200,500],[1200,550],[1300,550],[1350,550],[1650,400],[1650,450],[1600,500],[1650,500],[1650,550],[1600,550],[1600,600],[1650,600],[1550,600],[1700,500],[1700,550],[1700,600],[2100,650],[2150,650],[2150,600],[2100,600],[2150,550],[2150,500],[2150,450],[2150,400],[2150,350],[2150,300],[2100,300],[2200,300],[2200,350],[2250,350],[2250,300],[2300,300],[2300,350],[2500,250],[2550,250],[2550,300],[2500,300],[2500,350],[2500,400],[2500,450],[2500,500],[2500,550],[2500,600],[2500,650],[2450,350],[2450,400],[2450,450],[2600,250],[2600,300],[2950,0],[3000,0],[3000,50],[2950,50],[2950,100],[3000,100],[3000,200],[2950,200],[2950,150],[3000,150],[2950,300],[3000,300],[3000,350],[2950,350],[2950,450],[3000,450],[3000,400],[2950,400],[2950,500],[3000,500],[3100,450],[3150,450],[3150,500],[3100,500],[3050,500],[2900,300],[2900,350],[2900,400],[2900,500],[2900,450],[3650,250],[3550,0],[3500,500],[3550,500],[3500,550],[3550,550],[3600,500],[3600,550],[3600,600],[3550,600],[3500,600],[3850,350],[3800,350],[3800,400],[3850,400],[3850,450],[4000,150],[3950,200],[3900,200],[3900,250],[3950,150],[3900,150],[3850,250],[4000,200],[4000,250],[3950,250],[3950,300],[4000,350],[4000,300],[4000,400],[4000,450],[3950,350],[3950,400],[3950,450],[4000,500],[4000,550],[4000,600],[3950,550],[3950,600],[3900,550],[3900,600],[3850,600],[3800,600],[3750,600],[4600,350],[4600,400],[4650,400],[4650,350],[4650,450],[4650,500],[4650,550],[4650,600],[4650,650],[4600,650],[4600,600],[4600,550],[4600,500],[4750,500],[4800,500],[4850,500],[4850,450],[4850,400],[4950,400],[4900,400],[5150,400],[5150,350],[5150,300],[5150,250],[5150,200],[5500,550],[5500,600],[5500,650],[5650,650],[5700,650],[5750,650],[5750,600],[5700,600],[5650,600],[5650,550],[5700,550],[5750,550],[5750,500],[5700,500],[5650,500],[5650,450],[5700,450],[5750,450],[5750,400],[5700,400],[5650,400],[5650,350],[5700,350],[5750,350],[5750,300],[5700,300],[5650,300],[5650,250],[5700,250],[5750,250],[5750,200],[5700,200],[5650,200],[5650,150],[5700,150],[5750,150],[5750,100],[5700,100],[5650,100],[5650,50],[5700,50],[5750,50],[5750,0],[5700,0],[5650,0],[2750,650],[2800,650],[2850,650],[2900,650],[2950,650],[2950,600],[3000,600],[3000,650],[3050,650],[3100,650],[3150,650],[3250,650],[3200,650],[3250,600],[3200,600],[3150,600],[3100,600],[3050,600],[4250,600],[4250,650],[4850,300],[4900,300],[5200,500],[5200,550],[5150,550],[5150,500],[5100,500],[5050,500],[5100,550],[5250,650],[5200,650],[5150,650],[5100,650],[5050,650],[5000,650],[2850,0],[2850,50],[2800,50],[2750,50],[2700,50],[2700,0],[2750,0],[2800,0],[5050,550]]

//imagez
let spikeUp = new Image();
spikeUp.src = "./images-folder/spike-up.png"

let spikeLeft = new Image();
spikeLeft.src = "./images-folder/spike-left.png"

let spikeRight = new Image();
spikeRight.src = "./images-folder/spike-right.png"

let spikeDown = new Image();
spikeDown.src = "./images-folder/spike-down.png"

let spring1 = new Image();
spring1.src = "./images-folder/spring-frame-1.png"

let spring2 = new Image();
spring2.src = "./images-folder/spring-frame-2.png"

let brick = new Image();
brick.src = "./images-folder/wood-block.png"

let decoBrick = new Image();
decoBrick.src = "./images-folder/wood-deco-block.png"

let bg = new Image();
bg.src = "./images-folder/wood-bg.webp"

let crawlRight1 = new Image(); crawlRight1.src = "./images-folder/crawl-right-1.png"
let crawlRight2 = new Image(); crawlRight2.src = "./images-folder/crawl-right-2.png"
let crawlLeft1 = new Image(); crawlLeft1.src = "./images-folder/crawl-left-1.png"
let crawlLeft2 = new Image(); crawlLeft2.src = "./images-folder/crawl-left-2.png"
let dashingLeft = new Image(); dashingLeft.src = "./images-folder/dashing-left.png"
let dashingRight = new Image(); dashingRight.src = "./images-folder/dashing-right.png"

document.addEventListener('keydown', e => {
    if (e.key === 'ArrowDown' || e.key === ' ' || e.key === 's') {
        if (falling && !alreadyDashed) {velo += 16; alreadyDashed = true;}
    }
    if (e.key === 'ArrowLeft' || e.key === 'a') {
        inputLeft = true;
    }
    if (e.key === 'ArrowRight' || e.key === 'd') {
        inputRight = true;
    }
    if (e.key === 'c') {
        cameraNeedsMove = true;
    }
});

document.addEventListener('keyup', e => {
    if (e.key === 'ArrowLeft' || e.key === 'a') {
        inputLeft = false;
    }
    if (e.key === 'ArrowRight' || e.key === 'd') {
        inputRight = false;
    }
})

let playerTop;
let playerBottom;
let playerLeft;
let playerRight;

let redFlashTimerConst = 5;
let redFlashTimer = 0;

function death() {
    playerX = playerSpawnX;
    playerY = playerSpawnY;
    velo = 0;

    redFlashTimer = redFlashTimerConst;
}


function moveCamera(dist) {
    for (let block of blocks) {
        block[0] -= dist
    }
    for (let spike of spikes) {
        spike[0] -= dist
    }
    for (let boinger of bounces) {
        boinger[0] -= dist
    }
    for (let decor of decors) {
        decor[0] -= dist
    }

    bgX -= dist/2
    playerX -= dist
}

function collisions() {
    // apply horizontal movement
    if (movingLeft) playerX -= 5;
    if (movingRight) playerX += 5;


    // recalc bounds
    playerLeft = playerX;
    playerRight = playerX + playerWidth;
    playerTop = playerY;
    playerBottom = playerY + playerHeight;

    // resolve horizontal collisions
    for (const block of blocks) {
        const blockLeft = block[0];
        const blockRight = block[0] + 50;
        const blockTop = block[1];
        const blockBottom = block[1] + 50;

        const verticalOverlap = playerBottom > blockTop && playerTop < blockBottom;
        const horizontalOverlap = playerRight > blockLeft && playerLeft < blockRight;

        if (horizontalOverlap && verticalOverlap) {
            if (movingRight) {
                playerX = blockLeft - playerWidth;
            } else if (movingLeft) {
                playerX = blockRight;
            }

            // update bounds after correction
            playerLeft = playerX;
            playerRight = playerX + playerWidth;
        }
    }

    // apply gravity
    velo += gravity;
    playerY += velo;

    // recalc bounds
    playerTop = playerY;
    playerBottom = playerY + playerHeight;

    let onGround = false;

    for (const block of blocks) {
        const blockTop = block[1];
        const blockBottom = block[1] + 50;
        const blockLeft = block[0];
        const blockRight = block[0] + 50;

        const horizontalOverlap = playerRight > blockLeft && playerLeft < blockRight;
        const verticalOverlap = playerBottom > blockTop && playerTop < blockBottom;

        if (horizontalOverlap && verticalOverlap) {
            // falling down
            if (velo > 0 && playerTop < blockTop + 20) {
                playerY = blockTop - playerHeight;
                velo = Math.abs(velo) < 9 ? 0 : -velo * 0.5;
                onGround = true;
                alreadyDashed = false;
            }

            // hitting head
            else if (velo < 0 && playerBottom > blockBottom) {
                playerY = blockBottom;
                velo = 0;
            }

            playerTop = playerY;
            playerBottom = playerY + playerHeight;
        }
    }

    falling = !onGround;

    // check ground collision
    if (playerBottom >= canvas.height) {
        playerY = canvas.height - playerHeight;

        alreadyDashed = false;

        if (Math.abs(velo) < 9) {
            velo = 0;
            falling = false;
        } else {
            velo *= -0.5;
            falling = true;
        }
    }

    //check roof collision
    if (playerTop < 0) {
        playerY = 0;
        velo = 0;
    }

    //check left side collision
    if (playerLeft < 0) {
        playerX = 0;
    }

    //spike collision
    for (const spike of spikes) {
        ctx.strokeStyle = "red";

        //big spike function
        function checkSpikeCol(TopHB, LeftHB, width, height) {
            if (playerRight > LeftHB &&
                playerLeft < LeftHB + width &&
                playerBottom > TopHB &&
                playerTop < TopHB + height
            ) {
                death()
            }
            //draw hitbox
            //ctx.strokeRect(LeftHB, TopHB, width, height);
        }

        if (spike[2] === "up") {
            let TopHB = spike[1] + 35;
            let LeftHB = spike[0] + 10;
            let width = 30;
            let height = 15;

            checkSpikeCol(TopHB, LeftHB, width, height)
        }
        if (spike[2] === "down") {
            let TopHB = spike[1];
            let LeftHB = spike[0] + 10;
            let width = 30;
            let height = 15;

            checkSpikeCol(TopHB, LeftHB, width, height)
        }
        if (spike[2] === "left") {
            let TopHB = spike[1] + 10;
            let LeftHB = spike[0] + 35;
            let width = 15;
            let height = 30;

            checkSpikeCol(TopHB, LeftHB, width, height)
        }
        if (spike[2] === "right") {
            let TopHB = spike[1] + 10;
            let LeftHB = spike[0];
            let width = 15;
            let height = 30;

            checkSpikeCol(TopHB, LeftHB, width, height)
        }
    }

    //boinger collision
    for (const boinger of bounces) {
        let boingerLeft = boinger[0] + 5
        let boingerRight = boinger[0] + 45
        let boingerTop = boinger[1] + 40
        let boingerBottom = boinger[1] + 50

        if (playerRight > boingerLeft &&
            playerLeft < boingerRight &&
            playerBottom > boingerTop &&
            playerTop < boingerBottom
        ) {
            boinger[2] = "on"
            boinger[3] = 15
            velo = -13;
            alreadyDashed = false;
        }
    }

}

const imgSwitchConst = 10;
let imgSwitchTimer = imgSwitchConst;
let imageID = 1;
let lastDirection = 1;

function choosePlayerImage() {
    if (movingRight) {
        imgSwitchTimer -= 1
        lastDirection = 1;
    }
    if (movingLeft) {
        imgSwitchTimer -= 1
        lastDirection = 0;
    }

    if (lastDirection == 1) {
        if (alreadyDashed) {ctx.drawImage(dashingRight, playerX - 10, playerY - 25, 50, 50)}
        else if (imageID == 1) {ctx.drawImage(crawlRight1, playerX - 10, playerY - 25, 50, 50)}
        else if (imageID == 2) {ctx.drawImage(crawlRight2, playerX - 10, playerY - 25, 50, 50)};
    }
    if (lastDirection == 0) {
        if (alreadyDashed) {ctx.drawImage(dashingLeft, playerX - 10, playerY - 25, 50, 50)}
        else if (imageID == 1) {ctx.drawImage(crawlLeft1, playerX - 10, playerY - 25, 50, 50)}
        else if (imageID == 2) {ctx.drawImage(crawlLeft2, playerX - 10, playerY - 25, 50, 50)};
    }

    if (imgSwitchTimer <= 0) {
        imgSwitchTimer = imgSwitchConst;
        if (imageID == 1) {imageID = 2}
        else {imageID = 1};
    }
}

let bgX = 0

function draw() {
    //bg
    ctx.globalAlpha = 0.7
    ctx.drawImage(bg, bgX, 0, 1024, 1024)
    ctx.drawImage(bg, bgX + 1024, 0, 1024, 1024)
    ctx.drawImage(bg, bgX + 2048, 0, 1024, 1024)
    ctx.drawImage(bg, bgX + 3072, 0, 1024, 1024)
    ctx.globalAlpha = 1;

    //deco blocks, opacity of deco blocks
    for (const deco of decors) {
        const distToDeco = Math.abs((playerX + 15) - deco[0]) + Math.abs((playerY + 10) - deco[1])
    
        if (distToDeco < 50) {ctx.globalAlpha = 0.3}
        else if (distToDeco < 100) {ctx.globalAlpha = 0.5}
        else if (distToDeco < 150) {ctx.globalAlpha = 0.7}
        else if (distToDeco < 200) {ctx.globalAlpha = 0.9}
        ctx.drawImage(decoBrick, deco[0], deco[1], 50, 50)
        ctx.globalAlpha = 1;
    }

    //blocks
    for (const block of blocks) {
        ctx.fillStyle = 'black';
        ctx.drawImage(brick, block[0], block[1], 50, 50)
    }

    //spikes
    for (const spike of spikes) {
        if (spike[2] === "up") {ctx.drawImage(spikeUp, spike[0], spike[1], 50, 50)}
        if (spike[2] === "down") {ctx.drawImage(spikeDown, spike[0], spike[1], 50, 50)}
        if (spike[2] === "left") {ctx.drawImage(spikeLeft, spike[0], spike[1], 50, 50)}
        if (spike[2] === "right") {ctx.drawImage(spikeRight, spike[0], spike[1], 50, 50)}
    }

    //boingers
    for (const boinger of bounces) {
        if (boinger[2] === "off") {ctx.drawImage(spring1, boinger[0], boinger[1], 50, 50)}
        if (boinger[2] === "on") {ctx.drawImage(spring2, boinger[0], boinger[1], 50, 50)}
        
    }
    //ground
    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.moveTo(0, canvas.height);     
    ctx.lineTo(canvas.width, canvas.height); 
    ctx.stroke(); 
    //roof
    ctx.beginPath();
    ctx.moveTo(0, 0);     
    ctx.lineTo(canvas.width, 0); 
    ctx.stroke(); 

    //player
    ctx.fillStyle = 'black'
    choosePlayerImage()

    //red flash for death
    redFlashTimer = Math.max(0, redFlashTimer - 0.5);
    ctx.globalAlpha = redFlashTimer / 10;
    ctx.fillStyle = "red";
    ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.globalAlpha = 1;
}



let cameraTimer = 0;
let cameraTimerMax1 = 144;
let cameraNeedsMove1 = false;
let camera1Done = false;
let cameraTimerMax2 = 129;
let cameraNeedsMove2 = false;
let camera2Done = false;
let cameraTimerMax3 = 144;
let cameraNeedsMove3 = false;
let camera3Done = false;

function animate() {
    ctx.clearRect(0,0,canvas.width, canvas.height)
    if (cameraTimer > cameraTimerMax1 && cameraNeedsMove1 === true) {cameraNeedsMove1 = false; playerSpawnX = 100; cameraTimer = 0; camera1Done = true;}
    if (cameraTimer > cameraTimerMax2 && cameraNeedsMove2 === true) {cameraNeedsMove2 = false; cameraTimer = 0; camera2Done = true; playerSpawnX = 50; camera1Done = false;}
    if (cameraTimer > cameraTimerMax3 && cameraNeedsMove3 === true) {cameraNeedsMove3 = false; cameraTimer = 0; camera3Done = true; playerSpawnX = 100; playerSpawnY = 500;}

    if (cameraNeedsMove1 || cameraNeedsMove2 || cameraNeedsMove3) {
        moveCamera(10);
        cameraTimer += 1;
    }

    if (playerX > 1450 && !camera2Done) {cameraNeedsMove1 = true}
    if (playerX > 1400 && camera1Done) {cameraNeedsMove2 = true}
    if (playerX > 1450 && camera2Done) {cameraNeedsMove3 = true}
    
    //boinger timer
    for (const boinger of bounces) {
        boinger[3] = Math.max(boinger[3] - 1, 0)
        if (boinger[3] == 0) {boinger[2] = "off"}
    }

    draw()

    playerTop = playerY
    playerBottom = playerY + playerHeight
    playerLeft = playerX
    playerRight = playerX + playerWidth



    movingLeft = inputLeft && !inputRight;
    movingRight = inputRight && !inputLeft;


    collisions()


    requestAnimationFrame(animate)
}

requestAnimationFrame(animate)