export const siteData = {
  name: "Skysport AB",
  coordinates:  { "lat": 63.402557, "lng": 13.057222 },
  tagline: "Skärmflyg i Åre",
  description: "Drömen bli verklighet",
  address: {
    "full": "Årevägen 173, Åre, Sweden, 83752",
    "short": "Draklanda, Åre",
  },
  phone: "+46 67-51186",
  mobil1: '+46 70-5699089',
  mobil2: '+46 70-2113842',
  email: "info@skysport.se",
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    twitter: "https://twitter.com",
    youtube: "https://youtube.com",
  },
};


export const contactInfo = [
  {
    icon: "ri-map-pin-line",
    title: "Address",
    content: siteData.address,
    link: null,
  },
  {
    icon: "ri-phone-line",
    title: "Phone",
    content: siteData.phone,
    link: `tel:${siteData.phone}`,
  },
  {
    icon: "ri-mail-line",
    title: "Email",
    content: siteData.email,
    link: `mailto:${siteData.email}`,
  },
 /*  {
    icon: "ri-time-line",
    title: "Hours",
    content: ["Open 24/7 for Premium and Elite members", "Basic members: 5 AM - 11 PM daily"],
    link: null,
  }, */
];

 export const coordinates = [
    { "lat": 63.402557, "lng": 13.057222 },
 ];


export const classSchedule = [
  { week: "6", month: "Feb", datum: "02 - 07", kurs: "Grundkurs", linkDate: "2026-02-02" },
  { week: "7", month: "Feb", datum: "09 - 14", kurs: "Grundkurs", linkDate: "2026-02-09" },
  { week: "8", month: "Feb", datum: "16 - 21", kurs: "Grundkurs", linkDate: "2026-02-16" },
  { week: "9", month: "Feb", datum: "23 - 28", kurs: "Grundkurs", linkDate: "2026-02-23" },
  { week: "10", month: "Mars",datum: "02 - 07", kurs: "Grundkurs", linkDate: "2026-03-02" },
  { week: "11", month: "Mars",datum: "09 - 14", kurs: "Grundkurs", linkDate: "2026-03-09" },
  { week: "12", month: "Mars",datum: "16 - 21", kurs: "Grundkurs", linkDate: "2026-03-16" },
  { week: "13", month: "Mars",datum: "23 - 28", kurs: "Grundkurs", linkDate: "2026-03-23" },
  { week: "14", month: "Mars",datum: "30 - Apr 04", kurs: "Grundkurs", linkDate: "2026-03-30" },
  { week: "15", month: "Apr",datum: "06 - 11", kurs: "Grundkurs", linkDate: "2026-04-06" },
  { week: "16", month: "Apr",datum: "13 - 18", kurs: "Grundkurs", linkDate: "2026-04-13" },
  { week: "17", month: "Apr",datum: "20 - 25", kurs: "Grundkurs", linkDate: "2026-04-20" },
  { week: "18", month: "Apr",datum: "27 - May 02", kurs: "Grundkurs", linkDate: "2026-04-27" },
  { week: "22", month: "Maj",datum: "25 - 30", kurs: "Grundkurs", linkDate: "2026-05-25" },
  { week: "23", month: "Juni",datum: "01 - 06", kurs: "Grundkurs", linkDate: "2026-06-01" },
  { week: "24", month: "Juni",datum: "08 - 13", kurs: "Grundkurs", linkDate: "2026-06-08" },
  { week: "26", month: "Juni",datum: "22 - 27", kurs: "Grundkurs", linkDate: "2026-06-22" },
  { week: "27", month: "Juni",datum: "29 - Juli 04", kurs: "Grundkurs", linkDate: "2026-06-29" },
  { week: "28", month: "Juli",datum: "06 - 11", kurs: "Grundkurs", linkDate: "2026-07-06" },
  { week: "29", month: "Juli",datum: "13 - 18", kurs: "Grundkurs", linkDate: "2026-07-13" },
  { week: "30", month: "Juli",datum: "20 - 25", kurs: "Grundkurs", linkDate: "2026-07-20" },
  { week: "31", month: "Juli",datum: "27 - Aug 01", kurs: "Grundkurs", linkDate: "2026-07-27" },
  { week: "32", month: "Aug",datum: "03 - 08", kurs: "Grundkurs", linkDate: "2026-08-03" },
  { week: "33", month: "Aug",datum: "10 - 15", kurs: "Grundkurs", linkDate: "2026-08-10" },
  { week: "34", month: "Aug",datum: "17 - 22", kurs: "Fortsättning", linkDate: "2026-08-17" },
  { week: "35", month: "Aug",datum: "24 - 29", kurs: "Grundkurs", linkDate: "2026-08-24" },
  { week: "36", month: "Aug",datum: "31 - Sep 05", kurs: "Grundkurs", linkDate: "2026-08-31" },
  { week: "38", month: "Sept",datum: "14 - 19", kurs: "Grundkurs", linkDate: "2026-09-14" },
  { week: "40", month: "Sept",datum: "28 - Okt 03", kurs: "Grundkurs", linkDate: "2026-09-28" },
];

