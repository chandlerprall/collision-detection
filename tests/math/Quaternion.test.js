import Quaternion from '../../src/math/Quaternion';

describe('Quaternion', () => {
	describe('constructor', () => {
		it('defaults components to ( 0, 0, 0, 1 )', () => {
			expect(new Quaternion()).toEqual({x: 0, y: 0, z: 0, w: 1});
		});

		it('accepts and applies x, y, z, and w values and normalizes', () => {
			expect(new Quaternion(1, 2, 3, 4)).toEqual({
				x: 0.18257418583505536,
				y: 0.3651483716701107,
				z: 0.5477225575051661,
				w: 0.7302967433402214
			});
		});
	});

	describe('set', () => {
		it('sets the Quaternion members and normalizes', () => {
			const quat = new Quaternion();
			quat.set(1, 2, 3, 4);
			expect(quat).toEqual({
				x: 0.18257418583505536,
				y: 0.3651483716701107,
				z: 0.5477225575051661,
				w: 0.7302967433402214
			});
		});
	});

	describe('normalize', () => {
		it('normalizes the Quaternion', () => {
			expect(new Quaternion().normalize()).toEqual({x: 0, y: 0, z: 0, w: 1});
			expect(new Quaternion(0, 0, 0, 2).normalize()).toEqual({
				x: 0,
				y: 0,
				z: 0,
				w: 1
			});
			expect(new Quaternion(0, 5, 0, 0).normalize()).toEqual({
				x: 0,
				y: 1,
				z: 0,
				w: 0
			});
			expect(new Quaternion(-5, 0, 0, 5).normalize()).toEqual({
				x: -0.7071067811865476,
				y: 0,
				z: 0,
				w: 0.7071067811865476
			});
		});

		it('does not normalize if the quaternion is invalid', () => {
			expect(new Quaternion(0, 0, 0, 0)).toEqual({x: 0, y: 0, z: 0, w: 0});
		});
	});

	describe('copy', () => {
		it('copies values from another Quaternion', () => {
			expect(new Quaternion().copy(new Quaternion(1, 2, 3, 4))).toEqual({
				x: 0.18257418583505536,
				y: 0.3651483716701107,
				z: 0.5477225575051661,
				w: 0.7302967433402214
			});
		});
	});

	describe('invert', () => {
		it('inverts the quaternion', () => {
			expect(new Quaternion().invert()).toEqual({x: -0, y: -0, z: -0, w: 1});
			expect(new Quaternion(1, 0, 0, 1).invert()).toEqual({
				x: -0.7071067811865475,
				y: -0,
				z: -0,
				w: 0.7071067811865475
			});
			expect(new Quaternion(-1, 2, 3, 1).invert()).toEqual({
				x: 0.2581988897471611,
				y: -0.5163977794943222,
				z: -0.7745966692414833,
				w: 0.2581988897471611
			});
		});
	});
});
