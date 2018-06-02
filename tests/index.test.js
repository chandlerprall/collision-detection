import * as index from '../src';
import * as collision from '../src/collision';
import * as math from '../src/math';
import * as shapes from '../src/shapes';

const {AabbAabb, SphereSphere} = collision;
const {Quaternion, Vec3} = math;
const {AABB, Sphere} = shapes;

describe('src/index.test.js', () => {
	describe('exports', () => {
		describe('collision', () => {
			it('exports collision', () => {
				expect(index.collision).toBe(collision);
			});

			it('exports AabbAabb', () => {
				expect(index.AabbAabb).toBe(AabbAabb);
			});

			it('exports SphereSphere', () => {
				expect(index.SphereSphere).toBe(SphereSphere);
			});
		});

		describe('math', () => {
			it('exports math', () => {
				expect(index.math).toBe(math);
			});

			it('exports Quaternion', () => {
				expect(index.Quaternion).toBe(Quaternion);
			});

			it('exports Vec3', () => {
				expect(index.Vec3).toBe(Vec3);
			});
		});

		describe('shapes', () => {
			it('exports shapes', () => {
				expect(index.shapes).toBe(shapes);
			});

			it('exports AABB', () => {
				expect(index.AABB).toBe(AABB);
			});

			it('exports Sphere', () => {
				expect(index.Sphere).toBe(Sphere);
			});
		});
	});
});
