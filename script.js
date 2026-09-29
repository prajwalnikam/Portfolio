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

    // Default to light theme as requested, but honor user preference if toggled to dark
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        applyTheme(false);
    } else {
        applyTheme(true);
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
       3. NAVIGATION DRAWER & SCROLL HEADER
       ========================================================================== */
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    const navClose = document.getElementById('nav-close');
    const navLinks = document.querySelectorAll('.nav-link');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            navMenu.classList.toggle('show-menu');
        });
    }

    if (navClose && navMenu) {
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('show-menu');
        });
    }

    // Close mobile menu when clicking any navigation link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu) {
                navMenu.classList.remove('show-menu');
            }
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (navMenu && navMenu.classList.contains('show-menu')) {
            if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
                navMenu.classList.remove('show-menu');
            }
        }
    });

    // Header elevation shadow on scroll
    const header = document.getElementById('header');
    function scrollHeader() {
        if (!header) return;
        if (window.scrollY >= 50) {
            header.classList.add('scroll-header');
        } else {
            header.classList.remove('scroll-header');
        }
    }
    window.addEventListener('scroll', scrollHeader, { passive: true });
    scrollHeader();

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
                formStatus.textContent = `Thank you, ${name}! Your message is on its way...`;
            }

            // Confetti Celebration
            triggerConfetti();

            const mailtoUri = `mailto:prajwalnikam4@gmail.com?subject=Contact%20from%20${encodeURIComponent(name)}&body=${encodeURIComponent(message)}%0A%0AFrom:%20${encodeURIComponent(name)}%20(${encodeURIComponent(email)})`;

            setTimeout(() => {
                window.location.href = mailtoUri;
                if (contactModal) {
                    contactModal.classList.remove('active-modal');
                }
                contactForm.reset();
                if (formStatus) formStatus.style.display = 'none';
            }, 1200);
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
            if (scheduleModal && scheduleModal.classList.contains('active-modal')) {
                scheduleModal.classList.remove('active-modal');
            }
        }
    });

    /* ==========================================================================
       9c. GOOGLE MEET / SCHEDULE CALL MODAL
       ========================================================================== */
    const scheduleModal = document.getElementById('schedule-modal');
    const scheduleTriggers = [
        document.getElementById('hero-schedule-btn'),
        document.getElementById('schedule-call-btn'),
        document.getElementById('quick-schedule-btn')
    ].filter(Boolean);
    const closeScheduleBtn = document.getElementById('close-schedule-modal');
    const scheduleForm = document.getElementById('schedule-form');
    const schedStatus = document.getElementById('sched-status');

    scheduleTriggers.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            if (scheduleModal) {
                scheduleModal.classList.add('active-modal');
            }
        });
    });

    if (closeScheduleBtn && scheduleModal) {
        closeScheduleBtn.addEventListener('click', () => {
            scheduleModal.classList.remove('active-modal');
        });
    }

    if (scheduleModal) {
        scheduleModal.addEventListener('click', (e) => {
            if (e.target === scheduleModal) {
                scheduleModal.classList.remove('active-modal');
            }
        });
    }

    if (scheduleForm) {
        scheduleForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const nameEl = document.getElementById('sched-name');
            const emailEl = document.getElementById('sched-email');
            const platformEl = document.getElementById('sched-platform');
            const datetimeEl = document.getElementById('sched-datetime');
            const topicEl = document.getElementById('sched-topic');

            const name = nameEl ? nameEl.value.trim() : '';
            const email = emailEl ? emailEl.value.trim() : '';
            const platform = platformEl ? platformEl.value.trim() : 'Google Meet';
            const datetime = datetimeEl ? datetimeEl.value.trim() : '';
            const topic = topicEl ? topicEl.value.trim() : '';

            if (!name || !email || !datetime || !topic) {
                if (schedStatus) {
                    schedStatus.style.display = 'block';
                    schedStatus.style.color = '#ef4444';
                    schedStatus.textContent = 'Please fill out all required fields.';
                }
                return;
            }

            if (schedStatus) {
                schedStatus.style.display = 'block';
                schedStatus.style.color = '#22c55e';
                schedStatus.textContent = `Thank you, ${name}! Generating your ${platform} request...`;
            }

            // Confetti Celebration
            triggerConfetti();

            const subject = `[Meeting Request] ${platform} with ${name}`;
            const bodyContent = `Hi Prajwal,%0D%0A%0D%0AI would like to schedule a ${encodeURIComponent(platform)} call with you.%0D%0A%0D%0A• Name: ${encodeURIComponent(name)}%0D%0A• Email: ${encodeURIComponent(email)}%0D%0A• Preferred Platform: ${encodeURIComponent(platform)}%0D%0A• Preferred Date & Time: ${encodeURIComponent(datetime)}%0D%0A• Discussion Topic: ${encodeURIComponent(topic)}%0D%0A%0D%0APlease reply with the Google Meet link or call confirmation.%0D%0A%0D%0AThank you!`;

            const mailtoUri = `mailto:prajwalnikam4@gmail.com?subject=${encodeURIComponent(subject)}&body=${bodyContent}`;

            setTimeout(() => {
                window.location.href = mailtoUri;
                if (scheduleModal) {
                    scheduleModal.classList.remove('active-modal');
                }
                scheduleForm.reset();
                if (schedStatus) schedStatus.style.display = 'none';
            }, 1200);
        });
    }

    /* ==========================================================================
       10. TESTIMONIALS SLIDER
       ========================================================================== */
    const testimonials = [
        {
            quote: "Prajwal has an exceptional ability to translate Figma designs into pixel-perfect, responsive web interfaces. Collaborating with him was effortless because he truly understands design intent, animation subtlety, and frontend ergonomics.",
            name: "Aditya Salokhe",
            role: "Ex- UI/UX Designer, Zerovaega Technologies Pvt. Ltd.",
            avatar: "assets/avatar-aditya.svg"
        },
        {
            quote: "During our product demonstrations and client discussions, Prajwal consistently bridged the gap between client expectations and technical execution. His prompt delivery and clear technical communication directly helped us secure valuable client relationships.",
            name: "Abhishek Potdar",
            role: "Ex- Jr. Business Developer, Zerovaega Technologies",
            avatar: "assets/avatar-abhishek.svg"
        },
        {
            quote: "A sharp, reliable developer with a deep grasp of backend APIs and full stack architecture. Prajwal approaches complex programming challenges with clean code, strong problem-solving skills, and great teamwork.",
            name: "Rohit Mahadik",
            role: "Software Developer, Smile Automation",
            avatar: "assets/avatar-rohit.svg"
        },
        {
            quote: "Prajwal’s versatility is impressive. Beyond solid code delivery in Laravel and React, he produced comprehensive technical documentation, handled customer support issues with great patience, and ensured our live client demonstrations always ran flawlessly.",
            name: "Om Chavan",
            role: "Jr. Business Developer, Zerovaega Technologies",
            avatar: "assets/avatar-om.svg"
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

    /* ==========================================================================
       13. CONFETTI CELEBRATION GENERATOR (60 FPS Native Canvas)
       ========================================================================== */
    function triggerConfetti() {
        const canvas = document.createElement('canvas');
        canvas.id = 'confetti-canvas';
        canvas.style.position = 'fixed';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.width = '100vw';
        canvas.style.height = '100vh';
        canvas.style.pointerEvents = 'none';
        canvas.style.zIndex = '99999';
        document.body.appendChild(canvas);

        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const colors = ['#2563eb', '#38bdf8', '#10b981', '#f59e0b', '#ec4899', '#8b5cf6'];
        const particles = [];
        const particleCount = 85;

        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: canvas.width / 2 + (Math.random() - 0.5) * 160,
                y: canvas.height / 2 + (Math.random() - 0.5) * 80,
                size: Math.random() * 8 + 4,
                color: colors[Math.floor(Math.random() * colors.length)],
                vx: (Math.random() - 0.5) * 18,
                vy: (Math.random() - 0.8) * 18,
                angle: Math.random() * 360,
                spin: (Math.random() - 0.5) * 12,
                alpha: 1,
                decay: Math.random() * 0.015 + 0.01
            });
        }

        let animationFrame;
        function render() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            let alive = false;

            particles.forEach(p => {
                p.x += p.vx;
                p.y += p.vy;
                p.vy += 0.42; // gravity
                p.vx *= 0.98; // air drag
                p.angle += p.spin;
                p.alpha -= p.decay;

                if (p.alpha > 0) {
                    alive = true;
                    ctx.save();
                    ctx.translate(p.x, p.y);
                    ctx.rotate((p.angle * Math.PI) / 180);
                    ctx.globalAlpha = Math.max(0, p.alpha);
                    ctx.fillStyle = p.color;
                    ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.65);
                    ctx.restore();
                }
            });

            if (alive) {
                animationFrame = requestAnimationFrame(render);
            } else {
                cancelAnimationFrame(animationFrame);
                if (canvas.parentNode) {
                    canvas.parentNode.removeChild(canvas);
                }
            }
        }
        render();
    }

    /* ==========================================================================
       14. DEVELOPER TERMINAL CODE CARD TABS & COPY
       ========================================================================== */
    const codeTabBtns = document.querySelectorAll('.code-tab-btn');
    const codePanels = document.querySelectorAll('.code-panel');
    const codeCopyBtn = document.getElementById('code-copy-btn');

    if (codeTabBtns.length > 0) {
        codeTabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const targetTab = btn.getAttribute('data-tab');
                codeTabBtns.forEach(b => b.classList.remove('active'));
                codePanels.forEach(p => p.classList.remove('active'));

                btn.classList.add('active');
                const targetPanel = document.getElementById(`panel-${targetTab}`);
                if (targetPanel) {
                    targetPanel.classList.add('active');
                }

                // If on workspace image tab, hide copy button
                if (codeCopyBtn) {
                    codeCopyBtn.style.display = targetTab === 'workspace' ? 'none' : 'inline-flex';
                }
            });
        });
    }

    if (codeCopyBtn) {
        codeCopyBtn.addEventListener('click', () => {
            const activePanel = document.querySelector('.code-panel.active pre code');
            if (activePanel) {
                const textToCopy = activePanel.innerText || activePanel.textContent;
                if (navigator.clipboard && navigator.clipboard.writeText) {
                    navigator.clipboard.writeText(textToCopy).then(() => {
                        const copyTextEl = codeCopyBtn.querySelector('.copy-text');
                        if (copyTextEl) copyTextEl.textContent = 'Copied!';
                        setTimeout(() => {
                            if (copyTextEl) copyTextEl.textContent = 'Copy';
                        }, 2000);
                    });
                }
            }
        });
    }

    /* ==========================================================================
       15. ONE-CLICK PRINT CLEAN RESUME
       ========================================================================== */
    const printResumeBtns = document.querySelectorAll('.print-resume-btn');
    printResumeBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            window.print();
        });
    });
});
