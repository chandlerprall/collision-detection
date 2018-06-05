import AABB from '../../src/shapes/AABB';
import Mat4 from '../../src/math/Mat4';
import Sphere from '../../src/shapes/Sphere';
import Vec3 from '../../src/math/Vec3';

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

			sphere.updateAabb(aabb, new Mat4());
			expect(aabb).toEqual({
				min: {x: -3, y: -3, z: -3},
				max: {x: 3, y: 3, z: 3}
			});
		});

		it('applies translation', () => {
			const sphere = new Sphere(3);
			const aabb = new AABB();

			sphere.updateAabb(
				aabb,
				new Mat4().setTranslationFromVec3(new Vec3(2, 3, 4))
			);
			expect(aabb).toEqual({
				min: {x: -1, y: 0, z: 1},
				max: {x: 5, y: 6, z: 7}
			});
		});
	});
});
