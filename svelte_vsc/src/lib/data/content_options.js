//header meta data
const headerMetaData = [
	{ type : 0, ref: '', text: 'Home' },
	{ type : 0, ref: 'AboutMe', text: 'About Me' },
	{ type : 0, ref: 'Projects', text: 'Projects' },
	// add contact me route if needed, later
	//{ type : 0, ref: 'ContactMe', text: 'Contact Me' },
];

// portfolio
// content type - 0 means headerText, 1 means normalText, 2 means image, (one day rider, 2 means video, 3 means audio)
const portfolioData = {
	projects: [{
		title: 'game sclice - hollow knight',
		description: 'This is the first project.',
		url: 'https://example.com/project-one',
		image: 'https://i.pinimg.com/474x/3a/63/54/3a63544cab1e6926dcb7f02c384be94d.jpg',
		content: [
			{ type: 0, content: '' },
			//leader role, recreation of hk
			{ type: 1, content: '' },
			{ type: 1, content: '' },
			{ type: 1, content: '' }
		]
	}, {
		title: 'Project Two',
		description: 'This is the second project.',
		url: 'https://example.com/project-two',
		image: '/images/project-two.jpg',
		content: [
			{ type: 0, content: '' },
			{ type: 1, content: '' },
			{ type: 1, content: '' },
			{ type: 1, content: '' }
		]
	}]
};

const archiveMetaData = {
	"color palette": "ColorPalette",
	"pitch":"Pitch",
};

// about me
const aboutMeData = {
	name: "Jannes Veuger",
	psudo_name:"Temporarily Permanent",
	description:"i'm JV, a 21 year old software developer and interested in the computationally low-level and the technically complex",
	avatar: undefined,
	location: undefined,
	interests: undefined,
	skills: ['JavaScript', 'Svelte', 'Node.js']
}

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
	archiveMetaData
};