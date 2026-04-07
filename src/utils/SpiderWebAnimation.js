import * as THREE from 'three';

class SpiderWebAnimation {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    if (!this.container) return;

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      75,
      this.container.offsetWidth / this.container.offsetHeight,
      0.1,
      1000
    );
    
    this.renderer = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true 
    });
    this.renderer.setSize(this.container.offsetWidth, this.container.offsetHeight);
    this.renderer.setClearColor(0x000000, 0);
    this.container.appendChild(this.renderer.domElement);

    this.particles = [];
    this.lines = [];
    this.particleCount = 100;
    this.maxDistance = 150;

    this.init();
    this.animate();
    this.handleResize();
  }

  init() {
    // Create particles
    const geometry = new THREE.SphereGeometry(1.5, 16, 16);
    const material = new THREE.MeshBasicMaterial({ 
      color: 0xE2252B,
      transparent: true,
      opacity: 0.8
    });

    for (let i = 0; i < this.particleCount; i++) {
      const particle = new THREE.Mesh(geometry, material);
      
      particle.position.x = Math.random() * 800 - 400;
      particle.position.y = Math.random() * 600 - 300;
      particle.position.z = Math.random() * 400 - 200;
      
      particle.velocity = {
        x: (Math.random() - 0.5) * 0.5,
        y: (Math.random() - 0.5) * 0.5,
        z: (Math.random() - 0.5) * 0.2
      };
      
      this.scene.add(particle);
      this.particles.push(particle);
    }

    this.camera.position.z = 400;

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    this.scene.add(ambientLight);
  }

  updateLines() {
    // Remove old lines
    this.lines.forEach(line => {
      this.scene.remove(line);
      line.geometry.dispose();
      line.material.dispose();
    });
    this.lines = [];

    // Create new lines between nearby particles
    for (let i = 0; i < this.particles.length; i++) {
      for (let j = i + 1; j < this.particles.length; j++) {
        const distance = this.particles[i].position.distanceTo(
          this.particles[j].position
        );

        if (distance < this.maxDistance) {
          const geometry = new THREE.BufferGeometry().setFromPoints([
            this.particles[i].position,
            this.particles[j].position
          ]);
          
          const opacity = 1 - (distance / this.maxDistance);
          const material = new THREE.LineBasicMaterial({
            color: 0x303030,
            transparent: true,
            opacity: opacity * 0.3
          });
          
          const line = new THREE.Line(geometry, material);
          this.scene.add(line);
          this.lines.push(line);
        }
      }
    }
  }

  animate() {
    requestAnimationFrame(() => this.animate());

    // Update particle positions
    this.particles.forEach(particle => {
      particle.position.x += particle.velocity.x;
      particle.position.y += particle.velocity.y;
      particle.position.z += particle.velocity.z;

      // Bounce off boundaries
      if (particle.position.x > 400 || particle.position.x < -400) {
        particle.velocity.x *= -1;
      }
      if (particle.position.y > 300 || particle.position.y < -300) {
        particle.velocity.y *= -1;
      }
      if (particle.position.z > 200 || particle.position.z < -200) {
        particle.velocity.z *= -1;
      }

      // Add subtle rotation
      particle.rotation.x += 0.01;
      particle.rotation.y += 0.01;
    });

    // Update lines every frame
    this.updateLines();

    // Rotate camera slightly
    this.camera.position.x = Math.sin(Date.now() * 0.0001) * 50;
    this.camera.lookAt(this.scene.position);

    this.renderer.render(this.scene, this.camera);
  }

  handleResize() {
    window.addEventListener('resize', () => {
      if (!this.container) return;
      
      this.camera.aspect = this.container.offsetWidth / this.container.offsetHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(this.container.offsetWidth, this.container.offsetHeight);
    });
  }

  destroy() {
    window.removeEventListener('resize', this.handleResize);
    if (this.renderer && this.renderer.domElement && this.renderer.domElement.parentNode) {
      this.renderer.domElement.parentNode.removeChild(this.renderer.domElement);
    }
    this.particles = [];
    this.lines = [];
  }
}

export default SpiderWebAnimation;
