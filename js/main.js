import { portfolio } from './portfolio-data.js';

document.documentElement.classList.add('js-enabled');

const app = document.getElementById('app');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches;

const linkAttrs = (item) => (item.external ? ' target="_blank" rel="noreferrer"' : '');

const icon = (name) => `<i class="fa ${name}" aria-hidden="true"></i>`;

const renderChips = (items, className = 'chip-list') => `
  <ul class="${className}">
    ${items.map((item) => `<li>${item}</li>`).join('')}
  </ul>
`;

function renderNavigation() {
  return `
    <nav class="primary-nav" aria-label="Primary navigation">
      <a class="brand" href="#top" aria-label="Go to homepage">
        <span class="brand-mark" aria-hidden="true">JH</span>
        <span>${portfolio.person.shortName}</span>
      </a>
      <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="navMenu">
        <span class="sr-only">Toggle navigation</span>
        <span class="nav-toggle-line"></span>
        <span class="nav-toggle-line"></span>
      </button>
      <div class="nav-links" id="navMenu">
        ${portfolio.nav.map((item) => `<a href="#${item.target}">${item.label}</a>`).join('')}
        <a class="nav-action" href="mailto:${portfolio.person.email}">
          ${icon('fa-envelope-o')}
          <span>Contact</span>
        </a>
      </div>
    </nav>
  `;
}

function renderHero() {
  return `
    <header class="site-header" id="top">
      ${renderNavigation()}
      <section class="hero" aria-labelledby="hero-title">
        <div class="hero-copy" data-reveal>
          <p class="eyebrow">${portfolio.hero.eyebrow}</p>
          <h1 id="hero-title">${portfolio.hero.headline}</h1>
          <p class="hero-role">${portfolio.hero.role}</p>
          <p class="lede">${portfolio.hero.tagline}</p>
          <div class="hero-cta">
            ${portfolio.hero.ctas
              .map(
                (cta) => `
                  <a class="btn btn-${cta.variant}" href="${cta.href}"${linkAttrs(cta)}>
                    ${icon(cta.icon)}
                    <span>${cta.label}</span>
                  </a>
                `
              )
              .join('')}
          </div>
          ${renderChips(portfolio.hero.focus, 'focus-list')}
        </div>

        <div class="hero-visual" data-hero-visual data-reveal>
          <canvas
            class="hero-canvas"
            data-hero-canvas
            aria-label="Animated 3D infrastructure visual"
          ></canvas>
          <div class="scene-fallback" data-scene-fallback aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <article class="identity-panel" data-parallax-layer="0.08">
            <img src="${portfolio.person.portrait}" alt="Portrait of ${portfolio.person.shortName}" />
            <div>
              <p>${portfolio.person.role}</p>
              <strong>${portfolio.person.employer}</strong>
              <span>${portfolio.person.location}</span>
            </div>
          </article>
          <article class="signal-panel" data-parallax-layer="-0.06">
            <span class="status-dot"></span>
            <div>
              <p>Current focus</p>
              <strong>${portfolio.hero.status}</strong>
            </div>
          </article>
        </div>

        <dl class="hero-metrics" aria-label="Portfolio metrics" data-reveal>
          ${portfolio.hero.metrics
            .map(
              (metric) => `
                <div>
                  <dt>${metric.label}</dt>
                  <dd>${metric.value}</dd>
                </div>
              `
            )
            .join('')}
        </dl>
      </section>
    </header>
  `;
}

function renderSectionHeading({ eyebrow, title, copy }) {
  return `
    <div class="section-heading">
      <p class="eyebrow">${eyebrow}</p>
      <h2>${title}</h2>
      ${copy ? `<p>${copy}</p>` : ''}
    </div>
  `;
}

function renderAbout() {
  return `
    <section class="section about-section" id="about" data-reveal>
      ${renderSectionHeading({
        eyebrow: portfolio.about.eyebrow,
        title: portfolio.about.title,
        copy: portfolio.about.intro,
      })}
      <div class="about-layout">
        <article class="about-card glass-panel">
          <h3>Operating edge</h3>
          ${renderChips(portfolio.about.highlights, 'check-list')}
        </article>
        <div class="principle-grid">
          ${portfolio.about.principles
            .map(
              (item) => `
                <article class="principle-card glass-panel" data-tilt-card>
                  <h3>${item.title}</h3>
                  <p>${item.body}</p>
                </article>
              `
            )
            .join('')}
        </div>
      </div>
    </section>
  `;
}

