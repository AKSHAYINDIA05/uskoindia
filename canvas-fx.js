/**
 * UNIVERSE SHOTOKAN KARATE ORGANISATION - HIGH PERFORMANCE AMBIENT CANVAS FX
 * Ultra-smooth 60-120fps with zero layout thrashing and zero shadowBlur overhead.
 */

class LuxuryAmbientFX {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d', { alpha: true });
    this.particles = [];
    this.slashes = [];
    this.shockwaves = [];
    this.mouse = { x: -1000, y: -1000, prevX: -1000, prevY: -1000, speed: 0 };
    this.running = true;
    this.lastTime = 0;

    this.init();
  }

  init() {
    this.resize();
    window.addEventListener('resize', () => this.resize(), { passive: true });

    // Understated, sparse embers for physical luxury feel
    const count = window.innerWidth < 768 ? 20 : 40;
    for (let i = 0; i < count; i++) {
      this.particles.push(this.createEmber(true));
    }

    window.addEventListener('pointermove', (e) => this.handlePointerMove(e), { passive: true });
    window.addEventListener('pointerdown', (e) => this.handlePointerDown(e), { passive: true });

    document.addEventListener('visibilitychange', () => {
      this.running = !document.hidden;
      if (this.running) this.loop();
    });

    this.loop();
  }

  resize() {
    this.width = this.canvas.width = window.innerWidth;
    this.height = this.canvas.height = window.innerHeight;
  }

  createEmber(randomY = false) {
    const isChampagne = Math.random() > 0.35;
    return {
      x: Math.random() * this.width,
      y: randomY ? Math.random() * this.height : this.height + 15,
      size: Math.random() * 1.8 + 0.6,
      speedY: -(Math.random() * 0.7 + 0.25),
      speedX: (Math.random() - 0.5) * 0.4,
      alpha: Math.random() * 0.45 + 0.15,
      fadeRate: Math.random() * 0.0018 + 0.0006,
      color: isChampagne ? '212, 181, 119' : '192, 57, 43',
      wobbleSpeed: Math.random() * 0.015 + 0.006,
      wobbleOffset: Math.random() * Math.PI * 2
    };
  }

  handlePointerMove(e) {
    const dx = e.clientX - this.mouse.x;
    const dy = e.clientY - this.mouse.y;
    this.mouse.speed = Math.hypot(dx, dy);

    this.mouse.prevX = this.mouse.x;
    this.mouse.prevY = this.mouse.y;
    this.mouse.x = e.clientX;
    this.mouse.y = e.clientY;

    // Fast movement creates subtle blade light line (capped max 3 active)
    if (this.mouse.speed > 22 && this.slashes.length < 4) {
      this.slashes.push({
        x1: this.mouse.prevX,
        y1: this.mouse.prevY,
        x2: this.mouse.x,
        y2: this.mouse.y,
        life: 0.7,
        width: Math.min(this.mouse.speed * 0.08, 2.5)
      });
    }
  }

  handlePointerDown(e) {
    if (this.shockwaves.length < 3) {
      this.shockwaves.push({
        x: e.clientX,
        y: e.clientY,
        radius: 4,
        maxRadius: Math.min(window.innerWidth * 0.16, 95),
        alpha: 0.45,
        speed: 4
      });
    }

    if (window.dojoAudio) {
      window.dojoAudio.playStrike();
    }
  }

  update() {
    // 1. Update Embers
    const maxCount = window.innerWidth < 768 ? 20 : 40;
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.y += p.speedY;
      p.x += p.speedX + Math.sin(p.wobbleOffset) * 0.25;
      p.wobbleOffset += p.wobbleSpeed;
      p.alpha -= p.fadeRate;

      if (p.alpha <= 0 || p.y < -15 || p.x < -15 || p.x > this.width + 15) {
        this.particles.splice(i, 1);
        if (this.particles.length < maxCount) {
          this.particles.push(this.createEmber(false));
        }
      }
    }

    // 2. Update Slashes
    for (let i = this.slashes.length - 1; i >= 0; i--) {
      const s = this.slashes[i];
      s.life -= 0.06;
      if (s.life <= 0) this.slashes.splice(i, 1);
    }

    // 3. Update Shockwaves
    for (let i = this.shockwaves.length - 1; i >= 0; i--) {
      const sw = this.shockwaves[i];
      sw.radius += sw.speed;
      sw.alpha = 0.45 * (1 - sw.radius / sw.maxRadius);
      if (sw.radius >= sw.maxRadius || sw.alpha <= 0) {
        this.shockwaves.splice(i, 1);
      }
    }
  }

  draw() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    // 1. Draw Embers with lightweight halo (zero shadowBlur for high FPS)
    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];
      // Outer faint halo
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.size * 2, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(${p.color}, ${p.alpha * 0.25})`;
      this.ctx.fill();

      // Inner core
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(${p.color}, ${p.alpha})`;
      this.ctx.fill();
    }

    // 2. Draw Subtle Slashes
    if (this.slashes.length > 0) {
      this.ctx.lineCap = 'round';
      for (let i = 0; i < this.slashes.length; i++) {
        const s = this.slashes[i];
        this.ctx.beginPath();
        this.ctx.moveTo(s.x1, s.y1);
        this.ctx.lineTo(s.x2, s.y2);
        this.ctx.strokeStyle = `rgba(212, 181, 119, ${s.life * 0.5})`;
        this.ctx.lineWidth = s.width * s.life;
        this.ctx.stroke();
      }
    }

    // 3. Draw Shockwaves
    if (this.shockwaves.length > 0) {
      for (let i = 0; i < this.shockwaves.length; i++) {
        const sw = this.shockwaves[i];
        this.ctx.beginPath();
        this.ctx.arc(sw.x, sw.y, sw.radius, 0, Math.PI * 2);
        this.ctx.strokeStyle = `rgba(197, 160, 89, ${sw.alpha * 0.6})`;
        this.ctx.lineWidth = 1.2 * sw.alpha;
        this.ctx.stroke();
      }
    }
  }

  loop() {
    if (!this.running) return;
    this.update();
    this.draw();
    requestAnimationFrame(() => this.loop());
  }
}

document.addEventListener('DOMContentLoaded', () => {
  if (matchMedia('(prefers-reduced-motion: no-preference)').matches) {
    window.ambientFX = new LuxuryAmbientFX('combat-canvas');
  }
});
