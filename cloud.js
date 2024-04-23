class Cloud extends Things{
    constructor (picture){

        super (direction, size, speed)

        const cloudPic = ['../BUBU/images/cloudS.png','../BUBU/images/cloudM.png']

        const randomNr = Math.floor(Math.random() >0.99 * cloudPic.length );

        this.picture = cloudPic[randomNr]

        this.element = document.createElement(`${this.picture}`)

        

    }

}