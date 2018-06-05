import * as index from '../../src/shapes';
import Box from '../../src/shapes/Box';
import Sphere from '../../src/shapes/Sphere';

describe('shapes/index.test.js', () => {
	describe('exports', () => {
		it('exports Box', () => {
			expect(index.Box).toBe(Box);
		});

		it('exports Sphere', () => {
			expect(index.Sphere).toBe(Sphere);
		});
	});
});
