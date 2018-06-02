import Sphere from '../../src/shapes/Sphere';
import AABB from '../../src/shapes/AABB';

describe('Sphere', () => {
	describe('constructor', () => {
		it('defaults radius to 1', () => {
			expect(new Sphere()).toEqual({radius: 1});
		});

		it('accepts and applies a radius', () => {
			expect(new Sphere(5)).toEqual({radius: 5});
		});
	});

	describe('updateAabb', () => {
		it('updates the provided AABB', () => {
			const sphere = new Sphere(3);
			const aabb = new AABB();

			sphere.updateAabb(aabb);
			expect(aabb).toEqual({
				halfWidth: 3,
				halfHeight: 3,
				halfLength: 3
			});
		});
	});
});
