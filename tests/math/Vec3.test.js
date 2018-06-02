import Quaternion from '../../src/math/Quaternion';
import Vec3 from '../../src/math/Vec3';

describe('Vec3', () => {
	describe('constructor', () => {
		it('defaults values to 0', () => {
			expect(new Vec3()).toEqual({x: 0, y: 0, z: 0});
		});

		it('accepts and applies x, y, and z values', () => {
			expect(new Vec3(1, 2, 3)).toEqual({x: 1, y: 2, z: 3});
		});
	});

	describe('set', () => {
		it('sets the Vec3 members', () => {
			const vec3 = new Vec3();
			vec3.set(1, 2, 3);
			expect(vec3).toEqual({x: 1, y: 2, z: 3});
		});
	});

	describe('add', () => {
		it('adds two Vec3 together', () => {
			const vec3_a = new Vec3(1, 2, 3);
			const vec3_b = new Vec3(10, 20, 30);
			expect(new Vec3().add(vec3_a, vec3_b)).toEqual({x: 11, y: 22, z: 33});
			expect(vec3_a).toEqual({x: 1, y: 2, z: 3});
			expect(vec3_b).toEqual({x: 10, y: 20, z: 30});
		});
	});

	describe('addVec3', () => {
		it('adds a Vec3 to this one', () => {
			const vec3_a = new Vec3(1, 2, 3);
			const vec3_b = new Vec3(10, 20, 30);
			expect(vec3_a.addVec3(vec3_b)).toEqual({x: 11, y: 22, z: 33});
			expect(vec3_b).toEqual({x: 10, y: 20, z: 30});
		});
	});

	describe('sub', () => {
		it('subtracts a Vec3 from another', () => {
			const vec3_a = new Vec3(1, 2, 3);
			const vec3_b = new Vec3(10, 20, 30);
			expect(new Vec3().sub(vec3_a, vec3_b)).toEqual({x: -9, y: -18, z: -27});
			expect(vec3_a).toEqual({x: 1, y: 2, z: 3});
			expect(vec3_b).toEqual({x: 10, y: 20, z: 30});
		});
	});

	describe('subVec3', () => {
		it('subtracts a Vec3 from this one', () => {
			const vec3_a = new Vec3(1, 2, 3);
			const vec3_b = new Vec3(10, 20, 30);
			expect(vec3_a.subVec3(vec3_b)).toEqual({x: -9, y: -18, z: -27});
			expect(vec3_b).toEqual({x: 10, y: 20, z: 30});
		});
	});

	describe('lengthSquared', () => {
		it('returns the vector length squared', () => {
			expect(new Vec3(1, 0, 0).lengthSquared()).toBe(1);
			expect(new Vec3(5, 0, 0).lengthSquared()).toBe(25);

			expect(new Vec3(0, 1, 0).lengthSquared()).toBe(1);
			expect(new Vec3(0, 5, 0).lengthSquared()).toBe(25);

			expect(new Vec3(0, 1, 0).lengthSquared()).toBe(1);
			expect(new Vec3(0, 5, 0).lengthSquared()).toBe(25);

			expect(new Vec3(1, 0, 1).lengthSquared()).toBe(2);
			expect(new Vec3(5, 5, 5).lengthSquared()).toBe(75);
		});
	});

	describe('length', () => {
		it('returns the vector length', () => {
			expect(new Vec3(1, 0, 0).length()).toBe(1);
			expect(new Vec3(5, 0, 0).length()).toBe(5);

			expect(new Vec3(0, 1, 0).length()).toBe(1);
			expect(new Vec3(0, 5, 0).length()).toBe(5);

			expect(new Vec3(0, 1, 0).length()).toBe(1);
			expect(new Vec3(0, 5, 0).length()).toBe(5);

			expect(new Vec3(1, 0, 1).length()).toBeCloseTo(1.41421, 5);
			expect(new Vec3(5, 5, 5).length()).toBeCloseTo(8.66025, 5);
		});
	});

	describe('distanceToSquared', () => {
		it('returns the squared distance to another Vec3', () => {
			expect(new Vec3().distanceToSquared(new Vec3())).toBe(0);
			expect(new Vec3(1, 2, 3).distanceToSquared(new Vec3(1, 2, 3))).toBe(0);

			expect(new Vec3().distanceToSquared(new Vec3(1, 0, 0))).toBe(1);
			expect(new Vec3().distanceToSquared(new Vec3(5, 0, 0))).toBe(25);

			expect(new Vec3(-1, 0, 0).distanceToSquared(new Vec3())).toBe(1);
			expect(new Vec3(-5, 0, 0).distanceToSquared(new Vec3())).toBe(25);

			expect(new Vec3().distanceToSquared(new Vec3(1, 0, 1))).toBe(2);
			expect(new Vec3().distanceToSquared(new Vec3(5, 5, 5))).toBe(75, 5);

			expect(new Vec3(1, 0, -1).distanceToSquared(new Vec3())).toBe(2);
			expect(new Vec3(-5, 0, 5).distanceToSquared(new Vec3())).toBe(50);
			expect(new Vec3(-5, 0, 5).distanceToSquared(new Vec3(0, 5, 0))).toBe(75);
		});
	});

	describe('scale', () => {
		it('scales the Vec3', () => {
			expect(new Vec3().scale(5)).toEqual({x: 0, y: 0, z: 0});
			expect(new Vec3(1, 2, -3).scale(-3)).toEqual({x: -3, y: -6, z: 9});
		});
	});

	describe('normalize', () => {
		it('normalizes the Vec3', () => {
			expect(new Vec3().normalize()).toEqual({x: 0, y: 0, z: 0});
			expect(new Vec3(1).normalize()).toEqual({x: 1, y: 0, z: 0});
			expect(new Vec3(0, 5).normalize()).toEqual({x: 0, y: 1, z: 0});
			expect(new Vec3(-5, 5).normalize()).toEqual({
				x: -0.7071067811865475,
				y: 0.7071067811865475,
				z: 0
			});
			expect(new Vec3(5, 5, -5).normalize()).toEqual({
				x: 0.5773502691896257,
				y: 0.5773502691896257,
				z: -0.5773502691896257
			});
		});
	});

	describe('copy', () => {
		it('copies values from another Vec3', () => {
			expect(new Vec3().copy(new Vec3(1, 2, 3))).toEqual({x: 1, y: 2, z: 3});
		});
	});

	describe('rotateByQuaternion', () => {
		it('rotates the Vec3 by a Quaternion', () => {
			const unitQuaternion = new Quaternion();
			const deg90X = new Quaternion(1, 0, 0, 1);
			const deg90Y = new Quaternion(0, 1, 0, 1);

			expect(
				new Vec3(1, 0, 0).rotateByQuaternion(unitQuaternion).x
			).toBeCloseTo(1, 5);
			expect(
				new Vec3(1, 0, 0).rotateByQuaternion(unitQuaternion).y
			).toBeCloseTo(0, 5);
			expect(
				new Vec3(1, 0, 0).rotateByQuaternion(unitQuaternion).z
			).toBeCloseTo(0, 5);

			expect(new Vec3(1, 0, 0).rotateByQuaternion(deg90X).x).toBeCloseTo(1, 5);
			expect(new Vec3(1, 0, 0).rotateByQuaternion(deg90X).y).toBeCloseTo(0, 5);
			expect(new Vec3(1, 0, 0).rotateByQuaternion(deg90X).z).toBeCloseTo(0, 5);

			expect(new Vec3(1, 0, 0).rotateByQuaternion(deg90Y).x).toBeCloseTo(0, 5);
			expect(new Vec3(1, 0, 0).rotateByQuaternion(deg90Y).y).toBeCloseTo(0, 5);
			expect(new Vec3(1, 0, 0).rotateByQuaternion(deg90Y).z).toBeCloseTo(-1, 5);
		});
	});
});
