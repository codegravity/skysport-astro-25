// Get site URL from environment variable, use default value if not set
// Note: Please set the correct PUBLIC_SITE_URL in .env file after first deployment
const SITE_URL = import.meta.env.PUBLIC_SITE_URL || 'https://stage.skysport.se/';

export const siteConfig = {
	title: "Skysport i Åre",
	author: "Skysport",
	url: SITE_URL,
	mail: "hej@skysport.se",
	utm: {
		source: `${SITE_URL}`,
		medium: "referral",
		campaign: "navigation",
	},
	meta:{
		title: "Skysport i Åre - Din guide till Åres bästa sportaktiviteter",
		description: "Upptäck spännande skärmflygning och tandemflygning i Åre med Skysport. Boka din äventyrsresa idag och upplev Åres fantastiska natur från luften!",
		keywords: "Skärmflyg, Tandemflygning, Paragliding, Åre aktiviteter, Äventyrssporter, Utomhusaktiviteter Åre, Flygupplevelser, Skärmflygkurser, Tandemflygning Åre, Paragliding Åre",
		//image: `${SITE_URL}/og.jpg`,
	},
	// social links
	social:{
		facebook: "https://www.facebook.com/Skysport.se",
		instagram: "https://www.instagram.com/skysportare/",
		vimeo: "https://vimeo.com/skysport",
	
	},
};


// Footer
export const socialLinks = [
	{
		name: 'FaceBook',
		url: 'https://www.facebook.com/Skysport.se',
		  icon: 'logos--facebook'
	},
	{
		name: 'Instagram',
		url: 'https://www.instagram.com/skysportare/',
		icon: 'logos--instagram-icon'
	},
	{
	  name: 'Vimeo',
	  url: 'https://vimeo.com/skysport',
	  icon: 'logos--vimeo-icon'
	},
];


