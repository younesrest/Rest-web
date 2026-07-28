// ========================================
// Translations
// ========================================
const translations = {
    es: {
        'nav.about': 'Sobre Mí', 'nav.services': 'Servicios', 'nav.projects': 'Proyectos', 'nav.technologies': 'Tecnologías', 'nav.contact': 'Contacto',
        'palette.triggerLabel': 'Buscar', 'palette.placeholder': 'Ir a...',
        'palette.about': 'Ir a Sobre Mí', 'palette.services': 'Ir a Servicios', 'palette.projects': 'Ir a Proyectos', 'palette.technologies': 'Ir a Tecnologías', 'palette.languages': 'Ir a Idiomas', 'palette.contact': 'Ir a Contacto',
        'palette.toggleTheme': 'Cambiar tema', 'palette.copyEmail': 'Copiar email', 'palette.openGithub': 'Abrir GitHub', 'palette.downloadCV': 'Descargar CV', 'palette.viewCert': 'Ver certificado',
        'palette.noResults': 'Sin resultados', 'palette.tagNav': 'ir', 'palette.tagAction': 'acción', 'palette.copied': 'Copiado ✓',
        'hero.basedPill': 'Basado en España',
        'hero.description': 'Especialista en Ciberseguridad con experiencia en pentesting, análisis de vulnerabilidades, implementación de SIEM y cumplimiento normativo ISO 27001.',
        'hero.cta': 'Contactar', 'hero.projects': 'Ver Proyectos', 'hero.downloadCv': 'Descargar CV', 'hero.viewCert': 'Ver Certificado',
        'hero.stats.projects': 'Proyectos', 'hero.stats.tools': 'Herramientas', 'hero.stats.languages': 'Idiomas',
        'about.eyebrow': 'Perfil', 'about.title': 'Sobre Mí',
        'about.p1': 'Soy un especialista de la ciberseguridad especializado en proteger infraestructuras digitales y garantizar el cumplimiento normativo.',
        'about.p2': 'Mi experiencia abarca desde pruebas de penetración y análisis forense hasta la implementación de sistemas SIEM como Wazuh y Splunk. Trabajo con marcos de referencia como ISO 27001, NIST y OWASP Top 10.',
        'about.p3': 'Comprometido con la mejora continua y el aprendizaje de nuevas tecnologías para mantenerme a la vanguardia en un campo que evoluciona constantemente.',
        'services.eyebrow': 'Lo que ofrezco', 'services.title': 'Servicios',
        'services.pentesting.title': 'Pentesting', 'services.pentesting.desc': 'Pruebas de penetración para identificar vulnerabilidades en sistemas, redes y aplicaciones web.',
        'services.siem.title': 'Implementación SIEM', 'services.siem.desc': 'Configuración y gestión de sistemas SIEM con Wazuh, Splunk y otras herramientas de monitorización.',
        'services.audit.title': 'Auditorías de Seguridad', 'services.audit.desc': 'Evaluaciones completas de seguridad siguiendo estándares ISO 27001 y NIST.',
        'services.forensics.title': 'Análisis Forense', 'services.forensics.desc': 'Investigación de incidentes de seguridad y recuperación de evidencias digitales.',
        'projects.eyebrow': 'Trabajo seleccionado', 'projects.title': 'Proyectos',
        'projects.cryptovault.desc': 'Encriptador de archivos AES-256-GCM con derivación PBKDF2. Procesamiento 100% local en el navegador sin enviar datos a servidores.',
        'projects.scanner.desc': 'Escáner de seguridad de red en Python que analiza puertos comunes, detecta vulnerabilidades y ofrece recomendaciones automáticas.',
        'projects.forensics.title': 'Análisis Forense', 'projects.forensics.desc': 'Documentación y herramientas para análisis forense digital, incluyendo metodologías de investigación y recuperación de evidencias.',
        'projects.final.title': 'Proyecto Final Ciberseguridad', 'projects.final.desc': 'Proyecto integral de ciberseguridad que incluye análisis de vulnerabilidades, implementación de medidas de seguridad y documentación.',
        'projects.password.desc': 'Gestor de contraseñas desarrollado en C++ con encriptación segura para almacenamiento local de credenciales.',
        'projects.report.title': 'Pentesting Report', 'projects.report.desc': 'Plantilla profesional de informes de pentesting con propuestas de prevención y recomendaciones de seguridad.',
        'projects.viewAll': 'Ver todos los proyectos',
        'technologies.eyebrow': 'Stack', 'technologies.title': 'Tecnologías',
        'languages.eyebrow': 'Comunicación', 'languages.title': 'Idiomas',
        'languages.spanish': 'Español', 'languages.english': 'Inglés', 'languages.french': 'Francés',
        'languages.native': 'Nativo', 'languages.advanced': 'Avanzado', 'languages.intermediate': 'Intermedio',
        'contact.eyebrow': 'Hablemos', 'contact.title': 'Contacto', 'contact.description': '¿Interesado en colaborar o tienes alguna pregunta? No dudes en contactarme.',
        'contact.emailLabel': 'Email', 'contact.siteLabel': 'Sitio web', 'contact.locationLabel': 'Ubicación', 'contact.location': 'España',
        'footer.copyright': '© 2026 Younes Laghzali. Todos los derechos reservados.',
        'typing': ['Especialista en Ciberseguridad', 'Pentester', 'Analista de Seguridad', 'SIEM Expert']
    },
    en: {
        'nav.about': 'About Me', 'nav.services': 'Services', 'nav.projects': 'Projects', 'nav.technologies': 'Technologies', 'nav.contact': 'Contact',
        'palette.triggerLabel': 'Search', 'palette.placeholder': 'Jump to...',
        'palette.about': 'Go to About', 'palette.services': 'Go to Services', 'palette.projects': 'Go to Projects', 'palette.technologies': 'Go to Technologies', 'palette.languages': 'Go to Languages', 'palette.contact': 'Go to Contact',
        'palette.toggleTheme': 'Toggle theme', 'palette.copyEmail': 'Copy email', 'palette.openGithub': 'Open GitHub', 'palette.downloadCV': 'Download CV', 'palette.viewCert': 'View certificate',
        'palette.noResults': 'No results', 'palette.tagNav': 'nav', 'palette.tagAction': 'action', 'palette.copied': 'Copied ✓',
        'hero.basedPill': 'Based in Spain',
        'hero.description': 'Cybersecurity Specialist with experience in pentesting, vulnerability analysis, SIEM implementation and ISO 27001 compliance.',
        'hero.cta': 'Contact', 'hero.projects': 'View Projects', 'hero.downloadCv': 'Download CV', 'hero.viewCert': 'View Certificate',
        'hero.stats.projects': 'Projects', 'hero.stats.tools': 'Tools', 'hero.stats.languages': 'Languages',
        'about.eyebrow': 'Profile', 'about.title': 'About Me',
        'about.p1': 'I am a cybersecurity professional based in Spain, specialized in protecting digital infrastructures and ensuring regulatory compliance.',
        'about.p2': 'My experience ranges from penetration testing and forensic analysis to implementing SIEM systems like Wazuh and Splunk. I work with frameworks such as ISO 27001, NIST and OWASP Top 10.',
        'about.p3': 'Committed to continuous improvement and learning new technologies to stay at the forefront of a constantly evolving field.',
        'services.eyebrow': 'What I offer', 'services.title': 'Services',
        'services.pentesting.title': 'Pentesting', 'services.pentesting.desc': 'Penetration testing to identify vulnerabilities in systems, networks and web applications.',
        'services.siem.title': 'SIEM Implementation', 'services.siem.desc': 'Configuration and management of SIEM systems with Wazuh, Splunk and other monitoring tools.',
        'services.audit.title': 'Security Audits', 'services.audit.desc': 'Comprehensive security assessments following ISO 27001 and NIST standards.',
        'services.forensics.title': 'Forensic Analysis', 'services.forensics.desc': 'Security incident investigation and digital evidence recovery.',
        'projects.eyebrow': 'Selected work', 'projects.title': 'Projects',
        'projects.cryptovault.desc': 'AES-256-GCM file encryptor with PBKDF2 derivation. 100% local processing in the browser without sending data to servers.',
        'projects.scanner.desc': 'Network security scanner in Python that analyzes common ports, detects vulnerabilities and offers automatic recommendations.',
        'projects.forensics.title': 'Forensic Analysis', 'projects.forensics.desc': 'Documentation and tools for digital forensic analysis, including investigation methodologies and evidence recovery.',
        'projects.final.title': 'Cybersecurity Final Project', 'projects.final.desc': 'Comprehensive cybersecurity project including vulnerability analysis, security measures implementation and documentation.',
        'projects.password.desc': 'Password manager developed in C++ with secure encryption for local credential storage.',
        'projects.report.title': 'Pentesting Report', 'projects.report.desc': 'Professional pentesting report template with prevention proposals and security recommendations.',
        'projects.viewAll': 'View all projects',
        'technologies.eyebrow': 'Stack', 'technologies.title': 'Technologies',
        'languages.eyebrow': 'Communication', 'languages.title': 'Languages',
        'languages.spanish': 'Spanish', 'languages.english': 'English', 'languages.french': 'French',
        'languages.native': 'Native', 'languages.advanced': 'Advanced', 'languages.intermediate': 'Intermediate',
        'contact.eyebrow': "Let's talk", 'contact.title': 'Contact', 'contact.description': 'Interested in collaborating or have any questions? Feel free to contact me.',
        'contact.emailLabel': 'Email', 'contact.siteLabel': 'Website', 'contact.locationLabel': 'Location', 'contact.location': 'Spain',
        'footer.copyright': '© 2026 Younes Laghzali. All rights reserved.',
        'typing': ['Cybersecurity Specialist', 'Pentester', 'Security Analyst', 'SIEM Expert']
    },
    fr: {
        'nav.about': 'À Propos', 'nav.services': 'Services', 'nav.projects': 'Projets', 'nav.technologies': 'Technologies', 'nav.contact': 'Contact',
        'palette.triggerLabel': 'Rechercher', 'palette.placeholder': 'Aller à...',
        'palette.about': 'Aller à À Propos', 'palette.services': 'Aller à Services', 'palette.projects': 'Aller à Projets', 'palette.technologies': 'Aller à Technologies', 'palette.languages': 'Aller à Langues', 'palette.contact': 'Aller à Contact',
        'palette.toggleTheme': 'Changer de thème', 'palette.copyEmail': "Copier l'email", 'palette.openGithub': 'Ouvrir GitHub', 'palette.downloadCV': 'Télécharger le CV', 'palette.viewCert': 'Voir le certificat',
        'palette.noResults': 'Aucun résultat', 'palette.tagNav': 'nav', 'palette.tagAction': 'action', 'palette.copied': 'Copié ✓',
        'hero.basedPill': 'Basé en Espagne',
        'hero.description': 'Spécialiste en Cybersécurité avec expérience en pentesting, analyse de vulnérabilités, implémentation SIEM et conformité ISO 27001.',
        'hero.cta': 'Contacter', 'hero.projects': 'Voir Projets', 'hero.downloadCv': 'Télécharger le CV', 'hero.viewCert': 'Voir le Certificat',
        'hero.stats.projects': 'Projets', 'hero.stats.tools': 'Outils', 'hero.stats.languages': 'Langues',
        'about.eyebrow': 'Profil', 'about.title': 'À Propos',
        'about.p1': "Je suis un professionnel de la cybersécurité basé en Espagne, spécialisé dans la protection des infrastructures numériques et la conformité réglementaire.",
        'about.p2': "Mon expérience va des tests de pénétration et analyse forensique à l'implémentation de systèmes SIEM comme Wazuh et Splunk. Je travaille avec des cadres comme ISO 27001, NIST et OWASP Top 10.",
        'about.p3': "Engagé dans l'amélioration continue et l'apprentissage de nouvelles technologies pour rester à la pointe d'un domaine en constante évolution.",
        'services.eyebrow': 'Ce que je propose', 'services.title': 'Services',
        'services.pentesting.title': 'Pentesting', 'services.pentesting.desc': 'Tests de pénétration pour identifier les vulnérabilités dans les systèmes, réseaux et applications web.',
        'services.siem.title': 'Implémentation SIEM', 'services.siem.desc': 'Configuration et gestion de systèmes SIEM avec Wazuh, Splunk et autres outils de surveillance.',
        'services.audit.title': 'Audits de Sécurité', 'services.audit.desc': 'Évaluations complètes de sécurité suivant les normes ISO 27001 et NIST.',
        'services.forensics.title': 'Analyse Forensique', 'services.forensics.desc': "Investigation d'incidents de sécurité et récupération de preuves numériques.",
        'projects.eyebrow': 'Travaux sélectionnés', 'projects.title': 'Projets',
        'projects.cryptovault.desc': 'Chiffreur de fichiers AES-256-GCM avec dérivation PBKDF2. Traitement 100% local dans le navigateur sans envoyer de données aux serveurs.',
        'projects.scanner.desc': 'Scanner de sécurité réseau en Python qui analyse les ports communs, détecte les vulnérabilités et offre des recommandations automatiques.',
        'projects.forensics.title': 'Analyse Forensique', 'projects.forensics.desc': "Documentation et outils pour l'analyse forensique numérique, y compris les méthodologies d'investigation et la récupération de preuves.",
        'projects.final.title': 'Projet Final Cybersécurité', 'projects.final.desc': 'Projet complet de cybersécurité incluant analyse de vulnérabilités, implémentation de mesures de sécurité et documentation.',
        'projects.password.desc': 'Gestionnaire de mots de passe développé en C++ avec chiffrement sécurisé pour le stockage local des identifiants.',
        'projects.report.title': 'Rapport Pentesting', 'projects.report.desc': 'Modèle professionnel de rapports de pentesting avec propositions de prévention et recommandations de sécurité.',
        'projects.viewAll': 'Voir tous les projets',
        'technologies.eyebrow': 'Stack', 'technologies.title': 'Technologies',
        'languages.eyebrow': 'Communication', 'languages.title': 'Langues',
        'languages.spanish': 'Espagnol', 'languages.english': 'Anglais', 'languages.french': 'Français',
        'languages.native': 'Natif', 'languages.advanced': 'Avancé', 'languages.intermediate': 'Intermédiaire',
        'contact.eyebrow': 'Discutons', 'contact.title': 'Contact', 'contact.description': "Intéressé par une collaboration ou avez des questions ? N'hésitez pas à me contacter.",
        'contact.emailLabel': 'Email', 'contact.siteLabel': 'Site web', 'contact.locationLabel': 'Localisation', 'contact.location': 'Espagne',
        'footer.copyright': '© 2026 Younes Laghzali. Tous droits réservés.',
        'typing': ['Spécialiste Cybersécurité', 'Pentester', 'Analyste Sécurité', 'Expert SIEM']
    }
};

