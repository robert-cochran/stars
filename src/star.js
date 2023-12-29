function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

export class Star {
    constructor(twoCanvas) {
        this.canvas = twoCanvas;
        const x = Math.floor(Math.random()*this.canvas.width);
        const y = Math.floor(Math.random()*this.canvas.height);
        const radius = Math.random();
        this.position = this.canvas.makeCircle(x, y, radius); 
        this.verticalvelocity = getRandomArbitrary(0.01, 0.2);
        this.horizontalvelocity = getRandomArbitrary(0.02, 0.05);
        this.acceleration = 1; 
        this.maxForce = 0.2;
        this.maxSpeed = 5;

        
    }
  
    edges() {
        if (this.position.translation.x > this.canvas.width) {
            this.position.translation.x = 0;
        } else if (this.position.translation.x < 0) {
            this.position.translation.x = this.canvas.width;
        }
        if (this.position.translation.y > this.canvas.height) {
            this.position.translation.y = 0;
        } else if (this.position.translation.y < 0) {
            this.position.translation.y = this.canvas.height;
        }
    }
  
    updatePosition() {
        this.position.translation.x += this.horizontalvelocity; 
        // this.position.translation.y += this.verticalvelocity;    

    }
}
  
