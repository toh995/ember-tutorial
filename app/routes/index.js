import Route from '@ember/routing/route';

const COMMUNITY_CATEGORIES = [
    'Condo',
    'Townhouse',
    'Apartment'
];

export default class IndexRoute extends Route {
    async model() {
        const response = await fetch('/api/rentals.json');
        const { data } = await response.json();

        return data.map((model) => {
            const { id, attributes } = model;
            const type = (COMMUNITY_CATEGORIES.includes(attributes.category)) ? 'Community' : 'Standalone';
            return { id, type, ...attributes };
        });
    }
}