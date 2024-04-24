class Enemy {
    constructor(playScreen) {
        this.playScreen = playScreen
        this.left = Math.floor(Math.random() * 400 + 50);
        this.top = Math.floor(Math.random() * 100 );
        this.width = 40;
        this.height = 60;

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
        this.left += 1
        this.updatePosition()
    }
    updatePosition(){
        this.element.style.left = `${this.left}px`
        this.element.style.top = `${this.top}px`
      }
}


class Chicken {
    constructor(playScreen) {
        this.playScreen = playScreen
        this.left = Math.floor(Math.random() * 400 + 50);
        this.top = Math.floor(Math.random() * 100 );
        this.width = 50;
        this.height = 70;

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
        this.left -= 1
        this.updatePosition()
    }
    updatePosition(){
        this.element.style.left = `${this.left}px`
        this.element.style.top = `${this.top}px`
      }
   

}