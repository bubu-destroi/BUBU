
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

        if(this.left < 10){
            this.left=10
        }
        if(this.top < 10){
            this.top = 10
        }
        if(this.left > this.playScreen.offsetWidth - this.width - 10){
            this.left = this.playScreen.offsetWidth - this.width - 10
        }

        if(this.top > this.playScreen.offsetHeight - this.height - 10){
            this.top = this.playScreen.offsetHeight - this.height - 10
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


    
  

