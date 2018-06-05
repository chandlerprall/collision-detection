import Vec3 from '../math/Vec3';

class AABB {
	/**
	 * An Axis-Aligned Bounding Box, representing another shape's size as min/max values on the X, Y, and Z coordinate axes.
	 * @constructs
	 * @memberOf collision-detection.shapes
	 *
	 * @description
	 * ```
	 * import {shapes} from 'collision-detection';
	 * const {AABB} = shapes;
	 *
	 * // or
	 *
	 * import {AABB} from 'collision-detection';
	 * ```
	 *
	 * @param {number} [min=Vec3(-0.5, -0.5, -0.5)]
	 * @param {number} [max=Vec3(0.5, 0.5, 0.5)]
	 *
	 * @property min {Vec3} minimum extent of the bounding box
	 * @property max {Vec3} maximum extent of the bounding box
	 */
	constructor(min = new Vec3(-0.5, -0.5, -0.5), max = new Vec3(0.5, 0.5, 0.5)) {
		this.min = min;
		this.max = max;
	}

	/**
	 * Updates the passed {@link AABB} to fit around this {@link AABB}. An {@link AABB} perfectly contains another {@link AABB}, so this method copies the instance {@link AABB} into the one passed.
	 * @param {AABB} aabb the {@link AABB} to update
	 */
	updateAabb(aabb) {
		aabb.min.copy(this.min);
		aabb.max.copy(this.max);
	}
}

export default AABB;
