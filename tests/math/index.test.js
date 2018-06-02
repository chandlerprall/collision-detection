import * as index from '../../src/math';
import Quaternion from '../../src/math/Quaternion';
import Vec3 from '../../src/math/Vec3';

describe('math/index.test.js', () => {
	describe('exports', () => {
		it('exports Quaternion', () => {
			expect(index.Quaternion).toBe(Quaternion);
		});

		it('exports Vec3', () => {
			expect(index.Vec3).toBe(Vec3);
		});
	});
});
