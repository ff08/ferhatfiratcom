export type SocialLink = {
  label: string;
  href: string;
  icon: "linkedin" | "instagram" | "link";
};

export type ResumeItem = {
  title: string;
  company: string;
  companyShort?: string;
  range: string;
  location?: string;
  employmentType?: string;
  description?: string;
  icon?: "spark" | "briefcase" | "rocket" | "badge";
};

export type ProjectItem = {
  title: string;
  tagline?: string;
  description: string;
  domain?: string;
  href?: string;
  logoSrc?: string;
  icon: "dev" | "tech" | "startup" | "creative";
};

export type ArticleItem = {
  slug: string;
  titleTr: string;
  titleEn: string;
  excerptTr: string;
  excerptEn: string;
  dateISO: string; // YYYY-MM-DD
  category: "News" | "Articles";
  readingMinutes?: number;
  bodyTr: string; // HTML string
  bodyEn: string; // HTML string
};

export type ServiceItem = {
  title: string;
  description: string;
  icon: "brizy" | "wordpress" | "shopify" | "lark" | "replit";
  logoSrc?: string;
};

export type ReferenceItem = {
  title: string;
  descriptionTr?: string;
  descriptionEn?: string;
  href: string;
  domain?: string;
  country?: "TR" | "OTHER";
};

