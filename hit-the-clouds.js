

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


class Every30Cloud {
    constructor(playScreen) {
        this.playScreen = playScreen
        this.left = 200;
        this.top = -300;
        this.width = 400;
        this.height = 300;

        this.element = document.createElement('img');
        this.element.src = './images/EVERY 30CLOUDS.png';

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


class BirdsHateBubu {
    constructor(playScreen) {
        this.playScreen = playScreen
        this.left = 200;
        this.top = -300;
        this.width = 400;
        this.height = 300;

        this.element = document.createElement('img');
        this.element.src = './images/BIRDS HATE BUBU.png';

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


class RedStar {
    constructor(playScreen) {
        this.playScreen = playScreen
        this.left = 200;
        this.top = -300;
        this.width = 400;
        this.height = 300;

        this.element = document.createElement('img');
        this.element.src = './images/RED STAR CLEARS.png';

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





class BlueStarInfo {
    constructor(playScreen) {
        this.playScreen = playScreen
        this.left = 200;
        this.top = -300;
        this.width = 400;
        this.height = 300;

        this.element = document.createElement('img');
        this.element.src = './images/BLUE STAR.png';

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




class MoisesInfo {
    constructor(playScreen) {
        this.playScreen = playScreen
        this.left = 200;
        this.top = -300;
        this.width = 400;
        this.height = 300;

        this.element = document.createElement('img');
        this.element.src = './images/MOSES COMES HOLY TO OPEN A PATH OF HOPE.png';

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


class BabyInfo {
    constructor(playScreen) {
        this.playScreen = playScreen
        this.left = 200;
        this.top = -300;
        this.width = 400;
        this.height = 300;

        this.element = document.createElement('img');
        this.element.src = './images/MAMMA DUCK HAD BABIES.png';

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


class CookieInfo {
    constructor(playScreen) {
        this.playScreen = playScreen
        this.left = 200;
        this.top = -300;
        this.width = 400;
        this.height = 300;

        this.element = document.createElement('img');
        this.element.src = "./images/LOVESCOOKIES.png";
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