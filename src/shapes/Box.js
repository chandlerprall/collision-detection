import Vec3 from '../math/Vec3';

class Box {
	/**
	 * A box with width, height, and length dimensions
	 * @constructs
	 * @memberOf collision-detection.shapes
	 *
	 * @description
	 * ```
	 * import {shapes} from 'collision-detection';
	 * const {Box} = shapes;
	 *
	 * // or
	 *
	 * import {Box} from 'collision-detection';
	 * ```
	 *
	 * @param {number} [width=1] width of the box
	 * @param {number} [height=1] height of the box
	 * @param {number} [length=1] length of the box
	 *
	 * @property {number} halfWidth half of the Box's width
	 * @property {number} halfHeight half of the Box's height
	 * @property {number} halfLength half of the Box's length
	 */
	constructor(width = 1, height = 1, length = 1) {
		this.halfWidth = width / 2;
		this.halfHeight = height / 2;
		this.halfLength = length / 2;
	}

	/**
	 * Updates the passed {@link AABB} to fit around this {@link Box} with the applied {@link Quaternion} rotation.
	 * @param {AABB} aabb the {@link AABB} to update
	 * @param {Mat4} transform the {@link Mat4} transform
	 */
	updateAabb(aabb, transform) {
		const halfExtents = new Vec3(
			this.halfWidth,
			this.halfHeight,
			this.halfLength
		);
		const absRotationMat3 = transform.getRotationMatrix().makeAbsolute();
		const center = transform.getTranslation();
		const extent = new Vec3(
			halfExtents.x * absRotationMat3.e00 +
				halfExtents.y * absRotationMat3.e10 +
				halfExtents.z * absRotationMat3.e20,
			halfExtents.x * absRotationMat3.e01 +
				halfExtents.y * absRotationMat3.e11 +
				halfExtents.z * absRotationMat3.e21,
			halfExtents.x * absRotationMat3.e02 +
				halfExtents.y * absRotationMat3.e12 +
				halfExtents.z * absRotationMat3.e22
		);

		aabb.min.sub(center, extent);
		aabb.max.add(center, extent);
	}
}

export default Box;