export const site = {
  name: "Ferhat FIRAT",
  domain: "ferhatfirat.com",
  tagline:
    "Lead Web Designer | UpCard | No-Code & Low-Code Expert | Brand Growth & Digital Innovation | Orion Tekmer Mentor | Brizy Mentor",
  followers: "1500+ takipçi",
  locationLabel: "Ankara, Türkiye",
  locationAddress: "Ankara, Türkiye",
  locationEmbedUrl:
    "https://www.google.com/maps?q=Ankara&output=embed",
  hero: {
    title: "I’m Ferhat FIRAT",
    subtitle:
      "Lead Web Designer • No-Code & Low-Code Expert • Brand Growth & Digital Innovation",
    bioEn: [
      "As a Lead Web Designer at Creavision GmbH, I shape the visual identity and user experience of our digital products while mentoring and collaborating with our design team.",
      "With 6+ years of experience in WordPress development and 3+ years as an SEO Specialist, I deliver creative, fast, and performance-driven web design solutions that align with business goals and boost search visibility.",
      "I hold degrees in Computer Engineering (Selçuk University) and Business & Management (Anadolu University) — a blend that gives me a strong foundation in technology, design, and business strategy.",
      "I’m passionate about UI/UX design, digital marketing, and no-code tools that simplify and accelerate web creation. My mission is to help brands grow online through comprehensive SEO audits, keyword research, competitor analysis, and technical optimization."
    ],
    bioTr: [
      "🇹🇷 Creavision GmbH’de Lead Web Designer olarak dijital projelerimizin görsel kimliğini ve kullanıcı deneyimini tasarlıyor, aynı zamanda ekibime mentorluk yapıyorum.",
      "6 yılı aşkın WordPress geliştirme ve 3 yıldan fazla SEO uzmanlığı deneyimimle, işletme hedeflerine uygun, yaratıcı ve performans odaklı web tasarım çözümleri üretiyorum.",
      "Selçuk Üniversitesi Bilgisayar Mühendisliği ve Anadolu Üniversitesi İşletme mezunuyum. Bu iki alan, bana teknoloji, tasarım ve iş stratejisi arasında güçlü bir köprü kurma becerisi kazandırdı.",
      "UI/UX tasarımı, dijital pazarlama ve No-Code araçları konusunda tutkuluyum; markaların dijitalde büyümesini sağlamak için SEO denetimleri, anahtar kelime araştırmaları, rakip analizleri ve teknik optimizasyonlar yapıyorum.",
      "Hedefim markaların fikirlerini hızlı, estetik ve sürdürülebilir dijital deneyimlere dönüştürmelerine yardımcı olmak."
    ],
    missionTr: "Amacım, danışanlarımın fikirlerini sınır tanımadan hayata geçirmelerine olanak sağlamak.",
    missionEn: "My goal is to enable my clients to bring their ideas to life without limits."
  },
  socials: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ferhatfirat/",
      icon: "linkedin"
    },
    { label: "Instagram", href: "https://instagram.com/_ferhatfirat", icon: "instagram" },
    { label: "UpCard", href: "https://upcard.me/ferhat", icon: "link" }
  ] satisfies SocialLink[],
  resume: [
    {
      title: "Head of Web Development",
      company: "Creavision GmbH",
      companyShort: "C",
      employmentType: "Tam zamanlı",
      range: "Tem 2023 — Devam ediyor",
      location: "Mannheim, Baden-Württemberg, Almanya · Uzaktan",
      icon: "briefcase",
      description:
        "Operasyon yönetimi, kullanıcı deneyimi tasarımı (UED) ve ekip mentorluk."
    },
    {
      title: "Lead Web Designer",
      company: "Accretion Digital",
      companyShort: "A",
      employmentType: "Tam zamanlı",
      range: "Nis 2021 — Nis 2025",
      location: "Illinois, Birleşik Devletler · Uzaktan",
      icon: "badge",
      description:
        "Web tasarım ekibini yönetme; görsel kimlik, UI/UX iyileştirmeleri, trend takibi; iş ihtiyaçlarına göre yaratıcı çözümler; zaman/bütçe yönetimi."
    },
    {
      title: "Dijital Strateji Uzmanı",
      company: "Anadolu Akaryakıt ve Tic. Ltd. Şti.",
      companyShort: "AA",
      employmentType: "Yarı zamanlı",
      range: "Eki 2023 — Eki 2024",
      location: "Ankara, Türkiye · Hibrit",
      icon: "spark",
      description: "Web design, Google Adwords, SEO, brand consulting."
    },
    {
      title: "Web Design Specialist",
      company: "AIKA Concept",
      companyShort: "AC",
      employmentType: "Yarı zamanlı",
      range: "Oca 2020 — Şub 2024",
      location: "Uzaktan",
      icon: "rocket",
      description: "WooCommerce → Shopify geçişleri; dijital pazarlama ve web sitesi tasarım/geliştirme."
    },
    {
      title: "Digital Marketing Executive",
      company: "Studio ByLamp",
      companyShort: "SB",
      employmentType: "Yarı zamanlı",
      range: "Oca 2021 — Oca 2024",
      location: "Uzaktan",
      icon: "badge",
      description: "Shopify developer & marketing executive."
    },
    {
      title: "Search Engine Optimization Specialist",
      company: "Webtures",
      companyShort: "W",
      employmentType: "Tam zamanlı",
      range: "Oca 2021 — Nis 2021",
      location: "İstanbul, Türkiye · Uzaktan",
      icon: "spark",
      description: "Türkiye genelinde büyük şirketlerin SEO süreçleri; müşteri görüşmeleri; büyüme odaklı uygulamalar."
    },
    {
      title: "Head of SEO | Lead Wordpress Designer",
      company: "Ardox Teknoloji",
      companyShort: "AT",
      employmentType: "Tam zamanlı",
      range: "Mar 2019 — Oca 2021",
      location: "Ankara, Türkiye · Ofiste",
      icon: "briefcase",
      description: "30+ kurumsal web sitesi redesign; SEO yönetimi; reklam/sosyal medya; müşteri kazanımı ve kullanıcı odaklı revizyonlar. Brizy Designer/Cloud/WordPress."
    },
    {
      title: "Java Developer",
      company: "Konumsal Bilgi Sistemleri",
      companyShort: "KBS",
      employmentType: "Tam zamanlı",
      range: "Mar 2017 — Mar 2018",
      location: "Ankara, Türkiye · Ofiste",
      icon: "rocket",
      description: "ORBIS projesinde modül geliştirme; raporlamalar; Personel Devam Kontrol Sistemleri kapsamında 10+ kamu kurumu için ek modül geliştirmeleri."
    }
  ] satisfies ResumeItem[],
  projects: [
    {
      title: "Upcard",
      tagline: "Your Professional Identity",
      description:
        "Now Digital — Share instantly with QR code, gather all your social media in one place, manage your contacts smartly.",
      domain: "upcard.me",
      href: "https://upcard.me",
      logoSrc: "/projects/upcard.png",
      icon: "tech"
    },
    {
      title: "Bugün Mac Var Mı?",
      tagline: "bugunmacvarmi.com",
      description:
        "Günlük maç takibi için hızlı ve sade bir deneyim. Programı kontrol et, anında paylaş.",
      domain: "bugunmacvarmi.com",
      href: "https://bugunmacvarmi.com",
      logoSrc: "/projects/bugunmacvarmi.png",
      icon: "startup"
    }
  ] satisfies ProjectItem[],
  skills: [
    "UI/UX design",
    "Web design",
    "WordPress",
    "SEO",
    "No-code",
    "Low-code",
    "Brand growth",
    "Performance optimization",
    "Technical SEO",
    "Keyword research",
    "Competitor analysis"
  ],
  articles: [
    {
      slug: "no-code-ai-2026-productization",
      titleTr: "2026’da No‑Code + AI: ürünleştirme dönemi",
      titleEn: "No‑Code + AI in 2026: the productization era",
      excerptTr:
        "No‑code araçlar AI ile birleşince prototipten ürüne geçiş süresi ciddi şekilde kısalıyor. Peki nerede hız, nerede kalite ve güvenlik devreye giriyor?",
      excerptEn:
        "As no‑code tools converge with AI, the path from prototype to product gets dramatically shorter. Where do speed, quality, and security really matter?",
      dateISO: "2026-04-08",
      category: "News",
      readingMinutes: 5,
      bodyTr: `
        <p>No‑code ekosistemi 2026’da artık “hızlı prototip” alanından çıkıp <strong>ürünleşme</strong> tarafına daha çok yaklaşıyor. Özellikle AI destekli arayüz üretimi, metin→tasarım akışları ve otomatik içerik/SEO taslakları; ekiplerin üretim kapasitesini artırıyor.</p>
        <h3>Neyi hızlandırıyor?</h3>
        <ul>
          <li><strong>İlk sürüm</strong>: Landing page, onboarding, pricing, blog gibi temel sayfalar.</li>
          <li><strong>Operasyon</strong>: Form → CRM → e-posta → görev akışları (Make / Zapier / n8n).</li>
          <li><strong>İçerik</strong>: Başlık varyasyonları, meta açıklamaları, görsel brief’leri.</li>
        </ul>
        <h3>Riskler nerede?</h3>
        <ul>
          <li><strong>Performans</strong>: Aşırı script ve eklenti bağımlılığı.</li>
          <li><strong>Güvenlik</strong>: 3. parti entegrasyonlarda veri sızıntısı riski.</li>
          <li><strong>Taşınabilirlik</strong>: Vendor lock‑in ve içerik/şablon bağımlılığı.</li>
        </ul>
        <p>Özet: No‑code + AI ile hız kazanırken, kritik sayfalarda (checkout, üyelik, ödeme) <strong>ölçümleme, performans bütçesi ve veri güvenliği</strong> standartlarını en baştan koymak gerekiyor.</p>
      `,
      bodyEn: `
        <p>In 2026, the no‑code ecosystem is moving beyond “quick prototyping” into <strong>real productization</strong>. AI-assisted UI generation, text→design workflows, and automated content/SEO drafts significantly increase a team’s output.</p>
        <h3>What it accelerates</h3>
        <ul>
          <li><strong>First release</strong>: Landing, onboarding, pricing, blog, and core marketing pages.</li>
          <li><strong>Operations</strong>: Form → CRM → email → tasks (Make / Zapier / n8n).</li>
          <li><strong>Content</strong>: Title variants, meta descriptions, visual briefs.</li>
        </ul>
        <h3>Where the risks are</h3>
        <ul>
          <li><strong>Performance</strong>: Too many scripts and plugin dependencies.</li>
          <li><strong>Security</strong>: Data leakage risk in third‑party integrations.</li>
          <li><strong>Portability</strong>: Vendor lock‑in and template/content coupling.</li>
        </ul>
        <p>Bottom line: keep the speed, but set <strong>analytics, performance budgets, and data-security standards</strong> from day one—especially for critical flows (checkout, auth, payments).</p>
      `
    },
    {
      slug: "webflow-framer-brizy-which-when",
      titleTr: "Webflow, Framer, Brizy: hangi senaryoda hangisi?",
      titleEn: "Webflow, Framer, Brizy: which one for which scenario?",
      excerptTr:
        "Tek bir “en iyi” araç yok. Hedef, ekip yapısı, teslim süresi ve bakım ihtiyacı; seçimi doğrudan değiştiriyor.",
      excerptEn:
        "There’s no single “best” tool. Your goal, team shape, delivery timeline, and maintenance needs should drive the choice.",
      dateISO: "2026-04-08",
      category: "Articles",
      readingMinutes: 6,
      bodyTr: `
        <p>Bu üç araç da farklı güçlü yönlere sahip. Doğru seçim için “ne inşa ediyorum?” sorusuna net cevap vermek gerekir.</p>
        <h3>Framer</h3>
        <ul>
          <li><strong>İdeal</strong>: Hızlı, görsel odaklı marketing siteleri; micro‑interaction’lar.</li>
          <li><strong>Dikkat</strong>: İçerik yönetimi ve kompleks IA büyüdükçe yönetim zorlaşabilir.</li>
        </ul>
        <h3>Webflow</h3>
        <ul>
          <li><strong>İdeal</strong>: CMS’li kurumsal siteler, blog/landing ölçekleme, ekipli çalışma.</li>
          <li><strong>Dikkat</strong>: Tasarım sistemi disiplinine ihtiyaç duyar; aksi halde teknik borç oluşur.</li>
        </ul>
        <h3>Brizy (özellikle WordPress/Cloud)</h3>
        <ul>
          <li><strong>İdeal</strong>: WordPress ekosistemiyle hızlı kurulum, landing temelli akışlar.</li>
          <li><strong>Dikkat</strong>: Performans için görsel/asset yönetimi ve minimal eklenti prensibi şart.</li>
        </ul>
        <p>Hızlı kural: <strong>tek sayfa/az içerik</strong> → Framer; <strong>CMS + büyüme</strong> → Webflow; <strong>WP ekosistemi</strong> → Brizy.</p>
      `,
      bodyEn: `
        <p>These three tools shine in different situations. The right pick starts with a clear answer to: “What am I building?”</p>
        <h3>Framer</h3>
        <ul>
          <li><strong>Best for</strong>: Fast, design-led marketing sites and micro‑interactions.</li>
          <li><strong>Watch out</strong>: As IA and content scale, governance can become harder.</li>
        </ul>
        <h3>Webflow</h3>
        <ul>
          <li><strong>Best for</strong>: CMS-driven corporate sites, scalable blog/landing operations, team workflows.</li>
          <li><strong>Watch out</strong>: Needs design-system discipline to avoid long-term debt.</li>
        </ul>
        <h3>Brizy (WordPress/Cloud)</h3>
        <ul>
          <li><strong>Best for</strong>: Quick setup in the WordPress ecosystem and landing-focused funnels.</li>
          <li><strong>Watch out</strong>: Performance requires strict asset management and minimal plugins.</li>
        </ul>
        <p>Quick rule: <strong>single page / low content</strong> → Framer; <strong>CMS + growth</strong> → Webflow; <strong>WP ecosystem</strong> → Brizy.</p>
      `
    },
    {
      slug: "low-code-automation-stack-2026",
      titleTr: "Low‑Code otomasyon yığını (2026): Make, n8n, Zapier ve Lark",
      titleEn: "Low‑Code automation stack (2026): Make, n8n, Zapier, and Lark",
      excerptTr:
        "Otomasyon artık sadece “bağla çalışsın” değil; izlenebilirlik, hata yönetimi ve maliyet kontrolü ile bir ürün gibi yönetiliyor.",
      excerptEn:
        "Automation is no longer just “connect and run”—it’s managed like a product with observability, error handling, and cost control.",
      dateISO: "2026-04-08",
      category: "Articles",
      readingMinutes: 7,
      bodyTr: `
        <p>Low‑code otomasyonların olgunlaşmasıyla birlikte ekipler iki şeye odaklanıyor: <strong>gözlemlenebilirlik</strong> ve <strong>maliyet kontrolü</strong>.</p>
        <h3>Make / Zapier</h3>
        <ul>
          <li><strong>Artı</strong>: Hızlı kurulum, çok sayıda hazır entegrasyon.</li>
          <li><strong>Eksi</strong>: Karmaşık akışlarda debug ve versiyonlama zorlaşabilir.</li>
        </ul>
        <h3>n8n</h3>
        <ul>
          <li><strong>Artı</strong>: Self‑host, daha esnek kontrol, geliştirici dostu.</li>
          <li><strong>Eksi</strong>: Kurulum/işletim sorumluluğu sizde.</li>
        </ul>
        <h3>Lark (ops katmanı)</h3>
        <ul>
          <li><strong>Artı</strong>: Doküman + tablo + görev + chat tek yerde; operasyon görünürlüğü.</li>
          <li><strong>İpucu</strong>: Otomasyonları mutlaka “log tablosu” ile izleyin.</li>
        </ul>
        <p>Öneri: Kritik akışlarda hata durumunda geri dönüş planı (fallback) ve uyarı (Slack/e‑posta) şart. Aksi halde otomasyon “sessizce” bozulur.</p>
      `,
      bodyEn: `
        <p>As low‑code automation matures, teams focus on two things: <strong>observability</strong> and <strong>cost control</strong>.</p>
        <h3>Make / Zapier</h3>
        <ul>
          <li><strong>Pros</strong>: Fast setup and many ready-made integrations.</li>
          <li><strong>Cons</strong>: Debugging and versioning can get difficult in complex flows.</li>
        </ul>
        <h3>n8n</h3>
        <ul>
          <li><strong>Pros</strong>: Self-hosted, flexible control, developer-friendly.</li>
          <li><strong>Cons</strong>: You own operations and maintenance.</li>
        </ul>
        <h3>Lark (ops layer)</h3>
        <ul>
          <li><strong>Pros</strong>: Docs + tables + tasks + chat in one place; strong operational visibility.</li>
          <li><strong>Tip</strong>: Track automations with a dedicated “log table”.</li>
        </ul>
        <p>Recommendation: for critical flows, always add a fallback plan plus alerts (Slack/email). Otherwise, automation tends to fail “silently”.</p>
      `
    }
  ] satisfies ArticleItem[],
  services: [
    {
      title: "Brizy Consultant",
      description: "Brizy ile landing page ve kurumsal site kurgusu, hız/SEO odaklı optimizasyon ve yayınlama desteği.",
      icon: "brizy",
      logoSrc: "/services/brizy.png"
    },
    {
      title: "WordPress Consultant",
      description: "Tema/altyapı seçimi, performans iyileştirme, teknik SEO ve bakım süreçleri için danışmanlık.",
      icon: "wordpress",
      logoSrc: "/services/wordpress.png"
    },
    {
      title: "Shopify Consultant",
      description: "Store setup, tema özelleştirme, hız ve dönüşüm optimizasyonu; uygulama seçimi ve best practice.",
      icon: "shopify",
      logoSrc: "/services/shopify.png"
    },
    {
      title: "Lark Consultant",
      description: "Ekip içi süreçler, dokümantasyon ve operasyon yönetimi için Lark workspace kurgusu ve otomasyonlar.",
      icon: "lark",
      logoSrc: "/services/lark.png"
    },
    {
      title: "Replit Consultant",
      description: "Hızlı prototipleme, deploy akışı ve AI destekli geliştirme süreçleri için Replit danışmanlığı.",
      icon: "replit",
      logoSrc: "/services/replit.png"
    }
  ] satisfies ServiceItem[],
  references: [
    {
      title: "HLS Polymer",
      descriptionTr: "Kurumsal tanıtım sitesi (ürün/hizmet odaklı) ve performans odaklı yapı.",
      descriptionEn: "Corporate website focused on products/services with a performance-first build.",
      href: "https://www.hlspolymer.com/",
      domain: "hlspolymer.com",
      country: "TR"
    },
    {
      title: "Özel Dental Sanat",
      descriptionTr: "Diş kliniği için modern tanıtım sitesi ve dönüşüm odaklı sayfa akışı.",
      descriptionEn: "Dental clinic website with a modern look and conversion-focused structure.",
      href: "https://www.ozeldentalsanat.com/",
      domain: "ozeldentalsanat.com",
      country: "TR"
    },
    {
      title: "Türkmen Şirketler",
      descriptionTr: "Firma rehberi/kurumsal dizin yapısı ve içerik odaklı sayfalar.",
      descriptionEn: "Company directory structure with content-focused pages.",
      href: "https://www.turkmensirketler.com/",
      domain: "turkmensirketler.com",
      country: "TR"
    },
    {
      title: "Piezo Enerji",
      descriptionTr: "Kurumsal enerji sitesi, hizmet sayfaları ve SEO uyumlu içerik kurgusu.",
      descriptionEn: "Energy company website with service pages and SEO-friendly content structure.",
      href: "https://www.piezoenerji.com.tr/",
      domain: "piezoenerji.com.tr",
      country: "TR"
    },
    {
      title: "İlke VIP Akademi",
      descriptionTr: "Eğitim kurumu sitesi; program tanıtımı ve hızlı erişim akışı.",
      descriptionEn: "Education website with program-focused pages and quick navigation.",
      href: "https://www.ilkevipakademi.com",
      domain: "ilkevipakademi.com",
      country: "TR"
    },
    {
      title: "STN Medikal",
      descriptionTr: "Medikal firma tanıtım sitesi; ürün/servis bölümleri ve güven veren tasarım.",
      descriptionEn: "Medical company website with product/service sections and a trust-first UI.",
      href: "https://www.stnmedikal.com/",
      domain: "stnmedikal.com",
      country: "TR"
    },
    {
      title: "Fuat Bayer Avukatlık",
      descriptionTr: "Avukatlık sitesi; hizmet alanları ve iletişim odaklı kullanıcı deneyimi.",
      descriptionEn: "Lawyer website with practice areas and contact-first UX.",
      href: "https://www.fuatbayer.av.tr/",
      domain: "fuatbayer.av.tr",
      country: "TR"
    },
    {
      title: "Cihan Teknoloji",
      descriptionTr: "Kurumsal teknoloji sitesi; ürün/hizmet vitrin yapısı.",
      descriptionEn: "Corporate tech website with a clear product/service showcase.",
      href: "https://cihanteknoloji.com",
      domain: "cihanteknoloji.com",
      country: "TR"
    },
    {
      title: "Anadolu Akaryakıt",
      descriptionTr: "Kurumsal site + hizmet sayfaları; hız ve SEO odaklı düzen.",
      descriptionEn: "Corporate site with service pages; speed and SEO-focused layout.",
      href: "https://anadoluakaryakit.com.tr",
      domain: "anadoluakaryakit.com.tr",
      country: "TR"
    },
    {
      title: "Areldis",
      descriptionTr: "Kurumsal tanıtım sitesi; net bilgi mimarisi ve modern UI.",
      descriptionEn: "Corporate website with clean information architecture and modern UI.",
      href: "https://areldis.com",
      domain: "areldis.com",
      country: "TR"
    },
    {
      title: "Asil Kuaför",
      descriptionTr: "Kuaför/beauty işletmesi için tanıtım ve randevuya yönlendiren akış.",
      descriptionEn: "Salon website focused on showcasing services and driving bookings.",
      href: "https://asilkuafor.com",
      domain: "asilkuafor.com",
      country: "TR"
    },
    {
      title: "Golden Turizm",
      descriptionTr: "Turizm şirketi sitesi; hizmet paketleri ve iletişim CTA’ları.",
      descriptionEn: "Tourism website with service packages and strong CTAs.",
      href: "https://goldenturizm.com.tr",
      domain: "goldenturizm.com.tr",
      country: "TR"
    },
    {
      title: "Europe Smile Center",
      descriptionTr: "Klinik sitesi; hizmet sayfaları ve hasta dönüşüm odaklı yapı.",
      descriptionEn: "Clinic website with service pages and patient conversion focus.",
      href: "https://europesmilecenter.com",
      domain: "europesmilecenter.com",
      country: "TR"
    },
    {
      title: "Grand Sera Otel",
      descriptionTr: "Otel sitesi; oda/hizmet tanıtımı ve rezervasyon yönlendirmeleri.",
      descriptionEn: "Hotel website with room/service pages and booking-oriented flow.",
      href: "https://grandseraotel.com",
      domain: "grandseraotel.com",
      country: "TR"
    },
    {
      title: "Hair Express Avesta",
      descriptionTr: "Hizmet vitrinli kuaför sitesi; hızlı erişim ve iletişim odaklı.",
      descriptionEn: "Service showcase website with quick access and contact-first UX.",
      href: "https://hairexpresavesta.com",
      domain: "hairexpresavesta.com",
      country: "TR"
    },
    {
      title: "Miller Natural",
      descriptionTr: "Ürün odaklı marka sitesi; sade, hızlı ve güven veren tasarım.",
      descriptionEn: "Product-focused brand site with a clean, fast, trust-building UI.",
      href: "https://millernatural.com",
      domain: "millernatural.com",
      country: "TR"
    },
    {
      title: "F8 Digital",
      descriptionTr: "Ajans sitesi; hizmetler, vaka yaklaşımı ve lead toplama odaklı.",
      descriptionEn: "Agency website with services, case mindset and lead capture focus.",
      href: "https://f8digital.com.tr",
      domain: "f8digital.com.tr",
      country: "TR"
    },
    {
      title: "Ürgüp Civata",
      descriptionTr: "Üretim/tedarik firması sitesi; ürün kategorileri ve kurumsal tanıtım.",
      descriptionEn: "Manufacturing/supply website with product categories and corporate pages.",
      href: "https://urgupcivata.com",
      domain: "urgupcivata.com",
      country: "TR"
    },
    {
      title: "Avien",
      descriptionTr: "Kurumsal tanıtım sitesi; marka dili ve içerik hiyerarşisi.",
      descriptionEn: "Corporate website with brand-aligned design and clear content hierarchy.",
      href: "https://avien.com.tr",
      domain: "avien.com.tr",
      country: "TR"
    },
    {
      title: "Cantürk Elektronik Servis",
      descriptionTr: "Servis sitesi; hizmet listesi, hızlı iletişim ve WhatsApp akışı.",
      descriptionEn: "Service website with clear offerings and fast contact flow.",
      href: "https://canturkelektronikservis.com",
      domain: "canturkelektronikservis.com",
      country: "TR"
    },
    {
      title: "Dr. Derman Başaran",
      descriptionTr: "Doktor kişisel sitesi; branş sayfaları ve dönüşüm odaklı içerik.",
      descriptionEn: "Doctor personal site with specialty pages and conversion-oriented content.",
      href: "https://drdermanbasaran.com",
      domain: "drdermanbasaran.com",
      country: "TR"
    },
    {
      title: "Stay in Simple",
      descriptionTr: "Konaklama sitesi; sade tasarım ve rezervasyona yönlendiren akış.",
      descriptionEn: "Hospitality site with minimal design and booking-oriented flow.",
      href: "https://stayinsimple.com",
      domain: "stayinsimple.com",
      country: "TR"
    },
    {
      title: "Dermoid Kist",
      descriptionTr: "Sağlık bilgilendirme sitesi; konu odaklı içerik ve SEO kurgusu.",
      descriptionEn: "Health information site with topic-focused SEO structure.",
      href: "http://www.dermoidkist.com",
      domain: "dermoidkist.com",
      country: "TR"
    },
    {
      title: "Laparoskopik Jinekoloji",
      descriptionTr: "Doktor sitesi; bilgilendirici içerik, branş sayfaları ve iletişim CTA.",
      descriptionEn: "Doctor website with informative content and contact CTAs.",
      href: "https://www.laparoskopikjinekoloji.com/",
      domain: "laparoskopikjinekoloji.com",
      country: "TR"
    },
    {
      title: "Ankara Yumurtalık Kanseri",
      descriptionTr: "Sağlık bilgilendirme; SEO odaklı içerik ve yönlendirme sayfaları.",
      descriptionEn: "Health information site with SEO-driven content structure.",
      href: "https://www.ankarayumurtalikkanseri.com/",
      domain: "ankarayumurtalikkanseri.com",
      country: "TR"
    },
    {
      title: "Ankara Rahim Kanseri",
      descriptionTr: "Sağlık bilgilendirme sitesi; hızlı erişim ve içerik hiyerarşisi.",
      descriptionEn: "Health information site with clear hierarchy and quick access.",
      href: "https://www.ankararahimkanseri.com/",
      domain: "ankararahimkanseri.com",
      country: "TR"
    },
    {
      title: "Robotik Jinekolog",
      descriptionTr: "Hizmet/tedavi sayfaları olan sağlık sitesi; dönüşüm odaklı akış.",
      descriptionEn: "Healthcare site with treatment pages and conversion-oriented flow.",
      href: "https://www.robotikjinekolog.com/",
      domain: "robotikjinekolog.com",
      country: "TR"
    },
    {
      title: "Global DTR",
      descriptionTr: "Kurumsal çok dilli site; içerik yönetimi ve SEO düzeni.",
      descriptionEn: "Corporate multilingual website with content management and SEO structure.",
      href: "https://www.globaldtr.com/tr/",
      domain: "globaldtr.com",
      country: "TR"
    },
    {
      title: "Dr. Coşkun Erçel",
      descriptionTr: "Doktor kişisel sitesi; branş sayfaları ve randevu/iletişim akışı.",
      descriptionEn: "Doctor website with specialty pages and appointment/contact flow.",
      href: "https://drcoskunercel.com/",
      domain: "drcoskunercel.com",
      country: "TR"
    },
    {
      title: "Altın Teknoloji",
      descriptionTr: "Kurumsal teknoloji sitesi; ürün/hizmet tanıtımı.",
      descriptionEn: "Corporate technology website with product/service overview.",
      href: "https://www.altinteknoloji.com",
      domain: "altinteknoloji.com",
      country: "TR"
    },
    {
      title: "NBL Grup",
      descriptionTr: "Kurumsal tanıtım sitesi; hizmetler ve iletişim odaklı yapı.",
      descriptionEn: "Corporate website with services and contact-first layout.",
      href: "https://www.nblgrup.com",
      domain: "nblgrup.com",
      country: "TR"
    },
    {
      title: "NextGenCode",
      descriptionTr: "Yazılım ajansı sitesi; servisler ve proje odaklı yapı.",
      descriptionEn: "Software agency site with services and project-focused sections.",
      href: "https://www.nextgencode.co",
      domain: "nextgencode.co",
      country: "TR"
    },
    {
      title: "Başkent Oto Koltuk",
      descriptionTr: "Oto döşeme/servis sitesi; hizmet vitrini ve iletişim CTA’ları.",
      descriptionEn: "Auto upholstery/service site with a clear services showcase and CTAs.",
      href: "https://www.baskentotokoltuk.com",
      domain: "baskentotokoltuk.com",
      country: "TR"
    },
    {
      title: "Başbuğ Koçak Avukatlık",
      descriptionTr: "Avukatlık sitesi; uzmanlık alanları ve güven odaklı tasarım.",
      descriptionEn: "Law firm site with practice areas and trust-first design.",
      href: "https://www.basbugkocak.av.tr",
      domain: "basbugkocak.av.tr",
      country: "TR"
    },
    {
      title: "Boğaziçi Sakinşehir Derneği",
      descriptionTr: "Dernek sitesi; duyurular, içerikler ve etkinlik bilgilendirme.",
      descriptionEn: "Association website with announcements and event information.",
      href: "https://www.bogazicisakinsehirdernegi.com",
      domain: "bogazicisakinsehirdernegi.com",
      country: "TR"
    },
    {
      title: "Nobel Sistem",
      descriptionTr: "Kurumsal tanıtım sitesi; hizmet sayfaları ve SEO düzeni.",
      descriptionEn: "Corporate website with service pages and SEO-ready structure.",
      href: "https://www.nobelsistem.com",
      domain: "nobelsistem.com",
      country: "TR"
    },
    {
      title: "Ardox Bariyer (TR)",
      descriptionTr: "Ürün odaklı kurumsal site; kategori sayfaları ve teklif akışı.",
      descriptionEn: "Product-focused corporate site with categories and quote flow.",
      href: "https://www.ardoxbariyer.com.tr",
      domain: "ardoxbariyer.com.tr",
      country: "TR"
    },
    {
      title: "Ardox Bariyer",
      descriptionTr: "Bariyer çözümleri için kurumsal vitrin; hızlı erişim ve lead toplama.",
      descriptionEn: "Barrier solutions site with quick navigation and lead capture.",
      href: "https://www.ardoxbariyer.com",
      domain: "ardoxbariyer.com",
      country: "TR"
    },
    {
      title: "Bodrum Bariyer",
      descriptionTr: "Lokasyon odaklı hizmet sitesi; arama niyetine uygun sayfa yapısı.",
      descriptionEn: "Location-focused service site structured for search intent.",
      href: "https://www.bodrumbariyer.com",
      domain: "bodrumbariyer.com",
      country: "TR"
    },
    {
      title: "Ege Bariyer",
      descriptionTr: "Bölgesel bariyer hizmetleri; SEO odaklı içerik ve iletişim akışı.",
      descriptionEn: "Regional barrier services with SEO-driven content and contact flow.",
      href: "https://egebariyer.com",
      domain: "egebariyer.com",
      country: "TR"
    },
    {
      title: "Rubtek PEDM",
      descriptionTr: "Endüstriyel firma sitesi; ürün/hizmet tanıtımı ve içerik düzeni.",
      descriptionEn: "Industrial company website with product/service presentation.",
      href: "https://www.rubtekpedm.com",
      domain: "rubtekpedm.com",
      country: "TR"
    },
    {
      title: "Ankara Ege Lokma",
      descriptionTr: "Yerel işletme sitesi; menü/hizmet tanıtımı ve hızlı iletişim.",
      descriptionEn: "Local business website with offerings and quick contact.",
      href: "https://ankaraegelokma.com",
      domain: "ankaraegelokma.com",
      country: "TR"
    },
    {
      title: "Yera Sigorta",
      descriptionTr: "Sigorta danışmanlık sitesi; hizmet paketleri ve teklif yönlendirmesi.",
      descriptionEn: "Insurance website with service packages and quote-oriented flow.",
      href: "https://www.yerasigorta.com",
      domain: "yerasigorta.com",
      country: "TR"
    },
    {
      title: "Long Island Express Limo",
      descriptionTr: "Ulaşım/limuzin hizmet sitesi; rezervasyon ve iletişim CTA’ları.",
      descriptionEn: "Transportation/limo service site with booking and contact CTAs.",
      href: "https://longislandexpresslimo.com/",
      domain: "longislandexpresslimo.com",
      country: "OTHER"
    },
    {
      title: "Pflegewerk Mannheim",
      descriptionTr: "Almanya odaklı bakım hizmetleri sitesi; sade navigasyon ve hızlı iletişim akışı.",
      descriptionEn: "Germany-focused care services website with clean navigation and fast contact flow.",
      href: "https://www.pflegewerk-ma.de",
      domain: "pflegewerk-ma.de",
      country: "OTHER"
    },
    {
      title: "PflegeAnker",
      descriptionTr: "Bakım hizmetleri için kurumsal vitrin; hizmet sayfaları ve dönüşüm odaklı CTA’lar.",
      descriptionEn: "Care services site with service pages and conversion-oriented CTAs.",
      href: "https://www.pflegeanker.com",
      domain: "pflegeanker.com",
      country: "OTHER"
    },
    {
      title: "Creavision",
      descriptionTr: "Ajans/şirket web sitesi; hizmetler ve marka iletişimi odaklı yapı.",
      descriptionEn: "Agency/company website focused on services and brand communication.",
      href: "https://creavision.de",
      domain: "creavision.de",
      country: "OTHER"
    },
    {
      title: "Nexova",
      descriptionTr: "Kurumsal tanıtım; hizmet sayfaları ve SEO uyumlu içerik düzeni.",
      descriptionEn: "Corporate website with service pages and SEO-friendly content structure.",
      href: "https://www.nexova.com.tr/",
      domain: "nexova.com.tr",
      country: "OTHER"
    },
    {
      title: "SolarPreisVergleich",
      descriptionTr: "Karşılaştırma odaklı site; kategori sayfaları ve hızlı keşif akışı.",
      descriptionEn: "Comparison-focused website with category pages and a fast discovery flow.",
      href: "https://www.solarpreisvergleich.de/",
      domain: "solarpreisvergleich.de",
      country: "OTHER"
    },
    {
      title: "PD Leads",
      descriptionTr: "Lead toplama odaklı landing yapısı; sade form akışı ve performans optimizasyonu.",
      descriptionEn: "Lead-generation landing structure with streamlined forms and performance tuning.",
      href: "https://www.pd-leads.de/",
      domain: "pd-leads.de",
      country: "OTHER"
    },
    {
      title: "Rosenstock Pflege",
      descriptionTr: "Bakım hizmetleri sitesi; güven veren tasarım ve iletişim odaklı UX.",
      descriptionEn: "Care services site with trust-first design and contact-focused UX.",
      href: "https://www.rosenstock-pflege.de/",
      domain: "rosenstock-pflege.de",
      country: "OTHER"
    },
    {
      title: "Innodata",
      descriptionTr: "Kurumsal site; içerik hiyerarşisi ve hizmet sayfaları ile modern UI.",
      descriptionEn: "Corporate site with modern UI, service pages and clear content hierarchy.",
      href: "https://www.innodata.de/",
      domain: "innodata.de",
      country: "OTHER"
    },
    {
      title: "Treppenlift Helfer",
      descriptionTr: "Dönüşüm odaklı hizmet sitesi; landing sayfaları ve hızlı iletişim CTA’ları.",
      descriptionEn: "Conversion-focused service site with landing pages and quick contact CTAs.",
      href: "https://www.treppenlifthelfer.de/",
      domain: "treppenlifthelfer.de",
      country: "OTHER"
    },
    {
      title: "InoWork",
      descriptionTr: "Kurumsal tanıtım sitesi; hizmetler ve başvuru/iletişim akışı.",
      descriptionEn: "Corporate website with services and application/contact flow.",
      href: "https://www.inowork.com.tr/",
      domain: "inowork.com.tr",
      country: "OTHER"
    },
    {
      title: "Hausia",
      descriptionTr: "Marka sitesi; sade vitrin kurgusu ve modern tipografi.",
      descriptionEn: "Brand website with a minimal showcase layout and modern typography.",
      href: "https://hausia.de",
      domain: "hausia.de",
      country: "OTHER"
    },
    {
      title: "Nexus Akademie",
      descriptionTr: "Eğitim/akademi sitesi; program sayfaları ve kayıt yönlendirmeleri.",
      descriptionEn: "Academy website with program pages and enrollment-oriented flow.",
      href: "https://nexus-akademie.com/",
      domain: "nexus-akademie.com",
      country: "OTHER"
    },
    {
      title: "Nexdata",
      descriptionTr: "Kurumsal data/teknoloji sitesi; ürün/hizmet tanıtımı ve net IA.",
      descriptionEn: "Data/tech corporate site with product/service pages and clear IA.",
      href: "https://www.nexdata.de/",
      domain: "nexdata.de",
      country: "OTHER"
    },
    {
      title: "Medica Box",
      descriptionTr: "Medikal ürün sitesi; ürün vitrini ve içerik odaklı sayfalar.",
      descriptionEn: "Medical products website with product showcase and content pages.",
      href: "https://www.medica-box.de/",
      domain: "medica-box.de",
      country: "OTHER"
    },
    {
      title: "InoBau",
      descriptionTr: "İnşaat/kurumsal site; proje/hizmet tanıtımı ve iletişim akışı.",
      descriptionEn: "Construction/corporate site with project/service pages and contact flow.",
      href: "https://www.inobau.de/",
      domain: "inobau.de",
      country: "OTHER"
    },
    {
      title: "Medikids",
      descriptionTr: "Sağlık/klinik odaklı site; bilgilendirme ve randevu/iletişim yönlendirmeleri.",
      descriptionEn: "Healthcare/clinic site with informative pages and contact/appointment flow.",
      href: "https://www.medikids.de",
      domain: "medikids.de",
      country: "OTHER"
    },
    {
      title: "Hazar Totos",
      descriptionTr: "Kurumsal tanıtım; hızlı, sade ve mobil uyumlu yapı.",
      descriptionEn: "Corporate website with a fast, minimal, mobile-friendly build.",
      href: "https://hazartotos.com",
      domain: "hazartotos.com",
      country: "OTHER"
    },
    {
      title: "Inovia Medical",
      descriptionTr: "Medikal marka sitesi; ürün/hizmet vitrin yapısı ve güven odaklı tasarım.",
      descriptionEn: "Medical brand site with product/service showcase and trust-first design.",
      href: "https://inovia-medical.de",
      domain: "inovia-medical.de",
      country: "OTHER"
    },
    {
      title: "Solarbund",
      descriptionTr: "Enerji topluluğu/kurumsal site; içerik sayfaları ve SEO düzeni.",
      descriptionEn: "Energy community/corporate website with content pages and SEO structure.",
      href: "https://www.solarbund.com",
      domain: "solarbund.com",
      country: "OTHER"
    }
  ] satisfies ReferenceItem[],
  footer: {
    copyright: `© ${new Date().getFullYear()} Ferhat FIRAT. All rights reserved.`,
    links: [
      { label: "Hakkımda", href: "/about" },
      { label: "Politikalar", href: "/policies" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/ferhatfirat/" }
    ]
  }
};

