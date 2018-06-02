class Quaternion {
	/**
	 * @constructs
	 * @memberOf collision-detection.math
	 *
	 * @description Quaternion representation; its methods assume and enforce it to be a unit quaternion
	 * ```
	 * import {math} from 'collision-detection';
	 * const {Quaternion} = math;
	 *
	 * // or
	 *
	 * import {Quaternion} from 'collision-detection';
	 * ```
	 *
	 * @param {number} [x=0]
	 * @param {number} [y=0]
	 * @param {number} [z=0]
	 * @param {number} [w=1]
	 */
	constructor(x = 0, y = 0, z = 0, w = 1) {
		this.x = x;
		this.y = y;
		this.z = z;
		this.w = w;

		this.normalize();
	}

	/**
	 * Sets all members of this {@link Quaternion} and normalizes ({@link Quaternion#normalize})
	 * @param {number} x
	 * @param {number} y
	 * @param {number} z
	 * @param {number} w
	 * @return {Quaternion} the modified {@link Quaternion}, for chaining
	 */
	set(x, y, z, w) {
		this.x = x;
		this.y = y;
		this.z = z;
		this.w = w;

		return this.normalize();
	}

	/**
	 * Sets this {@link Quaternion}'s members to the values from another {@link Quaternion}
	 * @param {Quaternion} quat the {@link Quaternion} to copy
	 * @returns {Quaternion} the modified {@link Quaternion}, for chaining
	 */
	copy(quat) {
		this.x = quat.x;
		this.y = quat.y;
		this.z = quat.z;
		this.w = quat.w;

		return this;
	}

	/**
	 * Changes this {@link Quaternion} to a `unit quaternion`, maintaining the ratio between its members but changing its magnitude to 1
	 * @returns {Quaternion} the modified {@link Quaternion}, for chaining
	 */
	normalize() {
		const length = Math.sqrt(
			this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
		);
		const normalizer = 1 / length;

		if (normalizer !== Infinity) {
			this.x *= normalizer;
			this.y *= normalizer;
			this.z *= normalizer;
			this.w *= normalizer;
		}

		return this;
	}

	/**
	 * Inverts this {@link Quaternion}, assumes it is already normalized
	 * @returns {Quaternion} the modified {@link Quaternion}, for chaining
	 */
	invert() {
		this.x *= -1;
		this.y *= -1;
		this.z *= -1;

		return this;
	}
}

export default Quaternion;