export const classFortSchedule = [
  { week: "6", month: "Feb", datum: "02 - 07", kurs: "Fortsättning", linkDate: "2026-02-02" },
  { week: "8", month: "Feb", datum: "16 - 21", kurs: "Fortsättning", linkDate: "2026-02-16" },
  { week: "9", month: "Feb", datum: "23 - 28", kurs: "Fortsättning", linkDate: "2026-02-23" },
  { week: "10", month: "Mars",datum: "02 - 07", kurs: "Fortsättning", linkDate: "2026-03-02" },
  { week: "11", month: "Mars",datum: "09 - 14", kurs: "Fortsättning", linkDate: "2026-03-09" },
  { week: "12", month: "Mars",datum: "16 - 21", kurs: "Fortsättning", linkDate: "2026-03-16" },
  { week: "13", month: "Mars",datum: "23 - 28", kurs: "Fortsättning", linkDate: "2026-03-23" },
  { week: "14", month: "Mars",datum: "30 - Apr 04", kurs: "Fortsättning", linkDate: "2026-03-30" },
  { week: "15", month: "Apr",datum: "06 - 11", kurs: "Fortsättning", linkDate: "2026-04-06" },
  { week: "16", month: "Apr",datum: "13 - 18", kurs: "Fortsättning", linkDate: "2026-04-13" },
  { week: "17", month: "Apr",datum: "20 - 25", kurs: "Fortsättning", linkDate: "2026-04-20" },
  { week: "18", month: "Apr",datum: "27 - May 02", kurs: "Fortsättning", linkDate: "2026-04-27" },
  { week: "22", month: "Maj",datum: "25 - 30", kurs: "Fortsättning", linkDate: "2026-05-25" },
  { week: "23", month: "Juni",datum: "01 - 06", kurs: "Fortsättning", linkDate: "2026-06-01" },
  { week: "24", month: "Juni",datum: "08 - 13", kurs: "Fortsättning", linkDate: "2026-06-08" },
  { week: "26", month: "Juni",datum: "22 - 27", kurs: "Fortsättning", linkDate: "2026-06-22" },
  { week: "27", month: "Juni",datum: "29 - Juli 04", kurs: "Fortsättning", linkDate: "2026-06-29" },
  { week: "28", month: "Juli",datum: "06 - 11", kurs: "Fortsättning", linkDate: "2026-07-06" },
  { week: "29", month: "Juli",datum: "13 - 18", kurs: "Fortsättning", linkDate: "2026-07-13" },
  { week: "30", month: "Juli",datum: "20 - 25", kurs: "Fortsättning", linkDate: "2026-07-20" },
  { week: "31", month: "Juli",datum: "27 - Aug 01", kurs: "Fortsättning", linkDate: "2026-07-27" },
  { week: "32", month: "Aug",datum: "03 - 08", kurs: "Fortsättning", linkDate: "2026-08-03" },
  { week: "33", month: "Aug",datum: "10 - 15", kurs: "Fortsättning", linkDate: "2026-08-10" },
  { week: "34", month: "Aug",datum: "17 - 22", kurs: "Fortsättning", linkDate: "2026-08-17" },
  { week: "35", month: "Aug",datum: "24 - 29", kurs: "Fortsättning", linkDate: "2026-08-24" },
  { week: "36", month: "Aug",datum: "31 - Sep 05", kurs: "Fortsättning", linkDate: "2026-08-31" },
  { week: "38", month: "Sept",datum: "14 - 19", kurs: "Fortsättning", linkDate: "2026-09-14" },
  
];

