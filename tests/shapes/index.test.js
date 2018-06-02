import * as index from '../../src/shapes';
import Sphere from '../../src/shapes/Sphere';

describe('shapes/index.test.js', () => {
	describe('exports', () => {
		it('exports Sphere', () => {
			expect(index.Sphere).toBe(Sphere);
		});
	});
});
