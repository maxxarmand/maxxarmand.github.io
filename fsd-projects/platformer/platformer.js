$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms

createPlatform(0,700,600,10)
createPlatform(850,700,800,10)
createPlatform(1000,580,1500,10)
createPlatform(1300,390,150,10)
createPlatform(1100,90,10,400)
createPlatform(1100,490,100,10)
createPlatform(1100,290,100,10)
createPlatform(1100,90,100,10)
createPlatform(1300,190,150,10)

    // TODO 3 - Create Collectables
createCollectable("gold", 570, 650, 0, 1);
createCollectable("silver", 1130, 250, 0, 1.11);
createCollectable("diamond", 1300, 650, 0, 1.11);
createCollectable("copper", 1330, 350, 0, 1.11);
createCollectable("cart", 1130, 50, 0, 1.11);



    
    // TODO 4 - Create Cannons
createCannon("top", 700, 1000);
createCannon("top", 750, 900);
createCannon("top", 800, 800);
createCannon("top", 850, 700);
createCannon("top", 900, 600);
createCannon("left", 660, 1);
createCannon("left", 650, 1000);
createCannon("top", 1310, 1000);
createCannon("left", 30, 15000);




    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
