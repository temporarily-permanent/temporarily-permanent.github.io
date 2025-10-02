// all non-specific data (means it's needed by all pages on the site)
const genericMetaData = {
	name: "Jannes Veuger",
	psudo_name:"temporarily \npermanent",

}

// about me
const aboutMeData = {
	introduction_naming: "my name is Jannes Veuger",
	introduction:"i'm a 22 year old software developer and interested in the computationally low-level and the technically complex",
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
// content type - 0 means headerText, 1 means normalText, 2 means image, 3 means  (one day rider, 2 means video, 3 means audio)
const portfolioData = {
	projects: [{
		title: 'game sclice - hollow knight',
		description: 'recreation of a 10 sec clip from a game, in my case Hollow Knight.',
		url: 'https://example.com/project-one',
		image: 'https://i.pinimg.com/474x/3a/63/54/3a63544cab1e6926dcb7f02c384be94d.jpg',
		content: [
			{ type: 0, autoplay: true, content: 'Game Sclice' },
			//leader role, recreation of hk
			{ type: 1, content: 'group assignment for school where we got a 10 sec clip of hollow knight\n' +
					'and had to rebuilt as much as possible in about 8-9 weeks. we were with two developers and five artist at MBO-4 Media College Amsterdam' },
			{ type: 3, autoplay: true, video_id: 'cKpQSh_Vh0A' },
			{ type: 3, autoplay: true, video_id: 'vFjJT4PXc5Y' },
			{ type: 1, content: 'in this project i was assigned to the product owner role\n' +
					'which was the first time i had a leader role in a bigger team' },

			{ type: 1, content: 'being product owner meant i divided work among people, and kept an eye over their progress over time' },
			{ type: 0, content: 'Problem - the right hitboxes' },
			{ type: 1, content: 'during research i came across a video a hollow knight playthrough where all the textures were removed and all hitboxes were outlined' },
			{ type: 3, autoplay: false, video_id: 'DDKoy6XTfTA' },
			{ type: 1, content: 'in its description it contained a link to the modification '},
			{ type: 1, content: 'one quick rabbit hole later, i figured out how to run the mod and got these screenshots'},
			{ type: 1, content: ' '}

		]
	}, {
		title: 'textBasedAdventureGameFramework',
		description: 'This is the second project.',
		url: 'https://example.com/project-two',
		image: '/images/project-two.jpg',
		content: [
			{ type: 0, content: 'aaa' },
			{ type: 1, content: 'bbb' },
			{ type: 1, content: 'ccc' },
			{ type: 1, content: 'ddd' }
		]
	}, {
		title: 'portfolio',
		description: '`the public repo for this website`.',
		url: 'https://github.com/temporarily-permanent/portfolio',
		image: '/images/project-two.jpg',
		content: [
			{ type: 0, content: 'aaa' },
			{ type: 1, content: 'bbb' },
			{ type: 1, content: 'ccc' },
			{ type: 1, content: 'ddd' }
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