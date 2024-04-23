window.onload = function () {
    const buttOn = document.getElementById("butt-on");
    const restartButton = document.getElementById("restartButton");
  
  
    let game = null;
  
  
    buttOn.addEventListener("click", function () {
      startGame();
    });
  
    function startGame() {
      console.log("start game");
      game = new Game()
      
      game.start()
    }
  
    function handleKeyDown (event){
      const key = event.key;
      const possibleKeys = [
        'ArrowLeft',
        'ArrowRight',
        'ArrowUp',
        'ArrowDown'
      ]
  
      if(possibleKeys.includes(key))
      //prevent default behaviour
    {
      event.preventDefault()
  
      switch(key){
        case 'ArrowLeft' :
          game.bubu.directionX = -3;
          break;
        case 'ArrowRight' :
          game.bubu.directionX = 3;
          break;
        case 'ArrowUp' :
          game.bubu.directionY = -3;
          break;
        case 'ArrowDown' :
          game.bubu.directionY = 3;
          break;
      }
    }
    }
  
    window.addEventListener('keydown' , handleKeyDown)
    window.addEventListener('keyup', () => {
      game.player.directionX = 0;
      game.player.directionY = 0;
    
    })
  
  
  };