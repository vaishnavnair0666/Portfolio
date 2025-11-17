import { projects } from '$lib/projects';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const proj = projects.find((p) => p.id === params.id);
	if (!proj) throw error(404, 'Project not found');
	return { project: proj };
};
