
class Cloud{
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
        this.top += 2
        this.left +=1
        this.updatePosition()
    }
    updatePosition(){
        this.element.style.left = `${this.left}px`
        this.element.style.top = `${this.top}px`
      }
}



class CloudLeft {
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
        this.top += 2
        this.left -=1 
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



class MagiCloud {
    constructor(playScreen) {
        this.playScreen = playScreen
        this.left = Math.floor(Math.random() * 500 );
        this.top = 0;
        this.width = 30;
        this.height = 30;

        this.element = document.createElement('img');
        this.element.src = './images/maria.png';

        this.element.style.position = 'absolute';
        this.element.style.width = `${this.width}px`
        this.element.style.height = `${this.height}px`

        //position the player

        this.element.style.left = `${this.left}px`
        this.element.style.top = `${this.top}px`

        this.playScreen.appendChild(this.element) //make it visible
        
    }
    move(){
        this.top += 1.5
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
        this.left =  Math.floor(Math.random() * 500 );
        this.top = 700;
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
        this.top -= 17
        this.left += 12
        this.updatePosition()
    }
    updatePosition(){
        this.element.style.left = `${this.left}px`
        this.element.style.top = `${this.top}px`
      }
}


class BlueStar{
    constructor(playScreen) {
        this.playScreen = playScreen
        this.left =  Math.floor(Math.random() * 500 );
        this.top =  Math.floor(Math.random() * 500 );
        this.width = 100;
        this.height = 100;

        this.element = document.createElement('img');
        this.element.src = './images/blueStar.png';

        this.element.style.position = 'absolute';
        this.element.style.width = `${this.width}px`
        this.element.style.height = `${this.height}px`

        //position the player

        this.element.style.left = `${this.left}px`
        this.element.style.top = `${this.top}px`

        this.playScreen.appendChild(this.element) //make it visible
        
    }
    move(){
        
        this.top = this.top
        this.left = this.left

        setTimeout(() => {
        
            this.left +=20
            
        }, 2000)

        if (this.left > this.playScreen.rigth){
            this.element.remove()
        }
        this.updatePosition()
    }
    updatePosition(){
        this.element.style.left = `${this.left}px`
        this.element.style.top = `${this.top}px`
      }
}


class Moises {
    constructor(playScreen) {
        this.playScreen = playScreen
        this.left = Math.floor(Math.random() * 700);
        this.top = -300;
        this.width = 100;
        

        this.element = document.createElement('img');
        this.element.src = './images/moises.png';

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

        this.updatePosition()

    }
    updatePosition(){
        this.element.style.left = `${this.left}px`
        this.element.style.top = `${this.top}px`
      }
}
