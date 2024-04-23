class Things{
    constructor (directionHeight, directionLeft,size,fast){

        this.fast = Math.floor(Math.random() * 7)

        this.directionHeight = Math.floor(Math.random() * this.playScreen.height)

        this.directionLeft = Math.floor(Math.random() * this.playScreen.width)

        this.size = Math.floor(Math.random() > 100 * 200 )

        this.left = this.directionLeft
        this.top = this.directionHeight;

        this.width = this.size;


        this.element = document.createElement('img');

        this.element.style.position = 'absolute';
        this.element.style.width = `${this.width}px`
        this.element.style.height = `${this.height}px`


        this.element.style.left = `${this.left}px`
        this.element.style.top = `${this.top}px`

        this.playScreen.appendChild(this.element) //make it visible
        
    }
    move(){

        this.top = fast
        this.updatePosition()
    }
    updatePosition(){
        this.element.style.left = `${this.left}px`
        this.element.style.top = `${this.top}px`
      }
       

    }
