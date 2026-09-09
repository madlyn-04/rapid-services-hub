// Tailwind configuration
tailwind.config = { darkMode: "class", theme: { extend: { colors: { "secondary-container": "#fed255", "surface-tint": "#4d5f7d", "on-secondary-container": "#735a00", "on-secondary": "#ffffff", "tertiary-fixed": "#f1e2b0", "primary-container": "#0b1f3a", "on-tertiary": "#ffffff", "inverse-primary": "#b5c7ea", "surface-container": "#e5eeff", "on-tertiary-fixed-variant": "#504622", "on-error": "#ffffff", "on-surface": "#0b1c30", "surface-bright": "#f8f9ff", "on-primary-fixed": "#071c36", "error": "#ba1a1a", "on-secondary-fixed": "#241a00", "secondary-fixed": "#ffe08e", "on-secondary-fixed-variant": "#584400", "surface-container-high": "#dce9ff", "primary": "#000615", "primary-fixed-dim": "#b5c7ea", "on-primary-container": "#7587a7", "on-tertiary-container": "#483f1b", "secondary-fixed-dim": "#ecc246", "secondary": "#755b00", "outline": "#75777e", "on-surface-variant": "#44474d", "error-container": "#ffdad6", "surface-container-lowest": "#ffffff", "primary-fixed": "#d6e3ff", "on-tertiary-fixed": "#221b00", "on-background": "#0b1c30", "inverse-on-surface": "#eaf1ff", "tertiary-fixed-dim": "#d4c696", "surface-container-highest": "#d3e4fe", "background": "#f8f9ff", "tertiary-container": "#b8aa7d", "tertiary": "#695e37", "outline-variant": "#c4c6ce", "surface-dim": "#cbdbf5", "surface": "#f8f9ff", "surface-container-low": "#eff4ff", "surface-variant": "#d3e4fe", "inverse-surface": "#213145", "on-error-container": "#93000a", "on-primary-fixed-variant": "#364764", "on-primary": "#ffffff" }, borderRadius: { "DEFAULT": "0.125rem", "lg": "0.25rem", "xl": "0.5rem", "full": "0.75rem" }, spacing: { "gutter-mobile": "1rem", "space-xl": "2rem", "margin-mobile": "1rem", "space-lg": "1.5rem", "space-2xl": "3rem", "space-xs": "0.5rem", "margin-tablet": "2rem", "margin-desktop": "3rem", "space-2xs": "0.25rem", "gutter-tablet": "1.5rem", "space-md": "1rem", "space-sm": "0.75rem", "space-3xl": "4rem", "gutter-desktop": "2rem" }, fontFamily: { "headline-md": ["Plus Jakarta Sans"], "title-lg": ["Plus Jakarta Sans"], "body-sm": ["Plus Jakarta Sans"], "display-lg-mobile": ["Plus Jakarta Sans"], "body-lg": ["Plus Jakarta Sans"], "headline-sm": ["Plus Jakarta Sans"], "label-md": ["Plus Jakarta Sans"], "label-sm": ["Plus Jakarta Sans"], "body-md": ["Plus Jakarta Sans"], "headline-lg-mobile": ["Plus Jakarta Sans"], "headline-lg": ["Plus Jakarta Sans"], "title-md": ["Plus Jakarta Sans"], "display-lg": ["Plus Jakarta Sans"] }, fontSize: { "headline-md": ["24px", { lineHeight: "32px", letterSpacing: "-0.015em", fontWeight: "600" }], "title-lg": ["18px", { lineHeight: "26px", letterSpacing: "-0.005em", fontWeight: "600" }], "body-sm": ["12px", { lineHeight: "18px", letterSpacing: "0.01em", fontWeight: "400" }], "display-lg-mobile": ["36px", { lineHeight: "44px", letterSpacing: "-0.02em", fontWeight: "700" }], "body-lg": ["16px", { lineHeight: "26px", letterSpacing: "0em", fontWeight: "400" }], "headline-sm": ["20px", { lineHeight: "28px", letterSpacing: "-0.01em", fontWeight: "600" }], "label-md": ["12px", { lineHeight: "16px", letterSpacing: "0.04em", fontWeight: "600" }], "label-sm": ["10px", { lineHeight: "14px", letterSpacing: "0.06em", fontWeight: "700" }], "body-md": ["14px", { lineHeight: "22px", letterSpacing: "0em", fontWeight: "400" }], "headline-lg-mobile": ["26px", { lineHeight: "34px", letterSpacing: "-0.015em", fontWeight: "700" }], "headline-lg": ["32px", { lineHeight: "40px", letterSpacing: "-0.02em", fontWeight: "700" }], "title-md": ["16px", { lineHeight: "24px", letterSpacing: "0em", fontWeight: "600" }], "display-lg": ["48px", { lineHeight: "56px", letterSpacing: "-0.025em", fontWeight: "700" }] } } } };

// Page interactions
if (document.currentScript?.hasAttribute("data-page-interactions")) {
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

  // Client Category Cards (handled seamlessly via CSS hover states)
  function selectClientCard(card) {}

  // Form Handling
  function handleFormSubmit(e) {
    const btn = document.getElementById("submitBtn");
    const btnText = document.getElementById("btnText");
    const btnIcon = document.getElementById("btnIcon");
    const btnSpinner = document.getElementById("btnSpinner");
    const banner = document.getElementById("formSuccessBanner");

    const fullName = document.getElementById("fullName") ? document.getElementById("fullName").value.trim() : "";
    const emailAddress = document.getElementById("emailAddress") ? document.getElementById("emailAddress").value.trim() : "";
    const phoneNumber = document.getElementById("phoneNumber") ? document.getElementById("phoneNumber").value.trim() : "";
    const serviceType = document.getElementById("serviceType") ? document.getElementById("serviceType").value.trim() : "Advisory Enquiry";
    const userQuery = document.getElementById("userQuery") ? document.getElementById("userQuery").value.trim() : "";

    const formattedMessage = `sent by -- ${emailAddress}\nquery -- ${userQuery}\n${fullName}\n${phoneNumber}`;

    // Populate hidden inputs for FormSubmit direct delivery
    if (document.getElementById("hiddenSubject")) document.getElementById("hiddenSubject").value = serviceType;
    if (document.getElementById("hiddenReplyTo")) document.getElementById("hiddenReplyTo").value = emailAddress;
    if (document.getElementById("hiddenSentBy")) document.getElementById("hiddenSentBy").value = emailAddress;
    if (document.getElementById("hiddenSubjectField")) document.getElementById("hiddenSubjectField").value = serviceType;
    if (document.getElementById("hiddenQuery")) document.getElementById("hiddenQuery").value = userQuery;
    if (document.getElementById("hiddenFullName")) document.getElementById("hiddenFullName").value = fullName;
    if (document.getElementById("hiddenPhoneNumber")) document.getElementById("hiddenPhoneNumber").value = phoneNumber;
    if (document.getElementById("hiddenMessage")) document.getElementById("hiddenMessage").value = formattedMessage;

    btn.disabled = true;
    btnText.innerText = "Transmitting Details...";
    btnIcon.classList.add("hidden");
    btnSpinner.classList.remove("hidden");

    // The native form post continues into hidden_iframe without CORS or page redirect
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
  window.toggleFaq = toggleFaq;
  window.selectClientCard = selectClientCard;
  window.handleFormSubmit = handleFormSubmit;
}
