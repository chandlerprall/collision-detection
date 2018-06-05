import Quaternion from '../../src/math/Quaternion';
import SphereSphere from '../../src/collision/SphereSphere';
import Sphere from '../../src/shapes/Sphere';
import Vec3 from '../../src/math/Vec3';

describe('SphereSphere', () => {
	describe('isColliding', () => {
		it('returns false for spheres that do not overlap', () => {
			/** spheres with radius=1 **/
			expect(
				SphereSphere.isColliding(
					new Sphere(),
					new Vec3(0, 0, 0),
					new Sphere(),
					new Vec3(3, 0, 0)
				)
			).toBe(false);

			expect(
				SphereSphere.isColliding(
					new Sphere(),
					new Vec3(0, 2.0001, 0),
					new Sphere(),
					new Vec3(0, 0, 0)
				)
			).toBe(false);

			expect(
				SphereSphere.isColliding(
					new Sphere(),
					new Vec3(1.155, 0, 0),
					new Sphere(),
					new Vec3(0, -1.155, 1.155) // just barely outside the combined radii
				)
			).toBe(false);

			/** spheres with radius=3,2 **/
			expect(
				SphereSphere.isColliding(
					new Sphere(3),
					new Vec3(0, 0, 0),
					new Sphere(2),
					new Vec3(11, 0, 0)
				)
			).toBe(false);

			expect(
				SphereSphere.isColliding(
					new Sphere(3),
					new Vec3(0, 10.0001, 0),
					new Sphere(2),
					new Vec3(0, 0, 0)
				)
			).toBe(false);

			expect(
				SphereSphere.isColliding(
					new Sphere(3),
					new Vec3(2.89, 0, 0),
					new Sphere(2),
					new Vec3(0, -2.89, 2.89) // just barely outside the combined radii
				)
			).toBe(false);
		});

		it('returns true when spheres overlap', () => {
			expect(
				SphereSphere.isColliding(
					new Sphere(),
					new Vec3(0, 0, 0),
					new Sphere(),
					new Vec3(0, 2, 0)
				)
			).toBe(true);

			expect(
				SphereSphere.isColliding(
					new Sphere(),
					new Vec3(0, 0, 4),
					new Sphere(),
					new Vec3(0, 0, 2)
				)
			).toBe(true);

			expect(
				SphereSphere.isColliding(
					new Sphere(),
					new Vec3(1.1546, 0, 0),
					new Sphere(),
					new Vec3(0, -1.1546, 1.1546)
				)
			).toBe(true);
		});
	});

	describe('collide', () => {
		it('returns null for spheres that do not overlap', () => {
			/** spheres with radius=1 **/
			expect(
				SphereSphere.collide(
					new Sphere(),
					new Vec3(0, 0, 0),
					new Quaternion(),
					new Sphere(),
					new Vec3(3, 0, 0),
					new Quaternion()
				)
			).toBeNull();

			expect(
				SphereSphere.collide(
					new Sphere(),
					new Vec3(0, 2.0001, 0),
					new Quaternion(),
					new Sphere(),
					new Vec3(0, 0, 0),
					new Quaternion()
				)
			).toBeNull();

			expect(
				SphereSphere.collide(
					new Sphere(),
					new Vec3(1.155, 0, 0),
					new Quaternion(),
					new Sphere(),
					new Vec3(0, -1.155, 1.155), // just barely outside the combined radii
					new Quaternion()
				)
			).toBeNull();

			/** spheres with radius=3,2 **/
			expect(
				SphereSphere.collide(
					new Sphere(3),
					new Vec3(0, 0, 0),
					new Quaternion(),
					new Sphere(2),
					new Vec3(11, 0, 0),
					new Quaternion()
				)
			).toBeNull();

			expect(
				SphereSphere.collide(
					new Sphere(3),
					new Vec3(0, 10.0001, 0),
					new Quaternion(),
					new Sphere(2),
					new Vec3(0, 0, 0),
					new Quaternion()
				)
			).toBeNull();

			expect(
				SphereSphere.collide(
					new Sphere(3),
					new Vec3(2.89, 0, 0),
					new Quaternion(),
					new Sphere(2),
					new Vec3(0, -2.89, 2.89), // just barely outside the combined radii
					new Quaternion()
				)
			).toBeNull();
		});

		it('returns a contact report when spheres overlap', () => {
			expect(
				SphereSphere.collide(
					new Sphere(),
					new Vec3(0, 0, 0),
					new Quaternion(),
					new Sphere(),
					new Vec3(0, 2, 0),
					new Quaternion(1, 0, 0, 1)
				)
			).toEqual({
				depth: 0,
				worldNormal: new Vec3(0, 1, 0),
				worldPoint: new Vec3(0, 1, 0),
				pointOnA: new Vec3(0, 1, 0),
				pointOnB: new Vec3(0, 0, 0.9999999999999998)
			});

			expect(
				SphereSphere.collide(
					new Sphere(),
					new Vec3(0, 0, 4),
					new Quaternion(0, 1, 0, 1),
					new Sphere(),
					new Vec3(0, 0, 2),
					new Quaternion()
				)
			).toEqual({
				depth: 0,
				worldNormal: new Vec3(0, 0, -1),
				worldPoint: new Vec3(0, 0, 3),
				pointOnA: new Vec3(0.9999999999999998, 0, 0),
				pointOnB: new Vec3(0, 0, 1)
			});

			expect(
				SphereSphere.collide(
					new Sphere(),
					new Vec3(1.1546, 0, 0),
					new Quaternion(),
					new Sphere(),
					new Vec3(0, -1.1546, 1.1546),
					new Quaternion()
				)
			).toEqual({
				depth: -0.0001741375809740653,
				worldNormal: new Vec3(
					-0.5773502691896257,
					-0.5773502691896257,
					0.5773502691896257
				),
				worldPoint: new Vec3(
					0.5772497308103743,
					-0.5773502691896257,
					0.5773502691896257
				),
				pointOnA: new Vec3(
					-0.5773502691896257,
					-0.5773502691896257,
					0.5773502691896257
				),
				pointOnB: new Vec3(
					0.5773502691896257,
					0.5773502691896257,
					-0.5773502691896257
				)
			});
		});
	});
});
