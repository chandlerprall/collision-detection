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
	 * @param {Mat4} transform the {@link Mat4} transform
	 */
	updateAabb(aabb, transform) {
		const translation = transform.getTranslation();

		aabb.min.set(-this.radius, -this.radius, -this.radius);
		aabb.max.set(this.radius, this.radius, this.radius);

		aabb.min.addVec3(translation);
		aabb.max.addVec3(translation);
	}
}

export default Sphere;