function renderSkills() {
  return `
    <section class="section skills-section section-accent" id="skills" data-reveal>
      ${renderSectionHeading({
        eyebrow: 'Skills',
        title: 'Grouped capabilities for cloud, delivery, reliability, and networks.',
        copy:
          'Recruiters can scan the stack quickly while hiring teams can see how the tools connect into production outcomes.',
      })}
      <div class="skills-grid">
        ${portfolio.skills
          .map(
            (skill) => `
              <article class="skill-card glass-panel" data-tilt-card>
                <div class="card-icon">${icon(skill.icon)}</div>
                <h3>${skill.category}</h3>
                <p>${skill.summary}</p>
                ${renderChips(skill.items)}
              </article>
            `
          )
          .join('')}
      </div>
    </section>
  `;
}

function renderExperience() {
  return `
    <section class="section experience-section" id="experience" data-reveal>
      ${renderSectionHeading({
        eyebrow: 'Work Experience',
        title: 'Infrastructure programs from network foundations to modern DevOps platforms.',
      })}
      <ol class="timeline">
        ${portfolio.experience
          .map(
            (job, index) => `
              <li class="timeline-item" data-reveal>
                <div class="timeline-index">${String(index + 1).padStart(2, '0')}</div>
                <article class="timeline-card glass-panel" data-tilt-card>
                  <div class="timeline-meta">
                    <span>${job.period}</span>
                    <span>${job.location}</span>
                  </div>
                  <h3>${job.role}</h3>
                  <p class="company">${job.company}</p>
                  <p>${job.summary}</p>
                  ${renderChips(job.impact, 'impact-list')}
                  <ul class="bullet-list">
                    ${job.bullets.map((bullet) => `<li>${bullet}</li>`).join('')}
                  </ul>
                </article>
              </li>
            `
          )
          .join('')}
      </ol>
    </section>
  `;
}

function renderProjects() {
  return `
    <section class="section projects-section section-accent" id="projects" data-reveal>
      ${renderSectionHeading({
        eyebrow: 'Projects',
        title: 'Selected systems with practical metrics and production context.',
        copy:
          'The cards use depth, hover tilt, and restrained motion while keeping the business outcome readable.',
      })}
      <div class="project-grid">
        ${portfolio.projects
          .map(
            (project) => `
              <article class="project-card glass-panel" data-tilt-card>
                <div class="project-media">
                  <img src="${project.image}" alt="${project.title}" loading="lazy" />
                  <span>${project.metric}</span>
                </div>
                <div class="project-body">
                  <p class="eyebrow">${project.type}</p>
                  <h3>${project.title}</h3>
                  <p>${project.summary}</p>
                  ${renderChips(project.stack)}
                </div>
              </article>
            `
          )
          .join('')}
      </div>
    </section>
  `;
}

function renderCredentials() {
  const { education, certifications } = portfolio.credentials;

  return `
    <section class="section credentials-section" id="credentials" data-reveal>
      ${renderSectionHeading({
        eyebrow: 'Education & Certifications',
        title: 'Technical foundations backed by service-provider routing credentials.',
      })}
      <div class="credentials-layout">
        <div class="education-column">
          ${education
            .map(
              (item) => `
                <article class="education-card glass-panel" data-tilt-card>
                  <p class="eyebrow">Education</p>
                  <h3>${item.title}</h3>
                  <span>${item.meta}</span>
                  <p>${item.body}</p>
                </article>
              `
            )
            .join('')}
        </div>
        <div class="cert-grid">
          ${certifications
            .map(
              (cert) => `
                <a class="cert-card glass-panel" href="${cert.href}" target="_blank" rel="noreferrer" data-tilt-card>
                  <span>${icon('fa-certificate')}</span>
                  <strong>${cert.title}</strong>
                  <p>${cert.body}</p>
                </a>
              `
            )
            .join('')}
        </div>
      </div>
    </section>
  `;
}

