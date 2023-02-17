const canvas = document.createElement('canvas');
const context = canvas.getContext('2d');
const colors = ['#ff2e63', '#19dcea', '#ffdc00'];
const dots = [];

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function setup() {
  document.body.appendChild(canvas);
  window.addEventListener('resize', resize);
  resize();
  for (let i = 0; i < 50; i++) {
    const dot = new Dot();
    dots.push(dot);
  }
  requestAnimationFrame(update);
}

class Dot {
  constructor() {
    this.color = colors[Math.floor(Math.random() * colors.length)];
    this.radius = Math.random() * 4 + 2;
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.vx = Math.random() * 4 - 2;
    this.vy = Math.random() * 4 - 2;
  }

  draw() {
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    context.fillStyle = this.color;
    context.fill();
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x < 0 || this.x > canvas.width) {
      this.vx *= -1;
    }
    if (this.y < 0 || this.y > canvas.height) {
      this.vy *= -1;
    }
  }
}

function update() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < dots.length; i++) {
    const dot = dots[i];
    dot.draw();
    dot.update();
  }
  requestAnimationFrame(update);
}

setup();
