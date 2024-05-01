class Enemy {
    constructor(playScreen, level) {
        this.playScreen = playScreen
        this.left = Math.floor(Math.random() * 600 + 50);
        this.top = -40;
        this.width = 50;
        this.height = 40;


        this.level = level;


        this.way = 1;
        if(level>4){
           this.way=Math.floor(Math.random() * (3 - -2) + -2 )
           
        }
        
        console.log(this.way)

        this.element = document.createElement('img');
        this.element.src = './images/ganso.png';

        this.element.style.position = 'absolute';
        this.element.style.width = `${this.width}px`
        this.element.style.height = `${this.height}px`

        //position the player

        this.element.style.left = `${this.left}px`
        this.element.style.top = `${this.top}px`

        this.playScreen.appendChild(this.element) //make it visible
        
    }
    move(){
        this.top += 2
        this.left += this.way
        


        this.updatePosition()
    }
    updatePosition(){
        this.element.style.left = `${this.left}px`
        this.element.style.top = `${this.top}px`
      }
}


class Chicken {
    constructor(playScreen, level) {
        this.playScreen = playScreen
        this.left = Math.floor(Math.random() * 400 + 50);
        this.top = Math.floor(Math.random() * 100 );
        this.width = 50;
        this.height = 70;

        this.level = level;

        this.way = 1;
        if(level>6){
           this.way=Math.floor(Math.random() * (3 - -2) + -2 )
           
        }

        this.element = document.createElement('img');
        this.element.src = './images/racas-galinha.png';

        this.element.style.position = 'absolute';
        this.element.style.width = `${this.width}px`
        this.element.style.height = `${this.height}px`

        //position the player

        this.element.style.left = `${this.left}px`
        this.element.style.top = `${this.top}px`

        this.playScreen.appendChild(this.element) //make it visible
        
    }
    move(){
        this.top += 3
        this.left -= this.way
        if(this.level>7){
            this.top +6
        }
        this.updatePosition()
    }
    updatePosition(){
        this.element.style.left = `${this.left}px`
        this.element.style.top = `${this.top}px`
      }
   

}


