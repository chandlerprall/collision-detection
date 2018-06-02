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
	 * @param {number} [width=1]
	 * @param {number} [height=1]
	 * @param {number} [length=1]
	 *
	 * @property halfWidth {number} half of the AABB's width
	 * @property halfHeight {number} half of the AABB's height
	 * @property halfLength {number} half of the AABB's length
	 */
	constructor(width = 1, height = 1, length = 1) {
		this.halfWidth = width / 2;
		this.halfHeight = height / 2;
		this.halfLength = length / 2;
	}

	/**
	 * Updates the passed {@link AABB} to fit around this {@link AABB}. An {@link AABB} perfectly contains another {@link AABB}, so this method copies the instance {@link AABB} into the one passed.
	 * @param {AABB} aabb the {@link AABB} to update
	 */
	updateAabb(aabb) {
		aabb.halfWidth = this.halfWidth;
		aabb.halfHeight = this.halfHeight;
		aabb.halfLength = this.halfLength;
	}
}

export default AABB;
