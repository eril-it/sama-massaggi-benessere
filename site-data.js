const SITE_DATA = {
  contact: {
    phoneDisplay: "351 939 2394",
    phone: "+393519392394",
    whatsapp: "393519392394",
    whatsappMessage: "Ciao, ho visto il sito SAMA Massaggi & Benessere e vorrei avere informazioni."
  },

  locations: [
    {
      city: "Pesaro",
      venue: "Karma Fitness",
      address: "Via degli Abeti, 64",
      region: "PU",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Karma%20Fitness%20Via%20degli%20Abeti%2064%20Pesaro"
    },
    {
      city: "Riccione",
      venue: "SET Movimento Terapia",
      address: "Via Diaz, 28",
      region: "RN",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Via%20Diaz%2028%20Riccione"
    }
  ],

  categories: [
    {
      id: "relax",
      label: "Relax & benessere",
      chip: "Relax",
      eyebrow: "RALLENTARE",
      icon: "✦",
      teaser: "Per rallentare e ritrovare equilibrio"
    },
    {
      id: "corpo",
      label: "Corpo & modellazione",
      chip: "Corpo",
      eyebrow: "LEGGEREZZA & MODELLAZIONE",
      icon: "≈",
      teaser: "Drenaggio, cellulite e leggerezza"
    },
    {
      id: "sport",
      label: "Tensioni & sport",
      chip: "Tensioni & sport",
      eyebrow: "MOVIMENTO",
      icon: "↗",
      teaser: "Per attività fisica e zone affaticate"
    },
    {
      id: "viso",
      label: "Viso & rituali",
      chip: "Viso",
      eyebrow: "RITUALI VISO",
      icon: "◌",
      teaser: "Kirei Kobido e benessere del viso"
    },
    {
      id: "maternita",
      label: "Maternità",
      chip: "Maternità",
      eyebrow: "UN TEMPO DEDICATO",
      icon: "♡",
      teaser: "Benessere prima e dopo la nascita",
      wideOnHome: true
    }
  ],

  treatments: [
    {
      id: "relax-total-body",
      category: "relax",
      name: "Relax Total Body",
      description: "Un massaggio avvolgente su tutto il corpo, pensato per rallentare, sciogliere le tensioni della quotidianità e ritrovare una piacevole sensazione di calma e benessere.",
      duration: "60 min",
      price: "55 €",
      featured: true,
      homeDescription: "Un momento di calma e benessere per tutto il corpo.",
      image: "assets/relax-total-body.webp"
    },
    {
      id: "hot-stone",
      category: "relax",
      name: "Hot Stone",
      description: "Un rituale rilassante che abbina manualità e pietre calde, per un’esperienza profonda, avvolgente e particolarmente piacevole nei momenti di stress.",
      duration: "60 min",
      price: "65 €"
    },
    {
      id: "anticellulite",
      category: "corpo",
      name: "Anticellulite",
      description: "Trattamento manuale mirato alle zone interessate dagli inestetismi della cellulite, con manovre pensate per lavorare sui tessuti e sulla sensazione di compattezza.",
      duration: "60 min",
      price: "55 €"
    },
    {
      id: "fango-anticellulite-drenante",
      category: "corpo",
      name: "Rituale Fango Anticellulite / Drenante",
      description: "Un rituale corpo che combina applicazione del fango e trattamento manuale, dedicato a chi cerca una sensazione di leggerezza e una cura mirata degli inestetismi.",
      duration: "70 min",
      price: "65 €"
    },
    {
      id: "linfodrenante",
      category: "corpo",
      name: "Linfodrenante",
      description: "Manualità lente e delicate dedicate al drenaggio e alla sensazione di leggerezza, particolarmente indicate quando si percepiscono gonfiore e pesantezza.",
      duration: "90 min",
      price: "75 €",
      featured: true,
      homeDescription: "Per ritrovare leggerezza e benessere.",
      image: "assets/linfodrenante.webp"
    },
    {
      id: "modellante-legno",
      category: "corpo",
      name: "Massaggio modellante con legno",
      description: "Trattamento modellante eseguito con strumenti in legno di forme differenti, utilizzati con manualità ritmiche e mirate sulle diverse zone del corpo.",
      duration: "90 min",
      price: "70 €"
    },
    {
      id: "decontratturante-schiena",
      category: "sport",
      name: "Decontratturante schiena",
      description: "Trattamento concentrato sulla schiena, dedicato alle aree più tese e affaticate e pensato per chi desidera un lavoro localizzato e deciso.",
      duration: "30 min",
      price: "40 €",
      featured: true,
      homeDescription: "Lavoro mirato sulle zone più tese e affaticate.",
      image: "assets/decontratturante-schiena.webp"
    },
    {
      id: "coppettazione-dinamica",
      categories: ["corpo", "sport"],
      name: "Coppettazione dinamica",
      descriptions: {
        corpo: "Trattamento eseguito con un sistema a vacuum controllato che mantiene un’aspirazione costante mentre il manipolo scorre sulle zone interessate. In ambito corpo e modellazione viene utilizzato per lavorare in modo dinamico sui tessuti, contribuendo a una sensazione di leggerezza e a un aspetto più uniforme.",
        sport: "Trattamento con vacuum controllato applicato in modo dinamico alle aree muscolari. In ambito sportivo viene utilizzato prima o dopo l’attività fisica per lavorare localmente sui tessuti e favorire una sensazione di distensione e recupero muscolare."
      },
      duration: "60 min",
      price: "65 €"
    },
    {
      id: "kinesiotape",
      category: "sport",
      name: "Applicazione KinesioTape",
      description: "Applicazione localizzata di tape elastico, proposta come servizio specifico in base alla zona e all’esigenza della persona.",
      duration: "Applicazione",
      price: "10 €"
    },
    {
      id: "maternita-pre-post",
      category: "maternita",
      name: "Massaggio gravidanza & post parto",
      description: "Un percorso pensato per accompagnare la donna prima e dopo la nascita. In gravidanza viene eseguito dalla 12ª settimana in poi, con manualità dolci e posizioni confortevoli adattate al momento. Nel post parto il lavoro può essere orientato alla sensazione di leggerezza e al rimodellamento del corpo. È possibile costruire anche un percorso che unisca fase pre e post parto, per dedicarsi uno spazio di benessere in entrambi i momenti.",
      duration: "60 min",
      price: "65 €",
      featured: true,
      homeDescription: "Benessere dedicato alla gravidanza e al post parto.",
      image: "assets/maternita.webp",
      note: "In gravidanza: dalla 12ª settimana in poi."
    },
    {
      id: "kirei-kobido",
      category: "viso",
      name: "Kirei Kobido",
      description: "Rituale manuale dedicato al viso, caratterizzato da gesti ritmici e precisi per regalare una sensazione di distensione, cura e luminosità.",
      duration: "60 min",
      price: "65 €",
      featured: true,
      homeDescription: "Un rituale viso delicato, distensivo e luminoso.",
      image: "assets/kirei-kobido.webp"
    }
  ]
};
