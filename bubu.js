
class Bubu {
    constructor (container, playScreen, left, top, imgSrc){
        this.container = container;
        this.playScreen = playScreen;
        this.left = left;
        this.top = top;
        this.width = 100;
        this.height = 100;
        this.directionX = 0;
        this.directionY = 0;

        this.element = document.createElement('img');
        this.element.src = imgSrc;

        this.element.style.position = 'absolute';
        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;

        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;

        this.playScreen.appendChild(this.element);
        
    }

    move(){
        this.left += this.directionX
        this.top += this.directionY

        if(this.left < 1){
            this.left=1
        }
        if(this.top < 1){
            this.top = 1
        }
        if(this.left > this.playScreen.offsetWidth - this.width - 1){
            this.left = this.playScreen.offsetWidth - this.width - 1
        }

        if(this.top > this.playScreen.offsetHeight - this.height - 1){
            this.top = this.playScreen.offsetHeight - this.height - 1
        }

        

        this.updatePosition()
    }

    updatePosition(){
      this.element.style.left = `${this.left}px`
      this.element.style.top = `${this.top}px`
    }
    
    didCollide(obstacle){
        const bubuRect = this.element.getBoundingClientRect()
        const obstacleRect = obstacle.element.getBoundingClientRect()

        // {left: 50, top: 50, right: 150, bottom: 150}
    
        if( bubuRect.left < obstacleRect.right && 
            bubuRect.right > obstacleRect.left &&
            bubuRect.top < obstacleRect.bottom &&
            bubuRect.bottom > obstacleRect.top
        ) {
          return true;
        } else {
          return false
        }
    
    }

}


class Sun {
    constructor(playScreen, bubu) {

        this.playScreen = playScreen;
        this.bubu = bubu;
        this.left = this.bubu.left -10;
        this.top = 100;
        this.width = 100;
        this.height = 100;
        this.directionX = 0;
        this.directionY = 0;

    

    this.element = document.createElement('img');
    this.element.src = "./images/sole.png";

    this.element.style.position = 'absolute';
    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;

    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;

    this.playScreen.appendChild(this.element);
    }

move(){

    if(this.bubu.directionX === -7 ){
    this.left += 2;}
    if (this.bubu.directionX === 7){
        this.left -=2
    }
    if(this.bubu.directionY === -7 ){
    this.top += 2}
    if (this.bubu.directionY === 7){
        this.top -= 2
    }


/* 
    this.top = this.bubu.top - 400; */
  /*   this.left += this.directionX
    this.top += this.directionY */

    this.updatePosition()
}

updatePosition(){
  this.element.style.left = `${this.left}px`
  this.element.style.top = `${this.top}px`
}

} 
    
  