let currentLang = 'es';
const isFinePointer = window.matchMedia('(pointer: fine)').matches;
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

document.addEventListener('DOMContentLoaded', function () {
    initPreloader();
    initThemeToggle();
    initLanguageSelector();
    initScrollEffects();
    initMobileMenu();
    initScrollAnimations();
    initScrollSpy();
    initMagnetic();
    initSpotCards();
    initCommandPalette();
    initDocumentHandlers();
    if (isFinePointer) initCursor();
});

// ========================================
// Preloader
// ========================================
function initPreloader() {
    const preloader = document.getElementById('preloader');
    const fill = document.getElementById('boot-progress-fill');
    const percentEl = document.getElementById('boot-percent');
    const returning = sessionStorage.getItem('rests_visited');
    const duration = prefersReducedMotion ? 1 : (returning ? 350 : 1300);
    const start = performance.now();

    function tick(now) {
        const p = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        const pct = Math.round(eased * 100);
        fill.style.width = pct + '%';
        percentEl.textContent = pct + '%';
        if (p < 1) {
            requestAnimationFrame(tick);
        } else {
            sessionStorage.setItem('rests_visited', '1');
            setTimeout(() => {
                preloader.classList.add('hidden');
                document.body.classList.add('revealed');
                initTypingEffect();
            }, 150);
        }
    }
    requestAnimationFrame(tick);
}

