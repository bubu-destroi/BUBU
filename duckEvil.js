

class DuckFamily {
    constructor(playScreen) {
        this.playScreen = playScreen
        this.left = Math.floor(Math.random() * 800 );
        this.top = -384;
        this.width = 400;
        this.height = 384;

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