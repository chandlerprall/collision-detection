class Sphere {
	/**
	 * A sphere having a given radius.
	 * @constructs
	 * @memberOf collision-detection.shapes
	 *
	 * @description
	 * ```
	 * import {shapes} from 'collision-detection';
	 * const {Sphere} = shapes;
	 *
	 * // or
	 *
	 * import {Sphere} from 'collision-detection';
	 * ```
	 *
	 * @param {number} [radius=1] radius of the sphere
	 *
	 * @property {number} radius radius of the sphere
	 */
	constructor(radius = 1) {
		this.radius = radius;
	}

	/**
	 * Updates the passed {@link AABB} to fit around this {@link Sphere}.
	 * @param {AABB} aabb the {@link AABB} to update
	 */
	updateAabb(aabb) {
		aabb.halfWidth = this.radius;
		aabb.halfHeight = this.radius;
		aabb.halfLength = this.radius;
	}
}

export default Sphere;
