// JavaScript extracted from inline <script> block 060 in the 'site-shell' template/context. Related area: site_iframe_router.
const pageIds = [
  "home",
  "speakers",
  "programme",
  "insights",
  "profile-nicholas",
  "profile-yase",
  "profile-gaboilelwe",
  "profile-mmakgotso",
  "profile",
  "profile-kirsten",
  "profile-amina",
  "profile-willson",
  "profile-jacquline",
  "profile-shawn-speaker",
  "profile-alude",
  "profile-dimakatso",
  "session-welcome",
  "session-the-opening-address-why-this-moment-matters",
  "session-understanding-south-africa-s-inequality-the-five-binding-constraints",
  "session-30-years-of-corporate-social-investment-what-have-we-built-and-what-has-changed",
  "session-why-transformation-stalls-power-institutions-and-the-reproduction-of-inequality",
  "session-the-invisible-architecture-of-inequality-trauma-trust-and-human-dignity",
  "session-the-missing-voice-what-communities-have-been-trying-to-tell-us-for-30-years",
  "session-why-does-inequality-persist",
  "session-what-have-we-learned-today",
  "session-youth-employment-and-economic-inclusion",
  "session-community-voice-participation-and-power",
  "session-the-green-economy-and-future-opportunity",
  "session-reimagining-csi-for-systems-change",
  "session-what-should-south-africa-be-talking-about",
  "session-day-1-learning-outcomes",
  "article-kgomotso",
  "article-lidia",
  "article-vince",
  "article-andisiwe",
  "article-venetia",
  "article-aluta",
  "article-carmen",
  "article-shawn",
  "article-kirsten",
  "article-geraldine",
  "article-mogamad",
  "team"
];

const frame = document.getElementById("clientFrame");
let currentPage = "home";

const unifiedHeaderLinks = [
  { label: "Home", href: "index.html", key: "home" },
  { label: "Speakers", href: "featured-speakers.html", key: "speakers" },
  { label: "Team", href: "team.html", key: "team" },
  { label: "Agenda", href: "full-programme.html", key: "programme" },
  { label: "Tickets", href: "index.html#csi-awards-exp-tickets", key: "tickets" },
  { label: "Insights", href: "insights.html", key: "insights" }
];

const brandLogo = "https://www.image2url.com/r2/default/images/1781046234023-115517cd-32e4-4b6f-becc-4dbcba0c864c.png";

const unifiedHeaderCss = `
  html {
    scroll-padding-top: 84px;
  }
  .csi-unified-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10000;
    background:
      linear-gradient(180deg, rgba(255,255,255,.58), rgba(255,255,255,.28)),
      rgba(255,255,255,.22);
    border-bottom: 1px solid rgba(255,255,255,.42);
    box-shadow: 0 16px 38px rgba(0,0,0,.10);
    backdrop-filter: blur(24px) saturate(1.45);
    -webkit-backdrop-filter: blur(24px) saturate(1.45);
    font-family: "Figtree", "DM Sans", Arial, sans-serif;
  }
  .csi-unified-nav {
    width: min(100%, 1440px);
    min-height: 76px;
    margin: 0 auto;
    padding: 12px clamp(18px, 3vw, 44px);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
  }
  .csi-unified-brand {
    display: inline-flex;
    align-items: center;
    flex: 0 0 auto;
  }
  .csi-unified-brand img {
    display: block;
    width: 112px;
    height: auto;
  }
  .csi-unified-links {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: clamp(14px, 2vw, 30px);
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .csi-unified-links a {
    display: inline-flex;
    align-items: center;
    min-height: 44px;
    color: #111;
    text-decoration: none;
    font-size: 13px;
    font-weight: 900;
    letter-spacing: .08em;
    text-transform: uppercase;
    white-space: nowrap;
  }
  .csi-unified-links a[aria-current="page"] {
    color: #526600;
  }
  .csi-unified-menu {
    display: none;
    width: 44px;
    height: 44px;
    border: 1px solid rgba(17,17,17,.16);
    border-radius: 0;
    background: rgba(255,255,255,.46);
    color: #111;
    backdrop-filter: blur(18px) saturate(1.35);
    -webkit-backdrop-filter: blur(18px) saturate(1.35);
    align-items: center;
    justify-content: center;
    font: inherit;
    font-weight: 900;
    cursor: pointer;
  }
  .csi-unified-main-offset {
    padding-top: 0;
  }
  @media (max-width: 820px) {
    html {
      scroll-padding-top: 76px;
    }
    .csi-unified-nav {
      min-height: 68px;
      padding: 10px 18px;
    }
    .csi-unified-brand img {
      width: 96px;
    }
    .csi-unified-menu {
      display: inline-flex;
    }
    .csi-unified-links {
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      display: none;
      flex-direction: column;
      align-items: stretch;
      gap: 0;
      padding: 10px 18px 18px;
      background:
        linear-gradient(180deg, rgba(255,255,255,.68), rgba(255,255,255,.36)),
        rgba(255,255,255,.28);
      border-bottom: 1px solid rgba(255,255,255,.42);
      box-shadow: 0 18px 28px rgba(0,0,0,.10);
      backdrop-filter: blur(24px) saturate(1.45);
      -webkit-backdrop-filter: blur(24px) saturate(1.45);
    }
    .csi-unified-header.is-open .csi-unified-links {
      display: flex;
    }
    .csi-unified-links a {
      width: 100%;
      justify-content: flex-start;
      min-height: 48px;
    }
    .csi-unified-main-offset {
      padding-top: 0;
    }
  }
`;

