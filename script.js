document.addEventListener('DOMContentLoaded', () => {
    // Geri Sayım - 15 Mart 2026 00:00:00
    const countdownDate = new Date('April 16, 2026 00:00:00').getTime();

    function updateCountdown() {
        const daysEl = document.getElementById('countdown-days');
        const hoursEl = document.getElementById('countdown-hours');
        const minutesEl = document.getElementById('countdown-minutes');
        const secondsEl = document.getElementById('countdown-seconds');
        if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;
        const diff = countdownDate - Date.now();
        if (diff <= 0) {
            daysEl.textContent = hoursEl.textContent = minutesEl.textContent = secondsEl.textContent = '00';
            return;
        }
        daysEl.textContent = String(Math.floor(diff / 86400000)).padStart(2, '0');
        hoursEl.textContent = String(Math.floor((diff % 86400000) / 3600000)).padStart(2, '0');
        minutesEl.textContent = String(Math.floor((diff % 3600000) / 60000)).padStart(2, '0');
        secondsEl.textContent = String(Math.floor((diff % 60000) / 1000)).padStart(2, '0');
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);

    // Hero Phone Slider
    const heroSlider = document.querySelector('.app-slider');
    const heroDots = document.querySelectorAll('.screen-slider .slider-dots .dot');
    const heroPrevBtn = document.querySelector('.slider-arrow-left');
    const heroNextBtn = document.querySelector('.slider-arrow-right');

    if (heroSlider && heroDots.length) {
        let heroCurrentIndex = 0;
        const heroTotalSlides = heroDots.length;

        function goToHeroSlide(index) {
            heroCurrentIndex = Math.max(0, Math.min(index, heroTotalSlides - 1));
            heroSlider.style.transform = `translateX(-${heroCurrentIndex * 100}%)`;
            heroDots.forEach((dot, i) => dot.classList.toggle('active', i === heroCurrentIndex));
        }

        heroPrevBtn?.addEventListener('click', () => goToHeroSlide(heroCurrentIndex - 1));
        heroNextBtn?.addEventListener('click', () => goToHeroSlide(heroCurrentIndex + 1));
        heroDots.forEach((dot, i) => dot.addEventListener('click', () => goToHeroSlide(i)));
    }

    // Custom Cursor
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');

    if (cursorDot && cursorOutline) {
        window.addEventListener('mousemove', (e) => {
            const posX = e.clientX;
            const posY = e.clientY;

            cursorDot.style.left = `${posX}px`;
            cursorDot.style.top = `${posY}px`;

            cursorOutline.animate({
                left: `${posX}px`,
                top: `${posY}px`
            }, { duration: 500, fill: "forwards" });
        });

        document.addEventListener('mousedown', () => {
            cursorOutline.style.transform = 'translate(-50%, -50%) scale(0.8)';
        });

        document.addEventListener('mouseup', () => {
            cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
        });
    }

    // Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navbar = document.querySelector('.navbar');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // Sticky Navbar
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
                navbar.style.background = 'rgba(2, 6, 23, 0.95)';
            } else {
                navbar.classList.remove('scrolled');
                navbar.style.background = 'rgba(2, 6, 23, 0.8)';
            }
        });
    }

    // Smooth Scroll for Anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
                if (navMenu && hamburger && navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    hamburger.classList.remove('active');
                }
            }
        });
    });

    // Tab Switching (Antrenman / Beslenme)
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.getAttribute('data-tab');
            const panel = tabId ? document.getElementById(`tab-${tabId}`) : null;
            if (!panel) return;

            tabBtns.forEach(b => b.classList.remove('active'));
            tabPanels.forEach(p => p.classList.remove('active'));

            btn.classList.add('active');
            panel.classList.add('active');
        });
    });

    // Intersection Observer for Fade In Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                obs.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Select all animatable elements across new sections
    const animatableSelectors = [
        '.section-header',
        '.feature-card',
        '.community-content',
        '.community-feature',
        '.social-feed-mockup',
        '.coaching-content',
        '.coaching-feature',
        '.coach-dashboard-mockup',
        '.ai-content',
        '.more-card',
        '.step-card',
        '.comparison-table',
        '.preregister-content'
    ];

    document.querySelectorAll(animatableSelectors.join(', ')).forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });

    // Stagger animation for grid items
    document.querySelectorAll('.feature-grid-3, .more-grid, .steps-grid').forEach(grid => {
        const children = grid.children;
        Array.from(children).forEach((child, index) => {
            if (child.classList.contains('step-connector')) return;
            child.style.transitionDelay = `${index * 0.1}s`;
        });
    });

    // Add CSS class for animation via JS
    const style = document.createElement('style');
    style.innerHTML = `
        .fade-in-up {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);

    // EmailJS (yalnızca kütüphane yüklüyse)
    if (typeof emailjs !== 'undefined') {
        emailjs.init('KBgmeaq11V58CmRhp');
    }

    const preregisterForm = document.getElementById('preregister-form');
    const submitBtn = document.getElementById('submit-btn');
    const formSuccess = document.getElementById('form-success');

    if (preregisterForm && typeof emailjs !== 'undefined') {
        preregisterForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const btnText = submitBtn.querySelector('.btn-text');
            const btnLoading = submitBtn.querySelector('.btn-loading');

            btnText.style.display = 'none';
            btnLoading.style.display = 'inline-flex';
            submitBtn.disabled = true;

            const templateParams = {
                user_name: document.getElementById('user_name').value,
                user_email: document.getElementById('user_email').value
            };

            emailjs.send('service_vuc86px', 'template_q66mhrr', templateParams)
                .then(function () {
                    showSuccess();
                }, function (error) {
                    console.error('EmailJS Error:', error);
                    showSuccess();
                });

            function showSuccess() {
                preregisterForm.style.display = 'none';
                formSuccess.style.display = 'block';
                formSuccess.style.opacity = '0';
                formSuccess.style.transform = 'translateY(20px)';
                formSuccess.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                requestAnimationFrame(() => {
                    formSuccess.style.opacity = '1';
                    formSuccess.style.transform = 'translateY(0)';
                });
            }
        });
    }

    // Hesap silme (aynı EmailJS servisi; şablonda user_name ve user_email alanları kullanılır)
    const accountDeletionForm = document.getElementById('account-deletion-form');
    const deletionSubmitBtn = document.getElementById('deletion-submit-btn');
    const deletionFormSuccess = document.getElementById('deletion-form-success');

    if (accountDeletionForm && deletionSubmitBtn && deletionFormSuccess && typeof emailjs !== 'undefined') {
        accountDeletionForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const confirmEl = document.getElementById('deletion_confirm');
            if (!confirmEl || !confirmEl.checked) {
                return;
            }

            const btnText = deletionSubmitBtn.querySelector('.btn-text');
            const btnLoading = deletionSubmitBtn.querySelector('.btn-loading');

            btnText.style.display = 'none';
            btnLoading.style.display = 'inline-flex';
            deletionSubmitBtn.disabled = true;

            const email = document.getElementById('deletion_email').value.trim();
            const username = document.getElementById('deletion_username').value.trim();
            const usernamePart = username ? ` — Kullanıcı adı: ${username}` : '';

            const templateParams = {
                user_name: `[Hesap silme talebi]${usernamePart}`,
                user_email: email
            };

            emailjs.send('service_vuc86px', 'template_q66mhrr', templateParams)
                .then(function () {
                    showDeletionSuccess();
                }, function (error) {
                    console.error('EmailJS Error (hesap silme):', error);
                    showDeletionSuccess();
                });

            function showDeletionSuccess() {
                accountDeletionForm.style.display = 'none';
                deletionFormSuccess.style.display = 'block';
                deletionFormSuccess.style.opacity = '0';
                deletionFormSuccess.style.transform = 'translateY(20px)';
                deletionFormSuccess.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                requestAnimationFrame(() => {
                    deletionFormSuccess.style.opacity = '1';
                    deletionFormSuccess.style.transform = 'translateY(0)';
                });
            }
        });
    }
});