// ========================================
// Custom cursor
// ========================================
function initCursor() {
    const dot = document.getElementById('cursor-dot');
    const ring = document.getElementById('cursor-ring');
    let rx = 0, ry = 0, tx = 0, ty = 0;

    window.addEventListener('mousemove', (e) => {
        document.body.classList.add('cursor-ready');
        dot.style.left = e.clientX + 'px';
        dot.style.top = e.clientY + 'px';
        tx = e.clientX; ty = e.clientY;
    });

    function loop() {
        rx += (tx - rx) * 0.18;
        ry += (ty - ry) * 0.18;
        ring.style.left = rx + 'px';
        ring.style.top = ry + 'px';
        requestAnimationFrame(loop);
    }
    loop();

    document.querySelectorAll('a, button, .spot-card, input, [data-magnetic]').forEach(el => {
        el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
        el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
    });
}

// ========================================
// Magnetic buttons
// ========================================
function initMagnetic() {
    if (!isFinePointer || prefersReducedMotion) return;
    document.querySelectorAll('[data-magnetic]').forEach(el => {
        el.addEventListener('mousemove', (e) => {
            const r = el.getBoundingClientRect();
            const relX = e.clientX - r.left - r.width / 2;
            const relY = e.clientY - r.top - r.height / 2;
            el.style.transform = `translate(${relX * 0.22}px, ${relY * 0.3}px)`;
        });
        el.addEventListener('mouseleave', () => { el.style.transform = ''; });
    });
}

