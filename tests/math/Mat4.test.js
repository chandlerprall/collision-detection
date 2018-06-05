import Mat3 from '../../src/math/Mat3';
import Mat4 from '../../src/math/Mat4';
import Quaternion from '../../src/math/Quaternion';
import Vec3 from '../../src/math/Vec3';

describe('Mat4', () => {
	describe('constructor', () => {
		it('defaults to an Identity matrix', () => {
			expect(new Mat4()).toEqual({
				e00: 1,
				e01: 0,
				e02: 0,
				e03: 0,
				e10: 0,
				e11: 1,
				e12: 0,
				e13: 0,
				e20: 0,
				e21: 0,
				e22: 1,
				e23: 0,
				e30: 0,
				e31: 0,
				e32: 0,
				e33: 1
			});
		});
	});

	describe('setTranslationFromVec3', () => {
		expect(new Mat4().setTranslationFromVec3(new Vec3(1, 2, 3))).toEqual({
			e00: 1,
			e01: 0,
			e02: 0,
			e03: 1,
			e10: 0,
			e11: 1,
			e12: 0,
			e13: 2,
			e20: 0,
			e21: 0,
			e22: 1,
			e23: 3,
			e30: 0,
			e31: 0,
			e32: 0,
			e33: 1
		});
	});

	describe('setRotationFromQuaternion', () => {
		it('builds the 3x3 rotation matrix from a quaternion', () => {
			expect(
				new Mat4().setRotationFromQuaternion(new Quaternion(0, 1, 0, 1))
			).toEqual({
				e00: 2.220446049250313e-16,
				e01: 0,
				e02: 0.9999999999999998,
				e03: 0,
				e10: 0,
				e11: 1,
				e12: 0,
				e13: 0,
				e20: -0.9999999999999998,
				e21: 0,
				e22: 2.220446049250313e-16,
				e23: 0,
				e30: 0,
				e31: 0,
				e32: 0,
				e33: 1
			});
		});
	});

	describe('getRotationMatrix', () => {
		it('returns a Mat3', () => {
			expect(new Mat4().getRotationMatrix()).toBeInstanceOf(Mat3);
		});

		it('returns the correct values', () => {
			const mat4 = new Mat4()
				.setRotationFromQuaternion(new Quaternion(1, 2, 3, 1))
				.setTranslationFromVec3(4, 5, 6);
			const mat3 = mat4.getRotationMatrix();

			expect(mat4).toMatchObject(mat3);
		});
	});

	describe('getTranslation', () => {
		it('returns a Vec3', () => {
			expect(new Mat4().getTranslation()).toBeInstanceOf(Vec3);
		});

		it('returns the correct values', () => {
			expect(
				new Mat4().setTranslationFromVec3(new Vec3(4, 5, 6)).getTranslation()
			).toEqual({
				x: 4,
				y: 5,
				z: 6
			});
		});
	});
});
