// Pricing data structured for easy updates

export const pricingData = {
  colonHydrotherapy: {
    title: 'Colon Hydrotherapy',
    note: 'Packages valid 12 months; no cash value; must schedule in advance.',
    items: [
      { package: 'Initial Session (new clients: consult + session)', price: '$190', length: '90 min' },
      { package: 'Single Follow-Up (existing clients)', price: '$145', length: '30–45 min' },
      { package: '3-Pack', price: '$400', length: '' },
      { package: '6-Pack', price: '$690', length: '' },
    ],
  },

  ionFootDetox: {
    title: 'Ion Foot Detox',
    items: [
      { package: 'Initial (consult + 30 min)', price: '$85', length: '' },
      { package: 'Single session (no consult)', price: '$50', length: '' },
      { package: '3 sessions', price: '$160', length: '' },
      { package: '6 sessions', price: '$275', length: '' },
      { package: 'Couple\'s (2)', price: '$105/couple', length: '' },
      { package: 'Group of 3', price: '$120', length: '' },
      { package: 'Add-on to a colonic', price: '$35', length: '' },
    ],
  },

  biocharger: {
    title: 'BioCharger',
    items: [
      { package: 'Single session (1 hr)', price: '$90', length: '' },
      { package: '+30 min add-on', price: '$50', length: '' },
      { package: 'Add-on to colonic', price: '$70', length: '' },
      { package: 'Couple\'s (2)', price: '$170', length: '' },
      { package: 'Group of 3', price: '$260', length: '' },
      { package: 'Group of 4', price: '$320', length: '' },
      { package: 'Group of 5', price: '$400', length: '' },
      { package: 'Group of 6', price: '$460', length: '' },
      { package: '3-pack', price: '$260', length: '' },
      { package: '6-pack', price: '$460', length: '' },
      { package: '10-pack', price: '$745', length: '' },
    ],
  },

  other: {
    title: 'Other Services',
    items: [
      { package: 'Mineralizing Foot Soak (alone)', price: '$35', length: '' },
      { package: 'Mineralizing Foot Soak (combined w/ foot detox)', price: '$70', length: '' },
      { package: 'Date Night Package (2 Foot Detox + 2 Colon Hydrotherapy, couples, existing clients, 2.5 hrs)', price: '$444', length: '' },
      { package: 'Liver Cleanse 3•6•9 (9-day program)', price: '$460', length: '' },
    ],
  },
};
