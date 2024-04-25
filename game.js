class Game{
    constructor(){
        this.startScreenPannel = document.getElementById('startScreenPannel');
        this.container = document.getElementById('container');
        this.playScreen = document.getElementById('playScreen')
        this.gameoverScreen = document.getElementById('gameoverScreen');
        this.bubu = new Bubu(this.container, this.playScreen, 200, 500, './images/bubu.png');
        this.sun = new Sun(this.playScreen, this.bubu)
        this.lives = 9;
        this.livesCountScreen = document.getElementById("livesCountScreen");

        


        this.height = 600;
        this.width = 600;
        this.clouds = [];
        this.pinkClouds= [];
        this.stars = [];


        this.enemies = [];
        this.chickens = [];
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
        this.bubu.move()
        this.sun.move()

        


        for(let i=0; i< this.clouds.length; i++){
            const cloud = this.clouds[i]

            cloud.move()

            if(this.bubu.didCollide(cloud)){

                cloud.element.remove()

                this.clouds.splice(i,1)
                this.gamePoints += 5
                this.cloudCount ++
                if(this.cloudCount > 10){
                    this.lives ++
                    this.cloudCount -= 10
                }
                i--
            }else if(cloud.top > this.height){

                cloud.element.remove()
                this.clouds.splice(i,1)

                i--
            }
        
        }


        if(Math.random()> 0.90 && this.clouds.length < 4 * (this.level * 2)) {
            this.clouds.push(new Cloud(this.playScreen))
        }


        for(let i=0; i< this.pinkClouds.length; i++){
            const pinkCloud = this.pinkClouds[i]

            pinkCloud.move()

            if(this.bubu.didCollide(pinkCloud)){

                pinkCloud.element.remove()

                this.pinkClouds.splice(i,1)
              
                this.cloudCount += 3
                     if(this.cloudCount>10){
                        this.lives ++
                        this.cloudCount -= 10
                    }
                
                i--
            }else if(pinkCloud.top > this.height){

                pinkCloud.element.remove()
                this.pinkClouds.splice(i,1)

                i--
            }
        
        }


        if(Math.random()> 0.50 && this.pinkClouds.length < 1 * this.level) {
            this.pinkClouds.push(new PinkCloud(this.playScreen))
        }





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


                setTimeout(() => {
                    this.blockEnemies = false;
                    
                }, 2000)

                this.stars = []
                if (this.level>1){
                    this.level -=1}
                i--
    
            }else if(star.left > this.width){

                star.element.remove()
                this.stars = [] 

                i--
            }
        
        } 

        

        if(this.level > 2 && this.cloudCount>9 && this.stars.length === 0) {
            this.stars.push(new Starz(this.playScreen))
        }

        





        for(let i=0; i< this.enemies.length; i++){
            const enemy = this.enemies[i]

            enemy.move()

            if(this.bubu.didCollide(enemy)){

                enemy.element.remove()

                this.enemies.splice(i,1)
                this.gamePoints --
                this.lives --
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
             if(Math.random()> 0.98 && this.enemies.length < 10 * this.level && !this.blocked) {
            this.enemies.push(new Enemy(this.playScreen))
             } 



            
        for(let i=0; i< this.chickens.length; i++){
            const chicken = this.chickens[i]

            chicken.move()

            if(this.bubu.didCollide(chicken)){

                chicken.element.remove()

                this.chickens.splice(i,1)
                this.gamePoints --
                this.lives -= 2
            }else if(chicken.top > this.height){

                chicken.element.remove()
                this.chickens.splice(i,1)

                i--
            }
        }

        if(this.level > 2){
             if(Math.random()> 0.98 && this.chickens.length < 2 * (this.level-1)) {
            this.chickens.push(new Chicken(this.playScreen))
             } }

  

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
        this.enemies.forEach(enemy => enemy.element.remove())
        this.enemies = []
        this.chickens.forEach(chicken => chicken.element.remove())
        this.chickens = []
        this.pinkClouds.forEach(pinkCloud => pinkCloud.element.remove())
        this.pinkClouds = []
        this.bubu.element.remove()

        this.gameIsOver = true

        this.container.style.display = 'none' 

        this.gameoverScreen.style.display = 'flex'

        this.bubuWokeUp.innerText = 'BUBU WOKE UP'

        

    } 
}