/* ==========================================================================
   PRAJWAL NIKAM - PRODUCTION JAVASCRIPT (ZERO DEPENDENCIES)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================================
       1. DYNAMIC BROWSER TAB TITLE
       ========================================================================== */
    const originalTitle = document.title;
    const leaveMessage = "👋 Come back! | Prajwal Nikam";

    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            document.title = leaveMessage;
        } else {
            document.title = originalTitle;
        }
    });

    /* ==========================================================================
       2. THEME SWITCHER (Dark & Light Mode)
       ========================================================================== */
    const themeToggle = document.getElementById('theme-toggle');
    const mobileThemeToggle = document.getElementById('mobile-theme-toggle');
    const body = document.body;

    function applyTheme(isLight) {
        if (isLight) {
            body.classList.add('light-theme');
        } else {
            body.classList.remove('light-theme');
        }

        if (mobileThemeToggle) {
            mobileThemeToggle.innerHTML = isLight ? '<i class="uil uil-sun"></i>' : '<i class="uil uil-moon"></i>';
        }

        localStorage.setItem('theme', isLight ? 'light' : 'dark');
    }

    // Default to dark theme to match mockup aesthetic, but honor user preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        applyTheme(true);
    } else {
        applyTheme(false);
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const isCurrentlyLight = body.classList.contains('light-theme');
            applyTheme(!isCurrentlyLight);
        });
    }

    if (mobileThemeToggle) {
        mobileThemeToggle.addEventListener('click', () => {
            const isCurrentlyLight = body.classList.contains('light-theme');
            applyTheme(!isCurrentlyLight);
        });
    }

    /* ==========================================================================
       3. MOBILE SIDEBAR NAVIGATION TOGGLE
       ========================================================================== */
    const sidebar = document.getElementById('sidebar');
    const navToggle = document.getElementById('nav-toggle');
    const navClose = document.getElementById('nav-close');
    const navLinks = document.querySelectorAll('.nav-link');

    if (navToggle && sidebar) {
        navToggle.addEventListener('click', () => {
            sidebar.classList.add('show-sidebar');
        });
    }

    if (navClose && sidebar) {
        navClose.addEventListener('click', () => {
            sidebar.classList.remove('show-sidebar');
        });
    }

    // Close mobile sidebar when clicking any navigation link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (sidebar) {
                sidebar.classList.remove('show-sidebar');
            }
        });
    });

    /* ==========================================================================
       4. ACTIVE LINK HIGHLIGHTER ON SCROLL
       ========================================================================== */
    const sections = document.querySelectorAll('section[id]');

    function navHighlighter() {
        const scrollY = window.pageYOffset || window.scrollY;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 140;
            const sectionId = current.getAttribute('id');
            const link = document.querySelector(`.nav-menu a[href*="${sectionId}"]`);

            if (link) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    link.classList.add('active-link');
                } else {
                    link.classList.remove('active-link');
                }
            }
        });
    }

    window.addEventListener('scroll', navHighlighter, { passive: true });
    navHighlighter();

    /* ==========================================================================
       5. HERO TYPEWRITER ANIMATION
       ========================================================================== */
    const typedTextSpan = document.querySelector('.typed-text');
    const roles = [
        "Full Stack Developer",
        "Laravel & React Specialist",
        "Java & Spring Boot Engineer",
        "QA & Software Tester"
    ];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 90;

    function typeEffect() {
        if (!typedTextSpan) return;
        const currentRole = roles[roleIndex];

        if (isDeleting) {
            typedTextSpan.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 35;
        } else {
            typedTextSpan.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 80;
        }

        if (!isDeleting && charIndex === currentRole.length) {
            isDeleting = true;
            typingSpeed = 1800; // Pause at end of text
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typingSpeed = 350; // Pause before typing next word
        }

        setTimeout(typeEffect, typingSpeed);
    }

    if (typedTextSpan) {
        setTimeout(typeEffect, 600);
    }

    /* ==========================================================================
       6. SKILLS FILTERING
       ========================================================================== */
    const skillFilters = document.querySelectorAll('#skills-filters .filter-pill');
    const skillCards = document.querySelectorAll('.tech-category-card');

    skillFilters.forEach(pill => {
        pill.addEventListener('click', () => {
            skillFilters.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');

            const category = pill.getAttribute('data-category');

            skillCards.forEach(card => {
                const cardCat = card.getAttribute('data-category');
                if (category === 'all') {
                    card.style.display = 'block';
                    card.style.opacity = '1';
                } else if (category === 'testing') {
                    if (cardCat === 'tools' || cardCat === 'backend') {
                        card.style.display = 'block';
                        card.style.opacity = '1';
                    } else {
                        card.style.display = 'none';
                    }
                } else if (category === 'database') {
                    if (cardCat === 'database' || cardCat === 'backend') {
                        card.style.display = 'block';
                        card.style.opacity = '1';
                    } else {
                        card.style.display = 'none';
                    }
                }
            });
        });
    });

    /* ==========================================================================
       7. NATIVE PROJECTS FILTERING (Zero External Library)
       ========================================================================== */
    const workFilters = document.querySelectorAll('#work-filters .filter-pill');
    const workCards = document.querySelectorAll('.work-card');

    workFilters.forEach(pill => {
        pill.addEventListener('click', function() {
            workFilters.forEach(p => p.classList.remove('active-work'));
            this.classList.add('active-work');

            const selectedFilter = this.getAttribute('data-filter');

            workCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                if (selectedFilter === 'all' || cardCategory === selectedFilter) {
                    card.style.display = 'flex';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0) scale(1)';
                    }, 50);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(10px) scale(0.96)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 250);
                }
            });
        });
    });

    /* ==========================================================================
       8. PORTFOLIO DETAIL POPUP
       ========================================================================== */
    const portfolioPopup = document.querySelector('.portfolio-popup');
    const popupCloseBtn = document.querySelector('.portfolio-popup-close');

    function togglePortfolioPopup() {
        if (portfolioPopup) {
            portfolioPopup.classList.toggle('open');
        }
    }

    document.addEventListener('click', (e) => {
        const workBtn = e.target.closest('.work-button');
        if (workBtn) {
            const workCard = workBtn.closest('.work-card');
            if (workCard) {
                populatePortfolioDetails(workCard);
                togglePortfolioPopup();
            }
        }
    });

    if (popupCloseBtn) {
        popupCloseBtn.addEventListener('click', togglePortfolioPopup);
    }

    if (portfolioPopup) {
        portfolioPopup.addEventListener('click', (e) => {
            if (e.target === portfolioPopup) {
                togglePortfolioPopup();
            }
        });
    }

    function populatePortfolioDetails(card) {
        const workImg = card.querySelector('.work-img');
        const workTitle = card.querySelector('.work-title');
        const itemDetails = card.querySelector('.portfolio-item-details');

        const popupImg = document.querySelector('.pp-thumbnail img');
        const popupSubtitle = document.querySelector('.portfolio-popup-subtitle span');
        const popupBody = document.querySelector('.portfolio-popup-body');

        if (popupImg && workImg) popupImg.src = workImg.src;
        if (popupSubtitle && workTitle) popupSubtitle.textContent = workTitle.textContent;
        if (popupBody && itemDetails) popupBody.innerHTML = itemDetails.innerHTML;
    }

    /* ==========================================================================
       9. CONTACT MODAL & FORM SUBMISSION
       ========================================================================== */
    const contactModal = document.getElementById('contact-modal');
    const openContactBtn = document.getElementById('open-contact-btn');
    const closeContactBtn = document.getElementById('close-contact-modal');
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (openContactBtn && contactModal) {
        openContactBtn.addEventListener('click', () => {
            contactModal.classList.add('active-modal');
        });
    }

    if (closeContactBtn && contactModal) {
        closeContactBtn.addEventListener('click', () => {
            contactModal.classList.remove('active-modal');
        });
    }

    if (contactModal) {
        contactModal.addEventListener('click', (e) => {
            if (e.target === contactModal) {
                contactModal.classList.remove('active-modal');
            }
        });
    }

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');

            const name = nameInput ? nameInput.value.trim() : '';
            const email = emailInput ? emailInput.value.trim() : '';
            const message = messageInput ? messageInput.value.trim() : '';

            if (!name || !email || !message) {
                if (formStatus) {
                    formStatus.style.display = 'block';
                    formStatus.style.color = '#ef4444';
                    formStatus.textContent = 'Please fill out all required fields.';
                }
                return;
            }

            if (formStatus) {
                formStatus.style.display = 'block';
                formStatus.style.color = '#22c55e';
                formStatus.textContent = `Thank you, ${name}! Opening your email client...`;
            }

            const mailtoUri = `mailto:prajwalnikam4@gmail.com?subject=Contact%20from%20${encodeURIComponent(name)}&body=${encodeURIComponent(message)}%0A%0AFrom:%20${encodeURIComponent(name)}%20(${encodeURIComponent(email)})`;

            setTimeout(() => {
                window.location.href = mailtoUri;
                if (contactModal) {
                    contactModal.classList.remove('active-modal');
                }
                contactForm.reset();
                if (formStatus) formStatus.style.display = 'none';
            }, 900);
        });
    }

    /* ==========================================================================
       9b. COPY EMAIL TO CLIPBOARD & TOAST NOTIFICATION
       ========================================================================== */
    const copyEmailBtns = [
        document.getElementById('copy-email-btn'),
        document.getElementById('modal-copy-email-btn')
    ].filter(Boolean);

    function showToast(message) {
        const toast = document.getElementById('toast');
        if (!toast) return;
        const msgEl = toast.querySelector('.toast-message');
        if (msgEl) msgEl.textContent = message;
        toast.classList.add('show-toast');
        setTimeout(() => {
            toast.classList.remove('show-toast');
        }, 2800);
    }

    function copyEmail() {
        const email = 'prajwalnikam4@gmail.com';
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(email).then(() => {
                showToast('Email copied to clipboard! (prajwalnikam4@gmail.com)');
            }).catch(() => {
                fallbackCopy(email);
            });
        } else {
            fallbackCopy(email);
        }
    }

    function fallbackCopy(text) {
        const tempInput = document.createElement('input');
        tempInput.value = text;
        document.body.appendChild(tempInput);
        tempInput.select();
        try {
            document.execCommand('copy');
            showToast('Email copied to clipboard! (prajwalnikam4@gmail.com)');
        } catch (err) {
            showToast('prajwalnikam4@gmail.com');
        }
        document.body.removeChild(tempInput);
    }

    copyEmailBtns.forEach(btn => {
        btn.addEventListener('click', copyEmail);
    });

    // Escape key handler to close any active modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (portfolioPopup && portfolioPopup.classList.contains('open')) {
                togglePortfolioPopup();
            }
            if (contactModal && contactModal.classList.contains('active-modal')) {
                contactModal.classList.remove('active-modal');
            }
        }
    });

    /* ==========================================================================
       10. TESTIMONIALS SLIDER
       ========================================================================== */
    const testimonials = [
        {
            quote: "Prajwal is a dedicated and talented developer. He consistently delivered quality work, showed great problem-solving skills, and was very easy to work with.",
            name: "Parvez Shaikh",
            role: "Team Lead, Zerovaega Technologies",
            avatar: "assets/avatar-parvez.jpg"
        },
        {
            quote: "Exceptional eye for detail and strong full stack competence. Prajwal transformed our requirements into a robust, high-performance web portal ahead of schedule.",
            name: "Rahul Deshmukh",
            role: "Senior Engineering Manager",
            avatar: "assets/avatar-rahul.jpg"
        },
        {
            quote: "Great problem-solving mindset and thorough QA testing discipline. Highly recommended for any Laravel, React, or Spring Boot project.",
            name: "Ananya Sharma",
            role: "Product Lead",
            avatar: "assets/avatar-ananya.jpg"
        }
    ];

    let currentTestimonialIdx = 0;
    const tQuoteEl = document.querySelector('.testimonial-quote-text');
    const tNameEl = document.querySelector('.client-name');
    const tRoleEl = document.querySelector('.client-role');
    const tAvatarEl = document.querySelector('.client-avatar');
    const prevBtn = document.querySelector('.t-nav-btn.prev');
    const nextBtn = document.querySelector('.t-nav-btn.next');

    function updateTestimonial(idx) {
        if (!tQuoteEl) return;
        const item = testimonials[idx];
        tQuoteEl.style.opacity = '0';
        setTimeout(() => {
            tQuoteEl.textContent = item.quote;
            if (tNameEl) tNameEl.textContent = item.name;
            if (tRoleEl) tRoleEl.textContent = item.role;
            if (tAvatarEl) tAvatarEl.src = item.avatar;
            tQuoteEl.style.opacity = '1';
        }, 200);
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            currentTestimonialIdx = (currentTestimonialIdx - 1 + testimonials.length) % testimonials.length;
            updateTestimonial(currentTestimonialIdx);
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            currentTestimonialIdx = (currentTestimonialIdx + 1) % testimonials.length;
            updateTestimonial(currentTestimonialIdx);
        });
    }

    /* ==========================================================================
       11. SCROLL TO TOP FAB
       ========================================================================== */
    const scrollUpBtn = document.getElementById('scroll-up');
    function handleScrollUp() {
        if (scrollUpBtn) {
            if (window.scrollY >= 350) {
                scrollUpBtn.classList.add('show-scroll');
            } else {
                scrollUpBtn.classList.remove('show-scroll');
            }
        }
    }
    window.addEventListener('scroll', handleScrollUp, { passive: true });

    /* ==========================================================================
       12. SCROLL REVEAL OBSERVER
       ========================================================================== */
    if ('IntersectionObserver' in window) {
        const revealElements = document.querySelectorAll('.section-heading, .home-data, .home-portrait-wrapper, .home-quick-contacts, .about-col-info, .about-col-photo, .journey-column, .tech-category-card, .work-card, .service-card, .service-cta-card, .testimonial-mockup-card, .contact-cta-wrapper');
        revealElements.forEach(el => el.classList.add('reveal'));

        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.08,
            rootMargin: "0px 0px -40px 0px"
        });

        revealElements.forEach(el => revealObserver.observe(el));
    }
});
