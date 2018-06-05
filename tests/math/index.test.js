import * as index from '../../src/math';
import Quaternion from '../../src/math/Quaternion';
import Mat3 from '../../src/math/Mat3';
import Mat4 from '../../src/math/Mat4';
import Vec3 from '../../src/math/Vec3';

describe('math/index.test.js', () => {
	describe('exports', () => {
		it('exports Quaternion', () => {
			expect(index.Quaternion).toBe(Quaternion);
		});

		it('exports Mat3', () => {
			expect(index.Mat3).toBe(Mat3);
		});

		it('exports Mat4', () => {
			expect(index.Mat4).toBe(Mat4);
		});

		it('exports Vec3', () => {
			expect(index.Vec3).toBe(Vec3);
		});
	});
});