export const classParaMotorSchedule = [
  { week: "6", month: "Feb", datum: "02 - 07", kurs: "Fortsättning", linkDate: "2026-02-02" },
  { week: "7", month: "Feb", datum: "09 - 14", kurs: "Fortsättning", linkDate: "2026-02-09" },
  { week: "8", month: "Feb", datum: "16 - 21", kurs: "Fortsättning", linkDate: "2026-02-16" },
  { week: "9", month: "Feb", datum: "23 - 28", kurs: "Fortsättning", linkDate: "2026-02-23" },
  { week: "11", month: "Mars",datum: "09 - 14", kurs: "Fortsättning", linkDate: "2026-03-09" },
  { week: "12", month: "Mars",datum: "16 - 21", kurs: "Fortsättning", linkDate: "2026-03-16" },
  { week: "14", month: "Mars",datum: "30 - Apr 04", kurs: "Fortsättning", linkDate: "2026-03-30" },
  { week: "15", month: "Apr",datum: "06 - 11", kurs: "Fortsättning", linkDate: "2026-04-06" },
  { week: "16", month: "Apr",datum: "13 - 18", kurs: "Fortsättning", linkDate: "2026-04-13" },
  { week: "17", month: "Apr",datum: "20 - 25", kurs: "Fortsättning", linkDate: "2026-04-20" },
  { week: "18", month: "Apr",datum: "27 - May 02", kurs: "Fortsättning", linkDate: "2026-04-27" },
  { week: "22", month: "Maj",datum: "25 - 30", kurs: "Fortsättning", linkDate: "2026-05-25" },
  { week: "23", month: "Juni",datum: "01 - 06", kurs: "Fortsättning", linkDate: "2026-06-01" },
  { week: "24", month: "Juni",datum: "08 - 13", kurs: "Fortsättning", linkDate: "2026-06-08" },
  { week: "26", month: "Juni",datum: "22 - 27", kurs: "Fortsättning", linkDate: "2026-06-22" },
  { week: "27", month: "Juni",datum: "29 - Juli 04", kurs: "Fortsättning", linkDate: "2026-06-29" },
  { week: "28", month: "Juli",datum: "06 - 11", kurs: "Fortsättning", linkDate: "2026-07-06" },
  { week: "29", month: "Juli",datum: "13 - 18", kurs: "Fortsättning", linkDate: "2026-07-13" },
  { week: "30", month: "Juli",datum: "20 - 25", kurs: "Fortsättning", linkDate: "2026-07-20" },
  { week: "31", month: "Juli",datum: "27 - Aug 01", kurs: "Fortsättning", linkDate: "2026-07-27" },
  { week: "32", month: "Aug",datum: "03 - 08", kurs: "Fortsättning", linkDate: "2026-08-03" },
  { week: "33", month: "Aug",datum: "10 - 15", kurs: "Fortsättning", linkDate: "2026-08-10" },
  { week: "35", month: "Aug",datum: "24 - 29", kurs: "Fortsättning", linkDate: "2026-08-24" },
  { week: "36", month: "Sept",datum: "31 - Sep 05", kurs: "Fortsättning", linkDate: "2026-08-31" },
  { week: "38", month: "Sept",datum: "14 - 19", kurs: "Fortsättning", linkDate: "2026-09-14" },
  { week: "40", month: "Sept",datum: "28 - Okt 03", kurs: "Fortsättning", linkDate: "2026-09-28" },
];

export const classSIVSchedule = [

  { week: "28", month: "Juli",datum: "06 - 11", kurs: "Fortsättning", linkDate: "2026-07-06" },
  { week: "32", month: "Aug",datum: "03 - 08", kurs: "Fortsättning", linkDate: "2026-08-03" },
  { week: "34", month: "Aug",datum: "17 - 22", kurs: "Fortsättning", linkDate: "2026-08-17" },

];