// ========================================
// Spotlight card hover
// ========================================
function initSpotCards() {
    if (!isFinePointer) return;
    document.querySelectorAll('.spot-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const r = card.getBoundingClientRect();
            card.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100) + '%');
            card.style.setProperty('--my', ((e.clientY - r.top) / r.height * 100) + '%');
        });
    });
}

// ========================================
// Theme toggle
// ========================================
function applyThemeToggle() {
    const html = document.documentElement;
    html.classList.toggle('dark-mode');
    localStorage.setItem('theme', html.classList.contains('dark-mode') ? 'dark' : 'light');
}
function initThemeToggle() {
    document.getElementById('theme-toggle').addEventListener('click', () => {
        if (document.startViewTransition && !prefersReducedMotion) {
            document.startViewTransition(() => applyThemeToggle());
        } else {
            applyThemeToggle();
        }
    });
}

// ========================================
// Language Selector
// ========================================
function initLanguageSelector() {
    const langBtn = document.getElementById('lang-btn');
    const langDropdown = document.getElementById('lang-dropdown');
    const currentLangSpan = document.getElementById('current-lang');

    langBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        langDropdown.classList.toggle('show');
    });
    document.addEventListener('click', () => langDropdown.classList.remove('show'));

    langDropdown.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            const doSwitch = () => {
                currentLang = lang;
                currentLangSpan.textContent = lang.toUpperCase();
                updateLanguage(lang);
            };
            if (document.startViewTransition && !prefersReducedMotion) {
                document.startViewTransition(doSwitch);
            } else {
                doSwitch();
            }
            langDropdown.classList.remove('show');
        });
    });
}

