// all non-specific data (means it's needed by all pages on the site)
const genericMetaData = {
	name: "Jannes Veuger",
	psudo_name:"temporarily \npermanent",

}

// about me
const aboutMeData = {
	openBracket: '{', closedBracket: '}',
	name: "  name:   \'Jannes Veuger\',", psudo_name:"  psudo_name: \'Temporarily Permanent\'",
	introduction:"i'm a 22 year old software developer and interested in the computationally low-level and the technically complex. I often want to know how systems work internally and will take them apart to see how they work under the hood.",

	introduction_continuation: "I tend to think independently and take initiative when/as needed, even if my approach isn't very conventional. In this way I                                   but I also value sharing knowledge and collaborating with others.",

	items: [
		'Skills',
		'Interests',
		'Work Experience',
		'Education',
	],
	//description: 'A passionate delivery driver thuisbezorgd, 3.5 years\nsupermarket stocker, 2 years',
	avatar: undefined,
	location: undefined,
	interests: undefined,
	skills: ['JavaScript', 'Svelte', 'Node.js']
}

//header meta data
const headerMetaData = [
	{ type : 0, ref: '', text: 'Home' },
	{ type : 0, ref: 'AboutMe', text: 'About Me' },
	{ type : 0, ref: 'Projects', text: 'Projects' },
	// add contact me route if needed, later
	//{ type : 0, ref: 'ContactMe', text: 'Contact Me' },
];

