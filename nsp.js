// Get the canvas element
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Set up the particles
const particles = [];
const particleCount = 100;

// Particle class
class Particle {
  constructor(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.velocity = {
      x: (Math.random() - 100) * 2, // Random x velocity between -1 and 1
      y: (Math.random() - 100) * 2, // Random y velocity between -1 and 1
    };
  }

  // Update particle position
  update() {
    this.x += this.velocity.x;
    this.y += this.velocity.y;

    // Bounce off the walls
    if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
      this.velocity.x *= -1;
    }
    if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
      this.velocity.y *= -1;
    }

    // Draw the particle
    this.draw();
  }

  // Draw the particle on the canvas
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }
}

// Create particles
for (let i = 0; i < particleCount; i++) {
  const radius = Math.random() * 20 + 10; // Random radius between 10 and 30
  const x = Math.random() * (canvas.width - radius * 2) + radius; // Random x position
  const y = Math.random() * (canvas.height - radius * 2) + radius; // Random y position
  const color = `hsl(${Math.random() * 360}, 50%, 50%)`; // Random color

  particles.push(new Particle(x, y, radius, color));
}

// Animation loop
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Update and draw particles
  for (const particle of particles) {
    particle.update();
  }

  requestAnimationFrame(animate);
}

// Start the animation loop
animate();









