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
  title: string;
  date: string;
  category: "News" | "Articles";
  href?: string;
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
    mission: "Empowering clients to bring their ideas to life without limits."
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
      title: "What is the right design tool to choose in 2026?",
      date: "Apr 8, 2026",
      category: "News"
    },
    {
      title: "8 Figma design systems you can download for free today",
      date: "Apr 8, 2026",
      category: "News"
    },
    {
      title: "Font sizes in UI design: The complete guide to follow",
      date: "Apr 8, 2026",
      category: "Articles"
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

