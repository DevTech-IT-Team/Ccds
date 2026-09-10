// Pricing data structured for easy updates

export const pricingData = {
  colonHydrotherapy: {
    title: 'Colon Hydrotherapy Pricing',
    bookingLink: 'https://app.shamrok.com/book/colorado-colonics',
    bookingText: 'Book an Appointment',
    note: '** Must be used or shared within 12 months of purchase. No refunds after services begin. If shared, there is a $45.00 initial consultation fee. No cash value. Must be scheduled in advance.',
    items: [
      {
        package: 'Initial Colon Hydrotherapy Session (Consultation + Session)',
        price: '$190',
        length: '90 min',
        desc: '✦ For new clients only. This service includes a consultation, the $45 intake fee, and one colonic session on the Closed or Open systems.',
      },
      {
        package: 'Single Follow-Up Colon Hydrotherapy Session',
        price: '$145',
        length: '30-45 min',
        desc: '✦ For existing clients only. Valid on the Closed or Open systems.',
      },
      {
        package: '(3) Colon Hydrotherapy Package **',
        price: '$400',
        length: '30-45 min',
        desc: '✦ For existing clients only. This can be purchased after the Initial Colon Hydrotherapy Session.',
      },
      {
        package: '(6) Colon Hydrotherapy Package **',
        price: '$690',
        length: '30-45 min',
        desc: '✦ For existing clients only. This can be purchased after the Initial Colon Hydrotherapy Session.',
      },
    ],
  },

  ionFootDetox: {
    title: 'Ion Foot Detox Pricing',
    bookingLink: 'https://app.shamrok.com/book/colorado-colonics',
    bookingText: 'Book an Appointment',
    note: '** If combined with a Colonic, session price is $35.00. Must be used or shared within 12 months of purchase. No refunds after services begin. If shared, there is a $45.00 initial consultation fee. No cash value. Must be scheduled in advance.',
    items: [
      {
        package: 'Initial Foot Detox Session **',
        price: '$85',
        length: '1 hr',
        desc: '✦ Includes a Consultation + a 30 minute Foot Detox Session',
      },
      {
        package: 'Single Session Only (No Consultation)',
        price: '$50',
        length: '45 mins/session',
      },
      {
        package: '(3) Foot Detox Sessions',
        price: '$160',
        length: '45 mins/session',
      },
      {
        package: '(6) Foot Detox Sessions',
        price: '$275',
        length: '45 mins/session',
      },
      {
        package: "Couple's Foot Detox (2)",
        price: '$105 per Couple',
        length: '1 hr',
      },
      {
        package: 'Group Foot Detox (Groups of 3)',
        price: '$120',
        length: '1 hr',
      },
    ],
  },

  biocharger: {
    title: 'BioCharger Pricing',
    bookingLink: 'https://app.shamrok.com/book/colorado-colonics',
    bookingText: 'Book an Appointment',
    note: '** Add-on to an existing purchase. Must have purchased a foot detox, single colon hydrotherapy session, or package of sessions. Must be used or shared within 12 months of purchase. No refunds after services begin. If shared, there is a $45.00 initial consultation fee. No cash value. Must be scheduled in advance.',
    items: [
      {
        package: 'BioCharger Session **',
        price: '$90',
        length: '1 hr',
        desc: '✦ + $50 for an additional 30 minutes',
      },
      {
        package: '3-Pack BioCharger Sessions',
        price: '$260',
        length: '1 hr',
      },
      {
        package: '6-Pack BioCharger Sessions',
        price: '$460',
        length: '1 hr',
      },
      {
        package: '10-Pack BioCharger Sessions',
        price: '$745',
        length: '1 hr',
      },
    ],
  },

  other: {
    title: 'Other Services',
    items: [
      { package: 'Mineralizing Foot Soak (alone)', price: '$35', length: '' },
      { package: 'Mineralizing Foot Soak (combined w/ foot detox)', price: '$70', length: '' },
      { package: 'Date Night Couple\'s Package (2 Foot Detox + 2 Colonics)', price: '$444', length: '2hr 30min' },
      // { package: 'Liver Cleanse 3•6•9 (9-day program)', price: '$460', length: '' },
    ],
  },
};
