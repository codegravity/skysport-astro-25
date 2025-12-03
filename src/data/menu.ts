// src/data/menu.ts

export const headerMenu = [
    { name: 'HEM', link: '/' },

    { name: 'KURS', link: '/KURS/', showArrow: true,
        children: [
            { name: 'Om Skärmflyg', link: '/aktiviteter/boka' },
            { name: 'Grundkurs', link: '/aktiviteter/snoskor', showArrow: true,
                children: [
                    { name: 'Kursschema', link: '/aktiviteter/snoskor#night' },
                    { name: 'Vad ingår i kursen', link: '/aktiviteter/snoskor#day' },
                    { name: 'Presentkort Grundkurs', link: '/aktiviteter/snoskor#day' },
                    { name: 'Boka', link: '/aktiviteter/snoskor#day' },
                ],
             },
            { name: 'Fortsättning', link: '/aktiviteter/topptur', showArrow: true,
                children: [
                    { name: 'Kursschema', link: '/aktiviteter/tannforsen' },
                    { name: 'Berg och Termik', link: '/aktiviteter/tannforsen' },
                    { name: 'Samlaflyg', link: '/aktiviteter/tannforsen' },
                    { name: 'Pilot 1', link: '/aktiviteter/tannforsen' },
                    { name: 'Pilot 2', link: '/aktiviteter/tannforsen' },
                    { name: 'Hang', link: '/aktiviteter/tannforsen' },
                    { name: 'Vol-Biv Årefjällen', link: '/aktiviteter/tannforsen' },
                    { name: 'Boka', link: '/aktiviteter/tannforsen' },
                ],
             },
            { name: 'SIV', link: '/aktiviteter/snokite', showArrow: true,
                children: [
                    { name: 'Säkerhetskurs (SIV)', link: '/aktiviteter/tannforsen' },
                    { name: 'Boka', link: '/aktiviteter/tannforsen' },
                ],
             },
            { name: 'Paramotor', link: '/aktiviteter/snokite', showArrow: true,
                children: [
                    { name: 'Kursschema', link: '/aktiviteter/tannforsen' },
                    { name: 'Utbildning Paramotor', link: '/aktiviteter/tannforsen' },
                    { name: 'Detta ingår i paramotorkursen', link: '/aktiviteter/tannforsen' },
                    { name: 'Boka', link: '/aktiviteter/tannforsen' },
                ],
             },
            { name: 'Licenssystem', link: '/aktiviteter/iceclimbing' },
            { name: 'Att ta ut licensen', link: '/aktiviteter/tannforsen' },
        ]
    },
    { name: 'TANDEM', link: '/tandem' },
    { name: 'RESOR', link: '/resor' },
    { name: 'BUTIK', link: '/butik' },
    { name: 'BOENDE I ÅRE', link: '/boende'},
    { name: 'OM OSS', link: '/omoss' },
];

export const footerMenu = [
    { name: 'Style Guide', link: '/style-guide' },
];

export const legalMenu = [
    { name: 'Privacy Policy', link: '/legal/privacy-policy' },
    { name: 'Terms of Service', link: '/legal/terms-of-service' }
];

