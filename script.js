// Tailwind configuration
tailwind.config = { darkMode: "class", theme: { extend: { colors: { "secondary-container": "#fed255", "surface-tint": "#4d5f7d", "on-secondary-container": "#735a00", "on-secondary": "#ffffff", "tertiary-fixed": "#f1e2b0", "primary-container": "#0b1f3a", "on-tertiary": "#ffffff", "inverse-primary": "#b5c7ea", "surface-container": "#e5eeff", "on-tertiary-fixed-variant": "#504622", "on-error": "#ffffff", "on-surface": "#0b1c30", "surface-bright": "#f8f9ff", "on-primary-fixed": "#071c36", "error": "#ba1a1a", "on-secondary-fixed": "#241a00", "secondary-fixed": "#ffe08e", "on-secondary-fixed-variant": "#584400", "surface-container-high": "#dce9ff", "primary": "#000615", "primary-fixed-dim": "#b5c7ea", "on-primary-container": "#7587a7", "on-tertiary-container": "#483f1b", "secondary-fixed-dim": "#ecc246", "secondary": "#755b00", "outline": "#75777e", "on-surface-variant": "#44474d", "error-container": "#ffdad6", "surface-container-lowest": "#ffffff", "primary-fixed": "#d6e3ff", "on-tertiary-fixed": "#221b00", "on-background": "#0b1c30", "inverse-on-surface": "#eaf1ff", "tertiary-fixed-dim": "#d4c696", "surface-container-highest": "#d3e4fe", "background": "#f8f9ff", "tertiary-container": "#b8aa7d", "tertiary": "#695e37", "outline-variant": "#c4c6ce", "surface-dim": "#cbdbf5", "surface": "#f8f9ff", "surface-container-low": "#eff4ff", "surface-variant": "#d3e4fe", "inverse-surface": "#213145", "on-error-container": "#93000a", "on-primary-fixed-variant": "#364764", "on-primary": "#ffffff" }, borderRadius: { "DEFAULT": "0.125rem", "lg": "0.25rem", "xl": "0.5rem", "full": "0.75rem" }, spacing: { "gutter-mobile": "1rem", "space-xl": "2rem", "margin-mobile": "1rem", "space-lg": "1.5rem", "space-2xl": "3rem", "space-xs": "0.5rem", "margin-tablet": "2rem", "margin-desktop": "3rem", "space-2xs": "0.25rem", "gutter-tablet": "1.5rem", "space-md": "1rem", "space-sm": "0.75rem", "space-3xl": "4rem", "gutter-desktop": "2rem" }, fontFamily: { "headline-md": ["Plus Jakarta Sans"], "title-lg": ["Plus Jakarta Sans"], "body-sm": ["Plus Jakarta Sans"], "display-lg-mobile": ["Plus Jakarta Sans"], "body-lg": ["Plus Jakarta Sans"], "headline-sm": ["Plus Jakarta Sans"], "label-md": ["Plus Jakarta Sans"], "label-sm": ["Plus Jakarta Sans"], "body-md": ["Plus Jakarta Sans"], "headline-lg-mobile": ["Plus Jakarta Sans"], "headline-lg": ["Plus Jakarta Sans"], "title-md": ["Plus Jakarta Sans"], "display-lg": ["Plus Jakarta Sans"] }, fontSize: { "headline-md": ["24px", { lineHeight: "32px", letterSpacing: "-0.015em", fontWeight: "600" }], "title-lg": ["18px", { lineHeight: "26px", letterSpacing: "-0.005em", fontWeight: "600" }], "body-sm": ["12px", { lineHeight: "18px", letterSpacing: "0.01em", fontWeight: "400" }], "display-lg-mobile": ["36px", { lineHeight: "44px", letterSpacing: "-0.02em", fontWeight: "700" }], "body-lg": ["16px", { lineHeight: "26px", letterSpacing: "0em", fontWeight: "400" }], "headline-sm": ["20px", { lineHeight: "28px", letterSpacing: "-0.01em", fontWeight: "600" }], "label-md": ["12px", { lineHeight: "16px", letterSpacing: "0.04em", fontWeight: "600" }], "label-sm": ["10px", { lineHeight: "14px", letterSpacing: "0.06em", fontWeight: "700" }], "body-md": ["14px", { lineHeight: "22px", letterSpacing: "0em", fontWeight: "400" }], "headline-lg-mobile": ["26px", { lineHeight: "34px", letterSpacing: "-0.015em", fontWeight: "700" }], "headline-lg": ["32px", { lineHeight: "40px", letterSpacing: "-0.02em", fontWeight: "700" }], "title-md": ["16px", { lineHeight: "24px", letterSpacing: "0em", fontWeight: "600" }], "display-lg": ["48px", { lineHeight: "56px", letterSpacing: "-0.025em", fontWeight: "700" }] } } } };