function renderContact() {
  return `
    <section class="section contact-section section-accent" id="contact" data-reveal>
      ${renderSectionHeading({
        eyebrow: 'Contact',
        title: 'Let us talk about infrastructure that ships cleanly and recovers fast.',
        copy:
          'Available for full-time DevOps opportunities, infrastructure consulting, and advisory conversations around platform reliability.',
      })}
      <div class="contact-layout">
        <article class="contact-card glass-panel">
          <div>
            <span>Email</span>
            <a href="mailto:${portfolio.person.email}">${portfolio.person.email}</a>
          </div>
          <div>
            <span>Phone</span>
            <a href="tel:${portfolio.person.phone.replaceAll(' ', '')}">${portfolio.person.phone}</a>
          </div>
          <div>
            <span>Location</span>
            <p>${portfolio.person.location} (${portfolio.person.timezone})</p>
          </div>
          <div class="social-links">
            <a href="${portfolio.person.linkedin}" target="_blank" rel="noreferrer" aria-label="LinkedIn">${icon(
              'fa-linkedin'
            )}</a>
            <a href="${portfolio.person.twitter}" target="_blank" rel="noreferrer" aria-label="Twitter">${icon(
              'fa-twitter'
            )}</a>
            <a href="${portfolio.person.facebook}" target="_blank" rel="noreferrer" aria-label="Facebook">${icon(
              'fa-facebook'
            )}</a>
            <a href="${portfolio.person.youtube}" target="_blank" rel="noreferrer" aria-label="YouTube">${icon(
              'fa-youtube'
            )}</a>
          </div>
        </article>
        <article class="availability-card glass-panel" data-tilt-card>
          <p class="eyebrow">Signal</p>
          <h3>Best fit</h3>
          <p>
            DevOps, platform engineering, infrastructure automation, Kubernetes operations,
            observability, and hybrid cloud networking roles.
          </p>
          <div class="hero-cta">
            <a class="btn btn-primary" href="mailto:${portfolio.person.email}?subject=DevOps%20opportunity">
              ${icon('fa-paper-plane')}
              <span>Start a conversation</span>
            </a>
            <a class="btn btn-secondary" href="${portfolio.person.linkedin}" target="_blank" rel="noreferrer">
              ${icon('fa-linkedin')}
              <span>Connect</span>
            </a>
          </div>
        </article>
      </div>
    </section>
  `;
}

function renderFooter() {
  return `
    <footer class="site-footer">
      <p>&copy; <span id="year"></span> ${portfolio.person.name}. Built for readable recruiting signals.</p>
    </footer>
  `;
}

function renderApp() {
  app.innerHTML = `
    <div class="scroll-progress" aria-hidden="true">
      <span class="scroll-progress-bar"></span>
    </div>
    ${renderHero()}
    <main>
      ${renderAbout()}
      ${renderSkills()}
      ${renderExperience()}
      ${renderProjects()}
      ${renderCredentials()}
      ${renderContact()}
    </main>
    <a class="floating-action" href="mailto:${portfolio.person.email}?subject=DevOps%20portfolio%20intro" aria-label="Email Jojo">
      ${icon('fa-envelope-o')}
    </a>
    ${renderFooter()}
  `;
}

function initNavigation() {
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = Array.from(document.querySelectorAll('.nav-links a[href^="#"]'));

  document.querySelectorAll('section[id]').forEach((section) => {
    if (!section.hasAttribute('tabindex')) {
      section.setAttribute('tabindex', '-1');
    }
  });

  const closeNav = () => {
    navMenu?.classList.remove('open');
    navToggle?.setAttribute('aria-expanded', 'false');
  };

  navToggle?.addEventListener('click', () => {
    const isOpen = navMenu?.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(Boolean(isOpen)));
  });

  document.addEventListener('click', (event) => {
    if (!navMenu || !navToggle) return;
    if (!navMenu.contains(event.target) && !navToggle.contains(event.target)) {
      closeNav();
    }
  });

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const targetId = link.getAttribute('href');
      if (!targetId || targetId === '#') return;
      const target = document.querySelector(targetId);
      if (!target) return;
      event.preventDefault();
      closeNav();
      target.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
      target.focus?.({ preventScroll: true });
    });
  });

  const navMap = new Map(
    navLinks
      .map((link) => [link.getAttribute('href')?.replace('#', ''), link])
      .filter(([target]) => Boolean(target))
  );

  if (!navMap.size) return;

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visible) return;
      navLinks.forEach((link) => link.classList.remove('is-active'));
      navMap.get(visible.target.id)?.classList.add('is-active');
    },
    { rootMargin: '-30% 0px -55% 0px', threshold: [0.1, 0.35, 0.6] }
  );

  document.querySelectorAll('main section[id]').forEach((section) => observer.observe(section));
}