export const instructers = [
  {
    name: "Lars Hedström",
    bioIMG: "https://strapi-cdn-2.s3.eu-north-1.amazonaws.com/skysport25/img/pilots/larssa.jpg",
    bio: "Bor i Åre. Född 1970. Uppväxt i Åre och började flyga på Åreskutan 1988.  ",
    flewSince: "1988",
    role: [
    { type: "Skysports drift ansvarig", working: true },
    { type: "Tandempilot", working: true },
    { type: "Tandemaspirant", working: false },
    { type: "Instruktör", working: true },
    { type: "Hjälpinstruktör", working: false  },
    ],
  },
  {
    name: "Pål Hammar Rognøy",
    bioIMG: "https://strapi-cdn-2.s3.eu-north-1.amazonaws.com/skysport25/img/pilots/polh.jpg",
    bio: "Född 1973. Uppväxt i Stavanger, Norge. Har bott i Åre sedan 2005. Akrobatik som specialitet.",
    flewSince: "1997",
    role: [
    { type: "Skysports drift ansvarig", working: false },
    { type: "Tandempilot", working: true },
    { type: "Tandemaspirant", working: false },
    { type: "Instruktör", working: true },
    { type: "Hjälpinstruktör", working: false  },
    ],
  },
  {
    name: "Emil Krabbe",
    bioIMG: "https://strapi-cdn-2.s3.eu-north-1.amazonaws.com/skysport25/img/pilots/krabbe.jpg",
    bio: "Bor i Åre. Född 1983.Uppväxt i Danmark och började flyga 2009. Instruktör sedan 2022.",
    flewSince: "2009",
    role: [
    { type: "Skysports drift ansvarig", working: false },
    { type: "Tandempilot", working: true },
    { type: "Tandemaspirant", working: false },
    { type: "Instruktör", working: true },
    { type: "Hjälpinstruktör", working: false  },
    ],
  },
];
export const pilots = [
  {
    name: "Lars Hedström",
    bioIMG: "https://strapi-cdn-2.s3.eu-north-1.amazonaws.com/skysport25/img/pilots/larssa.jpg",
    bio: "Bor i Åre. Född 1970. Uppväxt i Åre.  ",
    flewSince: "1988",
    role: [
    { type: "Skysports drift ansvarig", working: true },
    { type: "Tandempilot", working: true },
    { type: "Tandemaspirant", working: false },
    { type: "Instruktör", working: true },
    { type: "Hjälpinstruktör", working: false  },
    ],
  },
  {
    name: "Pål Hammar Rognøy",
    bioIMG: "https://strapi-cdn-2.s3.eu-north-1.amazonaws.com/skysport25/img/pilots/polh.jpg",
    bio: "Född 1973. Uppväxt i Stavanger, Norge. Har bott i Åre sedan 2005. Akrobatik som specialitet.",
    flewSince: "1997",
    role: [
    { type: "Skysports drift ansvarig", working: false },
    { type: "Tandempilot", working: true },
    { type: "Tandemaspirant", working: false },
    { type: "Instruktör", working: true },
    { type: "Hjälpinstruktör", working: false  },
    ],
  },
  {
    name: "Henry Palacios",
    bioIMG: "https://strapi-cdn-2.s3.eu-north-1.amazonaws.com/skysport25/img/pilots/henry.jpg",
    bio: "Bor i Åre. Född 1983. Ursprungligen från Equador. Jobbat som tandempilot i Equador och Dubai.",
    flewSince: "2007",
    role: [
    { type: "Skysports drift ansvarig", working: false },
    { type: "Tandempilot", working: true },
    { type: "Tandemaspirant", working: false },
    { type: "Instruktör", working: false },
    { type: "Hjälpinstruktör", working: true  },
    ],
  },
    {
    name: "Henning Westgård",
    bioIMG: "https://strapi-cdn-2.s3.eu-north-1.amazonaws.com/skysport25/img/pilots/henne.jpg",
    bio: "Bor i Åre. Född 1966. ",
    flewSince: "1992",
    role: [
    { type: "Skysports drift ansvarig", working: false },
    { type: "Tandempilot", working: true },
    { type: "Tandemaspirant", working: false },
    { type: "Instruktör", working: false },
    { type: "Hjälpinstruktör", working: false  },
    ],
  },
  {
    name: "Fredrik Lindholm",
    bioIMG: "https://strapi-cdn-2.s3.eu-north-1.amazonaws.com/skysport25/img/pilots/fredrik-L.jpeg",
    bio: "Bor i Åre. Uppväxt i Åre.",
    flewSince: "1993",
    role: [
    { type: "Skysports drift ansvarig", working: false },
    { type: "Tandempilot", working: true },
    { type: "Tandemaspirant", working: false },
    { type: "Instruktör", working: false },
    { type: "Hjälpinstruktör", working: false  },
    ],
  },
  {
    name: "Emil Krabbe",
    bioIMG: "https://strapi-cdn-2.s3.eu-north-1.amazonaws.com/skysport25/img/pilots/krabbe.jpg",
    bio: "Bor i Åre. Född 1983. ",
    flewSince: "2009",
    role: [
    { type: "Skysports drift ansvarig", working: false },
    { type: "Tandempilot", working: true },
    { type: "Tandemaspirant", working: false },
    { type: "Instruktör", working: true },
    { type: "Hjälpinstruktör", working: false  },
    ],
  },
  {
    name: "Elias Evertsson",
    bioIMG: "https://strapi-cdn-2.s3.eu-north-1.amazonaws.com/skysport25/img/pilots/elias-E.jpeg",
    bio: "Bor i Åre ",
    flewSince: "2022",
    role: [
    { type: "Skysports Drift Ansvarig", working: false },
    { type: "Tandempilot", working: true },
    { type: "Tandemaspirant", working: false },
    { type: "Instruktör", working: false },
    { type: "Hjälpinstruktör", working: false  },
    ],
  },
  {
    name: "Magnus Hjelm",
    bioIMG: "https://strapi-cdn-2.s3.eu-north-1.amazonaws.com/skysport25/img/pilots/mHjelm.jpg",
    bio: "Bor i Sundsvall. Född 1978. Säsongande tandempilot i Åre ",
    flewSince: "2009",
    role: [
    { type: "Skysports drift ansvarig", working: false },
    { type: "Tandempilot", working: true },
    { type: "Tandemaspirant", working: false },
    { type: "Instruktör", working: false },
    { type: "Hjälpinstruktör", working: false  },
    ],
  },
  {
    name: "Mauritz Sjöström",
    bioIMG: "https://strapi-cdn-2.s3.eu-north-1.amazonaws.com/skysport25/img/pilots/mauritz.jpeg",
    bio: "Bor i Åre. Född 1969. IT ansvarig på Skysport ",
    flewSince: "2010",
    role: [
    { type: "Skysports drift ansvarig", working: false },
    { type: "Tandempilot", working: true },
    { type: "Tandemaspirant", working: false },
    { type: "Instruktör", working: false },
    { type: "Hjälpinstruktör", working: true  },
    ],
  },
  {
    name: "Pontus Olsson",
    bioIMG: "https://strapi-cdn-2.s3.eu-north-1.amazonaws.com/skysport25/img/pilots/pontus.jpeg",
    bio: "Bor i Åre. Född 1993. Säsongande tandempilot i Åre under mars-april och juli-augusti. Jobbar övrig tid i Köpenhamn som service elektriker. ",
    flewSince: "",
    role: [
    { type: "Skysports Drift Ansvarig", working: false },
    { type: "Tandempilot", working: true },
    { type: "Tandemaspirant", working: false },
    { type: "Instruktör", working: false },
    { type: "Hjälpinstruktör", working: false  },
    ],
  },
  {
    name: "Emil Svantesson",
    bioIMG: "https://strapi-cdn-2.s3.eu-north-1.amazonaws.com/skysport25/img/pilots/emil.jpeg",
    bio: "Bor i Åre. Född 1996. ",
    flewSince: "",
    role: [
    { type: "Skysports drift ansvarig", working: false },
    { type: "Tandempilot", working: true },
    { type: "Tandemaspirant", working: false },
    { type: "Instruktör", working: false },
    { type: "Hjälpinstruktör", working: false  },
    ],
  },
  {
    name: "Jonas Ostwald",
    bioIMG: "https://strapi-cdn-2.s3.eu-north-1.amazonaws.com/skysport25/img/pilots/jonasO.jpg",
    bio: "Bor i göteborg. Född 1969. ",
    flewSince: "1995",
    role: [
    { type: "Skysports drift ansvarig", working: false },
    { type: "Tandempilot", working: true },
    { type: "Tandemaspirant", working: false },
    { type: "Instruktör", working: false },
    { type: "Hjälpinstruktör", working: false  },
    ],
  },
  {
    name: "Tobbe Hinas",
    bioIMG: "https://strapi-cdn-2.s3.eu-north-1.amazonaws.com/skysport25/img/pilots/tobbe_hinas.jpg",
    bio: "Gotlänning som säsongar i Åre. Född 1973. ",
    flewSince: "1999",
    role: [
    { type: "Skysports drift ansvarig", working: false },
    { type: "Tandempilot", working: true },
    { type: "Tandemaspirant", working: false },
    { type: "Instruktör", working: false },
    { type: "Hjälpinstruktör", working: false  },
    ],
  },
  {
    name: "Mats Andersson",
    bioIMG: "https://strapi-cdn-2.s3.eu-north-1.amazonaws.com/skysport25/img/pilots/mats.jpg",
    bio: "Bor i Lund. Född 1976. Säsongande tandempilot i Åre under mars-april och juli-augusti. Jobbar övrig tid i Köpenhamn som service elektriker. ",
    flewSince: "2003",
    role: [
    { type: "Skysports drift ansvarig", working: false },
    { type: "Tandempilot", working: true },
    { type: "Tandemaspirant", working: false },
    { type: "Instruktör", working: false },
    { type: "Hjälpinstruktör", working: false  },
    ],
  },
  {
    name: "Linda Kits",
    bioIMG: "https://strapi-cdn-2.s3.eu-north-1.amazonaws.com/skysport25/img/pilots/linda-K.jpeg",
    bio: " ",
    flewSince: "",
    role: [
    { type: "Skysports Drift Ansvarig", working: false },
    { type: "Tandempilot", working: true },
    { type: "Tandemaspirant", working: false },
    { type: "Instruktör", working: false },
    { type: "Hjälpinstruktör", working: false  },
    ],
  },
  

];







