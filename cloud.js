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
        this.left = Math.floor(Math.random() * 500 );
        this.top = 0;
        this.width = 300;
        this.height = 150;

        this.element = document.createElement('img');
        this.element.src = './images/nuvenz.png';

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

class PinkCloud {
    constructor(playScreen) {
        this.playScreen = playScreen
        this.left = Math.floor(Math.random() * 500 );
        this.top = 0;
        this.width = 300;
        this.height = 150;

        this.element = document.createElement('img');
        this.element.src = './images/pinkCloud.png';

        this.element.style.position = 'absolute';
        this.element.style.width = `${this.width}px`
        this.element.style.height = `${this.height}px`

        //position the player

        this.element.style.left = `${this.left}px`
        this.element.style.top = `${this.top}px`

        this.playScreen.appendChild(this.element) //make it visible
        
    }
    move(){
        this.top += 0.90
        this.left -= 0.25
        this.updatePosition()
    }
    updatePosition(){
        this.element.style.left = `${this.left}px`
        this.element.style.top = `${this.top}px`
      }
}



class Starz {
    constructor(playScreen) {
        this.playScreen = playScreen
        this.left = -100
        this.top = Math.floor(Math.random() * 500 );
        this.width = 50;
        this.height = 50;

        this.element = document.createElement('img');
        this.element.src = './images/estrelax.png';

        this.element.style.position = 'absolute';
        this.element.style.width = `${this.width}px`
        this.element.style.height = `${this.height}px`

        //position the player

        this.element.style.left = `${this.left}px`
        this.element.style.top = `${this.top}px`

        this.playScreen.appendChild(this.element) //make it visible
        
    }
    move(){
        this.top += 7
        this.left += 5
        this.updatePosition()
    }
    updatePosition(){
        this.element.style.left = `${this.left}px`
        this.element.style.top = `${this.top}px`
      }
}