// all non-specific data (means it's needed by all pages on the site)
const genericMetaData = {
	name: "Jannes Veuger",
	psudo_name:"temporarily \npermanent",

}

// about me
const aboutMeData = {
	openBracket: '{', closedBracket: '}',
	name: "name:   \'Jannes Veuger\',", psudo_name:"psudo_name: \'Temporarily Permanent\'",
	introduction:"i'm a 22 year old software developer and interested in the computationally low-level and the technically complex. I often want to know how systems work interally and will take them apart to see how they work under the hood.",

	introduction_continuation: "I tend to think independently and take initiative when/as needed, even if my approach isn't very conventional. In this way I                                   but I also value sharing knowledge and collaborating with others.",


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
		url: 'https://example.com/project-one',
		image: 'https://i.pinimg.com/474x/3a/63/54/3a63544cab1e6926dcb7f02c384be94d.jpg',
		content: [
			{ type: 0, autoplay: true, content: 'vertical slice - Game Sclice' },
			//leader role, recreation of hk
			{ type: 1, content: 'In the second semester of my second year I got a group assignment for school where we got a 10 sec clip of hollow knight\n' +
					'and had to rebuilt as much as possible in about 8-9 weeks. we were with two developers and five artists at MBO-4 Media College Amsterdam' },
			{ type: 3, autoplay: true, video_id: 'cKpQSh_Vh0A' },
			{ type: 3, autoplay: true, video_id: 'vFjJT4PXc5Y' },
			{ type: 1, content: 'in this project i was assigned to the product owner role\n' +
					'which was the first time i had a leader role in a bigger team' },

			{ type: 1, content: 'being product owner meant i divided work among me and my co-programmer and made sure every artist had a section of work to work on. So while one artist worked on the main character, another artist worked on background assets. During this process i kept an eye on their progress over time, trying to motivate them and unblock them when they encountered any issues along the way ' },

			{type: 1, content: 'i also had to make sure everyone was on the same page and that we were all working towards the same goal'},
//i like to figure out mathematically complex problems



			{ type: 0, content: 'Problem - the right hitboxes' },
			{ type: 1, content: 'during research i came across a video a hollow knight playthrough where all the textures were removed and all hitboxes were outlined' },
			{ type: 3, autoplay: false, video_id: 'DDKoy6XTfTA' },
			{ type: 1, content: 'in its description it contained a link to the modification '},
			{ type: 1, content: 'one quick rabbit hole later, i figured out how to get these screenshots.(i figured out how to run the mod and got these screenshots)'},
			{ type: 2, content: 'Game Sclice - Hollow Knight/accurate_collision_upper(Small).png' },
			{ type: 2, content: 'Game Sclice - Hollow Knight/accurate_collision(Small).png' },
			{ type: 1, content: 'making hitboxes for a simple project like this is as easy as new GameObject > square, add Collider2D, copy/paste that everywhere till i had working collision' },
			{ type: 2, content: 'Game Sclice - Hollow Knight/img(Small).png'},
			{ type: 1, content: 'however, i don\'t want white boxes and a grey background in the final product, so i quickly wrote a utility to toggle the visibility of these elements' },
			{ type: 2, content: 'Game Sclice - Hollow Knight/hide_GO_and_children.png' },
		]
	}, {
		title: 'Hashing ',
		description: 'This is the second project.',
		url: 'https://example.com/project-two',
		image: '/images/project-two.jpg',
		content: [
			{ type: 0, content: 'hashing' },
			{ type: 4, url:'https://github.com/temporarily-permanent/crytpography', content: 'GITHUB' },
			{ type: 1, content: 'ccc' },
			{ type: 1, content: 'ddd' }
		]
	}, {
		title: 'portfolio',
		description: '`the public repo for this website`.',
		url: 'https://github.com/temporarily-permanent/portfolio',
		image: '/images/project-two.jpg',
		content: [
			{ type: 0, content: 'this portfolio website' },
			{ type: 4, url:'https://github.com/temporarily-permanent/temporarily-permanent.github.io', content: 'GITHUB' },
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