// Page interactions
if (document.currentScript?.hasAttribute("data-page-interactions")) {
// Team Carousel Controller
        let currentTeamIndex = 0;
        const teamCards = document.querySelectorAll(".team-card");
        const teamTrack = document.getElementById("teamCarouselTrack");
        const teamDots = document.querySelectorAll(".team-dot");
        const totalTeamCards = teamCards.length;

        function updateTeamCarousel(index) {
          if (!teamTrack || totalTeamCards === 0) return;
          currentTeamIndex = (index + totalTeamCards) % totalTeamCards;
          
          const isMobile = window.innerWidth < 768;
          const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
          
          if (isMobile) {
            const cardWidth = teamCards[0].offsetWidth;
            const gap = 24;
            teamTrack.style.transform = `translateX(-${currentTeamIndex * (cardWidth + gap)}px)`;
          } else if (isTablet) {
            const cardWidth = teamCards[0].offsetWidth;
            const gap = 24;
            const maxOffset = Math.max(0, totalTeamCards - 2);
            const targetOffset = Math.min(currentTeamIndex, maxOffset);
            teamTrack.style.transform = `translateX(-${targetOffset * (cardWidth + gap)}px)`;
          } else {
            teamTrack.style.transform = "translateX(0px)";
          }

          // Highlight the front/active card
          teamCards.forEach((card, idx) => {
            if (idx === currentTeamIndex) {
              card.classList.add("ring-2", "ring-[#b89130]/30", "border-[#b89130]/60", "shadow-[0_12px_36px_rgba(11,28,48,0.12)]", "scale-[1.01]");
              card.classList.remove("border-slate-100", "shadow-[0_4px_20px_rgba(11,28,48,0.04)]", "scale-100");
            } else {
              card.classList.remove("ring-2", "ring-[#b89130]/30", "border-[#b89130]/60", "shadow-[0_12px_36px_rgba(11,28,48,0.12)]", "scale-[1.01]");
              card.classList.add("border-slate-100", "shadow-[0_4px_20px_rgba(11,28,48,0.04)]", "scale-100");
            }
          });

          // Update dots
          teamDots.forEach((dot, idx) => {
            if (idx === currentTeamIndex) {
              dot.className = "team-dot w-6 h-2.5 rounded-full bg-[#b89130] transition-all duration-300";
            } else {
              dot.className = "team-dot w-2.5 h-2.5 rounded-full bg-slate-300 hover:bg-slate-400 transition-all duration-300";
            }
          });
        }

        const prevBtn = document.getElementById("teamPrevBtn");
        const nextBtn = document.getElementById("teamNextBtn");

        if (prevBtn) {
          prevBtn.addEventListener("click", () => updateTeamCarousel(currentTeamIndex - 1));
        }
        if (nextBtn) {
          nextBtn.addEventListener("click", () => updateTeamCarousel(currentTeamIndex + 1));
        }

        teamDots.forEach((dot, idx) => {
          dot.addEventListener("click", () => updateTeamCarousel(idx));
        });

        teamCards.forEach((card, idx) => {
          card.addEventListener("click", () => updateTeamCarousel(idx));
        });

        // Touch Swipe Handling for Team Carousel
        let touchStartX = 0;
        let touchEndX = 0;
        const viewport = document.getElementById("teamCarouselViewport");
        if (viewport) {
          viewport.addEventListener("touchstart", (e) => {
            touchStartX = e.changedTouches[0].screenX;
          }, { passive: true });
          viewport.addEventListener("touchend", (e) => {
            touchEndX = e.changedTouches[0].screenX;
            if (touchStartX - touchEndX > 45) {
              updateTeamCarousel(currentTeamIndex + 1);
            } else if (touchEndX - touchStartX > 45) {
              updateTeamCarousel(currentTeamIndex - 1);
            }
          }, { passive: true });
        }

        window.addEventListener("resize", () => updateTeamCarousel(currentTeamIndex));
        updateTeamCarousel(0);

        // Testimonial Data
        const testimonials = [
          {
            quote: "Rapid Services Hub transformed our financial compliance during our Series A round. Their tax planning saved us months of rework.",
            author: "Vikramaditya Sen",
            role: "CEO, NexaPay Fintech"
          },
          {
            quote: "Unrivaled expertise in GST and corporate restructuring. They are not just accountants, they are trusted board-level advisors.",
            author: "Sunita Deshmukh",
            role: "Director, AURA Engineering"
          },
          {
            quote: "Transparent, proactive, and exceptionally prompt. Every compliance deadline has been met flawlessly for five consecutive years.",
            author: "Arvind Singhania",
            role: "Managing Director, Crestline Logistics"
          }
        ];

        let currentTestimonial = 0;

        function renderTestimonial() {
          const q = document.getElementById("testimonialQuote");
          const a = document.getElementById("testimonialAuthor");
          const r = document.getElementById("testimonialRole");
          const dots = document.querySelectorAll(".test-dot");

          if (q && a && r) {
            q.classList.add("opacity-0");
            setTimeout(() => {
              q.innerText = testimonials[currentTestimonial].quote;
              a.innerText = testimonials[currentTestimonial].author;
              r.innerText = testimonials[currentTestimonial].role;
              q.classList.remove("opacity-0");
            }, 150);
          }

          dots.forEach((dot, idx) => {
            if (idx === currentTestimonial) {
              dot.className = "test-dot w-3 h-3 rounded-full bg-secondary transition-all";
            } else {
              dot.className = "test-dot w-3 h-3 rounded-full bg-surface-container-highest hover:bg-secondary transition-all";
            }
          });
        }

        function nextTestimonial() {
          currentTestimonial = (currentTestimonial + 1) % testimonials.length;
          renderTestimonial();
        }

        function prevTestimonial() {
          currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
          renderTestimonial();
        }

        function setTestimonial(idx) {
          currentTestimonial = idx;
          renderTestimonial();
        }

        // FAQ Accordion
        function toggleFaq(btn) {
          const answer = btn.nextElementSibling;
          const icon = btn.querySelector(".material-symbols-outlined");
          const isOpen = answer.style.maxHeight && answer.style.maxHeight !== "0px";

          // Close all
          document.querySelectorAll(".faq-answer").forEach(el => el.style.maxHeight = "0px");
          document.querySelectorAll("#faq .material-symbols-outlined").forEach(el => {
            el.innerText = "add";
            el.style.transform = "rotate(0deg)";
          });

          if (!isOpen) {
            answer.style.maxHeight = answer.scrollHeight + "px";
            icon.innerText = "remove";
            icon.style.transform = "rotate(180deg)";
          }
        }

        // Client Category Cards Selection
        function selectClientCard(card) {
          document.querySelectorAll(".client-card").forEach(c => {
            c.classList.remove("bg-primary-container", "text-on-primary");
            c.classList.add("bg-surface-container-lowest", "text-on-surface");
            const title = c.querySelector("h3");
            const desc = c.querySelector("p");
            if (title) { title.classList.remove("text-on-primary"); title.classList.add("text-primary"); }
            if (desc) { desc.classList.remove("text-surface-container-highest"); desc.classList.add("text-on-surface-variant"); }
          });

          card.classList.remove("bg-surface-container-lowest", "text-on-surface");
          card.classList.add("bg-primary-container", "text-on-primary");
          const title = card.querySelector("h3");
          const desc = card.querySelector("p");
          if (title) { title.classList.remove("text-primary"); title.classList.add("text-on-primary"); }
          if (desc) { desc.classList.remove("text-on-surface-variant"); desc.classList.add("text-surface-container-highest"); }
        }

        // Form Handling Simulation
        function handleFormSubmit(e) {
          e.preventDefault();
          const btn = document.getElementById("submitBtn");
          const btnText = document.getElementById("btnText");
          const btnIcon = document.getElementById("btnIcon");
          const btnSpinner = document.getElementById("btnSpinner");
          const banner = document.getElementById("formSuccessBanner");

          btn.disabled = true;
          btnText.innerText = "Transmitting Details...";
          btnIcon.classList.add("hidden");
          btnSpinner.classList.remove("hidden");

          setTimeout(() => {
            btn.disabled = false;
            btnText.innerText = "Send Enquiry";
            btnIcon.classList.remove("hidden");
            btnSpinner.classList.add("hidden");

            banner.classList.remove("hidden");
            document.getElementById("advisoryForm").reset();

            setTimeout(() => {
              banner.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 100);
          }, 1200);
        }

        // Expose handlers used by the existing declarative HTML event attributes.
        window.nextTestimonial = nextTestimonial;
        window.prevTestimonial = prevTestimonial;
        window.setTestimonial = setTestimonial;
        window.toggleFaq = toggleFaq;
        window.selectClientCard = selectClientCard;
        window.handleFormSubmit = handleFormSubmit;
}
