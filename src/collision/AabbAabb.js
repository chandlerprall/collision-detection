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
		if (
			aabb_a_position.x + aabb_a.halfWidth <
			aabb_b_position.x - aabb_b.halfWidth
		)
			return false;

		if (
			aabb_a_position.y + aabb_a.halfHeight <
			aabb_b_position.y - aabb_b.halfHeight
		)
			return false;

		if (
			aabb_a_position.z + aabb_a.halfLength <
			aabb_b_position.z - aabb_b.halfLength
		)
			return false;

		if (
			aabb_a_position.x - aabb_a.halfWidth >
			aabb_b_position.x + aabb_b.halfWidth
		)
			return false;

		if (
			aabb_a_position.y - aabb_a.halfHeight >
			aabb_b_position.y + aabb_b.halfHeight
		)
			return false;

		if (
			aabb_a_position.z - aabb_a.halfLength >
			aabb_b_position.z + aabb_b.halfLength
		)
			return false;

		return true;
	}
};

export default AabbAabb;
