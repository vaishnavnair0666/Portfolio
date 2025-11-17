export type Project = {
	id: string;
	title: string;
	desc: string;
	tech?: string;
	link?: string;
};

export const projects: Project[] = [
	{
		id: 'project-a',
		title: 'Project A',
		desc: 'A concise summary: SvelteKit frontend + Node API. Focus: performance & DX.',
		tech: 'SvelteKit, Node.js',
		link: '/projects/project-a'
	},
	{
		id: 'project-b',
		title: 'Project B',
		desc: 'A Python Project utilizing ARuCO markers',
		tech: 'Python',
		link: '/projects/project-b'
	}
];
