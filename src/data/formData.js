
export const boende2026 = [
    {
        season: 'sommar',
        startDate: '2026-05-24',
        endDate: '2026-09-30',
        boendeTypes: [
            {
                boLabel: 'Del av Dubbelrum (1500 kr)',
                boValue: '1500',
                boID: 'del-dubbel',
                boPris:  1500,
            },
            {
                boLabel: 'Enkeltrum (1950 kr)',
                boValue: '1950',
                boID: 'enkelt',
                boPris:  '1950',
            },
            {
                boLabel: 'Hel Lägenhet',
                boValue: '0',
                boID: 'apartment',
                boPris: 0,
            },
            {
                boLabel: 'Jag har eget Boende',
                boValue: '0',
                boID: 'eget',
                boPris: 0,
            },
        ]
    },
    {
        season: 'vinter',
        startDate: '2026-02-01',
        endDate: '2026-05-03',
        boendeTypes: [
            {
                boLabel: 'Del av Dubbelrum (1500 kr)',
                boValue: '1500',
                boID: 'del-dubbel',
                boPris:  1500,
            },
            {
                boLabel: 'Enkeltrum (2200 kr)',
                boValue: '2200',
                boID: 'enkelt',
                boPris:  '2200',
            },
            {
                boLabel: 'Hel Lägenhet',
                boValue: '0',
                boID: 'apartment',
                boPris: 0,
            },
            {
                boLabel: 'Jag har eget Boende',
                boValue: '0',
                boID: 'eget',
                boPris: 0,
            },
        ]
    },
  


];

export const flygbehorighet = [
    {
        licLabel: 'Bergsbehörighet', 
        licID: 'berg',
        licValue: 'Bergsbehörighet',
    },
     {
        licLabel: 'Hangbehörighet', 
        licID: 'hang',
        licValue: 'Hangbehörighet',
    },
     {
        licLabel: 'Termikbehörighet', 
        licID: 'termik',
        licValue: 'Termikbehörighet',
    },
     {
        licLabel: 'Bogserbehörighet', 
        licID: 'bogser',
        licValue: 'Bogserbehörighet',
    },
];

export const  grundKurser = [
    {
        kursLabel: 'Grundkurs',
        kursValue: '4500',
        kursID: 'grund',
        kursPris: '4500',
        kursComment: 'no comment',
    },
 
  
];

export const  fortsattningsKurser = [
    {
        kursLabel: 'Bergsbehörighet',
        kursValue: '4500',
        kursID: 'berg',
        kursPris: '4500',
        kursComment: 'Inträdeskrav = Studentlicens',
    },
    {
        kursLabel: 'Termik',
        kursValue: '4000',
        kursID: 'termik',
        kursPris: '4000',
        kursComment: 'Inträdeskrav = Pilot 1 och minst 50 flyg',
    },
    {
        kursLabel: 'Samla flyg',
        kursValue: '4500',
        kursID: 'samla',
        kursPris: '4500',
        kursComment: 'Inträdeskrav = Studentlicens',
    },
    {
        kursLabel: 'Pilot 1',
        kursValue: '4500',
        kursID: 'p1',
        kursPris: '4500',
        kursComment: 'Inträdeskrav = Studentlicens och minst 50 höjdflyg totalt',
    },
    {
        kursLabel: 'Pilot 2',
        kursValue: '4500',
        kursID: 'p2',
        kursPris: '4500',
        kursComment: 'Inträdeskrav = Pilot 1 med samtliga behörigheter',
    },
    {
        kursLabel: 'Hangbehörighet',
        kursValue: '4500',
        kursID: 'hang',
        kursPris: '4500',
        kursComment: 'Inträdeskrav = Studentlicens',    
    },
];