function initReveal() {
  const targets = document.querySelectorAll('[data-reveal]');
  if (!targets.length) return;

  if (!('IntersectionObserver' in window)) {
    targets.forEach((target) => target.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        currentObserver.unobserve(entry.target);
      });
    },
    { rootMargin: '0px 0px -6% 0px', threshold: 0.04 }
  );

  targets.forEach((target) => observer.observe(target));
}

function initScrollProgress() {
  const progressBar = document.querySelector('.scroll-progress-bar');
  const docEl = document.documentElement;
  if (!progressBar) return;

  let ticking = false;
  const update = () => {
    const scrollable = docEl.scrollHeight - docEl.clientHeight;
    const progress = scrollable > 0 ? docEl.scrollTop / scrollable : 0;
    document.body.style.setProperty('--page-progress', progress.toFixed(4));
    progressBar.style.transform = `scaleX(${Math.min(Math.max(progress, 0), 1)})`;
    ticking = false;
  };

  update();
  window.addEventListener(
    'scroll',
    () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(update);
    },
    { passive: true }
  );
}

function initTiltCards() {
  if (prefersReducedMotion || isCoarsePointer) return;

  document.querySelectorAll('[data-tilt-card]').forEach((card) => {
    card.addEventListener('pointermove', (event) => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;
      const rotateX = (0.5 - y) * 9;
      const rotateY = (x - 0.5) * 11;

      card.style.setProperty('--rotate-x', `${rotateX.toFixed(2)}deg`);
      card.style.setProperty('--rotate-y', `${rotateY.toFixed(2)}deg`);
      card.style.setProperty('--glare-x', `${(x * 100).toFixed(1)}%`);
      card.style.setProperty('--glare-y', `${(y * 100).toFixed(1)}%`);
      card.classList.add('is-tilting');
    });

    card.addEventListener('pointerleave', () => {
      card.style.removeProperty('--rotate-x');
      card.style.removeProperty('--rotate-y');
      card.style.removeProperty('--glare-x');
      card.style.removeProperty('--glare-y');
      card.classList.remove('is-tilting');
    });
  });
}

function initParallax() {
  const visual = document.querySelector('[data-hero-visual]');
  const layers = document.querySelectorAll('[data-parallax-layer]');
  if (!visual || !layers.length || prefersReducedMotion || isCoarsePointer) return;

  visual.addEventListener('pointermove', (event) => {
    const rect = visual.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    layers.forEach((layer) => {
      const depth = Number(layer.dataset.parallaxLayer);
      layer.style.transform = `translate3d(${x * depth * 110}px, ${y * depth * 110}px, 0)`;
    });
  });

  visual.addEventListener('pointerleave', () => {
    layers.forEach((layer) => {
      layer.style.transform = '';
    });
  });
}

function initHeroScene() {
  const canvas = document.querySelector('[data-hero-canvas]');
  const visual = document.querySelector('[data-hero-visual]');
  if (!canvas || !visual) return;

  import('https://unpkg.com/three@0.160.0/build/three.module.js')
    .then((THREE) => buildHeroScene(THREE, canvas, visual))
    .catch(() => {
      visual.classList.add('is-fallback');
    });
}

