// Create instance of Camera
var easycam;

// Create instance of Cube
var cube;

/**
 * Call on startup for configuration of the Screen, Camera and Cube
 */
function setup()
{
  createCanvas(800, 800, WEBGL);

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
 * Call on every frame to render the Cube and Axis
 */
function draw() 
{
  background(200);

  renderAxis();

  cube.render();
}

/**
 * Render the x, y and z Axis
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