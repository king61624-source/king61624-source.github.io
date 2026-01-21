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
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     //toggleGrid();
    // TODO 2 - Create Platforms
      createPlatform(300, 650, 200, 20);
      createPlatform(100, 550, 100, 20);
      createPlatform(300, 420, 100, 20);
      createPlatform(600, 550, 100, 20);
      createPlatform(100, 350, 100, 20);
      createPlatform(600, 350, 100, 20);
      createPlatform(800, 420, 100, 20);
      createPlatform(950, 500, 100, 20);
      createPlatform(1200, 500, 100, 20);
      createPlatform(1100, 300, 100, 20);
      createPlatform(150, 220, 1000, 20);
    // TODO 3 - Create Collectables
      createCollectable("diamond", 200, 170, 0.5, 0.7);
      createCollectable("diamond", 300, 350, 0.5, 0.7);
      createCollectable("diamond", 1200, 350, 0.5, 0.7);


    
    // TODO 4 - Create Cannons
   createCannon("right", 250, 2000);
   createCannon("right", 480, 2000);
   createCannon("bottom", 1150, 2000);


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
