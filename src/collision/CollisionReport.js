import Vec3 from '../math/Vec3';

/**
 * @class CollisionReport
 * @property {number} depth how deep the shapes overlap
 * @property {Vec3} worldNormal world coordinates normal (separation vector) of the collision
 * @property {Vec3} worldPoint world coordinates location of the contact
 * @property {Vec3} pointOnA point representing the collision on first shape's boundary, mapped to the shape's frame
 * @property {Vec3} pointOnB point representing the collision on second shape's boundary, mapped to the shape's frame
 */
class CollisionReport {
	constructor() {
		this.depth = 0;
		this.worldNormal = new Vec3();
		this.worldPoint = new Vec3();
		this.pointOnA = new Vec3();
		this.pointOnB = new Vec3();
	}
}

export default CollisionReport;