// portfolio
// content type - 0 means headerText, 1 means normalText, 2 means image, 3 means video embed, 4 means link
const portfolioData = {
	projects: [{
		title: 'vertical slice - game sclice - hollow knight',
		description: ' a recreation from a 10 sec clip of a game, in my case Hollow Knight.',
		url: undefined,
		image: 'https://i.pinimg.com/474x/3a/63/54/3a63544cab1e6926dcb7f02c384be94d.jpg',
		content: [
			{ type: 0, content: 'vertical slice - Game Sclice' },
			{ type: 4, url: 'https://github.com/Interis-mk/Game-Sclice', content: 'GITHUB' },
			//leader role, recreation of hk
			{ type: 1, content: 'In the second semester of my second year I got a group assignment for school where we got a 10 sec clip of hollow knight\n' +
					'and had to rebuilt as much as possible in about 8-9 weeks. we were with two developers and five artists at MBO-4 Media College Amsterdam.' },
			{ type: 3, autoplay: true, video_id: 'cKpQSh_Vh0A' },

			{ type: 3, autoplay: true, video_id: 'vFjJT4PXc5Y' },
			{ type: 1, content: 'In this project i was assigned to the product owner role,\n' +
					'which was the first time i had a leader role in a bigger team.' },

			{ type: 1, content: 'Being product owner meant that i divided work among me and my co-programmer and made sure every artist had a section of work to work on. ' +
					'So while one artist worked on the main character, another artist worked on background assets. During this process i kept an eye on their progress over time, trying to motivate them and unblock them when they encountered any issues along the way. ' },
			{type: 1, content: 'I also had to make sure everyone was on the same page and that we were all working towards the same goal.'},
//i like to figure out mathematically complex problems

			{ type: 0, content: 'Problem - the right hitboxes' },
			{ type: 1, content: 'During research I came across a video a Hollow Knight playthrough where all the textures were removed and all hitboxes were outlined.' },
			{ type: 3, autoplay: false, video_id: 'DDKoy6XTfTA' },
			{ type: 1, content: 'In its description it contained a link to the modification.' },
			{ type: 1, content: 'One quick rabbit hole later, I figured out how to get these screenshots. (I figured out how to run the mod and got these screenshots).' },
			{ type: 2, content: 'Game Sclice - Hollow Knight/accurate_collision_upper(Small).png' },
			{ type: 2, content: 'Game Sclice - Hollow Knight/accurate_collision(Small).png' },
			{ type: 1, content: 'Making hitboxes for a simple project like this is as easy as new GameObject > square, add a Collider2D component, copy/paste that everywhere till I had working collision.' },
			{ type: 2, content: 'Game Sclice - Hollow Knight/img(Small).png' },
			{ type: 1, content: 'However, I don\'t want white boxes and a grey background in the final product, so I quickly wrote a utility to toggle the visibility of these elements.' },
			{ type: 2, content: 'Game Sclice - Hollow Knight/hide_GO_and_children.png' },
		]
	}, {
		title: 'Hashing ',
		description: 'Implementation of various SHA algorithms.',
		url: undefined,
		image: undefined,
		content: [
			{ type: 0, content: 'Hashing' },
			{ type: 4, url:'https://github.com/temporarily-permanent/crytpography', content: 'GITHUB' },
			{ type: 1, content: 'Implementation of various SHA algorithms, based on specifications provided by the US Department of Commerce' },
			{ type: 4, url: 'https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.180-4.pdf', content: 'SPECIFICATION' },
			{ type: 0, content: 'fase 0 - research' },
			{ type: 1, content: 'The biggest challenge here was that everything I had read became foundational knowledge for the rest of the paper.' },
			{ type: 1, content: 'This wasn\'t anything difficult for me and found this part to be the most interesting and enjoyable so far. ' },
			{ type: 2, content: 'Hashing/a_foundational_for_b.png' },
			{ type: 1, content: 'An example for how concepts learnt in one section can be used to understand another.'},
			{ type: 0, content: 'fase 1 - implementation, preprocessing' },
			{ type: 1, content: 'NUnit was used for testing. I learnt NUnit     even though in hindsight i didnt use testing that much, but it was worth learning for the few times i did use it, namely for validation of my work.  ' },
			{ type: 0, content: 'fase 2 - implementation, computation' },
			{ type: 0, content: 'fase 3 - application, hash table' },
			{}
		]
	}, {
		title: 'open toren dag',
		description: 'VR project for Amsterdams 750th birthday',
		url: undefined,
		image: '/open-toren-dag-thumbnail.jpg',
		content: [
			{type: 1, content: 'under construction'},
			{type: 0, content: 'open toren dag'},
		]
	},{
		title: 'Conway\'s game of life',
		description: 'a quick warmup to unity/C#',
		url: undefined,
		image: '/conway-game-of-life.png',
		content: [
			{type: 1, content: 'under construction'},
			{type: 0, content: 'Conway\'s game of life'},
		]
	},/*{
		title: 'textBasedAdventureGameFramework',
		description: 'a showcase of data/logic separation',
		url: undefined,
		image: undefined,
		content: [
			{type: 1, content: 'under construction'},
			{type: 0, content: 'textBasedAdventureGameFramework'},
		]
	},*/{
		title: 'portfolio',
		description: '`the public repo for this website`.',
		url: 'https://github.com/temporarily-permanent/portfolio',
		image: '/svelte-logo-square.svg', //todo add svelte logo
		content: [
			{ type: 0, content: 'this portfolio website' },
			{ type: 4, url:'https://github.com/temporarily-permanent/temporarily-permanent.github.io', content: 'GITHUB' },
			{ type: 1, content: 'This website is built using SvelteKit and Vite and is hosted on GitHub pages. '},
			{ type: 1, content: 'Porkbun was used as the domain registrar mainly because I liked their marketing. '},
			{ type: 1, content: 'It has taken me upwards of 40 working hours to learn and build everything and was done over lots of little bite sized pieces of time to pace myself and burn out creatively.'},
			{ type: 1, content: 'This website has a fun surprise if it is open for 10 minutes.'},
			{ type: 4, url:'https://youtu.be/dQw4w9WgXcQ', content: 'I DON\'T WANT TO WAIT' },
					//{'I built this website from scratch}, including the design and layout. I wanted to create a simple and clean website that showcases my work and skills.'},
		]
	}]
};

const archiveMetaData = {
	"color palette": "ColorPalette",
	"pitch":"Pitch",
	"transitions!":"Transitions",
};


//{
//	name: 'Temporarily Permanent',
//	description: 'A passionate developer with a love for creating innovative solutions.',
//	avatar: '/images/avatar.jpg',
//	location: 'Somewhere, Earth',
//	interests: ['Coding', 'Gaming', 'Traveling'],
//	skills: ['JavaScript', 'Svelte', 'Node.js']
//};

// socials
const socialsData = {
	github: { text: 'Github', url: 'https://github.com/temporarily-permanent' },
	linkedin: { text: 'Linkedin', url: 'https://linkedin.com/in/temporarily-permanent' }

};

export {
	socialsData,
	portfolioData,
	aboutMeData,
	headerMetaData,
	archiveMetaData,
	genericMetaData
};