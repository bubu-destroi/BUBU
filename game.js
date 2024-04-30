class Game{
    constructor(){
        this.startScreenPannel = document.getElementById('startScreenPannel');
        this.container = document.getElementById('container');
        this.playScreen = document.getElementById('playScreen')
        this.gameoverScreen = document.getElementById('gameoverScreen');
        this.bubu = new Bubu(this.container, this.playScreen, 200, 500, './images/bubu.png');
        this.sun = new Sun(this.playScreen, this.bubu)
        this.lives = 7;
        this.livesCountScreen = document.getElementById("livesCountScreen");


        this.hitTheClouds = new HitTheCloudz(this.playScreen);
        this.every30cloud = new Every30Cloud(this.playScreen);
        this.birdsHateBubu = new BirdsHateBubu(this.playScreen);
        this.redStarClears = new RedStar(this.playScreen);

        this.height = 600;
        this.width = 800;


        this.clouds = [];
        this.pinkClouds= [];
        this.stars = [];
        this.cloud60= 0;
        this.blueStars = [];


        this.enemies = [];
        this.chickens = [];

        this.ducks = [];



        this.totalPoints = 0;
        this.gamePoints = 0;
        this.pointCount = document.getElementById('pointCount');


        this.cloudCount = 0;
        this.cloudh1 = document.getElementById('cloudCount')

        this.enemyCount = 0;

        this.gameIsOver = false;

        this.gameIntervalId = null;
        this.gameLoopFrequency = Math.floor(1000/60);
        this.secCount = this.gameLoopFrequency/60;
        this.secondsCountScreen = document.getElementById('secCount')
        this.timer = 0;

        this.level= 1;

        this.levelScreen = document.getElementById('levelScreen')

        this.levelCount = document.getElementById('levelCount')

        this.blockEnemies = false;
        this.blockDuck = false;

        this.bubuWokeUp = document.getElementById('bubuWokeUp')



    }
    start(){
        this.startScreenPannel.style.display = 'none';

        this.playScreen.style.width = `${this.width}px`;
        this.playScreen.style.height = `${this.height}px`;
        /* removing startScreenPannel */

        /* show the gamescreen */
        this.container.style.display = 'flex';
        this.container.style.justifyContent = 'space-between';
        this.gameoverScreen.style.display = 'none';

        /* should descend "HIT THE CLOUDS div" */
      

        /* start loop */
        this.gameIntervalId = setInterval(()=>{
            this.gameLoop()
        }, this.gameLoopFrequency);
    }
    gameLoop(){
        this.update()
        this.timer ++
        this.secCount = Math.floor(this.timer/60)

        if(this.gameIsOver){
            clearInterval(this.gameIntervalId)
        }
    }

    update(){
    
        this.hitTheClouds.move()
        this.sun.move()
        this.bubu.move()
        if(this.cloud60>59){
            this.cloud60 -=59
        } 

        if(this.secCount>1){
            this.every30cloud.move()
        }

        if(this.secCount>8){
            this.birdsHateBubu.move()
        }

        if(this.level===2 && this.cloud60>50){
            this.redStarClears.move()

        }

        

        
/* BEGIN NORMAL CLOUDS -------------------------------*/

        for(let i=0; i< this.clouds.length; i++){
            const cloud = this.clouds[i]

            cloud.move()

            if(this.bubu.didCollide(cloud)){

                cloud.element.remove()
          

                this.gamePoints += 5
                this.clouds.splice(i,1)
              
                this.cloudCount ++
                this.cloud60 ++
                if(this.cloudCount > 30){
                    this.lives ++
                    this.cloudCount -= 30
                }
                i--
            }else if(cloud.top > this.height){
                cloud.element.remove()
                this.clouds.splice(i,1)

                i--
            }
        
        }
        if(this.secCount>2){
        if(Math.random()> 0.99 && this.clouds.length < 4 * this.level) {
            this.clouds.push(new Cloud(this.playScreen))
            this.clouds.push(new CloudLeft(this.playScreen))
        }}

/* END NORMAL CLOUDS------------------------------------ */


/* BEGIN PINK CLOUDS------------------------------------ */
        for(let i=0; i< this.pinkClouds.length; i++){
            const pinkCloud = this.pinkClouds[i]

            pinkCloud.move()

            if(this.bubu.didCollide(pinkCloud)){

                pinkCloud.element.remove()

                this.pinkClouds.splice(i,1)
              
                this.cloudCount += 3
                this.cloud60 ++
                     if(this.cloudCount>30){
                        this.lives ++
                        this.cloudCount -= 30
                    }
                
                i--
            }else if(pinkCloud.top > this.height){

                pinkCloud.element.remove()
                this.pinkClouds.splice(i,1)

                i--
            }
        
        }
        if(this.secCount>4){
        if(Math.random()> 0.99 && this.pinkClouds.length < 1 * this.level) {
            this.pinkClouds.push(new PinkCloud(this.playScreen))
        }}

/* END PINK CLOUDS---------------------------------- */


/* BEGIN STARS -------------------------------------*/

        for(let i=0; i< this.stars.length; i++){
            const star = this.stars[i]

            star.move()

            if(this.bubu.didCollide(star)){

                star.element.remove()
                this.blockEnemies = true;
                this.enemies.forEach(enemy => enemy.element.remove())
                this.enemies = []
                this.chickens.forEach(chicken => chicken.element.remove())
                this.chickens = []
                if(this.cloud60>59){
                    this.cloud60 -=59
                }

                setTimeout(() => {
                    this.blockEnemies = false;
                    
                }, 1000)

                this.stars = []
                    /* if (this.level>1){
                        this.level -=1}
                    i--
        */
            }else if(star.left > this.width){

                star.element.remove()
                this.stars = [] 

                i--
            }
        
        } 
      

        if(this.level > 1 && this.cloud60>59 && this.stars.length === 0) {
            this.stars.push(new Starz(this.playScreen))
        }

        /* END STARS -----------------------------------------*/


    for(let i=0; i< this.blueStars.length; i++){
            const blueStar = this.blueStars[i]

            blueStar.move()

            if(this.bubu.didCollide(blueStar)){


                blueStar.element.remove()

                this.blockDuck = true;    
                this.ducks.forEach(duck => duck.element.remove())
                this.ducks = []
               
                
                    setTimeout(() => {
                        this.blockDuck = false


                       
                    }, 10000);

              

                this.blueStars = []
        
            }else if(blueStar.left > this.width){

                blueStar.element.remove()
                this.blueStars = [] 

                i--
            }
        
        } 

        if(this.level > 0 && this.ducks.length === 1) {
            if(Math.random()> 0.99 && this.blueStars.length < 1 * 1) {
                this.blueStars.push(new BlueStar(this.playScreen))
            }
            
        }






        /* BEGIN ENEMIES------------------------------------- */


        for(let i=0; i< this.enemies.length; i++){
            const enemy = this.enemies[i]

            enemy.move()

            if(this.bubu.didCollide(enemy)){

                enemy.element.remove()

                this.enemies.splice(i,1)
                this.gamePoints --
                this.lives -=2
            }else if(enemy.top > this.height){

                enemy.element.remove()
                this.enemies.splice(i,1)

                i--
            }
        }
        /* if(this.level > 2){ */
             /* if(Math.random()> 0.8 && this.enemies.length < 1 * this.level -1) {
            this.enemies.push(new Enemy(this.playScreen))
             }  */

             if (this.secCount > 10){
                    if(Math.random()> 0.98 && this.enemies.length < 10 * this.level && !this.blockEnemies) {
            this.enemies.push(new Enemy(this.playScreen, this.level))
             }

}
             /* END ENEMIES--------------------------------------------- */




            /* BEGIN CHICKENS ---------------------------------------------*/
            
        for(let i=0; i< this.chickens.length; i++){
            const chicken = this.chickens[i]

            chicken.move()

            if(this.bubu.didCollide(chicken)){

                chicken.element.remove()

                this.chickens.splice(i,1)
                this.gamePoints --
                this.lives -= 3
            }else if(chicken.top > this.height || chicken.left < 0){

                chicken.element.remove()
                this.chickens.splice(i,1)
 
                i--
            }
        }

        if(this.level> 2 &&  !this.blockEnemies){
             if(Math.random()> 0.98 && this.chickens.length < 4 * (this.level -1)) {
            this.chickens.push(new Chicken(this.playScreen, this.level))
             } }


             /* END CHICKENS ---------------------------------*/

             for(let i=0; i< this.ducks.length; i++){
                const duck = this.ducks[i]
    
                duck.move()
    
                if(this.bubu.didCollide(duck)){
    
                    duck.element.remove()
                    this.ducks.splice(i,1)
                    this.gamePoints --
                    this.lives -= 5
                }else if(duck.top > this.height){
    
                    duck.element.remove()
                    this.ducks.splice(i,1)
     
                    i--
                }
            }
    
            if(this.level> 5){

                 if(Math.random()> 0.99 && this.ducks.length < 1 * 1 && !this.blockDuck) {
                this.ducks.push(new DuckFamily(this.playScreen, this.level))
                 }
                
                
                }



  

        if(this.lives < 1){
            this.endGame()
        }

        this.level = Math.floor(this.secCount/30) + 1

      /*   if(this.secCount > 1 && this.secCount % 30 === 0){
        
            this.level++
            console.log(this.secCount)
            console.log(this.level)
        } */


        this.pointCount.innerText = this.gamePoints

        this.cloudh1.innerText = this.cloudCount

        this.livesCountScreen.innerText = this.lives

        this.secondsCountScreen.innerText = this.secCount

        this.levelCount.innerText = this.level




    }

    endGame(){

        this.clouds.forEach(cloud => cloud.element.remove())
        this.clouds = []
        this.pinkClouds.forEach(pinkCloud => pinkCloud.element.remove())
        this.pinkClouds = []

        this.enemies.forEach(enemy => enemy.element.remove())
        this.enemies = []
        this.chickens.forEach(chicken => chicken.element.remove())
        this.chickens = []
        this.ducks.forEach(duck => duck.element.remove())
        this.ducks = []

       
        this.bubu.element.remove()
        this.sun.element.remove()
        this.hitTheClouds.element.remove()
        this.birdsHateBubu.element.remove()
        this.every30cloud.element.remove()
        this.redStarClears.element.remove()


        this.stars.forEach(star => star.element.remove())
        this.stars = []
        this.blueStars.forEach(blueStar => blueStar.element.remove())
        this.blueStars = []



        this.gameIsOver = true

        this.container.style.display = 'none' 

        this.gameoverScreen.style.display = 'flex'

        this.bubuWokeUp.innerText = 'BUBU WOKE UP'

        

    } 
}