(() => {
  'use strict';

  /* =========================================================
     DADOS DOS PROJECTOS
     ========================================================= */
  const PROJECTS = [
    {
      id: 'escogest',
      year: '2026',
      title: 'Escogest — Sistema de Gestão Escolar',
      desc: 'Sistema completo de gestão escolar: matrículas, turmas, notas e comunicação entre escola e encarregados de educação.',
      stack: ['Laravel', 'MySQL', 'Livewire', 'Bootstrap'],
      cover: 'assets/img/portfolio/escogest/img32.PNG',
      images: [
        'assets/img/portfolio/escogest/img32.PNG',
        'assets/img/portfolio/escogest/1.PNG',
        'assets/img/portfolio/escogest/4.PNG',
        'assets/img/portfolio/escogest/5.PNG',
        'assets/img/portfolio/escogest/6.PNG',
        'assets/img/portfolio/escogest/7.PNG',
        'assets/img/portfolio/escogest/8.PNG',
        'assets/img/portfolio/escogest/9.PNG',
        'assets/img/portfolio/escogest/10.PNG',
        'assets/img/portfolio/escogest/11.PNG',
        'assets/img/portfolio/escogest/12.PNG',
        'assets/img/portfolio/escogest/13.PNG',
        'assets/img/portfolio/escogest/28.PNG'
      ]
    },
    {
      id: 'pryanick',
      year: '2025',
      title: 'Pryanick Snack Bar',
      desc: 'Sistema de solicitação de alimentos e bebidas online e presencial, com gestão de pedidos em tempo real.',
      stack: ['PHP', 'MySQL', 'JavaScript'],
      cover: 'assets/img/portfolio/pryanick/img1.png',
      images: [
        'assets/img/portfolio/pryanick/img1.png',
        'assets/img/portfolio/pryanick/img0.png',
        'assets/img/portfolio/pryanick/img2.png',
        'assets/img/portfolio/pryanick/img3.png',
        'assets/img/portfolio/pryanick/img4.png',
        'assets/img/portfolio/pryanick/img5.png',
        'assets/img/portfolio/pryanick/img6.png',
        'assets/img/portfolio/pryanick/img7.png',
        'assets/img/portfolio/pryanick/img8.png',
        'assets/img/portfolio/pryanick/img9.png',
        'assets/img/portfolio/pryanick/img10.png',
        'assets/img/portfolio/pryanick/img11.png'
      ]
    },
    {
      id: 'johnsabores',
      year: '2025',
      title: 'John Sabores na Cozinha',
      desc: 'Sistema de publicação de receitas de cozinha, com categorias e área de autenticação para autores.',
      stack: ['PHP', 'MySQL', 'Bootstrap'],
      cover: 'assets/img/portfolio/johnsabores/home.png',
      images: [
        'assets/img/portfolio/johnsabores/home.png',
        'assets/img/portfolio/johnsabores/login.png',
        'assets/img/portfolio/johnsabores/cat.png',
        'assets/img/portfolio/johnsabores/cat2.png',
        'assets/img/portfolio/johnsabores/receita.png',
        'assets/img/portfolio/johnsabores/receita2.png'
      ]
    },
    {
      id: 'sistemastudio',
      year: '2024',
      title: 'Sistema Integrado para Estúdio Musical',
      desc: 'Sistema para ajudar produtores na gestão de um estúdio de música — agendamentos, sessões e clientes.',
      stack: ['PHP', 'MySQL', 'JavaScript'],
      cover: 'assets/img/portfolio/sistemastudio/sistemastudio (1).png',
      images: [
        'assets/img/portfolio/sistemastudio/sistemastudio (1).png',
        'assets/img/portfolio/sistemastudio/sistemastudio (2).png',
        'assets/img/portfolio/sistemastudio/sistemastudio (3).png',
        'assets/img/portfolio/sistemastudio/sistemastudio (4).png',
        'assets/img/portfolio/sistemastudio/sistemastudio (5).png',
        'assets/img/portfolio/sistemastudio/sistemastudio (6).png',
        'assets/img/portfolio/sistemastudio/sistemastudio (7).png',
        'assets/img/portfolio/sistemastudio/sistemastudio (8).png'
      ],
      video: 'assets/img/portfolio/sistemastudio/sistemastudio.mp4'
    },
    {
      id: 'mifelviagens',
      year: '2024',
      title: 'Mifel Viagens',
      desc: 'Website de reservas de viagens que utiliza integração com o System Bank para processar pagamentos.',
      stack: ['PHP', 'API REST', 'MySQL'],
      cover: 'assets/img/portfolio/mifelviagens/mifelviagens (1).png',
      images: [
        'assets/img/portfolio/mifelviagens/mifelviagens (1).png',
        'assets/img/portfolio/mifelviagens/mifelviagens (2).png',
        'assets/img/portfolio/mifelviagens/mifelviagens (3).png',
        'assets/img/portfolio/mifelviagens/mifelviagens (4).png',
        'assets/img/portfolio/mifelviagens/mifelviagens (5).png',
        'assets/img/portfolio/mifelviagens/mifelviagens (6).png',
        'assets/img/portfolio/mifelviagens/mifelviagens (7).png',
        'assets/img/portfolio/mifelviagens/mifelviagens (8).png',
        'assets/img/portfolio/mifelviagens/mifelviagens (9).png'
      ],
      video: 'assets/img/portfolio/mifelviagens/mifelviagens.mp4'
    },
    {
      id: 'contabanco',
      year: '2024',
      title: 'System Bank',
      desc: 'Simulação de um sistema bancário que fornece uma API ligada ao sistema da agência Mifel Viagens.',
      stack: ['PHP', 'API REST', 'MySQL'],
      cover: 'assets/img/portfolio/contabanco/contabanco (1).png',
      images: [
        'assets/img/portfolio/contabanco/contabanco (1).png',
        'assets/img/portfolio/contabanco/contabanco (2).png',
        'assets/img/portfolio/contabanco/contabanco (3).png',
        'assets/img/portfolio/contabanco/contabanco (4).png',
        'assets/img/portfolio/contabanco/contabanco (5).png',
        'assets/img/portfolio/contabanco/contabanco (6).png'
      ],
      video: 'assets/img/portfolio/contabanco/contabanco.mp4'
    },
    {
      id: 'inquerito',
      year: '2024',
      title: 'Inquérito',
      desc: 'Inquérito de perguntas e respostas para recolha de dados destinados à construção do website de uma produtora musical.',
      stack: ['PHP', 'JavaScript'],
      cover: 'assets/img/portfolio/inquerito/inquerito(1).png',
      images: [
        'assets/img/portfolio/inquerito/inquerito(1).png',
        'assets/img/portfolio/inquerito/inquerito.png'
      ],
      video: 'assets/img/portfolio/inquerito/inquerito.mp4'
    },
    {
      id: 'diagnosticocaes',
      year: '2024',
      title: 'Sistema de Diagnóstico de Cães',
      desc: 'Sistema para detectar doenças em animais com base na combinação de sintomas apresentados.',
      stack: ['Java', 'MySQL'],
      cover: 'assets/img/portfolio/sistemadiagnosticocaes/sistemadiagnosticocaes (1).png',
      images: [
        'assets/img/portfolio/sistemadiagnosticocaes/sistemadiagnosticocaes (1).png',
        'assets/img/portfolio/sistemadiagnosticocaes/sistemadiagnosticocaes (2).png',
        'assets/img/portfolio/sistemadiagnosticocaes/sistemadiagnosticocaes (3).png',
        'assets/img/portfolio/sistemadiagnosticocaes/sistemadiagnosticocaes (4).png'
      ],
      video: 'assets/img/portfolio/sistemadiagnosticocaes/sistemadiagnosticocaes.mp4'
    },
    {
      id: 'gmen',
      year: '2024',
      title: 'Salão de Beleza G-Men',
      desc: 'Simulação de um website institucional para o salão de beleza G-Men, com apresentação de serviços.',
      stack: ['HTML', 'CSS', 'JavaScript'],
      cover: 'assets/img/portfolio/gmen/gmen.png',
      images: ['assets/img/portfolio/gmen/gmen.png'],
      video: 'assets/img/portfolio/gmen/gmen.mp4'
    },
    {
      id: 'sistemaaposta',
      year: '2023',
      title: 'Sistema de Aposta',
      desc: 'Simulação de um sistema de aposta desportiva, com gestão de eventos e cálculo de cotas.',
      stack: ['PHP', 'MySQL', 'jQuery'],
      cover: 'assets/img/portfolio/sistemaaposta/sistemaaposta (3).png',
      images: [
        'assets/img/portfolio/sistemaaposta/sistemaaposta (3).png',
        'assets/img/portfolio/sistemaaposta/sistemaaposta (1).png',
        'assets/img/portfolio/sistemaaposta/sistemaaposta (2).png',
        'assets/img/portfolio/sistemaaposta/sistemaaposta (10).png',
        'assets/img/portfolio/sistemaaposta/sistemaaposta (4).png',
        'assets/img/portfolio/sistemaaposta/sistemaaposta (5).png',
        'assets/img/portfolio/sistemaaposta/sistemaaposta (6).png',
        'assets/img/portfolio/sistemaaposta/sistemaaposta (7).png',
        'assets/img/portfolio/sistemaaposta/sistemaaposta (8).png',
        'assets/img/portfolio/sistemaaposta/sistemaaposta (9).png'
      ],
      video: 'assets/img/portfolio/sistemaaposta/sistemaaposta.mp4'
    },
    {
      id: 'escoladeconducao',
      year: '2023',
      title: 'Escola de Condução',
      desc: 'Projecto de freelance, desenvolvido por recomendação de um estudante do ensino médio.',
      stack: ['HTML', 'CSS', 'JavaScript'],
      cover: 'assets/img/portfolio/escoladeconducao/escoladeconducao (3).png',
      images: [
        'assets/img/portfolio/escoladeconducao/escoladeconducao (3).png',
        'assets/img/portfolio/escoladeconducao/escoladeconducao (1).png',
        'assets/img/portfolio/escoladeconducao/escoladeconducao (2).png',
        'assets/img/portfolio/escoladeconducao/escoladeconducao (4).png',
        'assets/img/portfolio/escoladeconducao/escoladeconducao (5).png'
      ],
      video: 'assets/img/portfolio/escoladeconducao/escoladeconducao.mp4'
    },
    {
      id: 'quizfamiliaraimundo',
      year: '2023',
      title: 'Quiz da Família Raimundo',
      desc: 'Jogo de perguntas e respostas acerca da família Raimundo, com pontuação e feedback imediato.',
      stack: ['JavaScript', 'HTML', 'CSS'],
      cover: 'assets/img/portfolio/quizfamiliaraimundo/quizfamiliaraimundo (1).png',
      images: [
        'assets/img/portfolio/quizfamiliaraimundo/quizfamiliaraimundo (1).png',
        'assets/img/portfolio/quizfamiliaraimundo/quizfamiliaraimundo (2).png',
        'assets/img/portfolio/quizfamiliaraimundo/quizfamiliaraimundo (3).png',
        'assets/img/portfolio/quizfamiliaraimundo/quizfamiliaraimundo (4).png'
      ],
      video: 'assets/img/portfolio/quizfamiliaraimundo/quizfamiliaraimundo.mp4'
    },
    {
      id: 'chatgenio',
      year: '2022',
      title: 'Chat Genio',
      desc: 'Projecto simples de conversação em tempo real entre utilizadores.',
      stack: ['JavaScript', 'PHP'],
      cover: 'assets/img/portfolio/chatgenio/chatgenio.png',
      images: [
        'assets/img/portfolio/chatgenio/chatgenio.png',
        'assets/img/portfolio/chatgenio/chatgenio conversas.png',
        'assets/img/portfolio/chatgenio/chatgenio conversas2.png'
      ],
      video: 'assets/img/portfolio/chatgenio/chatgenio.mp4'
    }
  ];

  /* =========================================================
     RENDER: cards de projecto
     ========================================================= */
  const grid = document.getElementById('projectGrid');

  function cardHTML(p) {
    return `
      <article class="project-card reveal" data-year="${p.year}" data-id="${p.id}" tabindex="0" role="button" aria-label="Ver detalhes de ${p.title}">
        <div class="project-thumb">
          <img src="${p.cover}" alt="${p.title}" loading="lazy">
          <span class="project-year">${p.year}</span>
          <div class="project-overlay"><span>Ver detalhes →</span></div>
        </div>
        <div class="project-body">
          <h4>${p.title}</h4>
          <p>${p.desc}</p>
          <div class="stack-tags">${p.stack.map(s => `<span>${s}</span>`).join('')}</div>
        </div>
      </article>`;
  }

  grid.innerHTML = PROJECTS.map(cardHTML).join('');

  /* =========================================================
     FILTROS
     ========================================================= */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = () => document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      cards().forEach(card => {
        const match = filter === 'all' || card.dataset.year === filter;
        card.classList.toggle('hide', !match);
      });
    });
  });

  /* =========================================================
     MODAL DE PROJECTO
     ========================================================= */
  const modal = document.getElementById('projectModal');
  const modalImg = document.getElementById('modalImg');
  const modalThumbs = document.getElementById('modalThumbs');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDesc');
  const modalYear = document.getElementById('modalYear');
  const modalStack = document.getElementById('modalStack');
  const modalVideo = document.getElementById('modalVideo');

  function openModal(project) {
    modalImg.src = project.images[0];
    modalImg.alt = project.title;
    modalTitle.textContent = project.title;
    modalDesc.textContent = project.desc;
    modalYear.textContent = project.year;
    modalStack.innerHTML = project.stack.map(s => `<span>${s}</span>`).join('');

    modalThumbs.innerHTML = project.images.map((src, i) =>
      `<img src="${src}" alt="" data-src="${src}" class="${i === 0 ? 'active' : ''}">`
    ).join('');

    if (project.video) {
      modalVideo.style.display = 'inline-flex';
      modalVideo.href = project.video;
    } else {
      modalVideo.style.display = 'none';
    }

    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  grid.addEventListener('click', (e) => {
    const card = e.target.closest('.project-card');
    if (!card) return;
    const project = PROJECTS.find(p => p.id === card.dataset.id);
    if (project) openModal(project);
  });

  grid.addEventListener('keydown', (e) => {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    const card = e.target.closest('.project-card');
    if (!card) return;
    e.preventDefault();
    const project = PROJECTS.find(p => p.id === card.dataset.id);
    if (project) openModal(project);
  });

  modalThumbs.addEventListener('click', (e) => {
    const thumb = e.target.closest('img');
    if (!thumb) return;
    modalImg.src = thumb.dataset.src;
    modalThumbs.querySelectorAll('img').forEach(t => t.classList.remove('active'));
    thumb.classList.add('active');
  });

  modal.querySelectorAll('[data-close]').forEach(el => el.addEventListener('click', closeModal));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
  });

  /* =========================================================
     TEMA CLARO / ESCURO
     ========================================================= */
  const themeToggle = document.getElementById('themeToggle');
  const root = document.documentElement;
  const savedTheme = localStorage.getItem('portfolio-theme');
  if (savedTheme) root.setAttribute('data-theme', savedTheme);

  themeToggle.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    root.setAttribute('data-theme', next);
    localStorage.setItem('portfolio-theme', next);
  });

  /* =========================================================
     MENU MOBILE
     ========================================================= */
  const navToggle = document.getElementById('navToggle');
  const mobilePanel = document.getElementById('mobilePanel');

  navToggle.addEventListener('click', () => {
    const isOpen = mobilePanel.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  mobilePanel.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    mobilePanel.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }));

  /* =========================================================
     NAV ACTIVE STATE (scroll spy)
     ========================================================= */
  const sections = document.querySelectorAll('main section[id]');
  const dockLinks = document.querySelectorAll('.dock-link');

  const spyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const id = entry.target.getAttribute('id');
      dockLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
      });
    });
  }, { rootMargin: '-45% 0px -45% 0px' });

  sections.forEach(sec => spyObserver.observe(sec));

  /* =========================================================
     SCROLL REVEAL genérico
     ========================================================= */
  const revealTargets = document.querySelectorAll(
    '.about-narrative, .about-timeline, .how-i-work, .work-card, .skill-group, .contact-info, .contact-form, .project-card'
  );
  revealTargets.forEach(el => el.classList.add('reveal'));

  const revealObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealTargets.forEach(el => revealObserver.observe(el));

  /* =========================================================
     ANÉIS DE COMPETÊNCIA (animação ao entrar na viewport)
     ========================================================= */
  const RING_CIRCUMFERENCE = 2 * Math.PI * 34; // r=34

  const ringObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const value = parseInt(el.dataset.value, 10);
      const fill = el.querySelector('.ring-fill');
      const label = el.querySelector('.ring-value');
      const offset = RING_CIRCUMFERENCE - (value / 100) * RING_CIRCUMFERENCE;

      fill.style.strokeDasharray = `${RING_CIRCUMFERENCE}`;
      fill.style.strokeDashoffset = `${RING_CIRCUMFERENCE}`;
      requestAnimationFrame(() => {
        fill.style.strokeDashoffset = String(offset);
      });

      let current = 0;
      const duration = 1200;
      const start = performance.now();
      function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        current = Math.round(progress * value);
        label.textContent = `${current}%`;
        if (progress < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);

      obs.unobserve(el);
    });
  }, { threshold: 0.4 });

  document.querySelectorAll('.skill-ring').forEach(el => ringObserver.observe(el));

  /* =========================================================
     CONTADORES DO HERO
     ========================================================= */
  const counters = document.querySelectorAll('[data-count]');
  const counterObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.count, 10);
      const duration = 1400;
      const start = performance.now();
      function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        el.textContent = Math.round(progress * target);
        if (progress < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
      obs.unobserve(el);
    });
  }, { threshold: 0.6 });
  counters.forEach(el => counterObserver.observe(el));

  /* =========================================================
     HERO: role rotator (substitui typed.js)
     ========================================================= */
  const roles = [
    'Desenvolvedor de Software Full Stack',
    'FrontEnd com Vue.js &amp; React',
    'Backend com Laravel/PHP &amp; Express.js/Prisma',
    'A transformar ideias em produtos digitais'
  ];
  const roleEl = document.getElementById('roleText');
  let roleIndex = 0;

  function rotateRole() {
    roleIndex = (roleIndex + 1) % roles.length;
    roleEl.style.opacity = '0';
    setTimeout(() => {
      roleEl.innerHTML = roles[roleIndex];
      roleEl.style.opacity = '1';
    }, 350);
  }
  roleEl.style.transition = 'opacity .35s ease';
  setInterval(rotateRole, 3600);

  /* =========================================================
     HERO: reveal orquestrado ao carregar a página
     ========================================================= */
  window.addEventListener('load', () => {
    document.querySelectorAll('.hero-title .reveal-line').forEach((el, i) => {
      el.style.transform = 'translateY(110%)';
      el.style.opacity = '0';
      el.style.transition = `transform .8s var(--ease) ${0.15 + i * 0.12}s, opacity .8s ease ${0.15 + i * 0.12}s`;
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          el.style.transform = 'translateY(0)';
          el.style.opacity = '1';
        });
      });
    });
  });

  /* =========================================================
     FORMULÁRIO DE CONTACTO (validação visual)
     ========================================================= */
  const form = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');

  function validateField(field) {
    const input = field.querySelector('input, textarea');
    let valid = input.checkValidity();
    field.classList.toggle('invalid', !valid);
    field.classList.toggle('valid', valid && input.value.trim() !== '');
    return valid;
  }

  form.querySelectorAll('.field').forEach(field => {
    const input = field.querySelector('input, textarea');
    input.addEventListener('blur', () => validateField(field));
    input.addEventListener('input', () => {
      if (field.classList.contains('invalid')) validateField(field);
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const fields = form.querySelectorAll('.field');
    let allValid = true;
    fields.forEach(field => { if (!validateField(field)) allValid = false; });

    if (!allValid) {
      formStatus.textContent = 'Verifica os campos assinalados.';
      formStatus.style.color = 'var(--danger)';
      return;
    }

    const btn = form.querySelector('button[type="submit"]');
    const label = btn.querySelector('.btn-label');
    const original = label.textContent;
    label.textContent = 'A enviar...';
    btn.disabled = true;

    setTimeout(() => {
      formStatus.textContent = 'Mensagem pronta a enviar — liga o teu serviço de email para activar o envio real.';
      formStatus.style.color = 'var(--accent-2)';
      label.textContent = original;
      btn.disabled = false;
      form.reset();
      fields.forEach(f => f.classList.remove('valid', 'invalid'));
    }, 900);
  });

  /* =========================================================
     ANO NO FOOTER
     ========================================================= */
  document.getElementById('year').textContent = new Date().getFullYear();

})();
