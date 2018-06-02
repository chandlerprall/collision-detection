import * as index from '../../src/collision';
import AabbAabb from '../../src/collision/AabbAabb';
import SphereSphere from '../../src/collision/SphereSphere';

describe('collision/index.test.js', () => {
	describe('exports', () => {
		it('exports AabbAabb', () => {
			expect(index.AabbAabb).toBe(AabbAabb);
		});

		it('exports SphereSphere', () => {
			expect(index.SphereSphere).toBe(SphereSphere);
		});
	});
});
