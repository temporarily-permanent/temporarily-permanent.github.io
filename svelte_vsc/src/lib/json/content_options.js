//header meta data
const headerMetaData = [
	{ type : 0, ref: 'AboutMe', text: 'About Me' },
	{ type : 0, ref: 'ColorPalette', text: 'Color Palette' },
	{ type : 0, ref: 'Projects', text: 'Projects' },
	{ type : 0, ref: 'Pitch',text: 'pitch'},
	{ type : 0, ref: 'ContactMe', text: 'Contact Me' },
];


// portfolio
// content type - 0 means headerText, 1 means normalText, 2 means image, (one day rider, 2 means video, 3 means audio)
const portfolioData = {
	projects: [{
		title: 'game sclice - hollow knight',
		description: 'This is the first project.',
		url: 'https://example.com/project-one',
		image: '/images/project-one.jpg',
		content: [
			{ type: 0, content: '' },
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
	headerMetaData
};