function updateLanguage(lang) {
    const t = translations[lang];
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (t[key]) el.textContent = t[key];
    });
    document.getElementById('palette-input').placeholder = t['palette.placeholder'];
}

// ========================================
// Scroll effects (header + back to top)
// ========================================
function initScrollEffects() {
    const header = document.getElementById('header');
    const backToTop = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 50);
        backToTop.classList.toggle('visible', window.scrollY > 400);
    });

    backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// ========================================
// Scrollspy nav indicator
// ========================================
function initScrollSpy() {
    const links = Array.from(document.querySelectorAll('#nav a'));
    const indicator = document.getElementById('nav-indicator');
    const sections = links.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);

    function place(link) {
        if (!link) return;
        indicator.style.width = link.offsetWidth + 'px';
        indicator.style.transform = `translateX(${link.offsetLeft}px)`;
        indicator.classList.add('ready');
        links.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const idx = sections.indexOf(entry.target);
                if (idx > -1) place(links[idx]);
            }
        });
    }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });

    sections.forEach(s => observer.observe(s));
}

// ========================================
// Mobile Menu
// ========================================
function initMobileMenu() {
    const menuToggle = document.getElementById('menu-toggle');
    const nav = document.getElementById('nav');
    menuToggle.addEventListener('click', () => nav.classList.toggle('open'));
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));
}

// ========================================
// Typing Effect
// ========================================
function initTypingEffect() {
    const typingText = document.getElementById('typing-text');
    if (!typingText) return;
    const phrases = translations[currentLang].typing;
    let phraseIndex = 0, charIndex = 0, isDeleting = false;

    function type() {
        const currentPhrase = phrases[phraseIndex];
        typingText.textContent = isDeleting
            ? currentPhrase.substring(0, charIndex - 1)
            : currentPhrase.substring(0, charIndex + 1);
        charIndex += isDeleting ? -1 : 1;

        let typeSpeed = isDeleting ? 45 : 90;
        if (!isDeleting && charIndex === currentPhrase.length) { typeSpeed = 1800; isDeleting = true; }
        else if (isDeleting && charIndex === 0) { isDeleting = false; phraseIndex = (phraseIndex + 1) % phrases.length; typeSpeed = 400; }

        setTimeout(type, typeSpeed);
    }
    type();
}

// ========================================
// Scroll reveal (IntersectionObserver fallback / baseline)
// ========================================
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
}