const unifiedFooterCss = `
  .csi-unified-footer {
    position: relative;
    width: 100vw;
    margin-left: calc(-50vw + 50%);
    overflow: hidden;
    background: #071429;
    color: #fff;
    font-family: "Figtree", "DM Sans", Arial, sans-serif;
  }
  .csi-unified-footer::before {
    content: "INDABA";
    position: absolute;
    left: 50%;
    bottom: -50px;
    transform: translateX(-50%);
    font-size: clamp(100px, 18vw, 280px);
    font-weight: 900;
    line-height: .8;
    letter-spacing: 0;
    color: rgba(143,184,232,.08);
    pointer-events: none;
  }
  .csi-unified-footer-inner {
    position: relative;
    z-index: 1;
    width: min(100%, 1440px);
    margin: 0 auto;
    padding: clamp(56px, 8vw, 88px) clamp(18px, 3vw, 44px) 30px;
  }
  .csi-unified-footer-grid {
    display: grid;
    grid-template-columns: minmax(260px, 1.5fr) minmax(140px, .8fr) minmax(150px, .8fr) minmax(220px, 1fr);
    gap: clamp(28px, 5vw, 64px);
    align-items: start;
    margin-bottom: clamp(44px, 6vw, 76px);
  }
  .csi-unified-footer-brand {
    display: inline-flex;
    align-items: center;
    margin-bottom: 26px;
  }
  .csi-unified-footer-brand img {
    display: block;
    width: clamp(126px, 12vw, 188px);
    height: auto;
  }
  .csi-unified-footer p {
    margin: 0;
    color: rgba(255,255,255,.66);
    font-size: 15px;
    line-height: 1.8;
  }
  .csi-unified-footer h2,
  .csi-unified-footer h3 {
    margin: 0 0 22px;
    color: #8fb8e8;
    font-size: 12px;
    font-weight: 900;
    letter-spacing: .22em;
    line-height: 1.3;
    text-transform: uppercase;
  }
  .csi-unified-footer ul {
    display: flex;
    flex-direction: column;
    gap: 14px;
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .csi-unified-footer li,
  .csi-unified-footer a {
    color: rgba(255,255,255,.74);
    font-size: 15px;
    line-height: 1.5;
    text-decoration: none;
  }
  .csi-unified-footer a:hover {
    color: #fff;
  }
  .csi-unified-footer-cta {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-top: 24px;
    min-height: 44px;
    padding: 0 18px;
    border-radius: 999px;
    background: #8fb8e8;
    color: #111 !important;
    font-weight: 900;
  }
  .csi-unified-footer-bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    flex-wrap: wrap;
    border-top: 1px solid rgba(255,255,255,.12);
    padding-top: 24px;
  }
  .csi-unified-footer-bottom p,
  .csi-unified-footer-bottom a {
    color: rgba(255,255,255,.42);
    font-size: 13px;
  }
  .csi-unified-footer-bottom-links {
    display: flex;
    gap: 22px;
    flex-wrap: wrap;
  }
  @media (max-width: 900px) {
    .csi-unified-footer-grid {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (max-width: 620px) {
    .csi-unified-footer-grid {
      grid-template-columns: 1fr;
    }
    .csi-unified-footer-bottom {
      align-items: flex-start;
      flex-direction: column;
    }
  }
`;

