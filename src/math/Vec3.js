class Vec3 {
	/**
	 * @constructs
	 * @memberOf collision-detection.math
	 *
	 * @description
	 * ```
	 * import {math} from 'collision-detection';
	 * const {Vec3} = math;
	 *
	 * // or
	 *
	 * import {Vec3} from 'collision-detection';
	 * ```
	 *
	 * @param {number} [x=0]
	 * @param {number} [y=0]
	 * @param {number} [z=0]
	 *
	 * @property {number} x
	 * @property {number} y
	 * @property {number} z
	 *
	 * @description
	 * ```
	 * import {math} from 'collision-detection';
	 * const {Vec3} = math;
	 * ```
	 */
	constructor(x = 0, y = 0, z = 0) {
		this.x = x;
		this.y = y;
		this.z = z;
	}

	/**
	 * Sets all three members of this {@link Vec3}
	 * @param {number} x
	 * @param {number} y
	 * @param {number} z
	 * @return {Vec3} the modified {@link Vec3}, for chaining
	 */
	set(x, y, z) {
		this.x = x;
		this.y = y;
		this.z = z;

		return this;
	}

	/**
	 * Sets this {@link Vec3}'s members by adding together two {@link Vec3}
	 * @param {Vec3} vec3_a
	 * @param {Vec3} vec3_b
	 * @returns {Vec3} the modified {@link Vec3}, for chaining
	 */
	add(vec3_a, vec3_b) {
		this.x = vec3_a.x + vec3_b.x;
		this.y = vec3_a.y + vec3_b.y;
		this.z = vec3_a.z + vec3_b.z;

		return this;
	}

	/**
	 * Sets this {@link Vec3}'s members by adding it with another {@link Vec3}
	 * @param {Vec3} vec3
	 * @returns {Vec3} the modified {@link Vec3}, for chaining
	 */
	addVec3(vec3) {
		this.x += vec3.x;
		this.y += vec3.y;
		this.z += vec3.z;

		return this;
	}

	/**
	 * Sets this {@link Vec3}'s members by subtracting one {@link Vec3} from another
	 * @param {Vec3} vec3_a
	 * @param {Vec3} vec3_b
	 * @returns {Vec3} the modified {@link Vec3}, for chaining
	 */
	sub(vec3_a, vec3_b) {
		this.x = vec3_a.x - vec3_b.x;
		this.y = vec3_a.y - vec3_b.y;
		this.z = vec3_a.z - vec3_b.z;

		return this;
	}

	/**
	 * Sets this {@link Vec3}'s members by subtracting another {@link Vec3} from it
	 * @param {Vec3} vec3
	 * @returns {Vec3} the modified {@link Vec3}, for chaining
	 */
	subVec3(vec3) {
		this.x -= vec3.x;
		this.y -= vec3.y;
		this.z -= vec3.z;

		return this;
	}

	/**
	 * Calculates the squared length of this {@link Vec3}
	 * @returns {number}
	 */
	lengthSquared() {
		return this.x * this.x + this.y * this.y + this.z * this.z;
	}

	/**
	 * Calculates the length of this {@link Vec3}
	 * @returns {number}
	 */
	length() {
		return Math.sqrt(this.lengthSquared());
	}

	/**
	 * Calculates the squared distance between this and another {@link Vec3}
	 * @param {Vec3} vec3
	 * @returns {number}
	 */
	distanceToSquared(vec3) {
		const x = this.x - vec3.x;
		const y = this.y - vec3.y;
		const z = this.z - vec3.z;

		return x * x + y * y + z * z;
	}

	/**
	 * Scales this {@link Vec3} by `scalar`
	 * @param {number} scalar the value to scale by
	 * @returns {Vec3} the modified {@link Vec3}, for chaining
	 */
	scale(scalar) {
		this.x *= scalar;
		this.y *= scalar;
		this.z *= scalar;

		return this;
	}

	/**
	 * Changes this {@link Vec3} to a `unit vector`, maintaining the ratio between its members but changing its magnitude to 1
	 * @returns {Vec3} the modified {@link Vec3}, for chaining
	 */
	normalize() {
		const normalizer = 1 / this.length();

		if (normalizer !== Infinity) {
			this.scale(normalizer);
		}

		return this;
	}

	/**
	 * Sets this {@link Vec3}'s members to the values from another {@link Vec3}
	 * @param {Vec3} vec3 the {@link Vec3} to copy
	 * @returns {Vec3} the modified {@link Vec3}, for chaining
	 */
	copy(vec3) {
		this.x = vec3.x;
		this.y = vec3.y;
		this.z = vec3.z;

		return this;
	}

	/**
	 * Rotates this {@link Vec3} by the passed {@link Quaternion}
	 * @param {Quaternion} quat the {@link Quaternion} to apply rotation from
	 * @returns {Vec3} the modified {@link Vec3}, for chaining
	 */
	rotateByQuaternion(quat) {
		const ix = quat.w * this.x + quat.y * this.z - quat.z * this.y;
		const iy = quat.w * this.y + quat.z * this.x - quat.x * this.z;
		const iz = quat.w * this.z + quat.x * this.y - quat.y * this.x;
		const iw = -quat.x * this.x - quat.y * this.y - quat.z * this.z;

		this.x = ix * quat.w + iw * -quat.x + iy * -quat.z - iz * -quat.y;
		this.y = iy * quat.w + iw * -quat.y + iz * -quat.x - ix * -quat.z;
		this.z = iz * quat.w + iw * -quat.z + ix * -quat.y - iy * -quat.x;

		return this;
	}
}

export default Vec3;
