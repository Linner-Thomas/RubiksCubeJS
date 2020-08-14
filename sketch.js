// Create instance of Camera
var easycam;

// Create instance of Cube
var cube;

// Create instance of Move
var move = EnumMove.MoveU;
var moveSequence = [];

var pattern = [];

// Create instances of control elements
var selectPattern;
var inputSequence;
var buttonRandom;
var buttonExecute;
var buttonReset;

/**
 * Call on startup for configuration of the Screen, Camera and Cube.
 */
async function setup()
{
  // Init canvas
  let canvas = createCanvas(500, 500, WEBGL);

  // Read in pattern from json file
  pattern = await fetch("/data/pattern.json")
    .then(response => response.json());

  // Init select for pattern
  selectPattern = createSelect();
  selectPattern.option("");
  pattern.forEach(pattern =>
  {
    selectPattern.option(pattern.name);
  })
  selectPattern.changed(patternSelected);
  
  // Init input field
  inputSequence = createInput();

  // Init button for random sequence
  buttonRandom = createButton("Randomize Sequence");
  buttonRandom.mousePressed(randomSequence);

  // Init button for sequence execution
  buttonExecute = createButton("Execute Sequence");
  buttonExecute.mousePressed(executeSeqence);

  // Init button for reset
  buttonReset = createButton("Reset Cube");
  buttonReset.mousePressed(resetCube);

  // Fix for EasyCam to work with newer versions of p5.js
  Dw.EasyCam.prototype.apply = function(n) {
    var o = this.cam;
    n = n || o.renderer,
    n && (this.camEYE = this.getPosition(this.camEYE), this.camLAT = this.getCenter(this.camLAT), this.camRUP = this.getUpVector(this.camRUP), n._curCamera.camera(this.camEYE[0], this.camEYE[1], this.camEYE[2], this.camLAT[0], this.camLAT[1], this.camLAT[2], this.camRUP[0], this.camRUP[1], this.camRUP[2]))
  };

  easycam = createEasyCam();

  cube = new Cube();
}

/**
 * Select a pattern from the dropdown.
 */
const patternSelected = () =>
{
  Object.values(pattern).forEach(pattern =>
  {
    if (pattern.name == selectPattern.value())
      inputSequence.value(pattern.sequence);
  })
}

/**
 * Generate a random Move sequence.
 */
const randomSequence = () =>
{
  seq = "";

  for (let _ = 0; _ < 16; _ ++)
  {
    randomMove = Object.values(EnumMove)[floor(random(0, Object.values(EnumMove).length))];
    seq += randomMove.symbol;
  }

  inputSequence.value(seq);
}

/**
 * Execute Move sequence from input field.
 */
const executeSeqence = () =>
{
  // Test if sequence onyl contains valid symbols
  if (!inputSequence.value().match(/^[UEDLMRBSF]+$/i))
    alert("Invalid Sequence");

  else
  {
    moveSequence = [];

    [...inputSequence.value()].forEach(symbol =>
    {
      moveSequence.push(Move.getBySymbol(symbol));
    });
  }
}

/**
 * Reset the RubiksCube.
 */
const resetCube = () =>
{
  cube = new Cube();
}

/**
 * Check for key presses and get corresponing Move.
 * 
 * @param {*} event The received key event
 */
function keyPressed(event)
{
  // Block manual Move if input is selected
  if (document.activeElement.localName == "input") return;

  if (move.executing == false)
  {
         if (event.code == 'KeyU') move = event.shiftKey ? EnumMove.MoveU_ : EnumMove.MoveU;
    else if (event.code == 'KeyE') move = event.shiftKey ? EnumMove.MoveE_ : EnumMove.MoveE;
    else if (event.code == 'KeyD') move = event.shiftKey ? EnumMove.MoveD_ : EnumMove.MoveD;

    else if (event.code == 'KeyL') move = event.shiftKey ? EnumMove.MoveL_ : EnumMove.MoveL;
    else if (event.code == 'KeyM') move = event.shiftKey ? EnumMove.MoveM_ : EnumMove.MoveM;
    else if (event.code == 'KeyR') move = event.shiftKey ? EnumMove.MoveR_ : EnumMove.MoveR;

    else if (event.code == 'KeyB') move = event.shiftKey ? EnumMove.MoveB_ : EnumMove.MoveB;
    else if (event.code == 'KeyS') move = event.shiftKey ? EnumMove.MoveS_ : EnumMove.MoveS;
    else if (event.code == 'KeyF') move = event.shiftKey ? EnumMove.MoveF_ : EnumMove.MoveF;
    
    else return;

    move.start();
  }
}

/**
 * Call on every frame to render the Cube and Axis.
 */
function draw() 
{
  background(200);

  // Render Axis
  renderAxis();

  // Update current Move
  move.update();

  // Start next Move from sequence if previous one is done
  if (move.executing == false)
  {
    if (moveSequence.length > 0)
    {
      move = moveSequence.shift();
      move.start();
    }
  }

  // Render Cube
  cube.render();
}

/**
 * Render the x, y and z Axis.
 */
const renderAxis = () =>
{
  push();
  {
    strokeWeight(4);

    Object.values(EnumAxis).forEach(axis =>
    {
      stroke(axis.color);

      line(0, 0, 0, axis.x * 500, axis.y * 500, axis.z * 500);
    })
  }
  pop();
}