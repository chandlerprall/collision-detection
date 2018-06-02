import Vec3 from '../math/Vec3';

/**
 * @class CollisionReport
 * @property {number} depth how deep the shapes overlap
 * @property {Vec3} world_normal world coordinates normal (separation vector) of the collision
 * @property {Vec3} world_point world coordinates location of the contact
 * @property {Vec3} point_on_a point representing the collision on first shape's boundary, mapped to the shape's frame
 * @property {Vec3} point_on_b point representing the collision on second shape's boundary, mapped to the shape's frame
 */
class CollisionReport {
	constructor() {
		this.depth = 0;
		this.world_normal = new Vec3();
		this.world_point = new Vec3();
		this.point_on_a = new Vec3();
		this.point_on_b = new Vec3();
	}
}

export default CollisionReport;