const hrefMap = new Map([
  ["featured-speakers.html", "speakers"],
  ["../featured-speakers.html", "speakers"],
  ["full-programme.html", "programme"],
  ["../full-programme.html", "programme"],
  ["insights.html", "insights"],
  ["../insights.html", "insights"],
  ["team.html", "team"],
  ["../team.html", "team"],
  ["speaker-profiles/nicholas-ngepah.html", "profile-nicholas"],
  ["../speaker-profiles/nicholas-ngepah.html", "profile-nicholas"],
  ["speaker-profiles/yase-godlo.html", "profile-yase"],
  ["../speaker-profiles/yase-godlo.html", "profile-yase"],
  ["speaker-profiles/gaboilelwe-moroka.html", "profile-gaboilelwe"],
  ["../speaker-profiles/gaboilelwe-moroka.html", "profile-gaboilelwe"],
  ["speaker-profiles/mmakgotso-maphoto.html", "profile-mmakgotso"],
  ["../speaker-profiles/mmakgotso-maphoto.html", "profile-mmakgotso"],
  ["speaker-profiles/dr-charlene-omrawo.html", "profile"],
  ["../speaker-profiles/dr-charlene-omrawo.html", "profile"],
  ["speaker-profiles/kirsten-fagyas.html", "profile-kirsten"],
  ["../speaker-profiles/kirsten-fagyas.html", "profile-kirsten"],
  ["speaker-profiles/amina-williams.html", "profile-amina"],
  ["../speaker-profiles/amina-williams.html", "profile-amina"],
  ["speaker-profiles/willson-chivhanga.html", "profile-willson"],
  ["../speaker-profiles/willson-chivhanga.html", "profile-willson"],
  ["speaker-profiles/jacquline-nkadimeng.html", "profile-jacquline"],
  ["../speaker-profiles/jacquline-nkadimeng.html", "profile-jacquline"],
  ["speaker-profiles/shawn-theunissen.html", "profile-shawn-speaker"],
  ["../speaker-profiles/shawn-theunissen.html", "profile-shawn-speaker"],
  ["speaker-profiles/alude-xuba.html", "profile-alude"],
  ["../speaker-profiles/alude-xuba.html", "profile-alude"],
  ["speaker-profiles/dimakatso-khalo.html", "profile-dimakatso"],
  ["../speaker-profiles/dimakatso-khalo.html", "profile-dimakatso"],
  ["session-pages/welcome-to-south-africas-biggest-csi-classroom.html", "session-welcome"],
  ["../session-pages/welcome-to-south-africas-biggest-csi-classroom.html", "session-welcome"],
  ["session-pages/the-opening-address-why-this-moment-matters.html", "session-the-opening-address-why-this-moment-matters"],
  ["../session-pages/the-opening-address-why-this-moment-matters.html", "session-the-opening-address-why-this-moment-matters"],
  ["session-pages/understanding-south-africa-s-inequality-the-five-binding-constraints.html", "session-understanding-south-africa-s-inequality-the-five-binding-constraints"],
  ["../session-pages/understanding-south-africa-s-inequality-the-five-binding-constraints.html", "session-understanding-south-africa-s-inequality-the-five-binding-constraints"],
  ["session-pages/30-years-of-corporate-social-investment-what-have-we-built-and-what-has-changed.html", "session-30-years-of-corporate-social-investment-what-have-we-built-and-what-has-changed"],
  ["../session-pages/30-years-of-corporate-social-investment-what-have-we-built-and-what-has-changed.html", "session-30-years-of-corporate-social-investment-what-have-we-built-and-what-has-changed"],
  ["session-pages/why-transformation-stalls-power-institutions-and-the-reproduction-of-inequality.html", "session-why-transformation-stalls-power-institutions-and-the-reproduction-of-inequality"],
  ["../session-pages/why-transformation-stalls-power-institutions-and-the-reproduction-of-inequality.html", "session-why-transformation-stalls-power-institutions-and-the-reproduction-of-inequality"],
  ["session-pages/the-invisible-architecture-of-inequality-trauma-trust-and-human-dignity.html", "session-the-invisible-architecture-of-inequality-trauma-trust-and-human-dignity"],
  ["../session-pages/the-invisible-architecture-of-inequality-trauma-trust-and-human-dignity.html", "session-the-invisible-architecture-of-inequality-trauma-trust-and-human-dignity"],
  ["session-pages/the-missing-voice-what-communities-have-been-trying-to-tell-us-for-30-years.html", "session-the-missing-voice-what-communities-have-been-trying-to-tell-us-for-30-years"],
  ["../session-pages/the-missing-voice-what-communities-have-been-trying-to-tell-us-for-30-years.html", "session-the-missing-voice-what-communities-have-been-trying-to-tell-us-for-30-years"],
  ["session-pages/why-does-inequality-persist.html", "session-why-does-inequality-persist"],
  ["../session-pages/why-does-inequality-persist.html", "session-why-does-inequality-persist"],
  ["session-pages/what-have-we-learned-today.html", "session-what-have-we-learned-today"],
  ["../session-pages/what-have-we-learned-today.html", "session-what-have-we-learned-today"],
  ["session-pages/youth-employment-and-economic-inclusion.html", "session-youth-employment-and-economic-inclusion"],
  ["../session-pages/youth-employment-and-economic-inclusion.html", "session-youth-employment-and-economic-inclusion"],
  ["session-pages/community-voice-participation-and-power.html", "session-community-voice-participation-and-power"],
  ["../session-pages/community-voice-participation-and-power.html", "session-community-voice-participation-and-power"],
  ["session-pages/the-green-economy-and-future-opportunity.html", "session-the-green-economy-and-future-opportunity"],
  ["../session-pages/the-green-economy-and-future-opportunity.html", "session-the-green-economy-and-future-opportunity"],
  ["session-pages/reimagining-csi-for-systems-change.html", "session-reimagining-csi-for-systems-change"],
  ["../session-pages/reimagining-csi-for-systems-change.html", "session-reimagining-csi-for-systems-change"],
  ["session-pages/what-should-south-africa-be-talking-about.html", "session-what-should-south-africa-be-talking-about"],
  ["../session-pages/what-should-south-africa-be-talking-about.html", "session-what-should-south-africa-be-talking-about"],
  ["session-pages/day-1-learning-outcomes.html", "session-day-1-learning-outcomes"],
  ["../session-pages/day-1-learning-outcomes.html", "session-day-1-learning-outcomes"],
  ["article-pages/kgomotso-khosa-bridging-grassroots-realities.html", "article-kgomotso"],
  ["../article-pages/kgomotso-khosa-bridging-grassroots-realities.html", "article-kgomotso"],
  ["article-pages/lidia-pretorius-rethinking-inclusion-ground-up.html", "article-lidia"],
  ["../article-pages/lidia-pretorius-rethinking-inclusion-ground-up.html", "article-lidia"],
  ["article-pages/vince-mbanze-building-trust-data-systems-thinking.html", "article-vince"],
  ["../article-pages/vince-mbanze-building-trust-data-systems-thinking.html", "article-vince"],
  ["article-pages/andisiwe-jack-ngcwembe-unlocking-sme-potential.html", "article-andisiwe"],
  ["../article-pages/andisiwe-jack-ngcwembe-unlocking-sme-potential.html", "article-andisiwe"],
  ["article-pages/venetia-van-wyk-building-pathways-future-economy.html", "article-venetia"],
  ["../article-pages/venetia-van-wyk-building-pathways-future-economy.html", "article-venetia"],
  ["article-pages/aluta-nomzamo-kutsu-data-driven-inclusion.html", "article-aluta"],
  ["../article-pages/aluta-nomzamo-kutsu-data-driven-inclusion.html", "article-aluta"],
  ["article-pages/carmen-mollmann-financing-just-energy-transition.html", "article-carmen"],
  ["../article-pages/carmen-mollmann-financing-just-energy-transition.html", "article-carmen"],
  ["article-pages/shawn-theunissen-designing-markets-inclusion.html", "article-shawn"],
  ["../article-pages/shawn-theunissen-designing-markets-inclusion.html", "article-shawn"],
  ["article-pages/kirsten-fagyas-building-systems-youth-small-businesses.html", "article-kirsten"],
  ["../article-pages/kirsten-fagyas-building-systems-youth-small-businesses.html", "article-kirsten"],
  ["article-pages/geraldine-fraser-moleketi-article.html", "article-geraldine"],
  ["../article-pages/geraldine-fraser-moleketi-article.html", "article-geraldine"],
  ["article-pages/mogamad-kamedien-article.html", "article-mogamad"],
  ["../article-pages/mogamad-kamedien-article.html", "article-mogamad"],
  ["index.html", "home"],
  ["../index.html", "home"]
]);

