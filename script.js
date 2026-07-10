/* Depth Vector — marketing site script (no dependencies) */

/* ------------------------------------------------------------
   1. Asset auto-swap
   Every element with [data-asset] shows a styled placeholder
   until the file exists at that path. Drop the real file into
   assets/ with the expected name and it swaps in on next load.
   ------------------------------------------------------------ */
document.querySelectorAll("[data-asset]").forEach((el) => {
  const src = el.dataset.asset;
  const probe = new Image();
  probe.onload = () => {
    el.classList.add("asset-loaded");
    if (el.hasAttribute("data-bg")) {
      el.style.backgroundImage = `url("${src}")`;
    } else {
      const img = document.createElement("img");
      img.src = src;
      img.alt = el.dataset.alt || "";
      img.loading = "lazy";
      el.appendChild(img);
    }
  };
  probe.src = src;
});

/* ------------------------------------------------------------
   2. YouTube embed
   TODO: replace VIDEO_ID_HERE with the real YouTube video ID.
   The styled "coming soon" placeholder renders until then.
   ------------------------------------------------------------ */
const VIDEO_ID = "VIDEO_ID_HERE";
if (VIDEO_ID && VIDEO_ID !== "VIDEO_ID_HERE") {
  const frame = document.getElementById("video-frame");
  frame.innerHTML = `<iframe
    src="https://www.youtube-nocookie.com/embed/${VIDEO_ID}"
    title="Depth Vector app walkthrough"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe>`;
}

/* ------------------------------------------------------------
   3. Scroll reveal
   ------------------------------------------------------------ */
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
);
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

/* ------------------------------------------------------------
   4. "Get notified" form
   TODO: wire to a real endpoint (Cloudflare Worker or a form
   service). Replace the body of the submit handler with a
   fetch() POST to your endpoint, then show the thank-you state
   on success. For now it only shows the thank-you state.
   ------------------------------------------------------------ */
const form = document.getElementById("notify-form");
const thanks = document.getElementById("notify-thanks");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = form.email.value.trim();
    if (!email || !form.email.checkValidity()) {
      form.email.focus();
      return;
    }
    // TODO: fetch("https://YOUR-FORM-ENDPOINT", { method: "POST", body: ... })
    form.hidden = true;
    thanks.hidden = false;
  });
}
