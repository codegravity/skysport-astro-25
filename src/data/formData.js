
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
                boLabel: 'Enkelrum (1950 kr)',
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
                boLabel: 'Enkelrum (2200 kr)',
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
        kursValue: '9500',
        kursID: 'grund',
        kursPris: '9500',
        kursComment: 'OBS! Det tillkommer en kostnad på 200 kr för varje höjdflyg detta betalas vid kursavslut. I detta pris ingår utrustning och instruktör. Under kursen gör man 1-10 st höjdflyg. Det tillkommer också transport till startplatser på berget, 80 kr/st med bil och 185 kr/st med lift. Innan man börjar kursen, måste man också teckna ett "Take off kit" hos SSFF. Det kostar 2.020 kr (för kalenderår 2025) och inkluderar försäkring, medlemskap i SSFF och licensavgift. Mera information om Take off kit får du när du har bokat kursen.',
    },
 
  
];

export const  speedKurser = [
    {
        kursLabel: 'Speedkurs 1 dag',
        kursValue: '3500',
        kursID: 'oneDay',
        kursPris: '3500',
        kursComment: 'I priserna ingår instruktör och utrustning.',
    },
    {
        kursLabel: 'Speedkurs 2 dagar',
        kursValue: '5900',
        kursID: 'twoDay',
        kursPris: '5900',
        kursComment: 'I priserna ingår instruktör och utrustning.',
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

export const  resor = [
    {   resDestinationLand: 'Turkiet',
        resDestinationPlats: 'Ölüdeniz',
        resAnhorigaPris: 4900,
        resAnhorigaPrisLabel: 'per pers.',
        resAnhorigaComment: 'Ta med dina anhöriga på resan (ej skärmflygare) så går det bra. De betalar då 4.900 kr. I det priset ingår: transfer, boende inkl frukost.',
        rescheckbox: [
            {
                resLabel: '17 - 24 Maj Ölüdeniz SIV',
                resValue: '16800',
                resID: 'turkietMaj',
                resPris: '16800',
                resComment: 'Resan kostar 16 800 kr ( SIV kurs 3 dagar är inkluderad i priset) I det priset ingår transfer, boende på hotell med pool och frukost, all transport upp på berget, samt flygguidning (2 instruktörer).',
            },
            {
                resLabel: '20 - 27 Sept Ölüdeniz ',
                resValue: '12800',
                resID: 'turkietSept',
                resPris: '12800',
                resComment: 'Resan kostar 12 800 kr ( ingen SIV kurs ) I det priset ingår transfer, boende på hotell med pool och frukost, all transport upp på berget, samt flygguidning (2 instruktörer). Boende i dubbelrum. Enkelrum mot tillägg 1.900 kr.',
            },
           /*  {
                resLabel: '20 - 27 Sept Ölüdeniz SIV',
                resValue: '16800',
                resID: 'turkietSeptSIV',
                resPris: '16800',
                resComment: 'Resan kostar 16 800 kr ( inkl SIV kurs ) Vill du ej gå SIV kursen, utan endast flyga, är priset 12.8000 kr I priset ingår transfer, boende på hotell med pool och frukost, all transport upp på berget, samt flygguidning (2 instruktörer). Boende i dubbelrum. Enkelrum mot tillägg 1.900 kr.',
            }, */
        ],
    },
];