function buildHeroScene(THREE, canvas, visual) {
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
  } catch {
    visual.classList.add('is-fallback');
    return;
  }

  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.8));
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
  camera.position.set(0, 0.4, 7);

  const group = new THREE.Group();
  scene.add(group);

  scene.add(new THREE.AmbientLight(0x9fdcff, 0.6));

  const keyLight = new THREE.PointLight(0x66ffd2, 2.2, 20);
  keyLight.position.set(4, 3, 5);
  scene.add(keyLight);

  const fillLight = new THREE.PointLight(0xffc46b, 1.1, 18);
  fillLight.position.set(-5, -2, 4);
  scene.add(fillLight);

  const core = new THREE.Mesh(
    new THREE.IcosahedronGeometry(1.1, 2),
    new THREE.MeshPhysicalMaterial({
      color: 0x7dffd6,
      emissive: 0x0d4f4d,
      roughness: 0.22,
      metalness: 0.62,
      transmission: 0.16,
      transparent: true,
      opacity: 0.84,
    })
  );
  group.add(core);

  const wire = new THREE.LineSegments(
    new THREE.EdgesGeometry(new THREE.IcosahedronGeometry(1.42, 1)),
    new THREE.LineBasicMaterial({ color: 0xd7fff2, transparent: true, opacity: 0.38 })
  );
  group.add(wire);

  const ringMaterial = new THREE.MeshBasicMaterial({
    color: 0x78a7ff,
    transparent: true,
    opacity: 0.32,
  });

  const rings = [
    { rotation: [Math.PI / 2.2, 0.3, 0.2], scale: [1.8, 1.8, 1.8] },
    { rotation: [0.25, Math.PI / 2.1, 0.9], scale: [2.28, 2.28, 2.28] },
    { rotation: [0.72, 0.1, Math.PI / 2], scale: [2.72, 2.72, 2.72] },
  ].map(({ rotation, scale }) => {
    const ring = new THREE.Mesh(new THREE.TorusGeometry(1, 0.008, 10, 180), ringMaterial);
    ring.rotation.set(...rotation);
    ring.scale.set(...scale);
    group.add(ring);
    return ring;
  });

  const nodeMaterial = new THREE.MeshBasicMaterial({ color: 0xffcf6a });
  const nodes = new THREE.Group();
  const nodePositions = [];

  for (let index = 0; index < 20; index += 1) {
    const angle = (index / 20) * Math.PI * 2;
    const radius = 2.15 + (index % 4) * 0.18;
    const y = Math.sin(index * 1.7) * 0.9;
    const position = new THREE.Vector3(Math.cos(angle) * radius, y, Math.sin(angle) * radius);
    nodePositions.push(position);

    const node = new THREE.Mesh(new THREE.SphereGeometry(0.04 + (index % 3) * 0.012, 12, 12), nodeMaterial);
    node.position.copy(position);
    nodes.add(node);
  }

  group.add(nodes);

  const linePoints = [];
  nodePositions.forEach((position, index) => {
    linePoints.push(position.x, position.y, position.z);
    const next = nodePositions[(index + 5) % nodePositions.length];
    linePoints.push(next.x, next.y, next.z);
  });

  const lineGeometry = new THREE.BufferGeometry();
  lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePoints, 3));
  const lines = new THREE.LineSegments(
    lineGeometry,
    new THREE.LineBasicMaterial({ color: 0x5f8cff, transparent: true, opacity: 0.22 })
  );
  group.add(lines);

  const particlePositions = [];
  for (let index = 0; index < 180; index += 1) {
    particlePositions.push(
      (Math.random() - 0.5) * 7.2,
      (Math.random() - 0.5) * 4.6,
      (Math.random() - 0.5) * 4.8
    );
  }

  const particleGeometry = new THREE.BufferGeometry();
  particleGeometry.setAttribute('position', new THREE.Float32BufferAttribute(particlePositions, 3));
  const particles = new THREE.Points(
    particleGeometry,
    new THREE.PointsMaterial({
      color: 0xdafdf4,
      size: 0.018,
      transparent: true,
      opacity: 0.55,
      depthWrite: false,
    })
  );
  scene.add(particles);

  const pointer = { x: 0, y: 0 };
  if (!isCoarsePointer) {
    visual.addEventListener('pointermove', (event) => {
      const rect = visual.getBoundingClientRect();
      pointer.x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      pointer.y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
    });

    visual.addEventListener('pointerleave', () => {
      pointer.x = 0;
      pointer.y = 0;
    });
  }

  const resize = () => {
    const rect = visual.getBoundingClientRect();
    const width = Math.max(1, Math.floor(rect.width));
    const height = Math.max(1, Math.floor(rect.height));
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  };

  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(visual);
  resize();

  visual.classList.add('is-webgl-ready');

  const render = (time = 0) => {
    const t = time * 0.001;
    group.rotation.y = t * 0.22 + pointer.x * 0.22;
    group.rotation.x = Math.sin(t * 0.55) * 0.08 + pointer.y * 0.12;
    core.rotation.y = t * 0.42;
    core.rotation.x = t * 0.18;
    wire.rotation.y = -t * 0.28;
    rings.forEach((ring, index) => {
      ring.rotation.z += 0.0025 + index * 0.0009;
    });
    particles.rotation.y = t * 0.025;
    particles.rotation.x = Math.sin(t * 0.2) * 0.025;
    renderer.render(scene, camera);

    if (!prefersReducedMotion) {
      window.requestAnimationFrame(render);
    }
  };

  render();
}

function initYear() {
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

renderApp();
initNavigation();
initReveal();
initScrollProgress();
initTiltCards();
initParallax();
initHeroScene();
initYear();
