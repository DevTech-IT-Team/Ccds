// Site-wide content - all copy lives here for easy updates

export const siteContent = {
  // Business basics
  business: {
    name: 'Colorado Colonics Detox Center',
    tagline: 'Clean from the inside out.',
    shortName: 'CCDC',
    address: '3597 S Pearl St, Suite 101, Englewood, CO 80113',
    phone: '(303) 505-0026',
    phoneLink: 'tel:3035050026',
    bookingUrl: 'https://www.vagaro.com/ccdc/book-now',
    parkingNote: 'Park in the lot out front',
  },

  // Hours
  hours: {
    sunday: '12–5',
    monday: '9–7',
    tuesday: '9–7',
    wednesday: '11–7',
    thursday: '9–7',
    friday: '9–5',
    saturday: '8–5',
  },

  // Navigation
  nav: {
    home: 'Home',
    services: 'Services',
    pricing: 'Pricing',
    about: 'About',
    contact: 'Contact',
    resources: 'Resources',
    bookNow: 'Book Now',
  },

  // Footer legal
  footer: {
    disclaimer: 'These statements have not been evaluated by the Food and Drug Administration. These statements are not meant to diagnose, treat, cure, or prevent any disease or condition. Consult your healthcare provider. We reserve the right to refuse service to anyone disruptive, intoxicated, or creating a safety hazard.',
    cancellationPolicy: 'Cancellation Policy',
    privacyPolicy: 'Notice of Privacy Practices',
  },

  // Home page
  home: {
    hero: {
      headline: 'Revitalize Your Life. Master the Practice at Our Academy.',
      subhead: ' Discover why colon hydrotherapy is changing the world of health. Experience premium services to restore your body from the inside out, or enroll in our academy to become a certified therapist and transform the lives of others.',
      ctaPrimary: 'Book an Appointment',
      ctaSecondary: 'Call or Text (303) 505-0026',
    },
    serviceTeasers: [
      {
        title: 'Colon Hydrotherapy',
        blurb: 'Gentle, filtered water cleansing for digestive wellness',
        icon: 'droplet',
        link: '/services/colon-hydrotherapy',
      },
      {
        title: 'Ion Foot Detox',
        blurb: 'Ionic cleanse to support your body\'s natural detox pathways',
        icon: 'footprints',
        link: '/services/ion-foot-detox',
      },
      {
        title: 'Benefits & Misconceptions',
        blurb: 'Learn the truth about colon hydrotherapy',
        icon: 'sparkles',
        link: '/services/colon-hydrotherapy',
      },
      {
        title: 'About Us',
        blurb: 'Meet our certified colon hydrotherapists',
        icon: 'users',
        link: '/about',
      },
      {
        title: 'Community Resources',
        blurb: 'Support for your wellness journey',
        icon: 'leaf',
        link: '/services/community-resources',
      },
    ],
    valuesStrip: {
      text: 'Circulation · Assimilation · Relaxation · Elimination — All are welcome',
    },
    testimonialSection: {
      heading: 'What our clients say',
      readMore: 'Read more reviews on Google',
      // TODO: insert real Google review link
      googleReviewUrl: '#',
    },
    closingCTA: {
      heading: 'Ready to feel your best?',
      subhead: 'Book your appointment today and start your journey to wellness.',
      cta: 'Book Now',
    },
  },

  // Services page tabs
  services: {
    tabs: [
      {
        id: 'colon-hydrotherapy',
        label: 'Colon Hydrotherapy',
        icon: 'droplet',
        blurb: 'Gentle, filtered-water cleansing with FDA-registered equipment. 45–60 min sessions.',
        badge: 'Most Popular',
      },
      {
        id: 'ion-foot-detox',
        label: 'Ion Foot Detox',
        icon: 'zap',
        blurb: 'Ionic cleanse supporting your body\'s natural detox pathways. Ages 18+.',
      },
      {
        id: 'biocharger',
        label: 'BioCharger',
        icon: 'radio',
        blurb: 'Light & frequency therapy targeting natural energy systems with customizable programs.',
      },
      {
        id: 'liver-cleanse',
        label: 'Liver Cleanse',
        icon: 'leaf',
        blurb: '9-day Medical Medium 3•6•9 protocol — consultation, colonics & foot detoxes.',
      },
      {
        id: 'mineralizing-soak',
        label: 'Mineralizing Foot Soak',
        icon: 'sparkles',
        blurb: 'Replenishing 30-min mineral soak. Standalone or stacked with detox sessions.',
      },
      {
        id: 'community-resources',
        label: 'Community Resources',
        icon: 'users',
        blurb: 'Local recovery & wellness referrals. We support the body after recovery.',
      },
    ],

    // Colon Hydrotherapy tab content
    colonHydrotherapy: {
      systems: {
        closed: 'Aqua Cleanse (Closed System)',
        open: 'Angel of Water (Open System)',
      },
      description: 'Gentle, filtered, body-temperature water via rectum; medical-grade equipment; no chemicals/drugs; 45–60 min sessions.',
      mayHelpWith: ['indigestion', 'insomnia', 'GI upset', 'cramping', 'gas'],
      firstSessionFlow: 'paperwork → Q&A → comfort-first, non-judgmental approach',
      benefits: [
        'Hydration',
        'Waste elimination',
        'Eases occasional constipation',
        'Promotes peristalsis',
        'Safe, FDA-registered equipment',
        'Colonoscopy-prep approved',
      ],
      misconceptions: {
        title: 'Common Misconceptions',
        items: [
          'Not painful',
          'No large hose',
          'No high pressure',
          'Doesn\'t deplete minerals or gut bacteria',
          'Not addictive',
          'Not messy/embarrassing',
        ],
      },
      contraindications: {
        title: 'Contraindications',
        note: 'Not a complete list — consult your healthcare provider and share your medical history with us before booking.',
        items: [
          'Abdominal hernia/recent surgery',
          'Distension',
          'Acute liver failure',
          'Anemia',
          'Aneurysm',
          'Carcinoma',
          'Cardiac conditions',
          'Crohn\'s disease',
          'Colitis',
          'Dialysis',
          'Diverticulitis/diverticulosis',
          'Fissures/fistulas',
          'Hemorrhaging',
          'Recent hemorrhoidectomy',
          'Intestinal perforation',
          'Lupus',
          'Pregnancy (1st/3rd trimester)',
          'Certain medications',
          'Recent rectal surgery',
          'Renal insufficiency',
        ],
      },
      expectations: {
        title: 'Expectations & FAQ',
        items: [
          'Realistic expectations: like gym training, results build over time',
          'Most clothing stays on',
          'Can stop anytime',
          'Sessions needed vary by individual',
          'Sanitation: I-ACT certified, single-use disposable tubes',
        ],
      },
      downloads: {
        title: 'Resources',
        items: [
          { title: 'Gut-Brain Connection', link: '/resources' },
          { title: 'History of Hydrocolon Therapy', link: '/resources' },
        ],
      },
    },

    // Ion Foot Detox tab content
    ionFootDetox: {
      description: 'Low-level DC current → electrolysis in water; ions neutralize body ions, released via skin pores.',
      duration: '30–60 min sessions',
      effects: 'Some feel effects 24–72 hrs after',
      ageLimit: 'Ages 18+',
      dealerNote: 'CCDC is an authorized Magic Ion Cleanse dealer (rent/purchase available)',
      addOn: {
        title: 'Mineralizing Protocol',
        description: 'Replenishes minerals, 30 min, stackable with other services',
      },
    },

    // BioCharger tab content
    biocharger: {
      description: 'Light & frequency therapy targeting natural energy systems; customizable programs.',
      pathways: 'Opens 6 elimination pathways: skin, lymph, lungs, kidneys, liver, colon',
      discount: 'Buy-through-CCDC discount: $1,000 off',
      // TODO: link to video demo + FAQ
      videoDemo: '#',
      faqLink: '#',
    },

    // Liver Cleanse tab content
    liverCleanse: {
      title: 'Detox Classes & Coaching',
      protocol: '3•6•9 Medical Medium Liver Cleanse (Anthony William protocol)',
      program: '9-day program: 1 consultation + 3 colonics + 3 foot detoxes',
      price: '$460',
      bookingNote: 'Book by phone, not online',
    },

    // Mineralizing Foot Soak tab content
    mineralizingSoak: {
      standalone: 'Standalone 30-min soak — $35',
      combined: 'Combined with Foot Detox — $70',
    },

    // Community Resources tab content
    communityResources: {
      disclaimer: 'CCDC supports the body after recovery — we are not a treatment provider for active addiction.',
      referrals: [
        { name: 'DenverSober.com', phone: '' },
        { name: 'The Recovery Village', phone: '' },
        { name: 'Rocky Mountain Detox', phone: '' },
        { name: 'CeDAR at UC Health', phone: '' },
        { name: 'Jóvenes Fuente De Vida', phone: '' },
        { name: 'Magnolia Medical Group', phone: '' },
        { name: 'Day At A Time Club', phone: '' },
        { name: 'Golden Peak Recovery', phone: '' },
      ],
    },
  },

  // About page
  about: {
    intro: 'At Colorado Colonics Detox Center, we believe in supporting your body\'s natural ability to heal and cleanse. Our certified colon hydrotherapists provide a comfortable, judgment-free environment where you can take control of your digestive wellness.',
  },

  // Contact page
  contact: {
    heading: 'Get in Touch',
    preferredContact: 'Phone or text is preferred over email for a faster response: (303) 505-0026',
    form: {
      name: 'Name',
      phone: 'Phone',
      email: 'Email',
      preferredMethod: 'Preferred Contact Method',
      methodOptions: ['Phone', 'Text', 'Email'],
      subject: 'Inquiry Subject',
      comment: 'Comment',
      submit: 'Send Message',
      success: 'Thank you for your message! We\'ll get back to you soon.',
    },
    cancellation: 'Please cancel by phone or text only — cancellations by email may incur a fee.',
    // TODO: wire to real backend or Formspree
    formEndpoint: '/api/contact',
  },

  // Resources page
  resources: {
    heading: 'Resources',
    description: 'Download helpful information about colon hydrotherapy and wellness.',
    downloads: [
      {
        title: 'Gut-Brain Connection',
        description: 'Learn about the connection between gut health and mental wellness.',
        // TODO: attach real file
        url: '#',
      },
      {
        title: 'History of Hydrocolon Therapy',
        description: 'Explore the historical context of colon hydrotherapy.',
        // TODO: attach real file
        url: '#',
      },
    ],
  },
};
