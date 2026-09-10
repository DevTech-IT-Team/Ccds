// Site-wide content - all copy lives here for easy updates

export const siteContent = {
  // Business basics
  business: {
    name: 'Colorado Colonics',
    tagline: 'Clean from the inside out.',
    shortName: 'CCDC',
    address: '3597 S Pearl St, Suite 101, Englewood, CO 80113',
    phone: '(303) 505-0026',
    phoneLink: 'tel:3035050026',
    bookingUrl: 'https://app.shamrok.com/book/colorado-colonics',
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
      // {
      //   id: 'liver-cleanse',
      //   label: 'Liver Cleanse',
      //   icon: 'leaf',
      //   blurb: '9-day Medical Medium 3•6•9 protocol — consultation, colonics & foot detoxes.',
      // },
      {
        id: 'mineralizing-soak',
        label: 'Mineralizing Foot Soak',
        icon: 'sparkles',
        blurb: 'Replenishing 30-min mineral soak. Standalone or stacked with detox sessions.',
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
        note: 'Contraindication: a condition which makes a particular treatment or procedure potentially inadvisable. MEDICAL DIAGNOSIS CONCERNS: Please call us with questions at (303) 505-0026. We are happy to answer your questions and if necessary refer you to a qualified healthcare professional.',
        items: [
          { name: 'Abdominal Hernia', description: 'The part of an internal organ that pushes through an opening in the organ\'s wall.' },
          { name: 'Abdominal Surgery', description: 'After recent abdominal surgery - since the administering of this procedure initiates peristalsis and the use of the abdominal muscles - this procedure may aggravate sutures and the healing of the incision. A minimum of 12 weeks should pass after surgery and must be prescribed by physician.' },
          { name: 'Abnormal Distension/Masses', description: 'Distension – Bloating or swelling of the abdomen.' },
          { name: 'Acute Liver Failure', description: 'A disorder that is sudden and severe but lasts only a short time.' },
          { name: 'Anemia', description: 'Not enough red blood, red blood cells, or hemoglobin in the body.' },
          { name: 'Aneurysm', description: 'A bulging out of part of the wall of a blood vessel.' },
          { name: 'Carcinoma', description: 'Cancer of any type.' },
          { name: 'Cardiac Condition', description: 'Cardiac surgery or heart condition such as uncontrolled hypertension of congestive heart failure, or other heart conditions.' },
          { name: 'Crohn\'s Disease', description: 'Causes inflammation in the small intestine. The inflammation can cause pain and can make the intestines empty frequently, resulting in diarrhea.' },
          { name: 'Colitis', description: 'Irritation of the colon.' },
          { name: 'Dialysis Patients', description: 'Filtering of the blood to assist the kidneys.' },
          { name: 'Diverticulitis', description: 'Inflammation or infection of small pouches in the colon called diverticula that develop along the walls of the colon.' },
          { name: 'Diverticulosis', description: 'A condition in which a small, bulging pouches develop in the digestive tract.' },
          { name: 'Fissures/Fistulas', description: 'An anal fissure is a narrow tear that extends from the muscles that control the anus (sphincters) up into the anal canal. These tears usually develop when anal tissue is damaged during a hard bowel movement or when higher-than-normal tension develops in the anal sphincters.' },
          { name: 'Hemorrhaging', description: 'When a client/user has a flow of bright red from the rectum/anus.' },
          { name: 'Hemorrhoidectomy', description: 'A surgical procedure to remove hemorrhoids. A Doctor\'s Release should be obtained a minimum of 12 weeks after removal of hemorrhoids.' },
          { name: 'Intestinal Perforation', description: 'A hole/rupture.' },
          { name: 'Lupus', description: 'An autoimmune disease in which a person\'s immune system attacks various organs or cells of the body. Lupus Patients have been noted to have colon perforations occur from the disease and the use of colonic irrigation/enemas can irritate the colon/bowel further.' },
          { name: 'Pregnancy', description: 'Colonic irrigation/enemas are contraindicated during the first and the last trimester of pregnancy. May be prescribed by OB/GYN Physician as an enema prior to childbirth.' },
          { name: 'Prescription Medication Concerns', description: 'If a Physician has ever diagnosed you with any intestinal conditions, or if you have been on any medications which may weaken your intestinal walls, you should obtain a doctor\'s release or a prescription for a colon hydrotherapy session. If you are currently taking medication for any condition diagnosed by a Physician, you should check with your Physician to ensure the medication will not interfere with the additional water intake and absorption through the rectum.' },
          { name: 'Rectal Surgery', description: 'After recent rectal surgery. Must be prescribed after a minimum of 12 weeks.' },
          { name: 'Renal Insufficiencies', description: 'Insufficient excretion of wastes by the kidneys.' }
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
      // New Content for Redesign
      introText: [
        "Colon hydrotherapy gently bathes the colon with filtered, body temperature water utilizes a safeguard principle of gentle infusion of water into the colon via the rectum with medical grade equipment. No chemicals or drugs are involved and the entire therapy session is both relaxing and effective. Sessions are typically 45 minutes to an hour. We have both a closed system using the Aqua Cleanse equipment and an open system with the Angel of Water.",
        "Common symptoms or conditions that Colon Hydrotherapy can help with include indigestion, insomnia, gastrointestinal upset, indigestion, cramping, and gas. There are many other symptoms that Colon Hydrotherapy can help with. To find out more or discuss your situation, please contact us."
      ],
      whatToExpect: {
        title: "What should I expect for my first Colon Hydrotherapy session?",
        text: "After filling out the necessary paperwork, you will have a brief Q&A with our resident colon hydrotherapist. This is for us to understand your life (where you grew up), lifestyle (how do you eat, sleep, exercise), and to get to know you as a person. We encourage you to ask us as many questions as you need in order to understand who we are, why we're here, and the process of the session. Your comfort and trust are paramount to us because the more comfortable you feel, the better you will release. Talking also helps you release. We hold your experience in the highest regard and honor your privacy. Be normal, be yourself. Eat normal, dress comfortably. The less amount of stress you place on your body and mind, the better you will feel. We are only here to help, not judge. We love and honor your beautiful body; this is the best gift you could ever give yourself for your health and wellness."
      },
      esseneQuote: {
        title: "What did Essenes say about Colon Hydrotherapy?",
        text: "In the Essene Gospel of Peace Book 1, it is written: “After the angel of air, seek the angel of water. Put off your shoes and your clothing and suffer the angel of water to embrace all your body. Cast yourselves wholly into his enfolding arms, and as often as you move the air with your breath, move with your body the water also. I tell you truly, the angel of water shall cast out of your body all uncleannesses which defiled it without and within. And all unclean and evil-smelling things shall flow out of you, even as the uncleannesses of garments washed in water flow away and are lost in the stream of the river. that’s just the intro, the instructions are after in that one page: “seek therefore a large trailing gourd”"
      }
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
      contraindications: {
        title: 'Contraindications',
        note: 'Please provide the contraindications for Ion Foot Detox.',
        items: ['Placeholder 1', 'Placeholder 2']
      }
    },

    // BioCharger tab content
    biocharger: {
      description: 'Light & frequency therapy targeting natural energy systems; customizable programs.',
      pathways: 'Opens 6 elimination pathways: skin, lymph, lungs, kidneys, liver, colon',
      discount: 'Buy-through-CCDC discount: $1,000 off',
      // TODO: link to video demo + FAQ
      videoDemo: '#',
      faqLink: '#',
      contraindications: {
        title: 'Contraindications',
        note: 'Please provide the contraindications for BioCharger.',
        items: ['Placeholder 1', 'Placeholder 2']
      }
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
    intro: 'At Colorado Colonics, we believe in supporting your body\'s natural ability to heal and cleanse. Our certified colon hydrotherapists provide a comfortable, judgment-free environment where you can take control of your digestive wellness.',
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
    description: 'Explore our collection of motivating documentaries and informative wellness blogs.',
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
    blogs: [
      {
        title: 'Glyphosate: The Whole Story and an Urgent Call to Action',
        date: '6/3/2025',
        image: 'glyphosate',
        excerpt: 'While many suffering from chronic inflammatory, digestive, and neurological symptoms find relief through eating a gluten-free diet, research has shown us repeatedly that glyphosate and other toxic chemicals cannot be ignored...',
        content: [
          {
            text: 'While many suffering from chronic inflammatory, digestive, and neurological symptoms find relief through eating a gluten-free diet, research has shown us repeatedly that glyphosate and other toxic chemicals cannot be ignored as agents of chronic dis-health. And when combined, in an effort to quickly and cleanly harvest wheat, gluten and glyphosate have the potential to deliver a double whammy to overall health and wellbeing. The good news is that consumer pressure is an enormous motivator for change.',
          },
          {
            heading: 'Humans & Detoxifying',
            text: 'Humans have found a way to detoxify their bodies in all civilizations for thousands of years. From the beginning fasting and sweat lodges were instinctively known to help. When we listen to those signals from the body to fast, cleanse, rejuvenate, and renew we are honoring our bodies for the communication we\'re given. Colorado Colonics & Detox Center can help you to listen, honor, and assist your body with good solutions. If you\'re wondering whether it\'s time for you to detox, take a look at some of the Signs of Toxicity and do your own evaluation. If you have questions, call or come in for a consultation. We\'re here to help.',
          },
          {
            heading: 'Potential Contaminants',
            text: 'If you consume (topical or oral) any of the following items, you may be using potential contaminants: Food additives, Pesticide residues, Makeup, Pharmaceutical and over the counter medications, Fragrances, Underarm deodorant, Hair care products. We urge you to read the labels. Most products sold in stores have some of the most harmful ingredients. If you don\'t know what an ingredient is, look it up. This goes for anything you purchase in a package.',
          },
          {
            heading: 'Signs of Toxicity',
            text: 'Low on energy, Allergies, Mood Swings, Fluid Retention/Bloating, Gas, Pain/Chronic Pain, Food Cravings, Sensitivity to smell(s), Irritability, Panic Attacks, Depression, Brain Fog, Poor Immunity, Digestive Issues, Poor Nutrition, Joint Pain, Migraines, Consuming Fast Food/Packaged Food, Inflammation, Skin Conditions/Eruptions, Acid Reflux, Achy Joints.',
          },
          {
            heading: 'Eliminating Toxins',
            text: 'The number one way to eliminate toxins is through breathing, second is through the skin. The lymphatic system is also used to move contaminants out by the organs such as the lungs, liver, kidney, bladder, pancreas, gallbladder, colon (small and large intestines). These areas of the body are the first to show the signs of inflammation and accumulated toxicity. This is why the detoxification and cleansing of our body is important to our overall health and well being.',
          },
          {
            text: 'The earth goes through seasonal changes and creates cleansing cycles. If we are aware of our toxicity, regular cleansing can have many benefits such as: relief from constipation, removal of toxin build up, rejuvenate & energize on a cellular level, enhanced nutrient absorption, removal of heavy metals, increased blood flow, increased oxygen, relief from inflammation and pain, better sleep, and reduced stress. We can help you take some very important steps to regain health and helping to identify the root cause of your symptoms.',
          }
        ],
        link: '/blog/glyphosate',
      },
      {
        title: 'CCDC Supports YANA!',
        date: '8/8/2022',
        image: 'yana',
        excerpt: 'CCDC was thrilled to help support the mission of YANA and Nikki Brooker’s mission of helping new moms! Thank you to everyone who came to visit us...',
        content: [
          {
            text: 'CCDC was thrilled to help support the mission of YANA and Nikki Brooker’s mission of helping new moms!'
          },
          {
            text: 'Thank you to everyone who came to visit us, it was so lovely to see all of your beautiful faces there!'
          }
        ],
        link: '/blog/ccdc-supports-yana',
      },
      {
        title: 'From Alternative Daily',
        date: '7/14/2022',
        image: 'alternativeDaily',
        excerpt: 'Your FARTS: 3 things they are telling you. Farts can be a little embarrassing at times, but they are obviously a natural part of life and digestion...',
        content: [
          {
            heading: 'Your FARTS: 3 things they are telling you',
            text: 'Farts can be a little embarrassing at times, but they are obviously a natural part of life and digestion. Some people find them funny, and some people find them gross, but they\'re all a part of natural digestion. In today\'s blog, we will look at what causes farts, and what those farts might be telling you about your health...'
          },
          {
            heading: 'Digestive Trick to Clean Out Your Bowels:',
            text: 'We’ve been told our whole lives to eat lots of fruits, veggies, and whole grains to stay healthy. However, according to Dr. Steven Gundry — a world-renowned heart surgeon — many of the so-called “health foods” in our diets actually contain a harmful toxin that could be expanding your waistline.'
          },
          {
            text: '“This nasty toxin can rip tiny tears throughout your entire gut lining,” says Dr. Gundry. “This then allows harmful bacteria and waste products to seep into your bloodstream and wreak havoc on your body.”'
          },
          {
            text: 'Today, new research shows this common affliction is currently affecting millions of people nationwide. The common warning signs include fatigue, digestive discomfort, weight gain, brain fog, achy joints, tired muscles, and sometimes even skin problems.'
          },
          {
            text: '“These common health problems are often mistaken as normal signs of getting older,” explains Dr. Gundry. “But I can assure you, the harm caused by this little-known toxin is far from normal.”'
          },
          {
            text: 'The good news is, this problem can easily be fixed at home. “It’s very simple, you just have to know which foods are actually healthy, and which foods contain this hidden toxin,” explains Dr. Gundry. By simply eliminating this toxin, he has seen thousands of his own patients achieve remarkable turnarounds. (In fact, he even lost 70lbs himself and has kept the weight off ever since.) Now, after years of research, Dr. Gundry has decided to release a short video to the public — free and uninterrupted — showcasing exactly which foods you and your loved ones should avoid.'
          },
          {
            text: '“Our health is our greatest gift,” he explains. “So if this video helps people look better and feel better, I’m thrilled to be of service.”'
          },
          {
            text: 'The video has since gone viral, first being shared by users on Facebook, then being featured on news sites like ABC and CBS. So far, the comments and feedback have been encouraging, with thousands of Americans feeling better than they have in decades.'
          },
          {
            text: 'Dr. Gundry also serves as the personal physician to many A-list celebrities. Most notable of which include legendary self-help guru Tony Robbins, Academy Award-winning actor Alan Arkin, Grammy Award-winning singer Usher, and countless Fortune 500 executives. But you don’t have to be a celebrity to look and feel better using the tips in this video.'
          },
          {
            text: 'There’s just one thing Dr. Gundry asks from his viewers: “If watching this helps you take control of your weight, increase your energy, ease gas and bloating, or find relief from stiff, achy joints… then please consider sharing this video with your loved ones at some point. Because together, we can help as many people as possible avoid these frustrating health issues.”'
          }
        ],
        link: '/blog/from-alternative-daily',
      },
      {
        title: 'On the town with CCDC - Poo-Poo Putt Putt',
        date: '6/2/2022',
        image: 'poopoo',
        excerpt: 'Join us for a fun outing with the CCDC team at Poo-Poo Putt Putt!',
        content: [
          {
            text: 'See what we did on the town with CCDC at Poo-Poo Putt Putt!'
          }
        ],
        link: '/blog/on-the-town-with-ccdc-poo-poo-putt-putt',
      },
      {
        title: 'Melani Hagans Presentation - Visit to CCDC',
        date: '12/9/2020',
        excerpt: 'Highlights and presentation notes from Melani Hagans\' wonderful visit to Colorado Colonics.',
        content: [
          {
            text: 'Highlights and presentation notes from Melani Hagans\' wonderful visit to Colorado Colonics.'
          }
        ],
        link: '/blog/melani-hagans-presentation-visit-to-ccdc',
      },
      {
        title: 'How to get rid of puffy eyes...by Lisa Smith',
        date: '1/16/2020',
        excerpt: 'Puffiness and Dark Circles under the eyes is an indication of toxins the body can’t process. The best, most permanent way to correct skin inflammation...',
        content: [
          {
            text: 'Puffiness and Dark Circles under the eyes is an indication of toxins the body can’t process. The best, most permanent way to correct skin inflammation or dark circles from the eyes is to remove the toxins from the liver and kidneys.'
          },
          {
            heading: 'Here’s why:',
            text: 'The skin is the largest organ of the body. There are thousands of harmful chemicals out there to help us look our best. Unfortunately, those chemicals must be processed by the liver and kidneys. What most people don’t understand is that a cover-up, even a “natural” one is only a band-aid.'
          },
          {
            text: 'The skin is the window or mirror to the internal organs. When we have dark circles or age spots, this is from toxins the liver or kidneys can’t eliminate and sends these toxins to the skin for storage. Remember when you were a kid and asked Grandma what the spots were on her hands?'
          },
          {
            text: 'She would tell you they were liver spots. She was right. We’ve just updated the word to be more politically correct to “age spots” and “sun spots”.'
          },
          {
            heading: 'Have you ever wondered why women tend to age faster than men?',
            text: 'Men, on average use 5-7 products a day: shampoo, soap, aftershave or cologne, deodorant. Women are an easy sell for makeup, skin care products, perfume, lotions, creams, gels, deodorant, shampoo, conditioner, hair products – twice the chemicals that man use daily. This promotes aging because our bodies are inundated with chemicals.'
          },
          {
            text: 'We must go back to basics, learn how to effectively remove these chemicals from our environment and understand that we can use other things for soft skin, and radiant hair. We don’t have body odor if we’re eating the best foods and cleaning our bodies from the inside out.'
          },
          {
            text: 'This is not a new concept. For centuries many cultures and religions have integrated cleansing as common practice and rituals. Detoxification doesn’t have to be difficult. However, it can be life changing.'
          },
          {
            text: 'Our health and our planet are too important to destroy with these increasingly harmful toxins.'
          }
        ],
        comments: [
          {
            author: 'Derek Russell',
            date: '10/9/2022 05:17:11 pm',
            text: 'Chair traditional provide decision action knowledge. Decision recognize military medical experience need fund. Born idea charge performance.',
            link: 'http://rallyteamwalraven.nl/file/kixate.pdf'
          }
        ],
        link: '/blog/how-to-get-rid-of-puffy-eyes',
      },
      {
        title: 'The Influence of Colonic Irrigation on Human Intestinal Microbiota',
        date: '1/16/2020',
        excerpt: 'It has been documented that the intestinal tract is inhabited by more than 1012 bacterial cells per gram of dry matter...',
        content: [
          {
            heading: 'Introduction',
            text: '"It has been documented that the intestinal tract is inhabited by more than 1012 bacterial cells per gram of dry matter (Hayashi et al., 2002a; Langendijk et al., 1995; Suau et al., 1999), which is comprised of an estimated 400 to 500 bacterial species (Moor & Holdeman, 1974). The composition and activities of the indigenous intestinal microbiota are of paramount importance in human immunity, nutrition, and pathological processes, and therefore, the health of the individual (Van der Waaij et al., 1971)."'
          },
          {
            text: '"It is well established that the intestine is an important site of local immunity, and recent reports have suggested that it is a major site of extrathymic T cell differentiation (Cerf-Bensussan et al., 1985; Guy-Grand et al., 1991; Iiai eta al., 2002; Uchiyama-Tanaka, 2009). Numerous activated and quiescent lymphocytes are produced within gut-associated lymphatic tissues (GALT), such as Peyer’s patches (Takahashi et al., 2005). Thus, it has been speculated that people who suffer from constipation and who harbor fecal residues in the intestine may have decreased local immune system function."'
          },
          {
            text: '"Colonic irrigations referred to as a colonics are a type of colonic hydrotherapy performed using an instrument in combination with abdominal massage, but without drugs or mechanical pressure. I previously reported that colonic irrigation may induce lymphocyte transmigration from GALT into the circulation, which may improve the functions of both the colon and immune system (Uchiyama-Tanaka, 2009)."'
          },
          {
            text: '"Colonic irrigation was developed about 40 years ago and no serious complications associated with its use have been reported. However, the impact of this method, which use a large amount of water, on the intestinal microbiota and serum electrolytes remains unknown. In this study, colonic irrigations were performed 3 times for each of the 10 subjects with no history of malignant or inflammatory disease."'
          }
        ],
        pdfLink: 'https://45791d12-dd03-4107-9b9a-cd93605951d3.filesusr.com/ugd/b0dc04_4fc3efa6f9514e28a1404f485cd2d72d.pdf',
        comments: [
          {
            author: 'Colon Hydrotherapy',
            date: '9/3/2020 11:17:46 pm',
            text: 'Colon irrigation or colon hydrotherapy is such a simple, yet amazing process. It is putting backwater into our bodies , hydrating us and most importantly it cleans out the garbage stuck to the colon! Through the Colon Hydrotherapy procedure, harmful toxins will be removed from the body preventing them from infesting the blood and degrading internal functions.',
            link: 'https://mergemedicalcenter.com/services/colon-hydrotherapy/'
          }
        ],
        link: '/blog/the-influence-of-colonic-irrigation-on-human-intestinal-microbiota',
      },
      {
        title: 'Colonic Irrigations: A Review of the Historical Controversy and Potential for Adverse Effects',
        date: '1/16/2020',
        excerpt: 'by Douglas G. Richards, Ph.D., David L. McMillin, M.A., Eric A. Mein, M.D., Carl D. Nelson, D.C. Introduction: Colonic irrigations enjoy widespread popularity...',
        content: [
          {
            text: 'by Douglas G. Richards, Ph.D., David L. McMillin, M.A., Eric A. Mein, M.D., Carl D. Nelson, D.C.'
          },
          {
            heading: 'Introduction:',
            text: '"Colonic irrigations enjoy widespread popularity in the alternative medicine community, while being viewed with considerable skepticism by the conventional medical community. The medical objections include a belief that scientific research has proven that colonics are not effective therapy, and that they pose a high risk of serious adverse effects (e.g., infection, perforation of the wall of the colon) (Ernst, 1997). Furthermore there is a concern that those administering colonics are primarily unlicensed, non-medical practitioners who make exaggerated claims of health benefits, “quacks” (Barrett, 2004; Jarvis, 2004). Our interest arose from the need for information on the safety and efficacy of colonics for informed consent for clinicians and researchers. We found that there is very little information on either the safety or efficacy of colonic irrigations, and that modern sources have not addressed the historical debate among medical professionals."'
          }
        ],
        pdfLink: 'https://45791d12-dd03-4107-9b9a-cd93605951d3.filesusr.com/ugd/b0dc04_b76452f50dba426e88f34411431dcdd9.pdf',
        link: '/blog/colonic-irrigations-historical-controversy',
      },
      {
        title: 'Value of Colon Hydrotherapy by Morton Walker, DPM',
        date: '1/16/2020',
        excerpt: 'The International Association for Colon Hydrotherapy has a great article on the value of colon hydrotherapy which was verified by medical professionals...',
        content: [
          {
            text: 'The International Association for Colon Hydrotherapy has a great article on the value of colon hydrotherapy which was verified by medical professionals.'
          },
          {
            text: '"From the signal stage of history surrounding ancient Egypt, practices of colon hydrotherapy in their most basic form – enemas or clysters – have provided people with internal cleansings adjunctive to their personal external hygiene. The Ebers Papyrus, from the 14th century BC prescribes internal cleansing for no less than twenty stomach and intestinal complaints."'
          }
        ],
        pdfLink: 'https://45791d12-dd03-4107-9b9a-cd93605951d3.filesusr.com/ugd/b0dc04_62e8965b8ca34139aa58f5246b930fc2.pdf',
        link: '/blog/value-of-colon-hydrotherapy',
      }
    ],
    documentaries: [
      { name: 'Forks Over Knives', link: 'https://www.forksoverknives.com/' },
      { name: 'Food Matters/Hungry for Change', link: 'https://www.hungryforchange.tv/' },
      { name: 'Food, Inc.', link: null },
      { name: 'Fat, Sick, and Nearly Dead', link: null },
      { name: 'Fed Up', link: null },
      { name: 'Simply Raw', link: null },
      { name: 'The China Study', link: null },
      { name: 'The Green Smoothie Girl', link: 'https://greensmoothiegirl.com/' },
      { name: 'HEAL', link: null },
      { name: 'GMO OMG', link: null },
      { name: 'Plant Pure Nation', link: null },
      { name: 'The Human Experiment', link: 'https://www.youtube.com/watch?v=GAMy4OwURck' },
      { name: 'May I be Frank', link: null },
      { name: 'Sugar Coated', link: null },
      { name: 'Farmageddon', link: 'https://farmageddonmovie.com/' },
      { name: 'Vegucated', link: null },
      { name: 'Eating You Alive', link: 'https://www.eatingyoualive.com/' },
      { name: 'Fast Food Nation', link: null },
      { name: 'Earthlings', link: null },
      { name: 'Live and Let Live', link: null },
      { name: 'Cowspiracy', link: null },
      { name: 'Peaceable Kingdom', link: null },
      { name: 'You Can Heal Your Life', link: null },
      { name: 'The Gerson Miracle', link: null },
      { name: 'The Sugar Film', link: null },
      { name: 'Genetic Roulette', link: 'https://geneticroulettemovie.com/' },
      { name: 'Super-Size Me', link: null },
      { name: 'Sweet Misery', link: null },
      { name: 'Frakensteer', link: null },
      { name: 'E-Motion', link: 'https://www.e-motionthemovie.com/' },
      { name: 'The Devil We Know', link: null },
      { name: 'The Future of Food', link: 'https://www.thefutureoffood.com/' },
      { name: 'Game Changers', link: 'https://gamechangersmovie.com/' },
    ]
  },
};
