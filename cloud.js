/* class Cloud extends Things{
    constructor (picture){

        super (direction, size, speed)

        const cloudPic = ['../BUBU/images/cloudS.png','../BUBU/images/cloudM.png']

        const randomNr = Math.floor(Math.random() >0.99 * cloudPic.length );

        this.picture = cloudPic[randomNr]

        this.element = document.createElement(`${this.picture}`)

        

    }

} */

class Cloud {
    constructor(playScreen) {
        this.playScreen = playScreen
        this.left = Math.floor(Math.random() * 300 + 50);
        this.top = 0;
        this.width = 100;
        this.height = 150;

        this.element = document.createElement('img');
        this.element.src = './images/cloudM.png';

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