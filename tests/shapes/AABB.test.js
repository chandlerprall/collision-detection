import AABB from '../../src/shapes/AABB';

describe('AABB', () => {
	describe('constructor', () => {
		it('defaults to a unit-size AABB', () => {
			expect(new AABB()).toEqual({
				halfWidth: 0.5,
				halfHeight: 0.5,
				halfLength: 0.5
			});
		});

		it('accepts and applies a width, height, and length', () => {
			expect(new AABB(3, 4, 5)).toEqual({
				halfWidth: 1.5,
				halfHeight: 2,
				halfLength: 2.5
			});
		});
	});

	describe('updateAabb', () => {
		it('updates the provided AABB', () => {
			const sourceAabb = new AABB(2, 3, 4);
			const destAabb = new AABB();

			sourceAabb.updateAabb(destAabb);
			expect(destAabb).toEqual({
				halfWidth: 1,
				halfHeight: 1.5,
				halfLength: 2
			});
		});
	});
});
