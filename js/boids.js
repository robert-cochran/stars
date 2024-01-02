// export class Boid {
    // align(boids) {
    //   let perceptionRadius = 25;
    //   let steering = createVector();
    //   let total = 0;
    //   for (let other of boids) {
    //     let d = dist(this.position.x, this.position.y, other.position.x, other.position.y);
    //     if (other != this && d < perceptionRadius) {
    //       steering.add(other.velocity);
    //       total++;
    //     }
    //   }
    //   if (total > 0) {
    //     steering.div(total);
    //     steering.setMag(this.maxSpeed);
    //     steering.sub(this.velocity);
    //     steering.limit(this.maxForce);
    //   }
    //   return steering;
    // }
  
    // separation(boids) {
    //   let perceptionRadius = 24;
    //   let steering = createVector();
    //   let total = 0;
    //   for (let other of boids) {
    //     let d = dist(this.position.x, this.position.y, other.position.x, other.position.y);
    //     if (other != this && d < perceptionRadius) {
    //       let diff = p5.Vector.sub(this.position, other.position);
    //       diff.div(d * d);
    //       steering.add(diff);
    //       total++;
    //     }
    //   }
    //   if (total > 0) {
    //     steering.div(total);
    //     steering.setMag(this.maxSpeed);
    //     steering.sub(this.velocity);
    //     steering.limit(this.maxForce);
    //   }
    //   return steering;
    // }
  
    // cohesion(boids) {
    //   let perceptionRadius = 50;
    //   let steering = createVector();
    //   let total = 0;
    //   for (let other of boids) {
    //     let d = dist(this.position.x, this.position.y, other.position.x, other.position.y);
    //     if (other != this && d < perceptionRadius) {
    //       steering.add(other.position);
    //       total++;
    //     }
    //   }
    //   if (total > 0) {
    //     steering.div(total);
    //     steering.sub(this.position);
    //     steering.setMag(this.maxSpeed);
    //     steering.sub(this.velocity);
    //     steering.limit(this.maxForce);
    //   }
    //   return steering;
    // }
  
    // flock(boids) {
    //   let alignment = this.align(boids);
    //   let cohesion = this.cohesion(boids);
    //   let separation = this.separation(boids);
  
    //   alignment.mult(alignSlider.value());
    //   cohesion.mult(cohesionSlider.value());
    //   separation.mult(separationSlider.value());
  
    //   this.acceleration.add(alignment);
    //   this.acceleration.add(cohesion);
    //   this.acceleration.add(separation);
    // }
// }
