class Game{
    constructor(){
        this.startScreenPannel = document.getElementById('startScreenPannel');
        this.container = document.getElementById('container');
        this.playScreen = document.getElementById('playScreen')
        this.gameoverScreen = document.getElementById('gameoverScreen');
        this.bubu = new Bubu(this.container, this.playScreen, 200, 500, 100, 150, 'images/bubuG.png');
        this.lives = 9;
        this.height = 600;
        this.width = 436;
        this.clouds = [];
        this.enemies = [];
        this.totalPoints = 0;
        this.gamePoints = 0;
        this.cloudCount = 0;
        this.enemyCount = 0;
        this.gameIsOver = false;
        this.gameIntervalId = null;
        this.gameLoopFrequency = Math.floor(1000/60);
        this.secCount = this.gameLoopFrequency/60;
        this.timer = 0;
        this.level= 1;

    }
    start(){
        this.playScreen.style.width = `${this.width}px`;
        this.playScreen.style.height = `${this.height}px`;
        /* removing startScreenPannel */
        this.startScreenPannel.style.display = 'none';

        /* show the gamescreen */
        this.container.style.display = 'block';

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


        if(Math.random()> 0.98 && this.clouds.length < 10 * this.level) {
            this.clouds.push(new Cloud(this.gameScreen))
        }

        if(Math.random()> 0.98 && this.enemies.length < 2 * this.level) {
            this.clouds.push(new Cloud(this.gameScreen))
        }


        for(let i=0; i< this.clouds.length; i++){
            const cloud = this.clouds[i]

            cloud.move()

            if(this.bubu.didCollide(cloud)){

                cloud.element.remove()

                this.clouds.splice(i,1)
                this.gamePoints += 5
                this.cloudCount ++
                if(this.cloudCount > 5){
                    this.lives ++
                    this.cloudCount -= 5
                }
                i--
            }else if(cloud.top > this.height){

                cloud.element.remove()
                this.clouds.splice(i,1)

                i--
            }
        
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
        

        if(this.lives === 0){
            this.endGame()
        }

        if(this.secCount % 60 === 0){
            this.level ++
        }




    }

    endGame(){
        this.clouds.forEach(cloud => cloud.element.remove())
        this.clouds = []
        this.enemies.forEach(enemy => enemy.element.remove())
        this.enemies = []
        this.bubu.element.remove()

        this.gameIsOver = true

        this.gameScreen.style.display = 'none'

        this.gameoverScreen.style.display = 'block'
    }




}