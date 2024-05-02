

class DuckFamily {
    constructor(playScreen) {
        this.playScreen = playScreen
        this.left = Math.floor(Math.random()  * 500 );
        this.top = -231;
        this.width = 450;
        this.height = 231;

        this.element = document.createElement('img');
        this.element.src = './images/PATA-verde.png';

        this.element.style.position = 'absolute';
        this.element.style.width = `${this.width}px`
        this.element.style.height = `${this.height}px`

        //position the player

        this.element.style.left = `${this.left}px`
        this.element.style.top = `${this.top}px`

        this.playScreen.appendChild(this.element) //make it visible
        
    }
    move(){
        this.top += 1
        if(this.top > 800){
            this.top = 800
            this.element.remove()
        }


        this.updatePosition()

    }
    updatePosition(){
        this.element.style.left = `${this.left}px`
        this.element.style.top = `${this.top}px`
      }
}




class BabyDuck {
    constructor(playScreen) {
        this.playScreen = playScreen
        this.left = Math.floor(Math.random() * 500 );
        this.top = -200;
        this.width = 150;

        this.element = document.createElement('img');
        this.element.src = './images/baby.png';

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
        if(this.top > 800){
            this.top = 800
            this.element.remove()
        }


        this.updatePosition()

    }
    updatePosition(){
        this.element.style.left = `${this.left}px`
        this.element.style.top = `${this.top}px`
      }
}