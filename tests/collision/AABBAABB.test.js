import AabbAabb from '../../src/collision/AabbAabb';
import AABB from '../../src/shapes/AABB';
import Vec3 from '../../src/math/Vec3';

describe('AabbAabb', () => {
	describe('isColliding', () => {
		it('returns false for AABBs that do not overlap', () => {
			expect(
				AabbAabb.isColliding(
					new AABB(new Vec3(-0.5, -1, -1.5), new Vec3(0.5, 1, 1.5)),
					new Vec3(),
					new AABB(new Vec3(-0.5, -0.5, -0.5), new Vec3(0.5, 0.5, 0.5)),
					new Vec3(1.0001, 0, 0)
				)
			).toBe(false);

			expect(
				AabbAabb.isColliding(
					new AABB(new Vec3(-0.5, -1, -1.5), new Vec3(0.5, 1, 1.5)),
					new Vec3(),
					new AABB(new Vec3(-0.5, -0.5, -0.5), new Vec3(0.5, 0.5, 0.5)),
					new Vec3(0, -1.5001, 0)
				)
			).toBe(false);

			expect(
				AabbAabb.isColliding(
					new AABB(new Vec3(-0.5, -1, -1.5), new Vec3(0.5, 1, 1.5)),
					new Vec3(0, 0, 1),
					new AABB(new Vec3(-0.5, -0.5, -0.5), new Vec3(0.5, 0.5, 0.5)),
					new Vec3(0, 0, 3.0001)
				)
			).toBe(false);

			expect(
				AabbAabb.isColliding(
					new AABB(new Vec3(-0.5, -0.5, -0.5), new Vec3(0.5, 0.5, 0.5)),
					new Vec3(0, 0, 0),
					new AABB(new Vec3(-0.5, -0.5, -0.5), new Vec3(0.5, 0.5, 0.5)),
					new Vec3(0, 2, 0)
				)
			).toBe(false);

			expect(
				AabbAabb.isColliding(
					new AABB(new Vec3(-0.5, -0.5, -0.5), new Vec3(0.5, 0.5, 0.5)),
					new Vec3(3, 0, 0),
					new AABB(new Vec3(-0.5, -0.5, -0.5), new Vec3(0.5, 0.5, 0.5)),
					new Vec3(0, 0, 0)
				)
			).toBe(false);

			expect(
				AabbAabb.isColliding(
					new AABB(new Vec3(-0.5, -0.5, -0.5), new Vec3(0.5, 0.5, 0.5)),
					new Vec3(0, 0, 3),
					new AABB(new Vec3(-0.5, -0.5, -0.5), new Vec3(0.5, 0.5, 0.5)),
					new Vec3(0, 0, 0)
				)
			).toBe(false);
		});

		it('returns true when aabbs overlap', () => {
			expect(
				AabbAabb.isColliding(
					new AABB(new Vec3(-0.5, -1, -1.5), new Vec3(0.5, 1, 1.5)),
					new Vec3(),
					new AABB(new Vec3(-0.5, -0.5, -0.5), new Vec3(0.5, 0.5, 0.5)),
					new Vec3(1, 0, 0)
				)
			).toBe(true);

			expect(
				AabbAabb.isColliding(
					new AABB(new Vec3(-0.5, -1, -1.5), new Vec3(0.5, 1, 1.5)),
					new Vec3(),
					new AABB(new Vec3(-0.5, -0.5, -0.5), new Vec3(0.5, 0.5, 0.5)),
					new Vec3(0, -1.5, 0)
				)
			).toBe(true);

			expect(
				AabbAabb.isColliding(
					new AABB(new Vec3(-0.5, -1, -1.5), new Vec3(0.5, 1, 1.5)),
					new Vec3(0, 0, 1),
					new AABB(new Vec3(-0.5, -0.5, -0.5), new Vec3(0.5, 0.5, 0.5)),
					new Vec3(0, 0, 3)
				)
			).toBe(true);
		});
	});
});
