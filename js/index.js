     const header = document.getElementById("siteHeader");
        const backToTop = document.getElementById("backToTop");

        function handleScroll() {
            const scrolled = window.scrollY > 40;
            header.classList.toggle("scrolled", scrolled);
            backToTop.classList.toggle("visible", window.scrollY > 400);
        }

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();

 
        document.querySelectorAll("#mainNav .nav-link").forEach(link => {
            link.addEventListener("click", () => {
                const nav = document.getElementById("mainNav");
                if (nav.classList.contains("show")) {
                    bootstrap.Collapse.getOrCreateInstance(nav).hide();
                }
            });
        });

        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.12
        });

        document.querySelectorAll(".reveal").forEach(element => {
            revealObserver.observe(element);
        });

        const sections = document.querySelectorAll("main section[id]");
        const navLinks = document.querySelectorAll("#mainNav .nav-link");

        const sectionObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    navLinks.forEach(link => {
                        const isActive = link.getAttribute("href") === "#" + entry.target.id;
                        link.classList.toggle("active", isActive);
                    });
                }
            });
        }, {
            rootMargin: "-25% 0px -60% 0px"
        });

        sections.forEach(section => sectionObserver.observe(section));
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");
  const formStatus = document.getElementById("formStatus");

  if (!contactForm) return;

  const whatsappNumber = "966552209333";

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!contactForm.checkValidity()) {
      contactForm.reportValidity();
      return;
    }

    const customerName = document.getElementById("customerName").value.trim();
    const customerPhone = document.getElementById("customerPhone").value.trim();
    const projectType = document.getElementById("projectType").value;
    const productType = document.getElementById("productType").value;
    const projectDetails = document.getElementById("projectDetails").value.trim();

    const message = `
السلام عليكم، أرغب في طلب عرض سعر من أساس دور للأبواب.

الاسم: ${customerName}
رقم التواصل: ${customerPhone}
نوع المشروع: ${projectType}
المنتج المطلوب: ${productType}
تفاصيل الطلب: ${projectDetails || "لا توجد تفاصيل إضافية"}

برجاء التواصل معي لمناقشة الطلب. شكرًا لكم.
    `.trim();

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    if (formStatus) {
      formStatus.textContent = "جاري فتح واتساب لإرسال طلبك...";
      formStatus.style.color = "#442916";
    }

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
    contactForm.reset();
  });
    const currentYear = document.getElementById("currentYear");

  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }
      const galleryElement = document.querySelector(".asas-gallery-swiper");
    const lightbox = document.getElementById("asasLightbox");

    if (!galleryElement || !lightbox || typeof Swiper === "undefined") return;

    const slides = Array.from(
        galleryElement.querySelectorAll(".asas-gallery-card")
    );

    const images = slides.map(function (card) {
        const img = card.querySelector("img");
        const title = card.querySelector(".asas-card-caption strong");

        return {
            src: img.getAttribute("src"),
            alt: img.getAttribute("alt") || "",
            title: title ? title.textContent.trim() : img.alt
        };
    });

    const currentElement = document.querySelector(".asas-gallery-current");
    const totalElement = document.querySelector(".asas-gallery-total");
    const progressFill = document.querySelector(".asas-gallery-progress-fill");
    const playButton = document.querySelector(".asas-gallery-play");

    const lightboxImage = lightbox.querySelector(".asas-lightbox-image");
    const lightboxCaption = lightbox.querySelector(".asas-lightbox-caption");
    const lightboxCount = lightbox.querySelector(".asas-lightbox-count");
    const lightboxClose = lightbox.querySelector(".asas-lightbox-close");
    const lightboxPrev = lightbox.querySelector(".asas-lightbox-prev");
    const lightboxNext = lightbox.querySelector(".asas-lightbox-next");

    if (totalElement) {
        totalElement.textContent = String(images.length).padStart(2, "0");
    }

    const gallerySwiper = new Swiper(galleryElement, {
        effect: "coverflow",
        loop: images.length > 3,
        centeredSlides: true,
        slidesPerView: 1.25,
        spaceBetween: 100,
        speed: 1000,
        grabCursor: true,
        watchSlidesProgress: true,
        preventInteractionOnTransition: false,

        coverflowEffect: {
            rotate: 12,
            stretch: 0,
            depth: 180,
            modifier: 1.15,
            slideShadows: true
        },

        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            waitForTransition: true
        },

        navigation: {
            nextEl: ".asas-gallery-next",
            prevEl: ".asas-gallery-prev"
        },

        breakpoints: {
            0: {
                slidesPerView: 1.2,
                spaceBetween: 8,
                coverflowEffect: {
                    rotate: 8,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true
                }
            },
            576: {
                slidesPerView: 1.7,
                spaceBetween: 12,
                coverflowEffect: {
                    rotate: 12,
                    stretch: 0,
                    depth: 140,
                    modifier: 1.1,
                    slideShadows: true
                }
            },
            768: {
                slidesPerView: 2.2,
                spaceBetween: 15,
                coverflowEffect: {
                    rotate: 14,
                    stretch: 0,
                    depth: 170,
                    modifier: 1.1,
                    slideShadows: true
                }
            },
            1100: {
                slidesPerView: 2.7,
                spaceBetween: 20,
                coverflowEffect: {
                    rotate: 16,
                    stretch: 0,
                    depth: 210,
                    modifier: 1.15,
                    slideShadows: true
                }
            }
        },

        on: {
            init: function (swiper) {
                updateGalleryInfo(swiper);
            },
            slideChange: function (swiper) {
                updateGalleryInfo(swiper);
            }
        }
    });

    function getRealIndex(swiper) {
        return ((swiper.realIndex % images.length) + images.length) % images.length;
    }

    function updateGalleryInfo(swiper) {
        const index = getRealIndex(swiper);

        if (currentElement) {
            currentElement.textContent = String(index + 1).padStart(2, "0");
        }

        if (progressFill) {
            progressFill.style.width = ((index + 1) / images.length * 100) + "%";
        }
    }

    let autoplayPausedByUser = false;

    if (playButton) {
        playButton.addEventListener("click", function () {
            if (gallerySwiper.autoplay.running) {
                gallerySwiper.autoplay.stop();
                autoplayPausedByUser = true;
                playButton.innerHTML = '<i class="fas fa-play"></i>';
                playButton.setAttribute("aria-label", "تشغيل الحركة التلقائية");
                playButton.setAttribute("aria-pressed", "true");
            } else {
                gallerySwiper.autoplay.start();
                autoplayPausedByUser = false;
                playButton.innerHTML = '<i class="fas fa-pause"></i>';
                playButton.setAttribute("aria-label", "إيقاف التشغيل التلقائي");
                playButton.setAttribute("aria-pressed", "false");
            }
        });
    }

    let activeImageIndex = 0;
    let previousFocus = null;
    let changingImage = false;
    let imageChangeTimer = null;

    function renderLightboxImage(index) {
        activeImageIndex = (index + images.length) % images.length;
        const item = images[activeImageIndex];

        changingImage = true;
        lightboxImage.classList.add("is-changing");

        if (imageChangeTimer) {
            clearTimeout(imageChangeTimer);
        }

        imageChangeTimer = setTimeout(function () {
            lightboxImage.src = item.src;
            lightboxImage.alt = item.alt;
            lightboxCaption.textContent = item.title;
            lightboxCount.textContent =
                String(activeImageIndex + 1).padStart(2, "0") +
                " / " +
                String(images.length).padStart(2, "0");

            const revealImage = function () {
                requestAnimationFrame(function () {
                    lightboxImage.classList.remove("is-changing");
                    changingImage = false;
                });
            };

            if (lightboxImage.complete && lightboxImage.naturalWidth > 0) {
                revealImage();
            } else {
                lightboxImage.onload = revealImage;
                lightboxImage.onerror = revealImage;
            }
        }, 180);
    }

    function openLightbox(index) {
        previousFocus = document.activeElement;

        renderLightboxImage(index);

        lightbox.classList.add("is-open");
        lightbox.setAttribute("aria-hidden", "false");
        document.body.classList.add("asas-lightbox-active");

        if (gallerySwiper.autoplay.running) {
            gallerySwiper.autoplay.stop();
        }

        lightboxClose.focus();
    }

    function closeLightbox() {
        if (!lightbox.classList.contains("is-open")) return;

        lightbox.classList.remove("is-open");
        lightbox.setAttribute("aria-hidden", "true");
        document.body.classList.remove("asas-lightbox-active");

        lightboxImage.onload = null;
        lightboxImage.onerror = null;

        if (imageChangeTimer) {
            clearTimeout(imageChangeTimer);
        }

        if (!autoplayPausedByUser) {
            gallerySwiper.autoplay.start();
        }

        if (previousFocus && typeof previousFocus.focus === "function") {
            previousFocus.focus();
        }
    }

    function nextLightboxImage() {
        renderLightboxImage(activeImageIndex + 1);
    }

    function previousLightboxImage() {
        renderLightboxImage(activeImageIndex - 1);
    }

    slides.forEach(function (card, index) {
        card.addEventListener("click", function () {
            openLightbox(index);
        });
    });

    lightboxClose.addEventListener("click", closeLightbox);
    lightboxNext.addEventListener("click", nextLightboxImage);
    lightboxPrev.addEventListener("click", previousLightboxImage);

    lightbox.addEventListener("click", function (event) {
        if (event.target === lightbox) {
            closeLightbox();
        }
    });

    document.addEventListener("keydown", function (event) {
        if (!lightbox.classList.contains("is-open")) return;

        if (event.key === "Escape") {
            closeLightbox();
        }

        if (event.key === "ArrowRight") {
            previousLightboxImage();
        }

        if (event.key === "ArrowLeft") {
            nextLightboxImage();
        }

        if (event.key === "Tab") {
            event.preventDefault();
            lightboxClose.focus();
        }
    });

    let touchStartX = 0;
    let touchStartY = 0;

    lightbox.addEventListener("touchstart", function (event) {
        touchStartX = event.changedTouches[0].clientX;
        touchStartY = event.changedTouches[0].clientY;
    }, { passive: true });

    lightbox.addEventListener("touchend", function (event) {
        const deltaX = event.changedTouches[0].clientX - touchStartX;
        const deltaY = event.changedTouches[0].clientY - touchStartY;

        if (Math.abs(deltaX) < 50 || Math.abs(deltaX) < Math.abs(deltaY)) return;

        if (deltaX > 0) {
            nextLightboxImage();
        } else {
            previousLightboxImage();
        }
    }, { passive: true });
});
