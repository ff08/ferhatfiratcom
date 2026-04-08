export type Lang = "tr" | "en";

export const ui = {
  tr: {
    nav: {
      email: "info@ferhatfirat.com",
      langTr: "TR",
      langEn: "EN",
    },
    hero: {
      title: "Ben Ferhat FIRAT",
      subtitle: "Lead Web Designer • No-Code & Low-Code Expert • Brand Growth & Digital Innovation",
      viewPortfolio: "Portfolyoyu görüntüle",
      availableNow: "Şu an müsait",
      consultations: "Danışmanlık veriyorum",
    },
    sections: {
      about: "Hakkımda",
      follow: "Beni takip edin",
      resume: "Özgeçmişim",
      services: "Verdiğim Hizmetler",
      references: "Referanslar",
      projects: "Son projeler",
      skills: "Yeteneklerim",
      news: "Haberler & yazılar",
      location: "Konumum",
    },
    actions: {
      readMore: "Devamını oku",
      browseAll: "Tümünü gör",
      showMore: "Devamını göster",
      hide: "Gizle",
      openSite: "Siteye git",
      copyLink: "Linki kopyala",
    },
    followersLabel: "+1500 takipçi",
    locationLabel: "Ankara, Türkiye",
  },
  en: {
    nav: {
      email: "info@ferhatfirat.com",
      langTr: "TR",
      langEn: "EN",
    },
    hero: {
      title: "I’m Ferhat FIRAT",
      subtitle: "Lead Web Designer • No-Code & Low-Code Expert • Brand Growth & Digital Innovation",
      viewPortfolio: "View portfolio",
      availableNow: "Available now",
      consultations: "Offers consultations",
    },
    sections: {
      about: "About me",
      follow: "Follow my work on",
      resume: "My resume",
      services: "Services",
      references: "References",
      projects: "Latest projects",
      skills: "My skills",
      news: "News & articles",
      location: "My location",
    },
    actions: {
      readMore: "Read more",
      browseAll: "Browse all",
      showMore: "Show more",
      hide: "Hide",
      openSite: "Open site",
      copyLink: "Copy link",
    },
    followersLabel: "+1500 followers",
    locationLabel: "Ankara, Turkey",
  },
} as const;

export function otherLang(lang: Lang): Lang {
  return lang === "tr" ? "en" : "tr";
}

export function langFromPathname(pathname: string): Lang {
  return pathname.startsWith("/en") ? "en" : "tr";
}

export function switchLangPath(pathname: string, target: Lang): string {
  const stripped = pathname.startsWith("/en") ? pathname.slice(3) || "/" : pathname;
  if (target === "en") return stripped === "/" ? "/en" : `/en${stripped}`;
  return stripped;
}

