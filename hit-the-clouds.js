

class HitTheCloudz {
    constructor(playScreen) {
        this.playScreen = playScreen
        this.left = 200;
        this.top = 0;
        this.width = 400;
        this.height = 300;

        this.element = document.createElement('img');
        this.element.src = './images/hit the clouds.png';

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
        if(this.top > 600){
            this.top = 600
            this.element.remove()
        }


        this.updatePosition()

    }
    updatePosition(){
        this.element.style.left = `${this.left}px`
        this.element.style.top = `${this.top}px`
      }
}