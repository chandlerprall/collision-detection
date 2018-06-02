import CollisionReport from './CollisionReport';
import Quaternion from '../math/Quaternion';

const quat = new Quaternion();

/**
 * @namespace SphereSphere
 * @memberOf collision-detection.collision
 *
 * @description Module for detecting collisions between {@link Sphere}s
 * ```
 * import {collision} from 'collision-detection';
 * const {SphereSphere} = collision;
 *
 * // or
 *
 * import {SphereSphere} from 'collision-detection';
 * ```
 */
const SphereSphere = {
	/**
	 * Determines if two spheres are overlapping
	 *
	 * @function isColliding
	 * @memberOf collision-detection.collision.SphereSphere
	 * @param {Sphere} sphere_a first sphere
	 * @param {Vec3} sphere_a_position world position of first sphere
	 * @param {Sphere} sphere_b second sphere
	 * @param {Vec3} sphere_b_position world position of second sphere
	 * @returns {boolean} whether or not the spheres overlap
	 */
	isColliding: function sphereSphereIsColliding(
		sphere_a,
		sphere_a_position,
		sphere_b,
		sphere_b_position
	) {
		const radii = sphere_a.radius + sphere_b.radius;
		const radiiSquared = radii * radii;
		const distanceSquared = sphere_a_position.distanceToSquared(
			sphere_b_position
		);

		return distanceSquared <= radiiSquared;
	},

	/**
	 * Provides details on the overlap between two spheres; if there is no overlap `null` is returned instead.
	 *
	 * @function collide
	 * @memberOf collision-detection.collision.SphereSphere
	 * @param {Sphere} sphere_a first sphere
	 * @param {Vec3} sphere_a_position world position of first sphere
	 * @param {Quaternion} sphere_a_rotation rotation of the first sphere
	 * @param {Sphere} sphere_b second sphere
	 * @param {Vec3} sphere_b_position world position of second sphere
	 * @param {Quaternion} sphere_b_rotation rotation of the second sphere
	 * @returns {CollisionReport|null} a CollisionReport if the spheres overlap, otherwise null
	 */
	collide: function SphereSphereCollide(
		sphere_a,
		sphere_a_position,
		sphere_a_rotation,
		sphere_b,
		sphere_b_position,
		sphere_b_rotation
	) {
		const radii = sphere_a.radius + sphere_b.radius;
		const radiiSquared = radii * radii;
		const distanceSquared = sphere_a_position.distanceToSquared(
			sphere_b_position
		);

		if (distanceSquared > radiiSquared) return null;

		const report = new CollisionReport();

		report.depth = Math.sqrt(distanceSquared) - Math.sqrt(radiiSquared);

		report.world_normal.sub(sphere_b_position, sphere_a_position).normalize();

		report.world_point
			.copy(report.world_normal)
			.scale(sphere_a.radius)
			.addVec3(sphere_a_position);

		// rotate world normal into A's local frame to find local collision point
		quat.copy(sphere_a_rotation).invert();
		report.point_on_a
			.copy(report.world_normal)
			.rotateByQuaternion(quat)
			.scale(sphere_a.radius);

		// rotate world normal into B's local frame to find local collision point
		quat.copy(sphere_b_rotation).invert();
		report.point_on_b
			.copy(report.world_normal)
			.scale(-1)
			.rotateByQuaternion(quat)
			.scale(sphere_b.radius);

		return report;
	}
};

export default SphereSphere;