// ========================================
// CV / Certificate handlers
// ========================================
function downloadCV() {
    const link = document.createElement('a');
    link.href = 'YounesCv.pdf';
    link.download = 'Younes-Laghzali-CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
function viewCertificate() { window.open('certificate.pdf', '_blank'); }
function initDocumentHandlers() {
    const dl = document.getElementById('download-cv-btn');
    const vc = document.getElementById('view-certificate-btn');
    if (dl) dl.addEventListener('click', downloadCV);
    if (vc) vc.addEventListener('click', viewCertificate);
}

// ========================================
// Command palette
// ========================================
function initCommandPalette() {
    const trigger = document.getElementById('palette-trigger');
    const overlay = document.getElementById('command-palette');
    const input = document.getElementById('palette-input');
    const results = document.getElementById('palette-results');
    let activeIndex = 0;
    let items = [];

    function buildItems() {
        const t = translations[currentLang];
        return [
            { label: t['palette.about'], tag: t['palette.tagNav'], run: () => goTo('#about') },
            { label: t['palette.services'], tag: t['palette.tagNav'], run: () => goTo('#services') },
            { label: t['palette.projects'], tag: t['palette.tagNav'], run: () => goTo('#projects') },
            { label: t['palette.technologies'], tag: t['palette.tagNav'], run: () => goTo('#technologies') },
            { label: t['palette.languages'], tag: t['palette.tagNav'], run: () => goTo('#languages') },
            { label: t['palette.contact'], tag: t['palette.tagNav'], run: () => goTo('#contact') },
            { label: t['palette.toggleTheme'], tag: t['palette.tagAction'], run: () => { close(); document.getElementById('theme-toggle').click(); } },
            { label: t['palette.copyEmail'], tag: t['palette.tagAction'], run: () => copyEmail() },
            { label: t['palette.openGithub'], tag: t['palette.tagAction'], run: () => { close(); window.open('https://github.com/younesrest', '_blank'); } },
            { label: t['palette.downloadCV'], tag: t['palette.tagAction'], run: () => { close(); downloadCV(); } },
            { label: t['palette.viewCert'], tag: t['palette.tagAction'], run: () => { close(); viewCertificate(); } }
        ];
    }

    function goTo(hash) {
        close();
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    function copyEmail() {
        navigator.clipboard.writeText('younes@rests.info').catch(() => {});
        input.placeholder = translations[currentLang]['palette.copied'];
        setTimeout(close, 700);
    }

    function render(filter) {
        const t = translations[currentLang];
        const q = (filter || '').toLowerCase();
        const filtered = items.filter(it => it.label.toLowerCase().includes(q));
        results.innerHTML = '';
        if (!filtered.length) {
            results.innerHTML = `<div class="palette-empty">${t['palette.noResults']}</div>`;
            return;
        }
        filtered.forEach((it, i) => {
            const row = document.createElement('div');
            row.className = 'palette-item' + (i === activeIndex ? ' active' : '');
            row.innerHTML = `<span>${it.label}</span><span class="pi-tag">${it.tag}</span>`;
            row.addEventListener('mouseenter', () => { activeIndex = i; render(input.value); });
            row.addEventListener('click', () => it.run());
            results.appendChild(row);
        });
        return filtered;
    }

    let filtered = [];
    function open() {
        items = buildItems();
        activeIndex = 0;
        input.value = '';
        input.placeholder = translations[currentLang]['palette.placeholder'];
        overlay.classList.add('open');
        filtered = render('');
        setTimeout(() => input.focus(), 50);
    }
    function close() { overlay.classList.remove('open'); }

    trigger.addEventListener('click', open);
    overlay.addEventListener('click', (e) => { if (e.target === overlay) close(); });

    input.addEventListener('input', () => { activeIndex = 0; filtered = render(input.value); });

    document.addEventListener('keydown', (e) => {
        const isK = (e.key === 'k' || e.key === 'K') && (e.metaKey || e.ctrlKey);
        if (isK) { e.preventDefault(); overlay.classList.contains('open') ? close() : open(); return; }
        if (!overlay.classList.contains('open')) return;
        if (e.key === 'Escape') { close(); return; }
        if (e.key === 'ArrowDown') { e.preventDefault(); activeIndex = Math.min(activeIndex + 1, filtered.length - 1); render(input.value); }
        if (e.key === 'ArrowUp') { e.preventDefault(); activeIndex = Math.max(activeIndex - 1, 0); render(input.value); }
        if (e.key === 'Enter' && filtered[activeIndex]) { filtered[activeIndex].run(); }
    });
}
