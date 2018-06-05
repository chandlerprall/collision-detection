import Box from '../../src/shapes/Box';
import AABB from '../../src/shapes/AABB';
import Quaternion from '../../src/math/Quaternion';
import Mat4 from '../../src/math/Mat4';
import Vec3 from '../../src/math/Vec3';

describe('Box', () => {
	describe('constructor', () => {
		it('defaults dimensions to 1', () => {
			expect(new Box()).toEqual({
				halfWidth: 0.5,
				halfHeight: 0.5,
				halfLength: 0.5
			});
		});

		it('accepts and applies dimensions', () => {
			expect(new Box(2, 3, 4)).toEqual({
				halfWidth: 1,
				halfHeight: 1.5,
				halfLength: 2
			});
		});
	});

	describe('updateAabb', () => {
		it('updates the provided AABB', () => {
			const box = new Box(2, 3, 4);
			const aabb = new AABB();

			box.updateAabb(aabb, new Mat4());
			expect(aabb).toEqual({
				min: {x: -1, y: -1.5, z: -2},
				max: {x: 1, y: 1.5, z: 2}
			});
		});

		it('applies rotation', () => {
			const box = new Box(2, 3, 4);
			const aabb = new AABB();

			box.updateAabb(
				aabb,
				new Mat4().setRotationFromQuaternion(new Quaternion(0, 1, 0, 1))
			);
			expect(aabb).toEqual({
				min: {x: -1.9999999999999998, y: -1.5, z: -1.0000000000000002},
				max: {x: 1.9999999999999998, y: 1.5, z: 1.0000000000000002}
			});
		});

		it('applies translation', () => {
			const box = new Box(2, 3, 4);
			const aabb = new AABB();

			box.updateAabb(
				aabb,
				new Mat4().setTranslationFromVec3(new Vec3(-2, 5, -4))
			);
			expect(aabb).toEqual({
				min: {x: -3, y: 3.5, z: -6},
				max: {x: -1, y: 6.5, z: -2}
			});
		});

		it('applies rotation and translation', () => {
			const box = new Box(2, 3, 4);
			const aabb = new AABB();

			box.updateAabb(
				aabb,
				new Mat4()
					.setRotationFromQuaternion(new Quaternion(0, 1, 0, 1))
					.setTranslationFromVec3(new Vec3(-2, 5, -4))
			);
			expect(aabb).toEqual({
				min: {x: -4, y: 3.5, z: -5},
				max: {x: -2.220446049250313e-16, y: 6.5, z: -3}
			});
		});
	});
});
