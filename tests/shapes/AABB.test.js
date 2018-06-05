import AABB from '../../src/shapes/AABB';
import Vec3 from '../../src/math/Vec3';

describe('AABB', () => {
	describe('constructor', () => {
		it('defaults to a unit-size AABB', () => {
			expect(new AABB()).toEqual({
				min: {x: -0.5, y: -0.5, z: -0.5},
				max: {x: 0.5, y: 0.5, z: 0.5}
			});
		});

		it('accepts and applies min & max arguments', () => {
			const min = new Vec3(-1, -2, -3);
			const max = new Vec3(2, 3, 4);
			const aabb = new AABB(min, max);
			expect(aabb.min).toBe(min);
			expect(aabb.max).toBe(max);
		});
	});

	describe('updateAabb', () => {
		it('updates the provided AABB', () => {
			const sourceAabb = new AABB(new Vec3(-1, -1.5, -2), new Vec3(1, 1.5, 2));
			const destAabb = new AABB();

			sourceAabb.updateAabb(destAabb);
			expect(destAabb).toEqual({
				min: {x: -1, y: -1.5, z: -2},
				max: {x: 1, y: 1.5, z: 2}
			});
		});
	});
});
