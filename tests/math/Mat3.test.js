import Quaternion from '../../src/math/Quaternion';
import Mat3 from '../../src/math/Mat3';

describe('Mat3', () => {
	describe('constructor', () => {
		it('defaults to an Identity matrix', () => {
			expect(new Mat3()).toEqual({
				e00: 1,
				e01: 0,
				e02: 0,
				e10: 0,
				e11: 1,
				e12: 0,
				e20: 0,
				e21: 0,
				e22: 1
			});
		});
	});

	describe('fromQuaternion', () => {
		it('builds a rotation matrix from a quaternion', () => {
			expect(new Mat3().fromQuaternion(new Quaternion(0, 1, 0, 1))).toEqual({
				e00: 2.220446049250313e-16,
				e01: 0,
				e02: 0.9999999999999998,
				e10: 0,
				e11: 1,
				e12: 0,
				e20: -0.9999999999999998,
				e21: 0,
				e22: 2.220446049250313e-16
			});
		});
	});

	describe('makeAbsolute', () => {
		it('makes all matrix components absolute values', () => {
			expect(
				new Mat3().fromQuaternion(new Quaternion(-1, -2, -3, 1)).makeAbsolute()
			).toEqual({
				e00: 0.733333333333333,
				e01: 0.6666666666666665,
				e02: 0.1333333333333333,
				e10: 0.1333333333333333,
				e11: 0.33333333333333304,
				e12: 0.9333333333333331,
				e20: 0.6666666666666665,
				e21: 0.6666666666666665,
				e22: 0.3333333333333335
			});
		});
	});
});