function scrollFrameToHash(hash) {
  if (!hash) return;

  setTimeout(() => {
    try {
      const doc = frame.contentDocument || frame.contentWindow.document;
      const target = doc.querySelector(hash);

      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } catch (error) {
      // The iframe may still be committing its srcdoc. Link clicks should never break navigation.
    }
  }, 120);
}

function getUnifiedHeaderKey(page) {
  if (page === "team") return "team";
  if (page === "programme" || page.startsWith("session-")) return "programme";
  if (page === "speakers" || page.startsWith("profile")) return "speakers";
  if (page === "insights" || page.startsWith("article-")) return "insights";
  return "home";
}

function installUnifiedHeader() {
  try {
    const doc = frame.contentDocument || frame.contentWindow.document;

    if (!doc || !doc.body) return;

    doc.querySelectorAll(
      "header:not(#csiUnifiedHeader), header.header, header.csi-clean-nav, header.csi-site-header, header.primary-nav, header.nav, header.site-header"
    ).forEach(header => header.remove());
    doc.querySelectorAll("#mobileOverlay, #mobileDrawer").forEach(drawer => drawer.remove());

    if (!doc.getElementById("csi-unified-header-style")) {
      const style = doc.createElement("style");
      style.id = "csi-unified-header-style";
      style.textContent = unifiedHeaderCss;
      doc.head.appendChild(style);
    }

    const activeKey = getUnifiedHeaderKey(currentPage);
    const links = unifiedHeaderLinks.map(link => {
      const current = link.key === activeKey ? ' aria-current="page"' : "";
      return `<li><a href="${link.href}"${current}>${link.label}</a></li>`;
    }).join("");

    const existingHeader = doc.getElementById("csiUnifiedHeader");
    if (existingHeader) existingHeader.remove();

    const header = doc.createElement("header");
    header.id = "csiUnifiedHeader";
    header.className = "csi-unified-header";
    header.innerHTML = `
      <nav class="csi-unified-nav" aria-label="Primary navigation">
        <a class="csi-unified-brand" href="index.html" aria-label="CSI Indaba home">
          <img src="${brandLogo}" alt="CSI Indaba">
        </a>
        <button class="csi-unified-menu" type="button" aria-expanded="false" aria-label="Toggle navigation">Menu</button>
        <ul class="csi-unified-links">${links}</ul>
      </nav>
    `;

    doc.body.insertBefore(header, doc.body.firstChild);
    doc.body.classList.add("csi-unified-main-offset");

    const toggle = header.querySelector(".csi-unified-menu");
    toggle.addEventListener("click", () => {
      const isOpen = header.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
  } catch (error) {
    // The iframe document can briefly be unavailable during srcdoc swaps.
  }
}

function installUnifiedFooter() {
  try {
    const doc = frame.contentDocument || frame.contentWindow.document;

    if (!doc || !doc.body) return;

    doc.querySelectorAll("footer:not(#csiUnifiedFooter)").forEach(footer => footer.remove());

    if (!doc.getElementById("csi-unified-footer-style")) {
      const style = doc.createElement("style");
      style.id = "csi-unified-footer-style";
      style.textContent = unifiedFooterCss;
      doc.head.appendChild(style);
    }

    const existingFooter = doc.getElementById("csiUnifiedFooter");
    if (existingFooter) existingFooter.remove();

    const footer = doc.createElement("footer");
    footer.id = "csiUnifiedFooter";
    footer.className = "csi-unified-footer";
    footer.innerHTML = `
      <div class="csi-unified-footer-inner">
        <div class="csi-unified-footer-grid">
          <section aria-labelledby="csiFooterAbout">
            <a class="csi-unified-footer-brand" href="index.html" aria-label="CSI Indaba home">
              <img src="${brandLogo}" alt="CSI Indaba">
            </a>
            <h2 id="csiFooterAbout">CSI Indaba 2026</h2>
            <p>South Africa's biggest CSI classroom: a three-day gathering for corporate social investment leaders, changemakers, policymakers and community builders.</p>
          </section>
          <section aria-labelledby="csiFooterExplore">
            <h3 id="csiFooterExplore">Explore</h3>
            <ul>
              <li><a href="index.html">Home</a></li>
              <li><a href="featured-speakers.html">Speakers</a></li>
              <li><a href="team.html">Team</a></li>
              <li><a href="insights.html">Insights</a></li>
            </ul>
          </section>
          <section aria-labelledby="csiFooterEvent">
            <h3 id="csiFooterEvent">Event</h3>
            <ul>
              <li>14 - 16 July 2026</li>
              <li>Johannesburg, South Africa</li>
              <li><a href="full-programme.html">Full Programme</a></li>
              <li><a href="index.html#csi-awards-exp-tickets">Tickets</a></li>
            </ul>
          </section>
          <section id="csi-indaba-contact" aria-labelledby="csiFooterConnect">
            <h3 id="csiFooterConnect">Connect</h3>
            <p>For delegate access, speaker updates and delegate participation, use the registration route on this site.</p>
            <a class="csi-unified-footer-cta" href="https://form.jotform.com/252986272146566" target="_blank" rel="noopener">Register Now -></a>
          </section>
        </div>
        <div class="csi-unified-footer-bottom">
          <p>&copy; 2026 CSI Indaba. All rights reserved.</p>
          <div class="csi-unified-footer-bottom-links">
            <a href="index.html">Home</a>
            <a href="featured-speakers.html">Speakers</a>
            <a href="full-programme.html">Programme</a>
          </div>
        </div>
      </div>
    `;

    doc.body.appendChild(footer);
  } catch (error) {
    // The iframe document can briefly be unavailable during srcdoc swaps.
  }
}

function setShellHash(page, hash) {
  const baseUrl = location.pathname + location.search;

  if (page === "home") {
    history.replaceState(null, "", hash ? baseUrl + hash : baseUrl);
    return;
  }

  history.replaceState(null, "", baseUrl + "#" + page + (hash || ""));
}

function loadPage(page, hash = "") {
  const template = document.getElementById("tpl-" + page);
  if (!template) return;

  currentPage = page;
  frame.srcdoc = template.innerHTML;
  setShellHash(page, hash);
  bindFrameNavigation();
  scrollFrameToHash(hash);
}

function routeHref(href) {
  const clean = href.split("#")[0];
  const hash = href.includes("#") ? "#" + href.split("#").slice(1).join("#") : "";

  if (!clean && hash) {
    return { page: "home", hash };
  }

  if (!clean) {
    return null;
  }

  for (const [path, page] of hrefMap.entries()) {
    if (clean === path || clean.endsWith("/" + path)) {
      return { page, hash };
    }
  }

  return null;
}

function bindFrameNavigation() {
  setTimeout(() => {
    try {
      const doc = frame.contentDocument || frame.contentWindow.document;

      if (!doc || doc.__csiShellNavBound) return;

      installUnifiedHeader();
      installUnifiedFooter();
      doc.__csiShellNavBound = true;
      doc.addEventListener("click", event => {
        const link = event.target.closest && event.target.closest("a[href]");
        if (!link) return;

        const href = link.getAttribute("href") || "";
        const route = routeHref(href);

        if (!route) {
          if (href === "#") event.preventDefault();
          return;
        }

        event.preventDefault();
        event.stopImmediatePropagation();
        loadPage(route.page, route.hash);
      }, true);
    } catch (error) {
      // Some browsers briefly hide the srcdoc document while it loads; the next bind handles it.
    }
  }, 0);

  setTimeout(() => {
    try {
      const doc = frame.contentDocument || frame.contentWindow.document;
      if (doc && !doc.__csiShellNavBound) bindFrameNavigation();
    } catch (error) {}
  }, 250);
}

frame.addEventListener("load", () => {
  installUnifiedHeader();
  installUnifiedFooter();
  bindFrameNavigation();

  if (currentPage !== "home") return;

  const rawHash = location.hash.replace(/^#/, "");
  if (rawHash && !pageIds.includes(rawHash.split("#")[0])) {
    scrollFrameToHash("#" + rawHash);
  }
});

function getInitialRoute() {
  const rawHash = location.hash.replace(/^#/, "");

  if (!rawHash) {
    return { page: "home", hash: "" };
  }

  const [candidatePage, ...hashParts] = rawHash.split("#");

  if (pageIds.includes(candidatePage)) {
    return {
      page: candidatePage,
      hash: hashParts.length ? "#" + hashParts.join("#") : ""
    };
  }

  return { page: "home", hash: "#" + rawHash };
}

window.addEventListener("message", event => {
  if (!event.data || event.data.type !== "csi-client-page") return;

  loadPage(event.data.page || "home", event.data.hash || "");
});

const initialRoute = getInitialRoute();
loadPage(initialRoute.page, initialRoute.hash);
