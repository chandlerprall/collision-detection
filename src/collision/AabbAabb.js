/**
 * @namespace AabbAabb
 * @memberOf collision-detection.collision
 *
 * @description Module for detecting collisions between {@link AABB}s
 * ```
 * import {collision} from 'collision-detection';
 * const {AabbAabb} = collision;
 *
 * // or
 *
 * import {AabbAaabb} from 'collision-detection';
 * ```
 */
const AabbAabb = {
	/**
	 * Determines if two Axis Aligned Bounding Boxes are overlapping
	 *
	 * @function isColliding
	 * @memberOf collision-detection.collision.AabbAabb
	 * @param {AABB} aabb_a first AABB
	 * @param {Vec3} aabb_a_position world position of first AABB
	 * @param {AABB} aabb_b second AABB
	 * @param {Vec3} aabb_b_position world position of second AABB
	 * @returns {boolean} whether or not the AABBs overlap
	 */
	isColliding: function aabbAabbIsColliding(
		aabb_a,
		aabb_a_position,
		aabb_b,
		aabb_b_position
	) {
		if (aabb_a_position.x + aabb_a.max.x < aabb_b_position.x + aabb_b.min.x)
			return false;

		if (aabb_a_position.y + aabb_a.max.y < aabb_b_position.y + aabb_b.min.y)
			return false;

		if (aabb_a_position.z + aabb_a.max.z < aabb_b_position.z + aabb_b.min.z)
			return false;

		if (aabb_a_position.x + aabb_a.min.x > aabb_b_position.x + aabb_b.max.x)
			return false;

		if (aabb_a_position.y + aabb_a.min.y > aabb_b_position.y + aabb_b.max.y)
			return false;

		if (aabb_a_position.z + aabb_a.min.z > aabb_b_position.z + aabb_b.max.z)
			return false;

		return true;
	}
};

export default AabbAabb;
