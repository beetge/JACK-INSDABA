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
