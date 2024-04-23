class Enemy {
    constructor(playScreen) {
        this.playScreen = playScreen
        this.left = Math.floor(Math.random() * 300 + 50);
        this.top = 0;
        this.width = 50;
        this.height = 100;

        this.element = document.createElement('img');
        this.element.src = './images/galinha.png';

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
        this.updatePosition()
    }
    updatePosition(){
        this.element.style.left = `${this.left}px`
        this.element.style.top = `${this.top}px`
      }
}