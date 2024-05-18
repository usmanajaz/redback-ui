import { screen } from '@testing-library/react';
import { renderWithDeps } from '../../../jest.utils';
import ImageSlider from './ImageSlider';

describe('<ImageSlider />', () => {
	const images = [
		'https://images.pexels.com/photos/248547/pexels-photo-248547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		'https://images.pexels.com/photos/12838/pexels-photo-12838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		'https://images.pexels.com/photos/161172/cycling-bike-trail-sport-161172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
	];

	it('renders', () => {
		renderWithDeps(<ImageSlider size="small" images={images} />);

		const templateName = screen.getByTestId('ImageSlider');

		expect(templateName).toBeVisible();
	});
});
